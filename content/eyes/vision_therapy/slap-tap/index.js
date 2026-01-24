const rows = 10;
const cols = 10;
const defaultFontSize = 40;
const defaultLetterGap = 10;
const symbols = ["p", "b", "d", "q", "Φ", "○"];
const chart = document.getElementById("slap-tap");
const fontSizeRange = document.getElementById("font-size-select");
const letterGapRange = document.getElementById("letter-gap-select");

const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const generateSlapTapGrid = () => {
  chart.innerHTML = "";
  chart.style.display = "grid";
  chart.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  chart.style.placeItems = "center";

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.textContent = randomSymbol();
    cell.style.userSelect = "none";
    chart.appendChild(cell);
  }
};

generateSlapTapGrid();

const setFontSizeRange = (_, value) => chart.style.fontSize = `${fontSizeRange.value = value ?? fontSizeRange.value}px`;
fontSizeRange.addEventListener('input', setFontSizeRange);
setFontSizeRange(undefined, defaultFontSize);

const setLetterGapRange = (_, value) => chart.style.gap = `${letterGapRange.value = value ?? letterGapRange.value}px`;
letterGapRange.addEventListener('input', setLetterGapRange);
setLetterGapRange(undefined, defaultLetterGap);
