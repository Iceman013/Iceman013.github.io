function Answer(name, price) {
    this.name = name;
    this.price = price;
    this.length = function() {
        return this.name.length;
    }
}