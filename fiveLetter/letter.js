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
        if (this.includes(input) && !this.correct) {
            this.acceptable.splice(this.acceptable.indexOf(input), 1);
        }
    }
    this.confirm = function(input) {
        this.acceptable = [input];
        this.correct = true;
    }
    this.setAll = function(acc, cor) {
        var a = 0;
        while (a < acc.length) {
            this.acceptable[a] = acc[a];
            a = a + 1;
        }
        this.correct = cor;
    }
}