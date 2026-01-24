const rows = 10;
const cols = 10;
const defaultFontSize = 40;
const defaultLetterGap = 10;
const arrows = ["↑", "↓", "←", "→"];
const chart = document.getElementById("arrow-chart");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomArrow = () => arrows[Math.floor(Math.random() * arrows.length)];

const generateArrowChart = () => {
	chart.innerHTML = null;
	chart.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

	for (let i = 0; i < rows * cols; i++) {
		const cell = document.createElement("div");
		cell.textContent = randomArrow();
		chart.appendChild(cell);
	}
};

generateArrowChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener("input", setLetterGapRange);
setLetterGapRange(undefined, defaultLetterGap);