const day = Math.floor((new Date() - new Date(2022, 2, 5))/(24*60*60*1000));
const today = answers[day];
const height = today.set.length;
const width = today.set[0].length;

function build() {
    var base = document.createElement("table");
    for (let i = 0; i < height; i++) {
        var r = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            var d = document.createElement("td");
            d.innerHTML = today.set[i][j];
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

}
function initiate() {
    document.getElementById("game").appendChild(build());
}
initiate();