function Upgrade(name) {
    this.name = name;
    this.image = "";
    this.description = "";
    this.resource = new Array();
    this.previous = new Array();
    this.setImage = function(image) {
        this.image = image;
    }
    this.setDescription = function(description) {
        this.description = description;
    }
    this.addResource = function(type) {
        this.resource.push(type);
    }
    this.addPrevious = function(building) {
        this.previous.push(building);
    }
    this.isBuildable = function(square) {
        var res = false;
        var a = 0;
        while (a < this.resource.length && !res) {
            if (this.resource[a] == square.getResource()) {
                res = true;
            }
            a = a + 1;
        }
        var pre = false;
        a = 0;
        while (a < this.previous.length && !pre) {
            if (this.previous[a] == square.getBuilding()) {
                pre = true;
            }
            a = a + 1;
        }
        return res && pre;
    }
}