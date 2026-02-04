class Consts {
	static DEFAULT_RED_COLOR = '#ff0000';
	static DEFAULT_GREEN_COLOR = '#008000';
	static get STORAGE_KEY() { return 'VT_OPTIONS' };
}

const root = document.getElementById("content");
const options = document.getElementById("options");
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

// Update the permalink with the form values.
options.addEventListener('change', () => {
	const formData = new FormData(options);
	
	const url = new URL(location.origin + location.pathname);
	for (const [name, value] of new URLSearchParams(formData)) {
		url.searchParams.set(name, value);
	}
	
	history.pushState(null, '', url);

	const existing = JSON.parse(localStorage.getItem(Consts.STORAGE_KEY)) || {};
	const formDataOverwrites = { ...existing, ...Object.fromEntries(formData) };
	localStorage.setItem(Consts.STORAGE_KEY, JSON.stringify(formDataOverwrites));
});

// Set the form field value from saved form data.
const setField = (field, value) => {
	if (field.type === 'checkbox') {
		field.checked = value === 'on' || value === 'true' || value === field.value;
	} else {
		field.value = value;
	}
}

// Load from querystring, then localstorage.
const source = window.location.search 
	? new URLSearchParams(window.location.search) 
	: Object.entries(JSON.parse(localStorage.getItem(Consts.STORAGE_KEY)));

// Set the form field values from source. 
for (const [name, value] of source) {
	const fields = options.elements[name];
	if (fields) {
		if (fields.length) {
			for (const field of fields) {
				setField(field, value);
			}
		} else {
			setField(fields, value);
		}
	}
}
