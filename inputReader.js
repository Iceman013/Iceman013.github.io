function Guess() {
    this.value = "";
    this.price = "";
    this.length = today.length();
    this.edit = true;
    this.addLetter = function(input) {
        var letters = "abcdefghijklmnopqrstuvwxyz";
        if (letters.includes(input)) {
            if (this.value.length < this.length) {
                this.value += input;
            }
        }
    }
    this.addNumber = function(input) {
        var numbers = "0123456789.";
        if (numbers.includes(input)) {
            if (this.price.length < 5) {
                this.price += input;
            }
        }
    }
    this.submit = function() {
        console.log("Tried");
        if (this.value.length == this.length && this.price.length == 5) {
            console.log(this.value + ": $" + this.price);
        }
    }

    this.add = function(input) {
        this.addLetter(input);
        this.addNumber(input);
        if (input == "Enter") {
            this.submit();
        }
    }
}