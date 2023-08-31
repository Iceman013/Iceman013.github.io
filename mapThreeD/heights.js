function getNeighbors(grid, x, y) {
    let output = [];
    function makePair(a, b) {
        output.push([(grid.length + a)%grid.length, (grid[0].length + b)%grid[0].length]);
    }
    makePair(x - 1, y);
    makePair(x - 1 + y%2, y - 1);
    makePair(x + y%2, y - 1);
    makePair(x + 1, y);
    makePair(x + y%2, y + 1);
    makePair(x - 1 + y%2, y + 1);

    return output;
}
// Grid must be even height
function makeRNG(width, height) {
    let output = [];
    for (let i = 0; i < width; i++) {
        let row = [];
        for (let j = 0; j < height; j++) {
            row.push(Math.random());
        }
        output.push(row);
    }
    return output;
}
function rainOn(grid) {
    let order = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            order.splice(Math.floor(order.length*Math.random()), 0, [i, j])
        }
    }
    let operations = [];
    function rainOnCell(x, y, count) {
        if (count == 0) {
            return;
        } else {
            let neighbors = getNeighbors(grid, x, y);
            let min = 0;
            for (let i = 1; i < neighbors.length; i++) {
                if (grid[neighbors[min][0]][neighbors[min][1]] < grid[neighbors[i][0]][neighbors[i][1]]) {
                    min = i;
                }
                grid[neighbors[i][0]][neighbors[i][1]] += 0.05;
            }
            grid[neighbors[min][0]][neighbors[min][1]] -= 0.1;

            operations.splice(0, 0, function() {
                rainOnCell(neighbors[min][0], neighbors[min][1], count - 1);
            });
        }
    }
    for (let i = 0; i < order.length; i++) {
        operations.splice(0, 0, function() {
            rainOnCell(order[i][0], order[i][1], RAIN_SPREAD);
        });
    }
    while (operations.length > 0) {
        let fn = operations.pop();
        fn();
    }

    return grid;
}

function scaleToOne(map) {
    let copy = map;
    let order = [];
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy[i].length; j++) {
            order.push(copy[i][j]);
        }
    }
    order.sort();
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy[i].length; j++) {
            let position = order.indexOf(map[i][j]);
            map[i][j] = position/(map.length*map[i].length - 1);
        }
    }
}

function tempDisplay(map) {
    let base = document.getElementById("minimap");
    for (let j = 0; j < map[0].length; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        base.appendChild(row);
        if (j%2 == 1) {
            row.style.paddingLeft = "5px";
        }
        for (let i = 0; i < map.length; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = "rgb(" + Math.floor(256*map[i][j]) + ",0,0)";
            row.appendChild(cell);
        }
    }
}

function tempER() {
    let map = makeRNG(160,80);
    for (let i = 0; i < 2; i++) {
        rainOn(map);
    }
    scaleToOne(map);
    tempDisplay(map);
}
tempER();