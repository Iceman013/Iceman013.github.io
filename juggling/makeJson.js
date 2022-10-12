function getData(type) {
    var nodes = [];
    var links = [];
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[i].tags.includes(type)) {
            var node = {};
            node.id = i;
            node.name = TRICKS[i].name;
            function getColor(input) {
                var out = [0,0,0];
                if (input <= 0.5) {
                    out[0] = 255*2*input;
                    out[1] = 255;
                } else {
                    out[0] = 255;
                    out[1] = 255*(1 - 2*(input - 0.5));
                }
                return "rgb(" + out[0] + "," + out[1] + "," + out[2] + ")";
            }
            node.color = getColor((TRICKS[i].difficulty - 1)/9);
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
    var out = {};
    out.nodes = nodes;
    out.links = links;
    return out;
}