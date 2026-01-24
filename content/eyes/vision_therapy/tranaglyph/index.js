const defaultFontSize = 40;
const defaultDisparity = 10;

const tranaglyph = document.getElementById("tranaglyph");
const fontSizeRange = document.getElementById("font-size-select");

const createTarget = ({x, y, size = 200, symbol = "◯", disparity = defaultDisparity}) => {
	const target = document.createElement("div");
	target.className = "tranaglyph-target";
	target.style.left = `${x}%`;
	target.style.top = `${y}%`;
	target.style.width = `${size}px`;
	target.style.height = `${size}px`;

	const left = document.createElement("span");
	left.className = "eye left-eye";
	left.textContent = symbol;
	left.style.transform = `translateX(-${disparity}px)`;

	const right = document.createElement("span");
	right.className = "eye right-eye";
	right.textContent = symbol;
	right.style.transform = `translateX(${disparity}px)`;

	target.append(left, right);
	tranaglyph.appendChild(target);
};

const generateTranaglyph = () => {
	tranaglyph.innerHTML = "";

	// Left fusion ring
	createTarget({ x: 35, y: 55, size: 260, symbol: "◯" });

	// Right fusion ring
	createTarget({ x: 65, y: 55, size: 260, symbol: "◯" });

	// Center fixation X (binocular)
	createTarget({ x: 35, y: 55, size: 80, symbol: "✕", disparity: 0 });

	createTarget({ x: 65, y: 55, size: 80, symbol: "✕", disparity: 0 });

	// Monocular dots (suppression checks)
	createTarget({ x: 25, y: 75, size: 50, symbol: "●", disparity: 14 });

	createTarget({ x: 75, y: 35, size: 50, symbol: "●", disparity: 14 });
};

generateTranaglyph();