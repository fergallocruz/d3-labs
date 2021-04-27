/*
*    main.js
*/
h = 500
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 800)
	.attr("height", h);

cx = 50
baseline = h-50
special_color = "#5A30F2"
normal_color = "#6A44F2"

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{
		height = d.height/2
	svg.append("rect")
		.attr("width", 60)
		.attr("height", height)
		.attr("x",cx)
		.attr("y",baseline-height);
		cx+= 70
	});
	console.log(data);
});

