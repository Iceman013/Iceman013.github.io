function makeWidget(website) {
    var base = document.createElement("a");
    base.classList.add("widget");
    base.href = website.getAddress();

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
                ico.style.backgroundColor = tagList[j].getColor();
            }
        }

        ibase.appendChild(ico);
    }
    base.appendChild(ibase);
    return base;
}
function tagSort(sites, tags) {
    var output = [];
    for (let i = 0; i < sites.length; i++) {
        var pass = true;
        for (let j = 0; j < tags.length; j++) {
            if (!sites[i].getTags().includes(tags[j])) {
                pass = false;
            }
        }
        if (pass) {
            output[output.length] = sites[i];
        }
    }
    return output;
}
function sortSites(sites, sort) {
    for (let i = 0; i < sites.length - 1; i++) {
        for (let j = i + 1; j < sites.length; j++) {
            if (!sort.compare(sites[i], sites[j])) {
                var temp = sites[i];
                sites[i] = sites[j];
                sites[j] = temp;
            }
        }
    }
    return sites;
}
function makeWidgets() {
    var base = document.getElementById("menu");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    var tags = [];
    for (let i = 0; i < tagList.length; i++) {
        if (document.getElementById("tag_" + i.toString()).classList.contains("selected")) {
            tags.push(tagList[i].getName());
        }
    }
    var acceptSites = tagSort(siteList, tags);
    var sort = sortList[0];
    for (let i = 0; i < sortList.length; i++) {
        if (sortList[i].getName() == document.getElementById("sorts").value) {
            sort = sortList[i];
        }
    }
    acceptSites = sortSites(acceptSites, sort);

    var children = [];
    for (let i = 0; i < acceptSites.length; i++) {
        children[i] = makeWidget(acceptSites[i]);
    }
    pack(base, children);
}
function makeSidebar() {
    var sortBase = document.getElementById("sorts");
    for (let i = 0; i < sortList.length; i++) {
        var elem = document.createElement("option");
        elem.value = sortList[i].getName();
        elem.innerHTML = sortList[i].getName();
        sortBase.appendChild(elem);
    }
    sortBase.onchange = function() {
        makeWidgets();
    }

    var tagBase = document.getElementById("tags");
    for (let i = 0; i < tagList.length; i++) {
        var elem = document.createElement("button");
        elem.value = false;
        elem.id = "tag_" + i;
        elem.innerHTML = tagList[i].getName();

        elem.onclick = function() {
            this.value = !this.value;
            this.classList.toggle("selected")
            makeWidgets();
        }
        tagBase.appendChild(elem);
    }
}
function start() {
    makeSidebar();
    makeWidgets();
    disableDrag();
}
start();