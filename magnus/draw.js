const svg = d3.select("#canvas")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.append("g");

// Draw the node map and animate it
export function draw() {
    function drawNode(x, y) {
        let circle = svg.append("circle")
        .attr("r", 20)
        .style("fill", "#69b3a2")
        .attr("cx", x)
        .attr("cy", y);
        return circle;
    }
    let nodes = [];
    nodes.push(drawNode(100, 100));
    nodes.push(drawNode(110, 100));
    for (let i = 0; i < 100; i++) {
        nodes.push(drawNode(100 + 2*20*(Math.random() - 0.5), 100 + 2*20*(Math.random() - 0.5)));
    }

    function getDistance(xa, ya, xb, yb) {
        return Math.sqrt((xa - xb)*(xa - xb) + (ya - yb)*(ya - yb));
    }
    const G = 1;
    function customForce(list) {
        // Nice set
        let set = [];
        for (let i = 0; i < list.length; i++) {
            set[i] = {};
            set[i].node = list[i]._groups[0][0];
            set[i].x = set[i].node.getAttribute("cx");
            set[i].y = set[i].node.getAttribute("cy");
            set[i].r = set[i].node.getAttribute("r");
            set[i].vx = 0;
            set[i].vy = 0;
        }

        // Physics
        for (let i = 0; i < set.length - 1; i++) {
            let nodea = set[i];
            for (let j = i + 1; j < set.length; j++) {
                let nodeb = set[j];
                let distance = getDistance(nodea.x, nodea.y, nodeb.x, nodeb.y) - nodea.r - nodeb.r;
                if (distance <= 1) {
                    distance = 1;
                }
                let vx = (nodea.x - nodeb.x)/(distance*distance);
                let vy = (nodea.y - nodeb.y)/(distance*distance);

                nodea.vx += vx;
                nodea.vy += vy;

                nodeb.vx -= vx;
                nodeb.vy -= vy;
            }
        }

        // Move
        for (let i = 0; i < set.length; i++) {
            set[i].x = Number(set[i].x) + G*set[i].vx;
            set[i].y = Number(set[i].y) + G*set[i].vy;
        }

        // Show move
        for (let i = 0; i < set.length; i++) {
            set[i].node.setAttribute("cx", set[i].x);
            set[i].node.setAttribute("cy", set[i].y);
        }
    }
    setInterval(function() {
        customForce(nodes)
    }, 100);
}