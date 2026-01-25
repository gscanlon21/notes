class Consts {
  static ROWS = 10;
  static COLS = 10;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const arrows = ["↑", "↓", "←", "→"];
const chart = document.getElementById("arrow-chart");
const regenerate = document.getElementById("regenerate");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomArrow = () => arrows[Math.floor(Math.random() * arrows.length)];

const generateArrowChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div");
		cell.textContent = randomArrow();
		chart.appendChild(cell);
	}
};

generateArrowChart();
regenerate.addEventListener('click', generateArrowChart);

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);