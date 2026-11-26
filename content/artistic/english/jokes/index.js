/* This isn't necessary because the copy code overwrites the color already.
for (const element of Array.from(document.getElementsByTagName('code'))) {
	element.addEventListener('click', () => {
		element.style.color = 'rgb(var(--color-code)) !important';
	});
}*/