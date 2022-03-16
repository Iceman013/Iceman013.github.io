function Deck() {
    this.random = function(min, max) {
        return min + Math.floor((max - min)*Math.random());
    }
    this.getSet = function(size) {
        var total = [];
        for (let i = 0; i < 52; i++) {
            total.push(i);
        }
        var out = [];
        for (let i = 0; i < size; i++) {
            var p = this.random(0, total.length);
            var c = new Card();
            c.setAll(total[p]);
            out.push(c);
            total.splice(p, 1);
        }
        return out;
    }
}