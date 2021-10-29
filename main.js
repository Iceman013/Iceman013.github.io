var size = 2;
var variation = 0.5;
var map;
function start() {
    map = makeMap(size);
    displayMap(map);
}
function displayMap(map) {
    var a = 0;
    var b = 0;
    while (a < map.length) {
        hBox = document.createElement("div");
        b = 0;
        if (map[a].length > 200) {
            b = map[a].length - 200;
        }
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
        document.getElementById("main").appendChild(hBox);
        a = a + 1;
    }
}
function produce() {
    var out = new Array(upgrades[0].costs.length);
    out.fill(0);
    var a = 0;
    var b = 0;
    while (a < map.length) {
        b = 0;
        while (b < map[a].length) {
            var temp = map[a][b].produce();
            var c = 0;
            while (c < temp.length) {
                out[c] = out[c] + temp[c];
                c = c + 1;
            }
            b = b + 1;
        }
        a = a + 1;
    }
    console.log(out);
}
function disableselect(e) {
    return false;
}
document.onselectstart = new function() {
    return false;
}
document.onmousedown = disableselect;