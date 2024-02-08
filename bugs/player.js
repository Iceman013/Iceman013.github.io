import { CHARACTERLIST } from "./characterList.js";
import { Hitbox } from "./hbox.js";
import { Bullet } from "./bullet.js";
import { entityList } from "./entityList.js";

export class Player {
    constructor(character) {
        this.character = CHARACTERLIST[character];

        this.friction = 0.87;
        this.size = 100;
        this.fraction = 0.7;

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.moving = false;
        this.shooting = false;
        this.lastShot = 0;
        this.lastTwoot = 0;
        this.maxhealth = 300;
        this.health = this.maxhealth;
        this.dashing = 0;

        // Visible
        this.base = document.createElement("div");
        this.base.style.width = this.size + "px";
        this.base.style.height = this.size + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/" + this.character.img + "')";
        document.getElementById("visible").appendChild(this.base);

        this.hitbox = new Hitbox(this.fraction*this.size, "player");
    }

    // Move
    move(xpos, ypos) {
        this.moving = true;
        this.vx += xpos;
        this.vy += ypos;
        if (xpos == 0) {
            this.vx *= this.friction;
        }
        if (ypos == 0) {
            this.vy *= this.friction;
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
        if (this.health > this.maxhealth) {
            this.health = this.maxhealth;
        }
        document.getElementById("health").style.width = Math.max(100*this.health/this.maxhealth, 0) + "%";

        if (this.dashing >= 10) {
            if (this.vx*this.vx + this.vy*this.vy >= this.character.maxspeed*this.character.maxspeed) {
                let dirp = this.character.maxspeed*this.character.maxspeed/(this.vx*this.vx + this.vy*this.vy);
                this.vx *= dirp;
                this.vy *= dirp;
            }
        }
        this.dashing++;
        this.x += this.character.speed*this.vx;
        this.y += this.character.speed*this.vy;

        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > window.screen.availWidth - this.size*this.fraction) {
            this.x = window.screen.availWidth - this.size*this.fraction;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > document.getElementById("game").clientHeight - this.size*this.fraction) {
            this.y = document.getElementById("game").clientHeight - this.size*this.fraction;
        }

        if (this.shooting) {
            this.vx *= this.character.slowdown;
            this.vy *= this.character.slowdown;
            this.shooting = false;
        } else if (this.character.point) {
            this.turn();
        }
        if (!this.character.point) {
            this.turn();
        }

        this.base.style.left = this.x - (1 - this.fraction)*this.size/2 + "px";
        this.base.style.bottom = this.y - (1 - this.fraction)*this.size/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);

        this.lastShot++;
        this.lastTwoot++;
    }

    // Aim at (xt, yt) before shooting
    aim(xt, yt) {
        if (this.character.point) {
            let angle = Math.atan((xt - this.x)/(yt - this.y));
            if (yt - this.y < 0) {
                angle = Math.PI + angle;
            }
            this.base.style.transform = "rotate(" + angle + "rad)";
        }
    }

    // Shoot at (xt, yt)
    shoot(xt, yt) {
        if (this.dashing >= 10) {
            this.shooting = true;
            this.aim(xt, yt);

            if (this.lastShot >= this.character.cooldown) {
                this.character.shoot(this, xt, yt, this.size, this.fraction);
                this.lastShot = 0;
            }
        }
    }

    // M2 Attack
    twoot(xt, yt) {
        if (this.lastTwoot >= this.character.twodown) {
            this.character.twoot(this, xt, yt);
            this.lastTwoot = 0;
        }
    }
}