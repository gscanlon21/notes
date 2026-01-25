class Consts {
	static ROWS = 3;
	static COLS = 3;
	static MAX_IMAGE_SCALE = 35; 
	static DEFAULT_IMAGE_GAP = 15;
 	static DEFAULT_IMAGE_SIZE = 100;
	static DEFAULT_GAP = 75;
}

const root = document.documentElement;
const regenerate = document.getElementById("regenerate");
const wrapper = document.getElementById("spot-the-match-wrapper");
const chartLeft = document.getElementById("spot-the-match-left");
const chartRight = document.getElementById("spot-the-match-right");
const imageSizeRange = document.getElementById("image-size-range");
const imageGapRange = document.getElementById("image-gap-range");
const gapRange = document.getElementById("gap-range");

const newImageSize = (fontSize) => fontSize - (fontSize * ((Math.random() * Consts.MAX_IMAGE_SCALE) / 100));
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
	elem.style.setProperty('--image-size', `${newImageSize(imageSizeRange.value)}px`);
}

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const images = [];
	const imageArr = getImageArray().toSorted(() => Math.random() - 0.5);
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
		child.style.setProperty('--image-size', `${newImageSize(imageSizeRange.value)}px`);
	}
}

const setImageSize = (_, v) => root.style.setProperty('--image-size', `${imageSizeRange.value = v ?? imageSizeRange.value}px`);
imageSizeRange.addEventListener('change', regenerateImageSizes);
imageSizeRange.addEventListener('input', setImageSize);
setImageSize(undefined, Consts.DEFAULT_IMAGE_SIZE);

const setImageGap = (_, v) => root.style.setProperty('--image-gap', `${imageGapRange.value = v ?? imageGapRange.value}px`);
imageGapRange.addEventListener('input', setImageGap);
setImageGap(undefined, Consts.DEFAULT_IMAGE_GAP);

const setGap = (_, v) => root.style.setProperty('--gap', `${gapRange.value = v ?? gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap(undefined, Consts.DEFAULT_GAP);

generateChart();
regenerate.addEventListener('click', generateChart);
wrapper.addEventListener('click', (e) => e.target.dataset.correct ? generateChart() : void(0));
