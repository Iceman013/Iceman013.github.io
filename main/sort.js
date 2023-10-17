function Sort(name, func) {
    this.name = name;
    this.func = func;
    
    this.compare = function(inpa, inpb) {
        return this.func(inpa, inpb);
    }
}