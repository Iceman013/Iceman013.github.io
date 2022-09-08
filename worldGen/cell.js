function Cell() {
    this.imgType;
    this.base;
    this.type;
    this.typeName;

    this.setGround = function(input) {
        this.imgType = input;
        var terList = getTerrainList();
        this.type = terList[this.imgType][2];
        this.typeName = terList[this.imgType][3];
    }
}