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
        elem.href = "https://iceman013.github.io/juggling/pages/" + TRICKS[i].link;
        var body = document.createElement("div");
        body.classList.add("trick");
        elem.appendChild(body);

        var head = document.createElement("a");
        head.classList.add("name");
        head.href = "https://iceman013.github.io/juggling/pages/" + TRICKS[i].link;
        head.innerHTML = TRICKS[i].name;
        body.appendChild(head);

        var sec = document.createElement("div");

        var tag = document.createElement("b");
        tag.classList.add("colon");
        tag.innerHTML = "Tags:";
        sec.appendChild(tag);

        var types = document.createElement("div");
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
}
var sorts = [];
function sortBy() {
    console.log(sorts);
    for (let i = 0; i < TRICKS.length; i++) {
        document.getElementById("sort_" + i).style.display = "block";
        for (let j = 0; j < sorts.length; j++) {
            if (!TRICKS[i].tags.includes(sorts[j])) {
                document.getElementById("sort_" + i).style.display = "none";
                j = sorts.length;
                console.log(document.getElementById("sort_" + i));
            }
        }
    }
}
function addFilters() {
    var base = document.getElementById("filters");
    for (let i = 0; i < FILTERS.length; i++) {
        var elem = document.createElement("label");
        elem.classList.add("label");
        elem.innerHTML = FILTERS[i];

        var che = document.createElement("input");
        che.type = "checkbox";
        che.value = FILTERS[i];
        elem.appendChild(che);
        che.onchange = function(event) {
            var q = sorts.indexOf(event.srcElement.value);
            if (q == -1) {
                sorts.push(event.srcElement.value);
            } else {
                sorts.splice(q, 1);
            }
            sortBy();
        }

        base.appendChild(elem);
    }
}
function fixify() {
    var h = document.getElementById("filters").clientHeight;
    var con = document.getElementsByClassName("content")[0];
    con.style.height = "calc(93vh - " + h + "px)";
    con.style.top = "calc(7vh + " + h + "px)";
}
addTricks();
addFilters();
fixify();
window.onresize = function() {
    fixify();
}