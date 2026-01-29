class Consts {
	static MIN_GAP = 1;
	static MAX_GAP = 9;
	static MIN_WORD = 3;
	static MAX_WORD = 5;
	static DEFAULT_FONT_SIZE = 35;
	static DEFAULT_LINE_HEIGHT = 1.5;
}

const letters = "abcdefghijklmnopqrstuvwxyz";
const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const chart = document.getElementById("letter-tracking");
const fontSizeRange = document.getElementById("font-size-range");
const lineHeightRange = document.getElementById("line-height-range");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomLetter = () => Array.from(letters).aRandom();
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const redOrGreen = () => ["red", "green"].aRandom();

const generateAlphabetSearch = () => {
	let output = "";
	let index = 0;
	let wordCount = 0;

	const addChar = (char) => {
		output += char;
		index++;
		wordCount++;

		if (wordCount >= Consts.MAX_WORD) {
			output += " ";
			wordCount = 0;
			return;
		}

		if (wordCount >= Consts.MIN_WORD && Math.random() < 0.5) {
			output += " ";
			wordCount = 0;
		}
	};

	for (const target of letters) {
		for (let i = 0; i < rand(Consts.MIN_GAP, Consts.MAX_GAP - 1); i++) {
			addChar(randomLetter());
		}

		addChar(target);
	}

	for (let i = 0; i < rand(Consts.MIN_GAP, Consts.MAX_GAP - 1); i++) {
		addChar(randomLetter());
	}

	chart.textContent = output.trim();
};


const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

const setLineHeight = (_, value) => chart.style.lineHeight = `${lineHeightRange.value = value ?? lineHeightRange.value}`;
lineHeightRange.addEventListener("input", setLineHeight);
setLineHeight(undefined, Consts.DEFAULT_LINE_HEIGHT);

redGreenCheck.addEventListener('change', () => chart.aToggleClass('red-green'));
regenerate.addEventListener('click', generateAlphabetSearch);
generateAlphabetSearch();
