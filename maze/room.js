function Room() {
    this.walls = {
        "right": true,
        "up": true,
        "left": true,
        "down": true
    };
    this.base;

    this.set = function(direction, input) {
        this.walls[direction] = input;
    }
    this.get = function(direction) {
        return this.walls[direction];
    }
    this.createBase = function() {
        this.base = document.createElement("div");
        this.base.classList.add("room");
        if (!this.get("right")) {
            this.base.style.borderRight = "1px";
        }
        if (!this.get("up")) {
            this.base.style.borderTop = "1px";
        }
        if (!this.get("left")) {
            this.base.classList.add("left");
        }
        if (!this.get("down")) {
            this.base.style.borderBottom = "1px";
        }
    }
    this.getBase = function() {
        return this.base;
    }
}