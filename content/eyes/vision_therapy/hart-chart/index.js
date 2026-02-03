class Consts {
  static ROWS_COLS = 10;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const letters = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("hart-chart");
const rowsColsRange = document.getElementById("row-col-range");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");
const gridRefCheck = document.getElementById("grid-reference-checkbox");
const startCheck = document.getElementById("start-checkbox");
const lettersInput = document.getElementById("letters-text");
const regenerate = document.getElementById("regenerate");

const randomLetter = () => Array.from(lettersInput.value ?? letters).aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateHartChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, 1fr)`;
	
	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('letter');
		if (i % (Consts.ROWS_COLS + 1) === 0) {
			cell.aWithClass('ref');
		}

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.textContent = randomLetter();
		chart.appendChild(cell);
	}
}

const setRowsCols = (_, v) => Consts.ROWS_COLS = rowsColsRange.value = parseInt(v ?? rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols(undefined, Consts.ROWS_COLS);

const setFontSize = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSize);
setFontSize(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGap = (_, v) => chart.style.gap = `${letterGapRange.value = v ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGap);
setLetterGap(undefined, Consts.DEFAULT_LETTER_GAP);

startCheck.addEventListener('change', () => chart.aToggleClass('start-at-one'));

gridRefCheck.addEventListener('change', () => chart.aToggleClass('grid-reference'));
redGreenCheck.addEventListener('change', generateHartChart);
rowsColsRange.addEventListener('change', generateHartChart);
lettersInput.addEventListener("change", generateHartChart);
regenerate.addEventListener('click', generateHartChart);
generateHartChart();
