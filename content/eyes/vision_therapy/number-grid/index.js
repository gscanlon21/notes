class Consts {
  static ROWS_COLS = 10;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("number-chart");
const regenerate = document.getElementById("regenerate");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");
const arrows = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const gridRefCheck = document.getElementById("grid-reference-checkbox");

const randomArrow = () => arrows.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateArrowChart = () => {
	chart.innerHTML = null;
	const rowsCols = Consts.ROWS_COLS + (gridRefCheck.checked ? 1 : 0);
	chart.style.gridTemplateColumns = `repeat(${rowsCols}, 1fr)`;

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

const setFontSize = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
setFontSize(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGap = (_, v) => chart.style.gap = `${letterGapRange.value = v ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGap);
setLetterGap(undefined, Consts.DEFAULT_LETTER_GAP);

redGreenCheck.addEventListener('change', generateArrowChart);
gridRefCheck.addEventListener('change', generateArrowChart);
regenerate.addEventListener('click', generateArrowChart);
generateArrowChart();
