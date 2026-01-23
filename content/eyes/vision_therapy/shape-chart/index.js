const rows = 8;
const cols = 8;
const defaultFontSize = 40;
const defaultLetterGap = 18;
const shapes = ["●", "■", "▲", "◆", "★"];
const chart = document.getElementById("shape-chart");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomShape = () => shapes[Math.floor(Math.random() * shapes.length)];

const generateShapeChart = () => {
	chart.innerHTML = "";
	chart.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

	for (let i = 0; i < rows * cols; i++) {
		const cell = document.createElement("div");
		cell.textContent = randomShape();
		chart.appendChild(cell);
	}
};

generateShapeChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, defaultLetterGap);