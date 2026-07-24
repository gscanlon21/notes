class Consts {
	static STORAGE_KEY(slug) { 
		if (slug) {
			return `EYE_OPTIONS_${slug}`;
		}

		return `EYE_OPTIONS`;
	};
}

const page = document.getElementById("content");
const options = document.getElementById("options");
const redColor = document.getElementById("red-color");
const greenColor = document.getElementById("green-color");

const toRGB = (hex) => {
	const r = parseInt(hex.substr(1,2), 16)
	const g = parseInt(hex.substr(3,2), 16)
	const b = parseInt(hex.substr(5,2), 16)
	return `${r},${g},${b}`;
}

// Save form data to queryString and localStorage.
const saveFormData = () => {
	const formData = new FormData(options);
	
	const url = new URL(location.origin + location.pathname);
	for (const [name, value] of new URLSearchParams(formData)) {
		url.searchParams.set(name, value);
	}
	
	history.pushState(null, '', url);

	const formEntries = Object.entries(Object.fromEntries(formData));
	const pageOptions = formEntries.filter(([key]) => key.includes(page.dataset.slug));
	const globalOptions = formEntries.filter(([key]) => !key.includes(page.dataset.slug));

	localStorage.setItem(Consts.STORAGE_KEY(null), JSON.stringify(Object.fromEntries(globalOptions)));
	localStorage.setItem(Consts.STORAGE_KEY(page.dataset.slug), JSON.stringify(Object.fromEntries(pageOptions)));
}

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
	: Object.entries({
		...(JSON.parse(localStorage.getItem(Consts.STORAGE_KEY(null))) ?? {}),
		...(JSON.parse(localStorage.getItem(Consts.STORAGE_KEY(page.dataset.slug))) ?? {})
	});

// Set the form field values from source. 
for (const [name, value] of source) {
	const field = options.elements[name];
	if (field) {
		setField(field, value);
	}
}

// Load shared form field values after loading from storage.
const setGreenColor = () => page.style.setProperty('--color-green', toRGB(greenColor.value));
options.addEventListener('reset', () => setTimeout(setGreenColor));
greenColor?.addEventListener("input", setGreenColor);
greenColor ? setGreenColor() : void(0);

// Load shared form field values after loading from storage.
const setRedColor = () => page.style.setProperty('--color-red', toRGB(redColor.value));
options.addEventListener('reset', () => setTimeout(setRedColor));
redColor?.addEventListener("input", setRedColor);
redColor ? setRedColor() : void(0);

// Update the permalink with the form values.
options.addEventListener('change', saveFormData);
options.addEventListener('reset', () => setTimeout(saveFormData));
