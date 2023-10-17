var wid = widgetList[0];

function tagSort(sites, tags) {
    let output = [];
    for (let i = 0; i < sites.length; i++) {
        let pass = true;
        for (let j = 0; j < tags.length; j++) {
            if (!sites[i].tags.includes(tags[j])) {
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
            tags.push(tagList[i].name);
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
        wid.makeWidget(siteList[i]);
        base.appendChild(siteList[i].element);
    }

    sortWidgets();
}

function makeSidebar() {
    let sortBase = document.getElementById("sorts");
    for (let i = 0; i < sortList.length; i++) {
        let elem = document.createElement("option");
        elem.value = sortList[i].name;
        elem.innerHTML = sortList[i].name;
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
        elem.innerHTML = tagList[i].name;

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