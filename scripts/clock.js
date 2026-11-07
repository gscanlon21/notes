const STORAGE_KEY = "clock-options";
const options = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (options?.enabled ?? true) {
	console.debug('clock', options);

	const total = 7;
	const colorFloor = parseInt(options?.colorFloor ?? 100);
	const minOpacity = parseFloat(options?.opacityMin ?? 0.1);
	const maxOpacity = parseFloat(options?.opacityMax ?? 0.5);

	for (let i = 0; i < total; i++) {
		const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - i) / total);
		const red = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
		const green = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
		const blue = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
		const style = `style="background-color: rgba(${red}, ${green}, ${blue}, ${opacity})"`;
		document.querySelectorAll('.hand:empty').forEach(n => {
			n.innerHTML = `
				<div class="hand minute rotate-minute" ${style}></div>
				<div class="hand second rotate-second" ${style}></div>
			`;
		});
	}

	const now = new Date();
	const hour = now.getHours() % 12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds() + (60 * minutes) + (60 * 60 * hour);
	document.body.style.setProperty('--clock-delay', `${seconds * -1}s`);
	document.body.style.setProperty('--clock-opacity', '1');
}