function Square() {
    this.altitude = 0;
    this.hType = "undefined";
    this.resource = "empty";
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
        if (this.hType != "oceanWater" && this.hType != "shallowWater") {
            this.resource = resource;
        }
    }
    this.getTop = function() {
        var out = "";
        var typ = this.getResource();
        if (typ == "empty") {
            out = "";
        } else if (typ == "forest") {
            out = "Images/Trees.png";
        } else if (typ == "rock") {
            out = "Images/Rocks.png";
        }
        return out;
    }
    this.toString = function() {
        return this.getAltitude().toFixed(3);
    }
    this.setHType = function() {
        var out = "undefined";
        var hei = this.getAltitude();
        if (hei < 0.025) {
            out = "oceanWater";
        } else if (hei < 0.1) {
            out = "shallowWater";
        } else if (hei < 0.3) {
            out = "sand";
        } else if (hei < 0.6) {
            out = "meadow";
        } else if (hei < 0.925) {
            out = "ground";
        } else {
            out = "highGround";
        }
        this.hType = out;
    }
    this.getImage = function() {
        var ht = this.hType;
        var out = "";
        if (ht == "oceanWater") {
            out = "url('Images/OceanWater.png')";
        } else if (ht == "shallowWater") {
            out = "url('Images/ShallowWater.png')";
        } else if (ht == "sand") {
            out = "url('Images/Sand.png')";
        } else if (ht == "meadow") {
            out = "url('Images/Meadow.png')";
        } else if (ht == "ground") {
            out = "url('Images/Ground.png')";
        } else if (ht == "highGround") {
            out = "url('Images/HighGround.png')";
        }
        return out;
    }
}