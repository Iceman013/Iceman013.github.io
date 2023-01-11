function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.color;
    
    this.getWidth = function() {
        return this.width;
    }
    this.getHeight = function() {
        return this.height;
    }
    this.generateColor = function() {
        var r = Math.floor(256*Math.random());
        var g = Math.floor(256*Math.random());
        var b = Math.floor(256*Math.random());
        this.color = "rgb(" + r + "," + g + "," + b + ")";
    }
    this.create = function(type) {
        var base = document.createElement("div");
        if (type) {
            base.classList.add("hboxc");
        } else {
            base.classList.add("vboxc");
        }
        base.style.width = 100*this.getWidth() + "px";
        base.style.height = 100*this.getHeight() + "px";
        base.style.backgroundColor = this.color;
        return base;
    }
    this.generateColor();
}