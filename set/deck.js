var deck = [];
var displayed = [];
const pick = new Event("pick");

function insert(target) {
    var cardpos = Math.floor(deck.length*Math.random());
    target.card = deck[cardpos];
    makeCard(target.base, target.card);
    deck.splice(cardpos, 1);
    target.activate();
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
            for (let i = 0; i < selected.length; i++) {
                insert(selected[i]);
            }
        } else {
            console.log("Nope");
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
function start() {
    var board = document.getElementById("board");
    for (let i = 0; i < 81; i++) {
        deck[i] = new Card(i);
    }
    for (let i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for (let j = 0; j < 4; j++) {
            var card = document.createElement("div");
            card.id = "a" + i + "b" + j;
            row.appendChild(card);
            var cardpos = Math.floor(deck.length*Math.random());
            makeCard(card, deck[cardpos]);
            displayed.push(new Slot(deck[cardpos], card));
            deck.splice(cardpos, 1);
        }
    }
}
start();