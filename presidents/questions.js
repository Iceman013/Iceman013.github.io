function getRandom(qt) {
    var size = Math.ceil(PLIST.length/(qt + 1));
    var start = Math.floor(Math.random()*(PLIST.length - size + 1));
    var cho = [];
    for (let i = 0; i < qt; i++) {
        var r = Math.floor(start + Math.random()*size);
        if (!cho.includes(r)) {
            cho[i] = r;
        } else {
            i--;
        }
    }
    return cho;
}

// Three to One Method

function makeClue(president, set) {
    const CLUES = 3;
    var base = document.createElement("div");
    var table = document.createElement("table");
    var pick = [0, 0, 0, 0];
    var check = false;
    var pass = 0;
    var topics = 0;
    while (president.getData(topics) != "BREAK") {
        topics++;
    }
    var doubleCheck = false;
    while (!doubleCheck) {
        pick = [];
        check = false;
        pass = 0;
        while (!check) {
            check = true;
            pick[pass] = Math.floor(Math.random()*topics);
            if (pass > 0) {
                for (let i = 0; i < pass; i++) {
                    if (pick[i] == pick[pass]) {
                        check = false;
                    }
                }
            }
            if (check && pass < CLUES) {
                pass++;
                check = false;
            }
        }
        for (let i = 0; i < pick.length - 2; i++) {
            for (let j = i + 1; j < pick.length - 1; j++) {
                if (pick[i] > pick[j]) {
                    var temp = pick[i];
                    pick[i] = pick[j];
                    pick[j] = temp;
                }
            }
        }
        doubleCheck = true;
        for (let i = 0; i < set.length - 1; i++) {
            for (let j = i + 1; j < set.length; j++) {
                if (PLIST[set[i]].getData(pick[pick.length - 1]) == PLIST[set[j]].getData(pick[pick.length - 1])) {
                    doubleCheck = false;
                }
            }
        }
    }
    var head = document.createElement("tr");
    var det = document.createElement("tr");
    for (let i = 0; i < pick.length - 1; i++) {
        var h = document.createElement("th");
        h.innerHTML = president.getName(pick[i]);
        head.appendChild(h);
        var d = document.createElement("td");
        if (president.getType(pick[i]) == "Text") {
            d.innerHTML = president.getData(pick[i]);
        } else if (president.getType(pick[i]) == "Image") {
            var img = document.createElement("img");
            img.src = president.getData(pick[i]);
            d.appendChild(img);
        }
        det.appendChild(d);
    }
    table.appendChild(head);
    table.appendChild(det);
    base.appendChild(table);

    var clue = document.createElement("p");
    clue.innerHTML = president.getName(pick[3]);
    clue.classList.add("type");
    base.appendChild(clue);
    document.getElementById("question").appendChild(base);
    
    return pick[pick.length - 1];
}
function makeOption(president, detail, correct) {
    var base = document.createElement("button");
    base.value = correct;
    base.classList.add("choice");
    base.classList.add("able");
    base.onclick = function() {
        var sub = document.getElementById("submit");
        sub.disabled = false;
        sub.classList.remove("disabled");
        var buttonList = document.getElementsByClassName("choice");
        for (let i = 0; i < buttonList.length; i++) {
            buttonList[i].classList.remove("selected");
        }
        this.classList.add("selected");
    };
    if (president.getType(detail) == "Text") {
        var sub = document.createElement("p");
        sub.innerHTML = president.getData(detail);
        base.appendChild(sub);
    } else if (president.getType(detail) == "Image") {
        var sub = document.createElement("img");
        sub.src = president.getData(detail);
        base.appendChild(sub);
    }
    document.getElementById("answers").appendChild(base);
}
function makeQA() {
    var OPTIONS = 4;
    var set = getRandom(OPTIONS);
    var correct = Math.floor(Math.random()*OPTIONS);
    var detail = makeClue(PLIST[set[correct]], set);
    for (let i = 0; i < 4; i++) {
        makeOption(PLIST[set[i]], detail, i == correct);
    }
}
function submitQA() {
    var correct = false;
    var buttonList = document.getElementsByClassName("choice");
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].classList.remove("able");
        buttonList[i].disabled = true;
        if (buttonList[i].classList[1] == "selected") {
            if (buttonList[i].value == "true") {
                correct = true;
                buttonList[i].classList.remove("selected");
                buttonList[i].classList.add("right");
                document.getElementById("feedback").classList.add("right");
            } else {
                buttonList[i].classList.remove("selected");
                buttonList[i].classList.add("wrong");
                document.getElementById("submit").classList.add("incorrect");
            }
        } else {
            if (buttonList[i].value == "true") {
                buttonList[i].classList.add("right");
                document.getElementById("feedback").classList.add("wrong");
            }
        }
    }
}

// End of Three to One Method

function clear() {
    var clearing = document.getElementById("question");
    while (clearing.firstChild) {
        clearing.removeChild(clearing.firstChild);
    }
    clearing = document.getElementById("answers");
    while (clearing.firstChild) {
        clearing.removeChild(clearing.firstChild);
    }
    document.getElementById("feedback").classList.remove("right");
    document.getElementById("feedback").classList.remove("wrong");
}
function submit() {
    var elem = document.getElementById("submit");
    if (elem.innerHTML == "Check") {
        submitQA();
        elem.innerHTML = "Continue";
    } else if (elem.innerHTML == "Continue") {
        clear();
        makeQA();
        elem.disabled = true;
        elem.classList.toggle("disabled");
        elem.classList.remove("incorrect");
        elem.innerHTML = "Check";
    }
}

makeQA();
window.addEventListener("keypress", function(event) {
    if (event.code == "Space" && this.document.getElementById("submit").disabled == false) {
        submit();
    }
});