function select(item) {
    document.getElementById("sidebar").textContent = "";
    titles = document.createElement("div");
    titles.classList.add("head");

    image = document.createElement("object");
    image.style.backgroundImage = item.getImage();
    imag = document.createElement("img");
    imag.src = item.getTop();
    image.appendChild(imag);
    titles.appendChild(image);

    height = document.createElement("text");
    height.innerHTML = "Land Type: " + item.getHType();
    res = document.createElement("text");
    res.innerHTML = "Resource Type: " + item.getResource();
    bui = document.createElement("text");
    bui.innerHTML = "Building: " + item.getBuilding();
    titles.appendChild(height);
    titles.appendChild(document.createElement("br"));
    titles.appendChild(res);
    titles.appendChild(document.createElement("br"));
    titles.appendChild(bui);

    document.getElementById("sidebar").appendChild(titles);

    upgList = document.createElement("div");
    upg = document.createElement("div");
    var a = 0;
    while (a < upgrades.length) {
        if (upgrades[a].isBuildable(item)) {
            upg = makeUpgradeBox(upg, a, item);
        }
        a = a + 1;
    }
    upgList.appendChild(upg);
    document.getElementById("sidebar").appendChild(upgList);
}
function makeUpgradeBox(element, number, square) {
    upgImg = document.createElement("img");
    upgImg.src = upgrades[number].image;
    element.appendChild(upgImg);

    title = document.createElement("object");
    title.innerHTML = upgrades[number].name;
    element.appendChild(title);

    description = document.createElement("text");
    description.innerHTML = "Ooh. I'm a thing. I do stuff.";
    element.appendChild(description);

    button = document.createElement("button");
    button.innerHTML = "Purchase";
    button.addEventListener("click", function() {
        square.setBuilding(upgrades[number].name);
        document.getElementById(square.id).src = square.getTop();
        select(square);
    });
    element.appendChild(button);

    element.classList.add("upgrades");
    return element;
}