function Box(children, orientation, max) {
    this.children = children;
    this.orientation = orientation;
    this.max = max;

    this.isContainer = function() {
        return true;
    }
    this.getWidth = function() {
        var width = 0;
        for (let i = 0; i < this.children.length; i++) {
            if (this.orientation) {
                width += this.children[i].getWidth();
            } else {
                width = Math.max(width, this.children[i].getWidth());
            }
        }
        return width;
    }
    this.getHeight = function() {
        var height = 0;
        for (let i = 0; i < this.children.length; i++) {
            if (this.orientation) {
                height = Math.max(height, this.children[i].getHeight());
            } else {
                height += this.children[i].getHeight();
            }
        }
        return height;
    }
    this.getSize = function() {
        return this.getWidth()*this.getHeight();
    }

    this.create = function(type) {
        var base = document.createElement("div");
        if (type) {
            base.style.maxWidth = this.max + "px";
            base.classList.add("hboxc");
        } else {
            base.style.maxHeight = this.max + "px";
            base.classList.add("vboxc");
        }
        for (let i = 0; i < this.children.length; i ++) {
            
            base.appendChild(this.children[i].create(this.orientation));
        }
        return base;
    }
}