import { startGame } from "./game.js";
import { CHARACTERLIST } from "./characterList.js";

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

    for (let i = 0; i < CHARACTERLIST.length; i++) {
        let c = CHARACTERLIST[i];
        let base = document.createElement("div");
        base.classList.add("characterOption");

        let img = document.createElement("img");
        img.src = "imgs/" + c.img;
        base.appendChild(img);

        let name = document.createElement("h1");
        name.innerText = c.name;
        base.appendChild(name);

        let latin = document.createElement("i");
        latin.innerText = c.latin;
        base.appendChild(latin);

        let des = document.createElement("p");
        des.innerText = c.description;
        base.appendChild(des);

        document.getElementById("charSelect").appendChild(base);
    }
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