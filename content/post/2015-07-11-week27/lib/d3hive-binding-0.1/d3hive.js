HTMLWidgets.widget({

  name: 'd3hive',

  type: 'output',

  initialize: function(el, width, height) {

    var svg = d3.select(el).append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    return { width: width, height: height }

  },

  renderValue: function(el, x, instance) {

    var width = instance.width,
        height = instance.height,
        innerRadius = Math.sqrt(height)*2,
        outerRadius = .9*height/2;

    innerRadius = (x.options.innerRadius) ? x.options.innerRadius : innerRadius;
    outerRadius = (x.options.outerRadius) ? x.options.outerRadius : outerRadius;

    // hard way to get number of unique axes
    var n_axes = d3.keys(
      d3.nest().key(function(d){return d}).map(x.data.nodes.axis)
    ).length;

    // get nodes in a better form
    var nodes = d3.nest()
        .key(function(d){ return d.node_id })
        .rollup(function(d){ return d[0]; })
        .map(HTMLWidgets.dataframeToD3(x.data.nodes));

    var links = HTMLWidgets.dataframeToD3(x.data.edges).map(function(edge){
      edge.source = nodes[edge.source]
      edge.target = nodes[edge.target]

      return edge;
    })


    var angle = d3.scale.ordinal()
                  .domain(d3.range(n_axes+1))
                  .rangePoints([0, 2 * Math.PI]),
        radius = d3.scale.linear().range([innerRadius, outerRadius]),
        color = d3.scale.category10().domain(d3.range(20));


    var svg = d3.select(el).select("svg").select("g");

    svg.selectAll(".axis")
        .data(d3.range(n_axes))
      .enter().append("line")
        .attr("class", "axis")
        .attr("transform", function(d) { return "rotate(" + degrees(angle(d)) + ")"; })
        .attr("x1", radius.range()[0])
        .attr("x2", radius.range()[1])
        .style("stroke","#b3b2b2")
        .style("stroke-width","1px")
        .style("fill","none");


    svg.selectAll(".link")
        .data(links)
      .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.hive.link()
          .angle(function(d) { return angle(d.axis); })
          .radius(function(d) { return radius(d.radius); }))
        .style("stroke", function(d) { return d.color; })
        .style("fill","none");

    svg.selectAll(".node")
        .data(d3.entries(nodes))
      .enter().append("circle")
        .attr("class", "node")
        .attr("transform", function(d) { return "rotate(" + degrees(angle(d.value.axis)) + ")"; })
        .attr("cx", function(d) { return radius(d.value.radius); })
        .attr("r", function(d){ return d.value.size; })
        .style("fill", function(d) { return d.value.color; })
        .on("mouseover", nodemouseover )
        .on("mouseout", nodemouseout );

    function degrees(radians) {
      return radians / Math.PI * 180 - 90;
    }

    function nodemouseover(){
      var node = d3.select(this),
        nodeid = node.data()[0].value.node_id;
      var container = d3.select(this.parentNode);
      var linksWithNode = container.selectAll( ".link" )
                .filter(function(d){
                  return !(d.source.node_id == nodeid ||
                    d.target.node_id == nodeid);
                })
      var otherNodes = container.selectAll( ".node" )
          .filter(function(d){
            return !(d.value.node_id == nodeid);
          })

      linksWithNode
          .classed("unhighlighted",true)
          .style("stroke-opacity",.5)
          .style("stroke","rgb(220,216,217)");

      otherNodes
          .classed("unhighlighted",true)
          .style("fill-opacity",.5)
          .style("fill","rgb(220,216,217)");
    }

    function nodemouseout(){
      var container = d3.select(this.parentNode);
      container.selectAll(".link.unhighlighted")
        .style("stroke", function(d) { return d.color; })
        .style("stroke-opacity", 1);
      container.selectAll(".node.unhighlighted")
        .style("fill", function(d) { return d.value.color; })
        .style("fill-opacity", 1);
    }


  },

  resize: function(el, width, height, instance) {

  }

});
