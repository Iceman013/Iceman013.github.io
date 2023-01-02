// set the dimensions and margins of the graph
var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 650 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

// The svg
var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Data and color scale
var data = d3.map();

function makeMap(state) {
    var scale = state.scale;
    var projections = [d3.geoMercator, d3.geoEquirectangular];
    var projection = projections[0]()
        .scale(scale*100)
        .center([-1*state.y, state.x])
        .translate([width/2, height/2]);

    var promises = [d3.json(state.src)];
    myDataPromises = Promise.all(promises).then(function(topo) {
        var topo = topo[0];

        // Draw the map
        svg.append("g")
            .selectAll("path")
            
            .data(topo.features)
            .enter()
            .append("path")
            .attr("class", "topo")
            // draw each country
            .attr("d", d3.geoPath()
                .projection(projection)
            )
    });
}