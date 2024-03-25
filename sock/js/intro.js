import { transitionBlack } from "./main.js";
import { startGame } from "./game.js";

let interval;

export async function intro() {
    document.getElementById("skip").style.display = "none";
    document.getElementById("scrollText").style.display = "none";

    await transitionBlack("intro");

    starWar();

    document.getElementById("intro").addEventListener("click", skip);
    document.getElementById("skip").addEventListener("click", clickStartGame);
}

function skip() {
    document.getElementById("skip").style.display = "block";
}

function clickStartGame() {
    clearInterval(interval);
    startGame();
}

function starWar() {
    let base = document.getElementById("scrollText");

    let show = true;

    let height = base.clientHeight;
    console.log(height);
    let i = 0;
    function getY(input) {
        return input*0.025;
    }
    interval = setInterval(function() {
        base.style.top = (100 - getY(i)) + "%";
        if (show) {
            show = false;
            base.style.display = "block";
        }
        i++;
    }, 5);
}