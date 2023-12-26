import { CHARACTERLIST } from "./characterList.js";
const MAXSPEED = 5;
const FRICTION = 0.87;
export class Player {
    constructor() {
        this.character = CHARACTERLIST.getId(0);
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.moving = false;

        this.base = document.createElement("div");
        this.base.style.width = "50px";
        this.base.style.height = "50px";
        this.base.classList.add("entity");
        this.base.style.backgroundImage = "url('main.svg')";
        document.getElementById("visible").appendChild(this.base);
    }
    move(xpos, ypos) {
        this.moving = true;
        this.vx += xpos;
        this.vy += ypos;
        if (xpos == 0 && ypos == 0) {
            this.vx *= FRICTION;
            this.vy *= FRICTION;
        }
        this.moveTick();
    }
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
        this.x += this.vx;
        this.y += this.vy;

        this.base.style.left = this.x + "px";
        this.base.style.bottom = this.y + "px";
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.base.style.transform = "rotate(" + angle + "rad)";
    }
}