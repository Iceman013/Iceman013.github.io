function makeMap(x, y) {
    var map = [];
    var pos = [];
    var remain = [];
    var terList = getTerrainList();
    for (let i = 0; i < x; i++) {
        map[i] = [];
        pos[i] = [];
        for (let j = 0; j < y; j++) {
            remain.push([i,j]);
            map[i][j] = terList[0];
            pos[i][j] = [];
            for (let k = 0; k < terList.length - 1; k++) {
                pos[i][j][k] = terList[k + 1];
            }
        }
    }
    while (remain.length > 0) {
        var chosen = Math.floor(remain.length*Math.random());
        var ttyp = pos[remain[chosen][0]][remain[chosen][1]][Math.floor(pos[remain[chosen][0]][remain[chosen][1]].length*Math.random())];
        map[remain[chosen][0]][remain[chosen][1]] = terList[terList.indexOf(ttyp)];
        pos[remain[chosen][0]][remain[chosen][1]] = [terList[terList.indexOf(ttyp)]];
        remain.splice(chosen, 1);

        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                for (let k = 0; k < map.length; k++) {
                    for (let l = 0; l < map[k].length; l++) {
                        if (map[k][l] == null) {
                            console.log(k + "," + l);
                            console.log(remain.length);
                            console.log(map[k]);
                            console.log(pos[k][l]);
                        }
                        if (map[k][l].id == 0) {
                            for (let m = 0; m < pos[k][l].length; m++) {
                                var allow = true;
                                for (let n = 0; n < 4; n++) {
                                    for (let o = 0; o < pos[k][l][m].rules.length; o++) {
                                        for (let r = 0; r < pos[k][l][m].rules[o].length; r++) {
                                            var abow = false;
                                            for (let p = 0; p < pos[k][l][m].rules[o][r].types.length; p++) {
                                                var tx = pos[k][l][m].rules[o][r].x;
                                                var ty = pos[k][l][m].rules[o][r].y;
                                                var goalx = Math.round(Math.cos((n/2)*Math.PI)*tx + (-1)*Math.sin((n/2)*Math.PI)*ty);
                                                var goaly = Math.round(Math.sin((n/2)*Math.PI)*tx + Math.cos((n/2)*Math.PI)*ty);
                                                var isitinit = false;
                                                if (pos[k + goalx] == null || pos[k + goalx][l + goaly] == null) {
                                                    isitinit = true;
                                                } else {
                                                    for (let q = 0; q < pos[k + goalx][l + goaly].length; q++) {
                                                        if (pos[k + goalx][l + goaly][q].id == pos[k][l][m].rules[o][r].types[p]) {
                                                            isitinit = true;
                                                        }
                                                    }
                                                }
                                                if (isitinit) {
                                                    abow = true;
                                                }
                                            }
                                            if (abow == false) {
                                                allow = false;
                                            }
                                        }
                                    }
                                }
                                if (allow == false) {
                                    if (pos[k][l].length > 1) {
                                        pos[k][l].splice(m, 1);
                                    }
                                    m = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return map;
}