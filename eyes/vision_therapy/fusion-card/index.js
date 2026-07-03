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
	chartLeft.aToggleClass('red', redGreenCheck.checked);
	chartRight.aToggleClass('red', !redGreenCheck.checked);

	chartLeft.aToggleClass('green', !redGreenCheck.checked);
	chartRight.aToggleClass('green', redGreenCheck.checked);

	const imageArr = getImageArray().aShuffle();
	chartLeft.style.backgroundImage = chartRight.style.backgroundImage = `url(${getImage(imageArr.pop())})`;
};

const setImageSize = () => chart.style.setProperty('--image-size', `${imgSizeRange.value}px`);
options.addEventListener('reset', () => setTimeout(setImageSize));
imgSizeRange.addEventListener('input', setImageSize);
setImageSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
options.addEventListener('reset', () => setTimeout(setGap));
gapRange.addEventListener('input', setGap);
setGap();

options.addEventListener('reset', () => setTimeout(generateChart));
redGreenCheck.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
