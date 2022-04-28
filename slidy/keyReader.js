var keys = {
    "w": 0,
    "a": 0,
    "s": 0,
    "d": 0
};
window.addEventListener("keydown", function(event) {
    keys[event.key] = 1;
    // console.log("Key on: " + event.key);
});
window.addEventListener("keyup", function(event) {
    keys[event.key] = 0;
    // console.log("Key off: " + event.key);
});