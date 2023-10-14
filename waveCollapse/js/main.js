// Imports
import { WIDTH, HEIGHT } from "../content/constants.js";
import { Sprites } from "../content/sprites.js";
import { Cell } from "./cell.js";
import { drawMap, updateCell } from "./draw.js";

function main() {
    let map = [];
    for (let i = 0; i < WIDTH; i++) {
        map.push(Array(HEIGHT));
    }

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            let cell = new Cell(i, j, Sprites[Math.floor(Sprites.length*Math.random())]);
            map[i][j] = cell;
        }
    }
    drawMap(map);
}
main();