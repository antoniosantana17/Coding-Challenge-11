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