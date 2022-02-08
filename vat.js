var vats = [
    new vat(paints[0])
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
        text.innerHTML = "Time Remaining: " + this.getTimeLeft();
        button.disabled = this.busy;
    }
    this.mix = function() {
        this.busy = true;
    }
    this.tick = function() {
        if (this.busy) {
            this.count = this.count + 1;
        }
        if (this.count >= this.time) {
            this.count = 0;
            this.busy = false;
        }
        this.update();
    }
    this.getElement = function() {
        return elem;
    }
}