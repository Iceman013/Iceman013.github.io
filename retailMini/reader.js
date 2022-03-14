const TICK = 100;
function build() {
    var base = document.createElement("table");
    for (let i = 0; i < height; i++) {
        var r = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            var d = document.createElement("td");
            d.id = "b" + i + "," + j;
            d.innerHTML = " ";
            d.addEventListener("click", function() {
                createMain(i, j);
            })
            r.appendChild(d);
        }
        base.appendChild(r);
    }
    return base;
}
function clueq(type, length) {
    for (let i = 0; i < length; i++) {
        var base;
        var st = "";
        var par = document.createElement("p");
        par.innerHTML = "<b>" + (i+1) + "</b>) " + today.getClue(i, type);
        if (type) {
            base = document.getElementById("down");
            st = "v";
        } else {
            base = document.getElementById("across");
            st = "h";
        }
        par.id = "c" + st + i;
        base.appendChild(par);
    }
    return base;
}
function cluez() {
    var base = document.createElement("div");
    base.appendChild(clueq(false, width));
    base.appendChild(clueq(true, height));
    return base;
}
function initiate() {
    document.getElementById("game").appendChild(build());
    document.getElementById("clues").appendChild(cluez());
    createMain(0,0);
}
function showTime() {
    if (!over) {
        var time = Date.now() - stime;
        document.getElementById("time").innerHTML = Math.floor(time/100)/10;
    }
}
var intervalId = window.setInterval(function() {
    showTime();
}, TICK);
initiate();