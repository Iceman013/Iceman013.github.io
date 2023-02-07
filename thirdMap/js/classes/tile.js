function Tile(x, y, terrain) {
    this.x = x;
    this.y = y;
    this.terrain = terrain;
    this.resource;
    this.resourceImage;
    this.terrainImage = this.terrain.getImage();
    this.element = document.createElement("div");

    this.makeElement = function() {
        const X = this.x;
        const Y = this.y;
        this.element.classList.add("tile");
        this.element.addEventListener("click", function() {
            const event = new CustomEvent("tileSelect", {
                detail: {
                    x: X,
                    y: Y
            }});
            document.body.dispatchEvent(event);
        })
    }
    this.makeElement();

    this.setResource = function(resource) {
        this.resource = resource;
        this.resourceImage = this.resource.getImage();
    }
    this.updateElement = function() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }

        var deepest;

        var background = document.createElement("div");
        this.element.appendChild(background);
        background.classList.add("tileImage");
        background.style.backgroundImage = "url('" + this.terrainImage.src + "')";
        deepest = background;

        if (this.resource != null) {
            var res = document.createElement("div");
            deepest.appendChild(res);
            res.classList.add("tileImage");
            res.style.backgroundImage = "url('" + this.resourceImage.src + "')";
            deepest = res;
        }
    }
}