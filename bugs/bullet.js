import { Hitbox } from "./hbox.js";
import { entityList } from "./entityList.js";

export class Bullet {
    constructor(x, y, xtarget, ytarget, speed, friction, spread, lifespan) {
        this.x = x;
        this.y = y;

        this.life = 0;

        let currentSpeed = Math.sqrt(xtarget*xtarget + ytarget*ytarget);
        this.vx = xtarget*speed/currentSpeed;
        this.vy = ytarget*speed/currentSpeed;

        let rd = Math.random()*2*Math.PI
        this.randomX = Math.random()*speed*Math.cos(rd);
        this.randomY = Math.random()*speed*Math.sin(rd);

        this.vx = spread*this.randomX + (1 - spread)*this.vx;
        this.vy = spread*this.randomY + (1 - spread)*this.vy;

        this.friction = friction;
        this.spread = spread;
        this.lifespan = lifespan;

        this.hitbox = new Hitbox(10);
    }

    tick() {
        this.life++;

        if (this.life >= this.lifespan) {
            for (let i = 0; i < entityList.length; i++) {
                if (entityList[i] == this) {
                    entityList.splice(i, 1);
                    this.hitbox.delete();
                }
            }
        }

        // this.vx = this.spread*this.randomX + (1 - this.spread)*this.vx;
        // this.vy = this.spread*this.randomY + (1 - this.spread)*this.vy;
        this.vx *= 1 - this.friction;
        this.vy *= 1 - this.friction;

        this.x += this.vx;
        this.y += this.vy;
        this.hitbox.updatePosition(this.x, this.y);
    }
}