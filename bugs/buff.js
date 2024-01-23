export class Buff {
    constructor(name, img, stack, time, effect) {
        this.name = name;
        this.img = img;
        this.stack = stack;
        this.time = time;
        this.effect = effect;
    }

    tick(enemy) {
        this.effect(enemy);
    }
}