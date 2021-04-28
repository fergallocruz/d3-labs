/*
*    main.js
*/

w = 500
h = 500
var svg = d3.select("#chart-area").append("svg")
.attr("class", "center-block")
.attr("width", w)
.attr("height", h);
var dataUrl = "data/buildings.json";

d3.json("data/buildings.json").then((buildings)=> {
	var names = buildings.map((n) => {return n.name;})
	var heights = buildings.map((n) => {return (parseInt(n.height));})
	var max = d3.max(heights) ;
	var min = d3.min(heights) ;

	var x = d3.scaleBand()
		.domain(names)
		.range([0, 400])
		.paddingInner(0.3)
		.paddingOuter(0.3);
	
	var y = d3.scaleLinear().domain([0, max]).range([0, 400]);

	var t = d3.schemeSet3.slice(0, names.length);
	var color = d3.scaleOrdinal()
		.domain(names)
		.range(t);

	buildings.forEach((b)=>{
	svg.append("rect")
		.attr("width", x.bandwidth())
		.attr("height", y(b.height))
		.attr("fill", color(b.name) )
		.attr("x", x(b.name))
		.attr("y", h-y(b.height));
	});

})