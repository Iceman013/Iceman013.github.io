var keys = {};
window.addEventListener("keydown", function(event) {
    keys[event.key] = true;
    // console.log("Key on: " + event.key);
});
window.addEventListener("keyup", function(event) {
    keys[event.key] = false;
    // console.log("Key off: " + event.key);
});