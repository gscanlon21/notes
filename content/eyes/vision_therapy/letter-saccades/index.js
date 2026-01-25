class Consts {
  static DEFAULT_CIRCLES = 8;
  static DEFAULT_RADIUS = 250;
  static DEFAULT_FONT_SIZE = 100;
}

const root = document.documentElement;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const wrapper = document.getElementById("wrapper");
const chartInner = document.getElementById("letter-circles-inner");
const chartMiddle = document.getElementById("letter-circles-middle");
const chartOuter = document.getElementById("letter-circles-outer");
const radiusRange = document.getElementById("radius-range");
const circlesRange = document.getElementById("circles-range");
const fontSizeRange = document.getElementById("font-size-range");
const centerCircleCheckbox = document.getElementById("center-checkbox");

const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];

const generateCircleCharts = (_, circles, radius) => {
	radius = parseInt(radiusRange.value = radius ?? radiusRange.value);
	circles = parseInt(circlesRange.value = circles ?? circlesRange.value);
	
	generateCircleChart(chartInner, circles, radius)
	generateCircleChart(chartMiddle, circles, radius + 125)
	generateCircleChart(chartOuter, circles, radius + 250)
};

const generateCircleChart = (elem, circles, radius) => {
	elem.innerHTML = null;
	elem.style.height = `${radius * 2}px`;
	wrapper.style.height = `${radius * 2}px`;
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
	return centerCircleCheckbox.checked ? wrapper.classList.add('circle') : wrapper.classList.remove('circle');
};

radiusRange.addEventListener("input", generateCircleCharts);
circlesRange.addEventListener("input", generateCircleCharts);
generateCircleCharts(undefined, Consts.DEFAULT_CIRCLES, Consts.DEFAULT_RADIUS);

const setCircleSize = (_, v) => root.style.setProperty('--circle-size', `${fontSizeRange.value = v ?? fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setCircleSize);
setCircleSize(undefined, Consts.DEFAULT_FONT_SIZE);

centerCircleCheckbox.addEventListener('change', generateInnerCircle);
