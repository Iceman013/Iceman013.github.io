var internalID = 0;
function Jam(name, file, volume, type, tag) {
    this.name = name;
    this.file = file;
    this.volume = volume;
    this.type = type;
    this.tag = tag;
    this.id = internalID;
    internalID++;
}