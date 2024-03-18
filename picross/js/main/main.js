import { startDating } from "./dating.js";
import { startPicross } from "./picross.js";

export function clear() {
    let pages = ["welcome", "dating-container", "dating-score", "picross", "picross-select"];
    for (let i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = "none";
    }
}

async function transitionBlack() {
    return await new Promise(resolve => {
        let blender = document.getElementById("blender");
        blender.style.display = "block";
        let i = 0;
        function convertStep(input) {
            return 100*Math.pow(Math.abs((input/100) - 1), 2);
        }
        const interval = setInterval(function() {
            let percent = convertStep(i);
            blender.style.backdropFilter = "brightness(" + percent + "%) blur(" + i/10 + "px)";
            if (i > 100) {
                blender.style.backdropFilter = "";
                blender.style.display = "none";
                resolve("OwO");
                clearInterval(interval);
            }
            i++;
        }, 5);
    })
}

async function dating() {
    await transitionBlack();
    clear();
    startDating();
}

async function picross() {
    clear();
    startPicross();
}

export function welcome() {
    clear();
    document.getElementById("welcome").style.display = "block";
}

function start() {
    console.log("Begin creation");

    window.addEventListener("contextmenu", event => event.preventDefault());

    document.getElementById("beginDating").addEventListener("click", dating);
    document.getElementById("beginPicross").addEventListener("click", picross);
    document.getElementById("restart").addEventListener("click", welcome);

    console.log("End of creation");
}
start();