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
function showSome(unleft, set) {
    var base = document.getElementById("set");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    var max = 0;
    while (set[0].getData(max) != "BREAK") {
        max++;
    }
    var rpick = Math.floor(max*Math.random());
    for (let i = -1; i < set.length; i++) {
        var row = document.createElement("tr");
        let j = 0;
        var thisitem;
        if (i != -1) {
            thisitem = set[i];
        } else {
            thisitem = set[unleft];
        }
        while (thisitem.getData(j) != "BREAK") {
            var elem = document.createElement("td");
            if (j == rpick) {
                elem.innerHTML = "???";
            } else {
                elem.innerHTML = thisitem.getData(j).toString();
            }
            if (i == -1) {
                elem = document.createElement("th");
                if (j == rpick) {
                    elem.innerHTML = thisitem.getData(j).toString();
                } else {
                    elem.innerHTML = "???";
                }
            }
            row.appendChild(elem);
            j++;
        }
        base.appendChild(row);
    }
}
function showAll(pick, set) {
    var base = document.getElementById("set");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < set.length; i++) {
        var row = document.createElement("tr");
        let j = 0;
        while (set[i].getData(j) != "BREAK") {
            var elem = document.createElement("td");
            elem.innerHTML = set[i].getData(j).toString();
            row.appendChild(elem);
            j++;
        }
        base.appendChild(row);
    }
}
function start() {
    var set = gen(4);
    var correct = Math.floor(set.length*Math.random());
    console.log(set);
    var pick = showSome(correct, set);
}
start();