class Consts {
	static MIN_GAP = 1;
	static MAX_GAP = 9;
	static MIN_WORD = 3;
	static MAX_WORD = 5;
	static DEFAULT_FONT_SIZE = 35;
	static DEFAULT_LINE_HEIGHT = 1.5;
	static DEFAULT_LETTER_SPACING = 0;
}

const lLetters = "abcdefghijklmnopqrstuvwxyz";
const uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-tracking");
const lettersInput = document.getElementById("letters-text");
const fontSizeRange = document.getElementById("font-size-range");
const letterSpacingRange = document.getElementById("letter-spacing-range");
const lineHeightRange = document.getElementById("line-height-range");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomLetter = () => Array.from(lettersInput.value ?? uLetters).aRandom();
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

	for (const target of uLetters) {
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

const setLetterSpacing= (_, v) => chart.style.letterSpacing = `${letterSpacingRange.value = v ?? letterSpacingRange.value}px`;
letterSpacingRange.addEventListener("input", setLetterSpacing);
setLetterSpacing(undefined, Consts.DEFAULT_LETTER_SPACING);

const setLineHeight = (_, v) => chart.style.lineHeight = `${lineHeightRange.value = v ?? lineHeightRange.value}`;
lineHeightRange.addEventListener("input", setLineHeight);
setLineHeight(undefined, Consts.DEFAULT_LINE_HEIGHT);

const setFontSize = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
setFontSize(undefined, Consts.DEFAULT_FONT_SIZE);

redGreenCheck.addEventListener('change', () => chart.aToggleClass('red-green'));
lettersInput.addEventListener('change', generateAlphabetSearch);
regenerate.addEventListener('click', generateAlphabetSearch);
generateAlphabetSearch();
