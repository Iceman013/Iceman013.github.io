const today = answers[Math.floor((new Date() - new Date(2022, 2, 1))/(24*60*60*1000))];

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
    if (attempt < 6) {
        setGuesser(guesses[attempt]);
        attempt++;
    } else {
        document.getElementById("wStat").innerHTML = "You lose";
        document.getElementById("correct").innerHTML = today.name + " $" + today.price;
        openModal("stats", true);
    }
});

function start() {
    for (let i = 0; i < maxG; i++) {
        var base = document.createElement("div");
        base.classList.add("row");
        guesses[i] = new Guess(today.length(), base);
        gameArea.appendChild(base);
    }
    window.dispatchEvent(sEvent);
    window.addEventListener("win", function() {
        document.getElementById("wStat").innerHTML = "YOU WON!";
        openModal("stats", true);
    });
}