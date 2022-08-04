let svgBar;
let xScaleBar;
let yScaleBar;
let yAxisBar;
let xAxisGroupBar;
let yAxisGroupBar;
let color;
let tooltip;

const width = window.innerWidth * 0.50,
  height = window.innerHeight * 0.65,
  margin = { top: 20, bottom: 65, left: 70, right: 20 },
  radius = 6.5;

let stateBar = {
    data: null,
};

// Loading data
d3.csv('../data/pmdata2019.csv', (d) => {
  const formattedObj = {
    borough: d.borough,
    scaled : +d.averagenew,
    average: +d.average
  }
  return formattedObj
})
  .then(data => {
    console.log("LOADED DATE:", data);
    stateBar.data = data;
    initBar();
});

function initBar() {

const color = d3.scaleSequential()
  .domain([0, d3.max(stateBar.data, d => d.average)])
  .interpolator(d3.interpolateReds)

xScaleBar = d3.scaleBand()
  .domain(stateBar.data.map(d => d.borough))
  .range([margin.left, width - margin.right])
  .paddingInner(.35)
  .padding(.15)

yScaleBar = d3.scaleLinear()
  .domain([0, 10])
  .range([height - margin.bottom, margin.top])
  
const xAxisBar = d3.axisBottom(xScaleBar)
yAxisBar = d3.axisLeft(yScaleBar)
  //.tickFormat(formatBillions)

svgBar = d3.select("#d3-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

tooltip = d3.select("#d3-container")
  .append("div") //does this work?
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("top", 0) 
  .style("left", 0)
 
svgBar.selectAll("rect")
  .data(stateBar.data)
  .join("rect")
  // 8/2/22 adding a tooltip
  .attr("width", xScaleBar.bandwidth())
  .attr("height", d => height -  yScaleBar(d.average) - margin.bottom) // not sure whats going on
  .attr("x", d => xScaleBar(d.borough))
  .attr("y", d => yScaleBar(d.average))
  .attr("fill", d => color(d.average))
  // .attr("stroke", "white")
  .attr("stroke-width", 1)
  .on("mouseenter", (event, d) => {
    tooltip
    .html(
      `
      <div>${d.borough} has a concentration</div>
      <div>of <b>${d.average}<b> ppm</div>
      `
    )
    .classed("visible", true)
    .style("transform", `translate(${xScaleBar(d.borough)+285}px,${yScaleBar(d.average)+80}px)`)
    
})
.on("mouseleave", () => {
  tooltip
    .html(
    ""
    )
    .classed("visible", false)
})

const xAxisGroupBar = svgBar.append("g")
  .attr("class", "xAxisBar")
  .attr("transform", `translate(${0}, ${height - margin.bottom})`)
  .call(xAxisBar)
  
xAxisGroupBar.append("text")
  .attr("class", 'xaxis-titlebar')
  .attr("x", width / 2)
  .attr("y", 45)
  .attr("text-anchor", "middle")
  .attr("fill", "black")
  .attr("font-size", "13")
  .text("Boroughs")

yAxisGroupBar = svgBar.append("g")
  .attr("class", "yAxisBar")
  .attr("transform", `translate(${margin.left}, ${0})`)
  .call(yAxisBar)

yAxisGroupBar.append("text")
  .attr("class", 'yaxis-titlebar')
  .attr("transform", `translate(${-45}, ${height / 2})rotate(-90)`)
  .attr("text-anchor", "middle")
  .attr("fill", "black")
  .attr("font-size", "13")
  .text("Average Particulate Matter Concentration (In Parts per Million)")
}