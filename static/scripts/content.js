// Remove the disabled attribute from checkboxes so they're easier to see.
for (const element of document.getElementsByTagName('input')) {
    if (element.type === 'checkbox' && element.disabled) {
        element.style.pointerEvents = 'none';
        element.removeAttribute('disabled');
    }
}

// Remove whitespace from nav elements so they are :empty.
for (const element of document.getElementsByTagName('nav')) {
    element.innerHTML = element.innerHTML.trim();
}

// Remove whitespace from nav elements so they are :empty.
for (const element of document.getElementsByClassName('defer')) {
    element.classList.remove('defer');
}

// Remove whitespace from nav elements so they are :empty.
for (const element of document.getElementsByClassName('async')) {
    element.classList.remove('async');
}

// Copy multi-line code elements when they are clicked. Flash the bg.
for (const element of document.getElementsByTagName('pre')) {
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
for (const element of document.getElementsByTagName('code')) {
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
for (const element of document.getElementsByClassName("checklist-wrapper")) {
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