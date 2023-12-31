import { start } from "./main.js";

import { Player } from "./player.js";
import { entityList } from "./entityList.js";
import { characterChoice } from "./main.js";

import { Roach } from "./enemies/roach.js";
import { Fly } from "./enemies/fly.js";

let TICK = 20;
const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;

let player;
let time;
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

    function deleteEntity(item) {
        let ta = 0;
        for (let i = 0; i < entityList.length; i++) {
            if (entityList[i] == item) {
                ta = i;
                i = entityList.length;
            }
        }
        entityList[ta].delete();
        entityList.splice(ta, 1);
    }
    let enemies = [];
    let bullets = [];
    let ebullets = [];
    for (let i = 0; i < entityList.length; i++) {
        if (entityList[i].hitbox.type == "bullet") {
            bullets.push(entityList[i]);
        }
        if (entityList[i].hitbox.type == "enemy") {
            enemies.push(entityList[i]);
        }
        if (entityList[i].hitbox.type == "enemyBullet") {
            ebullets.push(entityList[i]);
        }
    }
    function hitting(a, b) {
        return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) <= Math.pow(a.hitbox.diameter/2 + b.hitbox.diameter/2, 2);
    }
    // Enemy dealing withing
    for (let i = 0; i < enemies.length; i++) {
        let deled = [];
        for (let j = 0; j < bullets.length; j++) {
            if (hitting(enemies[i], bullets[j])) {
                // On hit enemy
                enemies[i].health -= bullets[j].damage;
                if (player.character.id == 5) {
                    player.health += 10;
                }
                deleteEntity(bullets[j]);
                deled.push(j);
            }
        }
        for (let k = 0; k < deled.length; k++) {
            bullets.splice(k, 1);
        }
    }
    for (let i = 0; i < enemies.length; i++) {
        // Death
        if (enemies[i].health <= 0) {
            deleteEntity(enemies[i]);
        }
    }

    for (let i = 0; i < enemies.length; i++) {
        if (hitting(player, enemies[i])) {
            player.health -= enemies[i].damage;
        }
    }

    // Tick
    for (let i = 0; i < entityList.length; i++) {
        entityList[i].tick();
    }

    if (Math.random() < 0.02) {
        new Roach(player);
    }
    if (Math.random() < 0.01) {
        new Fly(player);
    }
    if (player.health <= 0) {
        done = true;
    }
    document.getElementById("time").innerText = time;
    time++;

    if (!done) {
        setTimeout(tick, TICK);
    } else {
        player.tick();
        document.getElementById("restart").style.display = "block";
        entityList.splice(0, entityList.length);
    }
}
export function startGame() {
    console.log("Start game");
    while (document.getElementById("visible").firstChild) {
        document.getElementById("visible").removeChild(document.getElementById("visible").firstChild);
    }
    while (document.getElementById("hitboxes").firstChild) {
        document.getElementById("hitboxes").removeChild(document.getElementById("hitboxes").firstChild);
    }
    document.getElementById("restart").style.display = "none";
    addControls();
    player = new Player(characterChoice);
    time = 0;
    player.x = WIDTH/2 - player.size/2;
    player.y = HEIGHT/2 - player.size/2;

    tick();
}