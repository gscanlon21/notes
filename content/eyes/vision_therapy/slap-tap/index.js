class Consts {
	static ROWS_COLS = 10;
}

const chart = document.getElementById("slap-tap");
const regenerate = document.getElementById("regenerate");
const rowsColsRange = document.getElementById("row-col-range");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const difficultyRange = document.getElementById("difficulty-range");
const redGreenCheck = document.getElementById("red-green-checkbox");
const altCheck = document.getElementById("alternate-checkbox");

const redOrGreen = () => ["red", "green"].aRandom();

const generateSlapTapGrid = () => {
	chart.innerHTML = "";
	chart.style.display = "grid";
	chart.style.gridTemplateColumns = `repeat(${Consts.ROWS_COLS}, 1fr)`;
	chart.style.placeItems = "center";

	for (let i = 0; i < Consts.ROWS_COLS * Consts.ROWS_COLS; i++) {
		const actions = ["right-hand", "right-foot", "left-hand", "left-foot"].aShuffle();
		const cell = document.createElement("div").aWithClass('symbol');
		for (let a = 0; a <= Math.floor(Math.random() * parseInt(difficultyRange.value)); a++) {
			cell.aWithClass(actions.pop());
		}

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		//cell.textContent = randomSymbol();
		chart.appendChild(cell);
	}
};

const setAlt = () => chart.aToggleClass('alt', altCheck.checked);
altCheck.addEventListener('change', setAlt);
setAlt();

const setSize = () => chart.style.setProperty('--size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener('input', setSize);
setSize();

const setLetterGap = () => chart.style.gap = `${letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGap);
setLetterGap();

const setRowsCols = () => Consts.ROWS_COLS = parseInt(rowsColsRange.value);
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

difficultyRange.addEventListener('input', generateSlapTapGrid);
rowsColsRange.addEventListener('change', generateSlapTapGrid);
redGreenCheck.addEventListener('change', generateSlapTapGrid);
regenerate.addEventListener('click', generateSlapTapGrid);
generateSlapTapGrid();
