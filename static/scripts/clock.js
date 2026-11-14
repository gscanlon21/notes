const STORAGE_KEY = "clock-options";
const options = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (options?.enabled ?? true) {
	console.debug('clock', options);

	const total = 7;
	const colorCeil = parseInt(options?.colorCeil ?? 255);
	const colorFloor = parseInt(options?.colorFloor ?? 100);
	const colorRotate = parseInt(options?.colorRotate ?? 60);
	const minOpacity = parseFloat(options?.opacityMin ?? 0.1);
	const maxOpacity = parseFloat(options?.opacityMax ?? 0.5);
	document.body.style.setProperty('--clock-rotate', `${colorRotate}s`);
	const randomColor = () => colorFloor + Math.floor(Math.random() * (colorCeil - colorFloor));

	for (let i = 0; i < total; i++) {
		const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - i) / total);
		const style = `style="background-color: color-mix(in srgb,
			rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, ${opacity}),
			rgba(var(--clock-red, ${randomColor()}), var(--clock-green, ${randomColor()}), var(--clock-blue, ${randomColor()}), ${opacity}));"`
		document.querySelectorAll('.hand:empty').forEach(n => {
			n.innerHTML = `
				<div class="hand minute rotate-minute echo" data-index="${i}" ${style}></div>
				<div class="hand second rotate-second echo" data-index="${i}" ${style}></div>
			`;
		});
	}

	if (options?.rotateColors) {
		setInterval(() => {
			document.body.style.setProperty('--clock-red', randomColor());
			document.body.style.setProperty('--clock-green', randomColor());
			document.body.style.setProperty('--clock-blue', randomColor());
		}, colorRotate * 1000);
	}
	
	const now = new Date();
	const hour = now.getHours() % 12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds() + (60 * minutes) + (60 * 60 * hour);
	document.body.style.setProperty('--clock-delay', `${seconds * -1}s`);
	document.body.style.setProperty('--clock-opacity', '1');
}