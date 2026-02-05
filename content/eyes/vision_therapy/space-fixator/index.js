const root = document.getElementById("content");
const chart = document.getElementById("space-fixator");
const radiusRange = document.getElementById("radius-select");
const circlesRange = document.getElementById("circles-select");
const fontSizeRange = document.getElementById("font-size-select");
const centerCircleCheckbox = document.getElementById("center-select");

const generateCircleChart = (_, circles, radius) => {
	circles = circlesRange.value = circles ?? circlesRange.value;
	radius = radiusRange.value = radius ?? radiusRange.value;

	chart.innerHTML = null;
	chart.style.height = `${radius * 2}px`;
	for (let i = 0; i < circles; i++) {
		const rotation = 360 / circles * i;
		const cell = document.createElement("div");
		cell.style.transform = `rotate(${rotation}deg)`;
		cell.style.height = `${radius * 2}px`;
		chart.appendChild(cell);
	}
};

const setCircleSize = () => root.style.setProperty('--circle-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setCircleSize);
setCircleSize();

const generateInnerCircle = () => chart.aToggleClass('circle', centerCircleCheckbox.checked);
centerCircleCheckbox.addEventListener('change', generateInnerCircle);
generateInnerCircle();

radiusRange.addEventListener("input", generateCircleChart);
circlesRange.addEventListener("input", generateCircleChart);
generateCircleChart();
