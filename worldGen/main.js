function makeGame() {
    console.group("Start Game");

    var map = makeMap(WIDTH, HEIGHT);
    for (let i = 0; i < map.length; i++) {
        var output = "";
        for (let j = 0; j < map[i].length; j++) {
            output += map[i][j].id + " ";
        }
        console.log(output);
    }

    console.groupEnd();
}
function start() {
    console.group("Webpage Begin");
    disableDrag();
    makeGame();
    console.groupEnd();
}
start();