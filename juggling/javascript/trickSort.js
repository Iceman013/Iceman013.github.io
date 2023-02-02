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
        head.href = getDomainBase() + "/tricks/" + TRICKS[i].link;
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
function addButton(name) {
    var makeButton = false;
    var breakButton = false;
    if (sorts.includes(name)) {
        breakButton = true;
        sorts.splice(sorts.indexOf(name), 1);
    } else {
        makeButton = true;
        sorts.push(name);
    }
    if (makeButton) {
        var elem = document.createElement("button");
        elem.classList.add("clicker");
        elem.innerHTML = name;
        elem.value = name;
        elem.onclick = function(event) {
            addButton(event.srcElement.value);
        }
        document.getElementById("chosen").appendChild(elem);
        var goal;
        for (let i = 0; i < FILTERS.length; i++) {
            for (let j = 0; j < FILTERS[i].subFilters.length; j++) {
                if (FILTERS[i].subFilters[j].includes(name)) {
                    goal = FILTERS[i].subFilters[j];
                    i = FILTERS.length - 1;
                    j = FILTERS[i].length;
                }
            }
        }
        for (let i = 0; i < sorts.length; i++) {
            if (goal.includes(sorts[i]) && sorts[i] != name) {
                addButton(sorts[i]);
                i = sorts.length;
            }
        }
    }
    if (breakButton) {
        var base = document.getElementById("chosen");
        for (let i = 0; i < base.childNodes.length; i++) {
            if (base.childNodes[i].value == name) {
                base.removeChild(base.childNodes[i]);
                i = base.childNodes.length;
            }
        }
    }
    sortBy();
}
function addSubFilters() {
    var base = document.getElementById("addFilter");
    while (base.childNodes.length > 0) {
        base.removeChild(base.childNodes[0]);
    }
    var other = document.getElementById("chosen");
    while (other.childNodes.length > 0) {
        other.removeChild(other.childNodes[0]);
    }
    var defa = document.createElement("option");
    defa.value = "";
    defa.disabled = true;
    defa.selected = true;
    defa.innerHTML = "Add filters";
    base.appendChild(defa);
    if (document.getElementById("selector").value != "All") {
        var target = 0;
        for (let i = 0; i < FILTERS.length; i++) {
            if (FILTERS[i].name == document.getElementById("selector").value) {
                target = i;
            }
        }
        for (let i = 0; i < FILTERS[target].subNames.length; i++) {
            var elem = document.createElement("optgroup");
            elem.label = FILTERS[target].subNames[i];
            var opt = document.createElement("option");
            for (let j = 0; j < FILTERS[target].subFilters[i].length; j++) {
                var opt = document.createElement("option");
                opt.value = FILTERS[target].subFilters[i][j];
                opt.innerHTML = FILTERS[target].subFilters[i][j];
                elem.appendChild(opt);
            }
            base.appendChild(elem);
        }
    }
    base.onchange = function(event) {
        addButton(event.srcElement.value);
    }
}
function addFilters() {
    var elem = document.getElementById("selector");
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
    var defa = document.createElement("option");
    defa.value = "";
    defa.disabled = true;
    defa.selected = true;
    defa.innerHTML = "Add filters";
    document.getElementById("addFilter").appendChild(defa);
}
addTricks();
addFilters();