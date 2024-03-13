import { startDating } from "./dating.js";

function clear() {
    let pages = ["welcome", "dating-container"];
    for (let i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = "none";
    }
}

function dating() {
    clear();
    startDating();
}

function start() {
    console.log("Begin creation");

    document.getElementById("beginDating").addEventListener("click", dating);

    console.log("End of creation");
}
start();