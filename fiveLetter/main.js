var words;
if (false) {
    words = acceptable;
} else {
    words = corrects;
}
var main = new word(5);
function start() {
    addInput();
    //tryout();
}
function tryout() {
    var list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var a = 0;
    while (a < corrects.length) {
        words = corrects;
        main = new word(5);
        var t = find(words[a]);
        list[t - 1] = list[t - 1] + 1;
        console.log(list);
        a = a + 1;
    }
}
function find(input) {
    var a = 0;
    var t = "";
    while (t != input) {
        var w = findGuess();
        var b = 0;
        while (b < main.length) {
            if (w.substring(b, b + 1) == input.substring(b, b + 1)) {
                main.confirm(b, w.substring(b, b + 1));
            } else if (input.indexOf(w.substring(b, b + 1)) == -1) {
                main.remove(w.substring(b, b + 1));
            } else {
                main.yellow(b, w.substring(b, b + 1));
            }
            b = b + 1;
        }
        a = a + 1;
        t = w;
    }
    console.log(input + ": " + a.toString());
    return a;
}
function findGuess() {
    var mo = 0;
    var a = 0;
    values = common();
    while (a < values.length) {
        if (values[a] < values[mo]) {
            mo = a;
        }
        a = a + 1;
    }
    return words[mo];
}
function getGuess() {
    var values = [];
    var ties = [];
    var mo = 0;
    var a = 0;
    values = common();
    while (a < values.length) {
        if (values[a] < values[mo]) {
            mo = a;
        }
        a = a + 1;
    }
    a = 0;
    while (a < values.length) {
        if (values[a] == values[mo]) {
            ties[ties.length] = words[a];
        }
        a = a + 1;
    }
    //console.log(ties);
    //console.log(values[mo]);
    document.getElementById("r").value = words.length;
    if (words.length > 0) {
        displayRec(words[mo]);
    } else {
        displayRec("-----");
    }
}
function refresh() {
    var a = 0;
    var w = [];
    while (a < words.length) {
        if (main.meets(words[a])) {
            w[w.length] = words[a];
        }
        a = a + 1;
    }
    words = w;
}
function common() {
    refresh();
    var scores = [];
    var a = 0;
    while (a < words.length) {
        scores[a] = 0;
        scores[a] = cancels(words[a]);
        //console.log((Math.floor(100*(a/words.length))).toString() + "%");
        a = a + 1;
    }
    return scores;
}
function cancels(guess) {
    var max = 0;
    var count = new modct(this.length);
    while (count.running()) {
        var poss = new word(main.length);
        poss.setAll(main);
        var a = 0;
        while (a < main.length) {
            if (count.getPosition(a) == 0) {
                poss.remove(guess.substring(a, a + 1));
            } else if (count.getPosition(a) == 1) {
                poss.yellow(a, guess.substring(a, a + 1));
            } else {
                poss.confirm(a, guess.substring(a, a + 1));
            }
            a = a + 1;
        }
        var a = 0;
        var b = 0;
        while (a < words.length) {
            if (poss.meets(words[a])) {
                b = b + 1;
            }
            a = a + 1;
        }
        if (b > max) {
            max = b;
        }
        count.increment();
    }
    //console.log(guess + ": " + max.toString());
    return max;
}