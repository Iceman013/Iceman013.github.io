function makeGame() {
    console.group("Start Game");
    console.time();

    var map = makeMap(WIDTH, HEIGHT);
    for (let i = 0; i < map.length; i++) {
        var row = document.createElement("div");
        row.style.height = "32px";
        for (let j = 0; j < map[i].length; j++) {
            var base = document.createElement("img");
            base.src = map[i][j].img;
            row.appendChild(base);
        }
        document.getElementById("box").appendChild(row);
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