class Consts {
	static ROWS_COLS = 10;
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS + (gridRefCheck.checked ? 2 : 0)}, 1fr)`;
	
	const rowRefNumbers = Array.from(numbers).toReversed();
	const colRefNumbers = Array.from(numbers).toReversed();
	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('letter');
		
		if (gridRefCheck.checked && i === 0) {
			const ref = document.createElement("div").aWithClass('ref').aWithClass('row').aWithClass('col');
			if (startCheck.checked) {
				rowRefNumbers.pop();
				colRefNumbers.pop();
			}
			chart.appendChild(ref);
		}

		if (gridRefCheck.checked && i % (Consts.ROWS_COLS) === 0) {
			const rowRef = document.createElement("div").aWithClass('ref').aWithClass('row');
			rowRef.textContent = rowRefNumbers.pop();
			chart.appendChild(rowRef);
			const colRef = document.createElement("div").aWithClass('ref').aWithClass('col');
			colRef.textContent = colRefNumbers.pop();
			chart.appendChild(colRef);
		}

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.textContent = randomLetter();
		chart.appendChild(cell);
	}
}

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

const setFontSize = () => chart.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setLetterGap = () => chart.style.gap = `${letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGap);
setLetterGap();

const onStartCheck = () => chart.aToggleClass('start-at-one', startCheck.checked);
startCheck.addEventListener('change', onStartCheck);
onStartCheck()

redGreenCheck.addEventListener('change', generateHartChart);
rowsColsRange.addEventListener('change', generateHartChart);
gridRefCheck.addEventListener('change', generateHartChart);
lettersInput.addEventListener("change", generateHartChart);
startCheck.addEventListener('change', generateHartChart);
regenerate.addEventListener('click', generateHartChart);
generateHartChart();
