import { entityList } from "./entityList.js";

export class Enemy {
    constructor(player) {
        this.player = player;
        this.x = -100;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.recentHit = 5;
        this.points = 0;

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
}