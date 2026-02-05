const root = document.getElementById("content");
const chart = document.getElementById("number-circle");
const regenerate = document.getElementById("regenerate");
const radiusRange = document.getElementById("radius-select");
const circlesRange = document.getElementById("circles-select");
const fontSizeRange = document.getElementById("font-size-select");
const centerCircleCheck = document.getElementById("center-select");

const randomNumbers = (l) => Array.from({ length: l }, (_, i) => i).aShuffle();

const generateCircleChart = () => {
	const circles = circlesRange.value;
	const radius = radiusRange.value;

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

const setCircleSize = () => root.style.setProperty('--circle-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setCircleSize);
setCircleSize();

const setInnerCircle = () => chart.aToggleClass('circle', centerCircleCheck.checked);
centerCircleCheck.addEventListener('change', setInnerCircle);
setInnerCircle();

regenerate.addEventListener('click', generateCircleChart);
radiusRange.addEventListener("input", generateCircleChart);
circlesRange.addEventListener("input", generateCircleChart);
generateCircleChart();
