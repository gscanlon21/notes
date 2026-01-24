const defaultFontSize = 40;
const defaultDisparity = 10;

const tranaglyph = document.getElementById("tranaglyph");
const tranaglyphLeft = document.getElementById("tranaglyph-left");
const tranaglyphRight = document.getElementById("tranaglyph-right");
const fontSizeRange = document.getElementById("font-size-select");

const createTarget = ({ classes = [], size = 200, symbol = "◯", disparity = defaultDisparity, side = "both" }) => {
	const left = document.createElement("span");
	left.style.transform = `translateX(-${disparity}px)`;
	left.style.height = `${size}px`;
	left.style.width = `${size}px`;
	left.classList.add(...classes);
	left.classList.add("left");
	left.textContent = symbol;

	const right = document.createElement("span");
	right.style.transform = `translateX(${disparity}px)`;
	right.style.height = `${size}px`;
	right.style.width = `${size}px`;
	right.classList.add(...classes);
	right.classList.add("right");
	right.textContent = symbol;

	tranaglyphLeft.appendChild(left);
	tranaglyphRight.appendChild(right);
};

const generateTranaglyph = () => {
	createTarget({ classes: ["outer-circle", "eye"], size: 260, symbol: "◯" });
	createTarget({ classes: ["inner-circle", "eye"], size: 200, symbol: "◯", disparity: 50 });
	createTarget({ classes: ["center-cross", "eye"], size: 80, symbol: "✕", disparity: 0 });
	createTarget({ classes: ["suppression-circle", "eye"], size: 30, symbol: "◯", disparity: 14, side: "left" });
	createTarget({ classes: ["suppression-square", "eye"], size: 30, symbol: "▢", disparity: 14, side: "right" });
	createTarget({ classes: ["satellite-circle", "eye"], size: 50, symbol: "◯", disparity: 14 });
};

generateTranaglyph();