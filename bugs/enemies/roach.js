import { Enemy } from "../enemy.js";
import { Hitbox } from "../hbox.js";

const SIZE = 100;
const FRACTION = 0.7;
const SPEED = 3;
const MAXSPEED = 3;

export class Roach extends Enemy {
    constructor(player) {
        super(player);
        this.shook = 0;
        this.targetDirection = 0;

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
        this.shook += 1;
        if (this.shook >= 5) {
            this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
            let rng = 0.2;
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
        /*
        if (this.player.x > this.x) {
            this.vx += 1;
        }
        if (this.player.x < this.x) {
            this.vx -= 1;
        }
        if (this.player.y > this.y) {
            this.vy += 1;
        }
        if (this.player.y < this.y) {
            this.vy -= 1;
        }
        */
        if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
            let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
            this.vx *= dirp;
            this.vy *= dirp;
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