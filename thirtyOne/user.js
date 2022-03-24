function User() {
    this.lives = 1;
    this.hand;
    this.name = "You";
    this.lh = false;
    this.prelh = false;
    this.myTurn = false;
    this.dt = false;
    this.pass = function() {
        if (this.myTurn) {
            this.dt = true;
            this.prelh = true;
            document.getElementById("turn").innerHTML = "Pass";
        }
    }
    this.swap = function() {
        if (this.myTurn) {
            this.prelh = true;
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
        if (this.dt) {
            if (this.prelh) {
                this.lh = true;
            }
            this.dt = false;
            this.myTurn = false;
            return true;
        } else {
            document.getElementById("turn").innerHTML = "None";
            return false;
        }
    }
}