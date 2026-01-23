const rows = 10;
const cols = 10;
const defaultFontSize = 40;
const defaultLetterGap = 10;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("hart-chart");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const generateHartChart = () => {
	chart.innerHTML = null;

	for (let i = 0; i < rows * cols; i++) {
		const cell = document.createElement("div");
		cell.textContent = randomLetter();
		chart.appendChild(cell);
	}
}

generateHartChart();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, defaultLetterGap);
