function Map() {
    this.grid = [];
    this.chosen = [null, null];

    this.addCell = function(x, y, cell) {
        if (this.grid[x] == null) {
            this.grid[x] = [];
        }
        this.grid[x][y] = cell;
    }
    this.click = function(x, y) {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j].base.classList.remove("cell-selected");
            }
        }
        if ((this.chosen[0] != null) && (this.chosen[0] == x && this.chosen[1] == y)) {
            this.chosen = [null, null];
        } else {
            this.chosen = [x, y];
            this.grid[this.chosen[0]][this.chosen[1]].base.classList.toggle("cell-selected");
            console.log("This is a " + this.grid[this.chosen[0]][this.chosen[1]].typeName + " cell.");
        }
        
    }
}