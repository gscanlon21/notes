document.querySelectorAll("table").forEach(table => {
    const firstHeader = table.tHead?.rows[0]?.cells[0]?.textContent?.trim();
	const title = table.tHead?.rows[0]?.cells[1]?.textContent?.trim();

    if (!firstHeader?.toLowerCase().startsWith("date")) {
        return;
    }

	const canvas = document.createElement("canvas");
	canvas.height = 400;
	canvas.width = 800;

	table.replaceWith(canvas);

    const labels = [];
	const values = [];
	const mins = [];
	const maxs = [];

	[...table.tBodies[0].rows].forEach(row => {
		labels.push(row.cells[0].textContent.trim());
		values.push(Number(row.cells[1].textContent));
		mins.push(Number(row.cells[2].textContent));
		maxs.push(Number(row.cells[3].textContent));
	});

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
					borderWidth: 1
				},
				{
					label: "Max",
					data: maxs,
					borderDash: [5, 5],
					pointRadius: 0,
					borderWidth: 1
				}
			]
		},
		options: {
			scales: {
				x: {
					// https://www.chartjs.org/docs/next/axes/cartesian/time.html
					type: "time",
					time: {
						minUnit: 'day',
						displayFormats: {
							day: "yyyy-MM-dd"
						}
					},
					ticks: {
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
						size: 18
					}
				}
			}
		}
	});
});