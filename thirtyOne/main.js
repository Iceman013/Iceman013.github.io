function start() {
    var d = new Deck();
    var h = new Hand();
    var o = d.getSet(15);
    for (let i = 0; i < 3; i++) {
        h.draw(o[i]);
        console.log(o[i].show(1));
    }
    console.log(h.score());
}
start();