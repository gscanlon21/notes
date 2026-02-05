class Consts {
	static ROWS_COLS = 8;
}

const shapes = ["⏺", "■", "▲", "◆", "★"];
const chart = document.getElementById("shape-chart");
const regenerate = document.getElementById("regenerate");
const rowsColsRange = document.getElementById("row-col-range");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomShape = () => shapes.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateShapeChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('shape');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.textContent = randomShape();
		chart.appendChild(cell);
	}
};

const setFontSizeRange = () => chart.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange();

const setLetterGapRange = () => chart.style.gap = `${letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange();

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

redGreenCheck.addEventListener('change', generateShapeChart);
rowsColsRange.addEventListener('change', generateShapeChart);
regenerate.addEventListener('click', generateShapeChart);
generateShapeChart();
