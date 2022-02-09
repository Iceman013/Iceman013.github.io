var intervalId = window.setInterval(function() {
    tick();
}, TICK);

function stop() {
    clearInterval(intervalId);
}

/* Tick function
 * All timing functions here
 */
function tick() {
    console.log("Tick");
    var a = 0;
    while (a < vats.length) {
        vats[a].tick();
        a = a + 1;
    }
    var elem = document.getElementById("supply");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    a = 0;
    while (a < paints.length) {
        var row = document.createElement("tr");
        row.style.backgroundColor = brighten(paints[a].rgb());
        var name = document.createElement("th");
        name.innerHTML = capitalize(paints[a].name);
        var supply = document.createElement("td");
        supply.innerHTML = paints[a].getValue();

        row.appendChild(name);
        row.appendChild(supply);
        elem.appendChild(row);
        a = a + 1;
    }
}