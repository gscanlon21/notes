window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
});

const chart = document.getElementById("codenames-board");
const regenerate = document.getElementById("regenerate");
const wordList = document.getElementById("word-list");

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const states = ["front", "neutral", "red", "blue", "assassin"];

async function generateCodenamesBoard() {
	chart.innerHTML = "";

	const text = await fetch(`./${wordList.value}`).then(r => r.text());
	const words = text.split(/\r?\n/).map(w => w.trim()).filter(Boolean);
	const shuffledWords = shuffle(words).slice(0, 25);

	const roles = shuffle([
		...Array(9).fill("red"),
		...Array(8).fill("blue"),
		...Array(7).fill("neutral"),
		"assassin"
	]);

	shuffledWords.forEach((word, i) => {
		const cell = document.createElement("div");
		cell.className = "word front";
		cell.dataset.state = "0";

		cell.innerHTML = `
			<div class="word-front">${word}</div>
			<div class="word-back">${word}</div>
        `;

		cell.addEventListener("click", () => {
			const current = Number(cell.dataset.state);
			const next = (current + 1) % states.length;

			cell.dataset.state = next;

			cell.classList.remove("front", "neutral", "red", "blue", "assassin");
			if (states[next]) {
				cell.classList.add(states[next]);
			}
		});

		chart.appendChild(cell);
	});
}

generateCodenamesBoard();
wordList.addEventListener('change', generateCodenamesBoard);
regenerate.addEventListener('click', () => {
	if (window.confirm('Are you sure?')) {
		generateCodenamesBoard();
	}
});
