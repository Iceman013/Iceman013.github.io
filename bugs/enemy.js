import { entityList } from "./entityList.js";

export class Enemy {
    constructor(player) {
        this.player = player;
        this.x = -100;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.recentHit = 5;

        entityList.push(this);

        this.spawn();
    }

    spawn() {
        let midpointx = window.screen.width/2;
        let midpointy = document.body.clientHeight/2;
        let sng = 2*Math.PI*Math.random();
        let distance = window.screen.width;
        this.x = midpointx + distance*Math.cos(sng);
        this.y = midpointy + distance*Math.sin(sng);
    }
    tick() {
        throw new Error("Function undefined");
    }
}