const fusion = document.querySelector("#fusion-input");
const tranaglyph = document.querySelector("#tranaglyph");
const scaleInput = document.querySelector("#scale-input");
const vergenceInput = document.querySelector("#vergence-input");
const vergenceOutput = document.querySelector("#vergence-output");
const scaleOutput = document.querySelector("#scale-output");

onVergence();
vergenceInput.addEventListener('input', onVergence);
function onVergence() {
	const slideValue = parseFloat(vergenceInput.value);
	tranaglyph.style.setProperty("--delta", slideValue / 24 * 2.6);
	
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
		tranaglyph.style.setProperty("--glyphScale", "0.33");
		tranaglyph.classList.add("fusion");
	} else {
		tranaglyph.style.setProperty("--glyphScale", "1");
		tranaglyph.classList.remove("fusion");
	}
}

onScale();
scaleInput.addEventListener('input', onScale);
function onScale() {
	tranaglyph.style.setProperty("--scale", scaleInput.value);
	scaleOutput.dataset.value = parseFloat(scaleInput.value).toFixed(2);
}

vergenceInput.ontouchstart = scaleInput.ontouchstart = (e) => e.stopPropagation();
