const chart = document.getElementById("chart");
const chartLeft = document.getElementById("left-eye");
const chartRight = document.getElementById("right-eye");
const regenerate = document.getElementById("regenerate");
const redGreenCheck = document.getElementById("red-green-checkbox");
const redGreenSwapCheck = document.getElementById("red-green-swap-checkbox");
const imgSizeRange = document.getElementById("image-size-range");
const gapRange = document.getElementById("gap-range");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	// Remove red and green classes.
	chartLeft.classList.remove('red', 'green');
	chartRight.classList.remove('red', 'green');

	if (redGreenCheck.checked) {
		// Re-add red and green classes depending on the swap order.
		chartLeft.classList.add(redGreenSwapCheck.checked ? 'red' : 'green');
		chartRight.classList.add(redGreenSwapCheck.checked ? 'green' : 'red');
	}

	// Choose a random image from the list.
	const imageArr = getImageArray().aShuffle();
	chartLeft.style.maskImage = chartRight.style.maskImage = `url(${getImage(imageArr.pop())})`;
};

const setImageSize = () => chart.style.setProperty('--image-size', `${imgSizeRange.value}px`);
imgSizeRange.addEventListener('input', setImageSize);
setImageSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap();

redGreenSwapCheck.addEventListener('change', generateChart);
redGreenCheck.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
