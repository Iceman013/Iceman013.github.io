import { Enemy } from "../enemy.js";
import { Hitbox } from "../hbox.js";
import { Bullet } from "../bullet.js";

const SIZE = 100;
const FRACTION = 0.7;
const SPEED = 2;
const MAXSPEED = 10;
const COOLDOWN = 20;

export class Bee extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 2;

        this.shooting = false;
        this.fired = 0;
        this.targetDirection = 0;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + "enemies/bee.svg" + "')";
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
        this.hitbox.updatePosition(this.x, this.y);
    }

    turn() {
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        if (this.shooting) {
            angle = -1*this.targetDirection + Math.PI/2;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
        this.healthbar.style.transform = "rotate(" + -1*angle + "rad)";
    }
    shoot() {
        if (this.fired >= COOLDOWN) {
            this.fired = 0;
            new Bullet("enemyBullet", this.x + SIZE*FRACTION/2, this.y + SIZE*FRACTION/2, -1*Math.cos(this.targetDirection), -1*Math.sin(this.targetDirection), 40, 0.01, 0.1, 70, 10, 5, "thorn.svg");
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
        if (distance <= 300) {
            // Run away
            this.shooting = false;
            this.aim();
            this.targetDirection += Math.PI;
            this.turn();
            this.shoot();
            this.move();
        } else if (distance <= 500) {
            // Aim
            this.shooting = true;
            this.aim();
            this.targetDirection += Math.PI;
            this.turn();
            this.shoot();
        } else {
            // Run towards
            this.shooting = false;
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