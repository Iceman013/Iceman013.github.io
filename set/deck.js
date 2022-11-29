var deck = [];
var displayed = [];
const pick = new Event("pick");

document.body.onresize = function() {
    drawThem();
}

function clear() {
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
function checkDisplay(list) {
    var found = false;
    for (let i = 0; i < list.length - 2; i++) {
        for (let j = i + 1; j < list.length - 1; j++) {
            for (let k = j + 1; k < list.length; k++) {
                if (isSet(list[i].card, list[j].card, list[k].card)) {
                    found = true;
                    //console.log((i+1) + " " + (j+1) + " " + (k+1));
                    i = list.length;
                    j = list.length;
                    k = list.length;
                }
            }
        }
    }
    return found;
}
function replace(trio) {
    var cdis = [];
    for (let i = 0; i < displayed.length; i++) {
        if (trio.includes(displayed[i])) {
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
            var row = document.createElement("div");
            row.classList.add("row");
            board.appendChild(row);
            for (let j = 0; j < 4; j++) {
                var card = document.createElement("div");
                card.id = "a" + i + "b" + j;
                row.appendChild(card);
                var cardpos = Math.floor(deck.length*Math.random());
                displayed.push(new Slot(deck[cardpos], card));
                deck.splice(cardpos, 1);
            }
        }
        built = checkDisplay(displayed);
    }
    drawThem();
    document.getElementById("remain").innerHTML = deck.length;
}
start();