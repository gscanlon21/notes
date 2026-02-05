class Consts {
	static ROWS_COLS = 10;
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

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

const setSize = () => chart.style.setProperty('--size', `${sizeRange.value}px`);
sizeRange.addEventListener("input", setSize);
setSize();

const setGap = () => chart.style.gap = `${gapRange.value}px`;
gapRange.addEventListener("input", setGap);
setGap();

redGreenCheck.addEventListener('change', generateChart);
rowsColsRange.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
