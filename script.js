// D3.js code for dynamic bar chart
const data = [100, 420, 230, 850, 560, 925];

const svgWidth = 500;
const barHeight = 20;
const barMargin = 1;
const svgHeight = (barHeight + barMargin) * data.length;

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  const xScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([50, svgWidth - 50]);

  const barGroup = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d, i) => `translate(0, ${i * (barHeight + barMargin)})`);

barGroup.append("rect")
  .attr("width", d => xScale(d))
  .attr("height", barHeight)
  .attr("fill", "steelblue");

barGroup.append("text")
  .attr("x", d => xScale(d) - 5)
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text(d => d);

barGroup.selectAll("rect")
  .on("mouseover", function() {
    d3.select(this).attr("fill", "orange");
  })
  .on("mouseout", function() {
    d3.select(this).attr("fill", "steelblue");
  })
  .transition()
  .duration(1000)
  .attr("width", d => xScale(d));