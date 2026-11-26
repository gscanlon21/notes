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
	const handOpacity = parseFloat(options?.handOpacity ?? 0.75);
	const randomColor = () => colorFloor + Math.floor(Math.random() * (colorCeil - colorFloor));
	
	const clockElement = document.getElementById('clock');
	clockElement.style.setProperty('--hand-opacity', handOpacity);

	for (let i = 0; i < total; i++) {
		const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - i) / total);
		const style = `style="background-color: color-mix(in srgb,
			rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, ${opacity}),
			rgba(var(--clock-red, ${randomColor()}), var(--clock-green, ${randomColor()}), var(--clock-blue, ${randomColor()}), ${opacity}));"`
		
		for (const hand of Array.from(document.querySelectorAll('.hand:empty'))) {
			hand.innerHTML = `
				<div class="hand minute rotate-minute echo" data-index="${i}" ${style}></div>
				<div class="hand second rotate-second echo" data-index="${i}" ${style}></div>
			`;
		}
	}

	const now = new Date();
	const hour = now.getHours() % 12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds() + (60 * minutes) + (60 * 60 * hour);
	clockElement.style.setProperty('--clock-delay', `${seconds * -1}s`);
	clockElement.style.setProperty('--clock-opacity', '1');

	if (options?.rotateColors && colorRotate) {
		clockElement.style.setProperty('--clock-rotate', `${colorRotate}s`);

		setInterval(() => {
			clockElement.style.setProperty('--clock-red', randomColor());
			clockElement.style.setProperty('--clock-green', randomColor());
			clockElement.style.setProperty('--clock-blue', randomColor());
		}, colorRotate * 1000);
	}
}
	