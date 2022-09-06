function makeGame() {
    console.group("Start Game");
    console.time();

    var map = makeMap(WIDTH, HEIGHT);
    map = segmentMap(map);
    var imgList = getTerrainList();
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            var base = document.createElement("img");
            base.style.position = "absolute";
            base.style.left = 8*j + "px";
            base.style.top = 8*i + "px";
            base.style.height = "8px";
            base.style.width = "8px";

            base.src = imgList[map[i][j]][1];
            //var color = 32*Math.floor(8*map[i][j]);
            //base.style.backgroundColor = "rgb(" + color + "," + color + "," + color + ")";
            
            document.getElementById("box").appendChild(base);
        }
    }

    console.timeEnd();
    console.groupEnd();
}
function start() {
    console.group("Webpage Begin");
    disableDrag();
    makeGame();
    console.groupEnd();
}
start();