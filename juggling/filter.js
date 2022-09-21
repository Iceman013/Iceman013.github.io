function Filter(name) {
    this.name = name;

    this.subfilters = [];

    this.addSubs = function(... filts) {
        this.subfilters = filts;
    }
}