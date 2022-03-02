function addDividers() {
    var tags = [];
    for (let i = 0; i < siteList.length; i++) {
        if (!tags.includes(siteList[i].getTag())) {
            tags.push(siteList[i].getTag());
        }
    }
    for (let i = 0; i < tags.length; i++) {
        const base = document.createElement("div");
        base.classList.add("tag");

        const label = document.createElement("div");
        label.id = tags[i];
        label.innerHTML = tags[i];
        label.classList.add("label");
        base.appendChild(label);
        
        const sub = document.createElement("div");
        sub.id = tags[i] + "Content";
        sub.style.display = "none";
        base.appendChild(sub);

        base.addEventListener("mouseenter", function() {
            sub.style.display = "block";
        });
        base.addEventListener("mouseleave", function() {
            sub.style.display = "none";
        });

        const part = document.createElement("div");
        part.style.width = (100/tags.length) + "%";
        part.classList.add("partition");
        part.appendChild(base);
        document.getElementById("menu").appendChild(part);
    }
}
function addLinks() {
    for (let i = 0; i < siteList.length; i++) {
        var base = document.createElement("p");
        base.innerHTML = siteList[i].getName();
        base.classList.add("link");
        clickSite(base, siteList[i].getAddress());
        document.getElementById(siteList[i].getTag() + "Content").appendChild(base);
    }
}
function disableDrag() {
    var list = document.getElementsByTagName("*");
    for (let i = 0; i < list.length; i++) {
        list[i].draggable = false;
    }
}
function start() {
    addDividers();
    addLinks();
    disableDrag();
}
start();