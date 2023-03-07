function makeAudioPlayer(item) {
    var base = document.createElement("div");

    var title = document.createElement("h3");
    title.innerHTML = item.name;
    base.appendChild(title);

    var artist = document.createElement("p");
    artist.innerHTML = item.artist;
    base.appendChild(artist);

    var audio = document.createElement("audio");
    audio.src = "songs/" + item.src;
    audio.controls = true;
    base.appendChild(audio);

    return base;
}
function showSongs() {
    var base = document.getElementById("songList");
    for (let i = 0; i < SONGS.length; i++) {
        base.appendChild(makeAudioPlayer(SONGS[i]));
    }
}