import { randomDigits } from "./helper.js";

export class Hitbox {
    constructor(diameter, type) {
        this.diameter = diameter;
        this.type = type;

        this.base = document.createElement("div");
        this.base.style.width = this.diameter + "px";
        this.base.style.height = this.diameter + "px";
        this.base.classList.add("hitbox");
        this.base.classList.add(this.type);
        this.base.id = randomDigits();
        document.getElementById("hitboxes").appendChild(this.base);
    }

    updatePosition(x, y) {
        this.base.style.left = x + "px";
        this.base.style.bottom = y + "px";
    }
    delete() {
        document.getElementById("hitboxes").removeChild(this.base);
    }
}