const root = document.documentElement;
const chart = document.getElementById("chart");
const regenerate = document.getElementById("regenerate");
const chartLeft = document.getElementById("tranaglyph-left");
const chartRight = document.getElementById("tranaglyph-right");
const redGreenCheck = document.getElementById("red-green-checkbox");
const vergenceOutput = document.querySelector("#vergence-output");
const vergenceInput = document.querySelector("#vergence-input");
const stereoCircles = document.querySelector("#stereo-circles");
const stereoCircleRight = document.getElementById("right-eye");
const stereoCircleLeft = document.getElementById("left-eye");
const scaleOutput = document.querySelector("#scale-output");
const scaleInput = document.querySelector("#scale-input");

const getImageArray = () => Array.from({ length: 100 }, (_, i) => String(i + 1).padStart(3, "0"));
const getImage = (number) => `./pdshape_${number}.png`;

const generateChart = () => {
	chartLeft.innerHTML = null;
	chartRight.innerHTML = null;

	const imageArr = getImageArray().aShuffle();
	const left = document.createElement("div").aWithClass('image');
	const right = document.createElement("div").aWithClass('image');

	left.classList.add(redGreenCheck.checked ? 'red' : 'green');
	right.classList.add(redGreenCheck.checked ? 'green' : 'red');
	stereoCircleLeft.aToggleClass('red', !redGreenCheck.checked);
	stereoCircleLeft.aToggleClass('green', redGreenCheck.checked);
	stereoCircleRight.aToggleClass('green', !redGreenCheck.checked);
	stereoCircleRight.aToggleClass('red', redGreenCheck.checked);

	left.style.maskImage = right.style.maskImage = `url(${getImage(imageArr.pop())})`;

	chartLeft.appendChild(left);
	chartRight.appendChild(right);
};

onVergence();
vergenceInput.addEventListener('input', onVergence);
function onVergence() {
	const slideValue = parseFloat(vergenceInput.value);
	root.style.setProperty("--delta", slideValue / 24 * 2.6);
	
	if (slideValue < 0) {
		vergenceOutput.innerText = "C" + Math.abs(slideValue).toFixed(2);
	} else if (slideValue > 0) {
		vergenceOutput.innerText = "D" + Math.abs(slideValue).toFixed(2);
	} else {
		vergenceOutput.innerText = "0";
	}
}

onScale();
scaleInput.addEventListener('input', onScale);
function onScale() {
	root.style.setProperty("--scale", scaleInput.value);
	scaleOutput.dataset.value = parseFloat(scaleInput.value).toFixed(2);
}

const setGap = () => root.style.setProperty('--gap', `${Math.abs(vergenceInput.value * 2.6)}px`);
vergenceInput.addEventListener('input', setGap);
setGap();

redGreenCheck.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
