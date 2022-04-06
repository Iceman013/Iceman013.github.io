function Square() {
    this.altitude = 0;
    this.hType = "Undefined";
    this.resource = "Empty";
    this.building = "None";
    this.xpos = 0;
    this.ypos = 0;
    this.produce = function() {
        var out = new Array();
        var a = 0;
        while (a < upgrades.length) {
            if (upgrades[a].name == this.getBuilding()) {
                var b = 0;
                while (b < upgrades[a].costs.length) {
                    out.push(upgrades[a].costs[b][3]);
                    b = b + 1;
                }
            }
            a = a + 1;
        }
        return out;
    }
    this.boost = function() {
        var out = new Array();
        var a = 0;
        while (a < upgrades.length) {
            if (upgrades[a].name == this.getBuilding()) {
                var b = 0;
                while (b < upgrades[a].costs.length) {
                    out.push(upgrades[a].costs[b][4]);
                    b = b + 1;
                }
            }
            a = a + 1;
        }
        return out;
    }
    this.setId = function(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }
    this.getId = function() {
        return "(" + this.xpos + "," + this.ypos + ")";
    }
    this.getAltitude = function() {
        return this.altitude;
    }
    this.setAltitude = function (input) {
        this.altitude = input;
        this.setHType();
    }
    this.getResource = function() {
        return this.resource;
    }
    this.setResource = function(resource) {
        if (tryResource(this, resource) && this.getResource() == "Empty") {
            this.resource = resource;
            return true;
        }
        return false;
    }
    this.getBuilding = function() {
        return this.building;
    }
    this.setBuilding = function(building) {
        this.building = building;
    }
    this.getTop = function() {
        var out = "Images/Blank.png";
        if (this.getBuilding() == "None") {
            var typ = this.getResource();
            if (typ == "Empty") {
                out = "Images/Blank.png"
            } else if (typ == "Forest") {
                out = "Images/Trees.gif";
            } else if (typ == "Rock") {
                out = "Images/Rocks.gif";
            }
        } else {
            var a = 0;
            var typ = this.getBuilding();
            while (a < upgrades.length) {
                if (typ == upgrades[a].name) {
                    out = upgrades[a].image;
                }
                a = a + 1;
            }
        }
        return out;
    }
    this.toString = function() {
        return this.getAltitude().toFixed(3);
    }
    this.setHType = function() {
        var out = "Undefined";
        var hei = this.getAltitude();
        if (hei < 0.025) {
            out = "Ocean Water";
        } else if (hei < 0.1) {
            out = "Shallow Water";
        } else if (hei < 0.3) {
            out = "Sand";
        } else if (hei < 0.6) {
            out = "Meadow";
        } else if (hei < 0.925) {
            out = "Ground";
        } else {
            out = "High Ground";
        }
        this.hType = out;
    }
    this.getHType = function() {
        return this.hType;
    }
    this.getImage = function() {
        var ht = this.hType;
        var out = "";
        if (ht == "Ocean Water") {
            out = "url('Images/OceanWater.gif')";
        } else if (ht == "Shallow Water") {
            out = "url('Images/ShallowWater.gif')";
        } else if (ht == "Sand") {
            out = "url('Images/Sand.gif')";
        } else if (ht == "Meadow") {
            out = "url('Images/Meadow.gif')";
        } else if (ht == "Ground") {
            out = "url('Images/Ground.gif')";
        } else if (ht == "High Ground") {
            out = "url('Images/HighGround.gif')";
        }
        return out;
    }
}
function tryResource(square, resource) {
    var out = true;
    if (resource == "Forest") {
        if (square.getHType() == "Ocean Water") {
            out = false;
        } else if (square.getHType() == "Shallow Water") {
            out = false;
        } else if (square.getHType() == "Sand") {
            out = false;
        }
    } else if (resource == "Rock") {
        if (square.getHType() == "Ocean Water") {
            out = false;
        } else if (square.getHType() == "Shallow Water") {
            out = false;
        }
    }
    return out;
}