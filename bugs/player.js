import { CHARACTERLIST } from "./characterList.js";
import { Hitbox } from "./hbox.js";
import { Bullet } from "./bullet.js";
import { entityList } from "./entityList.js";

const SPEED = 2;
const MAXSPEED = 5;
const FRICTION = 0.87;
const SIZE = 100;
const FRACTION = 0.7;

export class Player {
    constructor() {
        this.character = CHARACTERLIST[1];
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.moving = false;
        this.shooting = false;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + this.character.img + "')";
        document.getElementById("visible").appendChild(this.base);

        this.hitbox = new Hitbox(FRACTION*SIZE);
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
        this.moveTick();
    }

    // Tick for move
    // Called by move()
    moveTick() {
        if (this.vx >= MAXSPEED) {
            this.vx = MAXSPEED;
        }
        if (this.vx <= -1*MAXSPEED) {
            this.vx = -1*MAXSPEED;
        }
        if (this.vy >= MAXSPEED) {
            this.vy = MAXSPEED;
        }
        if (this.vy <= -1*MAXSPEED) {
            this.vy = -1*MAXSPEED;
        }
        this.x += SPEED*this.vx;
        this.y += SPEED*this.vy;

        if (this.shooting) {
            this.vx *= 0.6;
            this.vy *= 0.6;
            this.shooting = false;
        } else {
            let angle = Math.atan(this.vx/this.vy);
            if (this.vy < 0) {
                angle = Math.PI + angle;
            }
            this.base.style.transform = "rotate(" + angle + "rad)";
        }

        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);
    }

    // Shoot at (xt, yt)
    shoot(xt, yt) {
        this.shooting = true;
        let angle = Math.atan((xt - this.x)/(yt - this.y));
        if (yt - this.y < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
        this.character.shoot(this, xt, yt, SIZE, FRACTION);
    }
}