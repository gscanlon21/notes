const rows = 10;
const cols = 10;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("hart-chart");

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
