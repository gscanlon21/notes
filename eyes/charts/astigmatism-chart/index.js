const root = document.getElementById("content");
const chart = document.getElementById("chart");
const lineRange = document.getElementById("line-range");
const radiusRange = document.getElementById("radius-range");
const centerRadiusRange = document.getElementById("center-radius-range");
const regenerate = document.getElementById("regenerate");

const generateChart = () => {
	const lines = parseInt(lineRange.value);
	const radius = parseInt(radiusRange.value);

	chart.innerHTML = null;

	for (let i = 0; i < lines; i++) {
		const angle = (360 / lines) * i;

		const line = document.createElement("div");
		line.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
		line.className = "line";

		chart.appendChild(line);
	}

	const mask = document.createElement("div");
	mask.className = "center-mask";
	chart.appendChild(mask);

	for (let i = 1; i <= 12; i++) {
		const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;

		const x = parseInt(radiusRange.value) + Math.cos(angle) * radius * 1.1;
		const y = parseInt(radiusRange.value) + Math.sin(angle) * radius * 1.1;

		const num = document.createElement("div");
		num.className = "number";
		num.innerText = i;

		num.style.left = x + "px";
		num.style.top = y + "px";

		chart.appendChild(num);
	}
}

const setCenterRadius = () => root.style.setProperty('--center-radius', `${parseInt(centerRadiusRange.value)}px`);
centerRadiusRange.addEventListener('input', setCenterRadius);
setCenterRadius();

const setRadius = () => root.style.setProperty('--radius', `${parseInt(radiusRange.value)}px`);
radiusRange.addEventListener('input', setRadius);
setRadius();

radiusRange.addEventListener("input", generateChart);
regenerate.addEventListener('click', generateChart);
lineRange.addEventListener("input", generateChart);
generateChart()
