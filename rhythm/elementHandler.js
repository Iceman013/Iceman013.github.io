function makeAudioPlayer(item) {
    var listItem = document.createElement("div");
    listItem.classList.add("list-item");

    var start = document.createElement("button");
    start.classList.add("material-symbols-outlined");
    start.classList.add("chooser");
    start.innerHTML = "play_arrow";
    listItem.appendChild(start);

    var base = document.createElement("div");
    listItem.appendChild(base);

    var title = document.createElement("h3");
    title.innerHTML = item.name;
    base.appendChild(title);

    var artist = document.createElement("p");
    artist.innerHTML = item.artist;
    base.appendChild(artist);

    var audio = document.createElement("audio");
    audio.src = "songs/" + item.src;
    base.appendChild(audio);

    var playButton = document.createElement("button");
    playButton.classList.add("material-symbols-outlined");
    playButton.innerHTML = "play_arrow";
    base.appendChild(playButton);
    playButton.addEventListener("click", function() {
        audio.currentTime = 0;
        audio.play();
    });

    var stopButton = document.createElement("button");
    stopButton.classList.add("material-symbols-outlined");
    stopButton.innerHTML = "stop";
    base.appendChild(stopButton);
    stopButton.addEventListener("click", function() {
        audio.pause();
    });

    start.addEventListener("click", function() {
        prepAll(item);
    });

    return listItem;
}
function showSongs() {
    var base = document.getElementById("songList");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < SONGS.length; i++) {
        base.appendChild(makeAudioPlayer(SONGS[i]));
    }
}