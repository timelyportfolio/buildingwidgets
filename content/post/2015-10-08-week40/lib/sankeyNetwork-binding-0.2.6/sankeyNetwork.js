HTMLWidgets.widget({

    name: "sankeyNetwork",

    type: "output",

    initialize: function(el, width, height) {

        d3.select(el).append("svg")
            .style("width", "100%")
            .style("height", "100%");

        return {
          sankey: d3.sankey(),
          x: null
        };
    },

    resize: function(el, width, height, instance) {
        /*  handle resizing now through the viewBox
        d3.select(el).select("svg")
            .attr("width", width)
            .attr("height", height + height * 0.05);

        this.renderValue(el, instance.x, instance);
        */ 
    },

    renderValue: function(el, x, instance) {

        // save the x in our instance (for calling back from resize)
        instance.x = x;

        // alias sankey and options
        var sankey = instance.sankey;
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

        // get the width and height
        var width = el.getBoundingClientRect().width - margin.right - margin.left;
        var height = el.getBoundingClientRect().height - margin.top - margin.bottom;

        var color = eval(options.colourScale);

        var formatNumber = d3.format(",.0f"),
        format = function(d) { return formatNumber(d); }

        // create d3 sankey layout
        sankey
            .nodes(d3.values(nodes))
            .links(links)
            .size([width, height])
            .nodeWidth(options.nodeWidth)
            .nodePadding(options.nodePadding)
            .layout(32);

        // select the svg element and remove existing children
        d3.select(el).select("svg").selectAll("*").remove();
        // append g for our container to transform by margin
        var svg = d3.select(el).select("svg").append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");;

        // draw path
        var path = sankey.link();

        // draw links
        var link = svg.selectAll(".link")
            .data(sankey.links())

        link.enter().append("path")
            .attr("class", "link")
        
        link
            .attr("d", path)
            .style("stroke-width", function(d) { return Math.max(1, d.dy); })
            .style("fill", "none")
            .style("stroke", "#000")
            .style("stroke-opacity", 0.2)
            .sort(function(a, b) { return b.dy - a.dy; })
            .on("mouseover", function(d) {
                d3.select(this)
                .style("stroke-opacity", 0.5);
            })
            .on("mouseout", function(d) {
                d3.select(this)
                .style("stroke-opacity", 0.2);
            });
            
        // add backwards class to cycles
        link.classed('backwards', function (d) { return d.target.x < d.source.x; });
        
        svg.selectAll(".link.backwards")
            .style("stroke-dasharray","9,1")
            .style("stroke","#402")

        // draw nodes
        var node = svg.selectAll(".node")
            .data(sankey.nodes())
            
        node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" +
                                            d.x + "," + d.y + ")"; })
            .call(d3.behavior.drag()
            .origin(function(d) { return d; })
            .on("dragstart", function() { this.parentNode.appendChild(this); })
            .on("drag", dragmove));

        // note: u2192 is right-arrow
        link.append("title")
            .text(function(d) { return d.source.name + " \u2192 " + d.target.name +
                "\n" + format(d.value) + " " + options.units; });

        node.append("rect")
            .attr("height", function(d) { return d.dy; })
            .attr("width", sankey.nodeWidth())
            .style("fill", function(d) {
                return d.color = color(d.name.replace(/ .*/, "")); })
            .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
            .style("opacity", 0.9)
            .style("cursor", "move")
            .append("title")
            .text(function(d) { return d.name + "\n" + format(d.value) + 
                " " + options.units; });

        node.append("text")
            .attr("x", -6)
            .attr("y", function(d) { return d.dy / 2; })
            .attr("dy", ".35em")
            .attr("text-anchor", "end")
            .attr("transform", null)
            .text(function(d) { return d.name; })
            .style("font-size", options.fontSize + "px")
            .style("font-family", options.fontFamily ? options.fontFamily : "inherit")
            .filter(function(d) { return d.x < width / 2; })
            .attr("x", 6 + sankey.nodeWidth())
            .attr("text-anchor", "start");
            
            
        // adjust viewBox to fit the bounds of our tree
        var s = d3.select(svg[0][0].parentNode);
        s.attr(
            "viewBox",
            [
              d3.min(
                s.selectAll('*')[0].map(function(d){
                  return d.getBoundingClientRect().left
                })
              ) - s.node().getBoundingClientRect().left - margin.right,
              d3.min(
                s.selectAll('*')[0].map(function(d){
                  return d.getBoundingClientRect().top
                })
              ) - s.node().getBoundingClientRect().top - margin.top,
              d3.max(
                s.selectAll('*')[0].map(function(d){
                  return d.getBoundingClientRect().right
                })
              ) -
              d3.min(
                s.selectAll('*')[0].map(function(d){
                  return d.getBoundingClientRect().left
                })
              )  + margin.left + margin.right,
              d3.max(
                s.selectAll('*')[0].map(function(d){
                  return d.getBoundingClientRect().bottom
                })
              ) -
              d3.min(
                s.selectAll('*')[0].map(function(d){
                  return d.getBoundingClientRect().top
                })
              ) + margin.top + margin.bottom
            ].join(",")
          );        
        

        function dragmove(d) {
            d3.select(this).attr("transform", "translate(" + d.x + "," +
            (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
            sankey.relayout();
            link.attr("d", path);
        }
    },
});
