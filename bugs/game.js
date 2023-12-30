import { Player } from "./player.js";
import { entityList } from "./entityList.js";
import { characterChoice } from "./main.js";

import { Roach } from "./enemies/roach.js";
import { Fly } from "./enemies/fly.js";

let TICK = 20;
const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;

let player;
let controls = {
    "w": false,
    "a": false,
    "s": false,
    "d": false,
};
let mouse = {
    "pressed": false,
    "x": 0,
    "y": 0,
}
function addControls() {
    window.addEventListener("keydown", function(e) {
        if (controls[e.key] == null || controls[e.key] == false) {
            controls[e.key] = true;
        }
    });
    window.addEventListener("keyup", function(e) {
        if (controls[e.key] == null || controls[e.key] == true) {
            controls[e.key] = false;
        }
    });
    window.addEventListener("mousedown", function(e) {
        mouse.pressed = true;
        mouse.x = e.screenX;
        mouse.y = window.screen.availHeight - e.screenY;
    });
    window.addEventListener("mousemove", function(e) {
        mouse.x = e.screenX;
        mouse.y = window.screen.availHeight - e.screenY;
    });
    window.addEventListener("mouseup", function(e) {
        mouse.pressed = false;
    });
}

function handleInput() {
    let xt = 0;
    let yt = 0;
    if (controls["w"] || controls["ArrowUp"]) {
        yt++;
    }
    if (controls["a"] || controls["ArrowLeft"]) {
        xt--;
    }
    if (controls["s"] || controls["ArrowDown"]) {
        yt--;
    }
    if (controls["d"] || controls["ArrowRight"]) {
        xt++;
    }
    if (xt*xt + yt*yt == 2) {
        xt = xt*Math.SQRT1_2;
        yt = yt*Math.SQRT1_2;
    }

    if (mouse.pressed) {
        player.shoot(mouse.x, mouse.y);
        if (!player.character.feral) {
            mouse.pressed = false;
        }
    }
    player.move(xt, yt);
}

function tick() {
    let done = false;

    // Tick elements
    handleInput();
    for (let i = 0; i < entityList.length; i++) {
        entityList[i].tick();
    }

    if (!done) {
        setTimeout(tick, TICK);
    }
}
export function startGame() {
    console.log("Start game");
    addControls();
    player = new Player(characterChoice);
    player.x = WIDTH/2 - player.size/2;
    player.y = HEIGHT/2 - player.size/2;
    tick();
    // new Fly(player);
    for (let i = 0; i < 3; i++) {
        new Fly(player);
    }
}