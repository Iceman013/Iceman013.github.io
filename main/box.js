function Box(children, orientation) {
    this.children = children;
    this.orientation = orientation;

    this.getWidth = function() {
        if (this.children.length == 0) {
            console.log(this);
            return 0;
        }
        if (this.children.length == 1) {
            return this.children[0].getWidth();
        }
        if (this.orientation) {
            return this.children[0].getWidth() + this.children[1].getWidth();
        } else {
            return Math.max(this.children[0].getWidth(), this.children[1].getWidth());
        }
    }
    this.getHeight = function() {
        if (this.children.length == 0) {
            console.log(this);
            return 0;
        }
        if (this.children.length == 1) {
            return this.children[0].getHeight();
        }
        if (this.orientation) {
            return Math.max(this.children[0].getHeight(), this.children[1].getHeight());
        } else {
            return this.children[0].getHeight() + this.children[1].getHeight();
        }
    }
    this.getSize = function() {
        return this.getWidth()*this.getHeight();
    }

    this.create = function(type) {
        var base = document.createElement("div");
        if (type) {
            base.classList.add("hboxc");
        } else {
            base.classList.add("vboxc");
        }
        for (let i = 0; i < this.children.length; i ++) {
            
            base.appendChild(this.children[i].create(this.orientation));
        }
        return base;
    }
}