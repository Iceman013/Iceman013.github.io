import { startDating } from "./dating.js";

function clear() {
    let pages = ["dating-container"];
    for (let i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = "none";
    }
}
function start() {
    console.log("Begin creation");

    clear();
    startDating();

    console.log("End of creation");
}
start();