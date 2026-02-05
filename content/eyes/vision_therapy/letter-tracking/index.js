class Consts {
	static MIN_GAP = 1;
	static MAX_GAP = 9;
	static MIN_WORD = 3;
	static MAX_WORD = 5;
}

const root = document.getElementById("content");
const lLetters = "abcdefghijklmnopqrstuvwxyz";
const uLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chart = document.getElementById("letter-tracking");
const lengthRange = document.getElementById("length-range");
const lettersInput = document.getElementById("letters-text");
const fontSizeRange = document.getElementById("font-size-range");
const paragraphsRange = document.getElementById("paragraphs-range");
const letterSpacingRange = document.getElementById("letter-spacing-range");
const lineHeightRange = document.getElementById("line-height-range");
const redGreenCheck = document.getElementById("red-green-checkbox");

const randomLetter = () => Array.from(lettersInput.value ?? uLetters).aRandom();
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const redOrGreen = () => ["red", "green"].aRandom();

const generateAlphabetSearch = (_, paragraphElem) => {
	paragraphElem = paragraphElem ?? chart.firstElementChild;

	let output = "";
	let wordCount = 0;
	const addChar = (char) => {
		wordCount++;
		output += char;

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

	paragraphElem.textContent = output.trim();
};

const generateParagraphs = () => {
	chart.childNodes.forEach(n => n.innerHTML = null);
	for (let i = 0; i < parseInt(paragraphsRange.value); i++) {
		generateAlphabetSearch(undefined, Array.from(chart.children)[i]);
	}
}

const setLetterSpacing= () => root.style.setProperty('--letter-spacing', `${letterSpacingRange.value}px`);
letterSpacingRange.addEventListener("input", setLetterSpacing);
setLetterSpacing();

const setLineHeight = () => root.style.setProperty('--line-height', `${lineHeightRange.value}`);
lineHeightRange.addEventListener("input", setLineHeight);
setLineHeight();

const setFontSize = () => root.style.setProperty('--font-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener("input", setFontSize);
setFontSize();

const setLength = () => Consts.MAX_GAP = `${lengthRange.value}`;
lengthRange.addEventListener("input", setLength);
setLength();

const onRGCheck = () => chart.aToggleClass('red-green', redGreenCheck.checked);
redGreenCheck.addEventListener('change', onRGCheck);
onRGCheck()

paragraphsRange.addEventListener("input", generateParagraphs);
lettersInput.addEventListener('change', generateParagraphs);
lengthRange.addEventListener('change', generateParagraphs);
regenerate.addEventListener('click', generateParagraphs);
generateParagraphs();
