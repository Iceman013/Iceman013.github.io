import { Roach } from "./enemies/roach.js";
import { Fly } from "./enemies/fly.js";
import { Tank } from "./enemies/tank.js";
import { Beetle } from "./enemies/beetle.js";
import { Gnat } from "./enemies/gnat.js";
import { Pinsir } from "./enemies/pinsir.js";
import { Charger } from "./enemies/charger.js";
import { Rhino } from "./enemies/rhino.js";

let enemies = [
    {
        "type": Gnat,
        "points": 2,
    },
    {
        "type": Roach,
        "points": 2,
    },
    {
        "type": Fly,
        "points": 4,
    },
    {
        "type": Charger,
        "points": 5,
    },
    {
        "type": Beetle,
        "points": 6,
    },
    {
        "type": Pinsir,
        "points": 10,
    },
    {
        "type": Rhino,
        "points": 15,
    },
    {
        "type": Tank,
        "points": 25,
    },
];

export function spawnWave(player, points) {
    let added = 0;
    let remainder = points;
    let done = false;
    while (!done) {
        let spawnable = [];
        for (let i = 0; i < enemies.length; i++) {
            if (remainder >= enemies[i].points) {
                spawnable.push(enemies[i]);
            }
        }
        if (spawnable.length == 0) {
            done = true;
        } else {
            let rng = Math.floor(spawnable.length*Math.random());
            setTimeout(function() {
                new enemies[rng].type(player);
            }, added*200),
            added++;
            remainder -= enemies[rng].points;
        }
    }
}