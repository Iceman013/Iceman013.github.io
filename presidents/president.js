function President(number, name, vice, years, des) {
    this.number = number;
    this.name = name;
    this.vice = vice;
    this.years = years;
    this.des = des

    this.getData = function(point) {
        switch(point) {
            case 0:
                return this.number;
            case 1:
                return this.name;
            case 2:
                return this.vice;
            case 3:
                return this.years;
            case 4:
                return this.des;
            case 5:
                return "BREAK";
        }
    }
    this.getName = function(point) {
        switch(point) {
            case 0:
                return "Number";
            case 1:
                return "Name";
            case 2:
                return "Vice President";
            case 3:
                return "Time";
            case 4:
                return "Description";
            case 5:
                return "BREAK";
        }
    }
}