import { Hitbox } from "./hbox.js";
import { entityList } from "./entityList.js";

const LIFESPAN = 100;

export class Bullet {
    constructor(x, y, xtarget, ytarget, speed, friction, spread) {
        this.x = x;
        this.y = y;

        this.life = 0;

        let currentSpeed = Math.sqrt(xtarget*xtarget + ytarget*ytarget);
        this.vx = xtarget*speed/currentSpeed;
        this.vy = ytarget*speed/currentSpeed;

        this.friction = friction;
        this.spread = spread;

        this.hitbox = new Hitbox(10);
    }

    tick() {
        this.life++;

        if (this.life >= LIFESPAN) {
            for (let i = 0; i < entityList.length; i++) {
                if (entityList[i] == this) {
                    entityList.splice(i, 1);
                    this.hitbox.delete();
                }
            }
        }

        this.vx *= 1 - this.friction;
        this.vy *= 1 - this.friction;

        this.x += this.vx;
        this.y += this.vy;
        this.hitbox.updatePosition(this.x, this.y);
    }
}