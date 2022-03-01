const today = answers[0];
const gameArea = document.getElementById("area");

gameArea.style.paddingLeft = ((16-today.length())*6) + "px";

function start() {
    const g = new Guess(today.length(), document.getElementById("demo"));
    g.turnOn();
    window.addEventListener("keydown", function(event) {
        g.add(event.key);
    });
}