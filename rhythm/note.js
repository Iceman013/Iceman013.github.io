function Note(time, key) {
    this.time = time;
    this.key = key;
    this.duration = 150;
    this.prepped = false;

    this.prep = function() {
        this.prepped = true;
        addPrep(this.key, INTROTIME, this.duration);
    }
}