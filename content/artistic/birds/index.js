const STORAGE_KEY = "vanta-birds-options";
const page = document.getElementById("content");
const options = document.getElementById("options");

// Save form data to localStorage
const saveFormData = () => {
    const formData = new FormData(options);
    const values = Object.fromEntries(formData);

    // Save checkbox states, including unchecked
    options.querySelectorAll('input[type="checkbox"]').forEach(field => {
        values[field.name] = field.checked;
    });

	const cleanedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => {
            return [key.replace(/^birds-/, ""), value];
        })
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

// Update Vanta when a form field changes
const quantity = document.getElementById("quantity");
const birdSize = document.getElementById("birdSize");
const wingSpan = document.getElementById("wingSpan");
const speedLimit = document.getElementById("speedLimit");
const separation = document.getElementById("separation");
const alignment = document.getElementById("alignment");
const cohesion = document.getElementById("cohesion");

quantity.addEventListener("input", () => livelyPropertyListener("quantity", quantity.value));
birdSize.addEventListener("input", () => livelyPropertyListener("birdSize", birdSize.value));
wingSpan.addEventListener("input", () => livelyPropertyListener("wingSpan", wingSpan.value));
speedLimit.addEventListener("input", () => livelyPropertyListener("speedLimit", speedLimit.value));
separation.addEventListener("input", () => livelyPropertyListener("separation", separation.value));
alignment.addEventListener("input", () => livelyPropertyListener("alignment", alignment.value));
cohesion.addEventListener("input", () => livelyPropertyListener("cohesion", cohesion.value));

// Save whenever form changes
options.addEventListener("change", saveFormData);
options.addEventListener("reset", () => setTimeout(saveFormData));