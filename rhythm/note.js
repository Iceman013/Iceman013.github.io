function Note(time, key) {
    this.time = time;
    this.key = key;
    this.played = false;

    this.play = function() {
        this.played = true;
        addBlock(this.key);
    }
}