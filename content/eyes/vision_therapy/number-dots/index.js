class Consts {
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 25 : 25 };
 	static get DEFAULT_IMAGE_SIZE() { return navigator?.userAgentData?.mobile === false ? 25 : 25 };
}

const chart = document.getElementById("number-dots");
const gapRange = document.getElementById("gap-range");
const startCheck = document.getElementById("start-checkbox");
const fontSizeRange = document.getElementById("font-size-range");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const setFontSize = () => chart.style.setProperty('--font-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener('input', setFontSize);
setFontSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap();

const onStartCheck = () => chart.aToggleClass('start-at-one', startCheck.checked);
startCheck.addEventListener('change', onStartCheck);
onStartCheck()
