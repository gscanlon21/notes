class Consts {
	static ROWS = 3;
	static COLS = 3;
	static MAX_IMAGE_SCALE = 35; 
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 100 : 25 };
	static get DEFAULT_IMAGE_GAP() { return navigator?.userAgentData?.mobile === false ? 20 : 15 };
 	static get DEFAULT_IMAGE_SIZE() { return navigator?.userAgentData?.mobile === false ? 100 : 75 };
}

const root = document.documentElement;
const content = document.getElementById("content");
const regenerate = document.getElementById("regenerate");
const chartLeft = document.getElementById("spot-the-match-left");
const chartRight = document.getElementById("spot-the-match-right");
const randomnessRange = document.getElementById("randomness-range");
const imgSizeRange = document.getElementById("image-size-range");
const imgGapRange = document.getElementById("image-gap-range");
const gapRange = document.getElementById("gap-range");

const newImageScale = () => 1 - ((Math.random() * Consts.MAX_IMAGE_SCALE) / 100);
const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const tryAddCorrectClassAfterMouseExit = (elem) => {
	// On mobile, add the correct class immediately. Otherwise, wait for mouseleave.
	if (elem.dataset.correct && elem.matches(':hover') && navigator.userAgentData.mobile === false) {
		elem.addEventListener('mouseleave', () => elem.classList.add('correct'), { once: true });
	}
	else if (elem.dataset.correct) {
		elem.classList.add('correct');
	}
}

const applyRandomRotationAndSize = (elem) => {
	elem.style.transform = `rotate(${Math.random() * 360}deg)`;
	elem.style.setProperty('--image-scale', newImageScale(imgSizeRange.value));
}

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const images = [];
	const imageArr = getImageArray().aShuffle();
	for (let i = 1; i < Consts.ROWS * Consts.COLS; i++) {
		const left = document.createElement("div");
		const right = document.createElement("div");

		applyRandomRotationAndSize(left);
		applyRandomRotationAndSize(right);

		if (i === 1) {
			left.dataset.correct = right.dataset.correct = "true";
			left.style.maskImage = right.style.maskImage = `url(${getImage(imageArr.pop())})`;
		} else {
			left.style.maskImage = `url(${getImage(imageArr.pop())})`;
			right.style.maskImage = `url(${getImage(imageArr.pop())})`;
		}

		images.push({ left, right });
	}

	// Swap the position of each matching image in each set.
	const leftIndex = Math.floor(Math.random() * images.length);
	const rightIndex = Math.floor(Math.random() * images.length);
	[images[0].left, images[leftIndex].left] = [images[leftIndex].left, images[0].left];
	[images[0].right, images[rightIndex].right] = [images[rightIndex].right, images[0].right];
	
	// Add a space in the middle of each set of images so it forms more of a ring shape.
	images.splice(4, 0, { left: document.createElement("br"), right: document.createElement("br") });
	
	for (const { left, right } of images) {
		chartLeft.appendChild(left);
		chartRight.appendChild(right);

		setTimeout(() => {
			// Wait for layout to update first.
			tryAddCorrectClassAfterMouseExit(left);
			tryAddCorrectClassAfterMouseExit(right);
		}, 0);
	}
};

const regenerateImageSizes = () => {
	for (const child of [...Array.from(chartLeft.childNodes), ...Array.from(chartRight.childNodes)]) {
		child.style.setProperty('--image-scale', newImageScale(imgSizeRange.value));
	}
}

const setImageSize = (_, v) => root.style.setProperty('--image-size', `${imgSizeRange.value = v ?? imgSizeRange.value}px`);
imgSizeRange.addEventListener('change', regenerateImageSizes);
imgSizeRange.addEventListener('input', setImageSize);
setImageSize(undefined, Consts.DEFAULT_IMAGE_SIZE);

const setImageGap = (_, v) => root.style.setProperty('--image-gap', `${imgGapRange.value = v ?? imgGapRange.value}px`);
imgGapRange.addEventListener('input', setImageGap);
setImageGap(undefined, Consts.DEFAULT_IMAGE_GAP);

const setRandomness = (_, v) => Consts.MAX_IMAGE_SCALE = parseInt(randomnessRange.value = v ?? randomnessRange.value);
randomnessRange.addEventListener('change', regenerateImageSizes);
randomnessRange.addEventListener('input', setRandomness);
setRandomness(undefined, Consts.MAX_IMAGE_SCALE);

const setGap = (_, v) => root.style.setProperty('--gap', `${gapRange.value = v ?? gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap(undefined, Consts.DEFAULT_GAP);

generateChart();
regenerate.addEventListener('click', generateChart);
content.addEventListener('click', (e) => e.target.dataset.correct ? generateChart() : void(0));
