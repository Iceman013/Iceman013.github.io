export class Buff {
    constructor(name, img, effect) {
        this.name = name;
        this.img = img;
        this.effect = effect;
    }

    tick(enemy) {
        this.effect(enemy);
    }
}