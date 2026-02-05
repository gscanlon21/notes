class Consts {
	static ROWS_COLS = 10;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("number-chart");
const regenerate = document.getElementById("regenerate");
const rowsColsRange = document.getElementById("row-col-range");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");
const arrows = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const gridRefCheck = document.getElementById("grid-reference-checkbox");

const randomArrow = () => arrows.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateArrowChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS + (gridRefCheck.checked ? 2 : 0)}, 1fr)`;

	const rowRefLetters = Array.from(letters).toReversed();
	const colRefLetters = Array.from(letters).toReversed();
	for (let i = 0; i < Consts.ROWS_COLS  * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('number');
		
		if (gridRefCheck.checked && i === 0) {
			const ref = document.createElement("div").aWithClass('ref').aWithClass('row').aWithClass('col');
			chart.appendChild(ref);
		}

		if (gridRefCheck.checked && i % (Consts.ROWS_COLS) === 0) {
			const rowRef = document.createElement("div").aWithClass('ref').aWithClass('row');
			rowRef.textContent = rowRefLetters.pop();
			chart.appendChild(rowRef);
			const colRef = document.createElement("div").aWithClass('ref').aWithClass('col');
			colRef.textContent = colRefLetters.pop();
			chart.appendChild(colRef);
		}

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);
		
		cell.textContent = randomArrow();
		chart.appendChild(cell);
	}
};

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

const setFontSize = () => chart.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setLetterGap = () => chart.style.gap = `${letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGap);
setLetterGap();

redGreenCheck.addEventListener('change', generateArrowChart);
rowsColsRange.addEventListener('change', generateArrowChart);
gridRefCheck.addEventListener('change', generateArrowChart);
regenerate.addEventListener('click', generateArrowChart);
generateArrowChart();
