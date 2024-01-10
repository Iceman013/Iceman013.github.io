import { Enemy } from "../enemy.js";

const SPEED = 5;
const MAXSPEED = 5;

export class Gnat extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 1;

        this.shook = 0;
        this.targetDirection = 0;

        this.size = 50;
        this.fraction = 0.7;
        this.maxhealth = 100;
        this.img = "gnat.svg";
        this.createElements();
    }

    tick() {
        this.shook += 1;
        if (this.shook >= 5) {
            this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
            let rng = 0.3;
            this.targetDirection += rng*2*Math.PI*(2*Math.random() - 1);
            this.shook = 0;
        }
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

        this.vx *= 0.8;
        this.vy *= 0.8;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}