var SONGS = [];
function addSong(json) {
    SONGS.push(json);
}
function loadSonglist() {
    function doubleCheck() {
        if (SONGS.length == SONGLIST.length) {
            showSongs();
        }
    }
    for (let i = 0; i < SONGLIST.length; i++) {
        fetch("./songs/" + SONGLIST[i])
            .then((response) => response.json())
            .then((json) => addSong(json))
            .then(doubleCheck);
    }
}
loadSonglist();