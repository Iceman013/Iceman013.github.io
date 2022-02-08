var intervalId = window.setInterval(function() {
    tick();
    var a = 0;
    while (a < vats.length) {
        vats[a].tick();
        a = a + 1;
    }
}, TICK);

function stop() {
    clearInterval(intervalId);
}

/* Tick function
 * All timing functions here
 */
function tick() {
    console.log("Tick");
    // oh boy
}