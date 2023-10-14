const size = 16;

export class Sprite {
    constructor(id, name, x, y) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
    }

    getSX() {
        return size*this.x;
    }
    getSY() {
        return size*this.y;
    }
    getW() {
        return size;
    }
    getH() {
        return size;
    }
}