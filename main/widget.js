function Widget(name, func) {
    this.name = name;
    this.func = func;

    this.makeWidget = function(website) {
        let out = this.func(website);
        out.classList.add(this.name);
        website.element = out;
        return out;
    }
}