import { Enemy } from "../enemy.js";
import { Hitbox } from "../hbox.js";

const MAXSPEED = 3;

export class Tank extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 40;
        this.baseSpeed = 3;
        this.speed = this.baseSpeed;

        this.shook = 0;
        this.targetDirection = 0;

        this.size = 150;
        this.fraction = 0.85;
        this.maxhealth = 600;
        this.img = "tank.svg";
        this.createElements();
    }

    tick() {
        this.shook += 1;
        if (this.shook >= 5) {
            this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
            let rng = 0.05;
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
        this.x += this.speed*this.vx;
        this.y += this.speed*this.vy;

        this.vx *= 0.8;
        this.vy *= 0.8;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}