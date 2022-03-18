function Com() {
    this.lives = 1;
    this.hand;
    this.name;
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
            }
        }
    }
}