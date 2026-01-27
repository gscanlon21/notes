class Consts {
  static ROWS = 10;
  static COLS = 10;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const symbols = ["p", "b", "d", "q", "Φ", "○"];
const chart = document.getElementById("slap-tap");
const regenerate = document.getElementById("regenerate");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomSymbol = () => symbols.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateSlapTapGrid = () => {
	chart.innerHTML = "";
	chart.style.display = "grid";
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;
	chart.style.placeItems = "center";

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div").aWithClass('symbol');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.textContent = randomSymbol();
		cell.style.userSelect = "none";
		chart.appendChild(cell);
	}
};

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);

redGreenCheck.addEventListener('click', generateSlapTapGrid);
regenerate.addEventListener('click', generateSlapTapGrid);
generateSlapTapGrid();
