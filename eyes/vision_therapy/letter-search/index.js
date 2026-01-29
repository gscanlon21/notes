class Consts {
	static DEFAULT_GAP = 25;
	static MAX_ATTEMPTS = 10;
	static DEFAULT_LETTERS = 50;
	static DEFAULT_FONT_SIZE = 37;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-chart");
const regenerate = document.getElementById("regenerate");
const redGreenCheck = document.getElementById("red-green-checkbox");
const fontSizeRange = document.getElementById("font-size-range");
const lettersRange = document.getElementById("letters-range");
const gapRange = document.getElementById("gap-range");

const randomLetter = () => Array.from(letters).aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const intersectsWithGap = (a, b, gap = Consts.DEFAULT_GAP) => !(
	a.top - gap > b.bottom + gap ||
	a.left - gap > b.right + gap ||
	a.right + gap < b.left - gap ||
	a.bottom + gap < b.top - gap
);

const intersectsChartEdgeWithGap = (rect, containerRect, gap = Consts.DEFAULT_GAP) => (
	rect.top < containerRect.top + gap ||
	rect.left < containerRect.left + gap ||
	rect.right > containerRect.right - gap ||
	rect.bottom > containerRect.bottom - gap
);

const randomPosition = (letter, width, height) => {
	const rect = letter.getBoundingClientRect();
	letter.style.left = `${Math.random() * (width - rect.width)}px`;
	letter.style.top = `${Math.random() * (height - rect.height)}px`;
};

const generateLetterSearch = (_, count, gap) => {
	count = lettersRange.value = count ?? lettersRange.value;
	gap = gapRange.value = gap ?? gapRange.value;
	chart.innerHTML = "";

	const placedLetters = [];
	const chartRect = chart.getBoundingClientRect();
	for (let i = 0; i < count; i++) {
		const letter = document.createElement("div").aWithClass('letter');

		redGreenCheck.checked ? letter.classList.add(redOrGreen()) : void(0);

		letter.textContent = randomLetter();
		chart.appendChild(letter);

		let placedSuccessfully = false;
		for (let attempts = 0; attempts < Consts.MAX_ATTEMPTS; attempts++) {
			randomPosition(letter, chartRect.width, chartRect.height);
			const rect = letter.getBoundingClientRect();

			if (!intersectsChartEdgeWithGap(rect, chartRect, gap) &&
				!placedLetters.some(p => intersectsWithGap(rect, p.getBoundingClientRect(), gap))) {
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

const setFontSizeRange = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
// Set the font size range before generating the search.
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

gapRange.addEventListener("input", generateLetterSearch);
regenerate.addEventListener('click', generateLetterSearch);
lettersRange.addEventListener("input", generateLetterSearch);
redGreenCheck.addEventListener('change', generateLetterSearch);
generateLetterSearch(undefined, Consts.DEFAULT_LETTERS, Consts.DEFAULT_GAP);
