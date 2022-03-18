function makePlayers(size) {
    var players = [];
    //players.push(new User());
    for (let i = 0; i < size; i++) {
        players.push(new Com());
    }
    return players;
}
function startRound(players) {
    var d = new Deck();
    var o = d.getSet(3 * (players.length + 1));
    var pot = new Hand();
    for (let i = 0; i < 3; i++) {
        pot.draw(o[i]);
    }
    for (let j = 0; j < players.length; j++) {
        if (players[j].getLives() > 0) {
            var h = new Hand();
            for (let i = 0; i < 3; i++) {
                h.draw(o[3 + 3*j + i]);
            }
            players[j].drawHand(h);
        }
    }
    return pot;
}
function logRound(players, pot) {
    for (let i = 0; i < players.length; i++) {
        console.log(players[i].name);
        console.log(players[i].hand.show(1));
        console.log("Score: " + players[i].hand.score());
    }
    console.log("Pot");
    console.log(pot.show(1));
}
function doPlayer(player, pot) {
    player.run(pot);
}
function doRound(players) {
    var pot = startRound(players);
    logRound(players, pot);
    doPlayer(players[0], pot);
}