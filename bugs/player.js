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
        this.character = CHARACTERLIST.getId(0);
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.moving = false;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = SIZE + "px";
        this.base.style.height = SIZE + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('img/main.svg')";
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

        this.base.style.left = this.x - (1 - FRACTION)*SIZE/2 + "px";
        this.base.style.bottom = this.y - (1 - FRACTION)*SIZE/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
    }

    // Shoot at (xt, yt)
    shoot(xt, yt) {
        // Default
        // entityList.push(new Bullet(this.x + SIZE*FRACTION/2, this.y + SIZE*FRACTION/2, xt - this.x, yt - this.y, 40, 0.03, 0.1, 70));

        // Fire
        entityList.push(new Bullet(this.x + SIZE*FRACTION/2, this.y + SIZE*FRACTION/2, xt - this.x, yt - this.y, 50, 0.1, 0.3, 40));

        // Web
        // entityList.push(new Bullet(this.x + SIZE*FRACTION/2, this.y + SIZE*FRACTION/2, xt - this.x, yt - this.y, 0, 0, 0, 200));
    }
}