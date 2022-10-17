function getData(type) {
    var nodes = [];
    var semi = [];
    var poses = [];
    var links = [];
    var max = 0;
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[i].tags.includes(type)) {
            if (TRICKS[i].difficulty > max) {
                max = TRICKS[i].difficulty;
            }
        }
    }
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[i].tags.includes(type)) {
            semi.push(TRICKS[i]);
            poses.push(semi.length - 1);
            var node = {};
            node.id = i;
            node.name = TRICKS[i].name;
            function doPower(input, power) {
                if (input >= 0) {
                    return Math.pow(input, power);
                } else {
                    return -1*Math.pow(-1*input, power);
                }
            }
            function getColor(input) {
                var dis = 0.5*doPower(2*input - 1,5/3) + 0.5;
                var out = [0,0,0];
                if (dis <= 0.5) {
                    out[0] = 255*2*dis;
                    out[1] = 255;
                } else {
                    out[0] = 255;
                    out[1] = 255*(1 - 2*(dis - 0.5));
                }
                return "rgb(" + out[0] + "," + out[1] + "," + out[2] + ")";
            }
            node.color = getColor((TRICKS[i].difficulty - 1)/(max - 1));
            nodes.push(node);
            for (let j = 0; j < TRICKS[i].prereqs.length; j++) {
                if (TRICKS[i].prereqs[j] != "None") {
                    var link = {};
                    for (let k = 0; k < nodes.length; k++) {
                        if (nodes[k].name == TRICKS[i].prereqs[j]) {
                            link.source_id = k;
                        }
                    }
                    link.target_id = i;
                    links.push(link);
                }
            }
        }
    }
    while (semi.length > 0) {
        var index = 0;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].name == semi[0].name) {
                index = i;
                i = nodes.length;
            }
        }
        var pres = 0;
        var win = true;
        var handy = [];
        if (semi[0].prereqs[0] != "None") {
            for (let i = 0; i < semi[0].prereqs.length; i++) {
                var tempi = 0;
                for (let j = 0; j < nodes.length; j++) {
                    if (nodes[j].name == semi[0].prereqs[i]) {
                        tempi = j;
                        j = nodes.length;
                    }
                }
                handy.push(nodes[tempi].pre);
            }
        }
        for (let i = 0; i < handy.length; i++) {
            if (handy[i] != null) {
                if (handy[i] > pres) {
                    pres = handy[i];
                }
            } else {
                win = false;
            }
        }
        if (win) {
            nodes[index].pre = pres + 1;
        } else {
            semi.push(semi[0]);
        }
        semi.shift();
    }
    var out = {};
    out.nodes = nodes;
    out.links = links;
    return out;
}