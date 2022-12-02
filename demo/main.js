function drawEdge(a, b) {
	if (card.getShape() == "Squiggle") {
		var path = [
			[0, 0.2],
			[0.25, 0],
			[1, 0.25],
			[0.6, 0.7],
			[1, 0.8],
			[0.75, 1],
			[0, 0.8],
			[0.4, 0.3]
		];
		areaGenerator = d3.line().curve(d3.curveBasisClosed);
		area = areaGenerator(scale(path));
	}

	d3.select("g#" + id)
		.append("path")
		.attr("d", area)
		.attr("class", card.getColor() + " " + card.getFill());
}