var paints = [
    new paint("red", 1, 0, 0, 0, 0, 0),
    new paint("yellow", 0, 1, 0, 0, 0, 0),
    new paint("blue", 0, 0, 1, 0, 0, 0),
    new paint("white", 0, 0, 0, 0, 1, 0),
    new paint("black", 0, 0, 0, 0, 0, 1),
    new paint("orange", 1, 1, 0, 0, 0, 0),
    new paint("green", 0, 1, 1, 0, 0, 0),
    new paint("purple", 1, 0, 1, 0, 0, 0)
];

function paint(name, red, yellow, blue, white, black) {
    this.name = name;
    this.red = red;
    this.yellow = yellow;
    this.blue = blue;
    this.white = white;
    this.black = black;
    this.rgb = function() {
        return colorize(this.red, this.yellow, this.blue);
    }
}