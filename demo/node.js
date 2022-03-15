const SHRINK = 0.9;
function Node() {
    this.children = [];

    this.addNode = function(newChild) {
        this.children.push(newChild);
    }
    this.getDisplay = function() {
        var out = "[";
        for (let i = 0; i < this.children.length; i++) {
            out += this.children[i].getDisplay();
            if (i < this.children.length - 1) {
                out += ",";
            }
        }
        out += "]";
        return out;
    }

    this.getBox = function() {
        var base = document.createElement("div");
        base.classList.add("box");
        for (let i = 0; i < this.children.length; i++) {
            base.appendChild(this.children[i].getBox());
        }
        return base;
    }
}
function genNew(chance) {
    var y = new Node();
    var r = Math.random();
    while (r < SHRINK*chance) {
        var q = genNew(SHRINK*chance);
        y.addNode(q);
        r = Math.random();
    }
    return y;
}
function newNode() {
    return genNew(1);
}