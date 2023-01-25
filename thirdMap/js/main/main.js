function start() {
    for (let i = 0; i < 100; i++) {
        var img = document.createElement("img");
        img.src = imageList[Math.floor(imageList.length*Math.random())].src;
        document.getElementById("mapContainer").appendChild(img);
    }

    // Movement
    turnOnMovement();
}
start();