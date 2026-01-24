const lines = 100;
const defaultFontSize = 40;
const defaultLetterGap = 10;
const chart = document.getElementById("line-counting");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomWidth = () => Math.floor(Math.random() * 10);

const generateLineChart = () => {
	chart.innerHTML = null;
	
	for (let i = 0; i < lines; i++) {
		const cell = document.createElement("div");
		cell.style.width = `${randomWidth()}px`;
		chart.appendChild(cell);
	}
}

generateLineChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, defaultLetterGap);
