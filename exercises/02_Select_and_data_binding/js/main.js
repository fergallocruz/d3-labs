var paragraphs = document.getElementsByTagName("h1");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "black", null);
  paragraph.style.setProperty("font-family", "cursive");
  paragraph.style.setProperty("text-align","center");
}

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400)
	.attr("background","#89ff9d");

var data = [25, 20, 15, 10, 5];
var baseline = 398
for (var i = data.length - 1; i >= 0; i--) {
	svg.append("rect")
	.attr("width", 40)
	.attr("height", data[i]*10)
	.attr("stroke", "purple")
	.attr("stroke-width", "3")
	.attr("fill", "white")
	.attr("fill-opacity", "0.5")
	.attr("x",50*(i+1))
	.attr("y",baseline-data[i]*10);
}
