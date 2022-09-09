function Cell() {
    this.base;
    this.terrain = null;
    this.resource = null;
    this.resourceImg = null;

    this.setGround = function(input) {
        this.terrain = input;
    }
    this.setResource = function(input) {
        this.resource = input;
        var resList = getResourceList();
        var posIn;
        for (let i = 0; i < resList.length; i++) {
            if (resList[i].id == this.resource) {
                posIn = i;
            }
        }
        this.resourceImg = resList[posIn].images[Math.floor(resList[posIn].images.length*Math.random())];
        var img = document.createElement("img");
        img.classList.add("resource");
        img.src = this.resourceImg;
        this.base.insertBefore(img, this.base.firstChild);
    }
}