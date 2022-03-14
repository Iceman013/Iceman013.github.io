const day = Math.floor((new Date() - new Date(2022, 2, 14))/(24*60*60*1000));
const today = answers[day];
const stime = Date.now();
const height = today.set.length;
const width = today.set[0].length;
var lx;
var ly;
var fir = false;
var dver = false;
var over = false;

function nearbyify(x, y) {
    var base = document.getElementById("b" + x + "," + y);
    base.classList.toggle("nearby");
}
function setMain(x, y) {
    var base = document.getElementById("b" + x + "," + y);
    base.classList.toggle("typing");
    var nom = "ch" + x;
    if (dver) {
        nom = "cv" + y;
    }
    document.getElementById(nom).classList.toggle("nearby");
    for (let i = 0; i < width; i++) {
        if (dver) {
            nearbyify(i, y);
        } else {
            nearbyify(x, i);
        }
    }
}
function createMain(x, y) {
    if (x >= width) {
        x = width - 1;
        return;
    }
    if (y >= height) {
        y = height - 1;
        return;
    }
    if (x < 0) {
        x = 0;
        return;
    }
    if (y < 0) {
        y = 0;
        return;
    }
    if (fir) {
        setMain(lx, ly);
        if (lx == x && ly == y) {
            dver = !dver;
        }
    } else {
        fir = true;
    }
    setMain(x, y);
    lx = x;
    ly = y;
}
function typeIn(letter) {
    var x = lx;
    var y = ly;
    var base = document.getElementById("b" + x + "," + y);
    base.innerHTML = letter;
    if (dver) {
        x++;
    } else {
        y++;
    }
    createMain(x,y);
}
function backspace() {
    var x = lx;
    var y = ly;
    var base = document.getElementById("b" + x + "," + y);
    if (base.innerHTML == " ") {
        if (dver) {
            x--;
        } else {
            y--;
        }
        createMain(x,y);
        base = document.getElementById("b" + x + "," + y);
    }
    base.innerHTML = " ";
}
function arrow(name) {
    if (name == "ArrowLeft") {
        if (dver) {
            createMain(lx, ly);
        } else {
            createMain(lx, ly - 1);
        }
    }
    if (name == "ArrowRight") {
        if (dver) {
            createMain(lx, ly);
        } else {
            createMain(lx, ly + 1);
        }
    }
    if (name == "ArrowUp") {
        if (!dver) {
            createMain(lx, ly);
        } else {
            createMain(lx - 1, ly);
        }
    }
    if (name == "ArrowDown") {
        if (!dver) {
            createMain(lx, ly);
        } else {
            createMain(lx + 1, ly);
        }
    }
};
function check() {
    var out = true;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            var base = document.getElementById("b" + i + "," + j);
            var letter = base.innerHTML;
            if (letter != today.set[i][j]) {
                out = false;
            }
        }
    }
    over = out;
}
function win() {
    setMain(lx, ly);
    console.log("Win");
}
document.addEventListener("keydown", function(event) {
    if (!over) {
        var acceptable = "qwertyuiopasdfghjklzxcvbnm";
        if (acceptable.includes(event.key)) {
            typeIn(event.key);
        }
        if (event.key == "Backspace" || event.key == "Delete") {
            backspace();
        }
        if (event.key.substring(0, 5) == "Arrow") {
            arrow(event.key);
        }
        check();
        if (over) {
            win();
        }
    }
});