import { Enemy } from "../enemy.js";

const MINSPEED = 0.0016;

export class Pinsir extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 20;
        this.state = 0;
        this.baseSpeed = 60;
        this.speed = this.baseSpeed;

        this.size = 100;
        this.fraction = 0.7;
        this.maxhealth = 100;
        this.img = "pinsir.svg";
        this.createElements();
    }

    tick() {
        if (this.state == 0) {
            let targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
            if (this.x < this.player.x) {
                this.vx = Math.cos(targetDirection);
                this.vy = Math.sin(targetDirection);
            } else {
                this.vx = -1*Math.cos(targetDirection);
                this.vy = -1*Math.sin(targetDirection);
            }
            this.state = 1;
        } else {
            if (this.vx*this.vx + this.vy*this.vy <= MINSPEED*MINSPEED) {
                this.state = 0;
            }
        }

        this.x += this.speed*this.vx;
        this.y += this.speed*this.vy;

        this.vx *= 0.95;
        this.vy *= 0.95;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}