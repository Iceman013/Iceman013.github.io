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

    upg = document.createElement("div");
    var a = 0;
    while (a < upgrades.length) {
        if (upgrades[a].isBuildable(item)) {
            upg = makeUpgradeBox(upg, upgrades[a], item);
        }
        a = a + 1;
    }
    document.getElementById("sidebar").appendChild(upg);
}
function makeUpgradeBox(element, upgrade, square) {
    box = document.createElement("div");
    box.classList.add("individual");
    upgImg = document.createElement("img");
    upgImg.src = upgrade.image;
    box.appendChild(upgImg);

    title = document.createElement("object");
    title.innerHTML = upgrade.name;
    box.appendChild(title);

    description = document.createElement("text");
    description.innerHTML = upgrade.description;
    box.appendChild(description);

    box.appendChild(showResources(upgrade, "Cost", 2));
    box.appendChild(showResources(upgrade, "Production", 3));
    box.appendChild(showResources(upgrade, "Multipliers", 4));

    button = document.createElement("button");
    button.innerHTML = "Purchase";
    button.addEventListener("click", function() {
        purchase(square, upgrade);
    });
    box.appendChild(button);
    box.appendChild(document.createElement("br"));

    element.appendChild(box);
    element.classList.add("upgrades");
    return element;
}
function showResources(upgrade, name, loc) {
    element = document.createElement("div");
    title = document.createElement("text");
    title.innerHTML = name;
    element.appendChild(title);
    var a = 0;
    while (a < upgrade.costs.length) {
        if (upgrade.costs[a][loc] != 0) {
            reses = document.createElement("div");
            reses.classList.add("resource");
            imag = document.createElement("img");
            imag.src = upgrade.costs[a][1];
            reses.appendChild(imag);
            price = document.createElement("text");
            price.innerHTML = upgrade.costs[a][0] + ": " + upgrade.costs[a][loc];
            reses.appendChild(price);
            element.appendChild(reses);
        }
        a = a + 1;
    }
    return element;
}
function purchase(square, upgrade) {
    var bought = true;
    var a = 0;
    while (a < cash.length) {
        if (cash[a] < upgrade.costs[a][2]) {
            bought = false;
        }
        a = a + 1;
    }
    if (bought) {
        a = 0;
        while (a < cash.length) {
            cash[a] = cash[a] - upgrade.costs[a][2];
            a = a + 1;
        }
        square.setBuilding(upgrade.name);
        document.getElementById(square.getId()).src = square.getTop();
        select(square);
        showCash("cash", cash, "Materials");
        showCash("prod", prod, "Production");
        produce(false);
    }
}
function produce(todo) {
    var prod = new Array(cash.length);
    prod.fill(0);
    var boos = new Array(cash.length);
    boos.fill(1);
    var a = 0;
    var b = 0;
    while (a < map.length) {
        b = 0;
        while (b < map[a].length) {
            var tempa = map[a][b].produce();
            var tempb = map[a][b].boost();
            var c = 0;
            while (c < tempa.length) {
                prod[c] = prod[c] + tempa[c];
                boos[c] = boos[c] + tempb[c];
                c = c + 1;
            }
            b = b + 1;
        }
        a = a + 1;
    }
    a = 0;
    while (a < prod.length) {
        prod[a] = prod[a]*boos[a];
        if (todo) {
            cash[a] = cash[a] + prod[a];
        }
        a = a + 1;
    }
    showCash("cash", cash, "Materials");
    showCash("prod", prod, "Production");
    showCash("boos", boos, "Multipliers");
}
function showCash(id, arr, named) {
    document.getElementById(id).textContent = "";
    title = document.createElement("b");
    title.innerHTML = named;
    document.getElementById(id).appendChild(title);
    var a = 0;
    while (a < arr.length) {
        group = document.createElement("div");
        imag = document.createElement("img");
        imag.src = upgrades[0].costs[a][1];
        li = document.createElement("text");
        li.innerHTML = arr[a];
        if (id == "prod") {
            li.innerHTML = "+" + arr[a];
            li.style.color = "rgb(0,255,0)";
        }
        group.appendChild(imag);
        group.appendChild(li);
        document.getElementById(id).appendChild(group);
        document.getElementById(id).appendChild(document.createElement("br"));
        a = a + 1;
    }
}
var turn = 0;
function next() {
    turn = turn + 1;
    produce(true);
    produce(false);
    document.getElementById("turn").innerHTML = turn;
    console.log(turn);
}