function start() {
    var base = document.getElementById("player");
    for (let i = 0; i < SONGS.length; i++) {
        base.appendChild(makeAudioPlayer(SONGS[i]));
    }
}