function Site(name, tags, address, image, description) {
    this.name = name;
    this.tags = tags;
    this.address = address;
    this.image = image;
    this.description = description;
    this.element = null;

    this.getName = function() {
        return this.name;
    }
    this.getTags = function() {
        return this.tags;
    }
    this.getAddress = function() {
        return this.address;
    }
    this.getImage = function() {
        return this.image;
    }
    this.getDescription = function() {
        return this.description;
    }
}