const TICKSPEED = 10;
var keysPressed = [];
var cellStyleLocation;
var PlayerXPosition = 0;
var PlayerYPosition = 0;
var PlayerDirection = 0;

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
function move() {
    var upkeys = ["w","ArrowUp"];
    var downkeys = ["s","ArrowDown"];
    var leftkeys = ["a","ArrowLeft"];
    var rightkeys = ["d","ArrowRight"];
    var rotLkeys = ["q"];
    var rotRkeys = ["e"];
    var moveSpeed = 4;
    var rotSpeed = 0.0025;
    
    // Vertical Movement
    for (let i = 0; i < upkeys.length; i++) {
        if (keysPressed.includes(upkeys[i])) {
            i = upkeys.length;
            PlayerXPosition += moveSpeed*Math.cos((PlayerDirection + 0.25)*2*Math.PI);
            PlayerYPosition += moveSpeed*Math.sin((PlayerDirection + 0.25)*2*Math.PI);
        }
    }
    for (let i = 0; i < downkeys.length; i++) {
        if (keysPressed.includes(downkeys[i])) {
            i = downkeys.length;
            PlayerXPosition -= moveSpeed*Math.cos((PlayerDirection + 0.25)*2*Math.PI);
            PlayerYPosition -= moveSpeed*Math.sin((PlayerDirection + 0.25)*2*Math.PI);
        }
    }

    // Horizontal Movement
    for (let i = 0; i < leftkeys.length; i++) {
        if (keysPressed.includes(leftkeys[i])) {
            i = leftkeys.length;
            PlayerXPosition += moveSpeed*Math.cos((PlayerDirection)*2*Math.PI);
            PlayerYPosition += moveSpeed*Math.sin((PlayerDirection)*2*Math.PI);
        }
    }
    for (let i = 0; i < rightkeys.length; i++) {
        if (keysPressed.includes(rightkeys[i])) {
            i = rightkeys.length;
            PlayerXPosition -= moveSpeed*Math.cos((PlayerDirection)*2*Math.PI);
            PlayerYPosition -= moveSpeed*Math.sin((PlayerDirection)*2*Math.PI);
        }
    }

    // Rotational Movement
    for (let i = 0; i < rotLkeys.length; i++) {
        if (keysPressed.includes(rotLkeys[i])) {
            i = rotLkeys.length;
            PlayerDirection -= rotSpeed;
        }
    }
    for (let i = 0; i < rotRkeys.length; i++) {
        if (keysPressed.includes(rotRkeys[i])) {
            i = rotRkeys.length;
            PlayerDirection += rotSpeed;
        }
    }

    cellStyleLocation.style.transform = "translate(" + PlayerXPosition + "px, " + PlayerYPosition + "px)";
    document.getElementById("mapContainer").style.transform =  "rotate(" + -1*PlayerDirection + "turn)";
}
function turnOnMovement() {
    turnOnKeyCheck();
    findCellStyle();
    setInterval(move, TICKSPEED);
}