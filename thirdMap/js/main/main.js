function start() {
    var player = new Player();
    var map = makeMap();
    for (let i = 0; i < map.length; i++) {
        document.getElementById("mapContainer").appendChild(map[i].element);
    }

    // Movement
    turnOnMovement(player);

    sendMessage("personA", "Welcome to the game. Good luck doing anything cause I haven't made it really do anything yet.");
    sendMessage("personB", "This is a pretty text display though.");
    sendMessage("personC", "That is your opinion.");
    sendMessage("personB", "And it is the right one.");
    sendMessage("personA", "Until we change it eventually . . .");
}
start();