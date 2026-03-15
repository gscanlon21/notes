const root = document.getElementById("content");
const chart = document.getElementById("amsler-grid");
const lineGapRange = document.getElementById("line-gap-range");
const rowsColsRange = document.getElementById("row-col-range");
const dotSizeRange = document.getElementById("dot-size-range");

const setRowsCols = () => root.style.setProperty('--lines', parseInt(rowsColsRange.value));
rowsColsRange.addEventListener('input', setRowsCols);
setRowsCols();

const setDotSize = () => root.style.setProperty('--dot-size', `${parseInt(dotSizeRange.value)}px`);
dotSizeRange.addEventListener('input', setDotSize);
setDotSize();

const setLineGap = () => root.style.setProperty('--line-gap', `${parseInt(lineGapRange.value)}px`);
lineGapRange.addEventListener("input", setLineGap);
setLineGap();
