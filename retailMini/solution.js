function Solution(set, clues) {
    this.set = set;
    this.clues = clues;
    this.getClue = function(number, vertical) {
        var out = number - 1;
        if (vertical) {
            out += 4;
        }
        return clues[out];
    }
}