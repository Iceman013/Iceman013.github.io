import { Enemy } from "../enemy.js";

import { BabyAnt } from "./babyAnt.js";

const MAXSPEED = 10;

export class QueenAnt extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 1;
        this.baseSpeed = 1.5;
        this.speed = this.baseSpeed;

        this.cooldownTime = 40;
        this.targetDirection = 0;

        this.size = 100;
        this.fraction = 0.7;
        this.maxhealth = 300;
        this.img = "queenAnt.svg";
        this.createElements();
    }

    shoot() {
        if (this.cooldown >= this.cooldownTime) {
            this.cooldown = 0;
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

        this.x += this.speed*this.vx;
        this.y += this.speed*this.vy;

        this.vx *= 0.9;
        this.vy *= 0.9;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}