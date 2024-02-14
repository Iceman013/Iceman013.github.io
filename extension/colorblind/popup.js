function lightMode() {
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

	let mode;
	if (prefersDarkScheme.matches) {
		mode = "dark-theme";
	} else {
		mode = "light-theme";
	}

	let elements = document.getElementsByTagName("*");
	for (let i = 0; i < elements.length; i++) {
		elements[i].classList.add(mode);
	}
}