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
function makeHead(unleft, position, set) {
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
        if (iter == position) {
            elem.innerHTML = set[unleft].getData(iter);
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
    for (let i = 0; i < set.length; i++) {
        var row = document.createElement("tr");
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
            if (j == position) {
                elem.innerHTML = "???";
            } else {
                elem.innerHTML = set[i].getData(j).toString();
            }
            row.appendChild(elem);
            j++;
        }
        base.appendChild(row);
    }
}

function start() {
    var set = gen(4);
    var unleft = Math.floor(set.length*Math.random());
    var position = getPost(set);
    showSome(unleft, position, set);
}
start();