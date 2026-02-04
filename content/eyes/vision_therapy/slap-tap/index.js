class Consts {
  static ROWS = 10;
  static COLS = 10;
  static DEFAULT_FONT_SIZE = 25;
  static DEFAULT_LETTER_GAP = 25;
}

const chart = document.getElementById("slap-tap");
const regenerate = document.getElementById("regenerate");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const redOrGreen = () => ["red", "green"].aRandom();

const generateSlapTapGrid = () => {
	chart.innerHTML = "";
	chart.style.display = "grid";
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;
	chart.style.placeItems = "center";

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const actions = ["right-hand", "right-foot", "left-hand", "left-foot"].aShuffle();
		const cell = document.createElement("div").aWithClass('symbol');
		for (let a = 0; a < Math.floor(Math.random() * actions.length) + 1; a++) {
			cell.aWithClass(actions.pop());
		}

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		//cell.textContent = randomSymbol();
		cell.style.userSelect = "none";
		chart.appendChild(cell);
	}
};

const setSize = (_, v) => chart.style.setProperty('--size', `${fontSizeRange.value = v ?? fontSizeRange.value}px`);
fontSizeRange.addEventListener('input', setSize);
setSize(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGap = (_, v) => chart.style.gap = `${letterGapRange.value = v ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGap);
setLetterGap(undefined, Consts.DEFAULT_LETTER_GAP);

redGreenCheck.addEventListener('change', generateSlapTapGrid);
regenerate.addEventListener('click', generateSlapTapGrid);
generateSlapTapGrid();
