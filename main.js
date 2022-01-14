var iWord = words.length;
var size = 5;
var guesses = [];
var reqs = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var i = 0;
while (i < size) {
    guesses[i] = new letter();
    i = i + 1;
}
function start() {
    addInput();
}
function getGuess() {
    var values = score();
    var mo = 0;
    var a = 0;
    while (a < values.length) {
        if (values[a] > values[mo]) {
            mo = a;
        }
        a = a + 1;
    }
    displayRec(words[mo]);
}
function score() {
    var list = filter();
    var scores = [];
    var a = 0;
    var b = 0;
    while (a < iWord) {
        scores[a] = 0;
        if (meets(words[a])) {
            b = 0;
            while (b < size) {
                scores[a] = scores[a] + list[b][alphabet.indexOf(words[a].substring(b, b + 1))];
                b = b + 1;
            }
        }
        a = a + 1;
    }
    return scores;
}
function filter() {
    var letters = [[],[],[],[],[]];
    var a = 0;
    var b = 0;
    var c = 0;
    while (a < size) {
        b = 0;
        while (b < alphabet.length) {
            letters[a][b] = 0;
            c = 0;
            while (c < iWord) {
                if (meets(words[c])) {
                    if (words[c].substring(a, a + 1) == alphabet.substring(b, b + 1)) {
                        letters[a][b] = letters[a][b] + 1;
                    }
                }
                c = c + 1;
            }
            letters[a][b] = letters[a][b]/iWord;
            b = b + 1;
        }
        a = a + 1;
    }
    return letters;
}
function meets(guess) {
    var out = true;
    var a = 0;
    while (a < size) {
        if (!guesses[a].includes(guess.substring(a, a + 1))) {
            out = false;
        }
        a = a + 1;
    }
    a = 0;
    while (a < reqs.length) {
        if (!guess.includes(reqs.substring(a, a + 1))) {
            out = false;
        }
        a = a + 1;
    }
    return out;
}