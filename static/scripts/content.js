// Remove the disabled attribute from checkboxes so they're easier to see.
for (const element of document.getElementsByTagName('input')) {
    if (element.type === 'checkbox' && element.disabled) {
        element.style.pointerEvents = 'none';
        element.removeAttribute('disabled');
    }
}