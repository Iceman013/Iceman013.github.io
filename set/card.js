function Card(number) {
    var setter = number;
    this.color = setter % 3;
    setter = (setter - this.color)/3;
    this.shape = setter % 3;
    setter = (setter - this.shape)/3;
    this.count = setter % 3;
    setter = (setter - this.count)/3;
    this.fill = setter % 3;

    this.getColor = function() {
        var colors = ["Red", "Green", "Purple"];
        return colors[this.color];
    }
    this.getShape = function() {
        var shapes = ["Oval", "Diamond", "Squiggle"];
        return shapes[this.shape];
    }
    this.getCount = function() {
        var counts = ["1", "2", "3"];
        return counts[this.count];
    }
    this.getFill = function() {
        var fills = ["Empty", "Lines", "Full"];
        return fills[this.fill];
    }
}