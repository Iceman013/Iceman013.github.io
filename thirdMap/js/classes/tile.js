function Tile(x, y, terrain) {
    this.x = x;
    this.y = y;
    this.terrain = terrain;
    this.terrainImage = this.terrain.getImage();
    this.element = document.createElement("div");
    
    this.updateElement = function() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }

        var background = document.createElement("img");
        this.element.appendChild(background);
        background.src = this.terrainImage.src;
    }
    this.updateElement();
}