function makeWidget(website) {
    var base = document.createElement("div");
    base.classList.add("widget");

    var name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = website.getName();
    base.appendChild(name);

    var des = document.createElement("div");
    des.classList.add("description");
    des.innerHTML = website.getDescription();
    base.appendChild(des);

    var ibase = document.createElement("div");
    ibase.classList.add("icons");
    for (let i = 0; i < website.getTags().length; i++) {
        var ico = document.createElement("img");
        var image = website.getTags()[i];
        for (let j = 0; j < tagList.length; j++) {
            if (tagList[j].getName() == image) {
                ico.src = tagList[j].getImage();
            }
        }

        ibase.appendChild(ico);
    }
    base.appendChild(ibase);

    return base;
}
function makeWidgets() {
    var base = document.getElementById("menu");
    for (let i = 0; i < siteList.length; i++) {
        var wid = makeWidget(siteList[i]);
        base.appendChild(wid);
    }
}
function start() {
    makeWidgets();
    disableDrag();
}
start();