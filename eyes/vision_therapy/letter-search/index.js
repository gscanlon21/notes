class Consts {
	static MAX_ATTEMPTS = 10;
}

const lLetters = "abcdefghijklmnopqrstuvwxyz";
const uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-chart");
const regenerate = document.getElementById("regenerate");
const lettersInput = document.getElementById("letters-text");
const redGreenCheck = document.getElementById("red-green-checkbox");
const fontSizeRange = document.getElementById("font-size-range");
const lettersRange = document.getElementById("letters-range");
const gapRange = document.getElementById("gap-range");

const redOrGreen = () => ["red", "green"].aRandom();
const randomLetter = () => Array.from(lettersInput.value ?? uLetters).aRandom();

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
	count = lettersRange.value = count ?? parseInt(lettersRange.value);
	gap = gapRange.value = gap ?? parseInt(gapRange.value);
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

const setFontSize = () => chart.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
// Set the font size before generating the search.
setFontSize();

gapRange.addEventListener("input", generateLetterSearch);
regenerate.addEventListener('click', generateLetterSearch);
lettersRange.addEventListener("input", generateLetterSearch);
lettersInput.addEventListener('change', generateLetterSearch);
redGreenCheck.addEventListener('change', generateLetterSearch);
generateLetterSearch();
