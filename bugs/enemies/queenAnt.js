import { Enemy } from "../enemy.js";
import { Hitbox } from "../hbox.js";
import { Bullet } from "../bullet.js";

import { BabyAnt } from "./babyAnt.js";

const SIZE = 100;
const FRACTION = 0.7;
const SPEED = 1.5;
const MAXSPEED = 10;
const COOLDOWN = 40;

export class QueenAnt extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 1;

        this.fired = 0;
        this.targetDirection = 0;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + "enemies/queenAnt.svg" + "')";
        document.getElementById("visible").appendChild(this.base);

        // Health
        this.maxhealth = 300;
        this.health = this.maxhealth;
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
        this.hitbox.updatePosition(this.x, this.y);
    }

    turn() {
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
        this.healthbar.style.transform = "rotate(" + -1*angle + "rad)";
    }
    shoot() {
        if (this.fired >= COOLDOWN) {
            this.fired = 0;
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
        this.fired += 1;
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

        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        this.vx *= 0.9;
        this.vy *= 0.9;

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