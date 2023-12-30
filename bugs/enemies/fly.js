import { Enemy } from "../enemy.js";
import { Hitbox } from "../hbox.js";

const SIZE = 100;
const FRACTION = 0.7;
const SPEED = 2;
const MAXSPEED = 10;

export class Fly extends Enemy {
    constructor(player) {
        super(player);
        this.shook = 0;
        this.targetDirection = 0;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + "enemies/fly.svg" + "')";
        document.getElementById("visible").appendChild(this.base);

        // Health
        this.health = 100;
        this.maxhealth = 100;
        this.healthbar = document.createElement("div");
        this.healthbar.style.width = SIZE + "px";
        this.healthbar.classList.add("healthbar");
        this.healthbar.style.display = "none";

        this.hp = document.createElement("div");
        this.hp.style.width = 100*this.health/this.maxhealth + "%";
        this.hp.classList.add("health");
        this.healthbar.appendChild(this.hp);
        this.base.appendChild(this.healthbar);

        this.hitbox = new Hitbox(SIZE*FRACTION, "enemy");

        this.hitbox = new Hitbox(SIZE*FRACTION, "enemy");
    }

    turn() {
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
        this.healthbar.style.transform = "rotate(" + -1*angle + "rad)";
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

        this.hp.style.width = 100*this.health/this.maxhealth + "%";

        this.show();
    }

    show() {
        this.turn();
        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);

        if (this.health < this.maxhealth) {
            this.healthbar.style.display = "block";
        }
    }

    delete() {
        document.getElementById("visible").removeChild(this.base);
        this.hitbox.delete();
    }
}