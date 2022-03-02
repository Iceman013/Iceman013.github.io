function Entity(x, y) {
    this.x = x;
    this.y = y;
    this.element;

    this.setElement = function(element) {
        this.element = element;
        this.element.style.transform = "translateY(" + this.y + "px)";
    }
}