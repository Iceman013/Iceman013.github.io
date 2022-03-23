const TICK = 2000;
function makeCard(card) {
    var base = document.createElement("text");
    base.innerHTML = card.getValue();
    if (card.visible) {
        if (card.getSuit() == "H" || card.getSuit() == "D") {
            base.style.color = "var(--red)";
        }
    } else {
        base.style.color = "var(--caba)";
    }
    base.innerHTML = card.show(3);
    return base;
}
function physicalHand(players, pot) {
    var bb = document.createElement("div");
    for (let i = 0; i <= players.length; i++) {
        var base = document.createElement("div");
        base.classList.add("hand");
        for (let j = 0; j < 3; j++) {
            var da = document.createElement("div");
            da.classList.add("card");
            var cardy;
            if (i < players.length) {
                cardy = players[i].hand.cards[j]
            } else {
                base.classList.add("pot");
                cardy = pot.cards[j];
            }
            if (cardy.moving) {
                da.classList.add("mover");
            }
            var ca = makeCard(cardy);
            da.appendChild(ca);
            base.appendChild(da);
        }
        bb.appendChild(base);
    }
    return bb;
}
function showHands(ch) {
    var base = document.getElementById("hands");
    while(base.firstChild) {
        base.removeChild(base.firstChild);
    }
    base.appendChild(ch);
}
var heap = [];
function tick() {
    if (heap.length > 0) {
        heap[0]();
        heap.splice(0,1);
    }
}
function addToHeap(input) {
    heap.push(input);
}