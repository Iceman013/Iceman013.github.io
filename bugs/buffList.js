import { Buff } from "./buff.js";

export const buffList = [
    new Buff("Burn", "fire.svg", function(enemy) {
        enemy.health -= 1;
    }),
];