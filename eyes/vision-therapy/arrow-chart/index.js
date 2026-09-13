class Consts {
	static ROWS_COLS = 10;
}

const arrows = ["left", "right", "up", "down"];
const chart = document.getElementById("arrow-chart");
const regenerate = document.getElementById("regenerate");
const arrowSelect = document.getElementById("arrow-select");
const styleSelect = document.getElementById("style-select");
const rowsColsRange = document.getElementById("row-col-range");
const arrowGapRange = document.getElementById("arrow-gap-select");
const arrowSizeRange = document.getElementById("arrow-size-select");
const chartSizeRange = document.getElementById("chart-size-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomArrow = () => arrows.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateArrowChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, minmax(0, 1fr))`;

	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('arrow');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);
		
		if (styleSelect.value) {
			cell.innerHTML = document.querySelector(`[data-code="${arrowSelect.value ?? "arrow"}-${randomArrow()}-${styleSelect.value}"]`).innerHTML;
		} else {
			cell.innerHTML = document.querySelector(`[data-code="${arrowSelect.value ?? "arrow"}-${randomArrow()}"]`).innerHTML;
		}

		chart.appendChild(cell);
	}
};

const setChartSize = () => chart.style.setProperty('--chart-size', `${chartSizeRange.value}%`);
options.addEventListener('reset', () => setTimeout(setChartSize));
chartSizeRange.addEventListener("input", setChartSize);
setChartSize();

const setArrowSize = () => chart.style.setProperty('--arrow-size', `${arrowSizeRange.value}%`);
options.addEventListener('reset', () => setTimeout(setArrowSize));
arrowSizeRange.addEventListener("input", setArrowSize);
setArrowSize();

const setArrowGapRange = () => chart.style.gap = `${arrowGapRange.value}mm`;
options.addEventListener('reset', () => setTimeout(setArrowGapRange));
arrowGapRange.addEventListener("input", setArrowGapRange);
setArrowGapRange();

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
options.addEventListener('reset', () => setTimeout(setRowsCols));
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

options.addEventListener('reset', () => setTimeout(generateArrowChart));
redGreenCheck.addEventListener('change', generateArrowChart);
rowsColsRange.addEventListener('change', generateArrowChart);
arrowSelect.addEventListener('change', generateArrowChart);
styleSelect.addEventListener('change', generateArrowChart);
regenerate.addEventListener('click', generateArrowChart);
generateArrowChart();
