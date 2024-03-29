function drawTree() {
	const RADIUS = 0.05;
	const ARROWSIZE = 0.02;
	var LOW = 0;

	var base = document.getElementById("tree");
	var svg = d3.select("svg");
	var width = base.clientWidth;
	var height = base.clientHeight;
	var LOW = Math.min(width, height);

	var simulation = d3.forceSimulation()
		.force("link", d3.forceLink().id(function(d) { return d.id; }))
		.force("charge", d3.forceManyBody().strength(-0.5*LOW))
		.force("collide", d3.forceCollide().radius(0.12*LOW))
		.force("center", d3.forceCenter(0.5*width, 0.5*height))
		.force("boundary", forceBoundary(width*RADIUS, height*RADIUS, width*(1 - RADIUS - 0.13), height*(1 - RADIUS)));

	var graph = getData("Juggling");
	graph.links.forEach(function(d) {
		d.source = d.source_id;
		d.target = d.target_id;
	});

	var arrow = svg.append('defs')
		.append('marker')
		.attr('id', 'arrow')
		.attr('viewBox', [0, 0, LOW*ARROWSIZE, LOW*ARROWSIZE])
		.attr('refX', 0.5*LOW*ARROWSIZE)
		.attr('refY', 0.5*LOW*ARROWSIZE)
		.attr('markerWidth', LOW*ARROWSIZE)
		.attr('markerHeight', LOW*ARROWSIZE)
		.attr('orient', 'auto-start-reverse')
		.append('path')
		.attr('d', d3.line()([[0, 0], [0, LOW*ARROWSIZE], [LOW*ARROWSIZE, 0.5*LOW*ARROWSIZE]]))
	
	function draw(context, item) {
		var simph = 0.02*height;
		var offset = 0.04*width;
		var flat = 0.4;
		if (item != null) {
			var sy = ((item.source.pre - 0.6)/5)*height;
			var ey = ((item.target.pre - 0.6)/5)*height;
			context.moveTo(item.source.x + offset, sy);
			context.lineTo(item.source.x + offset, sy + simph);
			var qax = item.source.x + offset;
			var qay = sy + simph;
			var qbx = item.target.x + offset;
			var qby = ey - simph - (ARROWSIZE + 0.005)*height;
			context.bezierCurveTo(qax, flat*qay + (1 - flat)*qby, qbx, (1 - flat)*qay + flat*qby,
				qbx, qby);
			context.lineTo(item.target.x + offset, ey - (ARROWSIZE + 0.005)*height);
		} else {
			context.moveTo(0, 0);
		}
		return context;
	}

	var path = svg.append("g")
		.attr("marker-end", "url(#arrow)")
		.attr("fill", "none")
		.attr("d", function(d) { return draw(d3.path(), d); })
		.selectAll("path")
		.data(graph.links)
		.enter().append("path");

	var node = svg.append("g")
		.attr("class", "nodes")
		.selectAll("rect")
		.data(graph.nodes)
		.enter().append("rect")
		.attr("width", 0.13*height)
		.attr("height", 0.022*height)
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
		path
			.style("stroke", "#000000")
			.attr("marker-end", "url(#arrow)")
			.attr("d", function(d) { return draw(d3.path(), d); })
			.selectAll("path")
			.data(graph.links)
			.enter().append("path");

		arrow
			.style("fill", "#000000")
			.style("stroke", "#000000")
			.style("stroke-width", "1px")

		node
			.style("stroke", "#969696")
			.style("stroke-width", "1px")
			.style("rx", 0.005*LOW)
			.attr("x", function(d) { return d.x; })
			.attr("y", function(d) { d.y = ((d.pre - 0.6)/5)*height; return d.y - 0.016*height; })
			.on("click", function(d) { open("../pages/" + d.url) });

		label
			.attr("x", function(d) { return d.x + 0.005*height; })
			.attr("y", function(d) { return d.y; })
			.style("font-size", 0.014*height + "px").style("fill", "#000000");
	}
}
drawTree();