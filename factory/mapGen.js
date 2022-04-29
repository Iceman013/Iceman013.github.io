function makeGround(grid) {
    for (let a = 0; a < GROROUND; a++) {
        for (let i = 1; i < grid.length - 1; i++) {
            for (let j = 1; j < grid[i].length - 1; j++) {
                for (let k = 0; k < resources.ground.length; k++) {
                    var nearby = 0;
                    for (let x = -1; x <= 1; x++) {
                        for (let y = -1; y <= 1; y++) {
                            if (grid[i + x][j + y].getGround().id == resources.ground[k].id) {
                                nearby++;
                            }
                        }
                    }
                    if (Math.random() < resources.ground[k].cluster*(nearby/9) + resources.ground[k].frequency) {
                        grid[i][j].setGround(resources.ground[k]);    
                    }
                }
            }
        }
    }
    return grid;
}
function makeOre(grid) {
    for (let a = 0; a < OREROUND; a++) {
        for (let i = 1; i < grid.length - 1; i++) {
            for (let j = 1; j < grid[i].length - 1; j++) {
                for (let k = 0; k < resources.ore.length; k++) {
                    var nearby = 0;
                    for (let x = -1; x <= 1; x++) {
                        for (let y = -1; y <= 1; y++) {
                            if (grid[i + x][j + y].getOre().id == resources.ore[k].id) {
                                nearby++;
                            }
                        }
                    }
                    if (Math.random() < resources.ore[k].cluster*(nearby/9) + resources.ore[k].frequency) {
                        grid[i][j].setOre(resources.ore[k]);    
                    }
                }
            }
        }
    }
    return grid;
}
function makeMap(grid) {
    console.log("Begin map gen");
    console.log("Begin ground gen");
    grid = makeGround(grid);
    console.log("Begin ore gen");
    grid = makeOre(grid);
    console.log("Map gen complete");
    return grid;
}