function President(number, name, vice, years, des, image) {
    this.number = number;
    this.name = name;
    this.vice = vice;
    this.years = years;
    this.des = des
    this.image = image;

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
                return this.image[Math.floor(Math.random()*this.image.length)];
            case 6:
                return "BREAK";
        }
    }
    this.getType = function(point) {
        switch(point) {
            case 0:
                return "Text";
            case 1:
                return "Text";
            case 2:
                return "Text";
            case 3:
                return "Text";
            case 4:
                return "Text";
            case 5:
                return "Image";
            case 6:
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
                return "Face";
            case 6:
                return "BREAK";
        }
    }
}