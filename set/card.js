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

function isSet(carda, cardb, cardc) {
    function checkTrio(a, b, c) {
        if (a == b && b == c && c == a) {
            return true;
        }
        if (a != b && b != c && c != a) {
            return true;
        }
        return false;
    }
    if (!checkTrio(carda.color, cardb.color, cardc.color)) {
        return false;
    }
    if (!checkTrio(carda.shape, cardb.shape, cardc.shape)) {
        return false;
    }
    if (!checkTrio(carda.count, cardb.count, cardc.count)) {
        return false;
    }
    if (!checkTrio(carda.fill, cardb.fill, cardc.fill)) {
        return false;
    }
    return true;
}