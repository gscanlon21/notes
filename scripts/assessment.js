document.querySelectorAll("table").forEach(table => {
    const firstHeader = table.tHead?.rows[0]?.cells[0]?.textContent?.trim();
    if (!firstHeader?.toLowerCase().startsWith("assessment")) {
        return;
    }

	const tableBody = table.tBodies[0];
    table.classList.add("questionnaire");

    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    const totalLabel = document.createElement("td");
    totalLabel.textContent = "Total";

    const totalCell = document.createElement("td");
    totalCell.textContent = "0";
	totalCell.colSpan = 4;

    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalCell);
    tableBody.appendChild(totalRow);

    Array.from(tableBody.rows).forEach(row => {
        if (row === totalRow) {
            return;
        }

        const cells = Array.from(row.cells);
        cells[0]?.classList.add("speed-question");
        cells.slice(1, 5).forEach((cell, scoreIndex) => {
            cell.dataset.score = scoreIndex;
			cell.classList.add("score");

            cell.addEventListener("click", () => {
                cells.slice(1, 5).forEach(scoreCell => {
                    scoreCell.classList.remove("selected");
                });

                cell.classList.add("selected");

                updateTotal();
            });
        });
    });

    function updateTotal() {
        let total = 0;

        tableBody.querySelectorAll("tr:not(.total-row)").forEach(row => {
            const selected = row.querySelector(".score.selected");

            if (selected) {
                total += Number(selected.dataset.score);
            }
        });

        totalCell.textContent = total;
    }
});