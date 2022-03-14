function random(min, max) {
    var r = Math.random();
    var out = min + Math.floor(r*(max - min + 1));
    return out;
}
function randomWord(length) {
    var tempArr = allowed[length.toString()];
    var r = random(0, tempArr.length - 1);
    return tempArr[r];
}
function getOnStart(length, start) {
    var sub = allowed[length.toString()];
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
    var list = allowed[length.toString()];
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
    for (let i = 0; i < tw.length - 1; i++) {
        for (let j = i + 1; j < tw.length; j++) {
            if (tw[i] == tw[j]) {
                out = false;
            }
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
    for (let i = 0; i < x && i < y; i++) {
        if (i < x) {
            var start = "";
            for (let j = 0; j < i; j++) {
                start += set[i][j];
            }
            var words = getOnStart(x, start);
            var cho = "aaaaaaaaaa";
            if (words.length > 0) {
                var pos = random(0, words.length - 1);
                cho = words[pos];
            }
            for (let j = i; j < x; j++) {
                set[i][j] = cho.substring(j, j + 1);
            }
        }
        if (i < y) {
            var start = "";
            for (let j = 0; j < i; j++) {
                start += set[j][i];
            }
            var words = getOnStart(y, start);
            var cho = "aaaaaaaaaa";
            if (words.length > 0) {
                var pos = random(0, words.length - 1);
                cho = words[pos];
            }
            for (let j = i; j < y; j++) {
                set[j][i] = cho.substring(j, j + 1);
            }
        }
    }
    return set;
}
function getOneDiagonal(x, y, tries) {
    var fset = blankSet(x, y);
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            fset[i][j] = "q";
        }
    }
    var goal = true;
    for (let t = 0; t < tries && goal; t++) {
        var set = blankSet(x, y);
        var busy = true;
        for (let i = 0; i < x && i < y && busy; i++) {
            if (i < x && busy) {
                var start = "";
                for (let j = 0; j < y; j++) {
                    start += set[i][j];
                }
                var words = getOnStart(x, start);
                var cho = "aaaaaaaaaa";
                if (words.length > 0) {
                    var pos = random(0, words.length - 1);
                    cho = words[pos];
                } else {
                    busy = false;
                }
                for (let j = 0; j < y && busy; j++) {
                    set[i][j] = cho.substring(j, j + 1);
                }
            }
            if (i < y && busy) {
                var start = "";
                for (let j = 0; j < x; j++) {
                    start += set[j][i];
                }
                var words = getOnStart(y, start);
                var cho = "aaaaaaaaaa";
                if (words.length > 0) {
                    var pos = random(0, words.length - 1);
                    cho = words[pos];
                } else {
                    busy = false;
                }
                for (let j = 0; j < x && busy; j++) {
                    set[j][i] = cho.substring(j, j + 1);
                }
            }
        }
        if (busy) {
            fset = set;
            goal = false;
        }
    }
    return fset;
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
function doAll() {
    var list = allowed["5"];
    for (let a = 0; a < list.length - 4; a++) {
        for (let b = a; b < list.length - 3; b++) {
            for (let c = b; c < list.length - 2; c++) {
                for (let d = c; d < list.length - 1; d++) {
                    console.log("Another Attempt");
                    for (let e = d; e < list.length; e++) {
                        var set = blankSet(5, 5);
                        var words = [list[a],list[b],list[c],list[d],list[e]];
                        for (let i = 0; i < 5; i++) {
                            var word = words[i];
                            for (let j = 0; j < 5; j++) {
                                set[i][j] = word.substring(j, j+1);
                            }
                        }
                        if (checkSet(set)) {
                            console.log(set);
                        }
                    }
                }
            }
        }
    }
}
const tester = function() {
    //return bruteForce(W, H);
    //return halfSet(W, H);
    //return fillIn(W, H);
    //return diagonal(W, H);
    //return handMade(W, H);
    return getOneDiagonal(W, H, 100000);
};
function killPC() {
    var attempts = 10000;
    for (let i = 0; i < attempts; i++) {
        var set = getOneDiagonal(5, 5, 1000);
        console.log("Please RNGesus");
        if (checkSet(set)) {
            console.log(set);
        }
    }
}
function makeSet(attempts) {
    for (let i = 0; i < attempts; i++) {
        if (i % (attempts/10) == 0 && i != 0) {
            console.log(i/attempts);
        }
        var set = tester();
        if (checkSet(set)) {
            console.log(set);
        }
    }
}
function logSet(set) {
    console.log("Hey! I found one.");
    for (let i = 0; i < set.length; i++) {
        var ro = "";
        for (let j = 0; j < set[i].length; j++) {
            ro += set[i][j];
        }
        console.log(ro);
    }
}
function findOne() {
    var fset = blankSet(4,4);
    var goal = false;
    while (!goal) {
        console.log("TRYING");
        fset = getOneDiagonal(4, 4, 100000);
        if (checkSet(fset)) {
            goal = true;
            logSet(fset);
        }
    }
}
function getSome(goal) {
    for (let i = 0; i < goal; i++) {
        findOne();
    }
}
function start() {
    makeSet(1);
}
function getSet() {
    var goal = false;
    var fset;
    while (!goal) {
        var set = getOneDiagonal(W, H, 1);
        if (checkSet(set)) {
            fset = set;
            goal = true;
        }
    }
    return fset;
}
/*
0: (4) ['n', 'o', 'd', 's']
1: (4) ['o', 'v', 'a', 'l']
2: (4) ['v', 'e', 't', 'o']
3: (4) ['a', 'n', 'e', 'w']
*/