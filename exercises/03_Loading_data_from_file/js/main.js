var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

d3.csv("data/ages.csv").then((data)=> {
	console.log(data);
});

d3.csv("data/ages.csv", function(data) {
    console.log(data);
});

d3.tsv("data/ages.tsv").then((data)=> {
	console.log(data);
});

cx = 50
cy = 300
special_color = "#FF1512"
normal_color = "#FF66AF"
d3.json("data/ages.json").then((data)=> {
	data.forEach((d)=>{
		if(d.age>10){
			svg.append("circle")
			.attr("cx", cx)
			.attr("cy", cy)
			.attr("r", d.age*2)
			.attr("fill",special_color);
		}else{
			svg.append("circle")
			.attr("cx", cx)
			.attr("cy", cy)
			.attr("r", d.age*2)
			.attr("fill",normal_color);
		}

		svg.append("text")
        .attr("dx", cx-d.age*2)
        .attr("dy", (cy-d.age*2)-5)
        .text(d.name).attr("color", "white");
        svg.append("text")
        .attr("dx", cx)
        .attr("dy", cy)
        .text(d.age).attr("color", "white");

		cx+=((d.age*4)+20);
	});
	console.log(data);
});
