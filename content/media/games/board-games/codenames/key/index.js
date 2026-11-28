const chart = document.getElementById("codenames-key");
const regenerate = document.getElementById("regenerate-key");

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

function generateKeyCard() {
	chart.innerHTML = "";

	// 9 Red, 8 Blue, 7 Neutral, 1 Assassin
	const roles = shuffle([
		...Array(9).fill("red"),
		...Array(8).fill("blue"),
		...Array(7).fill("neutral"),
		"assassin"
	]);

	roles.forEach(role => {
		const cell = document.createElement("div");
		cell.classList.add("key-cell", role);
		chart.appendChild(cell);
	});
}

generateKeyCard();
regenerate.addEventListener('click', () => {
	if (window.confirm('Are you sure?')) {
		generateKeyCard();
	}
});
