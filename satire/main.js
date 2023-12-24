import { startGame } from "./game.js";

let screenList = ["title-screen","options","game"];
function turnScreen(name, state) {
    if (state) {
        document.getElementById(name).style.display = "block";
        document.getElementById(name).style.pointerEvents = "all";
    } else {
        document.getElementById(name).style.display = "none";
        document.getElementById(name).style.pointerEvents = "none";
    }
}

function clearScreen() {
    for (let i = 0; i < screenList.length; i++) {
        turnScreen(screenList[i], false);
    }
}

function title() {
    clearScreen();
    turnScreen("title-screen", true);
    document.getElementById("enterTitle").addEventListener("click", options);
}

function options() {
    clearScreen();
    turnScreen("options", true);
    document.getElementById("enterOptions").addEventListener("click", game);
}

function game() {
    clearScreen();
    turnScreen("game", true);
    startGame();
}

function start() {
    title();
}
start();