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

    for (let i = 0; i <= SWIDTH; i++) {
        for (let j = 0; j <= SHEIGHT; j++) {
            var base = document.createElement("img");
            base.src = "images/DefaultGround.png";
            base.style.left = (32*i - 32) + "px";
            base.style.top = (32*j - 32) + "px";
            map.appendChild(base);
        }
    }
}
function move() {
    var velocity = 2;
    var dividen = 0;
    if (keys.w) {
        dividen++;
    }
    if (keys.a) {
        dividen++;
    }
    if (keys.s) {
        dividen++;
    }
    if (keys.d) {
        dividen++;
    }
    if (dividen > 1) {
        velocity = Math.SQRT1_2*velocity;
    }
    if (keys["w"] && position.mapy < HEIGHT - SHEIGHT) {
        position.pyoff += velocity;
    }
    if (keys["a"] && position.mapx < WIDTH - SWIDTH) {
        position.pxoff += velocity;
    }
    if (keys["s"] && position.mapy > 0) {
        position.pyoff -= velocity;
    }
    if (keys["d"] && position.mapx > 0) {
        position.pxoff -= velocity;
    }
}
function moveUpdate() {
    if (position.pxoff >= 32 || position.pyoff >= 32 || position.pxoff < 0 || position.pyoff < 0) {
        if (position.pxoff >= 32) {
            position.mapx += 1;
        }
        if (position.pxoff < 0) {
            position.mapx -= 1;
        }
        if (position.pyoff >= 32) {
            position.mapy += 1;
        }
        if (position.pyoff < 0) {
            position.mapy -= 1;
        }
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