function getData(type) {
    var nodes = [];
    var links = [];
    for (let i = 0; i < TRICKS.length; i++) {
        if (TRICKS[i].tags.includes(type)) {
            var node = {};
            node.id = i;
            node.name = TRICKS[i].name;
            nodes.push(node);
            for (let j = 0; j < TRICKS[j].prereqs.length; j++) {
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