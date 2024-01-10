import { Enemy } from "../enemy.js";

const SPEED = 0.1;
const MAXSPEED = 3.2;

export class Worm extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 20;

        this.targetDirection = 0;

        this.size = 100;
        this.fraction = 0.8;
        this.maxhealth = 100;
        this.img = "wormBody.svg";
        this.createElements();
    }

    tick() {
        this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
        if (this.x < this.player.x) {
            this.vx += Math.cos(this.targetDirection);
            this.vy += Math.sin(this.targetDirection);
        } else {
            this.vx += -1*Math.cos(this.targetDirection);
            this.vy += -1*Math.sin(this.targetDirection);
        }
        if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
            let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
            this.vx *= dirp;
            this.vy *= dirp;
        }
        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        this.vx *= 0.99;
        this.vy *= 0.99;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}