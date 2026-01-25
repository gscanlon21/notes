class Consts {
	static ROWS = 6;
	static COLS = 6;
	static DEFAULT_ROW_GAP = 10;
	static DEFAULT_COL_GAP = 25;
	static DEFAULT_FONT_SIZE = 40;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-tracking");
const fontSizeRange = document.getElementById("font-size-select");
const colGapRange = document.getElementById("col-gap-select");
const rowGapRange = document.getElementById("row-gap-select");

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const generateArrowChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div");
		if (i % 2 === 0) {
			cell.textContent = `${randomLetter()}${randomLetter()}${randomLetter()}`;
		}
		else {
			cell.textContent = `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}`;
		}
		chart.appendChild(cell);
	}
};

generateArrowChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setColGapRange = (_, value) => chart.style.columnGap = `${colGapRange.value = value ?? colGapRange.value}px`;
colGapRange.addEventListener("input", setColGapRange);
setColGapRange(undefined, Consts.DEFAULT_COL_GAP);

const setRowGapRange = (_, value) => chart.style.rowGap = `${rowGapRange.value = value ?? rowGapRange.value}px`;
rowGapRange.addEventListener("input", setRowGapRange);
setRowGapRange(undefined, Consts.DEFAULT_ROW_GAP);
