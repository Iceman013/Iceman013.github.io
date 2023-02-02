function makeMap() {
    var map = [];
    // Default ground tile
    for (let i = 0; i < SIZE*SIZE; i++) {
        var tile = new Tile(Math.floor(i/SIZE), i % SIZE, terrainList[0]);
        map.push(tile);
    }
    // Add water
    for (let i = 0; i < map.length; i++) {
        //
    }
    return map;
}