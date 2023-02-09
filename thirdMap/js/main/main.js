function startGame() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("HUD").style.display = "block";

    var player = new Player();
    var map = makeMap();
    for (let i = 0; i < map.length; i++) {
        document.getElementById("mapContainer").appendChild(map[i].element);
    }

    // Movement
    turnOnMovement(player);

    player.addToInventory(itemList[0], 10);
    player.addToInventory(itemList[1], 10);
    player.addToInventory(itemList[0], 11);
    player.addToInventory(itemList[0], -21);
    player.addToInventory(itemList[0], 1);

    document.body.addEventListener("tileSelect", function(e) {
        console.log(e.detail);
    });

    sendMessage("personA", "Welcome to the game. Good luck doing anything cause I haven't made it really do anything yet.");
    sendMessage("personB", "This is a pretty text display though.");
    sendMessage("personC", "That is your opinion.");
    sendMessage("personB", "And it is the right one.");
    sendMessage("personA", "Until we change it eventually . . .");
    var data = {
        player: player,
        map: map
    };
    console.log(data);
}