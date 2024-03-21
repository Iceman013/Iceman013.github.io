import { post, get } from "./server.js";

function getRandomID() {
    let possible = "1234567890qwertyuiopasdfghjklzxcvbnm";
    let output = "";
    for (let i = 0; i < 20; i++) {
        let chosen = Math.floor(possible.length*Math.random());
        output += possible.substring(chosen, chosen + 1);
    }
    return output;
}
function demoTest() {
    let cow = {
        game: "god",
        y: Math.random(),
        text: "I_am_scared",
    }
    if (Math.random() > 0.5) {
        cow.game = "cat";
    }
    post(cow);
}

function demoTestB() {
    get("cat");
}
function start() {
    console.log("Start");

    document.getElementById("test").addEventListener("click", demoTest);
    document.getElementById("testB").addEventListener("click", demoTestB);
}
start();