const STORAGE_KEY = "clock-options";
const page = document.getElementById("content");
const options = document.getElementById("options");
const handOpacity = document.getElementById('hand-opacity');

const setLineGap = () => document.body.style.setProperty('--hand-opacity', `${parseFloat(handOpacity.value)}`);
options.addEventListener('reset', () => setTimeout(setLineGap));
handOpacity.addEventListener("input", setLineGap);
setLineGap();


// Save form data to localStorage
const saveFormData = () => {
    const formData = new FormData(options);
    const values = Object.fromEntries(formData);

    // Save checkbox states, including unchecked
    options.querySelectorAll('input[type="checkbox"]').forEach(field => {
        values[field.name] = field.checked;
    });

	const cleanedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [
            key.replace(/^clock-/, ""),
            value
        ])
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanedValues));
};

// Set form field value
const setField = (field, value) => {
    if (field.type === "checkbox") {
        field.checked = value === true || value === "true" || value === "on" || value === field.value;
    } else {
        field.value = value;
    }
};

// Load from localStorage
const source = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

// Restore form values
for (const [name, value] of Object.entries(source)) {
    const field = options.elements[name];

    if (field) {
        setField(field, value);
    }
}

// Save whenever form changes
options.addEventListener("change", saveFormData);
options.addEventListener("reset", () => setTimeout(saveFormData));