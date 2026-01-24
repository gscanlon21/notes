const rows = 3;
const cols = 3;
const defaultFontSize = 40;
const defaultLetterGap = 10;
const chartLeft = document.getElementById("spot-the-match-left");
const chartRight = document.getElementById("spot-the-match-right");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const getImage = (number) => `./pdshape_${number}.png`;
const padNumber = (number) => String(number).padStart(3, "0");
const getImageArray = () => Array.from({ length: 100 }, (_, i) => padNumber(i + 1)).toSorted(() => Math.random() - 0.5);

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const imagesLeft = [];
	const imagesRight = [];
	const imageArray = getImageArray();
	const blankLeft = document.createElement("div");
	const blankRight = document.createElement("div");
	for (let i = 1; i < rows * cols; i++) {
		const cellLeft = document.createElement("div");
		const cellRight = document.createElement("div");

		if (i === 1) {
			const image = getImage(imageArray.pop());
			cellLeft.style.backgroundImage = `url(${image})`;
			cellRight.style.backgroundImage = `url(${image})`;
		}
		else {
			cellLeft.style.backgroundImage = `url(${getImage(imageArray.pop())})`;
			cellRight.style.backgroundImage = `url(${getImage(imageArray.pop())})`;
		}
		
		imagesLeft.push(cellLeft);
		imagesRight.push(cellRight);
	}

	imagesLeft.sort(() => Math.random() - 0.5);
	imagesRight.sort(() => Math.random() - 0.5);
	
	imagesLeft.splice(4, 0, blankLeft);
	imagesRight.splice(4, 0, blankRight);
	for (let i = 0; i < rows * cols; i++) {
		chartLeft.appendChild(imagesLeft[i]);
		chartRight.appendChild(imagesRight[i]);
	}
}

generateChart();

const setFontSizeRange = (_, value) => chartLeft.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);

const setLetterGapRange = (_, value) => chartLeft.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, defaultLetterGap);
