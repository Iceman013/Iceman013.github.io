const svg = d3.select("#canvas")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.append("g")
.append("g");

let canMan = document.getElementById("canvas");
canMan.childNodes[0].childNodes[0].setAttribute("transform", "translate(" + canMan.clientWidth/2 + ", " + canMan.clientHeight/2 + ")");

let NODES;
let EDGES;

const G = 0.1;
let xpos = 0;
let ypos = 0;
window.addEventListener("mousemove", function(event) {
    // console.log(canMan.childNodes[0].childNodes[0].childNodes[0].style.transform)
    xpos = event.x;
    ypos = event.y;
});

function Node(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.node;
    this.vx = 0;
    this.vy = 0;

    this.dragging = false;
    this.offsetx = 0;
    this.offsety = 0;

    this.drawNode = function() {
        let circle = NODES.append("circle")
        .attr("r", this.r)
        .style("fill", "#69b3a2")
        .attr("cx", this.x)
        .attr("cy", this.y);

        this.node = circle._groups[0][0];

        const base = this;
        this.node.addEventListener("mousedown", function(event) {
            base.drag();
        })
    }

    this.drag = function() {
        this.offsetx = this.x - xpos;
        this.offsety = this.y - ypos;
        this.dragging = true;
    }
    this.dontDrag = function() {
        this.dragging = false;
    }

    this.update = function(show) {
        if (!this.dragging) {
            this.x += this.vx;
            this.y += this.vy;
        } else {
            this.x = this.offsetx + xpos;
            this.y = this.offsety + ypos;
        }
        this.vx = 0;
        this.vy = 0;

        if (show) {
            this.node.setAttribute("cx", this.x);
            this.node.setAttribute("cy", this.y);
        }
    }
}

function Edge(start, end) {
    this.start = start;
    this.end = end;

    this.drawEdge = function() {
        let line = EDGES.append("line")
        .attr("stroke", "black")
        .attr("x1", this.start.x)
        .attr("y1", this.start.y)
        .attr("x2", this.end.x)
        .attr("y2", this.end.y);

        this.edge = line._groups[0][0];
    }

    this.update = function(input) {
        this.edge.setAttribute("x1", this.start.x);
        this.edge.setAttribute("y1", this.start.y);
        this.edge.setAttribute("x2", this.end.x);
        this.edge.setAttribute("y2", this.end.y);
    }
}

// Draw the node map and animate it
export function draw() {
    EDGES = svg.append("g");
    NODES = svg.append("g");
    let nodes = [];
    let edges = [];
    for (let i = 0; i < 1000; i++) {
        let q = new Node(2*20*(Math.random() - 0.5), 2*20*(Math.random() - 0.5), 20);
        q.drawNode();
        nodes.push(q);
    }

    for (let i = 0; i < 500; i++) {
        let a = Math.floor(Math.random()*nodes.length);
        let b = a;
        while (b == a) {
            b = Math.floor(Math.random()*nodes.length);
        }
        let q = new Edge(nodes[a], nodes[b]);
        q.drawEdge();
        edges.push(q);
    }

    function getDistance(xa, ya, xb, yb) {
        return Math.sqrt((xa - xb)*(xa - xb) + (ya - yb)*(ya - yb));
    }

    function customForce(set, eggs) {
        // Physics
        for (let i = 0; i < set.length - 1; i++) {
            let nodea = set[i];
            for (let j = i + 1; j < set.length; j++) {
                let nodeb = set[j];
                let distance = getDistance(nodea.x, nodea.y, nodeb.x, nodeb.y) - nodea.r - nodeb.r;
                if (distance <= 1) {
                    distance = 1;
                }
                let vx = G*(nodea.x - nodeb.x)/(distance*Math.sqrt(distance));
                let vy = G*(nodea.y - nodeb.y)/(distance*Math.sqrt(distance));

                nodea.vx += vx;
                nodea.vy += vy;

                nodeb.vx -= vx;
                nodeb.vy -= vy;
            }
        }

        // Links
        for (let i = 0; i < eggs.length; i++) {
            let nodea = eggs[i].start;
            let nodeb = eggs[i].end;
            let distance = getDistance(nodea.x, nodea.y, nodeb.x, nodeb.y) - nodea.r - nodeb.r;
            let sk = 0.0001;
            let vx = sk*(Math.pow(nodea.x - nodeb.x, 2));
            let vy = sk*(Math.pow(nodea.y - nodeb.y, 2));

            if (nodea.x > nodeb.x){
                nodea.vx -= vx;
                nodeb.vx += vx;
            } else {
                nodea.vx += vx;
                nodeb.vx -= vx;
            }

            if (nodea.y > nodeb.y){
                nodea.vy -= vy;
                nodeb.vy += vy;
            } else {
                nodea.vy += vy;
                nodeb.vy -= vy;
            }
        }

        // Move
        for (let i = 0; i < set.length; i++) {
            set[i].update(true); // Show move
        }
        for (let i = 0; i < eggs.length; i++) {
            eggs[i].update(true);
        }
    }

    window.addEventListener("mouseup", function() {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].dontDrag();
        }
    })

    setInterval(function() {
        customForce(nodes, edges);
    }, 10);
}