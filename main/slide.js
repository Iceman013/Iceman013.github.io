function Slide(source, description) {
    this.source = source;
    this.description = description;
    this.base;
    this.create = function() {
        this.base = document.createElement("div");
        this.base.classList.add("slide");

        var img = document.createElement("img");
        img.src = this.source;
        this.base.appendChild(img);
        this.base.appendChild(document.createElement("br"));

        var des = document.createElement("text")
        des.innerHTML = this.description;
        this.base.appendChild(des);
    }
    this.getBase = function() {
        return this.base;
    }

    this.create();
}