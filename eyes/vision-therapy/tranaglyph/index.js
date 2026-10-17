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

	if (redGreenCheck.checked) {
		left.classList.add('red');
		right.classList.add('green');
		stereoCircleLeft.classList.add('red');
		stereoCircleLeft.classList.remove('green');
		stereoCircleRight.classList.remove('red');
		stereoCircleRight.classList.add('green');
	} else {
		right.classList.add('red');
		left.classList.add('green');
		stereoCircleRight.classList.add('red');
		stereoCircleRight.classList.remove('green');
		stereoCircleLeft.classList.remove('red');
		stereoCircleLeft.classList.add('green');
	}

	left.style.maskImage = right.style.maskImage = `url(${getImage(imageArr.pop())})`;

	chartLeft.appendChild(left);
	chartRight.appendChild(right);
};

onVergence();
vergenceInput.addEventListener('input', onVergence);
options.addEventListener('reset', () => setTimeout(onVergence));

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
options.addEventListener('reset', () => setTimeout(onScale));

function onScale() {
	root.style.setProperty("--scale", scaleInput.value);
	scaleOutput.dataset.value = parseFloat(scaleInput.value).toFixed(2);
}

const setGap = () => root.style.setProperty('--gap', `${Math.abs(vergenceInput.value * 2.6)}px`);
options.addEventListener('reset', () => setTimeout(setGap));
vergenceInput.addEventListener('input', setGap);
setGap();

options.addEventListener('reset', () => setTimeout(generateChart));
redGreenCheck.addEventListener('change', generateChart);
regenerate.addEventListener('click', generateChart);
generateChart();
