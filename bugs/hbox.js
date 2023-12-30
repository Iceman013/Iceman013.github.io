import { randomDigits } from "./helper.js";

export class Hitbox {
    constructor(radius, type) {
        this.radius = radius;
        this.type = type;

        this.base = document.createElement("div");
        this.base.style.width = this.radius + "px";
        this.base.style.height = this.radius + "px";
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
        let base = document.getElementById("hitboxes");
        for (let i = 0; i < base.childNodes.length; i++) {
            if (base.childNodes[i].id == this.base.id) {
                base.removeChild(base.childNodes[i]);
                i = base.childNodes.length;
            }
        }
    }
}