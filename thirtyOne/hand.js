function Hand() {
    this.cards = [];

    this.draw = function(card) {
        this.cards.push(card);
    }
    this.swap = function(inh, card) {
        var temp = this.cards[inh];
        this.cards[inh] = card;
        return temp;
    }
    this.score = function() {
        var suits = ["H","D","C","S"];
        var scores = [];
        for (let i = 0; i < suits.length; i++) {
            scores.push(0);
            for (let j = 0; j < this.cards.length; j++) {
                if (this.cards[j].getSuit() == suits[i]) {
                    scores[i] += this.cards[j].points();
                }
            }
        }

        if (this.cards[0].getValue() == this.cards[1].getValue() && this.cards[0].getValue() == this.cards[2].getValue()) {
            scores.push(30);
        }

        var max = 0;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > max) {
                max = scores[i];
            }
        }
        return max;
    }
    this.show = function(level) {
        var out = "";
        for (let i = 0; i < this.cards.length; i++) {
            if (i > 0) {
                if (level == 0) {
                    out += ", ";
                } else {
                    out += "\n";
                }
            }
            out += this.cards[i].show(level);
        }
        return out;
    }
}