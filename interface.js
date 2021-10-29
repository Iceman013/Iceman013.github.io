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
            upg = makeUpgradeBox(upg, upgrades[a], item);
        }
        a = a + 1;
    }
    upgList.appendChild(upg);
    document.getElementById("sidebar").appendChild(upgList);
}
function makeUpgradeBox(element, upgrade, square) {
    upgImg = document.createElement("img");
    upgImg.src = upgrade.image;
    element.appendChild(upgImg);

    title = document.createElement("object");
    title.innerHTML = upgrade.name;
    element.appendChild(title);

    description = document.createElement("text");
    description.innerHTML = upgrade.description;
    element.appendChild(description);

    cost = document.createElement("div");
    var a = 0;
    while (a < upgrade.costs.length) {
        if (upgrade.costs[a][1] != 0) {
            payment = document.createElement("div");
            payment.classList.add("cost");
            imag = document.createElement("img");
            imag.src = upgrade.costs[a][2];
            payment.appendChild(imag);
            price = document.createElement("text");
            price.innerHTML = upgrade.costs[a][0] + ": " + upgrade.costs[a][1];
            payment.appendChild(price);
            cost.appendChild(payment);
        }
        a = a + 1;
    }
    element.appendChild(cost);

    button = document.createElement("button");
    button.innerHTML = "Purchase";
    button.addEventListener("click", function() {
        purchase(square, upgrade);
    });
    element.appendChild(button);

    element.classList.add("upgrades");
    return element;
}
function purchase(square, upgrade) {
    var bought = true;
    var a = 0;
    while (a < cash.length) {
        if (cash[a] < upgrade.costs[a][1]) {
            bought = false;
        }
        a = a + 1;
    }
    if (bought) {
        a = 0;
        while (a < cash.length) {
            cash[a] = cash[a] - upgrade.costs[a][1];
            a = a + 1;
        }
        square.setBuilding(upgrade.name);
        document.getElementById(square.getId()).src = square.getTop();
        select(square);
        showCash("cash", cash);
        produce(false);
    }
}
function produce(todo) {
    var prod = new Array(cash.length);
    prod.fill(0);
    var a = 0;
    var b = 0;
    while (a < map.length) {
        b = 0;
        while (b < map[a].length) {
            var temp = map[a][b].produce();
            var c = 0;
            while (c < temp.length) {
                if (todo) {
                    cash[c] = cash[c] + temp[c];
                } else {
                    prod[c] = prod[c] + temp[c];
                }
                c = c + 1;
            }
            b = b + 1;
        }
        a = a + 1;
    }
    if (todo) {
        showCash("cash", cash);
    } else {
        showCash("prod", prod);
    }
}
function showCash(id, arr) {
    console.log(arr);
    document.getElementById(id).innerHTML = arr;
}
function next() {
    produce(true);
    produce(false);
}