import { Enemy } from "../enemy.js";

const SPEED = 60;
const MINSPEED = 0.1;

export class Pinsir extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 20;
        this.state = 0;

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
                this.vx = SPEED*Math.cos(targetDirection);
                this.vy = SPEED*Math.sin(targetDirection);
            } else {
                this.vx = -1*SPEED*Math.cos(targetDirection);
                this.vy = -1*SPEED*Math.sin(targetDirection);
            }
            this.state = 1;
        } else {
            if (this.vx*this.vx + this.vy*this.vy <= MINSPEED*MINSPEED) {
                this.state = 0;
            }
        }

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.95;
        this.vy *= 0.95;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}