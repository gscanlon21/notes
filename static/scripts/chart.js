document.querySelectorAll("table").forEach(table => {
    const firstHeader = table.tHead?.rows[0]?.cells[0]?.textContent?.trim();
	const title = table.tHead?.rows[0]?.cells[1]?.textContent?.trim();

    if (!firstHeader?.toLowerCase().startsWith("date")) {
        return;
    }

    const labels = [], values = [], mins = [], maxs = [];
	Array.from(table.tBodies[0].rows).forEach(row => {
		labels.push(row.cells[0].textContent.trim());
		values.push(Number(row.cells[1].textContent));
		mins.push(Number(row.cells[2].textContent));
		maxs.push(Number(row.cells[3].textContent));
	});

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
			datasets: [
				{
					label: table.tHead.rows[0].cells[1].textContent,
					data: values,
					borderWidth: 2
				},
				{
					label: "Min",
					data: mins,
					borderDash: [5, 5],
					pointRadius: 0,
					borderWidth: 2,
				},
				{
					label: "Max",
					data: maxs,
					borderDash: [5, 5],
					pointRadius: 0,
					borderWidth: 2,
				}
			]
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
				y: {
					suggestedMin: 0,
				},
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
				title: {
					display: true,
					text: title,
					font: {
						size: 18,
					},
				},
				// https://www.chartjs.org/docs/latest/configuration/tooltip.html
				tooltip: {
					callbacks: {
						title: (context) => {
							// Pretty-print the x-axis date in the hover tooltip
							return new Date(context[0].parsed.x).toDateString();
						},
					},
				},
				legend: {
					display: false,
				},
			}
		}
	});
});