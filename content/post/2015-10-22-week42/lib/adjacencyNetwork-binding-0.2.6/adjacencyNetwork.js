HTMLWidgets.widget({

  name: "adjacencyNetwork",

  type: "output",

  initialize: function(el, width, height) {
    return {};
  },

  resize: function(el, width, height, instance) {

  },

  renderValue: function(el, x, instance) {

    // alias options
    var options = x.options;

    // convert links and nodes data frames to d3 friendly format
    var links = HTMLWidgets.dataframeToD3(x.links);
    var nodes = HTMLWidgets.dataframeToD3(x.nodes);

    // margin handling
    //   set our default margin to be 20
    //   will override with x.options.margin if provided
    var margin = {top: 20, right: 20, bottom: 20, left: 20};
    //   go through each key of x.options.margin
    //   use this value if provided from the R side
    Object.keys(x.options.margin).map(function(ky){
      if(x.options.margin[ky] !== null) {
        margin[ky] = x.options.margin[ky];
      }
      // set the margin on the svg with css style
      // commenting this out since not correct
      // s.style(["margin",ky].join("-"), margin[ky]);
    });
      
    
    var width = el.getBoundingClientRect().width - margin.right - margin.left;
    var height = el.getBoundingClientRect().height - margin.top - margin.bottom;


    var color = eval(options.colourScale);

    // select the svg element and remove existing children
    d3.select(el).selectAll("*").remove();
    
    var svg = d3.select(el).append("svg")
                .style("width","100%")
                .style("height","100%");
                
    // add two g layers; the first will be zoom target if zoom = T
    //  fine to have two g layers even if zoom = F
    svg = svg
        .append("g").attr("class","zoom-layer")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
    var adjacencyMatrix = d3.layout.adjacencyMatrix()
      .size([width,height])
      .nodes(nodes)
      .links(links)
      .directed(false)
      .nodeID(function (d) {
        return d.name;
      });
      
    var matrixData = adjacencyMatrix();

    svg
      .selectAll("rect")
      .data(matrixData)
      .enter()
      .append("rect")
      .attr("width", function (d) {return d.width})
      .attr("height", function (d) {return d.height})
      .attr("x", function (d) {return d.x})
      .attr("y", function (d) {return d.y})
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("stroke-opacity", .1)
      .style("fill", function (d) {return color(d.source.group)})
      .style("fill-opacity", function (d) {
        return d.weight * .8
      });

    svg
      .call(adjacencyMatrix.xAxis);
  
    svg
      .call(adjacencyMatrix.yAxis);
      
    // style x and y axis instead of css
    svg.selectAll(".am-axis .tick > line")
       .style("stroke", "black")
       .style("stroke-width", "1px");
       
    svg.selectAll(".am-axis path")
       .style("fill","none");

    function click(d) {
      return eval(options.clickAction)
    }

    // add legend option
    if(options.legend){
        var legendRectSize = 18;
        var legendSpacing = 4;
        var legend = svg.selectAll('.legend')
          .data(color.domain())
          .enter()
          .append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            var height = legendRectSize + legendSpacing;
            var offset =  height * color.domain().length / 2;
            var horz = legendRectSize;
            var vert = i * height+4;
            return 'translate(' + horz + ',' + vert + ')';
          });

        legend.append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .style('fill', color)
          .style('stroke', color);

        legend.append('text')
          .attr('x', legendRectSize + legendSpacing)
          .attr('y', legendRectSize - legendSpacing)
          .text(function(d) { return d; });
    }
  },
});
