var svg = d3.select("svg"),
	width = +svg.attr("width"),
	height = +svg.attr("height");

var simulation = d3.forceSimulation()
	.force("link", d3.forceLink().id(function(d) { return d.id; }))
	.force("charge", d3.forceManyBody().strength(-70))
	.force("collide", d3.forceCollide().radius(20))
	.force("center", d3.forceCenter(width / 2, height / 2));


d3.json("data.json", function(error, graph) {
	if (error) throw error;

	graph.links.forEach(function(d){
		d.source = d.source_id;
		d.target = d.target_id;
	});

	var link = svg.append("g")
		.attr("stroke", "#aaa")
		.selectAll("line")
		.data(graph.links)
		.enter().append("line");

  var node = svg.append("g")
			.attr("class", "nodes")
  .selectAll("g")
			.data(graph.nodes);
  
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
	  .distance(50);

  function ticked() {
	link
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	node
		 .attr("r", 100)
		 .style("fill", "#d9d9d9")
		 .style("stroke", "#969696")
		 .style("stroke-width", "1px")
		 .attr("cx", function (d) { return d.x; })
		 .attr("cy", function(d) { return d.y; });
	
	label
			.attr("x", function(d) { return d.x; })
			.attr("y", function (d) { return d.y; })
			.style("font-size", "14px").style("fill", "#4393c3");
  }
});