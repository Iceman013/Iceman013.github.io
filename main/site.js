function Site(name, tag, address) {
    this.name = name;
    this.tag = tag;
    this.address = address;

    this.getName = function() {
        return this.name;
    }
    this.getTag = function() {
        return this.tag;
    }
    this.getAddress = function() {
        return this.address;
    }
}