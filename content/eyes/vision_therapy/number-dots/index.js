const chart = document.getElementById("number-dots");
const gapRange = document.getElementById("gap-range");
const startCheck = document.getElementById("start-checkbox");
const fontSizeRange = document.getElementById("font-size-range");

const setFontSize = () => chart.style.setProperty('--font-size', `${fontSizeRange.value}px`);
fontSizeRange.addEventListener('input', setFontSize);
setFontSize();

const setGap = () => chart.style.setProperty('--gap', `${gapRange.value}px`);
gapRange.addEventListener('input', setGap);
setGap();

const onStartCheck = () => chart.aToggleClass('start-at-one', startCheck.checked);
startCheck.addEventListener('change', onStartCheck);
onStartCheck()
