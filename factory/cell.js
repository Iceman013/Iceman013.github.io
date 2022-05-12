var localId = 0;
function Cell() {
    this.id = localId;
    localId++;
    this.ground = resources.ground[1];
    this.ore = resources.ore[0];
    this.getId = function() {
        return this.id.toString();
    }
    this.setGround = function(ground) {
        this.ground = ground;
    }
    this.getGround = function() {
        return this.ground;
    }
    this.setOre = function(ore) {
        this.ore = ore;
    }
    this.getOre = function() {
        return this.ore;
    }
}