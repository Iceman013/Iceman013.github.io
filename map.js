function makeMap(size) {
    var map = [
        [
            new Square(),
            new Square(),
            new Square()
        ],
        [
            new Square(),
            new Square(),
            new Square()
        ],
        [
            new Square(),
            new Square(),
            new Square()
        ]
    ];
    map[1][1].setAltitude(1);
    var a = 0;
    while (a < size) {
        map = growMap(map);
        a = a + 1;
    }
    map = smoothMap(map);
    map = addResources(map);
    return map;
}
function growMap(map) {
    var clone = new Array(2*map.length - 1);
    var a = 0;
    var b = 0;
    while (a < clone.length) {
        clone[a] = new Array(2*map[0].length - 1);
        b = 0;
        while (b < clone[a].length) {
            clone[a][b] = new Square();
            b = b + 1;
        }
        a = a + 1;
    }
    a = 0;
    while (a < map.length) {
        b = 0;
        while (b < map[a].length) {
            clone[2*a][2*b].setAltitude(map[a][b].getAltitude());
            b = b + 1;
        }
        a = a + 1;
    }
    a = 1;
    while (a < clone.length - 1) {
        b = 1;
        while (b < clone[0].length - 1) {
            clone[a][b].setAltitude(mixedHeight(clone[a-1][b-1],clone[a-1][b+1],clone[a+1][b-1],clone[a+1][b+1]));
            b = b + 2;
        }
        a = a + 2;
    }
    a = 1;
    while (a < clone.length) {
        b = 0;
        while (b < clone[a].length) {
            var temp = 0;
            if (b == 0) {
                temp = mixedHeight(clone[a-1][b],clone[a+1][b],clone[a][b+1]);
            } else if (b == clone.length - 1) {
                temp = mixedHeight(clone[a-1][b],clone[a+1][b],clone[a][b-1]);
            }
            else {
                temp = mixedHeight(clone[a-1][b],clone[a+1][b],clone[a][b-1],clone[a][b+1]);
            }
            clone[a][b].setAltitude(temp);
            b = b + 2;
        }
        a = a + 2;
    }
    a = 0;
    while (a < clone.length) {
        b = 1;
        while (b < clone[a].length) {
            var temp = 0;
            if (a == 0) {
                temp = mixedHeight(clone[a][b-1],clone[a][b+1],clone[a+1][b]);
            } else if (a == clone.length - 1) {
                temp = mixedHeight(clone[a][b-1],clone[a][b+1],clone[a-1][b]);
            } else {
                temp = mixedHeight(clone[a][b-1],clone[a][b+1],clone[a-1][b],clone[a+1][b]);
            }
            clone[a][b].setAltitude(temp);
            b = b + 2;
        }
        a = a + 2;
    }
    return clone;
}
function mixedHeight(...sqs) {
    var a = 0;
    var sum = 0;
    while (a < sqs.length) {
        sum = sum + sqs[a].getAltitude();
        a = a + 1;
    }
    return mix(sum/sqs.length);
}
function mix(avg) {
    var close = 2*(0.5 - Math.abs(avg - 0.5));
    var change = 2*Math.random() - 1;
    return avg + close*change*variation;
}
function smooth(input) {
    var out = Math.pow(input,3/5);
    var a = 0;
    while (a < 1) {
        out = (-0.5)*Math.cos(Math.PI*out) + 0.5;
        a = a + 1;
    }
    return out;
}
function smoothMap(map) {
    var a = 0;
    var b = 0;
    while (a < map.length) {
        b = 0;
        while (b < map[a].length) {
            map[a][b].setAltitude(smooth(map[a][b].getAltitude()));
            b = b + 1;
        }
        a = a + 1;
    }
    return map;
}
function addResources(map) {
    map = addTrees(map);
    map = addRocks(map);
    return map;
}
function addTrees(map) {
    var a = 0;
    var b = 0;
    var c = 0;
    var rnga = 0;
    var rngb = 0;
    while (a < 5) {
        rnga = Math.floor(1 + (map.length - 2)*Math.random());
        rngb = Math.floor(1 + (map.length - 2)*Math.random());
        b = -1;
        while (b < 2) {
            c = -1;
            while (c < 2) {
                if (Math.random() < 0.5) {
                    if (map[rnga + b][rngb + c].setResource("Forest")) {
                        a = a + 1;
                    }
                }
                c = c + 1;
            }
            b = b + 1;
        }
    }
    return map;
}
function addRocks(map) {
    var a = 0;
    while (a < 3) {
        if (map[Math.floor(map.length*Math.random())][Math.floor(map.length*Math.random())].setResource("Rock")) {
            a = a + 1;
        }
    }
    return map;
}