function makeMap() {
    noise.seed(Math.random());
    function getHeight(x, y) {
        return 0.5*noise.simplex2(x/PUDDLING, y/PUDDLING) + 0.5;
    }
    var map = [];
    // Default ground tile
    for (let i = 0; i < SIZE*SIZE; i++) {
        var h = getHeight(Math.floor(i/SIZE), i % SIZE);
        var bestFit = 0;
        for (let j = 0; j < terrainList.length; j++) {
            if (h <= terrainList[j].height && (terrainList[bestFit].height < h || terrainList[j].height <= terrainList[bestFit].height)) {
                bestFit = j;
            }
        }
        var tile = new Tile(Math.floor(i/SIZE), i % SIZE, terrainList[bestFit]);
        for (let j = 0; j < resourceList.length; j++) {
            for (let k = 0; k < resourceList[j].terrain.length; k++) {
                if (resourceList[j].terrain[k][0] == tile.terrain.id) {
                    if (Math.random() <= resourceList[j].terrain[k][1]) {
                        tile.setResource(resourceList[j]);
                    }
                    k = resourceList[j].terrain.length;
                }
            }
        }
        tile.updateElement();
        map.push(tile);
    }
    // Add water
    for (let i = 0; i < map.length; i++) {
        //
    }
    return map;
}