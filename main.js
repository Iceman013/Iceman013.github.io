const today = answers[0];
const gameArea = document.getElementById("area");
const guesses = [];

gameArea.style.paddingLeft = ((16-today.length())*6) + "px";

var attempt = 0;

function setGuesser(guesser) {
    const g = guesser;
    g.turnOn();
    updateKeys(g);
    window.addEventListener("keydown", function(event) {
        g.add(event.key);
    });
}

window.addEventListener("submit", function(event) {
    setGuesser(guesses[attempt]);
    attempt++;
});

function start() {
    for (let i = 0; i < maxG; i++) {
        var base = document.createElement("div");
        base.classList.add("row");
        guesses[i] = new Guess(today.length(), base);
        gameArea.appendChild(base);
    }
    window.dispatchEvent(sEvent);
}