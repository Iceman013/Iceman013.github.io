var keysPressed = [];

function turnOnKeyCheck() {
    window.addEventListener("keydown", function(event) {
        if (!keysPressed.includes(event.key)) {
            keysPressed.push(event.key);
        }
    });
    window.addEventListener("keyup", function(event) {
        while (keysPressed.includes(event.key)) {
            keysPressed.splice(keysPressed.indexOf(event.key), 1);
        }
    });
}
function move(player) {
    if (keysPressed.length == 0) {
        return;
    }
    var upkeys = ["w","ArrowUp"];
    var downkeys = ["s","ArrowDown"];
    var leftkeys = ["a","ArrowLeft"];
    var rightkeys = ["d","ArrowRight"];
    var rotLkeys = ["q"];
    var rotRkeys = ["e"];

    var xChange = 0;
    var yChange = 0;
    
    // Vertical Movement
    for (let i = 0; i < upkeys.length; i++) {
        if (keysPressed.includes(upkeys[i])) {
            i = upkeys.length;
            xChange += player.moveSpeed*Math.cos((player.direction + 0.25)*2*Math.PI);
            yChange += player.moveSpeed*Math.sin((player.direction + 0.25)*2*Math.PI);
        }
    }
    for (let i = 0; i < downkeys.length; i++) {
        if (keysPressed.includes(downkeys[i])) {
            i = downkeys.length;
            xChange -= player.moveSpeed*Math.cos((player.direction + 0.25)*2*Math.PI);
            yChange -= player.moveSpeed*Math.sin((player.direction + 0.25)*2*Math.PI);
        }
    }

    // Horizontal Movement
    for (let i = 0; i < leftkeys.length; i++) {
        if (keysPressed.includes(leftkeys[i])) {
            i = leftkeys.length;
            xChange += player.moveSpeed*Math.cos((player.direction)*2*Math.PI);
            yChange += player.moveSpeed*Math.sin((player.direction)*2*Math.PI);
        }
    }
    for (let i = 0; i < rightkeys.length; i++) {
        if (keysPressed.includes(rightkeys[i])) {
            i = rightkeys.length;
            xChange -= player.moveSpeed*Math.cos((player.direction)*2*Math.PI);
            yChange -= player.moveSpeed*Math.sin((player.direction)*2*Math.PI);
        }
    }

    if (xChange != 0 || yChange != 0) {
        if (xChange != 0 && yChange != 0) {
            xChange *= Math.SQRT1_2;
            yChange *= Math.SQRT1_2;
        }
        player.xPosition += xChange;
        player.yPosition += yChange;
        document.getElementById("mapContainer").style.transform = "translate(" + player.xPosition + "px, " + player.yPosition + "px)";
    }

    // Rotational Movement
    for (let i = 0; i < rotLkeys.length; i++) {
        if (keysPressed.includes(rotLkeys[i])) {
            i = rotLkeys.length;
            player.direction -= player.rotationSpeed;
        }
    }
    for (let i = 0; i < rotRkeys.length; i++) {
        if (keysPressed.includes(rotRkeys[i])) {
            i = rotRkeys.length;
            player.direction += player.rotationSpeed;
        }
    }
    
    document.getElementById("mapRotate").style.transform = "rotate(" + -1*player.direction + "turn)";
}
function turnOnMovement(player) {
    turnOnKeyCheck();
    setInterval(function() { move(player) }, TICKSPEED);
}