export class Card {
    constructor(number) {
        let setter = number;
        this.color = setter % 3;
        setter = (setter - this.color)/3;
        this.shape = setter % 3;
        setter = (setter - this.shape)/3;
        this.count = setter % 3;
        setter = (setter - this.count)/3;
        this.fill = setter % 3;
    }

    getColor() {
        let colors = ["Red", "Green", "Purple"];
        return colors[this.color];
    }

    getShape() {
        let shapes = ["Oval", "Diamond", "Squiggle"];
        return shapes[this.shape];
    }

    getCount() {
        let counts = ["1", "2", "3"];
        return counts[this.count];
    }

    getFill() {
        let fills = ["Empty", "Lines", "Full"];
        return fills[this.fill];
    }
}

export function isSet(carda, cardb, cardc) {
    if (carda == null || cardb == null || cardc == null) {
        return false;
    }

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