const symbolSelect = document.getElementById('symbol-select');
const grid = document.getElementById("grid");

function generateGrid() {
    grid.innerHTML = "";

    for (let i = 0; i < 250; i++) {
        const cell = document.createElement("div");
        cell.className = "pictogram";

		const img = document.createElement("img");
        img.src = `../GHS-pictogram-${symbolSelect.value}.svg`;

        cell.appendChild(img);
        grid.appendChild(cell);
    }
}

symbolSelect.addEventListener('change', generateGrid);
generateGrid();