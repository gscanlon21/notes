class Consts {
  static ROWS = 6;
  static COLS = 6;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-tracking");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const generateArrowChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div");
		if (i % 2 === 0) {
			cell.textContent = `${randomLetter()}${randomLetter()}${randomLetter()}`;
		}
		else {
			cell.textContent = `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`;
		}
		chart.appendChild(cell);
	}
};

generateArrowChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);