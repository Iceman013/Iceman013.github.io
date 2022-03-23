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
    var out = "";
    var level = 0;
    for (let i = 0; i < players.length; i++) {
        out += players[i].name + ": Score: " + players[i].hand.score() + "\n";
        out += players[i].hand.show(level) + "\n";
    }
    out += "Pot\n";
    out += pot.show(level) + "\n";
    var qqq = physicalHand(players, pot);
    showHands(qqq);
    console.log(out);
}
function doPlayer(player, pot) {
    return player.run(pot);
}

function doRound(players) {
    var pot = startRound(players);
    let ct = 0;
    var goal = false;
    var splinter = window.setInterval(function() {
        if (!players[ct%players.length].lh) {
            if (doPlayer(players[ct%players.length], pot)) {
                logRound(players, pot);
                ct++;
            }
        } else {
            clearInterval(this);
        }
    }, TICK);
    logRound(players, pot);
}