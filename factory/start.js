var cells = [[]];
var player = new User();
var position = {
    "mapx": 1,
    "mapy": 1,
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
    cells = makeMap(cells);
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
            var images = [];
            images[0] = document.createElement("img");
            images[0].src = cells[position.mapx + i][position.mapy + j].getGround().img;

            images[1] = document.createElement("img");
            images[1].src = cells[position.mapx + i][position.mapy + j].getOre().img;

            for (let k = 0; k < images.length; k++) {
                images[k].style.left = 32*(SWIDTH - i - 1) + "px";
                images[k].style.top = 32*(SHEIGHT - j - 1) + "px";
                map.appendChild(images[k]);
            }
        }
    }
}
var moving = false;
function move() {
    var velocity = player.getSpeed();
    velocity = velocity*cells[Math.floor(SWIDTH/2) + position.mapx][Math.floor(SHEIGHT/2) + position.mapy].getGround().speed;
    velocity = Math.ceil(velocity);
    if (keys.w || keys.a || keys.s || keys.d) {
        if (!moving) {
            document.getElementById("player").src = "images/Player/Player_Moving.gif";
        }
        moving = true;
    } else {
        if (moving) {
            document.getElementById("player").src = "images/Player/Player_Up.gif";
        }
        moving = false;
    }
    if (keys.d) {
        document.getElementById("player").style.transform = "rotate(90deg)";
    }
    if (keys.s) {
        document.getElementById("player").style.transform = "rotate(180deg)";
    }
    if (keys.a) {
        document.getElementById("player").style.transform = "rotate(-90deg)";
    }
    if (keys.w) {
        document.getElementById("player").style.transform = "rotate(0deg)";
    }
    if (keys["w"] && position.mapy < HEIGHT - SHEIGHT - 1) {
        document.getElementById("player").style.transform = "rotate(0deg)";
        position.pyoff += velocity;
    } else if (keys["a"] && position.mapx < WIDTH - SWIDTH - 1) {
        document.getElementById("player").style.transform = "rotate(-90deg)";
        position.pxoff += velocity;
    } else if (keys["s"] && position.mapy > 0) {
        document.getElementById("player").style.transform = "rotate(180deg)";
        position.pyoff -= velocity;
    } else if (keys["d"] && position.mapx > 0) {
        document.getElementById("player").style.transform = "rotate(90deg)";
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