class Consts {
  static LINES = 100;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const chart = document.getElementById("line-counting");
const regenerate = document.getElementById("regenerate");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomWidth = () => Math.floor(Math.random() * 10);

const generateLineChart = () => {
	chart.innerHTML = null;
	
	for (let i = 0; i < Consts.LINES; i++) {
		const cell = document.createElement("div");
		cell.style.width = `${randomWidth()}px`;
		chart.appendChild(cell);
	}
}

generateLineChart();
regenerate.addEventListener('click', generateLineChart);

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);
