import { Sprite } from "../js/sprite.js";

let Spritesheet = new Image();
Spritesheet.src = "content/images/terrain.png";

const Sprites = [
    new Sprite(0, "SandTL", 0, 0),
    new Sprite(1, "SandT", 1, 0),
    new Sprite(2, "SandTR", 2, 0),
    new Sprite(3, "SandML", 0, 1),
    new Sprite(4, "SandM", 1, 1),
    new Sprite(5, "SandMR", 2, 1),
    new Sprite(6, "SandBL", 0, 2),
    new Sprite(7, "SandB", 1, 2),
    new Sprite(8, "SandBR", 2, 2)
];

export { Sprites, Spritesheet };