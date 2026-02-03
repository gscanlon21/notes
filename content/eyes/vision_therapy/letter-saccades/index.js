class Consts {
  static DEFAULT_CIRCLES = 8;
  static DEFAULT_RADIUS = 250;
  static DEFAULT_FONT_SIZE = 75;
}

const root = document.getElementById("content");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const wrapper = document.getElementById("wrapper");
const chartInner = document.getElementById("letter-circles-inner");
const chartMiddle = document.getElementById("letter-circles-middle");
const chartOuter = document.getElementById("letter-circles-outer");
const radiusRange = document.getElementById("radius-range");
const circlesRange = document.getElementById("circles-range");
const fontSizeRange = document.getElementById("font-size-range");
const redGreenCheck = document.getElementById("red-green-checkbox");
const centerCircleCheckbox = document.getElementById("center-checkbox");
const lettersInput = document.getElementById("letters-text");

const randomLetter = () => Array.from(lettersInput.value ?? letters).aRandom();
const redOrGreen = () => ["red", "green"].aRandom();

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
		const cell = document.createElement("div").aWithClass('circle');
		const text = document.createElement("div").aWithClass('letter');
		cell.style.transform = `rotate(${rotation}deg)`;

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.style.height = `${radius * 2}px`;
		text.textContent = randomLetter();
		text.style.transform = `rotate(-${rotation}deg)`;
		elem.appendChild(cell);
		cell.appendChild(text);
	}
};

radiusRange.addEventListener("input", generateCircleCharts);
circlesRange.addEventListener("input", generateCircleCharts);
lettersInput.addEventListener("change", generateCircleCharts);
redGreenCheck.addEventListener("change", generateCircleChart);
generateCircleCharts(undefined, Consts.DEFAULT_CIRCLES, Consts.DEFAULT_RADIUS);

const setCircleSize = (_, v) => root.style.setProperty('--circle-size', `${fontSizeRange.value = v ?? fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setCircleSize);
setCircleSize(undefined, Consts.DEFAULT_FONT_SIZE);

const generateInnerCircle = () => centerCircleCheckbox.checked ? wrapper.classList.add('circle') : wrapper.classList.remove('circle');
centerCircleCheckbox.addEventListener('change', generateInnerCircle);
