const chart = document.getElementById("number-dots");
const gapRange = document.getElementById("gap-range");
const startCheck = document.getElementById("start-checkbox");
const fontSizeRange = document.getElementById("font-size-range");

const setFontSize = () => chart.style.setProperty('--font-size', `${fontSizeRange.value}px`);
options.addEventListener('reset', () => setTimeout(setFontSize));
fontSizeRange.addEventListener('input', setFontSize);
setFontSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
options.addEventListener('reset', () => setTimeout(setGap));
gapRange.addEventListener('input', setGap);
setGap();

const onStartCheck = () => chart.aToggleClass('start-at-one', startCheck.checked);
options.addEventListener('reset', () => setTimeout(onStartCheck));
startCheck.addEventListener('change', onStartCheck);
onStartCheck()
