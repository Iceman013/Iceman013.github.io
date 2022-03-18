function User() {
    this.lives = 1;
    this.hand;

    this.getLives = function() {
        return this.lives;
    }
    this.drawHand = function(hand) {
        this.hand = hand;
    }
    this.run = function() {
        console.log("RUN");
    }
}