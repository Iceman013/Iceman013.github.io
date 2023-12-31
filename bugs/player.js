import { CHARACTERLIST } from "./characterList.js";
import { Hitbox } from "./hbox.js";
import { Bullet } from "./bullet.js";
import { entityList } from "./entityList.js";

const SPEED = 2;
const MAXSPEED = 7;
const FRICTION = 0.87;
const SIZE = 100;
const FRACTION = 0.7;

export class Player {
    constructor(character) {
        this.character = CHARACTERLIST[character];
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.size = SIZE;
        this.moving = false;
        this.shooting = false;
        this.lastShot = 0;
        this.maxhealth = 300;
        this.health = this.maxhealth;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + this.character.img + "')";
        document.getElementById("visible").appendChild(this.base);

        this.hitbox = new Hitbox(FRACTION*SIZE, "player");
    }

    // Move
    move(xpos, ypos) {
        this.moving = true;
        this.vx += xpos;
        this.vy += ypos;
        if (xpos == 0) {
            this.vx *= FRICTION;
        }
        if (ypos == 0) {
            this.vy *= FRICTION;
        }
        this.tick();
    }

    turn() {
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
    }

    // Tick for move
    // Called by move()
    tick() {
        document.getElementById("health").style.width = Math.max(100*this.health/this.maxhealth, 0) + "%";

        if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
            let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
            this.vx *= dirp;
            this.vy *= dirp;
        }
        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > window.screen.availWidth - SIZE*FRACTION) {
            this.x = window.screen.availWidth - SIZE*FRACTION;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > document.getElementById("game").clientHeight - SIZE*FRACTION) {
            this.y = document.getElementById("game").clientHeight - SIZE*FRACTION;
        }

        if (this.shooting) {
            this.vx *= 0.6;
            this.vy *= 0.6;
            this.shooting = false;
        } else if (this.character.point) {
            this.turn();
        }
        if (!this.character.point) {
            this.turn();
        }

        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);

        this.lastShot++;
    }

    // Shoot at (xt, yt)
    shoot(xt, yt) {
        this.shooting = true;
        if (this.character.point) {
            let angle = Math.atan((xt - this.x)/(yt - this.y));
            if (yt - this.y < 0) {
                angle = Math.PI + angle;
            }
            this.base.style.transform = "rotate(" + angle + "rad)";
        }

        if (this.lastShot >= this.character.cooldown) {
            this.character.shoot(this, xt, yt, SIZE, FRACTION);
            this.lastShot = 0;
        }
    }
}