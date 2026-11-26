const root = document.getElementById("content");
const options = document.getElementById("options");
const chart = document.getElementById("amsler-grid");
const lineGapRange = document.getElementById("line-gap-range");
const rowsColsRange = document.getElementById("row-col-range");
const dotSizeRange = document.getElementById("dot-size-range");

const generateChart = () => {
	chart.innerHTML = null;	

	const rowsCols = parseInt(rowsColsRange.value);
	for (let i = 0; i < rowsCols * 2; i++) {
		const cell = document.createElement("div").aWithClass('line');
		
		const index = Math.floor(i / 2) + 1;
		if (i % 2 === 0) {
			cell.classList.add('horizontal');
			cell.style.gridRow = index;
		} else {
			cell.classList.add('vertical');
			cell.style.gridColumn = index;
		}

		chart.appendChild(cell);
	}

	const dot = document.createElement("div").aWithClass('dot');
	dot.style.gridColumn = Math.ceil(rowsCols / 2);
	dot.style.gridRow = Math.ceil(rowsCols / 2);
	chart.appendChild(dot);
}

const setRowsCols = () => root.style.setProperty('--lines', parseInt(rowsColsRange.value));
options.addEventListener('reset', () => setTimeout(setRowsCols));
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

const setDotSize = () => root.style.setProperty('--dot-size', `${parseInt(dotSizeRange.value)}px`);
options.addEventListener('reset', () => setTimeout(setDotSize));
dotSizeRange.addEventListener('input', setDotSize);
setDotSize();

const setLineGap = () => root.style.setProperty('--line-gap', `${parseInt(lineGapRange.value)}px`);
options.addEventListener('reset', () => setTimeout(setLineGap));
lineGapRange.addEventListener("input", setLineGap);
setLineGap();

options.addEventListener('reset', () => setTimeout(generateChart));
rowsColsRange.addEventListener("input", generateChart);
dotSizeRange.addEventListener('input', generateChart);
lineGapRange.addEventListener('input', generateChart);
generateChart();
