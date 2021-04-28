/*
*    main.js
*/

w = 600
h = 400

var margin = {top: 10, right: 10, bottom: 100, left:100};

var g = d3.select("body")
	.append("svg")
	.attr("width", w + margin.right + margin.left)
	.attr("height", h + margin.top + margin.bottom)
	.attr("class", "center-block")
	.append("g")
	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var dataUrl = "data/buildings.json";
w = 600-100
h = 400-100
d3.json("data/buildings.json").then((buildings)=> {
	var names = buildings.map((n) => {return n.name;})
	var heights = buildings.map((n) => {return (parseInt(n.height));})

	var max = d3.max(heights) ;
	var min = d3.min(heights) ;

	var x = d3.scaleBand()
		.domain(names)
		.range([0, w])
		.paddingInner(0.3)
		.paddingOuter(0.3);
	
	var y = d3.scaleLinear().domain([0, max]).range([h, 0]);

	var t = d3.schemeSet3.slice(0, names.length);
	var color = d3.scaleOrdinal()
		.domain(names)
		.range(t);
	
	var rects = g.selectAll("rect").data(buildings);
	rects.enter()
		.append("rect")
		.attr("y", (b) => { return y(b.height); })
		.attr("x", (b) => { return x(b.name); })
		.attr("width", x.bandwidth())
		.attr("height", (b) => { return h-y(b.height); })
		.attr("fill", (b) => { return color(b.name); } );
	

	var bottomAxis = d3.axisBottom(x).ticks(10);
	g.append("g")
		.attr("class", "bottom axis")
		.attr("transform", "translate(0, " + h + ")")
		.call(bottomAxis)
		.selectAll("text")
		.attr("y", "10")
		.attr("x", "-5")
		.attr("text-anchor", "end")
		.attr("transform", "rotate(-40)");

	g.append("text")
		.attr("class", "x axis-label")
		.attr("x", w/2)
		.attr("y", h+140)
		.attr("font-size", "20px")
		.attr("text-anchor", "middle")
		.style("fill","black")
		.text("The word's tallest buildings");

	var y02 = d3.scaleLinear().domain([max, min]).range([0, h]);
	var leftAxis = d3.axisLeft(y02).ticks(5)
	.tickFormat((d) => { return d + "m"; })
	.tickSizeOuter(10)
	.tickSizeInner(5);

	g.append("g")
		.attr("class", "left axis")
		.call(leftAxis)
		.append("text")
		.attr("class", "y axis-label")
		.attr("x", - (h / 2))
		.attr("y", -60)
		.attr("font-size", "20px")
		.attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.style("fill","black")
		.text("Height (m)");

})