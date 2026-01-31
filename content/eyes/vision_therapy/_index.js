class Consts {
	static DEFAULT_RED_COLOR = '#ff0000';
	static DEFAULT_GREEN_COLOR = '#008000';
}

const root = document.getElementById("content");
const redColor = document.getElementById("red-color");
const greenColor = document.getElementById("green-color");

const toRGB = (hex) => {
	const r = parseInt(hex.substr(1,2), 16)
	const g = parseInt(hex.substr(3,2), 16)
	const b = parseInt(hex.substr(5,2), 16)
	return `${r},${g},${b}`;
}
  

const setRedColor = (_, v) => root.style.setProperty('--color-red', toRGB(redColor.value = v ?? redColor.value));
redColor?.addEventListener("input", setRedColor);
setRedColor(undefined, Consts.DEFAULT_RED_COLOR);

const setGreenColor = (_, v) => root.style.setProperty('--color-green', toRGB(greenColor.value = v ?? greenColor.value));
greenColor?.addEventListener("input", setGreenColor);
setGreenColor(undefined, Consts.DEFAULT_GREEN_COLOR);
