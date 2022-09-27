function getDomainBase() {
    return window.location.href.substring(0, window.location.href.indexOf("juggling")) + "juggling/";
}
function getInnerDomain() {
    return window.location.href.substring(getDomainBase().length);
}
function makeMenu() {
    var base = document.getElementsByClassName("menu")[0];

    var open = document.createElement("button");
    open.innerHTML = "Menu";
    open.classList.add("open");
    open.id = "menu";
    base.appendChild(open);

    var tricks = document.createElement("button");
    tricks.innerHTML = "Tricks";
    tricks.classList.add("open");
    tricks.onclick = function() {
        window.open(getDomainBase() + "core/fullList.html","_self");
    }
    base.appendChild(tricks);

    var feed = document.createElement("button");
    feed.innerHTML = "Feedback";
    feed.classList.add("open");
    feed.classList.add("toRight");
    feed.onclick = function() {
        window.open(getDomainBase() + "core/message.html","_self");
    }
    base.appendChild(feed);

    var div = document.createElement("div");
    div.classList.add("menuPages");
    div.id = "pages";
    if (window.innerWidth <= 500) {
        div.style.width = window.innerWidth + "px";
        console.log(window.innerWidth);
    }
    base.appendChild(div);
}
makeMenu();

var menu = document.getElementById("menu");

menu.onclick = function() {
    var content = document.getElementById("pages");
    if (menu.innerHTML == "Menu") {
        menu.innerHTML = "Close";
        content.style.display = "block";
    } else {
        menu.innerHTML = "Menu";
        content.style.display = "none";
    }
}

function makePages() {
    var base = document.getElementById("pages");
    for (let i = 0; i < PAGES.length; i++) {
        var elem = document.createElement("a");
        elem.href = getDomainBase() + PAGES[i].link;
        
        if (getInnerDomain() == PAGES[i].link) {
            elem.classList.add("current");
        }
        var icon = document.createElement("i");
        icon.classList.add("material-symbols-outlined");
        icon.classList.add("icon");
        icon.innerHTML = PAGES[i].icon;
        elem.appendChild(icon);

        var name = document.createElement("text");
        name.innerHTML = PAGES[i].name;
        elem.appendChild(name);

        base.appendChild(elem);
    }
}
makePages();