const SHRINK = 0.9;
var SIZE = {
    "Minimum": 100,
    "Maximum": 200
};
const DEPTH = 6;
function Node() {
    this.children = [];
    this.maxChildren = 3;

    this.canAdd = function() {
        out = this.children.length < this.maxChildren;
        return out;
    }
    this.addNode = function(newChild) {
        if (this.canAdd()) {
            this.children.push(newChild);
        }
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

    this.totalChildren = function() {
        var sum = 1;
        for (let i = 0; i < this.children.length; i++) {
            sum += this.children[i].totalChildren();
        }
        return sum;
    }
}
function getProbability(iteration) {
    if (iteration < DEPTH) {
        return Math.pow(SHRINK, iteration);
    } else {
        return 0;
    }
}
function genNew(round) {
    var y = new Node();
    var r = Math.random();
    while (r < getProbability(round) && y.canAdd()) {
        var q = genNew(round + 1);
        y.addNode(q);
        r = Math.random();
    }
    return y;
}
function newNode() {
    var out = genNew(1);
    while (out.totalChildren() >  SIZE["Maximum"] || out.totalChildren() < SIZE["Minimum"]) {
        out = genNew(1);
    }
    console.log(out.totalChildren());
    return out;
}