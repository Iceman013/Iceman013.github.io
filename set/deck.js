function start() {
    var board = document.getElementById("board");
    var deck = [];
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
            card.classList.add("card");
            row.appendChild(card);
            makeCard(card, deck[4*i + j]);
        }
    }
}
start();