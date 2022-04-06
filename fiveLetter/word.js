function word(size) {
    this.length = size;
    this.guesses = [];
    this.reqs = "";
    var a = 0;
    while (a < this.length) {
        this.guesses[a] = new letter();
        a = a + 1;
    }
    this.remove = function(input) {
        var a = 0;
        while (a < this.length) {
            this.guesses[a].remove(input);
            a = a + 1;
        }
    }
    this.confirm = function(position, input) {
        this.guesses[position].confirm(input);
    }
    this.yellow = function(position, input) {
        this.guesses[position].remove(input);
        if (!this.reqs.includes(input)) {
            this.reqs = this.reqs + input;
        }
    }
    this.meets = function(guess) {
        var out = true;
        var a = 0;
        while (a < this.length) {
            if (!this.guesses[a].includes(guess.substring(a, a + 1))) {
                out = false;
            }
            a = a + 1;
        }
        a = 0;
        while (a < this.reqs.length) {
            if (!guess.includes(this.reqs.substring(a, a + 1))) {
                out = false;
            }
            a = a + 1;
        }
        return out;
    }
    this.setAll = function(word) {
        this.length = word.length;
        this.reqs = word.reqs;
        var a = 0;
        while (a < this.length) {
            this.guesses[a].setAll(word.guesses[a].acceptable, word.guesses[a].correct);
            a = a + 1;
        }
    }
}