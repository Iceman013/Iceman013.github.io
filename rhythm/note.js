function Note(time, key) {
    this.time = time;
    this.key = key;

    this.start = function() {
        const KEY = this.key;
        setTimeout(function() {
            addBlock(KEY);
        }, this.time);
    }
}