document.querySelectorAll("table").forEach(table => {
	const headers = Array.from(table.tHead?.rows[0]?.cells || []).map(cell => cell.textContent.trim());
    const dateIndex = headers.findIndex(header => header.toLowerCase() === "date");
    const minIndex = headers.findIndex(header => header.toLowerCase() === "min");
    const maxIndex = headers.findIndex(header => header.toLowerCase() === "max");
	
	if (dateIndex === -1) {
		return;
	}

    const valueColumns = headers.map((header, index) => ({ header, index })).filter(column =>
		column.index > dateIndex && column.index < minIndex
	);

    const rows = Array.from(table.tBodies[0]?.rows || []);
    const labels = rows.map(row => row.cells[dateIndex].textContent.trim());
	const title = valueColumns.map(column => column.header).join(", ");

    const datasets = valueColumns.map(column => ({
        data: rows.map(row => {
			const raw = row.cells[column.index]?.textContent.trim();
			const y = Number(raw?.match(/[\d.]+/)?.at(0) || 0);
			return {
				x: row.cells[dateIndex].textContent.trim(),
				y: raw.includes('<') ? y - 1 : y,
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
	table.replaceWith(wrapper);

	const ratio = getComputedStyle(canvas).aspectRatio;
	const [w, h] = ratio.split('/').map(Number);

	Chart.defaults.font.size = 14;
	new Chart(canvas, {
		type: "line",
		data: {
			labels,
			datasets: [ ...datasets,
				{
					data: rows.map(row => Number(row.cells[minIndex]?.textContent.trim() || 0)),
					borderDash: [5, 5],
					pointRadius: 0,
					borderWidth: 2,
					label: "Min",
				},
				{
					data: rows.map(row => Number(row.cells[maxIndex]?.textContent.trim() || 0)),
					borderDash: [5, 5],
					pointRadius: 0,
					borderWidth: 2,
					label: "Max",
				}
			],
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
					hitRadius: 6,
					// Increase the size of the point when the user is withing the bounds of the hitRadius.
					hoverRadius: 6,
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
					mode: 'point',
					intersect: true,
					callbacks: {
						title: (context) => {
							// Pretty-print the x-axis date in the hover tooltip
							return new Date(context[0].parsed.x).toDateString();
						},
						label: (context) => {
							return `${context.dataset.label}: ${context.raw.value || context.raw}`;
						},
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