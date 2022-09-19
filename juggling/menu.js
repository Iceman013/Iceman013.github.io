function makeMenu() {
    var base = document.getElementsByClassName("menu")[0];

    var open = document.createElement("button");
    open.innerHTML = "Menu";
    open.classList.add("open");
    open.id = "menu";
    base.appendChild(open);

    var div = document.createElement("div");
    div.classList.add("menuPages");
    div.id = "pages";
    base.appendChild(div);

    var search = document.createElement("p");
    search.innerHTML = "Search";
    base.appendChild(search);
}
makeMenu();

var menu = document.getElementById("menu");

menu.onclick = function() {
    var content = document.getElementById("pages");
    if (menu.innerHTML == "Menu") {
        menu.innerHTML = "Close";
        pages.style.display = "block";
    } else {
        menu.innerHTML = "Menu";
        pages.style.display = "none";
    }
}

function makePages() {
    var base = document.getElementById("pages");
    for (let i = 0; i < PAGES.length; i++) {
        var elem = document.createElement("a");
        elem.href = PAGES[i].link;
        
        var name = document.createElement("p");
        name.innerHTML = PAGES[i].name;
        elem.appendChild(name);

        base.appendChild(elem);
    }
}
makePages();