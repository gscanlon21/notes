class Consts {
  static ROWS = 8;
  static COLS = 8;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 18;
}

const shapes = ["●", "■", "▲", "◆", "★"];
const chart = document.getElementById("shape-chart");
const regenerate = document.getElementById("regenerate");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomShape = () => shapes.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateShapeChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div").aWithClass('shape');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.textContent = randomShape();
		chart.appendChild(cell);
	}
};

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);

redGreenCheck.addEventListener('click', generateShapeChart);
regenerate.addEventListener('click', generateShapeChart);
generateShapeChart();
