function Terrain(id, name, images, height) {
    this.id = id;
    this.name = name;
    this.tImages = images;
    this.images = [];
    this.height = height;

    this.handleImages = function() {
        var sum = 0;
        for (let i = 0; i < this.tImages.length; i++) {
            sum += this.tImages[i][1];
        }
        for (let i = 0; i < this.tImages.length; i++) {
            var out = [];
            for (let j = 0; j < imageList.length; j++) {
                if (this.tImages[i][0] == imageList[j].id) {
                    out[0] = imageList[j];
                    j = imageList.length;
                }
            }
            if (i == 0) {
                out[1] = this.tImages[i][1]/sum;
            } else {
                out[1] = this.images[i - 1][1] + this.tImages[i][1]/sum;
            }
            this.images.push(out);
        }
    }
    this.handleImages();

    this.getImage = function() {
        var r = Math.random();
        for (let i = 0; i < this.images.length; i++) {
            if (r < this.images[i][1]) {
                return this.images[i][0];
            }
        }
    }
}