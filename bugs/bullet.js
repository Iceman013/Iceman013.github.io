import { Hitbox } from "./hbox.js";
import { entityList } from "./entityList.js";
import { randomDigits } from "./helper.js";

export class Bullet {
    constructor(x, y, xtarget, ytarget, speed, friction, spread, lifespan, size, img) {
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
        this.size = size;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = 2*this.size + "px";
        this.base.style.height = 2*this.size + "px";
        this.base.style.backgroundImage = "url('imgs/" + img + "')";
        this.base.classList.add("entity");
        this.base.id = randomDigits();
        document.getElementById("visible").appendChild(this.base);

        this.hitbox = new Hitbox(this.size, "bullet");
    }

    turn() {
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
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
            document.getElementById("visible").removeChild(document.getElementById(this.base.id));
        }

        // this.vx = this.spread*this.randomX + (1 - this.spread)*this.vx;
        // this.vy = this.spread*this.randomY + (1 - this.spread)*this.vy;
        this.vx *= 1 - this.friction;
        this.vy *= 1 - this.friction;

        this.x += this.vx;
        this.y += this.vy;
        this.base.style.left = this.x - this.size + "px";
        this.base.style.bottom = this.y - this.size + "px";

        this.turn();
        this.hitbox.updatePosition(this.x, this.y);
    }
}