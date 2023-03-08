function makeAudioPlayer(item) {
    // List item
    var listItem = document.createElement("div");
    listItem.classList.add("list-item");

    // Button Section
    var buttons = document.createElement("div");
    buttons.classList.add("controls");
    listItem.appendChild(buttons);

    // Description Section
    var base = document.createElement("div");
    base.classList.add("description");
    listItem.appendChild(base);

    // The audio
    var audio = document.createElement("audio");
    audio.src = "songs/" + item.src;
    listItem.appendChild(audio);

    // Button Section
    var start = document.createElement("button");
    start.classList.add("material-symbols-outlined");
    start.classList.add("chooser");
    start.innerHTML = "play_circle";
    buttons.appendChild(start);

    var smaller = document.createElement("div");
    smaller.classList.add("play-controls");
    buttons.appendChild(smaller);

    var playButton = document.createElement("button");
    playButton.classList.add("material-symbols-outlined");
    playButton.innerHTML = "play_arrow";
    smaller.appendChild(playButton);
    playButton.addEventListener("click", function() {
        audio.play();
    });

    var pauseButton = document.createElement("button");
    pauseButton.classList.add("material-symbols-outlined");
    pauseButton.innerHTML = "pause";
    smaller.appendChild(pauseButton);
    pauseButton.addEventListener("click", function() {
        audio.pause();
    });

    var stopButton = document.createElement("button");
    stopButton.classList.add("material-symbols-outlined");
    stopButton.innerHTML = "stop";
    smaller.appendChild(stopButton);
    stopButton.addEventListener("click", function() {
        audio.pause();
        audio.currentTime = 0;
    });

    // Description
    var title = document.createElement("h3");
    title.innerHTML = item.name;
    base.appendChild(title);

    var artist = document.createElement("p");
    artist.innerHTML = item.artist;
    base.appendChild(artist);

    // Start the game
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