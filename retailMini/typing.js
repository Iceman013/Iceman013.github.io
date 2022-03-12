const day = Math.floor((new Date() - new Date(2022, 2, 12))/(24*60*60*1000));
const today = answers[day];
const height = today.set.length;
const width = today.set[0].length;
var lx;
var ly;
var fir = false;
var dver = true;

function nearbyify(x, y) {
    var base = document.getElementById("b" + x + "," + y);
    base.classList.toggle("nearby");
}
function setMain(x, y) {
    var base = document.getElementById("b" + x + "," + y);
    base.classList.toggle("typing");
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
    }
    if (y >= height) {
        y = height - 1;
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
document.addEventListener("keyup", function(event) {
    var acceptable = "qwertyuiopasdfghjklzxcvbnm";
    if (acceptable.includes(event.key)) {
        typeIn(event.key);
    }
});