import { Enemy } from "../enemy.js";
import { Hitbox } from "../hbox.js";

const SIZE = 100;
const FRACTION = 0.7;
const SPEED = 3;
const MAXSPEED = 3;

export class Roach extends Enemy {
    constructor(player) {
        super(player);

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + "enemies/roach.svg" + "')";
        document.getElementById("visible").appendChild(this.base);

        this.hitbox = new Hitbox(SIZE*FRACTION, "enemy");
    }

    turn() {
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
    }

    tick() {
        let xoff = this.player.x - this.x;
        let yoff = this.player.y - this.y;

        if (Math.abs(xoff) > Math.abs(yoff)) {
            if (this.player.x > this.x) {
                if (this.vx < MAXSPEED) {
                    this.vx += 1;
                }
            }
            if (this.player.x < this.x) {
                if (this.vx > -1*MAXSPEED) {
                    this.vx -= 1;
                }
            }
        }
        if (Math.abs(xoff) < Math.abs(yoff)) {
            if (this.player.y > this.y) {
                if (this.vy < MAXSPEED) {
                    this.vy += 1;
                }
            }
            if (this.player.y < this.y) {
                if (this.vy > -1*MAXSPEED) {
                    this.vy -= 1;
                }
            }
        }
        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        this.vx *= 0.8;
        this.vy *= 0.8;

        this.show();
    }

    show() {
        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);

        this.turn();
    }
}