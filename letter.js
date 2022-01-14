function letter() {
    var alphabeta = "abcdefghijklmnopqrstuvwxyz";
    this.acceptable = [];
    this.correct = false;
    var a = 0;
    while (a < alphabeta.length) {
        this.acceptable[a] = alphabeta.substring(a, a + 1);
        a = a + 1;
    }
    this.includes = function(input) {
        return this.acceptable.includes(input);
    }
    this.remove = function(input) {
        if (this.includes(input)) {
            this.acceptable.splice(this.acceptable.indexOf(input), 1);
        }
    }
    this.confirm = function(input) {
        this.acceptable = [input];
        this.correct = true;
    }
}