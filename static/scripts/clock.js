const STORAGE_KEY = "clock-options";
let options = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (options?.enabled ?? true) {
	console.debug(options);

	const total = 7;
	const minOpacity = parseFloat(options?.opacityMin ?? 0.1);
	const maxOpacity = parseFloat(options?.opacityMax ?? 0.5);
	const colorFloor = parseInt(options?.colorFloor ?? 100);

	for (let i = 0;i < total;i++) {
		const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - i) / total);
		const red = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
		const green = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
		const blue = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
		const style = `style="background-color: rgba(${red}, ${green}, ${blue}, ${opacity})"`;
		document.querySelectorAll('.hand:empty').forEach(n => {
			n.innerHTML = `<div class="hand rotate-minute" ${style}></div><div class="hand rotate-second" ${style}></div>`;
		});
	}

	const css = document.createElement('style');
	const hours = new Date().getHours() % 12;
	const minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds() + (60 * minutes) + (60 * 60 * hours);
	const styles = `.hand {animation-delay: ${seconds * -1}s; opacity: 1;}`;

	if (css.styleSheet) {
		css.styleSheet.cssText = styles;
	} else {
		css.appendChild(document.createTextNode(styles));
	}

	document.head.appendChild(css);
}