function start() {
    var player = new Player();
    for (let i = 0; i < 20*20; i++) {
        var img = document.createElement("img");
        img.src = imageList[Math.floor(imageList.length*Math.random())].src;
        document.getElementById("mapContainer").appendChild(img);
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