var size = 2;
var variation = 0.5;
var map;
var cash = new Array(upgrades[0].costs.length);
cash.fill(0);
function start() {
    map = makeMap(size);
    displayMap(map);
    cash[0] = 10;
    next();
}
function displayMap(map) {
    var a = 0;
    var b = 0;
    while (a < map.length) {
        hBox = document.createElement("div");
        b = 0;
        while (b < map[a].length) {
            const tile = map[a][b];
            item = document.createElement("text");
            item.style.backgroundImage = tile.getImage();
            item.style.width = (100/map[a].length) + "%";
            item.style.height = (100/map.length) + "%";
            item.xpos = a;
            item.ypos = b;
            item.addEventListener("click", function() {
                select(map[this.xpos][this.ypos]);
            });
            imag = document.createElement("img");
            imag.src = tile.getTop();
            tile.setId(a,b);
            imag.id = tile.getId();
            imag.draggable = false;
            item.appendChild(imag);
            hBox.appendChild(item);
            b = b + 1;
        }
        document.getElementById("map").appendChild(hBox);
        a = a + 1;
    }
}
function disableselect(e) {
    return false;
}
document.onselectstart = new function() {
    return false;
}
document.onmousedown = disableselect;