/*
*    main.js
*/

/*
	Atributes
	Circle and ellipse
	.attr("cx", 200).attr("cy", 200)
	.attr("r", 160)

	Rectangle
	.attr("x",10).attr("y",10)
	.attr("width", 25).attr("height", 18)

	*
	.attr("fill", "deepskyblue")
	.attr("fill-opacity", "0.5")
	.attr("stroke", "purple")
	.attr("stroke-width", "0.5")
	https://sites.google.com/up.edu.mx/d3-labs/tutorial/svg-fundamentals
*/
var paragraphs = document.getElementsByTagName("h1");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "black", null);
  paragraph.style.setProperty("font-family", "cursive");
  paragraph.style.setProperty("text-align","center");
}

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var points = [100,100, 100,50, 200,100, 200,200, 100,150, 100,200];
var points02 = [200,200, 200,150, 300,200, 300,300, 200,250, 200,300];

svg.append("circle").attr("cx", 200).attr("cy", 200).attr("r", 160).attr("fill", "deepskyblue").attr("fill-opacity", "0.5").attr("stroke", "purple");
svg.append("line").attr("x1", 100).attr("y1", 100).attr("x2", 200).attr("y2", 200).attr("stroke", "black");
svg.append("ellipse").attr("cx",200).attr("cy", 200).attr("rx", 10).attr("ry", 20);
svg.append("polygon").attr("points",points);
svg.append("polyline").attr("points",points02).attr("fill", "purple").attr("fill-opacity", "0.5");

svg.append("path").attr("d","m 10 10 h 50 v 40 A 1 1 0 0 1 10 50 v -40").attr("fill", "darkkhaki");
svg.append("rect").attr("width", 25).attr("height", 18).attr("fill", "red").attr("x",10).attr("y",10);
svg.append("path").attr("d","m 10 28 h 10 l 10 20 v 15 l -20 -35 m 0 0 m 0 0").attr("fill", "blue");