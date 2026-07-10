class FlashcardSection {
	constructor({ header, className, flashcards }) {
		this.flashcards = flashcards;
		this.className = className;
		this.header = header;
	}

	get progress() {
		const unfinished = this.flashcards.filter(f => f.group === 2).length;
		return unfinished / this.flashcards.length * 100;
	}
}

function generateFlashcards() {
	const flashcardSections = [];	
	for (const wrapper of document.querySelectorAll('.flashcard-wrapper')) {
		const flashcards = [];
		let currentFlashcard = null;
		const dlsTemp = wrapper.querySelectorAll('dl');
		const dls = dlsTemp ? Array.from(dlsTemp) : null;
		for (const element of dls?.flatMap(dl => Array.from(dl.children)) ?? []) {
			if (element.tagName === "DT") {
				if (currentFlashcard) {
					flashcards.push(currentFlashcard);
				}

				const front = element.querySelector("strong")?.textContent.trim();
				currentFlashcard = { 
					group: front ? 1 : 2,
					front: front ?? element.textContent.trim(), 
					subheader: element.querySelector("em")?.textContent.trim() ?? "", 
					back: [], 
				};
			}
			else if (element.tagName === "DD" && currentFlashcard) {
				currentFlashcard.back.push(element.textContent.trim());
			}
		}

		if (currentFlashcard) {
			flashcards.push(currentFlashcard);
		}

		if (flashcards.length > 0) {
			flashcardSections.push(new FlashcardSection({
				className: wrapper.dataset.class,
				header: wrapper.dataset.header,
				flashcards: [
					...flashcards.filter(f => f.group === 1).aShuffle(),
					...flashcards.filter(f => f.group === 2).aShuffle(),
				],
			}));
		}
	}

	return flashcardSections;
}

function renderFlashcards(flashcardSections) {
	if (!flashcardSections.length) {
		return;
	}

	const container = document.querySelector('#flashcard-container');
	for (const flashcardSection of flashcardSections) {
		const section = document.createElement('div');
		section.classList.add('flashcard-section');

		if (flashcardSection.className) {
			section.classList.add(flashcardSection.className);
		}

		let currentIndex = 0;
		function render() {
			const progress = flashcardSection.flashcards.filter(f => f.group === 2).length / flashcardSection.flashcards.length;
			const flashcard = flashcardSection.flashcards[currentIndex];

			section.innerHTML = `
				<div class="card-header">${flashcardSection.header}</div>
				<div class="flashcard-front">
					<strong>${flashcard.front}</strong>
					<em>${flashcard.subheader}</em>
				</div>
				<div class="flashcard-back">
					<strong>${flashcard.front}</strong>
					<div class="flashcard-list">
						<ul>
							${flashcard.back.map(text => `<li>${text}</li>`).join("")}
						</ul>
					</div>
				</div>
				<div class="current-card">
					${flashcardSection.progress.toFixed(0)}%
				</div>
				<div class="card-counter">
					${currentIndex + 1} / ${flashcardSection.flashcards.length}
				</div>
			`;			
		}

		section.addEventListener('click', (e) => e.currentTarget.dispatchEvent(new Event('flip')));
		section.addEventListener('flip', (e) => {
			if (e.detail?.back !== true && !section.classList.contains('flipped')) {
				section.classList.add('flipped');
			} else if (e.detail?.back === true && section.classList.contains('flipped')) {
				section.classList.remove('flipped');
			} else if (e.detail?.back === true && !section.classList.contains('flipped')) {
				currentIndex = Math.max(0, (currentIndex + - 1) % flashcardSection.flashcards.length);
				section.classList.remove('flipped');
				setTimeout(() => render(), 100);
			} else if (e.detail?.back !== true && section.classList.contains('flipped')) {
				currentIndex = (currentIndex + 1) % flashcardSection.flashcards.length;
				if (currentIndex === 0) {
					flashcardSection.flashcards.aShuffle();
				}

				section.classList.remove('flipped');
				setTimeout(() => render(), 100);
			}
		});

		container.insertAdjacentElement('beforeend', section);
		render();
	}

	document.addEventListener("keypress", (e) => {
		if (e.code === "Space" && e.target.tagName !== 'INPUT') {
			e.preventDefault();
			for (const flashcard of document.querySelectorAll(".flashcard-section")) {
				flashcard.dispatchEvent(new CustomEvent('flip', { detail: { back: e.ctrlKey } }));
			}
		}
	});
}

const flashcardSections = generateFlashcards();
renderFlashcards(flashcardSections);
