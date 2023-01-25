var keysPressed = [];
var cellStyleLocation;

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
function findCellStyle() {
    var cssSheetName = "mapFormat";
    var tagGoal = ".mapContainer img";
    var sheetList = document.styleSheets;
    var rightSheet;
    for (let i = 0; i < sheetList.length; i++) {
        if (sheetList[i].href.includes(cssSheetName)) {
            rightSheet = sheetList[i];
            i = sheetList.length;
        }
    }
    for (let i = 0; i < rightSheet.cssRules.length; i++) {
        if (rightSheet.cssRules[i].selectorText == tagGoal) {
            cellStyleLocation = rightSheet.cssRules[i];
            i = rightSheet.cssRules.length;
        }
    }
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
        cellStyleLocation.style.transform = "translate(" + player.xPosition + "px, " + player.yPosition + "px)";
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

    
    document.getElementById("mapContainer").style.transform =  "rotate(" + -1*player.direction + "turn)";
}
function turnOnMovement(player) {
    turnOnKeyCheck();
    findCellStyle();
    setInterval(function() { move(player) }, TICKSPEED);
}