function Rule(x, y, types) {
    this.x = x;
    this.y = y;
    this.types = types;
}
function Terrain(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.rules = [];
    this.addRules = function(multiRule) {
        this.rules.push(multiRule);
    }
}