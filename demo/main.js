function colors() {
    for (let i = 0; i < 16; i++) {
        var base = document.createElement("div");
        for (let j = 0; j < 16; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = "rgb(" + 16*i + "," + 16*j + ",128)";
            base.appendChild(cell);
        }
        document.getElementById("base").appendChild(base);

        var base = document.createElement("div");
        for (let j = 0; j < 16; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = "rgb(" + 16*i + ",128," + 16*j + ")";
            base.appendChild(cell);
        }
        document.getElementById("base").appendChild(base);

        var base = document.createElement("div");
        for (let j = 0; j < 16; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.backgroundColor = "rgb(128," + 16*i + "," + 16*j + ")";
            base.appendChild(cell);
        }
        document.getElementById("base").appendChild(base);
    }
}
function start() {
    colors();
    console.clear();
    console.time();
    console.log("Begining logs");
    console.log("%cThis is how %ccolors work", "background: green",
    "background: red; color: yellow; font-size: 30px; text-shadow: 2px 4px orange; font-weight: 900")
    console.error("Error message");
    console.group("%cThe fun will never end", "font-size: 22px;");
    console.log("Oh my");
    console.group("Group");
    console.log("A");
    console.log("B");
    console.groupEnd();
    console.groupEnd();
    console.groupCollapsed("OwO");
    console.log("A");
    console.log("B");
    console.groupEnd();
    console.table([['red',4],['blue',8],['green',3]]);
    console.warn("Warning message");
    console.trace();
    console.timeEnd();
    thisboy();
}
start();