function random(min, max) {
    var r = Math.random();
    var out = min + Math.floor(r*(max - min + 1));
    return out;
}
function randomWord(length) {
    var tempArr = acceptable[length.toString()];
    var r = random(0, tempArr.length - 1);
    return tempArr[r];
}
function getOnStart(length, start) {
    var sub = acceptable[length.toString()];
    var out = [];
    for (let i = 0; i < sub.length; i++) {
        var word = sub[i];
        if (word.substring(0, start.length) == start) {
            out.push(word);
        }
    }
    return out;
}
function getWords(twod) {
    var hWords = [];
    for (let i = 0; i < twod.length; i++) {
        hWords.push("");
    }
    for (let i = 0; i < twod.length; i++) {
        for (let j = 0; j < twod[i].length; j++) {
            hWords[i] += twod[i][j];
        }
    }
    var vWords = [];
    for (let i = 0; i < twod[0].length; i++) {
        vWords.push("");
    }
    for (let i = 0; i < twod[0].length; i++) {
        for (let j = 0; j < twod.length; j++) {
            vWords[i] += twod[j][i];
        }
    }
    var words = [];
    for (let i = 0; i < hWords.length; i++) {
        words.push(hWords[i]);
    }
    for (let i = 0; i < vWords.length; i++) {
        words.push(vWords[i]);
    }
    return words;
}
function check(word) {
    var length = word.length;
    var list = acceptable[length.toString()];
    return list.includes(word);
}
function checkSet(set) {
    var tw = getWords(set);
    var out = true;
    for (let i = 0; i < tw.length; i++) {
        if (!check(tw[i])) {
            out = false;
        }
    }
    return out;
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const W = 4;
const H = 4;
function blankSet(x, y) {
    var set = [];
    for (let i = 0; i < x; i++) {
        var ts = [];
        for (let j = 0; j < y; j++) {
            ts.push("");
        }
        set.push(ts);
    }
    return set;
}
function bruteForce(w, h) {
    var set = blankSet(w, h);
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            var lp = random(0, alphabet.length - 1);
            var letter = alphabet.substring(lp, lp + 1);
            set[x][y] = letter;
        }
    }
    return set;
}
function halfSet(x, y) {
    var set = blankSet(x, y);
    for (let i = 0; i < x; i++) {
        var word = randomWord(x);
        for (let j = 0; j < y; j++) {
            set[i][j] = word.substring(j, j+1);
        }
    }
    return set;
}
function fillIn(x, y) {
    var set = blankSet(x, y);
    for (let i = 0; i < x - 1; i++) {
        var word = randomWord(x);
        for (let j = 0; j < y; j++) {
            set[i][j] = word.substring(j, j+1);
        }
    }
    for (let i = 0; i < y; i++) {
        var letter = "a";
        var start = "";
        for (let j = 0; j < x - 1; j++) {
            start += set[j][i];
        }
        var words = getOnStart(x, start);
        if (words.length > 0) {
            var pos = random(0, words.length - 1);
            letter = words[pos].substring(x - 1, x);
        }
        set[x - 1][i] = letter;
    }
    return set;
}
function diagonal(x, y) {
    var set = blankSet(x, y);
    return set;
}
function handMade() {
    var set = [
        ["c","a","s","h"],
        ["h","u","l","a"],
        ["a","t","o","m"],
        ["t","o","p","s"]
    ];
    return set;
}
const tester = function() {
    return fillIn(W, H);
};
function makeSet(attempts) {
    for (let i = 0; i < attempts; i++) {
        var set = tester();
        if (checkSet(set)) {
            console.log(set);
        }
    }
}
function start() {
    makeSet(1000);
}
start();
/*
cash
hula
atom
tops
*/