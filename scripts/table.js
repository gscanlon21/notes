const containers = document.querySelectorAll("[data-tsv]");
for (const container of containers) {
	try {
		const fileUrl = new URL(container.dataset.tsv, window.location.href);
		const response = await fetch(fileUrl);
		const tsv = await response.text();

		const rows = tsv.replace(/\r/g, "").trim().split("\n").map(row => row.split("\t"));
		const table = document.createElement("table");
		table.className = "tsv-table";

		const thead = document.createElement("thead");
		const tbody = document.createElement("tbody");

		rows.forEach((row, idx) => {
			const tr = document.createElement("tr");

			row.forEach(cell => {
				const cellElement = document.createElement(idx === 0 ? "th" : "td");
				cellElement.textContent = cell;
				tr.appendChild(cellElement);
			});

			(idx === 0 ? thead : tbody).appendChild(tr);
		});

		table.append(thead, tbody);
		container.replaceChildren(table);
	} catch (error) { }
}
