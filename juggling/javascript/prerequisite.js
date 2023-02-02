function addPre() {
    var here = getLastDomain();
    var index = 0;
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[i].link == here) {
            index = i;
        }
    }
    var pres = [];
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[index].prereqs.includes(TRICKS[i].name)) {
            pres.push(TRICKS[i]);
        }
    }
    var base = document.getElementById("prereqs");
    for (let i = 0; i < pres.length; i++) {
        var dot = document.createElement("li");
        var lin = document.createElement("a");
        lin.href = getDomainBase() + "tricks/" + pres[i].link;
        lin.innerHTML = pres[i].name;
        dot.appendChild(lin);
        base.appendChild(dot);
    }
}
function addDes() {
    var base = document.getElementById("description");
    var here = getLastDomain();
    var index = 0;
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[i].link == here) {
            index = i;
        }
    }
    base.innerHTML = TRICKS[index].description;
}

addPre();
addDes();