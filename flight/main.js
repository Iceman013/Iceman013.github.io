var xPos = 0;
const TICK = 10;
const SPEED = 30;
var buttons = {};
var mouse = {
    "x": 0,
    "y": 0
};
const update = new Event("update");
window.addEventListener("keydown", function(event) {
    buttons[event.key] = true;
    window.dispatchEvent(update);
});
window.addEventListener("keyup", function(event) {
    buttons[event.key] = false;
    window.dispatchEvent(update);
});
window.addEventListener("mousemove", function(event) {
    mouse["x"] = event.clientX;
    mouse["y"] = event.clientY;
});
function getState() {
    if (buttons["a"]) {
        xPos += SPEED;
    }
    if (buttons["d"]) {
        xPos -= SPEED;
    }
    if (xPos > 5600) {
        xPos = 5600;
    }
    if (xPos < -4700) {
        xPos = -4700;
    }
}
function display() {
    this.document.getElementById("background").style.transform = "translate(" + xPos + "px)";
    var temp = "translate(" + (mouse["x"] - 100) + "px, " + (mouse["y"] - 100) + "px)";
    this.document.getElementById("cross").style.transform = temp;
}
var intervalId = window.setInterval(function() {
    tick();
}, TICK);
function tick() {
    getState();
    display();
}