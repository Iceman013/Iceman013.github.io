const RADIUS = 0.1;
const ARROWSIZE = 0.03;
var LOW = 0;
var ct = 0;

var svg = d3.select("svg"),
	width = +svg.attr("width"),
	height = +svg.attr("height");
	LOW = Math.min(width, height);

var simulation = d3.forceSimulation()
	.force("link", d3.forceLink().id(function(d) { return d.id; }))
	.force("charge", d3.forceManyBody().strength(-100))
	.force("collide", d3.forceCollide().radius(100))
	.force("center", d3.forceCenter(0.5*width, 0.5*height))
	.force("boundary", forceBoundary(width*RADIUS, height*RADIUS, width*(1 - RADIUS), height*(1 - RADIUS)));


d3.json("data.json", function(error, graph) {
	if (error) throw error;

	graph.links.forEach(function(d) {
		d.difficulty = d.difficultyc;
		d.source = d.source_id;
		d.target = d.target_id;
	});

	/*var arrow = svg.append('defs')
    	.append('marker')
    	.attr('id', 'arrow')
    	.attr('viewBox', [0, 0, LOW*ARROWSIZE, LOW*ARROWSIZE])
    	.attr('refX', 0.5*LOW*ARROWSIZE)
    	.attr('refY', 0.5*LOW*ARROWSIZE)
    	.attr('markerWidth', LOW*ARROWSIZE)
    	.attr('markerHeight', LOW*ARROWSIZE)
    	.attr('orient', 'auto-start-reverse')
    	.append('path')
		.attr('d', d3.line()([[0, 0], [0, LOW*ARROWSIZE], [LOW*ARROWSIZE, 0.5*LOW*ARROWSIZE]]))*/

	var link = svg.append("g")
		.attr("stroke", "#aaa")
		.attr("marker-end", "url(#arrow)")
		.selectAll("line")
		.data(graph.links)
		.enter().append("line");

	var node = svg.append("g")
		.attr("class", "nodes")
		.selectAll("rect")
		.data(graph.nodes)
		.enter().append("rect")
		.attr("width", 130)
		.attr("height", 24)
		.attr("fill", function(d) { return d.color; });
  
	var label = svg.append("g")
		.attr("class", "labels")
		.selectAll("text")
		.data(graph.nodes)
		.enter().append("text")
		.attr("class", "label")
		.text(function(d) { return d.name; });

	simulation
		.nodes(graph.nodes)
		.on("tick", ticked);

	simulation.force("link")
		.links(graph.links)

	function ticked() {
		link
			.attr("x1", function(d) { return d.source.x; })
			.attr("y1", function(d) { return d.source.y; })
			.attr("x2", function(d) { return d.target.x; })
			.attr("y2", function(d) { return d.target.y; })
			.attr("stroke", "#aaa");

		/*arrow
			.style("fill", "#d9d9d9")
			.style("stroke", "#969696")
			.style("stroke-width", "1px")*/

		node
			.style("stroke", "#969696")
			.style("stroke-width", "1px")
			.style("rx", 6)
			.attr("x", function (d) { return d.x - 5; })
			.attr("y", function(d) { return d.y - 16; });

		label
			.attr("x", function(d) { return d.x; })
			.attr("y", function (d) { return d.y; })
			.style("font-size", "14px").style("fill", "#000000");
	}
});