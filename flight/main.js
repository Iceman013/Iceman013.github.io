var angle = 0;
const TICK = 10;
var buttons = {};
const update = new Event("update");
window.addEventListener("keydown", function(event) {
    buttons[event.key] = true;
    window.dispatchEvent(update);
});
window.addEventListener("keyup", function(event) {
    buttons[event.key] = false;
    window.dispatchEvent(update);
});
function getState() {
    if (buttons["q"]) {
        angle++;
    }
    if (buttons["e"]) {
        angle--;
    }
}
function display() {
    this.document.getElementById("background").style.transform = "rotate(" + angle + "deg)";
}
var intervalId = window.setInterval(function() {
    tick();
}, TICK);
function tick() {
    getState();
    display();
}