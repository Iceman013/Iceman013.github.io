function User() {
    this.lives = 1;
    this.hand;
    this.name = "BERT";

    this.getLives = function() {
        return this.lives;
    }
    this.drawHand = function(hand) {
        this.hand = hand;
    }
    this.run = function(pot) {
        for (let i = 0; i < Math.pow(10,10); i++) {
            //
        }
        console.log("RUN");
        return true;
    }
}