const STORAGE_KEY = "vanta-birds-options";
const options = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (options && options.enabledCheckbox) {
	console.debug(options);

	// Convert from hex to base-16.
	options.color1 = parseInt(options.color1.substring(1), 16);
	options.color2 = parseInt(options.color2.substring(1), 16);

	options.minHeight = parseInt(options.minSize);
	options.minWidth = parseInt(options.minSize);

	const effect = VANTA.BIRDS({
		touchControls: false,
		mouseControls: false,
		backgroundAlpha: 0,
		el: "#birds",
		...options,
	});

	console.debug('birds', effect, options);
	window.livelyPropertyListener = (name, val) => {
		console.debug(`livelyPropertyListener('${name}', '${val}')`);
		if (name == "quantity") {
			effect.setOptions({
				quantity: val
			});
			// Need to restart twice for colors to take effect.
			effect.restart();
			effect.restart();
		}
		else if (name == "birdSize") {
			effect.setOptions({
				birdSize: val
			});
			effect.restart();
		}
		else if (name == "wingSpan") {
			effect.setOptions({
				wingSpan: val
			});
			effect.restart();
		}
		else if (name == "speedLimit") {
			effect.setOptions({
				speedLimit: val
			});
			effect.valuesChanger();
		}
		else if (name == "separation") {
			effect.setOptions({
				separation: val
			});
			effect.valuesChanger();
		}
		else if (name == "alignment") {
			effect.setOptions({
				alignment: val
			});
			effect.valuesChanger();
		}
		else if (name == "cohesion") {
			effect.setOptions({
				cohesion: val
			});
			effect.valuesChanger();
		}
		else if (name == "color1") {
			effect.setOptions({
				color1: parseInt(val.substring(1), 16)
			});
			effect.restart();
		}
		else if (name == "color2") {
			effect.setOptions({
				color2: parseInt(val.substring(1), 16)
			});
			effect.restart();
		}
		else if (name == "colorMode") {
			effect.setOptions({
				colorMode: val
			});
			effect.restart();
		}
	}
}