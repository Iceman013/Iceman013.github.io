import { Card, isSet } from "./card.js";
import { makeCard } from "./draw.js";

let deck = [];
let displayed = [];
const pick = new Event("pick");

let time = 0;
let timer;
document.body.onresize = function() {
    drawThem();
}

function clear() {
    clearInterval(timer);

    document.getElementById("board").style.display = "none";
    document.getElementById("overtime").style.display = "block";

    let base = document.getElementById("overtime");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    
    let message = document.createElement("div");

    let p = document.createElement("h1");
    p.innerHTML = "Puzzle completed. Congratulations!";
    message.appendChild(p);

    message.appendChild(document.createElement("br"));

    let but = document.createElement("button");
    but.onclick = function() { start() };
    but.innerHTML = "Play Again";
    message.appendChild(but);

    base.appendChild(message);
}

function getAnswer(list) {
    let answers = [];
    for (let i = 0; i < list.length - 2; i++) {
        for (let j = i + 1; j < list.length - 1; j++) {
            for (let k = j + 1; k < list.length; k++) {
                if (isSet(list[i].card, list[j].card, list[k].card)) {
                    let thisAnswer = [i,j,k];
                    answers.push(thisAnswer);
                    // console.log((i+1) + " " + (j+1) + " " + (k+1));
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
    // Remove 3
    let currentDisplay = [];
    for (let i = 0; i < displayed.length; i++) {
        if (trio.includes(displayed[i])) {
            if (displayed[i].base.classList.contains("clue")) {
                displayed[i].base.classList.remove("clue");
            }
            displayed[i].card = null;
            makeCard(displayed[i].base, displayed[i].card);
            displayed[i].activate();
        }
        currentDisplay[i] = displayed[i];
    }
    
    // If game is over
    if (deck.length == 0) {
        if (!checkDisplay(displayed)) {
            clear();
            return;
        } else {
            return;
        }
    }

    let found = false;
    let triplet = [];
    for (let i = 0; i < deck.length && !found; i++) {
        trio[0].card = deck[i];
        for (let j = i + 1; j < deck.length && !found; j++) {
            trio[1].card = deck[j];
            for (let k = j + 1; k < deck.length && !found; k++) {
                trio[2].card = deck[k];
                if (checkDisplay(displayed)) {
                    found = true;
                    triplet = [i,j,k];
                }
            }
        }
    }
    if (found) {
        for (let i = triplet.length - 1; i >= 0; i--) {
            deck.splice(triplet[i], 1);
        }
    } else {
        clear();
        return;
    }

    for (let i = 0; i < trio.length; i++) {
        makeCard(trio[i].base, trio[i].card);
    }
    document.getElementById("remain").innerHTML = deck.length;

    // Auto-play
    // if (deck.length != 0) {
    //     setTimeout(function() {
    //         let answers = getAnswer(displayed)[0];
    //         const delay = 10;
    //         for (let i = 0; i < answers.length; i++) {
    //             setTimeout(function() {
    //                 displayed[answers[i]].base.click();
    //             }, (i+1)*delay);
    //         }
    //     }, 500);
    // }
}

function chose(base) {
    for (let i = 0; i < displayed.length; i++) {
        if (base == displayed[i].base) {
            displayed[i].activate();
        }
    }
    let selected = [];
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
    let answers = getAnswer(displayed);
    for (let i = 0; i < answers[0].length; i++) {
        let base = displayed[answers[0][i]].base;
        if (!base.classList.contains("clue")) {
            base.classList.add("clue");
        }
    }
}
function start() {
    document.getElementById("board").style.display = "grid";
    document.getElementById("overtime").style.display = "none";

    let board = document.getElementById("board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    deck = [];
    displayed = [];

    for (let i = 0; i < 81; i++) {
        deck.splice(Math.floor(i*Math.random()), 0, new Card(i));
    }

    // Create display
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            let cardDiv = document.createElement("div");
            cardDiv.id = "a" + i + "b" + j;
            board.appendChild(cardDiv);

            displayed.push(new Slot(null, cardDiv));
        }
    }

    // Add cards
    for (let i = 0; i < 12; i++) {
        let cardpos = Math.floor(deck.length*Math.random());
        displayed[i].card = deck[cardpos];
        deck.splice(cardpos, 1);
    }
    
    // Ensure they have a set
    while (!checkDisplay(displayed)) {
        let rep = Math.floor(12*Math.random());
        deck.splice(0, 0, displayed[rep].card);
        displayed[rep].card = deck.pop();
    }

    drawThem();
    document.getElementById("remain").innerHTML = deck.length;

    time = Date.now();
    clearInterval(timer);
    timer = setInterval(function() {
        let output = document.getElementById("time");
        let timeDiff = Date.now() - time;
        output.innerHTML = Math.floor(timeDiff/100)/10;
    }, 100);
}

function startPage() {
    document.getElementById("newGame").addEventListener("click", start);
    document.getElementById("showAnswer").addEventListener("click", showAnswer);

    document.getElementById("board").style.display = "none";
    document.getElementById("overtime").style.display = "block";
}
startPage();