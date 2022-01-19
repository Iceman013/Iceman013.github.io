function modct(size) {
    this.length = size;
    this.value = 0;
    this.increment = function() {
        this.value = this.value + 1;
    }
    this.getPosition = function(input) {
        var temp = this.value;
        var a = this.length;
        while (a >= input) {
            temp = temp%(Math.pow(3, a + 1));
            a = a - 1;
        }
        temp = temp - temp%(Math.pow(3, input));
        temp = Math.floor(temp/Math.pow(3, input));
        return temp;
    }
    this.running = function() {
        return this.value < Math.pow(3, this.length)
    }
}