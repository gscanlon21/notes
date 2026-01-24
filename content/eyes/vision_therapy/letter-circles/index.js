const defaultCircles = 8;
const defaultRadius = 250;
const defaultFontSize = 100;
const root = document.documentElement;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-circles");
const chart2 = document.getElementById("letter-circles2");
const chart3 = document.getElementById("letter-circles3");
const radiusRange = document.getElementById("radius-select");
const circlesRange = document.getElementById("circles-select");
const fontSizeRange = document.getElementById("font-size-select");
const centerCircleCheckbox = document.getElementById("center-select");

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const generateCircleCharts = (_, circles, radius) => {
	generateCircleChart(chart, circles, radius)
	generateCircleChart(chart2, circles, radius + 50)
	generateCircleChart(chart3, circles, radius + 100)
};

const generateCircleChart = (elem, circles, radius) => {
	circles = circlesRange.value = circles ?? circlesRange.value;
	radius = radiusRange.value = radius ?? radiusRange.value;

	elem.innerHTML = null;
	elem.style.height = `${radius * 2}px`
	for (let i = 0; i < circles; i++) {
		const rotation = 360 / circles * i;
		const cell = document.createElement("div");
		const text = document.createElement("div");
		cell.style.transform = `rotate(${rotation}deg)`;
		cell.style.height = `${radius * 2}px`;
		text.textContent = randomLetter();
		text.style.transform = `rotate(-${rotation}deg)`;
		elem.appendChild(cell);
		cell.appendChild(text);
	}
};

const generateInnerCircle = () => {
	//document.documentElement.style.setProperty('--circle-font-size', fontSize);
	return centerCircleCheckbox.checked ? chart.classList.add('circle') : chart.classList.remove('circle');
};

radiusRange.addEventListener("input", generateCircleCharts);
circlesRange.addEventListener("input", generateCircleCharts);
generateCircleCharts(undefined, defaultCircles, defaultRadius);

const setCircleSize = (_, v) => root.style.setProperty('--circle-size', `${fontSizeRange.value = v ?? fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setCircleSize);
setCircleSize(undefined, defaultFontSize);

centerCircleCheckbox.addEventListener('change', generateInnerCircle);
