function start() {
    var r = new Room();
    r.set("left", false);
    r.createBase();
    var base = document.getElementById("mazearea");
    base.appendChild(r.getBase());
}
start();