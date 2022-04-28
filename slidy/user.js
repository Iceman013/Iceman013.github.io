const VELOCITY = 0.01*0.1;
const VISCOSITY = 0.98;
function User() {
    this.x = 0;
    this.y = 0;
    this.xv = 0;
    this.yv = 0;

    // Directions
    this.right = function() {
        this.xv += VELOCITY;
    }
    this.down = function() {
        this.yv -= VELOCITY;
    }
    this.left = function() {
        this.xv -= VELOCITY;
    }
    this.up = function() {
        this.yv += VELOCITY;
    }
    this.downRight = function() {
        this.xv += Math.SQRT1_2*VELOCITY;
        this.yv -= Math.SQRT1_2*VELOCITY;
    }
    this.downLeft = function() {
        this.xv -= Math.SQRT1_2*VELOCITY;
        this.yv -= Math.SQRT1_2*VELOCITY;
    }
    this.upLeft = function() {
        this.xv -= Math.SQRT1_2*VELOCITY;
        this.yv += Math.SQRT1_2*VELOCITY;
    }
    this.upRight = function() {
        this.xv += Math.SQRT1_2*VELOCITY;
        this.yv += Math.SQRT1_2*VELOCITY;
    }

    this.keypress = function(keycode) {
        if (keycode == "0001") {
            this.right();
        } else if (keycode == "0010") {
            this.down();
        } else if (keycode == "0100") {
            this.left();
        } else if (keycode == "1000") {
            this.up();
        } else if (keycode == "1011") {
            this.right();
        } else if (keycode == "0111") {
            this.down();
        } else if (keycode == "1110") {
            this.left();
        } else if (keycode == "1101") {
            this.up();
        } else if (keycode == "0011") {
            this.downRight();
        } else if (keycode == "0110") {
            this.downLeft();
        } else if (keycode == "1001") {
            this.upRight();
        } else if (keycode == "1100") {
            this.upLeft();
        }
    }

    this.tick = function() {
        this.xv = this.xv*VISCOSITY;
        this.yv = this.yv*VISCOSITY;
        this.x += this.xv;
        this.y -= this.yv;
        if (this.x < 0) {
            this.x = -1*this.x;
            this.xv = -1*this.xv;
        }
        if (this.y < 0) {
            this.y = -1*this.y;
            this.yv = -1*this.yv;
        }
        if (this.x >= 0.95) {
            this.x = 1.9 - this.x;
            this.xv = -1*this.xv;
        }
        if (this.y >= 0.95) {
            this.y = 1.9 - this.y;
            this.yv = -1*this.yv;
        }
        // console.log(this.x + "," + this.y);
    }
}