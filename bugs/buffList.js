import { Buff } from "./buff.js";

export const buffList = [
    new Buff("Burn", "fire.svg", false, 999999, function(enemy) {
        enemy.health -= 1;
    }),
    new Buff("Blaze", "fire.svg", true, 100, function(enemy) {
        enemy.health -= 0.4;
    }),
    new Buff("Webbed", "web.svg", false, 100, function(enemy) {
        enemy.speed = enemy.speed*0.3;
    }),
    new Buff("Venom", "poison.svg", false, 300, function(enemy) {
        enemy.health -= (1/3)*(enemy.health/enemy.maxhealth);
        enemy.speed = enemy.speed*0.7;
    }),
    new Buff("Slow", "slow.svg", true, 1000, function(enemy) {
        enemy.speed = enemy.speed*0.9;
    }),
    new Buff("Bleed", "blood.svg", true, 1000, function(enemy) {
        enemy.health -= (1/3)*(enemy.health/enemy.maxhealth);
    }),
    new Buff("Stink", "stink.svg", true, 50, function(enemy) {
        enemy.cooldown -= 1;
        enemy.speed = enemy.speed*Math.random(0, 1);
    }),
    new Buff("Stunned", "zap.svg", false, 200, function(enemy) {
        enemy.speed = 0;
        enemy.vx = 0;
        enemy.vy = 0;
    }),
];

export function getBuff(name) {
    let out;
    for (let i = 0; i < buffList.length; i++) {
        if (buffList[i].name == name) {
            out = buffList[i];
            i = buffList.length;
        }
    }
    return out;
}