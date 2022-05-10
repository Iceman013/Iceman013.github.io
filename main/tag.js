function Tag(name, image) {
    this.name = name;
    this.image = image;

    this.getName = function() {
        return this.name;
    }
    this.getImage = function() {
        return this.image;
    }
}