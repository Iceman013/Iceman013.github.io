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
    var smeth = sortList[0];
    for (let i = 0; i < sortList.length; i++) {
        if (sort == sortList[i].getName()) {
            smeth = sortList[i];
        }
    }
    for (let i = 0; i < sites.length - 1; i++) {
        for (let j = i + 1; j < sites.length; j++) {
            if (!smeth.compare(sites[i], sites[j])) {
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
    var acceptSites = tagSort(siteList, tags);
    var sort = sortList[0].getName();
    acceptSites = sortSites(acceptSites, sort);

    var children = [];
    for (let i = 0; i < acceptSites.length; i++) {
        children[i] = makeWidget(acceptSites[i]);
    }
    for (let i = 0; i < children.length; i++) {
        base.appendChild(children[i]);
    }
}
function start() {
    makeWidgets();
    disableDrag();
}
start();