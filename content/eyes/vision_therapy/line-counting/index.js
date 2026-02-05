class Consts {
	static DEFAULT_WIDTH = 25;
	static VARIABILITY = 0.25;
}

const root = document.getElementById("content");
const chart = document.getElementById("line-counting");
const regenerate = document.getElementById("regenerate");
const heightRange = document.getElementById("height-range");
const widthRange = document.getElementById("width-range");
const guessText = document.getElementById("lines-text");
const redGreenCheck = document.getElementById("red-green-checkbox");
const gapRange = document.getElementById("gap-range");

const randomWidth = () => Math.floor(Math.random() * 10);
const redOrGreen = () => ["red", "green"].aRandom();
const randomAround = (around) => {
    const min = around * (1 - Consts.VARIABILITY);
    const max = around * (1 + Consts.VARIABILITY);
    return Math.random() * (max - min) + min;
}

const generateLineChart = () => {
	chart.innerHTML = null;
	
	const lines = randomAround(Consts.DEFAULT_WIDTH);
	for (let i = 0; i < lines; i++) {
		const cell = document.createElement("div").aWithClass('line');

		redGreenCheck.checked ? cell.classList.add(redOrGreen()) : void(0);

		cell.style.width = `${randomWidth()}px`;
		chart.appendChild(cell);
	}
}

const setWidth = () => Consts.DEFAULT_WIDTH = parseInt(widthRange.value);
widthRange.addEventListener('input', setWidth);
setWidth();

const setHeight = () => root.style.setProperty('--height', `${heightRange.value}px`);
heightRange.addEventListener('input', setHeight);
setHeight();

const setGapRange = () => chart.style.gap = `${gapRange.value}px`;
gapRange.addEventListener('input', setGapRange);
setGapRange();

const guess = () => window.alert(chart.childNodes.length === parseInt(guessText.value) ? 'Correct' : 'Incorrect');
guessText.addEventListener('keydown', (e) => { e.preventDefault(); e.key === 'Enter' ? guess() : void(0); });

redGreenCheck.addEventListener('change', generateLineChart);
widthRange.addEventListener('change', generateLineChart);
regenerate.addEventListener('click', generateLineChart);
generateLineChart();
