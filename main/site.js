function Site(name, tags, address, description) {
    this.name = name;
    this.tags = tags;
    this.address = address;
    this.description = description;

    this.getName = function() {
        return this.name;
    }
    this.getTags = function() {
        return this.tags;
    }
    this.getAddress = function() {
        return this.address;
    }
    this.getDescription = function() {
        return this.description;
    }
}