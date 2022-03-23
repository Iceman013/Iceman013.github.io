function User() {
    this.lives = 1;
    this.hand;
    this.name = "BERT";
    this.lh = false;
    this.myTurn = false;
    this.dt = false;
    this.pass = function() {
        if (this.myTurn) {
            this.dt = true;
            document.getElementById("turn").innerHTML = "Pass";
        }
    }
    this.swap = function() {
        if (this.myTurn) {
            document.getElementById("turn").innerHTML = "Swap";
        }
    }
    const base = this;
    document.getElementById("pb").addEventListener("click", function() {
        base.pass();
    });
    document.getElementById("sb").addEventListener("click", function() {
        base.swap();
    });
    this.getLives = function() {
        return this.lives;
    }
    this.drawHand = function(hand) {
        this.hand = hand;
    }
    this.run = function(pot) {
        this.myTurn = true;
        return this.dt;
    }
}