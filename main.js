var size = 2;
var variation = 0.5;
function start() {
    var map = makeMap(size);
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
            item = document.createElement("text");
            item.style.backgroundImage = map[a][b].getImage();
            //item.style.transform = "translate(" + -2*map[a][b].getAltitude() + "px," + -4*map[a][b].getAltitude() + "px)";
            item.style.width = (600/map[a].length) + "px";
            item.style.height = (600/map.length) + "px";
            item.xpos = a;
            item.ypos = b;
            item.addEventListener("click", function() {
                select(map[this.xpos][this.ypos]);
            });
            imag = document.createElement("img");
            if (map[a][b].getResource() != "empty") {
                imag.src = map[a][b].getTop();
            }
            item.appendChild(imag);
            hBox.appendChild(item);
            b = b + 1;
        }
        document.getElementById("main").appendChild(hBox);
        a = a + 1;
    }
}