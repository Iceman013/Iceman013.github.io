function makeMap(x, y) {
    var map = [];
    var rainList = [];
    for (let i = 0; i < x; i++) {
        map[i] = [];
        for (let j = 0; j < y; j++) {
            map[i][j] = 0.25 + 0.5*Math.random();
            for (let k = 0; k < RAIN; k++) {
                rainList.push([i, j]);
            }
        }
    }

    function dropRain(map, ix, iy) {
        var input = 2*map[ix][iy]*map[ix][iy]*(map[ix][iy] - 1.5) + 1;
        var stolen = input*map[ix][iy];
        map[ix][iy] -= stolen;
        var divid = 0;
        var min = null;
        var minp = [];
        for (let i = -1*RAINRADIUS; i <= RAINRADIUS; i++) {
            for (let j = -1*RAINRADIUS; j <= RAINRADIUS; j++) {
                if (i*i + j*j <= RAINRADIUS*RAINRADIUS) {
                    if ((i != 0 || j != 0) && (map[ix + i] != null && map[ix + i][iy + j] != null)) {
                        divid += 1;
                    }
                }
            }
        }
        for (let i = -1*RAINRADIUS; i <= RAINRADIUS; i++) {
            for (let j = -1*RAINRADIUS; j <= RAINRADIUS; j++) {
                if (i*i + j*j <= RAINRADIUS*RAINRADIUS) {
                    if ((i != 0 || j != 0) && (map[ix + i] != null && map[ix + i][iy + j] != null)) {
                        map[ix + i][iy + j] += (1/divid)*stolen;
                        if (map[ix + i][iy + j] >= 1) {
                            map[ix + i][iy + j] = 0.999;
                        }
                        if (min == null || map[ix + i][iy + j] < min) {
                            if (i*i + j*j <= 1) {
                                minp = [ix + i, iy + j];
                                min = map[ix + i][iy + j];
                            }
                        }
                    }
                }
            }
        }
        if (min < map[ix][iy]) {
            return dropRain(map, minp[0], minp[1]);
        } else {
            return;
        }
    }
    
    while (rainList.length > 0) {
        var choice = Math.floor(rainList.length*Math.random());

        dropRain(map, rainList[choice][0], rainList[choice][1]);

        rainList.splice(choice, 1);
    }

    var min;
    var max;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (min == null || map[i][j] < min) {
                min = map[i][j];
            }
            if (max == null || map[i][j] > max) {
                max = map[i][j];
            }
        }
    }
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            map[i][j] = (1/(max - min))*(map[i][j] - min);
            var temp = map[i][j];
            for (let k = 1; k < EQUALIZER; k++) {
                temp = -2*temp*temp*(temp - 1.5);
            }
            map[i][j] = temp;
        }
    }

    var rollmap = [];
    for (let i = 0; i < x; i++) {
        rollmap[i] = [];
        for (let j = 0; j < y; j++) {
            var sum = 0;
            var divid = 0;
            for (let a = -1*RAINRADIUS; a <= RAINRADIUS; a++) {
                for (let b = -1*RAINRADIUS; b <= RAINRADIUS; b++) {
                    if (a*a + b*b <= RAINRADIUS) {
                        if (map[i + a] != null && map[i + a][j + b] != null) {
                            sum += (1/(a*a + b*b + 2))*map[i + a][j + b];
                            divid += (1/(a*a + b*b + 2));
                        }
                    }
                }
            }
            rollmap[i][j] = sum/divid;
        }
    }

    return rollmap;
}

function segmentMap(map) {
    var allofem = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            for (let k = 0; k <= allofem.length; k++) {
                if (allofem[k] == null) {
                    allofem[k] = map[i][j];
                    k = allofem.length + 2;
                } else if (allofem[k] > map[i][j]) {
                    allofem.splice(k, 0, map[i][j]);
                    k = allofem.length + 2;
                }
            }
        }
    }
    var terList = getTerrainList();
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            var per = allofem.indexOf(map[i][j]);
            for (let k = 0; k < terList.length; k++) {
                if (per/(allofem.length + 1) >= terList[k][0]) {
                    map[i][j] = k;
                }
            }
        }
    }
    return map;
}