const CHOICE = 4;
const CLUEZ = 2;

var points = [0,0];
function nextQuestion() {}
function gen(size) {
    var diff = true;
    var set = [];
    while (diff) {
        set = [];
        diff = false;
        for (let i = 0; i < size; i++) {
            var temp = PLIST[Math.floor(PLIST.length*Math.random())];
            if (set.includes(temp)) {
                diff = true;
            }
            set[i] = temp;
        }
    }
    return set;
}
function showScore() {
    document.getElementById("cor").innerHTML = points[0];
    document.getElementById("tot").innerHTML = points[1];
}
function makeHead(unleft, position, set) {
    showScore();
    var base = document.getElementById("set");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    var head = document.createElement("tr");
    var iter = 0;
    while (set[0].getName(iter) != "BREAK") {
        var elem = document.createElement("th");
        elem.innerHTML = set[0].getName(iter);
        head.appendChild(elem);
        iter++;
    }
    base.appendChild(head);

    var clue = document.createElement("tr");
    iter = 0;
    while (set[unleft].getData(iter) != "BREAK") {
        var elem = document.createElement("th");
        if (position.includes(iter)) {
            if (set[unleft].getType(iter) == "Text") {
                elem.innerHTML = set[unleft].getData(iter);
            } else if (set[unleft].getType(iter) == "Image") {
                var sub = document.createElement("img");
                sub.src = set[unleft].getData(iter);
                elem.appendChild(sub);
            }
        } else {
            elem.innerHTML = "???";
        }
        clue.appendChild(elem);
        iter++;
    }
    base.appendChild(clue);
}
function getPost(set) {
    var max = 0;
    while (set[0].getData(max) != "BREAK") {
        max++;
    }
    var rpick = Math.floor(max*Math.random());
    return rpick;
}
function showAll(unleft, position, set, chocho) {
    var base = document.getElementById("set");
    makeHead(unleft, position, set);
    if (chocho == unleft) {
        points[0]++;
    }
    for (let i = 0; i < set.length; i++) {
        var row = document.createElement("tr");
        row.onclick = function() {
            nextQuestion();
        }
        let j = 0;
        while (set[i].getData(j) != "BREAK") {
            var elem = document.createElement("td");
            if (i == chocho && i != unleft) {
                elem.classList.add("wrong");
            }
            if (i == unleft) {
                elem.classList.add("right");
            }
            elem.innerHTML = set[i].getData(j).toString();
            row.appendChild(elem);
            j++;
        }
        base.appendChild(row);
    }
    showScore();
}
function showSome(unleft, position, set) {
    var base = document.getElementById("set");
    makeHead(unleft, position, set);
    var max = 0;
    while (set[0].getData(max) != "BREAK") {
        max++;
    }
    for (let i = 0; i < set.length; i++) {
        var row = document.createElement("tr");
        const chocho = i;
        row.onclick = function() {
            showAll(unleft, position, set, chocho);
        }
        let j = 0;
        while (set[i].getData(j) != "BREAK") {
            var elem = document.createElement("td");
            if (position.includes(j)) {
                elem.innerHTML = "???";
            } else {
                if (set[i].getType(j) == "Text") {
                    elem.innerHTML = set[i].getData(j).toString();
                } else if (set[i].getType(j) == "Image") {
                    var sub = document.createElement("img");
                    sub.src = set[i].getData(j);
                    elem.appendChild(sub);
                }
            }
            row.appendChild(elem);
            j++;
        }
        base.appendChild(row);
    }
}
function start() {
    points[1]++;
    var set = gen(CHOICE);
    var mage = true;
    var unleft;
    var position = [];
    while (mage) {
        mage = false;
        unleft = Math.floor(set.length*Math.random());
        position = [];
        while (position.length < CLUEZ) {
            var temp = getPost(set);
            if (!position.includes(temp)) {
                position[position.length] = temp;
            }
        }
        for (let i = 0; i < set.length; i++) {
            if (i != unleft) {
                for (let j = 0; j < position.length; j++) {
                    if (set[i].getData(position[j]) == set[unleft].getData(position[j])) {
                        mage = true;
                    }
                }
            }
        }
    }
    showSome(unleft, position, set);
}
nextQuestion = function() {
    start();
}
reset = function() {
    points = [0,0];
    start();
}
start();