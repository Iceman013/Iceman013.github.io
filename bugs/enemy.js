import { entityList } from "./entityList.js";
import { Hitbox } from "./hbox.js";

export class Enemy {
    constructor(player) {
        this.player = player;
        this.x = -100;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.recentHit = 5;
        this.points = 0;

        this.buffs = [];
        this.buffTimers = [];
        
        this.baseSpeed = 1;
        this.speed = this.baseSpeed;

        this.cooldownTime = 1;
        this.cooldown = 0;

        this.armor = 0;
        this.vulnerable = 1;

        // Display Stuff
        this.size = 100;
        this.fraction = 0.7;
        this.maxhealth = 100;
        this.img = "";

        entityList.push(this);

        this.spawn();
    }

    spawn() {
        let width = window.screen.width;
        let height = document.getElementById("game").clientHeight;
        let sng = 2*Math.PI*Math.random();
        if (Math.random()*(width + height) < width) {
            this.x = width/2 + (width)*Math.cos(sng);
            if (Math.random() < 0.5) {
                this.y = -200;
            } else {
                this.y = height + 200;
            }
        } else {
            this.y = height/2 + (height)*Math.sin(sng);
            if (Math.random() < 0.5) {
                this.x = -200;
            } else {
                this.x = width + 200;
            }
        }
    }
    tick() {
        throw new Error("Function undefined");
    }
    createElements() {
        // Visible
        this.base = document.createElement("div");
        this.base.style.width = this.size + "px";
        this.base.style.height = this.size + "px";
        this.base.style.left = this.x - (1 - this.fraction)*this.size/2 + "px";
        this.base.style.bottom = this.y - (1 - this.fraction)*this.size/2 + "px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('imgs/enemies/" + this.img + "')";
        document.getElementById("visible").appendChild(this.base);

        // Health
        this.health = this.maxhealth;
        this.healthbar = document.createElement("div");
        this.healthbar.style.width = this.size + "px";
        this.healthbar.classList.add("healthbar");
        this.healthbar.style.display = "none";

        this.hp = document.createElement("div");
        this.hp.style.width = 100*this.health/this.maxhealth + "%";
        this.hp.classList.add("health");
        this.healthbar.appendChild(this.hp);
        this.base.appendChild(this.healthbar);

        // Buffs
        this.buffsS = document.createElement("div");
        this.buffsS.style.width = this.size + "px";
        this.buffsS.classList.add("buffs");
        this.buffsS.style.display = "none";
        this.base.appendChild(this.buffsS);

        this.hitbox = new Hitbox(this.size*this.fraction, "enemy");
        this.hitbox.updatePosition(this.x, this.y);
    }

    getHit(amount) {
        let danger = amount - this.armor;
        if (danger < 1) {
            danger = 1;
        }
        danger *= this.vulnerable;
        this.health -= danger;
    }
    cleanse() {
        this.cooldown++;
        this.speed = this.baseSpeed;
        for (let i = 0; i < this.buffTimers.length; i++) {
            this.buffTimers[i]++;
            if (this.buffTimers[i] > this.buffs[i].time) {
                this.buffTimers.splice(i, 1);
                this.buffs.splice(i, 1);
            }
        }
    }

    turn(angle) {
        this.show();
        this.base.style.transform = "rotate(" + angle + "rad)";
        this.healthbar.style.transform = "rotate(" + -1*angle + "rad)";
        this.buffsS.style.transform = "rotate(" + -1*angle + "rad)";
    }

    show() {
        this.cleanse();
        this.hp.style.width = 100*this.health/this.maxhealth + "%";
        while (this.buffsS.firstChild) {
            this.buffsS.removeChild(this.buffsS.firstChild);
        }
        let blist = [];
        let bcount = [];
        for (let i = 0; i < this.buffs.length; i++) {
            if (blist.indexOf(this.buffs[i]) == -1) {
                blist.push(this.buffs[i]);
                bcount.push(1);
            } else {
                bcount[blist.indexOf(this.buffs[i])] += 1;
            }
        }
        for (let i = 0; i < blist.length; i++) {
            let newb = document.createElement("div");
            newb.classList.add("enemyBuff");
            newb.style.backgroundImage = "url('imgs/buffs/" + blist[i].img + "')";
            newb.style.width = this.size*0.25 + "px";
            newb.style.height = this.size*0.25 + "px";
            this.buffsS.appendChild(newb);

            let count = document.createElement("div");
            count.classList.add("enemyBuffCount");
            count.innerText = bcount[i];
            newb.appendChild(count);
        }
        this.base.style.left = this.x - (1 - this.fraction)*this.size/2 + "px";
        this.base.style.bottom = this.y - (1 - this.fraction)*this.size/2 + "px";
        this.hitbox.updatePosition(this.x, this.y);

        if (this.health < this.maxhealth) {
            this.healthbar.style.display = "block";
        }
        if (this.buffs.length > 0) {
            this.buffsS.style.display = "block";
        }
    }

    delete() {
        document.getElementById("visible").removeChild(this.base);
        this.hitbox.delete();
    }
}