function Com() {
    this.lives = 1;
    this.hand;
    this.name;
    this.lh = false;
    this.setName = function() {
        var r = Math.random();
        var names = ["Billy","Bobby","Brad","Sue","Anne","Tim","Mike","Jeff","Phillip","Jake","Dave"];
        this.name = names[Math.floor(r*names.length)];
    }
    this.setName();

    this.getLives = function() {
        return this.lives;
    }
    this.drawHand = function(hand) {
        this.hand = hand;
    }
    this.run = function(pot) {
        var finalT = false;
        var ms = 0;
        var pos = [0,0];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                var h = new Hand();
                if (i != 0) {
                    h.draw(this.hand.cards[0]);
                }
                if (i != 1) {
                    h.draw(this.hand.cards[1]);
                }
                if (i != 2) {
                    h.draw(this.hand.cards[2]);
                }
                h.draw(pot.cards[j]);
                if (h.score() > ms) {
                    pos[0] = i;
                    pos[1] = j;
                    ms = h.score();
                }
            }
        }
        if (this.hand.score() >= ms) {
            finalT = true;
            document.getElementById("turn").innerHTML = "Pass";
        } else if (pot.score() > ms) {
            var tmp = pot.cards;
            pot.cards = this.hand.cards;
            this.hand.cards = tmp;
            finalT = true;
            document.getElementById("turn").innerHTML = "Swap Hand";
        } else {
            var temp = this.hand.swap(pos[0], pot.cards[pos[1]])
            pot.swap(pos[1], temp);
            document.getElementById("turn").innerHTML = "Draw";
        }
        this.lh = finalT;
        return true;
    }
}