import { Message, getMessages } from "../../js/message.js";
import * as Constants from "../../js/constants.js";
import { roleModel } from "./game.js";
import { play } from "./player.js";

let hostDetails = {
    code: "",
    round: 0,
    players: 0,
    serverURL: "",
}

let joinDetails = {
    code: "",
    name: "",
    serverURL: "",
}

// Generate Game Code
function getRandomID() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    for (let i = 0; i < Constants.GameIDLength; i++) {
        let chosen = Math.floor(possible.length*Math.random());
        output += possible.substring(chosen, chosen + 1);
    }
    return output;
}

// Clear all pages
function clear() {
    let pages = ["welcome", "host-page", "join-page", "main-game", "join-game", "actual-game"];
    pages.forEach((i) => {
        document.getElementById(i).style.display = "none";
    });
}

// Start welcome
function welcome() {
    clear();
    document.getElementById("welcome").style.display = "block";
}

// Go to begin host page
function host() {
    clear();
    document.getElementById("host-page").style.display = "block";
}

// Go to begin join page
function join() {
    clear();
    document.getElementById("join-page").style.display = "block";
}

// Actually start hosting
async function beginHost() {
    hostDetails = {
        code: getRandomID(),
        round: 0,
        players: 0,
    };
    hostDetails.serverURL = document.getElementById("host-game-ip").value;

    let firstMessage = new Message(hostDetails.serverURL, hostDetails.code, "Host", hostDetails.round, "status", "start");
    await firstMessage.send();

    clear();
    document.getElementById("main-game").style.display = "block";

    document.getElementById("code").innerText = hostDetails.code;
    document.getElementById("host-tell-ip").innerText = hostDetails.serverURL;
}

async function refreshPlayerJoin() {
    let messages = await getMessages(hostDetails.code, hostDetails.serverURL);

    let players = [];
    messages.forEach((i) => {
        if (players.indexOf(i.player) == -1 && i.player != "Host") {
            players.push(i.player);
        }
    });

    let base = document.getElementById("player-list");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    players.forEach((i) => {
        let baby = document.createElement("h2");
        baby.innerText = i;
        base.appendChild(baby);
    });
}

// Actually join a game
async function beginJoin() {
    joinDetails = {
        code: document.getElementById("join-game-id").value,
        name: document.getElementById("join-game-name").value,
        serverURL: document.getElementById("join-game-ip").value,
    }

    let current = await getMessages(joinDetails.code, joinDetails.serverURL);
    if (current.length == 0) {
        window.alert("Game not found");
    } else {
        let join = new Message(joinDetails.serverURL, joinDetails.code, joinDetails.name, 0, "join", "I joined");
        await join.send();

        clear();
        document.getElementById("player-game-code").innerText = joinDetails.code;
        document.getElementById("player-name").innerText = joinDetails.name;
        document.getElementById("player-ip").innerText = joinDetails.serverURL;
        document.getElementById("join-game").style.display = "block";

        play(joinDetails);
    }
}

// Start the main game
async function startGame() {
    clear();
    document.getElementById("actual-game").style.display = "block";

    let list = await getMessages(hostDetails.code, hostDetails.serverURL);
    let players = [];
    list.forEach((i) => {
        if (players.indexOf(i.player) == -1 && i.player != "Host") {
            players.push(i.player);
        }
    });
    hostDetails.players = players.length;

    roleModel(hostDetails);
}

// Add button click events
function addEvents() {
    // Welcome
    document.getElementById("host").addEventListener("click", host);
    document.getElementById("join").addEventListener("click", join);

    // Host
    document.getElementById("begin-host").addEventListener("click", beginHost);

    // Join
    document.getElementById("begin-join").addEventListener("click", beginJoin);

    // Start actual game
    document.getElementById("refresh-players").addEventListener("click", refreshPlayerJoin);
    document.getElementById("start-game").addEventListener("click", startGame);
}

// Run on start
function start() {
    console.log("Start");

    addEvents();

    welcome();

    console.log("End");
}
start();