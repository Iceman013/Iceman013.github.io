import { HEIGHT, WIDTH } from "../content/constants.js";
import { Sprites, Spritesheet } from "../content/sprites.js";
import { Cell } from "./cell.js";

let loaded = false;
Spritesheet.onload = function() {
    setUp();
    loaded = true;
}

let ctx;
function setUp() {
    let canvas = document.getElementById('canvas');
    canvas.width = 256;
    canvas.height = 256;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";

    ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.scale(canvas.width/WIDTH, canvas.height/HEIGHT);
}

function updateCell(cell) {
    ctx.drawImage(Spritesheet, cell.image.getSX(), cell.image.getSY(), cell.image.getW(), cell.image.getH(), cell.x, cell.y, 1, 1);
}

function plotMap(map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            updateCell(map[i][j]);
        }
    }
}

function drawMap(map) {
    if (loaded) {
        plotMap(map);
    } else {
        Spritesheet.onload = function() {
            setUp();
            plotMap(map);
        }
    }
}

export { drawMap, updateCell };