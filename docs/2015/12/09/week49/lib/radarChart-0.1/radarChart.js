function RadarChart() {

   var uuid = UUID.generate();

   // TODO:
   // wrapWidth should probably be calculated rather than an option
   // slider to change maxValue on the fly
   // filter update make sure there is an element with URL
   //
   // show axis tics/legend when hover over axis label or data point
   // add abstract axis legend hover area... 'eyebrows' or 'dots'
   //
   // popup div/panel for selecting axes to display and ranges and whether to invert
   
   // options which should be accessible via ACCESSORS
   var data = [];
   var options = {
      filter: 'rcGlow' + uuid,            // define your own filter; false = no filter;
      filter_id: 'rcGlow' + uuid,         // assign unique name for default filter

      resize: false,

      width: window.innerWidth,
      widthMax: window.innerWidth,

	   height: window.innerHeight,
      heightMax: window.innerHeight,

      minRadius: 80,

      // Margins for the SVG
      margins: {
         top: 100, 
         right: 100, 
         bottom: 100, 
         left: 100
      },

      circles: { 
         levels: 8, 
         maxValue: 0, 
         labelFactor: 1.25, 
         opacity: 0.1, 
         fill: "#CDCDCD", 
         color: "#CDCDCD"
      },

      areas: {
         colors: {},            // color lookup by key
         opacity: 0.35,
         borderWidth: 2,
         rounded: true,
         dotRadius: 4,
         sort: true,          // sort layers by approximation of size, smallest on top
         filter: []
      },

      axes: {
         display: true,
         threshold: 90,    // radius threshold for hiding
         lineColor: "white",
         lineWidth: "2px",
         fontWidth: "11px",
         fontColor: "black",
         wrapWidth: 60,	      // The number of pixels after which a label needs to be given a new line
         filter: [],
         invert: [],
         ranges: {}           // { axisname: [min, max], axisname: [min, max]  }
      },

      legend: {
         display: false,
         symbol: 'cross', // 'circle', 'cross', 'diamond', 'triangle-up', 'triangle-down'
         toggle: 'circle',
         position: { x: 25, y: 25 }
      },

      class: "rc",

      color: d3.scale.category10()	   //Color function
   }

   // nodes layered such that radarInvisibleCircles always on top of radarAreas
   // and tooltip layer is at topmost layer 
   var chart_node;           // parent node for this instance of radarChart
   var hover_node;           // parent node for invisibleRadarCircles
   var tooltip_node;         // parent node for tooltip, to keep on top
   var legend_node;          // parent node for tooltip, to keep on top

   // DEFINABLE EVENTS
   // Define with ACCESSOR function chart.events()
   var events = {
      'update': { 'begin': null, 'end': null },
      'gridCircle': { 'mouseover': null, 'mouseout': null, 'mouseclick': null },
      'axisLabel': { 'mouseover': null, 'mouseout': null, 'mouseclick': null },
      'line': { 'mouseover': null, 'mouseout': null, 'mouseclick': null },
      'legend': { 'mouseover': legendMouseover, 'mouseout': areaMouseout, 'mouseclick': legendClick },
      'axisLegend': { 'mouseover': null, 'mouseout': null, 'mouseclick': null },
      'radarArea': { 'mouseover': areaMouseover, 'mouseout': areaMouseout, 'mouseclick': null },
      'radarInvisibleCircle': { 'mouseover': tooltip_show, 'mouseout': tooltip_hide, 'mouseclick': null }
   };

   // functions which should be accessible via ACCESSORS
   var update;

   // helper functions
   var tooltip;

   // programmatic
   var _data = [];
   var legend_toggles = [];
   var radial_calcs = {};
   var Format = d3.format('%'); // Percentage formatting
   var transition_time = 0;
   var delay = 0;
   var keys;
   var keyScale;
   var colorScale;
   var dom_parent;

   function chart(selection) {
        selection.each(function () {

            dataCalcs();
            radialCalcs();

            dom_parent = d3.select(this);
            scaleChart();

            //////////// Create the container SVG and children g /////////////
            var svg = dom_parent.append('svg')
                .attr('width', options.width)
                .attr('height', options.height);

            // append parent g for chart
            chart_node = svg.append('g').attr('class', options.class + 'RadarNode');
            hover_node = svg.append('g').attr('class', options.class + 'HoverNode');
            tooltip_node = svg.append('g').attr('class', options.class + 'TooltipNode');
            legend_node = svg.append("g").attr("class", options.class + "Legend");

            // Wrapper for the grid & axes
            var axisGrid = chart_node.append("g").attr("class", options.class + "AxisWrapper");

            ////////// Glow filter for some extra pizzazz ///////////
            var filter = chart_node.append('defs').append('filter').attr('id', options.filter_id),
               feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
               feMerge = filter.append('feMerge'),
               feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
               feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

            // Set up the small tooltip for when you hover over a circle
            tooltip = tooltip_node.append("text")
               .attr("class", options.class + 'Tooltip')
               .style("opacity", 0);
           
            // update
            update = function() {

                var duration = transition_time;

                dataCalcs();
                radialCalcs();

                keys = _data.map(function(m) { return m.key; });
                keyScale = d3.scale.ordinal()
                             .domain(_data.map(function(m) { return m._i; }))
                             .range(_data.map(function(m) { return m.key; }));
                colorScale = d3.scale.ordinal()
                                .domain(_data.map(function(m) { 
                                   return options.areas.colors[keyScale(m._i)] ? 
                                          keyScale(m._i) 
                                          : m._i.toString(); 
                                }))
                                .range(_data.map(function(m) { return setColor(m); }));
 
                svg.transition().delay(delay).duration(duration)
                    .attr('width', options.width)
                    .attr('height', options.height)

                chart_node.transition().delay(delay).duration(duration)
                     .attr('width', options.width)
                     .attr('height', options.height)
                     .attr("transform", 
                           "translate(" + ((options.width - (options.margins.left + options.margins.right)) / 2 + options.margins.left) + "," 
                                        + ((options.height - (options.margins.top + options.margins.bottom)) / 2 + options.margins.top) + ")")
                hover_node.transition().delay(delay).duration(duration)
                     .attr('width', options.width)
                     .attr('height', options.height)
                     .attr("transform", 
                           "translate(" + ((options.width - (options.margins.left + options.margins.right)) / 2 + options.margins.left) + "," 
                                        + ((options.height - (options.margins.top + options.margins.bottom)) / 2 + options.margins.top) + ")")
                tooltip_node.transition().delay(delay).duration(duration)
                     .attr('width', options.width)
                     .attr('height', options.height)
                     .attr("transform", 
                           "translate(" + ((options.width - (options.margins.left + options.margins.right)) / 2 + options.margins.left) + "," 
                                        + ((options.height - (options.margins.top + options.margins.bottom)) / 2 + options.margins.top) + ")")

                legend_node
                     .attr("transform", "translate(" + options.legend.position.x + "," + options.legend.position.y + ")");

                var update_gridCircles = axisGrid.selectAll("." + options.class + "GridCircle")
                     .data(d3.range(1, (options.circles.levels + 1)).reverse())

                update_gridCircles
                    .transition().duration(duration)
                    .attr("r", function(d, i) { return radial_calcs.radius / options.circles.levels * d; })
                     .style("fill", options.circles.fill)
                    .style("fill-opacity", options.circles.opacity)
                    .style("stroke", options.circles.color)
                    .style("filter" , function() { if (options.filter) return "url(#" + options.filter + ")" });

                update_gridCircles.enter()
                    .append("circle")
                    .attr("class", options.class + "GridCircle")
                    .attr("r", function(d, i) { return radial_calcs.radius / options.circles.levels * d; })
                    .on('mouseover', function(d, i) { if (events.gridCircle.mouseover) events.gridCircle.mouseover(d, i); })
                    .on('mouseout', function(d, i) { if (events.gridCircle.mouseout) events.gridCircle.mouseout(d, i); })
                    .style("fill", options.circles.fill)
                    .style("fill-opacity", options.circles.opacity)
                    .style("stroke", options.circles.color)
                    .style("filter" , function() { if (options.filter) return "url(#" + options.filter + ")" });

                update_gridCircles.exit()
                    .transition().duration(duration * .5)
                    .delay(function(d, i) { return 0; })
                    .remove();

                var update_axisLabels = axisGrid.selectAll("." + options.class + "AxisLabel")
                    .data(d3.range(1, (options.circles.levels + 1)).reverse())

                update_axisLabels
                    .transition().duration(duration / 2)
                    .style('opacity', 1) // don't change to 0 if there has been no change in dimensions! possible??
                    .transition().duration(duration / 2)
                    .text(function(d, i) { if (radial_calcs.maxValue) return Format(radial_calcs.maxValue * d / options.circles.levels); })
                    .attr("y", function(d) { return -d * radial_calcs.radius / options.circles.levels; })
                    .style('opacity', 1)

                update_axisLabels.enter()
                    .append("text")
                    .attr("class", options.class + "AxisLabel")
                    .attr("x", 4)
                    .attr("y", function(d) { return -d * radial_calcs.radius / options.circles.levels; })
                    .attr("dy", "0.4em")
                    .style("font-size", "10px")
                    .attr("fill", "#737373")
                    .on('mouseover', function(d, i) { if (events.axisLabel.mouseover) events.axisLabel.mouseover(d, i); })
                    .on('mouseout', function(d, i) { if (events.axisLabel.mouseout) events.axisLabel.mouseout(d, i); })
                    .text(function(d, i) { if (radial_calcs.maxValue) return Format(radial_calcs.maxValue * d / options.circles.levels); });

                update_axisLabels.exit()
                    .transition().duration(duration * .5)
                    .remove();

                var update_axes = axisGrid.selectAll("." + options.class + "Axis")
                    .data(radial_calcs.axes, get_axis)

                update_axes
                   .enter().append("g")
                   .attr("class", options.class + "Axis")
                   .attr("key", function(d) { return d.axis; });

                update_axes.exit()
                   .transition().duration(duration)
                   .style('opacity', 0)
                   .remove()

                var update_lines = update_axes.selectAll("." + options.class + "Line")
                    .data(function(d) { return [d]; }, get_axis)

                update_lines.enter()
                    .append("line")
                    .attr("class", options.class + "Line")
                    .attr("x1", 0)
                    .attr("y1", 0)
                    .attr("x2", function(d, i, j) { return calcX(null, 1.1, j); })
                    .attr("y2", function(d, i, j) { return calcY(null, 1.1, j); })
                    .on('mouseover', function(d, i, j) { if (events.line.mouseover) events.line.mouseover(d, j); })
                    .on('mouseout', function(d, i, j) { if (events.line.mouseout) events.line.mouseout(d, j); })
                    .style("stroke", options.axes.lineColor)
                    .style("stroke-width", "2px")

                update_lines.exit()
                    .transition().duration(duration * .5)
                    .delay(function(d, i) { return 0; })
                    .remove();

                update_lines
                    .transition().duration(duration)
                    .style("stroke", options.axes.lineColor)
                    .style("stroke-width", options.axes.lineWidth)
                    .attr("x2", function(d, i, j) { return calcX(null, 1.1, j); })
                    .attr("y2", function(d, i, j) { return calcY(null, 1.1, j); })

                var update_axis_legends = update_axes.selectAll("." + options.class + "AxisLegend")
                    .data(function(d) { return [d]; }, get_axis)

                update_axis_legends.enter()
                    .append("text")
                    .attr("class", options.class + "AxisLegend")
                    .style("font-size", options.axes.fontWidth)
                    .attr("text-anchor", "middle")
                    .attr("dy", "0.35em")
                    .attr("x", function(d, i, j) { return calcX(null, options.circles.labelFactor, j); })
                    .attr("y", function(d, i, j) { return calcY(null, options.circles.labelFactor, j); })
                    .style('opacity', function(d, i) { return options.axes.display ? 1 : 0})
                    .on('mouseover', function(d, i, j) { if (events.axisLegend.mouseover) events.axisLegend.mouseover(d, i, j); })
                    .on('mouseout', function(d, i, j) { if (events.axisLegend.mouseout) events.axisLegend.mouseout(d, i, j); })
                    .call(wrap, options.axes.wrapWidth)

                update_axis_legends.exit()
                    .transition().duration(duration * .5)
                    .delay(function(d, i) { return 0; })
                    .remove();

                update_axis_legends
                    .transition().duration(duration)
                    .style('opacity', function(d, i) { 
                       return options.axes.display && radial_calcs.radius > options.axes.threshold ? 1 : 0
                    })
                    .attr("x", function(d, i, j) { return calcX(null, options.circles.labelFactor, j); })
                    .attr("y", function(d, i, j) { return calcY(null, options.circles.labelFactor, j); })
                    .selectAll('tspan')
                    .attr("x", function(d, i, j) { return calcX(null, options.circles.labelFactor, j); })
                    .attr("y", function(d, i, j) { return calcY(null, options.circles.labelFactor, j); })

                var radarLine = d3.svg.line.radial()
                   .interpolate( options.areas.rounded ? 
                                 "cardinal-closed" : 
                                 "linear-closed" )
                   .radius(function(d) { return radial_calcs.rScale(d.value); })
                   .angle(function(d,i) {	return i * radial_calcs.angleSlice; });

                var update_blobWrapper = chart_node.selectAll("." + options.class + "RadarWrapper")
                   .data(_data, get_key)

                update_blobWrapper.enter()
                   .append("g")
                   .attr("class", options.class + "RadarWrapper")
                   .attr("key", function(d) { return d.key; });

                update_blobWrapper.exit()
                   .transition().duration(duration)
                   .style('opacity', 0)
                   .remove()

                update_blobWrapper
                   .style("fill-opacity", function(d, i) { 
                      return options.areas.filter.indexOf(d.key) >= 0 ? 0 : options.areas.opacity;
                   })

                var update_radarArea = update_blobWrapper.selectAll('.' + options.class + 'RadarArea')
                   .data(function(d) { return [d]; }, get_key);

                update_radarArea.enter()
                   .append("path")
                   .attr("class", function(d) { return options.class + "RadarArea " + d.key.replace(/\s+/g, '') })
                   .attr("d", function(d, i) { return radarLine(d.values); })
                   .style("fill", function(d, i, j) { return setColor(d); })
                   .style("fill-opacity", 0)
                   .on('mouseover', function(d, i) { if (events.radarArea.mouseover) events.radarArea.mouseover(d, i, this); })
                   .on('mouseout', function(d, i) { if (events.radarArea.mouseout) events.radarArea.mouseout(d, i, this); })

                update_radarArea.exit().remove()

                update_radarArea
                   .transition().duration(duration)
                   .style("fill", function(d, i, j) { return setColor(d); })
                   .attr("d", function(d, i) { return radarLine(d.values); })
                   .style("fill-opacity", function(d, i) { 
                      return options.areas.filter.indexOf(d.key) >= 0 ? 0 : options.areas.opacity;
                   })

                var update_radarStroke = update_blobWrapper.selectAll('.' + options.class + 'RadarStroke')
                   .data(function(d) { return [d]; }, get_key);

                update_radarStroke.enter()
                   .append("path")
                   .attr("class", options.class + "RadarStroke")
                   .attr("d", function(d, i) { return radarLine(d.values); })
                   .style("opacity", 0)
                   .style("stroke-width", options.areas.borderWidth + "px")
                   .style("stroke", function(d, i, j) { return setColor(d); })
                   .style("fill", "none")
                   .style("filter" , function() { if (options.filter) return "url(#" + options.filter + ")" });
            
                update_radarStroke.exit().remove();

                update_radarStroke
                   .transition().duration(duration)
                   .style("stroke", function(d, i, j) { return setColor(d); })
                   .attr("d", function(d, i) { return radarLine(d.values); })
                   .style("filter" , function() { if (options.filter) return "url(#" + options.filter + ")" })
                   .style("opacity", function(d, i) {
                      return options.areas.filter.indexOf(d.key) >= 0 ? 0 : 1;
                   });

                update_radarCircle = update_blobWrapper.selectAll('.' + options.class + 'RadarCircle')
                   .data(function(d, i) { return add_index(d._i, d.key, d.values) });

                update_radarCircle.enter()
                   .append("circle")
                   .attr("class", options.class + "RadarCircle")
                   .attr("r", options.areas.dotRadius)
                   .attr("cx", function(d, i, j){ return calcX(0, 0, i); })
                   .attr("cy", function(d, i, j){ return calcY(0, 0, i); })
                   .style("fill", function(d, i, j) { return setColor(d, d._i, _data[j].key); })
                   .style("fill-opacity", function(d, i) { return 0; })
                   .transition().duration(duration)
                   .attr("cx", function(d, i, j){ return calcX(d.value, 0, i); })
                   .attr("cy", function(d, i, j){ return calcY(d.value, 0, i); })

                update_radarCircle.exit().remove();

                update_radarCircle
                   .transition().duration(duration)
                   .style("fill", function(d, i, j) { return setColor(d, d._i, _data[j].key); })
                   .style("fill-opacity", function(d, i, j) { 
                      var key = _data.map(function(m) {return m.key})[j];
                      return options.areas.filter.indexOf(key) >= 0 ? 0 : 0.8; 
                   })
                   .attr("r", options.areas.dotRadius)
                   .attr("cx", function(d, i){ return calcX(d.value, 0, i); })
                   .attr("cy", function(d, i){ return calcY(d.value, 0, i); })
 
                var update_blobCircleWrapper = hover_node.selectAll("." + options.class + "RadarCircleWrapper")
                   .data(_data, get_key)

                update_blobCircleWrapper.enter()
                   .append("g")
                   .attr("class", options.class + "RadarCircleWrapper")
                   .attr("key", function(d) { return d.key; });

                update_blobCircleWrapper.exit()
                   .transition().duration(duration)
                   .style('opacity', 0)
                   .remove()

                update_radarInvisibleCircle = update_blobCircleWrapper.selectAll("." + options.class + "RadarInvisibleCircle")
                   .data(function(d, i) { return add_index(d._i, d.key, d.values); });

                update_radarInvisibleCircle.enter()
                   .append("circle")
                   .attr("class", options.class + "RadarInvisibleCircle")
                   .attr("r", options.areas.dotRadius * 1.5)
                   .attr("cx", function(d, i){ return calcX(d.value, 0, i); })
                   .attr("cy", function(d, i){ return calcY(d.value, 0, i); })
                   .style("fill", "none")
                   .style("pointer-events", "all")
                   .on('mouseover', function(d, i) { 
                      if (events.radarInvisibleCircle.mouseover) events.radarInvisibleCircle.mouseover(d, i, this); 
                   })
                   .on("mouseout", function(d, i) {
                      if (events.radarInvisibleCircle.mouseout) events.radarInvisibleCircle.mouseout(d, i, this); 
                   })

                update_radarInvisibleCircle.exit().remove();

                update_radarInvisibleCircle
                   .attr("cx", function(d, i){ return calcX(d.value, 0, i); })
                   .attr("cy", function(d, i){ return calcY(d.value, 0, i); })

                if (options.legend.display) {
                   var shape = d3.svg.symbol().type(options.legend.symbol).size(150)();
                   var colorScale = d3.scale.ordinal()
                      .domain(_data.map(function(m) { return m._i; }))
                      .range(_data.map(function(m) { return setColor(m); }));

                   if (d3.legend) {
                      var legendOrdinal = d3.legend.color()
                         .shape("path", shape)
                         .shapePadding(10)
                         .scale(colorScale)
                         .labels(colorScale.domain().map(function(m) { return keyScale(m); } ))
                         .on("cellclick", function(d, i) { 
                            if (events.legend.mouseclick) events.legend.mouseclick(d, i, this); 
                         })
                         .on("cellover", function(d, i) { 
                            if (events.legend.mouseover) events.legend.mouseover(d, i, this); 
                         })
                         .on("cellout", function(d, i) { 
                            if (events.legend.mouseout) events.legend.mouseout(d, i, this); 
                         });
    
                      legend_node
                        .call(legendOrdinal);

                      legend_node.selectAll('.cell')
                        .attr('gen', function(d, i) { 
                           if (legend_toggles[d] == true) {
                              var shape = d3.svg.symbol().type(options.legend.toggle).size(150)()
                           } else {
                              var shape = d3.svg.symbol().type(options.legend.symbol).size(150)()
                           }
                           d3.select(this).select('path').attr('d', function() { return shape; });
                           return legend_toggles[d];
                        });

                   }
               }

            }
        });
   }

   // REUSABLE FUNCTIONS
   // ------------------
   // calculate average for sorting, add unique indices for color
   // accounts for data updates and assigns unique colors when possible
   function dataCalcs() {

       // this deep copy method has limitations which should not be encountered
       // in this context
       _data = JSON.parse(JSON.stringify(data));

       var axes = getAxisLabels(_data);
       var ranges = {};

       // determine min/max range for each axis
       _data.forEach( function(e) { e.values.forEach (function(d, i) { 
          var range = ranges[axes[i]] ?                        // already started?
                      ranges[axes[i]] 
                      : options.axes.ranges[axes[i]] ?         // rande defined in options?
                        options.axes.ranges[axes[i]].slice()
                        : [0, 1];                              // default
          var max = d.value > range[1] ? d.value : range[1];
          var min = d.value < range[0] ? d.value : range[0];
          ranges[axes[i]] = [min, max];                        // update
       }) });

       // convert all axes to range [0,1] (procrustean)
       _data.forEach( function(e) { e.values.forEach (function(d, i) { 
          if (ranges[axes[i]][0] != 0 && ranges[axes[i]][1] != 1) {
             var range = ranges[axes[i]];
             d.original_value = Number(d.value);
             d.value = (d.value - range[0]) / (range[1] - range[0]);
          }
          if (options.axes.invert.indexOf(axes[i]) >= 0) {  d.value = 1 - d.value; }
       }) })

       _data.forEach( function(d) { d['_avg'] = d3.mean(d.values, function(e){ return e.value }); })

       _data = options.areas.sort ? 
               _data.sort( function(a, b) {
                  var a = a['_avg'];
                  var b = b['_avg'];
                  return b - a;
               })
               : _data;

       // filter out axes
       var d_indices = axes.map(function(m, i) { return (options.axes.filter.indexOf(axes[i]) >= 0) ? i : undefined; }).reverse();
       _data.forEach( function(e) { 
          d_indices.forEach(function(i) { if (i >= 0) e.values.splice(i, 1); });
       });

       var color_indices = (function(a,b){while(a--)b[a]=a;return b})(10,[]);
       var indices = _data.map(function (i) { return i._i });
       var unassigned = color_indices.filter(function(x) { return indices.indexOf(x) < 0; }).reverse();

       _data = _data.map(function(d, i) { 
          if (d['_i'] >= 0) {
             return d;
          } else {
             d['_i'] = unassigned.length ? unassigned.pop() : i; 
             return d;
          }
       });
   }

   function getAxisLabels(dataArray) {
       return dataArray.length ? 
              dataArray[0].values.map(function(i, j) { return i.axis;})
              : [];
   }

   function radialCalcs() {
      var axes  = _data.length ? 
                  _data[0].values.map(function(i, j) { return i;})
                  : [];
      var axisLabels = getAxisLabels(_data);

      radial_calcs = {
         // Radius of the outermost circle
         radius: Math.min((options.width - (options.margins.left + options.margins.right)) / 2, 
                          (options.height - (options.margins.bottom + options.margins.top)) / 2),
         axes: axes,
         axisLabels: axisLabels,

         // If the supplied maxValue is smaller than the actual one, replace by the max in the data
         maxValue: Math.max(options.circles.maxValue, d3.max(_data, function(i) { 
            return d3.max(i.values.map( function(o) { return o.value; })) 
         }))
      }
      radial_calcs.radius = Math.max(radial_calcs.radius, options.minRadius);
      radial_calcs.total = radial_calcs.axes.length;

      // The width in radians of each "slice"
      radial_calcs.angleSlice = radial_calcs.total > 0 ? 
                                Math.PI * 2 / radial_calcs.total 
                                : 1;

      //Scale for the radius
      radial_calcs.rScale = d3.scale.linear()
                              .range([0, radial_calcs.radius])
                              .domain([0, radial_calcs.maxValue])
   }

   function modifyList(list, values, valid_list) {

      if ( values.constructor === Array ) {
         values.forEach(function(e) { checkType(e); });
      } else if (typeof values != "object") {
         checkType(values);
      } else {
         return chart;
      }

      function checkType(v) {
         if (!isNaN(v) && (function(x) { return (x | 0) === x; })(parseFloat(v))) {
            checkValue(parseInt(v));
         } else if (typeof v == "string") {
            checkValue(v);
         }
      }

      function checkValue(val) {
         if ( valid_list.indexOf(val) >= 0 ) {
            modify(val);
         } else if ( val >= 0 && val < valid_list.length ) {
            modify(valid_list[val]);
         }
      }

      function modify(index) {
         if (list.indexOf(index) >= 0) {
            remove(list, index);
         } else {
            list.push(index);
         }
      }

      function remove(arr, item) {
        for (var i = arr.length; i--;) { if (arr[i] === item) { arr.splice(i, 1); } }
      }
   }

   function calcX(value, scale, index) { 
      return radial_calcs.rScale(value ? 
                                 value 
                                 : radial_calcs.maxValue * scale) * Math.cos(radial_calcs.angleSlice * index - Math.PI/2); 
   }

   function calcY(value, scale, index) { 
      return radial_calcs.rScale(value ? 
                                 value 
                                 : radial_calcs.maxValue * scale) * Math.sin(radial_calcs.angleSlice * index - Math.PI/2);
   }

   function setColor(d, index, key) {
      index = index ? index : d._i;
      key = key ? key : d.key;
      return options.areas.colors[key] ? options.areas.colors[key] : options.color(index);
   }
   // END REUSABLE FUNCTIONS

   // ACCESSORS
   // ---------
   chart.nodes = function() {
      return { svg: svg, chart: chart_node, hover: hover_node, tooltip: tooltip_node, legend: legend_node };
   }

   chart.events = function(functions) {
        if (!arguments.length) return events;
        var fKeys = Object.keys(functions);
        var eKeys = Object.keys(events);
        for (var k=0; k < fKeys.length; k++) {
           if (eKeys.indexOf(fKeys[k]) >= 0) events[fKeys[k]] = functions[fKeys[k]];
        }
        return chart;
   }

    chart.width = function(value) {
        if (!arguments.length) return options.width;
        if (options.resize) {
           options.widthMax = value;
        } else {
           options.width = value;
        }
        scaleChart();
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) return options.height;
        if (options.resize) {
           options.heightMax = value;
        } else {
           options.height = value;
        }
        scaleChart();
        return chart;
    };

    chart.duration = function(value) {
        if (!arguments.length) return transition_time;
       transition_time = value;
       return chart;
    }

    chart.update = function() {
        if (events.update.begin) events.update.begin(_data); 
        if (typeof update === 'function') update();
         setTimeout(function() { 
           if (events.update.end) events.update.end(_data); 
         }, transition_time);
    }

    chart.data = function(value) {
        if (!arguments.length) return data;
        if (legend_toggles.length) {
           var keys = _data.map(function(m) {return m.key});
           legend_toggles.forEach(function (e, i) { chart.filterAreas(keys[i]); })
        }
        legend_toggles = [];
        data = value;
        return chart;
    };

    chart.pop = function() {
        var row = data.pop()
        if (typeof update === 'function') update();
        return row;
    };

    chart.push = function(row) {
        if ( row && row.constructor === Array ) {
           for (var i=0; i < row.length; i++) {
              check_key(row[i]);
           }
        } else {
           check_key(row);
        }

        function check_key(one_row) {
           if (one_row.key && data.map(function(m) { return m.key }).indexOf(one_row.key) < 0) {
              data.push(one_row);
           }
        }

        return chart;
    };

    chart.shift = function() {
        var row = data.shift();
        if (typeof update === 'function') update();
        return row;
    };

    chart.unshift = function(row) {
        if ( row && row.constructor === Array ) {
           for (var i=0; i < row.length; i++) {
              check_key(row[i]);
           }
        } else {
           check_key(row);
        }

        function check_key(one_row) {
           if (one_row.key && data.map(function(m) { return m.key }).indexOf(one_row.key) < 0) {
              data.unshift(one_row);
           }
        }

        return chart;
    };

    chart.slice = function(begin, end) {
        return data.slice(begin, end);
    };

    // allows updating individual options and suboptions
    // while preserving state of other options
    chart.options = function(values) {
        if (!arguments.length) return options;
        var vKeys = Object.keys(values);
        var oKeys = Object.keys(options);
        for (var k=0; k < vKeys.length; k++) {
           if (oKeys.indexOf(vKeys[k]) >= 0) {
              if (typeof(options[vKeys[k]]) == 'object') {
                 var sKeys = Object.keys(values[vKeys[k]]);
                 var osKeys = Object.keys(options[vKeys[k]]);
                 for (var sk=0; sk < sKeys.length; sk++) {
                    if (osKeys.indexOf(sKeys[sk]) >= 0) {
                       options[vKeys[k]][sKeys[sk]] = values[vKeys[k]][sKeys[sk]];
                    }
                 }
              } else {
                 options[vKeys[k]] = values[vKeys[k]];
              }
           }
        }
        return chart;
    }

    chart.margins = function(value) {
        if (!arguments.length) return options.margins;
        var vKeys = Object.keys(values);
        var mKeys = Object.keys(options.margins);
        for (var k=0; k < vKeys.length; k++) {
           if (mKeys.indexOf(vKeys[k]) >= 0) options.margins[vKeys[k]] = values[vKeys[k]];
        }
        return chart;
    }

    chart.levels = function(value) {
        if (!arguments.length) return options.circles.levels;
        options.circles.levels = value;
        return chart;
    }

    chart.maxValue = function(value) {
        if (!arguments.length) return options.circles.maxValue;
        options.circles.maxValue = value;
        return chart;
    }

    chart.opacity = function(value) {
        if (!arguments.length) return options.areas.opacity;
        options.areas.opacity = value;
        return chart;
    }

    chart.borderWidth = function(value) {
        if (!arguments.length) return options.areas.borderWidth;
        options.areas.borderWidth = value;
        return chart;
    }

    chart.rounded = function(value) {
        if (!arguments.length) return options.areas.rounded;
        options.areas.rounded = value;
        return chart;
    }

    // range of colors to set color based on index
    chart.color = function(value) {
        if (!arguments.length) return options.color;
        options.color = value;
        return chart;
    }

    // colors set according to data keys
    chart.colors = function(colores) {
        if (!arguments.length) return options.areas.colors;
        options.areas.colors = colores;
        return chart;
    }

    chart.keys = function() {
       return data.map(function(m) {return m.key});
    }

    chart.axes = function() {
       return getAxisLabels(data);
    }

    // add or remove keys (or key indices) to filter axes
    chart.filterAxes = function(values) {
       if (!arguments.length) return options.axes.filter;
       var axes = getAxisLabels(data);
       modifyList(options.axes.filter, values, axes);
       return chart;
    }

    // add or remove keys (or key indices) to filter areas
    chart.filterAreas = function(values) {
       if (!arguments.length) return options.areas.filter;
       var keys = data.map(function(m) {return m.key});
       modifyList(options.areas.filter, values, keys);
       return chart;
    }

    // add or remove keys (or key indices) to invert
    chart.invert = function(values) {
       if (!arguments.length) return options.axes.invert;
       var axes = getAxisLabels(data);
       modifyList(options.axes.invert, values, axes);
       return chart;
    }

    // add or remove ranges for keys
    chart.ranges = function(values) {
       if (!arguments.length) return options.axes.ranges;
       if (typeof values == "string") return chart;

       var axes = getAxisLabels(data);

       if ( values && values.constructor === Array ) {
          values.forEach(function(e) { checkRange(e); } );
       } else {
          checkRange(values);
       }

       function checkRange(range_declarations) {
          var keys = Object.keys(range_declarations);
          for (var k=0; k < keys.length; k++) {
             if ( axes.indexOf(keys[k]) >= 0       // is valid axis
                  && range_declarations[keys[k]]    // range array not undefined
                  && range_declarations[keys[k]].constructor === Array
                  && checkValues(keys[k], range_declarations[keys[k]]) ) {
                     options.axes.ranges[keys[k]] = range_declarations[keys[k]];
             }
          }
       }

       function checkValues(key, range) {
          if (range.length == 2 && !isNaN(range[0]) && !isNaN(range[1])) { 
             return true;
          } else if (range.length == 0) {
             delete options.axes.ranges[key];
          }
          return false;
       }

       return chart;
    }
    // END ACCESSORS

   // DEFAULT EVENTS
   // --------------
   function areaMouseover(d, i, self) {
      if (legend_toggles[d._i]) return;
      //Dim all blobs
      chart_node.selectAll("." + options.class + "RadarArea")
         .transition().duration(200)
			.style("fill-opacity", function(d, i, j) {
            return options.areas.filter.indexOf(d.key) >= 0 ? 0 : 0.1;
          }) 
      //Bring back the hovered over blob
      d3.select(self)
         .transition().duration(200)
			.style("fill-opacity", function(d, i, j) {
            return options.areas.filter.indexOf(d.key) >= 0 ? 0 : 0.7;
         });	
   }

   function areaMouseout(d, i, self) {
      //Bring back all blobs
      chart_node.selectAll("." + options.class + "RadarArea")
         .transition().duration(200)
         .style("fill-opacity", function(d, i, j) {
            return options.areas.filter.indexOf(d.key) >= 0 ? 0 : options.areas.opacity;
         });
   }

   // on mouseover for the legend symbol
	function legendMouseover(d, i, self) {
         if (legend_toggles[d]) return;
         var area = keys.indexOf(d) >= 0 ? d : keyScale(d); 

			//Dim all blobs
			chart_node.selectAll("." + options.class + "RadarArea")
				.transition().duration(200)
				.style("fill-opacity", function(d, i, j) {
               return options.areas.filter.indexOf(d.key) >= 0 ? 0 : 0.1;
            }); 
			//Bring back the hovered over blob
         chart_node.selectAll("." + options.class + "RadarArea." + area.replace(/\s+/g, ''))
				.transition().duration(200)
				.style("fill-opacity", function(d, i, j) {
               return options.areas.filter.indexOf(d.key) >= 0 ? 0 : 0.7;
            });	
	}

   function legendClick(d, i, self) {
         var keys = _data.map(function(m) {return m.key});
         modifyList(options.areas.filter, keys[d], keys);
         legend_toggles[d] = legend_toggles[d] ? false : true;
         update();
   }

   function tooltip_show(d, i, self) {
         if (legend_toggles[d._i]) return;
         var labels = getAxisLabels(_data);
         chart_node.select('[key="'+d.axis+'"]').select('text').style('opacity', 1);
         var value = d.original_value ? d.original_value : Format(d.value);
         newX =  parseFloat(d3.select(self).attr('cx')) - 10;
         newY =  parseFloat(d3.select(self).attr('cy')) - 10;
            
         tooltip
          .attr('x', newX)
          .attr('y', newY)
          .text(value)
          .transition().duration(200)
          .style('opacity', 1);
   }

   function tooltip_hide(d, i, self) {
         chart_node.select('[key="'+d.axis+'"]').select('text')
             .style('opacity', options.axes.display && radial_calcs.radius > options.axes.threshold ? 1 : 0);
         tooltip
          .transition().duration(200)
          .style("opacity", 0);
   }

	// Helper Functions
   // ----------------

   function add_index(index, key, values) {
      for (var v=0; v<values.length; v++) {
         values[v]['_i'] = index;
         values[v]['key'] = key;
      }
      return values;
   }

   var get_key = function(d) { return d && d.key; };
   var get_axis = function(d) { return d && d.axis; };

	// Wraps SVG text	
	// modification of: http://bl.ocks.org/mbostock/7555321
	function wrap(text, width) {
	  text.each(function(d, i, j) {
		var text = d3.select(this);
		var words = d.axis.split(/\s+/).reverse();
		var word;
		var line = [];
		var lineNumber = 0;
		var lineHeight = 1.4; // ems
      var x = calcX(null, options.circles.labelFactor, j);
      var y = calcY(null, options.circles.labelFactor, j);
	   var dy = parseFloat(text.attr("dy"));
		var tspan = text.text(null).append("tspan").attr("dy", dy + "em");

		while (word = words.pop()) {
		   line.push(word);
		   tspan.text(line.join(" "));
		   if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
		   }
		}
	  });
	}

   window.addEventListener( 'resize', scaleChart, false );

   function scaleChart() {
      if (!options.resize || !dom_parent) return;
      var width_offset = dom_parent.node().getBoundingClientRect().left;
      var height_offset = dom_parent.node().getBoundingClientRect().top;
      var width = Math.min(options.widthMax, document.documentElement.clientWidth - width_offset);
      var height = Math.min(options.heightMax, document.documentElement.clientHeight - height_offset);
      options.height = height;
      options.width = width;
      chart.update();
   }

   return chart;

}

var UUID = (function() {
  var self = {};
  var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
  self.generate = function() {
    var d0 = Math.random()*0xffffffff|0;
    var d1 = Math.random()*0xffffffff|0;
    var d2 = Math.random()*0xffffffff|0;
    var d3 = Math.random()*0xffffffff|0;
    return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
      lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
      lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
      lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
  }
  return self;
})();
