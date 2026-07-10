// Remove the disabled attribute from checkboxes so they're easier to see.
for (const element of Array.from(document.getElementsByTagName('input'))) {
    if (element.type === 'checkbox' && element.disabled) {
        element.style.pointerEvents = 'none';
        element.removeAttribute('disabled');
    }
}

// Remove whitespace from nav elements so they are :empty.
for (const element of Array.from(document.getElementsByTagName('nav'))) {
    element.innerHTML = element.innerHTML.trim();
}

// Remove whitespace from menu elements so they are :empty.
for (const element of Array.from(document.getElementsByTagName('menu'))) {
    element.innerHTML = element.innerHTML.trim();
}

// Remove whitespace from article elements so they are :empty.
for (const element of Array.from(document.getElementsByTagName('article'))) {
	for (const hidden of document.getElementsByClassName('visibility--hidden')) {
		element.parentNode.insertBefore(hidden, element);
	}
    element.innerHTML = element.innerHTML.trim();
}

// Copy multi-line code elements when they are clicked. Flash the bg.
for (const element of Array.from(document.getElementsByTagName('pre'))) {
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(element.innerText.trim()).then(() => {
            element.classList.add('copied');
            setTimeout(() => {
                element.classList.remove('copied');
            }, 500);
        });
    })
}

// Copy inline code elements when they are clicked. Flash the bg.
for (const element of Array.from(document.getElementsByTagName('code'))) {
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(element.innerText.trim()).then(() => {
            element.classList.add('copied');
            setTimeout(() => {
                element.classList.remove('copied');
            }, 500);
        });
    })
}

let i, j = 0; // Allow checking the list items.
for (const element of Array.from(document.getElementsByClassName("checklist-wrapper"))) {
	for (const inputElement of element.getElementsByTagName("input")) {
		inputElement.id = `a${++i}-${++j}`;
		inputElement.style.pointerEvents = 'auto';
		inputElement.parentElement.style.userSelect = 'none';
		const siblings = Array.from(inputElement.parentElement.children)
			.filter(c => c.id !== inputElement.id).map(c => c.outerHTML);
		const labelHTML = `<label for='a${i}-${j}'>${inputElement.nextSibling.textContent}</label>`;
		inputElement.parentElement.innerHTML = `${inputElement.outerHTML}${labelHTML}${siblings}`;	
	}
}

// Let academic tables have horizontal spacers dividing rows.
for (const element of Array.from(document.getElementsByTagName('td'))) {
    if (element.textContent.includes('---')) {
		element.classList.add('spacer');
		element.textContent = null;
	};
}

// Add target="_blank" to links in footnotes.
for (const element of Array.from(document.querySelectorAll('.footnotes-list a'))) {
	if (!element.href.startsWith("#") && !element.href.includes("/#")) {
		element.setAttribute('target', '_blank');
	}
}

// Remove defer classes from elements after the page has loaded.
for (const element of Array.from(document.getElementsByClassName('defer'))) {
    element.classList.remove('defer');
}

// Remove async classes from elements after the page has loaded.
for (const element of Array.from(document.getElementsByClassName('async'))) {
    element.classList.remove('async');
}

// Implementation of the Durstenfeld shuffle.
Object.defineProperty(Array.prototype, 'aShuffle', {
    value: function() { 
		for (let i = this.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this[i], this[j]] = [this[j], this[i]];
		}

		return this;
	}
});

// Select a random element from the array or null.
Object.defineProperty(Array.prototype, 'aRandom', {
    value: function() { 
		return this.length > 0 ? this[Math.floor(Math.random() * this.length)] : null;
	}
});

// Add a class to an element and return the element.
Object.defineProperty(HTMLDivElement.prototype, 'aWithClass', {
    value: function(value) { 
		!this.classList.contains(value) ? this.classList.add(value) : void(0);
		return this;
	}
});

// Toggle a class to an element and return the element.
Object.defineProperty(HTMLDivElement.prototype, 'aToggleClass', {
    value: function(value, match = undefined) { 
		if (match === true) {
			this.classList.add(value);
		} else if (match === false) {
			this.classList.remove(value);
		} else {
			this.classList.contains(value) ? this.classList.remove(value) : this.classList.add(value);
		}
		
		return this;
	}
});

// Update the word count with the selected word count.
document.addEventListener("selectionchange", () => {
	const selection = window.getSelection().toString().trim();
	const wordCount = selection.split(/\s+/).length;
	if (wordCount > 1) {
		document.getElementById("word-count").textContent = wordCount + '*';
	}
});

/* Push a history entry so popstate is called.
history.pushState(null, "", location.href);

// Go to the last path segment on browser back.
window.addEventListener("popstate", (e) => {
	// FIXME: this breaks the browser forward button.
	const parent = location.pathname.replace(/\/$/, "").split("/").slice(0, -1).join("/") + "/";
	location.href = parent;
});*/


function generateFlashcards() {
	const flashcardSections = [];	
	for (const wrapper of document.querySelectorAll('.flashcard-wrapper')) {
		const flashcards = [];
		let currentFlashcard = null;
		const dlsTemp = wrapper.querySelectorAll('dl');
		const dls = dlsTemp ? Array.from(dlsTemp) : null;
		for (const element of dls?.flatMap(dl => Array.from(dl.children)) ?? []) {
			if (element.tagName === "DT") {
				if (currentFlashcard) {
					flashcards.push(currentFlashcard);
				}

				const front = element.querySelector("strong")?.textContent.trim();
				currentFlashcard = { 
					group: front ? 1 : 2,
					front: front ?? element.textContent.trim(), 
					subheader: element.querySelector("em")?.textContent.trim() ?? "", 
					back: [], 
				};
			}
			else if (element.tagName === "DD" && currentFlashcard) {
				currentFlashcard.back.push(element.textContent.trim());
			}
		}

		if (currentFlashcard) {
			flashcards.push(currentFlashcard);
		}

		if (flashcards.length > 0) {
			flashcardSections.push({
				header: wrapper.dataset.header,
				flashcards: [
					...flashcards.filter(f => f.group === 1).aShuffle(),
					...flashcards.filter(f => f.group === 2).aShuffle(),
				],
			});
		}
	}

	return flashcardSections;
}

function renderFlashcards(flashcardSections) {
	if (!flashcardSections.length) {
		return;
	}

	const container = document.querySelector('#flashcard-container');
	for (const flashcardSection of flashcardSections) {
		const section = document.createElement('div');
		section.classList.add('flashcard-section');
		container.insertAdjacentElement('beforeend', section);

		let currentIndex = 0;
		function render() {
			const flashcard = flashcardSection.flashcards[currentIndex];

			section.innerHTML = `
				<div class="card-header">${flashcardSection.header}</div>
				<div class="flashcard-front">
					<strong>${flashcard.front}</strong>
					<em>${flashcard.subheader}</em>
				</div>
				<div class="flashcard-back">
					<strong>${flashcard.front}</strong>
					<div class="flashcard-list">
						<ul>
							${flashcard.back.map(text => `<li>${text}</li>`).join("")}
						</ul>
					</div>
				</div>
				<div class="card-counter">
					${currentIndex + 1} / ${flashcardSection.flashcards.length}
				</div>
			`;			
		}

		section.addEventListener('click', (e) => e.currentTarget.dispatchEvent(new Event('flip')));
		section.addEventListener('flip', (e) => {
			if (e.detail?.back !== true && !section.classList.contains('flipped')) {
				section.classList.add('flipped');
			} else if (e.detail?.back === true && section.classList.contains('flipped')) {
				section.classList.remove('flipped');
			} else if (e.detail?.back === true && !section.classList.contains('flipped')) {
				currentIndex = Math.max(0, (currentIndex + - 1) % flashcardSection.flashcards.length);
				section.classList.remove('flipped');
				setTimeout(() => render(), 100);
			} else if (e.detail?.back !== true && section.classList.contains('flipped')) {
				currentIndex = (currentIndex + 1) % flashcardSection.flashcards.length;
				if (currentIndex === 0) {
					flashcardSection.flashcards.aShuffle();
				}

				section.classList.remove('flipped');
				setTimeout(() => render(), 100);
			}
		});

		render();
	}

	document.addEventListener("keypress", (e) => {
		if (e.code === "Space" && e.target.tagName !== 'INPUT') {
			e.preventDefault();
			for (const flashcard of document.querySelectorAll(".flashcard-section")) {
				flashcard.dispatchEvent(new CustomEvent('flip', { detail: { back: e.ctrlKey } }));
			}
		}
	});
}

const flashcardSections = generateFlashcards();
renderFlashcards(flashcardSections);
