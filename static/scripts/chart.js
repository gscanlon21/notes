import Chart from "https://cdn.jsdelivr.net/npm/chart.js/+esm";

document.querySelectorAll("table").forEach(table => {
    const firstHeader = table.tHead?.rows[0]?.cells[0]?.textContent?.trim();

    if (!firstHeader?.toLowerCase().startsWith("date")) {
        return;
    }

    const labels = [];
    const values = [];

    [...table.tBodies[0].rows].forEach(row => {
        labels.push(row.cells[0].textContent.trim());
        values.push(Number(row.cells[1].textContent));
    });

	const canvas = document.createElement("canvas");
	canvas.width = 800;
	canvas.height = 400;

	table.replaceWith(canvas);

    new Chart(canvas, {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: table.tHead.rows[0].cells[1].textContent,
                data: values
            }]
        }
    });
});