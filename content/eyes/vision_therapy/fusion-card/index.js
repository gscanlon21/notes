const chart = document.getElementById("chart");
const regenerate = document.getElementById("regenerate");
const chartLeft = document.getElementById("left-eye");
const chartRight = document.getElementById("right-eye");
const redGreenCheck = document.getElementById("red-green-checkbox");
const imgSizeRange = document.getElementById("image-size-range");
const gapRange = document.getElementById("gap-range");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const imageArr = getImageArray().aShuffle();
	chartLeft.classList.add(redGreenCheck.checked ? 'red' : 'green');
	chartRight.classList.add(redGreenCheck.checked ? 'green' : 'red');

	chartLeft.style.backgroundImage = chartRight.style.backgroundImage = `url(${getImage(imageArr.pop())})`;
};

const setImageSize = () => chart.style.setProperty('--image-size', `${imgSizeRange.value}px`);
imgSizeRange.addEventListener('input', setImageSize);
setImageSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap();

chart.addEventListener('click', (e) => e.target.dataset.correct ? generateChart() : void(0));
redGreenCheck.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
