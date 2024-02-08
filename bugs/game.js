import { start } from "./main.js";

import { Player } from "./player.js";
import { addControls, handleInput } from "./controls.js";
import { entityList } from "./entityList.js";
import { characterChoice } from "./main.js";

import { spawnWave } from "./enemyList.js";

let TICK = 20;
const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;

let player;
let time;
let wave;

// Delete entity without breaking everything
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

// Is a's hittbox touching b's hitbox
function hitting(a, b) {
    let ra = a.hitbox.diameter/2;
    let rb = b.hitbox.diameter/2;
    return Math.sqrt(Math.pow((a.x + ra) - (b.x + rb), 2) + Math.pow((a.y + ra) - (b.y + rb), 2)) <= ra + rb;
}

// Gametick calls itself
function tick() {
    let done = false;

    // Tick elements
    handleInput(player);

    let enemies = [];
    let bullets = [];
    let ebullets = [];
    function redefineLists() {
        enemies = [];
        bullets = [];
        ebullets = [];
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
    }
    redefineLists();

    // Enemy dealing withing
    for (let i = 0; i < enemies.length; i++) {
        // Buffs
        for (let j = 0; j < enemies[i].buffs.length; j++) {
            enemies[i].buffs[j].tick(enemies[i]);
        }

        // Hit by bullets
        let deled = [];
        for (let j = 0; j < bullets.length; j++) {
            if (hitting(enemies[i], bullets[j])) {
                // On hit enemy
                enemies[i].getHit(bullets[j].damage);
                for (let k = 0; k < bullets[j].buffs.length; k++) {
                    if (bullets[j].buffs[k].stack || enemies[i].buffs.indexOf(bullets[j].buffs[k]) == -1) {
                        enemies[i].buffs.push(bullets[j].buffs[k]);
                        enemies[i].buffTimers.push(0);
                    }
                }
                if (player.character.id == 5) {
                    player.health += 0.5;
                }
                if (!bullets[j].pierce) {
                    deleteEntity(bullets[j]);
                    deled.push(bullets[j]);
                }
            }
        }
        // Delete used bullets
        for (let k = 0; k < deled.length; k++) {
            for (let m = 0; m < bullets.length; m++) {
                if (bullets[m] == deled[k]) {
                    bullets.splice(m, 1);
                    m = bullets.length;
                }
            }
        }
    }
    for (let i = 0; i < enemies.length; i++) {
        // Death
        if (enemies[i].health <= 0) {
            deleteEntity(enemies[i]);
        }
    }

    // Enemy touch player
    for (let i = 0; i < enemies.length; i++) {
        if (hitting(player, enemies[i]) && enemies[i].recentHit >= 10) {
            player.health -= enemies[i].damage;
            enemies[i].recentHit = 0;
        } else {
            enemies[i].recentHit++;
        }
    }

    // Enemy bullet touch player
    for (let i = 0; i < ebullets.length; i++) {
        if (hitting(player, ebullets[i])) {
            player.health -= ebullets[i].damage;
            deleteEntity(ebullets[i]);
        }
    }

    if (enemies.length == 0) {
        for (let i = 0; i < 1; i++) {
            spawnWave(player, 30*Math.pow(1.1, wave));
        }
        wave++;
        document.getElementById("wave").innerText = "Wave " + wave;
    }

    // Tick
    for (let i = 0; i < entityList.length; i++) {
        entityList[i].tick();
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
        document.getElementById("music").innerHTML = "";
    }
}

// Adds background music
function addMusic() {
    let music = document.getElementById("music");
    music.innerHTML = "<embed src='./sounds/ambient.mp3' 'autostart=true' 'loop=true'>";
}

// Start game main function
export function startGame() {
    console.log("Start game");
    while (document.getElementById("visible").firstChild) {
        document.getElementById("visible").removeChild(document.getElementById("visible").firstChild);
    }
    while (document.getElementById("hitboxes").firstChild) {
        document.getElementById("hitboxes").removeChild(document.getElementById("hitboxes").firstChild);
    }
    addMusic();
    document.getElementById("restart").style.display = "none";
    addControls();
    player = new Player(characterChoice);
    time = 0;
    wave = 0;
    player.x = WIDTH/2 - player.size/2;
    player.y = HEIGHT/2 - player.size/2;

    tick();
}