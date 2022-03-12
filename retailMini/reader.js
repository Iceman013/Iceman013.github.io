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
    var base = document.createElement("div");
    for (let i = 0; i < length; i++) {
        var par = document.createElement("p");
        par.innerHTML = today.getClue(i, type);
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
initiate();