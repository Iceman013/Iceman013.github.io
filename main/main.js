function makeWidget(website) {
    let base = document.createElement("a");
    base.classList.add("widget");
    base.href = website.getAddress();
    base.style.backgroundImage = "url('" + website.getImage() + "')";

    let content = document.createElement("div");
    content.classList.add("widgetContent");
    base.appendChild(content);

    let des = document.createElement("div");
    des.classList.add("description");
    des.innerHTML = website.getDescription();
    content.appendChild(des);

    let ibase = document.createElement("div");
    ibase.classList.add("icons");
    for (let i = 0; i < website.getTags().length; i++) {
        let ico = document.createElement("img");
        let image = website.getTags()[i];
        for (let j = 0; j < tagList.length; j++) {
            if (tagList[j].getName() == image) {
                ico.src = tagList[j].getImage();
                ico.style.backgroundColor = tagList[j].getColor();
            }
        }

        ibase.appendChild(ico);
    }
    content.appendChild(ibase);

    let name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = website.getName();
    base.appendChild(name);

    website.element = base;
}

function tagSort(sites, tags) {
    let output = [];
    for (let i = 0; i < sites.length; i++) {
        let pass = true;
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
                let temp = sites[i];
                sites[i] = sites[j];
                sites[j] = temp;
            }
        }
    }
    return sites;
}

function sortWidgets() {
    let tags = [];
    for (let i = 0; i < tagList.length; i++) {
        if (document.getElementById("tag_" + i.toString()).classList.contains("selected")) {
            tags.push(tagList[i].getName());
        }
    }
    for (let i = 0; i < siteList.length; i++) {
        let show = true;
        for (let j = 0; j < tags.length; j++) {
            if (!siteList[i].tags.includes(tags[j])) {
                show = false;
                j = tags.length;
            }
        }
        if (show) {
            if (siteList[i].element.classList.contains("hidden")) {
                siteList[i].element.classList.remove("hidden");
            }
        } else {
            if (!siteList[i].element.classList.contains("hidden")) {
                siteList[i].element.classList.add("hidden");
            }
        }
    }
}

function makeWidgets() {
    let base = document.getElementById("menu");
    base.innerHTML = "";

    let sortElem = document.getElementById("sorts");
    let sort;
    for (let i = 0 ; i < sortList.length; i++) {
        if (sortElem.value == sortList[i].name) {
            sort = sortList[i];
        }
    }
    siteList = sortSites(siteList, sort);

    for (let i = 0; i < siteList.length; i++) {
        makeWidget(siteList[i]);
        base.appendChild(siteList[i].element);
    }

    sortWidgets();
}

function makeSidebar() {
    let sortBase = document.getElementById("sorts");
    for (let i = 0; i < sortList.length; i++) {
        let elem = document.createElement("option");
        elem.value = sortList[i].getName();
        elem.innerHTML = sortList[i].getName();
        sortBase.appendChild(elem);
    }
    sortBase.onchange = function() {
        makeWidgets();
    }

    let tagBase = document.getElementById("tags");
    for (let i = 0; i < tagList.length; i++) {
        let elem = document.createElement("button");
        elem.value = false;
        elem.id = "tag_" + i;
        elem.innerHTML = tagList[i].getName();

        elem.onclick = function() {
            this.value = !this.value;
            this.classList.toggle("selected")
            sortWidgets();
        }
        tagBase.appendChild(elem);
    }
}

function start() {
    makeSidebar();
    makeWidgets();
    disableDrag();
}

window.onload = function() {
    start();
}