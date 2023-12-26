import { Player } from "./player.js";

let TICK = 20;

let player;
let controls = {
    "w": false,
    "a": false,
    "s": false,
    "d": false,
};
function addControls() {
    window.addEventListener("keydown", function(e) {
        if (controls[e.key] == null || controls[e.key] == false) {
            controls[e.key] = true;
        }
        console.log(controls)
    });
    window.addEventListener("keyup", function(e) {
        if (controls[e.key] == null || controls[e.key] == true) {
            controls[e.key] = false;
        }
    });
}

function handleInput() {
    let xt = 0;
    let yt = 0;
    if (controls["w"]) {
        yt++;
    }
    if (controls["a"]) {
        xt--;
    }
    if (controls["s"]) {
        yt--;
    }
    if (controls["d"]) {
        xt++;
    }
    if (xt*xt + yt*yt == 2) {
        xt = xt*Math.SQRT1_2;
        yt = yt*Math.SQRT1_2;
    }
    player.move(xt, yt);
}

function tick() {
    let done = false;

    // Tick elements
    handleInput();

    if (!done) {
        setTimeout(tick, TICK);
    }
}
export function startGame() {
    console.log("Start game");
    addControls();
    player = new Player();
    tick();
}