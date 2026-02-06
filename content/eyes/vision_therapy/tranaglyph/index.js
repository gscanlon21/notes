class Consts {
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 100 : 25 };
 	static get DEFAULT_IMAGE_SIZE() { return navigator?.userAgentData?.mobile === false ? 100 : 75 };
}

const root = document.getElementById("content");
const regenerate = document.getElementById("regenerate");
const chartLeft = document.getElementById("tranaglyph-left");
const chartRight = document.getElementById("tranaglyph-right");
const redGreenCheck = document.getElementById("red-green-checkbox");
const imgSizeRange = document.getElementById("image-size-range");
//const gapRange = document.getElementById("gap-range");
const fusion = document.querySelector("#fusion-input");
const stereoCircles = document.querySelector("#stereo-circles");
const scaleInput = document.querySelector("#scale-input");
const vergenceInput = document.querySelector("#vergence-input");
const vergenceOutput = document.querySelector("#vergence-output");
const scaleOutput = document.querySelector("#scale-output");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const imageArr = getImageArray().aShuffle();
	const left = document.createElement("div").aWithClass('image');
	const right = document.createElement("div").aWithClass('image');

	left.classList.add(redGreenCheck.checked ? 'red' : 'green');
	right.classList.add(redGreenCheck.checked ? 'green' : 'red');

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

const setGap = () => root.style.setProperty('--gap', `${Math.abs(vergenceInput.value * 2.6)}px`);
vergenceInput.addEventListener('input', setGap);
setGap();

generateChart();
regenerate.addEventListener('click', generateChart);
redGreenCheck.addEventListener('change', generateChart);
root.addEventListener('click', (e) => e.target.dataset.correct ? generateChart() : void(0));





onVergence();
vergenceInput.addEventListener('input', onVergence);
function onVergence() {
	const slideValue = parseFloat(vergenceInput.value);
	root.style.setProperty("--delta", slideValue / 24 * 2.6);
	
	if (slideValue < 0) {
		vergenceOutput.innerText = "C" + Math.abs(slideValue).toFixed(2);
	} else if (slideValue > 0) {
		vergenceOutput.innerText = "D" + Math.abs(slideValue).toFixed(2);
	} else {
		vergenceOutput.innerText = "0";
	}
}

onFusion();
fusion.addEventListener('change', onFusion);
function onFusion() {
	if (fusion.checked) {
		stereoCircles.style.setProperty("--glyphScale", "0.33");
		stereoCircles.classList.add("fusion");
	} else {
		stereoCircles.style.setProperty("--glyphScale", "1");
		stereoCircles.classList.remove("fusion");
	}
}

onScale();
scaleInput.addEventListener('input', onScale);
function onScale() {
	stereoCircles.style.setProperty("--scale", scaleInput.value);
	scaleOutput.dataset.value = parseFloat(scaleInput.value).toFixed(2);
}

vergenceInput.ontouchstart = scaleInput.ontouchstart = (e) => e.stopPropagation();
