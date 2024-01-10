import { Enemy } from "../enemy.js";

import { BabyAnt } from "./babyAnt.js";

const SPEED = 1.5;
const MAXSPEED = 10;
const COOLDOWN = 40;

export class QueenAnt extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 1;

        this.fired = 0;
        this.targetDirection = 0;

        this.size = 100;
        this.fraction = 0.7;
        this.maxhealth = 300;
        this.img = "queenAnt.svg";
        this.createElements();
    }

    shoot() {
        if (this.fired >= COOLDOWN) {
            this.fired = 0;
            let child = new BabyAnt(this.player);
            child.x = this.x;
            child.y = this.y;
        }
    }
    aim() {
        this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
        if (this.x > this.player.x) {
            this.targetDirection += Math.PI;
        }
    }
    move() {
        this.vx += Math.cos(this.targetDirection);
        this.vy += Math.sin(this.targetDirection);

        if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
            let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
            this.vx *= dirp;
            this.vy *= dirp;
        }
    }

    tick() {
        this.fired += 1;
        let distance = Math.sqrt((this.x - this.player.x)*(this.x - this.player.x) + (this.y - this.player.y)*(this.y - this.player.y));
        if (distance <= 500) {
            // Run away
            this.move();
        } else if (distance <= 600) {
            // Aim
            this.aim();
            this.targetDirection += Math.PI;
            this.shoot();
        } else {
            // Run towards
            this.aim();
            this.move();
        }

        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        this.vx *= 0.9;
        this.vy *= 0.9;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}