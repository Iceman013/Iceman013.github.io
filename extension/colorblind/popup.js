const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}

var buttons = ["normal","redGreen","blueYellow","monochrome"];
var buttfun = [normal, redGreen, blueYellow, monochrome];

for (let i = 0; i < buttons.length; i++) {
	document.getElementById(buttons[i]).addEventListener("click", async () => {
		let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: buttfun[i],
		});
	});
}