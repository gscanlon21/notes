class Consts {
	static DEFAULT_RADIUS = 250; 
	static DEFAULT_CIRCLES = 8;
	static DEFAULT_FONT_SIZE = 100;
}

const root = document.getElementById("content");
const chart = document.getElementById("number-circle");
const regenerate = document.getElementById("regenerate");
const radiusRange = document.getElementById("radius-select");
const circlesRange = document.getElementById("circles-select");
const fontSizeRange = document.getElementById("font-size-select");
const centerCircleCheckbox = document.getElementById("center-select");

const randomNumbers = (l) => Array.from({ length: l }, (_, i) => i).aShuffle();

const generateCircleChart = (_, circles, radius) => {
	circles = circlesRange.value = circles ?? circlesRange.value;
	radius = radiusRange.value = radius ?? radiusRange.value;

	chart.innerHTML = null;
	chart.style.height = `${radius * 2}px`;
	const numbers = randomNumbers(circles);
	for (let i = 0; i < circles; i++) {
		const rotation = 360 / circles * i;
		const cell = document.createElement("div");
		const text = document.createElement("div");
		cell.style.transform = `rotate(${rotation}deg)`;
		cell.style.height = `${radius * 2}px`;
		text.textContent = numbers[i].toString();
		text.style.transform = `rotate(-${rotation}deg)`;
		chart.appendChild(cell);
		cell.appendChild(text);
	}
};

regenerate.addEventListener('click', generateCircleChart);
radiusRange.addEventListener("input", generateCircleChart);
circlesRange.addEventListener("input", generateCircleChart);
generateCircleChart(undefined, Consts.DEFAULT_CIRCLES, Consts.DEFAULT_RADIUS);

const setCircleSize = (_, v) => root.style.setProperty('--circle-size', `${fontSizeRange.value = v ?? fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setCircleSize);
setCircleSize(undefined, Consts.DEFAULT_FONT_SIZE);

const generateInnerCircle = () => centerCircleCheckbox.checked ? chart.classList.add('circle') : chart.classList.remove('circle');
centerCircleCheckbox.addEventListener('change', generateInnerCircle);
