const svg = d3.select("#canvas")
.append("svg")
.attr("width", "100%")
.attr("height", "100%")
.append("g");

export function draw() {
    console.log("uwu");
    let circle = svg.append("circle")
    .attr("r", 20)
    .style("fill", "#69b3a2")
    .attr("cx", 100)
    .attr("cy", 100);
}