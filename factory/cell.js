var localId = 0;
function Cell() {
    this.id = localId;
    localId++;
    this.getId = function() {
        return this.id.toString();
    }
}