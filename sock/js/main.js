import { startGame } from "./game.js";
import { intro } from "./intro.js";

export function clear() {
    let pages = ["welcome", "intro", "main"];
    for (let i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).style.display = "none";
    }
}

export async function transitionBlack(screen) {
    return await new Promise(resolve => {
        let blender = document.getElementById("blender");
        blender.style.display = "block";
        let i = 0;
        function convertStep(input) {
            return 100*Math.pow(Math.abs((input/100) - 1), 2);
        }
        const interval = setInterval(function() {
            let percent = convertStep(i);
            blender.style.backdropFilter = "brightness(" + percent + "%) blur(" + ((100 - percent)/10) + "px)";
            if (i == 100) {
                clear();
                document.getElementById(screen).style.display = "block";
            }
            if (i >= 200) {
                blender.style.backdropFilter = "";
                blender.style.display = "none";
                resolve("OwO");
                clearInterval(interval);
            }
            i++;
        }, 5);
    })
}

export function welcome() {
    clear();
    document.getElementById("welcome").style.display = "block";
}

function start() {
    console.log("Begin creation");

    window.addEventListener("contextmenu", event => event.preventDefault());

    welcome();

    document.getElementById("start").addEventListener("click", intro);

    console.log("End of creation");
}
start();