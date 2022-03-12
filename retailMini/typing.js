const day = Math.floor((new Date() - new Date(2022, 2, 12))/(24*60*60*1000));
const today = answers[day];
const height = today.set.length;
const width = today.set[0].length;
var lx;
var ly;
var fir = false;

function setMain(x, y) {
    var base = document.getElementById("b" + x + "," + y);
    base.classList.toggle("typing");
    console.log(x,y);
}
function createMain(x, y) {
    if (fir) {
        setMain(lx, ly);
    } else {
        fir = true;
    }
    setMain(x, y);
    lx = x;
    ly = y;
}