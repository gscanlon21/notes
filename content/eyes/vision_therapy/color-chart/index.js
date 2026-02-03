class Consts {
  static ROWS = 10;
  static COLS = 10;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const arrows = ["↑", "↓", "←", "→"];
const chart = document.getElementById("arrow-chart");
const regenerate = document.getElementById("regenerate");
const decodingChart = document.getElementById("decoding-chart");
const keySizeRange = document.getElementById("key-size-select");
const fontSizeRange = document.getElementById("arrow-size-select");
const letterGapRange = document.getElementById("letter-gap-select");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomArrow = () => arrows.aRandom();
const redOrGreen = () => ["red", "green"].aRandom();
const randomColor = () => ["red", "orange", "yellow", "green", "blue", "indigo", "violet"].aRandom();

const generateArrowChart = () => {
	generateDecodingChart();
	generateBottomChart();
};

const generateDecodingChart = () => {
	decodingChart.innerHTML = null;
	decodingChart.style.gridTemplateColumns = `repeat(${arrows.length}, 1fr)`;

	for (let i = 0; i < arrows.length; i++) {
		const cell = document.createElement("div").aWithClass('arrow');
		const key = document.createElement("div").aWithClass('key');
		key.textContent = randomColor();
		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);
		
		cell.textContent = arrows[i];
		decodingChart.appendChild(cell);
		cell.appendChild(key);
	}
};

const generateBottomChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${Consts.COLS}, 1fr)`;

	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		const cell = document.createElement("div").aWithClass('arrow');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);
		
		cell.textContent = randomArrow();
		chart.appendChild(cell);
	}
};

const setKeySize = (_, v) => decodingChart.style.fontSize = `${keySizeRange.value = v ?? keySizeRange.value}px`;
keySizeRange.addEventListener("input", setKeySize);
setKeySize(undefined, Consts.DEFAULT_FONT_SIZE);

const setFontSize = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
setFontSize(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, v) => chart.style.gap = `${letterGapRange.value = v ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);

redGreenCheck.addEventListener('change', generateArrowChart);
regenerate.addEventListener('click', generateArrowChart);
generateArrowChart();
