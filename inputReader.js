const sEvent = new Event("submit");
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
        if (this.price.length == mp - 3) {
            if (input == ".") {
                this.price += ".";
            }
        } else {
            if (numbers.includes(input)) {
                if (this.price.length < mp) {
                    this.price += input;
                }
            }
        }
        if (input == "BACKSPACE") {
            if (this.price.length > 0) {
                this.price = this.price.substring(0, this.price.length - 1);
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
            if (i < temp.length) {
                letter = temp.substring(i, i+1);
            } else {
                letter = "";
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
        for (let i = 0; i < this.length + mp; i++) {
            var letter = temp.substring(i, i+1);
            var tile = this.getTile(letter);
            var des = "incorrect";
            if (today.whole().includes(letter)) {
                des = "yellow";
            }
            if (today.whole().substring(i, i+1) == letter) {
                des = "correct";
            }
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
            window.dispatchEvent(sEvent);
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