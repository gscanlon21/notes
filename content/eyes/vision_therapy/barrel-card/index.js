class Consts {
	static DEFAULT_COLOR = "var(--color-red)";
	static get DEFAULT_GAP() { return navigator?.userAgentData?.mobile === false ? 100 : 25 };
 	static get DEFAULT_SIZE() { return navigator?.userAgentData?.mobile === false ? 100 : 75 };
}

const root = document.getElementById("barrel-card");
const regenerate = document.getElementById("regenerate");
const redGreenCheck = document.getElementById("red-green-checkbox");
const sizeRange = document.getElementById("size-range");
const gapRange = document.getElementById("gap-range");

const setSize = (_, v) => root.style.setProperty('--size', `${sizeRange.value = v ?? sizeRange.value}px`);
sizeRange.addEventListener('input', setSize);
setSize(undefined, Consts.DEFAULT_SIZE);

const setGap = (_, v) => root.style.setProperty('--gap', `${gapRange.value = v ?? gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap(undefined, Consts.DEFAULT_GAP);

const setColor = (_, v) => root.style.setProperty('--color', redGreenCheck.checked ? 'var(--color-green)' : 'var(--color-red)');
redGreenCheck.addEventListener('change', setColor);
setColor(undefined, Consts.DEFAULT_COLOR)