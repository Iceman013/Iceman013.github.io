function makeMenu() {
    var base = document.getElementsByClassName("menu")[0];

    var open = document.createElement("button");
    var menico = document.createElement("i");
    menico.id = "menuicon";
    menico.innerHTML = "menu";
    menico.classList.add("topIcon");
    menico.classList.add("material-symbols-outlined");
    open.appendChild(menico);

    open.classList.add("open");
    open.id = "menu";
    base.appendChild(open);

    var tricks = document.createElement("button");
    tricks.innerHTML = "Tricks";
    tricks.classList.add("open");
    tricks.onclick = function() {
        window.open(getDomainBase() + "list","_self");
    }
    base.appendChild(tricks);

    var feed = document.createElement("button");
    var menico = document.createElement("i");
    menico.id = "menuicon";
    menico.innerHTML = "flag";
    menico.classList.add("topIcon");
    menico.classList.add("material-symbols-outlined");
    feed.appendChild(menico);
    feed.classList.add("open");
    feed.onclick = function() {
        window.open(getDomainBase() + "message","_self");
    }
    base.appendChild(feed);

    var div = document.createElement("div");
    div.classList.add("menuPages");
    div.id = "pages";
    if (window.innerWidth <= 600) {
        div.style.width = window.innerWidth + "px";
    }
    base.appendChild(div);
}
makeMenu();

var menu = document.getElementById("menu");

menu.onclick = function() {
    var content = document.getElementById("pages");
    var icon = document.getElementById("menuicon");
    if (icon.innerHTML == "menu") {
        icon.innerHTML = "close";
        content.style.display = "grid";
    } else {
        icon.innerHTML = "menu";
        content.style.display = "none";
    }
}

function makePages() {
    var base = document.getElementById("pages");
    for (let i = 0; i < PAGES.length; i++) {
        var elem = document.createElement("a");
        elem.href = getDomainBase() + PAGES[i].link;
        if (window.location.href.includes("Iceman013") && PAGES[i].link == "") {
            elem.href = getDomainBase() + "index.html";
        }        
        if (getInnerDomain() == PAGES[i].link + "/" || (getInnerDomain() == "" && PAGES[i].link == "")) {
            elem.classList.add("current");
        }

        var insi = document.createElement("div");
        insi.classList.add("pageOpt");
        elem.appendChild(insi);

        var icon = document.createElement("i");
        icon.classList.add("material-symbols-outlined");
        icon.classList.add("sideIcon");
        icon.innerHTML = PAGES[i].icon;
        insi.appendChild(icon);

        var name = document.createElement("text");
        name.innerHTML = PAGES[i].name;
        insi.appendChild(name);

        base.appendChild(elem);
    }
}
makePages();