function makeGame() {
    console.group("Start Game");
    console.time();

    var world = new Map();

    var map = makeMap(WIDTH, HEIGHT);
    var cellMap = segment(map);
    var imgList = getTerrainList();
    for (let i = 0; i < map.length/SQUARE; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < map[i].length/SQUARE; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");

            for (let a = 0; a < SQUARE; a++) {
                var cellr = document.createElement("div");
                cellr.classList.add("cell-row");
                for (let b = 0; b < SQUARE; b++) {
                    var base = document.createElement("img");
                    var timg = imgList[map[SQUARE*i + a][SQUARE*j + b]][1]
                    base.src = timg[Math.floor(timg.length*Math.random())];
                    cellr.appendChild(base);
                }
                cell.appendChild(cellr);
            }
            cellMap[i][j].base = cell;
            world.addCell(i, j, cellMap[i][j]);
            const tx = i;
            const ty = j;
            world.grid[i][j].base.onclick = function() {
                world.click(tx, ty);
            };
            row.appendChild(cell);
        }
        document.getElementById("box").appendChild(row);
    }

    addResources(world);

    console.timeEnd();
    console.groupEnd();
}
function start() {
    console.group("Webpage Begin");
    disableDrag();
    makeGame();
    disableDrag();
    console.groupEnd();
}
start();