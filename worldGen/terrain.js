function Rule(types, locations) {
    this.types = types;
    this.locations = locations;
}
function Terrain(type, id, name, img) {
    this.type = type;
    this.id = id;
    this.name = name;
    this.img = img;
    this.rules = [];
    this.addRule = function(newRule) {
        this.rules.push(newRule);
    }
}