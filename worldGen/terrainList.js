function getTerrainList() {
    var list = [];

    var bad = new Terrain(0, "Error", "images/error.png");
    list.push(bad);

    var dew = new Terrain(1, "Deep Water", "images/deepWater.png");
    dew.addRules([new Rule(1, 0, [1,2]), new Rule(0, 1, [1,2]), new Rule(-1, 0, [1,2]), new Rule(0, -1, [1,2])]);
    list.push(dew);

    var shw = new Terrain(2, "Shallow Water", "images/shallowWater.png");
    shw.addRules([new Rule(1, 0, [1,2,3]), new Rule(0, 1, [1,2,3]), new Rule(-1, 0, [1,2,3]), new Rule(0, -1, [1,2,3])]);
    list.push(shw);

    var san = new Terrain(3, "Sand", "images/sand.png");
    san.addRules([new Rule(1, 0, [2,3]), new Rule(0, 1, [2,3]), new Rule(-1, 0, [2,3]), new Rule(0, -1, [2,3])]);
    list.push(san);

    return list;
}