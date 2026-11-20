const downloadButton = document.getElementById('download');
downloadButton.addEventListener("click", downloadFHIR);

function downloadFHIR() {
	const content = document.getElementById("content");

	if (!content) {
		alert('Could not find the element with id="content".');
		return;
	}

	const observations = [];
	const tables = content.querySelectorAll("table");

	tables.forEach(function (table) {
		const rows = Array.from(table.querySelectorAll("tr"));

		if (rows.length < 2) return;

		const headers = Array.from(rows[0].querySelectorAll("th, td"))
			.map(cell => cell.textContent.trim());

		const dateIndex = headers.findIndex(header =>
			/^date$/i.test(header)
		);

		if (dateIndex === -1) return;

		const minIndex = headers.findIndex(header =>
			/^min(imum)?$/i.test(header)
		);

		const maxIndex = headers.findIndex(header =>
			/^max(imum)?$/i.test(header)
		);

		const resultIndex = headers.findIndex((header, index) =>
			index !== dateIndex &&
			index !== minIndex &&
			index !== maxIndex &&
			!/^(unit|units|reference range|range|flag|status)$/i.test(header)
		);

		if (resultIndex === -1) return;

		const testName = headers[resultIndex] || "Laboratory result";

		rows.slice(1).forEach(function (row) {
			const cells = Array.from(row.querySelectorAll("td, th"))
				.map(cell => cell.textContent.trim());

			if (cells.length <= Math.max(dateIndex, resultIndex)) {
				return;
			}

			const date = normalizeDate(cells[dateIndex]);
			const rawValue = cells[resultIndex];

			if (!date || !rawValue) return;

			const observation = createObservation({
				testName: testName,
				date: date,
				rawValue: rawValue,
				min: minIndex >= 0 ? cells[minIndex] : null,
				max: maxIndex >= 0 ? cells[maxIndex] : null
			});

			if (observation) {
				observations.push(observation);
			}
		});
	});

	if (observations.length === 0) {
		alert("No laboratory results were found. Check the content element and table format.");
		return;
	}

	const bundle = {
		resourceType: "Bundle",
		type: "collection",
		timestamp: new Date().toISOString(),
		total: observations.length,
		entry: observations.map(function (observation) {
			return {
				fullUrl: "urn:uuid:" + observation.id,
				resource: observation
			};
		})
	};

	downloadJSON(bundle, "lab-testing-fhir-r4.json");

	console.log(
		"FHIR R4 export complete:",
		observations.length,
		"observations"
	);
}

function createObservation(data) {
	const id = createUUID();
	const parsed = parseResult(data.rawValue);

	if (!parsed) return null;

	const observation = {
		resourceType: "Observation",
		id: id,
		status: "final",
		category: [
			{
				coding: [
					{
						system: "http://terminology.hl7.org/CodeSystem/observation-category",
						code: "laboratory",
						display: "Laboratory"
					}
				]
			}
		],
		code: {
			text: data.testName
		},
		effectiveDateTime: data.date
	};

	if (parsed.type === "quantity") {
		observation.valueQuantity = {
			value: parsed.value,
			unit: parsed.unit || "unknown",
			system: "http://unitsofmeasure.org"
		};
	} else {
		observation.valueString = parsed.value;
	}

	const referenceRange = {};

	if (data.min) {
		const min = parseFloat(data.min);
		if (Number.isFinite(min)) {
			referenceRange.low = {
				value: min,
				unit: parsed.unit || "unknown",
				system: "http://unitsofmeasure.org"
			};
		}
	}

	if (data.max) {
		const max = parseFloat(data.max);
		if (Number.isFinite(max)) {
			referenceRange.high = {
				value: max,
				unit: parsed.unit || "unknown",
				system: "http://unitsofmeasure.org"
			};
		}
	}

	if (referenceRange.low || referenceRange.high) {
		observation.referenceRange = [referenceRange];
	}

	return observation;
}

function parseResult(rawValue) {
	const value = String(rawValue).trim();

	if (!value) return null;

	// Preserve qualitative or censored results such as:
	// Positive, Negative, Trace, <2.0, >100.
	const numericMatch = value.match(
		/^([<>≤≥]?\s*-?\d+(?:\.\d+)?)\s*(.*)$/
	);

	if (!numericMatch) {
		return {
			type: "string",
			value: value
		};
	}

	const numberText = numericMatch[1].replace(/\s/g, "");
	const unit = numericMatch[2].trim();

	// A result with a comparison operator is preserved as text.
	if (/^[<>≤≥]/.test(numberText)) {
		return {
			type: "string",
			value: value
		};
	}

	const number = Number(numberText);

	if (!Number.isFinite(number)) {
		return {
			type: "string",
			value: value
		};
	}

	return {
		type: "quantity",
		value: number,
		unit: unit
	};
}

function normalizeDate(rawDate) {
	if (!rawDate) return null;

	const value = String(rawDate).trim();

	// YYYY-MM-DD
	if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		return value;
	}

	// MM/DD/YYYY
	const usDate = value.match(
		/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
	);

	if (usDate) {
		const month = usDate[1].padStart(2, "0");
		const day = usDate[2].padStart(2, "0");
		const year = usDate[3];

		return year + "-" + month + "-" + day;
	}

	// Attempt standard browser date parsing.
	const parsed = new Date(value);

	if (!Number.isNaN(parsed.getTime())) {
		return parsed.toISOString().slice(0, 10);
	}

	return null;
}

function createUUID() {
	if (
		typeof crypto !== "undefined" &&
		typeof crypto.randomUUID === "function"
	) {
		return crypto.randomUUID();
	}

	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (character) {
			const random = Math.random() * 16 | 0;
			const value = character === "x"
				? random
				: (random & 0x3 | 0x8);

			return value.toString(16);
		}
	);
}

function downloadJSON(data, filename) {
	const json = JSON.stringify(data, null, 2);

	const blob = new Blob(
		[json],
		{ type: "application/fhir+json;charset=utf-8" }
	);

	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");

	link.href = url;
	link.download = filename;

	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	setTimeout(function () {
		URL.revokeObjectURL(url);
	}, 1000);
}
