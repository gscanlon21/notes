class Consts {
	static MAX_ATTEMPTS = 10;
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
	count = numbersRange.value = count ?? parseInt(numbersRange.value);
	gap = gapRange.value = gap ?? parseInt(gapRange.value);
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

const setFontSize = () => chart.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", setFontSize);
// Set the font size before generating the search.
setFontSize();

gapRange.addEventListener("input", generateNumberSearch);
regenerate.addEventListener('click', generateNumberSearch);
numbersRange.addEventListener("input", generateNumberSearch);
redGreenCheck.addEventListener("change", generateNumberSearch);
generateNumberSearch();
