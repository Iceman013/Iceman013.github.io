var vats = [
    new vat(paints[0]),
    new vat(paints[1]),
    new vat(paints[2]),
    new vat(paints[3]),
    new vat(paints[4])
];

function vat(paint) {
    const hold = this;
    this.paint = paint;
    this.busy = false;
    this.time = 10_000/TICK;
    this.count = 0;

    this.setTime = function(input) {
        this.time = input/TICK;
    }
    this.getTimeLeft = function() {
        if (this.count > this.time) {
            return 0;
        }
        return fixNumber((TICK/1000)*(this.time - this.count));
    }
    this.getName = function() {
        return this.paint.name;
    }

    var elem = document.createElement("div");
    elem.classList.add("vat");
    var titles = document.createElement("p");
    titles.innerHTML = capitalize(this.getName()) + " Mixer";
    var text = document.createElement("p");
    text.innerHTML = this.paint.name;
    var button = document.createElement("button");
    button.innerHTML = "Begin Mix";
    button.addEventListener("click", function() {
        this.disabled = true;
        hold.mix();
    });
    elem.appendChild(titles);
    elem.appendChild(text);
    elem.appendChild(button);
    this.update = function() {
        text.innerHTML = this.getTimeLeft();
        button.disabled = (this.busy || !this.canMix());
    }
    this.mix = function() {
        this.busy = true;
        var a = 0;
        while (a < supplies.length) {
            if (paints[supplies[a].position] == this.paint) {
                supplies[a].use();
            }
            a = a + 1;
        }
    }
    this.canMix = function() {
        var output = false;
        var a = 0;
        var pos = -1;
        while (a < paints.length) {
            if (this.paint == paints[a]) {
                pos = a;
            }
            a = a + 1;
        }
        if (supplies[pos].amount > 0) {
            output = true;
        }
        return output;
    }
    this.tick = function() {        
        if (this.busy) {
            this.count = this.count + 1;
        }
        if (this.count >= this.time) {
            this.count = 0;
            this.busy = false;
            this.paint.increase(1);
        }
        this.update();
    }
    this.getElement = function() {
        return elem;
    }
}