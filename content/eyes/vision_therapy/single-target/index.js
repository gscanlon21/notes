class Consts {
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 100 : 25 };
 	static get DEFAULT_IMAGE_SIZE() { return navigator?.userAgentData?.mobile === false ? 100 : 75 };
}

const chart = document.getElementById("single-target-wrapper");
const regenerate = document.getElementById("regenerate");
const imageCheck = document.getElementById("image-checkbox");
const characterText = document.getElementById("alphanumeric-text");
const redGreenCheck = document.getElementById("red-green-checkbox");
const sizeRange = document.getElementById("size-range");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	chart.innerHTML = null;

	const imageArr = getImageArray().aShuffle();
	const target = document.createElement("div").aWithClass('target');

	const redGreenList = ["red", "green"].aShuffle();
	redGreenCheck.checked ? target.classList.add(redGreenList[0]) : void(0);

	if (imageCheck.checked) {
		target.classList.add('image');
		target.style.maskImage = `url(${getImage(imageArr.pop())})`;
	}
	else {
		target.classList.add('alphanumeric');
		target.textContent = characterText.value ?? 'X';
	}

	chart.appendChild(target);
};

const regenerateImageSizes = () => {
	for (const child of Array.from(chart.childNodes)) {
		child.style.setProperty('--scale', sizeRange.value);
	}
}

const setSize = () => chart.style.setProperty('--size', `${sizeRange.value}px`);
sizeRange.addEventListener('change', regenerateImageSizes);
sizeRange.addEventListener('input', setSize);
setSize();

generateChart();
regenerate.addEventListener('click', generateChart);
imageCheck.addEventListener('change', generateChart);
characterText.addEventListener('change', generateChart);
redGreenCheck.addEventListener('change', generateChart);
