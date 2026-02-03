class Consts {
	static DEFAULT_GAP = 10; 
	static DEFAULT_WIDTH = 25;
	static DEFAULT_HEIGHT = 100;
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

const setWidth = (_, v) => Consts.DEFAULT_WIDTH = parseInt(widthRange.value = v ?? widthRange.value);
widthRange.addEventListener('input', setWidth);
setWidth(undefined, Consts.DEFAULT_WIDTH);

const setHeight = (_, v) => root.style.setProperty('--height', `${heightRange.value = v ?? heightRange.value}px`);
heightRange.addEventListener('input', setHeight);
setHeight(undefined, Consts.DEFAULT_HEIGHT);

const setGapRange = (_, value) => chart.style.gap = `${gapRange.value = value ?? gapRange.value}px`;
gapRange.addEventListener('input', setGapRange);
setGapRange(undefined, Consts.DEFAULT_GAP);

const guess = () => window.alert(chart.childNodes.length === parseInt(guessText.value) ? 'Correct' : 'Incorrect');
guessText.addEventListener('change', guess);

redGreenCheck.addEventListener('change', generateLineChart);
widthRange.addEventListener('change', generateLineChart);
regenerate.addEventListener('click', generateLineChart);
generateLineChart();
