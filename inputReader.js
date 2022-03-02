const sEvent = new Event("submit");
function stateIncludes(array, goal) {
    var out = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == goal) {
            out = true;
        }
    }
    return out;
}

function Guess(length, element) {
    this.value = "";
    this.price = "";
    this.length = length;
    this.edit = false;
    this.element = element;

    this.addLetter = function(input) {
        input = input.toUpperCase();
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (letters.includes(input)) {
            if (this.value.length < this.length) {
                this.value += input;
            }
        }
        if (input == "BACKSPACE") {
            this.value = this.value.substring(0, this.value.length - 1);
        }
    }
    this.addNumber = function(input) {
        input = input.toUpperCase();
        var numbers = "0123456789";
        if (numbers.includes(input)) {
            if (this.price.length < mp) {
                this.price += input;
            }
        }
        if (this.price.length == mp - 3) {
            this.price += ".";
        }
        if (input == "BACKSPACE") {
            if (this.price.length > 0) {
                if (this.price.length == 4) {
                    this.price = this.price.substring(0, this.price.length - 2);
                } else {
                    this.price = this.price.substring(0, this.price.length - 1);
                }
            } else {
                this.value = this.value.substring(0, this.value.length - 1);
            }
        }
    }
    
    this.getTile = function(input) {
        var tile = document.createElement("div");
        tile.classList.add("tile");
        if (input == "") {
            tile.classList.toggle("empty");
        } else {
            tile.innerHTML = input;
        }
        return tile;
    }
    this.getRow = function(base) {
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        var temp = this.value + this.price;
        for (let i = 0; i < this.length + mp; i++) {
            var letter;
            if (i == today.whole().length - 3) {
                letter = ".";
            } else {
                if (i < temp.length) {
                    letter = temp.substring(i, i+1);
                } else {
                    letter = "";
                }
            }
            var tile = this.getTile(letter);
            if (i == this.length) {
                tile.classList.toggle("breaker");
            }
            base.appendChild(tile);
        }
    }
    this.getShow = function(base) {
        while (base.firstChild) {
            base.removeChild(base.firstChild);
        }
        var temp = this.value + this.price;
        var letet = [];
        for (let i = 0; i < today.whole().length; i++) {
            if (today.whole().substring(i, i+1) != temp.substring(i, i+1)) {
                letet.push(today.whole().substring(i, i+1));
            }
        }
        for (let i = 0; i < this.length + mp; i++) {
            var letter = temp.substring(i, i+1);
            var tile = this.getTile(letter);
            var des = "incorrect";
            if (stateIncludes(letet, letter)) {
                des = "yellow";
                letet.splice(letet.indexOf(letter), 1);
            }
            if (today.whole().substring(i, i+1) == letter) {
                des = "correct";
            }
            document.getElementById(letter).classList.add(des);
            tile.classList.toggle(des);
            if (i == this.length) {
                tile.classList.toggle("breaker");
            }
            base.appendChild(tile);
        }
    }

    this.submit = function() {
        if (this.value.length == this.length && this.price.length == mp) {
            this.edit = false;
            this.getShow(this.element);
            if (this.value + this.price == today.whole()) {
                window.dispatchEvent(new Event("win"));
            } else {
                window.dispatchEvent(new Event("submit"));
            }
        }
    }

    this.add = function(input) {
        if (this.edit) {
            if (this.value.length + this.price.length < this.length) {
                this.addLetter(input);
            } else {
                this.addNumber(input);
            }
            this.getRow(this.element);
            if (input == "Enter") {
                this.submit();
            }
        }
    }

    this.turnOn = function() {
        this.edit = true;
        this.add("NULL");
    }
    this.start = function() {
        this.turnOn();
        this.edit = false;
    }
    this.start();
}