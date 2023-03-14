function Note(time, key) {
    this.time = time;
    this.key = key;
    this.duration = 150;
    this.prepTime = 1000;
    this.prepped = false;

    this.prep = function() {
        this.prepped = true;
        addPrep(this.key, this.prepTime, this.duration);
    }
}