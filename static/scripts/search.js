/* 
  The MIT License (MIT)

  Copyright (c) 2017-2018 Vincent Prouillet

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

function debounce(func, wait) {
	let timeout;

	return function () {
		let context = this;
		let args = arguments;
		clearTimeout(timeout);

		timeout = setTimeout(function () {
			timeout = null;
			func.apply(context, args);
		}, wait);
	};
}

// Taken from mdbook
// The strategy is as follows:
// First, assign a value to each word in the document:
//  Words that correspond to search terms (stemmer aware): 40
//  Normal words: 2
//  First word in a sentence: 8
// Then use a sliding window with a constant number of words and count the
// sum of the values of the words within the window. Then use the window that got the
// maximum sum. If there are multiple maximas, then get the last one.
// Enclose the terms in <b>.
function makeTeaser(body, terms) {
	let TERM_WEIGHT = 40;
	let NORMAL_WORD_WEIGHT = 2;
	let FIRST_WORD_WEIGHT = 8;
	let TEASER_MAX_WORDS = 30;

	let stemmedTerms = terms.map(function (w) {
		return elasticlunr.stemmer(w.toLowerCase());
	});

	let index = 0;
	let termFound = false;
	let weighted = []; // contains elements of ["word", weight, index_in_document]

	// split in sentences, then words
	let sentences = body.toLowerCase().split(". ");

	for (let i in sentences) {
		let words = sentences[i].split(" ");
		let value = FIRST_WORD_WEIGHT;

		for (let j in words) {
			let word = words[j];

			if (word.length > 0) {
				for (let k in stemmedTerms) {
					if (elasticlunr.stemmer(word).startsWith(stemmedTerms[k])) {
						value = TERM_WEIGHT;
						termFound = true;
					}
				}
				weighted.push([word, value, index]);
				value = NORMAL_WORD_WEIGHT;
			}

			index += word.length;
			index += 1;  // ' ' or '.' if last word in sentence
		}

		index += 1;  // because we split at a two-char boundary '. '
	}

	if (weighted.length === 0) {
		return body;
	}

	let windowWeights = [];
	let windowSize = Math.min(weighted.length, TEASER_MAX_WORDS);
	// We add a window with all the weights first
	let curSum = 0;
	for (let i = 0;i < windowSize;i++) {
		curSum += weighted[i][1];
	}
	windowWeights.push(curSum);

	for (let i = 0;i < weighted.length - windowSize;i++) {
		curSum -= weighted[i][1];
		curSum += weighted[i + windowSize][1];
		windowWeights.push(curSum);
	}

	// If we didn't find the term, just pick the first window
	let maxSumIndex = 0;
	if (termFound) {
		let maxFound = 0;
		// backwards
		for (let i = windowWeights.length - 1;i >= 0;i--) {
			if (windowWeights[i] > maxFound) {
				maxFound = windowWeights[i];
				maxSumIndex = i;
			}
		}
	}

	let teaser = [];
	let startIndex = weighted[maxSumIndex][2];
	for (let i = maxSumIndex;i < maxSumIndex + windowSize;i++) {
		let word = weighted[i];
		if (startIndex < word[2]) {
			// missing text from index to start of `word`
			teaser.push(body.substring(startIndex, word[2]));
			startIndex = word[2];
		}

		// add <em/> around search terms
		if (word[1] === TERM_WEIGHT) {
			teaser.push("<b>");
		}

		startIndex = word[2] + word[0].length;
		teaser.push(body.substring(word[2], startIndex));

		if (word[1] === TERM_WEIGHT) {
			teaser.push("</b>");
		}
	}

	teaser.push("…");
	return teaser.join("");
}

function formatSearchResultItem(item, terms) { 
	return '<div class="search-results__item">'
		+ `<a href="${item.ref.replace("/content/no/", "/content/")}">${item.doc.title}</a>`
		+ `<div>${makeTeaser(item.doc.body, terms)}</div>`
		+ '</div>';
}

function initSearch() {
	let MAX_ITEMS = 10;
	let $searchInput = document.getElementById("search-input");
	let $searchResults = document.getElementById("search-results");
	let $searchResultsItems = document.getElementById("search-results__items");

	let currentTerm = "";
	let index = elasticlunr.Index.load(window.searchIndex);

	$searchInput.addEventListener("input", debounce(function () {
		let term = $searchInput.value.trim();
		if (term === currentTerm || !index) {
			return;
		}

		$searchResults.style.display = term === "" ? "none" : "block";
		$searchResultsItems.innerHTML = "";
		if (term === "") {
			return;
		}

		currentTerm = term;
		let terms = term.split(" ").filter(Boolean);

		let results = index.search(term, {
			bool: "AND",
			fields: {
				title: { boost: 3 },
				body: { boost: 1 },
			}
		});

		results.forEach(function (r) {
			r.score = boostScore(r, terms);
		});

		results.sort(function (a, b) {
			return b.score - a.score;
		});

		if (results.length === 0) {
			$searchResults.style.display = "none";
			return;
		}

		for (let i = 0; i < Math.min(results.length, MAX_ITEMS); i++) {
			let item = document.createElement("li");
			item.innerHTML = formatSearchResultItem(results[i], term.split(" "));
			$searchResultsItems.appendChild(item);
		}
	}, 150));
}


function boostScore(result, terms) {
	let text = (result.doc.title + " " + result.doc.body).toLowerCase();

	let stemmedTerms = terms.map(function (w) {
		return elasticlunr.stemmer(w.toLowerCase());
	});

	// Check if all terms exist
	let allPresent = stemmedTerms.every(function (term) {
		return text.includes(term);
	});

	// Check if terms appear in order
	let inOrder = false;
	if (allPresent) {
		let pos = -1;
		inOrder = stemmedTerms.every(function (term) {
			let found = text.indexOf(term, pos + 1);
			if (found === -1) {
				return false;
			}

			pos = found;
			return true;
		});
	}

	let boostedScore = result.score;

	if (allPresent) {
		boostedScore *= 2;
	}

	if (inOrder) {
		boostedScore *= 2;
	}

	return boostedScore;
}


if (document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)
) {
	initSearch();
} else {
	document.addEventListener("DOMContentLoaded", initSearch);
}