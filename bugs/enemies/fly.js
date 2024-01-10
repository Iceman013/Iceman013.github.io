import { Enemy } from "../enemy.js";

const SPEED = 2;
const MAXSPEED = 10;

export class Fly extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 2;

        this.shook = 0;
        this.targetDirection = 0;

        this.size = 100;
        this.fraction = 0.7;
        this.maxhealth = 100;
        this.img = "fly.svg";
        this.createElements();
    }

    tick() {
        this.shook += 1;
        if (this.shook >= 5) {
            this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
            let rng = 1;
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

        let xoff = this.player.x - this.x;
        let yoff = this.player.y - this.y;

        if (Math.abs(xoff) > Math.abs(yoff)) {
            if (this.player.x > this.x) {
                this.vx += 1;
            }
            if (this.player.x < this.x) {
                this.vx -= 1;
            }
        }
        if (Math.abs(xoff) < Math.abs(yoff)) {
            if (this.player.y > this.y) {
                this.vy += 1;
            }
            if (this.player.y < this.y) {
                this.vy -= 1;
            }
        }
        if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
            let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
            this.vx *= dirp;
            this.vy *= dirp;
        }

        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}