class Consts {
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 25 : 25 };
 	static get DEFAULT_IMAGE_SIZE() { return navigator?.userAgentData?.mobile === false ? 25 : 25 };
}

const chart = document.getElementById("number-dots");
const gapRange = document.getElementById("gap-range");
const startCheck = document.getElementById("start-checkbox");
const fontSizeRange = document.getElementById("font-size-range");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const setFontSize = (_, v) => chart.style.setProperty('--font-size', `${fontSizeRange.value = v ?? fontSizeRange.value}px`);
fontSizeRange.addEventListener('input', setFontSize);
setFontSize(undefined, Consts.DEFAULT_IMAGE_SIZE);

const setGap = (_, v) => chart.style.setProperty('--gap', `${gapRange.value = v ?? gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap(undefined, Consts.DEFAULT_GAP);

startCheck.addEventListener('change', () => chart.aToggleClass('start-at-one'));
