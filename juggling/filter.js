function Filter(name) {
    this.name = name;

    this.subNames = [];
    this.subFilters = [];
    this.repeats = [];

    this.addSub = function(filname, filter, repeat) {
        this.subNames.push(filname);
        this.subFilters.push(filter);
        this.repeats.push(repeat);
    }
}