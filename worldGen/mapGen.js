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
        for (let i = 0; i < remain.length; i++) {
            if (map[remain[i][0]][remain[i][1]].id != 0) {
                remain.splice(i, 1);
                i = i - 1;
            }
        }
        var chosen = Math.floor(remain.length*Math.random());
        var ttyp = pos[remain[chosen][0]][remain[chosen][1]][Math.floor(pos[remain[chosen][0]][remain[chosen][1]].length*Math.random())];
        map[remain[chosen][0]][remain[chosen][1]] = terList[terList.indexOf(ttyp)];
        pos[remain[chosen][0]][remain[chosen][1]] = [terList[terList.indexOf(ttyp)]];
        remain.splice(chosen, 1);

        for (let i = 0; i < map.length*2; i++) {
            for (let k = 0; k < map.length; k++) {
                for (let l = 0; l < map[k].length; l++) {
                    if (map[k][l].id == 0) {
                        for (let m = 0; m < pos[k][l].length; m++) {
                            var allow = true;
                            for (let n = 0; n < pos[k][l][m].rules.length; n++) {
                                for (let p = 0; p < pos[k][l][m].rules[n].locations.length; p++) {
                                    var goalx = k + pos[k][l][m].rules[n].locations[p][0];
                                    var goaly = l + pos[k][l][m].rules[n].locations[p][1];
                                    if (pos[goalx] != null && pos[goalx][goaly] != null) {
                                        for (let q = 0; q < pos[k][l][m].rules[n].locations[p].length; q++) {
                                            var clean = false;
                                            for (let r = 0; r < pos[goalx][goaly].length; r++) {
                                                if (pos[k][l][m].rules[n].types.includes(pos[goalx][goaly][r].id)) {
                                                    r = pos[goalx][goaly].length;
                                                    clean = true;
                                                }
                                            }
                                            if (clean == false) {
                                                allow = false;
                                                q = pos[k][l][m].rules[n].locations[p].length;
                                            }
                                        }
                                    }
                                    if (allow == false) {
                                        p = pos[k][l][m].rules[n].locations.length;
                                    }
                                }
                                if (allow == false) {
                                    n = pos[k][l][m].rules.length;
                                }
                            }
                            if (allow == false) {
                                if (pos[k][l].length > 1) {
                                    pos[k][l].splice(m, 1);
                                    if (pos[k][l].length == 1) {
                                        map[k][l] = terList[terList.indexOf(pos[k][l][0])];
                                    }
                                }
                                m = 0;
                            }
                        }
                    }
                }
            }
        }
    }
    return map;
}