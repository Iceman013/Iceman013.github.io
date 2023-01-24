var deck = [];
var displayed = [];
const pick = new Event("pick");

var time = 0;
var timer;
document.body.onresize = function() {
    drawThem();
}

function clear() {
    clearInterval(timer);

    var base = document.getElementById("board");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    
    var message = document.createElement("div");

    var p = document.createElement("p");
    p.innerHTML = "Puzzle completed. Congratulations!";
    message.appendChild(p);

    var but = document.createElement("button");
    but.onclick = function() { start() };
    but.innerHTML = "Play Again";
    message.appendChild(but);

    base.appendChild(message);
}
function getAnswer(list) {
    var answers = [];
    for (let i = 0; i < list.length - 2; i++) {
        for (let j = i + 1; j < list.length - 1; j++) {
            for (let k = j + 1; k < list.length; k++) {
                if (isSet(list[i].card, list[j].card, list[k].card)) {
                    var thisAnswer = [i,j,k];
                    answers.push(thisAnswer);
                    //console.log((i+1) + " " + (j+1) + " " + (k+1));
                    // Save time or check for all answers
                    if (true) {
                        i = list.length;
                        j = list.length;
                        k = list.length;
                    }
                    
                }
            }
        }
    }
    return answers;
}
function checkDisplay(list) {
    return (getAnswer(list).length != 0);
}
function replace(trio) {
    var cdis = [];
    for (let i = 0; i < displayed.length; i++) {
        if (trio.includes(displayed[i])) {
            if (displayed[i].base.classList.contains("clue")) {
                displayed[i].base.classList.remove("clue");
            }
            displayed[i].card = null;
            makeCard(displayed[i].base, displayed[i].card);
            displayed[i].activate();
        }
        cdis[i] = displayed[i];
    }
    
    if (!checkDisplay(cdis) && deck.length == 0) {
        clear();
        return;
    }

    var met = false;
    var added = trio;
    while (!met) {
        var cdek = [];
        for (let i = 0; i < deck.length; i++) {
            cdek[i] = deck[i];
        }
        for (let i = 0; i < 3; i++) {
            var cardpos = Math.floor(cdek.length*Math.random());
            added[i].card = cdek[cardpos];
            cdek.splice(cardpos, 1);
        }
        met = checkDisplay(cdis);
    }
    deck = [];
    for (let i = 0; i < cdek.length; i++) {
        deck[i] = cdek[i];
    }
    displayed = [];
    for (let i = 0; i < cdis.length; i++) {
        displayed[i] = cdis[i];
    }
    for (let i = 0; i < added.length; i++) {
        makeCard(added[i].base, added[i].card);
    }
    document.getElementById("remain").innerHTML = deck.length;
}
function chose(base) {
    for (let i = 0; i < displayed.length; i++) {
        if (base == displayed[i].base) {
            displayed[i].activate();
        }
    }
    var selected = [];
    for (let i = 0; i < displayed.length; i++) {
        if (displayed[i].active) {
            selected.push(displayed[i]);
        }
    }
    if (selected.length == 3) {
        if (isSet(selected[0].card, selected[1].card, selected[2].card)) {
            replace(selected);
        }
    }
}
function Slot(card, base) {
    this.card = card;
    this.base = base;
    this.active = false;

    this.activate = function() {
        this.base.classList.toggle("active");
        this.active = !this.active;
    }
    this.setBase = function() {
        this.base.classList.add("card");
        this.base.addEventListener("pick", function() { chose(this) });
        this.base.onclick = function() {
            this.dispatchEvent(pick);
        }
    }
    this.setBase();
}
function drawThem() {
    for (let i = 0; i < displayed.length; i++) {
        makeCard(displayed[i].base, displayed[i].card);
    }
}
function showAnswer() {
    var answers = getAnswer(displayed);
    for (let i = 0; i < answers[0].length; i++) {
        var base = displayed[answers[0][i]].base;
        if (!base.classList.contains("clue")) {
            base.classList.add("clue");
        }
    }
}
function start() {
    var board = document.getElementById("board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    deck = [];
    displayed = [];

    for (let i = 0; i < 81; i++) {
        deck[i] = new Card(i);
    }
    var built = false;
    while (!built) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                var card = document.createElement("div");
                card.id = "a" + i + "b" + j;
                board.appendChild(card);
                var cardpos = Math.floor(deck.length*Math.random());
                displayed.push(new Slot(deck[cardpos], card));
                deck.splice(cardpos, 1);
            }
        }
        built = checkDisplay(displayed);
    }
    drawThem();
    document.getElementById("remain").innerHTML = deck.length;

    time = 0;
    timer = setInterval(function() {
        var output = document.getElementById("time");
        output.innerHTML = Math.round(10*time)/10;
        time += 0.1;
    }, 100);
}
start();