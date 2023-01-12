function Widget(element) {
    this.element = element;
    document.getElementById("menu").appendChild(element);
    element.childNodes[1].style.maxWidth = 2*element.firstChild.clientWidth + "px";
    this.width = element.clientWidth + 40;
    this.height = element.clientHeight + 30;
    document.getElementById("menu").removeChild(document.getElementById("menu").lastChild);
    
    this.isContainer = function() {
        return false;
    }
    this.getWidth = function() {
        return this.width;
    }
    this.getHeight = function() {
        return this.height;
    }
    this.create = function(type) {
        if (type) {
            element.classList.add("hboxc");
        } else {
            element.classList.add("vboxc");
        }
        return element;
    }
}