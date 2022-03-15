function start() {
    var d = newNode();
    console.log(d.getDisplay());
    document.getElementById("base").appendChild(d.getBox());
}
start();