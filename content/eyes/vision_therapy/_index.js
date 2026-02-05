class Consts {
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

// Load shared form field values after loading from storage.
const setGreenColor = () => root.style.setProperty('--color-green', toRGB(greenColor.value));
greenColor?.addEventListener("input", setGreenColor);
greenColor ? setGreenColor() : void(0);

// Load shared form field values after loading from storage.
const setRedColor = () => root.style.setProperty('--color-red', toRGB(redColor.value));
redColor?.addEventListener("input", setRedColor);
redColor ? setRedColor() : void(0);
