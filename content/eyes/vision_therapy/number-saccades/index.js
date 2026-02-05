const root = document.getElementById("content");
const chart = document.getElementById("number-circle");
const regenerate = document.getElementById("regenerate");
const radiusRange = document.getElementById("radius-select");
const startCheck = document.getElementById("start-checkbox");
const redGreenCheck = document.getElementById("red-green-checkbox");
const circlesRange = document.getElementById("circles-select");
const fontSizeRange = document.getElementById("font-size-select");
const centerCheck = document.getElementById("center-select");

const randomNumbers = (l) => Array.from({ length: l }, (_, i) => i + (startCheck.checked ? 1 : 0)).aShuffle();
const redOrGreen = () => ["red", "green"].aRandom();

const generateCircleChart = (_, circles, radius) => {
	circles = circlesRange.value = circles ?? parseInt(circlesRange.value);
	radius = radiusRange.value = radius ?? parseInt(radiusRange.value);

	chart.innerHTML = null;
	chart.style.height = `${radius * 2}px`;
	const numbers = randomNumbers(circles);
	for (let i = 0; i < circles; i++) {
		const rotation = 360 / circles * i;
		const cell = document.createElement("div").aWithClass('circle');
		const text = document.createElement("div").aWithClass('number');
		cell.style.transform = `rotate(${rotation}deg)`;

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.style.height = `${radius * 2}px`;
		text.textContent = numbers[i].toString();
		text.style.transform = `rotate(-${rotation}deg)`;
		chart.appendChild(cell);
		cell.appendChild(text);
	}
};

const setFontSize = () => root.style.setProperty('--font-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setCenterCircle = () => chart.aToggleClass('circle', centerCheck.checked);
centerCheck.addEventListener('change', setCenterCircle);
setCenterCircle();

regenerate.addEventListener('click', generateCircleChart);
radiusRange.addEventListener("input", generateCircleChart);
startCheck.addEventListener('change', generateCircleChart);
circlesRange.addEventListener("input", generateCircleChart);
redGreenCheck.addEventListener("change", generateCircleChart);
generateCircleChart();
