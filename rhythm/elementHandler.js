function makeAudioPlayer(item) {
    var base = document.createElement("audio");
    base.src = "songs/" + item.src;
    base.controls = true;
    return base;
}