const chart = document.getElementById("chart");
const gapRange = document.getElementById("gap-range");
const sizeRange = document.getElementById("size-range");
const redGreenCheck = document.getElementById("red-green-checkbox");

const setSize = () => chart.style.setProperty('--size', `${sizeRange.value}px`);
options.addEventListener('reset', () => setTimeout(setSize));
sizeRange.addEventListener('input', setSize);
setSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
options.addEventListener('reset', () => setTimeout(setGap));
gapRange.addEventListener('input', setGap);
setGap();

setColor()
redGreenCheck.addEventListener('change', setColor);
options.addEventListener('reset', () => setTimeout(setColor));

function setColor() {
	chart.style.setProperty('--color-left', redGreenCheck.checked ? 'var(--color-green)' : 'var(--color-red)');
	chart.style.setProperty('--color-right', redGreenCheck.checked ? 'var(--color-red)' : 'var(--color-green)');
}
