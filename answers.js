function Answer(name, price) {
    this.name = name.toUpperCase();
    this.price = price;
    this.length = function() {
        return this.name.length;
    }
    this.fix = function() {
        while (this.price.length < mp) {
            this.price = "0" + this.price;
        }
    }
    this.whole = function() {
        return this.name + this.price;
    }
    this.start = function() {
        this.fix();
    }
    this.start();
}