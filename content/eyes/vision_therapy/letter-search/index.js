const defaultGap = 10;
const maxAttempts = 10;
const defaultLetters = 50;
const defaultFontSize = 40;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-chart");
const fontSizeRange = document.getElementById("font-size-select");
const lettersRange = document.getElementById("letters-select");

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const intersectsWithGap = (a, b, gap = defaultGap) => !(
	a.right + gap < b.left - gap ||
	a.left - gap > b.right + gap ||
	a.bottom + gap < b.top - gap ||
	a.top - gap > b.bottom + gap
);

const randomPosition = (letter, width, height) => {
	const rect = letter.getBoundingClientRect();
	letter.style.left = `${Math.random() * (width - rect.width)}px`;
	letter.style.top = `${Math.random() * (height - rect.height)}px`;
};

const generateLetterSearch = (_, count) => {
	count = lettersRange.value = count ?? lettersRange.value;
	chart.innerHTML = "";

	const { width, height } = chart.getBoundingClientRect();
	
	const placedLetters = [];
	for (let i = 0; i < count; i++) {
		const letter = document.createElement("div");
		letter.textContent = randomLetter();
		chart.appendChild(letter);

		let placedSuccessfully = false;
		for (let attempts = 0; attempts < maxAttempts; attempts++) {
			randomPosition(letter, width, height);
			const rect = letter.getBoundingClientRect();

			if (!placedLetters.some(p => intersectsWithGap(rect, p.getBoundingClientRect(), defaultGap))) {
				placedLetters.push(letter);
				placedSuccessfully = true;
				break;
			}
		}

		if (!placedSuccessfully) {
			letter.remove();      
		}
	}
};

lettersRange.addEventListener("input", generateLetterSearch);
generateLetterSearch(undefined, defaultLetters);

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);
