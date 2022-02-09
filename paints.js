var paints = [
    new paint("red", 1, 0, 0, 0, 0, 1),
    new paint("yellow", 0, 1, 0, 0, 0, 0),
    new paint("blue", 0, 0, 1, 0, 0, 0),
    new paint("white", 0, 0, 0, 1, 0, 0),
    new paint("black", 0, 0, 0, 0, 1, 0),
    new paint("orange", 1, 1, 0, 0, 0, 0),
    new paint("green", 0, 1, 1, 0, 0, 0),
    new paint("purple", 1, 0, 1, 0, 0, 0)
];

function paint(name, red, yellow, blue, white, black, price) {
    this.name = name;
    this.red = red;
    this.yellow = yellow;
    this.blue = blue;
    this.white = white;
    this.black = black;
    this.price = price;
    this.value = 0;
    this.rgb = function() {
        return colorize(this.red, this.yellow, this.blue, this.white, this.black);
    }
    this.increase = function(input) {
        this.value = this.value + input;
    }
    this.sellAll = function() {
        money = money + this.value*this.price;
        this.value = 0;
    }
    this.getValue = function() {
        return this.value;
    }
}