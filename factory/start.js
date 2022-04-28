var cells = [[]];
var position = {
    "mapx": 0,
    "mapy": 0,
    "pxoff": 0,
    "pyoff": 0
};
function startGen() {
    for (let i = 0; i < WIDTH; i++) {
        cells[i] = [];
        for (let j = 0; j < HEIGHT; j++) {
            cells[i][j] = new Cell();;
        }
    }
}
function newCells() {
    var map = document.getElementById("map");
    while (map.lastChild) {
        map.removeChild(map.lastChild);
    }
    map.style.left = (position.pxoff) + "px";
    map.style.top = (position.pyoff) + "px";

    for (let i = -1; i < SWIDTH; i++) {
        for (let j = -1; j < SHEIGHT; j++) {
            var base = document.createElement("img");
            base.style.left = 32*i + "px";
            base.style.top = 32*j + "px";
            map.appendChild(base);
        }
    }
}
function move() {
    if (keys["w"]) {
        position.pyoff++;
    }
    if (keys["a"]) {
        position.pxoff++;
    }
    if (keys["s"]) {
        position.pyoff--;
    }
    if (keys["d"]) {
        position.pxoff--;
    }
}
function moveUpdate() {
    if (position.pxoff >= 32 || position.pyoff >= 32 || position.pxoff < 0 || position.pyoff < 0) {
        position.pxoff = (32*100 + position.pxoff) % 32;
        position.pyoff = (32*100 + position.pyoff) % 32;
        newCells();
    } else {
        var map = document.getElementById("map");
        map.style.left = (position.pxoff) + "px";
        map.style.top = (position.pyoff) + "px";
    }
}
function tick() {
    move();
    moveUpdate();
}
function start() {
    startGen();
    newCells();
    var intervalId = window.setInterval(function() {
        tick();
    }, TICK);
}
start();