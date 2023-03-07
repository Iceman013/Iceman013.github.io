var SONGS = [];
function addSong(json) {
    SONGS.push(json);
}
function loadSonglist() {
    for (let i = 0; i < SONGLIST.length; i++) {
        fetch("./songs/" + SONGLIST[i])
            .then((response) => response.json())
            .then((json) => addSong(json));
    }
}
loadSonglist();