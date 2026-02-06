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

	const redGreenList = ["red", "green"].aShuffle();
	chartLeft.aToggleClass('red', false).aToggleClass('green', false);
	chartRight.aToggleClass('red', false).aToggleClass('green', false);
	redGreenCheck.checked ? chartLeft.classList.add(redGreenList[0]) : void(0);
	redGreenCheck.checked ? chartRight.classList.add(redGreenList[1]) : void(0);

	const imageArr = getImageArray().aShuffle();
	chartLeft.style.maskImage = chartRight.style.maskImage = `url(${getImage(imageArr.pop())})`;
};

const setImageSize = () => chart.style.setProperty('--image-size', `${imgSizeRange.value}px`);
imgSizeRange.addEventListener('input', setImageSize);
setImageSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap();

redGreenCheck.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
