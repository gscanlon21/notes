class Consts {
	static ROWS_COLS = 10;
	static DEFAULT_GAP = 10; 
	static DEFAULT_SIZE = 50;
}

const shapes = ["horizontal", "vertical", "circle"];
const chart = document.getElementById("chart");
const regenerate = document.getElementById("regenerate");
const rowsColsRange = document.getElementById("row-col-range");
const redGreenCheck = document.getElementById("red-green-checkbox");
const sizeRange = document.getElementById("size-range");
const gapRange = document.getElementById("gap-range");


const randomShape = () => shapes.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('shape').aWithClass(randomShape());

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		chart.appendChild(cell);
	}
};

const setRowsCols = (_, v) => Consts.ROWS_COLS = rowsColsRange.value = parseInt(v ?? rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols(undefined, Consts.ROWS_COLS);

const setSize = (_, v) => chart.style.setProperty('--size', `${sizeRange.value = v ?? sizeRange.value}px`);
sizeRange.addEventListener("input", setSize);
setSize(undefined, Consts.DEFAULT_SIZE);

const setGap = (_, v) => chart.style.gap = `${gapRange.value = v ?? gapRange.value}px`;
gapRange.addEventListener("input", setGap);
setGap(undefined, Consts.DEFAULT_GAP);

redGreenCheck.addEventListener('change', generateChart);
rowsColsRange.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
