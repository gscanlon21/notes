const fusion = document.querySelector("#fusion-input");
const stereoCircles = document.querySelector("#stereo-circles");
const scaleInput = document.querySelector("#scale-input");
const vergenceInput = document.querySelector("#vergence-input");
const vergenceOutput = document.querySelector("#vergence-output");
const scaleOutput = document.querySelector("#scale-output");

onVergence();
vergenceInput.addEventListener('input', onVergence);
function onVergence() {
	const slideValue = parseFloat(vergenceInput.value);
	stereoCircles.style.setProperty("--delta", slideValue / 24 * 2.6);
	
	if (slideValue < 0) {
		vergenceOutput.innerText = "C" + Math.abs(slideValue).toFixed(2);
	} else if (slideValue > 0) {
		vergenceOutput.innerText = "D" + Math.abs(slideValue).toFixed(2);
	} else {
		vergenceOutput.innerText = "0";
	}
}

onFusion();
fusion.addEventListener('change', onFusion);
function onFusion() {
	if (fusion.checked) {
		stereoCircles.style.setProperty("--glyphScale", "0.33");
		stereoCircles.classList.add("fusion");
	} else {
		stereoCircles.style.setProperty("--glyphScale", "1");
		stereoCircles.classList.remove("fusion");
	}
}

onScale();
scaleInput.addEventListener('input', onScale);
function onScale() {
	stereoCircles.style.setProperty("--scale", scaleInput.value);
	scaleOutput.dataset.value = parseFloat(scaleInput.value).toFixed(2);
}

vergenceInput.ontouchstart = scaleInput.ontouchstart = (e) => e.stopPropagation();
