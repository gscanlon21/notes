// Remove the disabled attribute from checkboxes so they're easier to see.
for (const element of Array.from(document.getElementsByTagName('input'))) {
    if (element.type === 'checkbox' && element.disabled) {
        element.style.pointerEvents = 'none';
        element.removeAttribute('disabled');
    }
}

// Remove whitespace from nav elements so they are :empty.
for (const element of Array.from(document.getElementsByTagName('nav'))) {
    element.innerHTML = element.innerHTML.trim();
}

// Remove whitespace from menu elements so they are :empty.
for (const element of Array.from(document.getElementsByTagName('menu'))) {
    element.innerHTML = element.innerHTML.trim();
}

// Remove whitespace from article elements so they are :empty.
for (const element of Array.from(document.getElementsByTagName('article'))) {
	for (const hidden of document.getElementsByClassName('visibility--hidden')) {
		element.parentNode.insertBefore(hidden, element);
	}
    element.innerHTML = element.innerHTML.trim();
}

// Copy multi-line code elements when they are clicked. Flash the bg.
for (const element of Array.from(document.getElementsByTagName('pre'))) {
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(element.innerText.trim()).then(() => {
            element.classList.add('copied');
            setTimeout(() => {
                element.classList.remove('copied');
            }, 500);
        });
    })
}

// Copy inline code elements when they are clicked. Flash the bg.
for (const element of Array.from(document.getElementsByTagName('code'))) {
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(element.innerText.trim()).then(() => {
            element.classList.add('copied');
            setTimeout(() => {
                element.classList.remove('copied');
            }, 500);
        });
    })
}

let i, j = 0; // Allow checking the list items.
for (const element of Array.from(document.getElementsByClassName("checklist-wrapper"))) {
	for (const inputElement of element.getElementsByTagName("input")) {
		inputElement.id = `a${++i}-${++j}`;
		inputElement.style.pointerEvents = 'auto';
		inputElement.parentElement.style.userSelect = 'none';
		const siblings = Array.from(inputElement.parentElement.children)
			.filter(c => c.id !== inputElement.id).map(c => c.outerHTML);
		const labelHTML = `<label for='a${i}-${j}'>${inputElement.nextSibling.textContent}</label>`;
		inputElement.parentElement.innerHTML = `${inputElement.outerHTML}${labelHTML}${siblings}`;	
	}
}

// Remove defer classes from elements after the page has loaded.
for (const element of Array.from(document.getElementsByClassName('defer'))) {
    element.classList.remove('defer');
}

// Remove async classes from elements after the page has loaded.
for (const element of Array.from(document.getElementsByClassName('async'))) {
    element.classList.remove('async');
}

// Implementation of the Durstenfeld shuffle.
Object.defineProperty(Array.prototype, 'aShuffle', {
    value: function() { 
		for (let i = this.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this[i], this[j]] = [this[j], this[i]];
		}

		return this;
	}
});

// Select a random element from the array or null.
Object.defineProperty(Array.prototype, 'aRandom', {
    value: function() { 
		return this.length > 0 ? this[Math.floor(Math.random() * this.length)] : null;
	}
});

// Add a class to an element and return the element.
Object.defineProperty(HTMLDivElement.prototype, 'aWithClass', {
    value: function(value) { 
		!this.classList.contains(value) ? this.classList.add(value) : void(0);
		return this;
	}
});

// Toggle a class to an element and return the element.
Object.defineProperty(HTMLDivElement.prototype, 'aToggleClass', {
    value: function(value, match = undefined) { 
		if (match === true) {
			this.classList.add(value);
		} else if (match === false) {
			this.classList.remove(value);
		} else {
			this.classList.contains(value) ? this.classList.remove(value) : this.classList.add(value);
		}
		
		return this;
	}
});
