function Solution(set, clues) {
    this.set = set;
    this.clues = clues;
    this.getClue = function(number, vertical) {
        var out = number;
        if (vertical) {
            out += 4;
        }
        return clues[out];
    }
}