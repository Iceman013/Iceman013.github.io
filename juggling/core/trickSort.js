function getDomainBase() {
    var output = "";
    var address = window.location.href;
    if (address.includes("iceman013")) {
        var search = "juggling";
        output = address.substring(0, address.indexOf(search)) + search + "/";
    } else if (address.includes(".uga.edu")) {
        var search = ".uga.edu"
        output = address.substring(0, address.indexOf(search)) + search + "/";
    } else {
        output = address;
    }
    return output;
}
function getInnerDomain() {
    return window.location.href.substring(getDomainBase().length);
}
function startSort() {
    for (let i = 0; i < TRICKS.length; i++) {
        for (let j = 1; j < TRICKS.length - i; j++) {
            if (TRICKS[j].difficulty < TRICKS[j - 1].difficulty) {
                var temp = TRICKS[j];
                TRICKS[j] = TRICKS[j - 1];
                TRICKS[j - 1] = temp;
            }
        }
    }
}
startSort();

function addTricks() {
    var base = document.getElementById("list");
    for (let i = 0; i < TRICKS.length; i++) {
        var elem = document.createElement("div");
        elem.id = "sort_" + i;
        elem.href = getDomainBase() + "pages/" + TRICKS[i].link;
        var body = document.createElement("div");
        body.classList.add("trick");
        elem.appendChild(body);

        var head = document.createElement("a");
        head.classList.add("name");
        head.href = getDomainBase() + "pages/" + TRICKS[i].link;
        head.innerHTML = TRICKS[i].name;
        body.appendChild(head);

        var sec = document.createElement("div");

        var tag = document.createElement("b");
        tag.classList.add("colon");
        tag.innerHTML = "Tags:";
        sec.appendChild(tag);

        var types = document.createElement("div");
        types.classList.add("taglist");
        for (let j = 0; j < TRICKS[i].tags.length; j++) {
            var ty = document.createElement("text");
            ty.classList.add("tag");
            ty.innerHTML = TRICKS[i].tags[j];
            types.appendChild(ty);
        }
        sec.appendChild(types);
        body.appendChild(sec);

        var sec = document.createElement("div");

        var tag = document.createElement("b");
        tag.classList.add("colon");
        tag.innerHTML = "Prerequisites:";
        sec.appendChild(tag);

        var prt = document.createElement("div");
        prt.classList.add("taglist");
        for (let j = 0; j < TRICKS[i].prereqs.length; j++) {
            var ty = document.createElement("text");
            ty.classList.add("tag");
            ty.innerHTML = TRICKS[i].prereqs[j];
            prt.appendChild(ty);
        }
        sec.appendChild(prt);
        
        body.appendChild(sec);

        var des = document.createElement("p");
        des.classList.add("description");
        des.innerHTML = TRICKS[i].description;
        body.appendChild(des);

        base.appendChild(elem);
    }
    var nope = document.createElement("p");
    nope.classList.add("empty");
    nope.id = "emptyCase";
    nope.innerHTML = "Sorry. Couldn't find anything matching your filters.";
    nope.style.display = "none";
    base.appendChild(nope);
}
var sorts = [];
function sortBy() {
    var empty = true;
    document.getElementById("emptyCase").style.display = "none";
    for (let i = 0; i < TRICKS.length; i++) {
        document.getElementById("sort_" + i).style.display = "block";
        for (let j = 0; j < sorts.length; j++) {
            if (sorts[j] != "All") {
                if (!TRICKS[i].tags.includes(sorts[j])) {
                    document.getElementById("sort_" + i).style.display = "none";
                    j = sorts.length;
                }
            }
        }
        if (document.getElementById("sort_" + i).style.display == "block") {
            empty = false;
        }
    }
    if (empty) {
        document.getElementById("emptyCase").style.display = "block";
    }
}
function addSubFilters() {
    var base = document.getElementById("filters");
    while (base.childNodes.length > 1) {
        base.removeChild(base.childNodes[1]);
    }
    if (document.getElementById("selector").value != "All") {
        var target = 0;
        for (let i = 0; i < FILTERS.length; i++) {
            if (FILTERS[i].name == document.getElementById("selector").value) {
                target = i;
            }
        }

        for (let i = 0; i < FILTERS[target].subfilters.length; i++) {
            var elem = document.createElement("select");
            var opt = document.createElement("option");
            opt.value = "All";
            opt.innerHTML = "All";
            elem.appendChild(opt);
            for (let j = 0; j < FILTERS[target].subfilters[i].length; j++) {
                var opt = document.createElement("option");
                opt.value = FILTERS[target].subfilters[i][j];
                opt.innerHTML = FILTERS[target].subfilters[i][j];
                elem.appendChild(opt);
            }
            const imp = FILTERS[target].subfilters[i];
            elem.onchange = function(event) {
                for (let k = 0; k < imp.length; k++) {
                    if (sorts.includes(imp[k])) {
                        sorts.splice(sorts.indexOf(imp[k]),1);
                    }
                }
                sorts.push(event.srcElement.value);
                sortBy();
            }
            base.appendChild(elem);
        }
    }
}
function addFilters() {
    var base = document.getElementById("filters");
    var elem = document.createElement("select");
    elem.id = "selector";
    var opt = document.createElement("option");
    opt.value = "All";
    opt.innerHTML = "All";
    elem.appendChild(opt);
    for (let i = 0; i < FILTERS.length; i++) {
        var opt = document.createElement("option");
        opt.value = FILTERS[i].name;
        opt.innerHTML = FILTERS[i].name;
        
        elem.appendChild(opt);
    }
    elem.onchange = function(event) {
        addSubFilters();
        sorts.splice(0,sorts.length);
        sorts.push(event.srcElement.value);
        sortBy();
    }
    base.appendChild(elem);
}
addTricks();
addFilters();