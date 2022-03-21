const TICK = 1000;
var intervalId = window.setInterval(function() {
    tick();
}, TICK);
function stop() {
    clearInterval(intervalId);
}
function physicalHand(players, pot) {
    var bb = document.createElement("div");
    for (let i = 0; i <= players.length; i++) {
        var base = document.createElement("div");
        for (let j = 0; j < 3; j++) {
            var ca = document.createElement("text");
            ca.classList.add("card");
            if (i < players.length) {
                ca.innerHTML = players[i].hand.cards[j].show(0);
            } else {
                ca.innerHTML = pot.cards[j].show(0);
            }
            base.appendChild(ca);
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