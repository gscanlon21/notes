class Consts {
  static ROWS = 10;
  static COLS = 10;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("hart-chart");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");
const lettersInput = document.getElementById("letters-text");

const randomLetter = () => Array.from(lettersInput.value ?? letters).aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

const generateHartChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;
	
	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div").aWithClass('letter');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.textContent = randomLetter();
		chart.appendChild(cell);
	}
}

const setFontSizeRange = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, v) => chart.style.gap = `${letterGapRange.value = v ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);

redGreenCheck.addEventListener('change', generateHartChart);
lettersInput.addEventListener("change", generateHartChart);
generateHartChart();
