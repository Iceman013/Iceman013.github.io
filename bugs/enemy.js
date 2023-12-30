import { entityList } from "./entityList.js";

export class Enemy {
    constructor(player) {
        this.player = player;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;

        entityList.push(this);
    }

    spawn(x, y) {
        this.x = x;
        this.y = y;
    }
    tick() {
        throw new Error("Function undefined");
    }
}