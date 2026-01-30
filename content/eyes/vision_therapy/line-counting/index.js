class Consts {
	static LINES = 100;
	static DEFAULT_GAP = 10; 
	static DEFAULT_HEIGHT = 100;
}

const root = document.getElementById("content");
const chart = document.getElementById("line-counting");
const regenerate = document.getElementById("regenerate");
const heightRange = document.getElementById("height-range");
const redGreenCheck = document.getElementById("red-green-checkbox");
const gapRange = document.getElementById("gap-range");

const randomWidth = () => Math.floor(Math.random() * 10);
const redOrGreen = () => ["red", "green"].aRandom();

const generateLineChart = () => {
	chart.innerHTML = null;
	
	for (let i = 0; i < Consts.LINES; i++) {
		const cell = document.createElement("div").aWithClass('line');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.style.width = `${randomWidth()}px`;
		chart.appendChild(cell);
	}
}

const setHeight = (_, v) => root.style.setProperty('--height', `${heightRange.value = v ?? heightRange.value}px`);
heightRange.addEventListener('input', setHeight);
setHeight(undefined, Consts.DEFAULT_HEIGHT);

const setGapRange = (_, value) => chart.style.gap = `${gapRange.value = value ?? gapRange.value}px`;
gapRange.addEventListener('input', setGapRange);
setGapRange(undefined, Consts.DEFAULT_GAP);

redGreenCheck.addEventListener('change', generateLineChart);
regenerate.addEventListener('click', generateLineChart);
generateLineChart();
