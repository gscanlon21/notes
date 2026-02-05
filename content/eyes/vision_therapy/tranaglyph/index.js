class Consts {
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 100 : 25 };
 	static get DEFAULT_IMAGE_SIZE() { return navigator?.userAgentData?.mobile === false ? 100 : 75 };
}

const root = document.getElementById("content");
const regenerate = document.getElementById("regenerate");
const chartLeft = document.getElementById("aperture-image-left");
const chartRight = document.getElementById("aperture-image-right");
const redGreenCheck = document.getElementById("red-green-checkbox");
const imgSizeRange = document.getElementById("image-size-range");
const gapRange = document.getElementById("gap-range");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const imageArr = getImageArray().aShuffle();
	const left = document.createElement("div").aWithClass('image');
	const right = document.createElement("div").aWithClass('image');

	const redGreenList = ["red", "green"].aShuffle();
	redGreenCheck.checked ? left.classList.add(redGreenList[0]) : void(0);
	redGreenCheck.checked ? right.classList.add(redGreenList[1]) : void(0);

	left.style.maskImage = right.style.maskImage = `url(${getImage(imageArr.pop())})`;

	chartLeft.appendChild(left);
	chartRight.appendChild(right);
};

const regenerateImageSizes = () => {
	for (const child of [...Array.from(chartLeft.childNodes), ...Array.from(chartRight.childNodes)]) {
		child.style.setProperty('--image-scale', imgSizeRange.value);
	}
}

const setImageSize = () => root.style.setProperty('--image-size', `${imgSizeRange.value}px`);
imgSizeRange.addEventListener('change', regenerateImageSizes);
imgSizeRange.addEventListener('input', setImageSize);
setImageSize();

const setGap = () => root.style.setProperty('--gap', `${gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap();

generateChart();
regenerate.addEventListener('click', generateChart);
redGreenCheck.addEventListener('change', generateChart);
root.addEventListener('click', (e) => e.target.dataset.correct ? generateChart() : void(0));
