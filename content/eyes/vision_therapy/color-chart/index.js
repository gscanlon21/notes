class Consts {
	static ROWS_COLS = 10;
}

const arrows = ["↑", "↓", "←", "→"];
const chart = document.getElementById("arrow-chart");
const regenerate = document.getElementById("regenerate");
const rowsColsRange = document.getElementById("row-col-range");
const decodingChart = document.getElementById("decoding-chart");
const keySizeRange = document.getElementById("key-size-select");
const fontSizeRange = document.getElementById("arrow-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomArrow = () => arrows.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();
const randomColor = () => ["red", "orange", "yellow", "green", "blue", "indigo", "violet"].aRandom();

const generateArrowChart = () => {
	generateDecodingChart();
	generateBottomChart();
};

const generateDecodingChart = () => {
	decodingChart.innerHTML = null;
	decodingChart.style.gridTemplateColumns = `repeat(${arrows.length}, 1fr)`;

	for (let i = 0; i < arrows.length; i++) {
		const cell = document.createElement("div").aWithClass('arrow');
		const key = document.createElement("div").aWithClass('key');
		key.textContent = randomColor();
		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);
		
		cell.textContent = arrows[i];
		decodingChart.appendChild(cell);
		cell.appendChild(key);
	}
};

const generateBottomChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('arrow');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);
		
		cell.textContent = randomArrow();
		chart.appendChild(cell);
	}
};

const setKeySize = () => decodingChart.style.fontSize = `${keySizeRange.value}px`;
keySizeRange.addEventListener("input", setKeySize);
setKeySize();

const setFontSize = () => chart.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setLetterGapRange = () => chart.style.gap = `${letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange();

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

redGreenCheck.addEventListener('change', generateArrowChart);
rowsColsRange.addEventListener('change', generateArrowChart);
regenerate.addEventListener('click', generateArrowChart);
generateArrowChart();
