var cells = [[]];
function startGen() {
    for (let i = 0; i++; i < WIDTH) {
        cells[i] = [];
        for (let j = 0; j++; j < HEIGHT) {
            cells[i][j] = 0;
        }
    }
}