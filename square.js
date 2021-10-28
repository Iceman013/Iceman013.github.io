function Square() {
    this.altitude = 0;
    this.hType = "Undefined";
    this.resource = "Empty";
    this.building = "None";
    this.id = "";
    this.setId = function(id) {
        this.id = id;
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
        var out = "";
        var typ = this.getResource();
        if (this.getBuilding() != "None" && this.getResource() != "Empty") {
            typ = this.getBuilding();
        }
        if (typ == "Empty") {
            out = "Images/Blank.png";
        } else if (typ == "Forest") {
            out = "Images/Trees.png";
        } else if (typ == "Rock") {
            out = "Images/Rocks.png";
        } else if (typ == "Lumber Hut") {
            out = "Images/LumberHut.png"
        } else if (typ == "Mine") {
            out = "Images/Mine.gif"
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
            out = "url('Images/OceanWater.png')";
        } else if (ht == "Shallow Water") {
            out = "url('Images/ShallowWater.png')";
        } else if (ht == "Sand") {
            out = "url('Images/Sand.png')";
        } else if (ht == "Meadow") {
            out = "url('Images/Meadow.png')";
        } else if (ht == "Ground") {
            out = "url('Images/Ground.png')";
        } else if (ht == "High Ground") {
            out = "url('Images/HighGround.png')";
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