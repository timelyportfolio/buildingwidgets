HTMLWidgets.widget({

  name: 'shotsign',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, xx, instance) {
    
    // all attribution and credit belongs to Peter Beshai @pbeshai
    // https://gist.github.com/pbeshai/ffd0f9d84b4e8df27db2

    // get your data
    var data = HTMLWidgets.dataframeToD3(xx.data);
    
    // delete everything for dynamic/shiny situations
    el.innerHTML = "";

    // initialize SVG
    var width = el.getBoundingClientRect().width,
        height = el.getBoundingClientRect().height;
    
    var svg = d3.select(el).append("svg")
      .attr("width", width)
      .attr("height", height);
      
    // x = distance in shooting signatures
    var x = d3.scale.linear()
      .domain(xx.xdomain ? xx.xdomain : [0, 30])
      .range([0, width]);
    // for gradient offset (needs % - so map x domain to 0-100%)
    var offset = d3.scale.linear()
      .domain(x.domain())
      .range([0, 100]);
    // scale for the width of the signature
    var minWidth = 1;
    var maxWidth = height / 4;

    // y = Field Goal % in shooting signatures
    var y = d3.scale.linear()
      .domain(xx.ydomain ? xx.ydomain : [0, 1])
      .range([height, 0 + maxWidth]);
    var w = d3.scale.linear()
      .domain(xx.wdomain ? xx.wdomain : [0, 250])
      .range([minWidth, maxWidth]);
    // NOTE: if you want maxWidth to truly be the maximum width of the signature,
    // you'll need to add .clamp(true) to w.
    // need two area plots to make the signature extend in width in both directions around the line
    var areaAbove = d3.svg.area()
      .x(function(d) { return x(d.x); })
      .y0(function (d) { return y(d.y) - w(d.widthValue); })
      .y1(function(d) { return Math.ceil(y(d.y)); }) // ceil and floor prevent line between areas
      .interpolate("basis");
    var areaBelow = d3.svg.area()
      .x(function(d) { return x(d.x); })
      .y0(function (d) { return y(d.y) + w(d.widthValue); })
      .y1(function(d) { return Math.floor(y(d.y)); }) // ceil and floor prevent line between areas
      .interpolate("basis");
    // add the areas to the svg
    var gArea = svg.append("g").attr("class", "area-group");
    gArea.append("path")
      .datum(data)
      .attr("class", "area area-above")
      .attr("d", areaAbove)
      .style("fill", "url(#area-gradient" + el.id + ")"); // specify the linear gradient #area-gradient as the colouring
      // NOTE: the colouring won't work if you have multiple signatures on the same page.
      // In this case, you'll need to generate unique IDs for each gradient.
    gArea.append("path")
      .datum(data)
      .attr("class", "area area-below")
      .attr("d", areaBelow)
      .style("fill", "url(#area-gradient" + el.id + ")");
    /*
    // you can draw the line the signature is based around using the following code:
    var line = d3.svg.line()
      .x(function(d) { return x(d.x); })
      .y(function(d) { return y(d.y); })
      .interpolate("basis");
    gArea.append("path")
      .datum(data)
      .attr("d", line)
      .style("stroke", "#fff")
      .style("fill", "none")
    */
    // set-up colours
    var colorSchemes = {
      buckets: {
        domain: xx.colordomain ? xx.colordomain : [-0.15, 0.15],
        range: ["#405A7C", "#7092C0", "#BDD9FF", "#FFA39E", "#F02C21", "#B80E05"]
      },
      goldsberry: {
        domain: xx.colordomain ? xx.colordomain : [-0.15, 0.15],
        range: ["#5357A1", "#6389BA", "#F9DC96", "#F0825F", "#AE2A47"]
      }
    };
    var activeColorScheme = colorSchemes.goldsberry;
    // Note that the quantize scale does not interpolate between colours
    var colorScale = d3.scale.quantize()
      .domain(activeColorScheme.domain)
      .range(activeColorScheme.range);
    // generate colour data
    var colorData = [];
    var stripe = false; // set stripe to true to prevent linear gradient fading
    for (var i = 0; i < data.length; i++) {
      var prevData = data[i - 1];
      var currData = data[i];
      if (stripe && prevData) {
        colorData.push({
          offset: offset(currData.x) + "%",
          stopColor: colorScale(prevData.colorValue)
        });
      }
      colorData.push({
        offset: offset(currData.x) + "%",
        stopColor: colorScale(currData.colorValue)
      });
    }
    // generate the linear gradient used by the signature
    gArea.append("linearGradient")
      .attr("id", "area-gradient" + el.id)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("y1", 0)
      .attr("y2", 0)
      .selectAll("stop")
        .data(colorData)
        .enter().append("stop")
          .attr("offset", function(d) { return d.offset })
          .attr("stop-color", function (d) { return d.stopColor; });
          
    // set up a container for tasks to perform after completion
    //  one example would be add callbacks for event handling
    //  styling
    if (!(typeof xx.tasks === "undefined") ){
      if ( (typeof xx.tasks.length === "undefined") ||
       (typeof xx.tasks === "function" ) ) {
         // handle a function not enclosed in array
         // should be able to remove once using jsonlite
         xx.tasks = [xx.tasks];
      }
      xx.tasks.map(function(t){
        // for each tasks call the task with el supplied as `this`
        t.call(el);
      })
    }          

  },

  resize: function(el, width, height, instance) {

  }

});
