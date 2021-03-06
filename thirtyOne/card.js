function Card() {
    this.value;
    this.suit;
    this.visible = true;
    this.setValue = function(input) {
        this.value = input;
    }
    this.setSuit = function(input) {
        this.suit = input;
    }
    this.setAll = function(input) {
        var names = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        var suits = ["H","D","C","S"];
        this.setValue(names[input % 13]);
        this.setSuit(suits[Math.floor(input/13)]);
    }
    this.getValue = function() {
        return this.value;
    }
    this.getSuit = function() {
        return this.suit;
    }
    this.points = function() {
        var names = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        var score = [2,3,4,5,6,7,8,9,10,10,10,10,11];
        var out;
        for (let i = 0; i < names.length; i++) {
            if (this.getValue() == names[i]) {
                out = score[i];
            }
        }
        return out;
    }
    this.show = function(level) {
        var names = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        var bnames = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
        var suits = ["H","D","C","S"];
        var bsuits = ["Hearts","Diamonds","Clubs","Spades"];
        if (level == 0) {
            return this.getValue() + this.getSuit();
        } else if (level == 1) {
            var out;
            for (let i = 0; i < names.length; i++) {
                if (this.getValue() == names[i]) {
                    out = bnames[i];
                }
            }
            out += " of ";
            for (let i = 0; i < suits.length; i++) {
                if (this.getSuit() == suits[i]) {
                    out += bsuits[i];
                }
            }
            return out;
        } else if (level == 2) {
            var out;
            for (let i = 0; i < names.length; i++) {
                if (this.getValue() == names[i]) {
                    out = bnames[i];
                }
            }
            out += " of ";
            for (let i = 0; i < suits.length; i++) {
                if (this.getSuit() == suits[i]) {
                    out += bsuits[i];
                }
            }
            out += "; Score: " + this.points();
            return out;
        } else if (level == 3) {
            var cname = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
            var sp = 0;
            if (this.getSuit() == "H") {
                sp = 127153;
            } else if (this.getSuit() == "D") {
                sp = 127169;
            } else if (this.getSuit() == "C") {
                sp = 127185;
            } else if (this.getSuit() == "S") {
                sp = 127137;
            }
            sp += cname.indexOf(this.getValue());
            var out = "&#" + sp.toString();
            if (!this.visible) {
                out = "&#127136";
            }
            return out;
        }
    }
}