const parseNumber = (raw, def = 0) => Number(raw?.match(/[-\d.]+/)?.at(0) || def);
const parseRaw = (row, col) => row.cells[col]?.textContent.trim();

document.querySelectorAll("table").forEach(table => {
	const headers = Array.from(table.tHead?.rows[0]?.cells || []).map(c => c.textContent.trim());
    const sourceIndex = headers.findIndex(header => header.toLowerCase() === "source");
	const notesIndex = headers.findIndex(header => header.toLowerCase() === "notes");
	const dateIndex = headers.findIndex(header => header.toLowerCase() === "date");
    const minIndex = headers.findIndex(header => header.toLowerCase() === "min");
    const maxIndex = headers.findIndex(header => header.toLowerCase() === "max");
	
	if (dateIndex === -1) {
		return;
	}

	const nonIndexes = [sourceIndex, dateIndex, minIndex, maxIndex, notesIndex];
    const valueColumns = headers.map((header, index) => ({ header, index })).filter(c =>
		!nonIndexes.includes(c.index)
	);

    const rows = Array.from(table.tBodies[0]?.rows || []).reverse().slice(-10);
    const labels = rows.map(row => row.cells[dateIndex].textContent.trim());
	const title = valueColumns.map(column => column.header).join(", ");
	
	const notes = rows.map(row => row.cells[notesIndex]?.textContent.trim()).filter(n => n);
    const datasets = valueColumns.map(column => ({
        data: rows.map(row => {
			const raw = parseRaw(row, column.index);
			const y = parseNumber(raw);
			return {
				y: raw.includes('<') ? y - 1 : y,
				x: parseRaw(row, dateIndex),
				value: raw,
			};
		}),
		label: column.header,
        borderWidth: 2,
    }));

	const titleElement = document.createElement("h5");
	const canvas = document.createElement("canvas");
	const wrapper = document.createElement("div");

	titleElement.textContent = title;
	wrapper.appendChild(titleElement);
	wrapper.appendChild(canvas);
	
	table.insertAdjacentElement('afterend', wrapper);
	table.style.display = 'none';

	const ratio = getComputedStyle(canvas).aspectRatio;
	const [w, h] = ratio.split('/').map(Number);

	if (minIndex > -1) {
		datasets.push({
			data: rows.map(row => {
				const raw = parseRaw(row, minIndex);
				const y = parseNumber(raw);
				return y >= 0 ? y : null;
			}),
			borderDash: [5, 5],
			pointRadius: 0,
			borderWidth: 2,
			label: "Min",
		});
	}

	if (maxIndex > -1) {
		datasets.push({
			data: rows.map(row => {
				const raw = parseRaw(row, maxIndex);
				const y = parseNumber(raw);
				return y >= 0 ? y : null;
			}),
			borderDash: [5, 5],
			pointRadius: 0,
			borderWidth: 2,
			label: "Max",
		});
	}

	Chart.defaults.font.size = 14;
	new Chart(canvas, {
		type: document.getElementById('chart-options').dataset.type,
		data: {
			labels,
			datasets: datasets,
		},
		options: {
			responsive: true,
			aspectRatio: w / h,
			maintainAspectRatio: true,
			// https://www.chartjs.org/docs/latest/configuration/elements.html
			elements: {
				line: {
					tension: 0.1,
				},
				point: {
					// Increase the radius around the point when the tooltip shows.
					hitRadius: 10,
					// Increase the size of the point when the user is withing the bounds of the hitRadius.
					hoverRadius: 10,
				},
			},
			scales: {
				x: {
					// https://www.chartjs.org/docs/next/axes/cartesian/time.html
					type: "time",
					time: {
						minUnit: 'month',
						displayFormats: {
							day: "yyyy-MM-dd"
						}
					},
					ticks: {
						maxTicksLimit: 5,
						major: {
							// Allow displaying June 1st as just June
							enabled: true,
						},
						font: (context) => {
							// Bold major data points (June is bolded, June 11th is not)
							return { weight: (context.tick && context.tick.major) ? 'bold' : '' };
						}
					}
				}
			},
			plugins: {
				// https://www.chartjs.org/docs/latest/configuration/tooltip.html
				tooltip: {
					mode: 'index',
					intersect: true,
					itemSort: (a, b) => b.parsed.y - a.parsed.y,
					callbacks: {
						// Pretty-print the x-axis date in the hover tooltip.
						title: (context) => new Date(context[0].parsed.x).toDateString(),
						label: (context) => `${context.dataset.label}: ${context.raw.value || context.parsed.y}`,
						afterBody: (context) => notes[context[0].dataIndex],
					},
				},
				legend: {
					display: false,
				},
				title: {
					display: false,
				},
			}
		}
	});
});