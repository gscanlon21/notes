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