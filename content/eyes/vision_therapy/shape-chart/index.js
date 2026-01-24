class Consts {
  static ROWS = 8;
  static COLS = 8;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 18;
}

const shapes = ["●", "■", "▲", "◆", "★"];
const chart = document.getElementById("shape-chart");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

const generateShapeChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div");
		cell.textContent = randomShape();
		chart.appendChild(cell);
	}
};

generateShapeChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);