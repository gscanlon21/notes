const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const root = document.getElementById("content");
const chart = document.getElementById("wrapper");
const chartInner = document.getElementById("letter-circles-inner");
const chartMiddle = document.getElementById("letter-circles-middle");
const chartOuter = document.getElementById("letter-circles-outer");
const radiusRange = document.getElementById("radius-range");
const circlesRange = document.getElementById("circles-range");
const fontSizeRange = document.getElementById("font-size-range");
const redGreenCheck = document.getElementById("red-green-checkbox");
const centerCheck = document.getElementById("center-checkbox");
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
	chart.style.height = `${radius * 2}px`;
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


const setFontSize = () => root.style.setProperty('--font-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setCenterCircle = () => chart.aToggleClass('circle', centerCheck.checked);
centerCheck.addEventListener('change', setCenterCircle);
setCenterCircle();

radiusRange.addEventListener("input", generateCircleCharts);
circlesRange.addEventListener("input", generateCircleCharts);
lettersInput.addEventListener("change", generateCircleCharts);
redGreenCheck.addEventListener("change", generateCircleCharts);
generateCircleCharts();
