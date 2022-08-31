function getTerrainList() {
    var list = [];

    var bad = new Terrain(0, 0, "Error", "images/error.png");
    list.push(bad);

    var dew = new Terrain(1, 1, "Deep Water", "images/deepWater.png");
    dew.addRule(new Rule([1,2], [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]));
    list.push(dew);

    var shw = new Terrain(2, 2, "Shallow Water", "images/shallowWater.png");
    shw.addRule(new Rule([1,2,3], [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]));
    list.push(shw);

    var san = new Terrain(3, 3, "Sand", "images/sand.png");
    san.addRule(new Rule([2,3,4], [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]));
    list.push(san);

    var san = new Terrain(4, 4, "Coastal", "images/coast.png");
    san.addRule(new Rule([3,4,5], [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]));
    list.push(san);

    var san = new Terrain(5, 5, "Grass", "images/grass.png");
    san.addRule(new Rule([4,5,6], [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]));
    list.push(san);

    var san = new Terrain(6, 6, "Rocky", "images/rocky.png");
    san.addRule(new Rule([5,6,7], [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]));
    list.push(san);

    return list;
}
// Just 4
// [[1,0],[0,-1],[-1,0],[0,1]]
// All 8
// [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]