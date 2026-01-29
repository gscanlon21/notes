class Consts {
	static DEFAULT_GAP = 25;
	static MAX_ATTEMPTS = 10;
	static DEFAULT_NUMBERS = 50;
	static DEFAULT_FONT_SIZE = 37;
}

const chart = document.getElementById("number-chart");
const regenerate = document.getElementById("regenerate");
const redGreenCheck = document.getElementById("red-green-checkbox");
const fontSizeRange = document.getElementById("font-size-range");
const numbersRange = document.getElementById("numbers-range");
const gapRange = document.getElementById("gap-range");

const redOrGreen = () => ["red", "green"].aRandom();

const intersectsWithGap = (a, b, gap = Consts.DEFAULT_GAP) => !(
	a.top - gap > b.bottom + gap ||
	a.left - gap > b.right + gap ||
	a.right + gap < b.left - gap ||
	a.bottom + gap < b.top - gap
);

const intersectsChartEdgeWithGap = (rect, containerRect, gap = Consts.DEFAULT_GAP) => (
	rect.top < containerRect.top + gap ||
	rect.left < containerRect.left + gap ||
	rect.right > containerRect.right - gap ||
	rect.bottom > containerRect.bottom - gap
);

const randomPosition = (number, width, height) => {
	const rect = number.getBoundingClientRect();
	number.style.left = `${Math.random() * (width - rect.width)}px`;
	number.style.top = `${Math.random() * (height - rect.height)}px`;
};

const generateNumberSearch = (_, count, gap) => {
	count = numbersRange.value = count ?? numbersRange.value;
	gap = gapRange.value = gap ?? gapRange.value;
	chart.innerHTML = "";
	
	const placedNumbers = [];
	const chartRect = chart.getBoundingClientRect();
	for (let i = 0, nextNum = 0; i < count; i++) {
		const number = document.createElement("div").aWithClass('number');

		redGreenCheck.checked ? number.classList.add(redOrGreen()) : void(0);

		number.textContent = (nextNum++).toString();
		chart.appendChild(number);

		let placedSuccessfully = false;
		for (let attempts = 0; attempts < Consts.MAX_ATTEMPTS; attempts++) {
			randomPosition(number, chartRect.width, chartRect.height);
			const rect = number.getBoundingClientRect();

			if (!intersectsChartEdgeWithGap(rect, chartRect, gap) &&
				!placedNumbers.some(p => intersectsWithGap(rect, p.getBoundingClientRect(), gap))) {
				placedNumbers.push(number);
				placedSuccessfully = true;
				break;
			}
		}

		if (!placedSuccessfully) {
			number.remove();
			nextNum--;
		}
	}
};

const setFontSizeRange = (_, v) => chart.style.fontSize = `${fontSizeRange.value = v ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSizeRange);
// Set the font size range before generating the search.
setFontSizeRange(undefined, Consts.DEFAULT_FONT_SIZE);

gapRange.addEventListener("input", generateNumberSearch);
regenerate.addEventListener('click', generateNumberSearch);
numbersRange.addEventListener("input", generateNumberSearch);
redGreenCheck.addEventListener("change", generateNumberSearch);
generateNumberSearch(undefined, Consts.DEFAULT_NUMBERS, Consts.DEFAULT_GAP);
