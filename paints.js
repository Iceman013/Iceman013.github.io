var paints = [
    new paint("red", 1, 0, 0, 0, 0, 1),
    new paint("yellow", 0, 1, 0, 0, 0, 1),
    new paint("blue", 0, 0, 1, 0, 0, 1),
    new paint("white", 0, 0, 0, 1, 0, 1),
    new paint("black", 0, 0, 0, 0, 1, 1),
    new paint("orange", 1, 1, 0, 0, 0, 2),
    new paint("green", 0, 1, 1, 0, 0, 2),
    new paint("purple", 1, 0, 1, 0, 0, 2)
];

function paint(name, red, yellow, blue, white, black, price) {
    this.name = name;
    this.red = red;
    this.yellow = yellow;
    this.blue = blue;
    this.white = white;
    this.black = black;
    this.price = price;
    this.value = 0;
    this.rgb = function() {
        return colorize(this.red, this.yellow, this.blue, this.white, this.black);
    }
    this.increase = function(input) {
        this.value = this.value + input;
    }
    this.sellAll = function() {
        money = money + this.value*this.price;
        this.value = 0;
    }
    this.getValue = function() {
        return this.value;
    }
}
function table() {
    this.elem = document.getElementById("supply");
    this.values = [0];
    this.clear = function() {
        while (this.elem.firstChild) {
            this.elem.removeChild(this.elem.firstChild);
        }
    }
    this.build = function() {
        var a = 0;
        while (a < paints.length) {
            this.values[a] = paints[a].value;
            var row = document.createElement("tr");
            row.style.backgroundColor = brighten(paints[a].rgb());
            var name = document.createElement("th");
            name.innerHTML = capitalize(paints[a].name);
            var supply = document.createElement("td");
            supply.innerHTML = paints[a].getValue();
            var sbox = document.createElement("td");
            var seller = document.createElement("button");
            seller.innerHTML = "Sell All";
            const tempPaint = paints[a];
            seller.addEventListener("click", function() {
                tempPaint.sellAll();
            });
            sbox.appendChild(seller);

            row.appendChild(name);
            row.appendChild(supply);
            row.appendChild(sbox);
            this.elem.appendChild(row);
            a = a + 1;
        }
    }
    this.update = function() {
        var a = 0;
        var next = false;
        while (a < paints.length) {
            if (paints[a].value != this.values[a]) {
                next = true;
            }
            a = a + 1;
        }
        if (next) {
            this.clear();
            this.build();
        }
    }
}