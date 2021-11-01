function Upgrade(name) {
    this.name = name;
    this.image = "Images/WorkInProgress.gif";
    this.description = "Work in progess";
    this.resource = new Array();
    this.previous = new Array();
    this.heights = new Array();
    this.costs = [
        [
            "Wood",
            "Images/Wood.gif",
            0,
            0,
            0
        ],
        [
            "Rock",
            "Images/Rock.gif",
            0,
            0,
            0
        ],
        [
            "Clay",
            "Images/Clay.gif",
            0,
            0,
            0
        ],
        [
            "Glass",
            "Images/Glass.gif",
            0,
            0,
            0
        ],
        [
            "Concrete",
            "Images/Concrete.gif",
            0,
            0,
            0
        ]
    ];
    this.setCost = function(type, price) {
        var a = 0;
        while (a < this.costs.length) {
            if (type == this.costs[a][0]) {
                this.costs[a][2] = price;
            }
            a = a + 1;
        }
    }
    this.setProduction = function(type, quantity) {
        var a = 0;
        while (a < this.costs.length) {
            if (type == this.costs[a][0]) {
                this.costs[a][3] = quantity;
            }
            a = a + 1;
        }
    }
    this.setBoost = function(type, amount) {
        var a = 0;
        while (a < this.costs.length) {
            if (type == this.costs[a][0]) {
                this.costs[a][4] = this.costs[a][4] + amount;
            }
            a = a + 1;
        }
    }
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
    this.addHeight = function(height) {
        this.heights.push(height);
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
        var lan = true;
        if (this.heights.length != 0) {
            lan = false;
            a = 0;
            while (a < this.heights.length) {
                if (this.heights[a] == square.getHType()) {
                    lan = true;
                }
                a = a + 1;
            }
        }
        return res && pre && lan;
    }
}