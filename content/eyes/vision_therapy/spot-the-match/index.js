class Consts {
  static ROWS = 3;
  static COLS = 3;
  static DEFAULT_FONT_SIZE = 40;
  static DEFAULT_LETTER_GAP = 10;
}

const chartLeft = document.getElementById("spot-the-match-left");
const chartRight = document.getElementById("spot-the-match-right");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const imagesLeft = [];
	const imagesRight = [];
	const blankLeft = document.createElement("div");
	const blankRight = document.createElement("div");
	const imageArray = getImageArray().toSorted(() => Math.random() - 0.5);
	for (let i = 1; i < Consts.ROWS * Consts.COLS; i++) {
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
	for (let i = 0; i < Consts.ROWS * Consts.COLS; i++) {
		chartLeft.appendChild(imagesLeft[i]);
		chartRight.appendChild(imagesRight[i]);
	}
}

generateChart();

const setFontSizeRange = (_, value) => chartLeft.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLetterGapRange = (_, value) => chartLeft.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, Consts.DEFAULT_LETTER_GAP);
