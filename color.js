/*
 * Converts sets of 1s and 0s
 */
function ryb(...ryb) {
    var values = [0,0,0];
    var colors = [
        [
            [
                [1,1,1],
                [0.163,0.373,0.6]
            ],
            [
                [1,1,0],
                [0,0.66,0.2]
            ]
        ],
        [
            [
                [1,0,0],
                [0.5,0,0.5]
            ],
            [
                [1,0.5,0],
                [0.2,0.094,0]
            ]
        ]
    ];
    var a = 0;
    while (a < values.length) {
        values[a] = colors[ryb[0]][ryb[1]][ryb[2]][a];
        a = a + 1;
    }
    return values;
}
function colorize(r, y, b) {
    var colors = ryb(r, y, b);
    var outputs = [0,0,0];
    var a = 0;
    while (a < outputs.length) {
        outputs[a] = Math.floor(255*colors[a]);
        a = a + 1;
    }
    return "rgb(" + outputs[0] + "," + outputs[1] + "," + outputs[2] + ")";
}