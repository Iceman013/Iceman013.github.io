function Tag(name, color, image) {
    this.name = name;
    this.color = color;
    this.image = image;

    this.getName = function() {
        return this.name;
    }
    this.getColor = function() {
        return this.color;
    }
    this.getImage = function() {
        return this.image;
    }
}