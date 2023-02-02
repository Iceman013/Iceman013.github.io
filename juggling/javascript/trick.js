function Trick(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.alts = [];
    this.link = "";
    this.description = "No description available.";
    this.tags = [];
    this.prereqs = ["None"];

    this.addAlt = function(... input) {
        for (let i = 0; i < input.length; i++) {
            this.alts.push(input[i]);
        }
    }
    this.setLink = function(input) {
        this.link = input;
    }
    this.setDescription = function(input) {
        this.description = input;
    }
    this.addTags = function(... input) {
        for (let i = 0; i < input.length; i++) {
            this.tags.push(input[i]);
        }
    }
    this.addPrereqs = function(... input) {
        if (this.prereqs = ["None"]) {
            this.prereqs = [];
        }
        for (let i = 0; i < input.length; i++) {
            this.prereqs.push(input[i]);
        }
    }
}