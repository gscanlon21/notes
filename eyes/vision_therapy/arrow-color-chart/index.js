class Consts {
	static ROWS_COLS = 10;
}

const arrows = ["left", "right", "up", "down"];
const colors = ["red", "orange", "green", "blue", "indigo", "violet"];
const options = document.getElementById("options");
const chart = document.getElementById("arrow-chart");
const regenerate = document.getElementById("regenerate");
const arrowSelect = document.getElementById("arrow-select");
const styleSelect = document.getElementById("style-select");
const rowsColsRange = document.getElementById("row-col-range");
const decodingChart = document.getElementById("decoding-chart");
const keySizeRange = document.getElementById("key-size-select");
const fontSizeRange = document.getElementById("arrow-size-select");
const arrowGapRange = document.getElementById("arrow-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomArrow = () => arrows.aRandom();
const randomColor = () => colors.aRandom();

const generateArrowChart = () => {
	generateDecodingChart();
	generateBottomChart();
};

const generateDecodingChart = () => {
	decodingChart.innerHTML = null;
	decodingChart.style.gridTemplateColumns = `repeat(${arrows.length}, 1fr)`;

	const colorClone = [ ...colors.aShuffle() ];
	for (let i = 0; i < arrows.length; i++) {
		const wrapper = document.createElement("div");
		const cell = document.createElement("div").aWithClass('arrow');
		const key = document.createElement("div").aWithClass('key');

		const color = colorClone.pop();
		redGreenCheck.checked ? key.textContent = color : void(0);
		cell.style.color = color;
		
		if (styleSelect.value) {
			cell.innerHTML = document.querySelector(`[data-code="${arrowSelect.value ?? "arrow"}-${arrows[i]}-${styleSelect.value}"]`).innerHTML;
		} else {
			cell.innerHTML = document.querySelector(`[data-code="${arrowSelect.value ?? "arrow"}-${arrows[i]}"]`).innerHTML;
		}	

		decodingChart.appendChild(wrapper);
		wrapper.appendChild(cell);
		wrapper.appendChild(key);
	}
};

const generateBottomChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const cell = document.createElement("div").aWithClass('arrow');
		
		if (styleSelect.value) {
			cell.innerHTML = document.querySelector(`[data-code="${arrowSelect.value ?? "arrow"}-${randomArrow()}-${styleSelect.value}"]`).innerHTML;
		} else {
			cell.innerHTML = document.querySelector(`[data-code="${arrowSelect.value ?? "arrow"}-${randomArrow()}"]`).innerHTML;
		}	

		chart.appendChild(cell);
	}
};

const setKeySize = () => decodingChart.style.width = `${keySizeRange.value}%`;
options.addEventListener('reset', () => setTimeout(setKeySize));
keySizeRange.addEventListener("input", setKeySize);
setKeySize();

const setFontSize = () => chart.style.setProperty('--size', `${fontSizeRange.value}px`);
options.addEventListener('reset', () => setTimeout(setFontSize));
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setArrowGapRange = () => chart.style.gap = `${arrowGapRange.value}px`;
options.addEventListener('reset', () => setTimeout(arrowGapRange));
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
