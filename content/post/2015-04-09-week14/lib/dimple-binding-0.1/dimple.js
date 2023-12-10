HTMLWidgets.widget({
  name: "dimple",
  type: "output",
  
  initialize: function(el, width, height){
    return {};
  },
  
  resize: function(el, width, height, instance) {

  },  
  
  renderValue: function(el, x, instance){
    d3.select(el).selectAll("*").remove()
    
    // add title if provided
    if (x.options.title){
      if (x.options.title.html){
        // if html provided then use innerHTML
        // this is not robust and will need more checking on js or R side
        el.innerHTML = x.options.title.html;
      }
      else if(x.options.title.text) {
        // if just text then make it an h3
        titlenode = document.createElement("h3")
        titlenode.style["margin-top"] = 0;
        titlenode.style["margin-bottom"] = 0;
        titlenode.innerText = x.options.title.text;
        el.appendChild(titlenode);
      }
    }
    
    // make data in record or array of objects format
    //    using the HTMLWidgets helper function
    x.data = HTMLWidgets.dataframeToD3(x.data);

    el.widgetDimple = drawChart(x.options, x.data);
    
    if(typeof x.options.tasks !== "undefined"){
      if(!x.options.tasks.length){ 
        x.options.tasks = [x.options.tasks]
      }
      
      x.options.tasks.map(function(task){
        if(typeof task == "function"){
          task.call(el)
        }
      })
    }
    
    function drawChart(opts, data){ 
      var subCharts = [];
      
      var c = null;
      var assignedColors = {};
      
      //handle RJSONIO box/unbox troubles
      if( opts.defaultColors.length == 1 ) {
        opts.defaultColors = opts.defaultColors[0];
      }
      
      //move this to top or make function since duplicated
      //allow manipulation of default colors to use with dimple
      if( opts.defaultColors.length || typeof(opts.defaultColors) == "function" ) {
        var defaultColorsArray = [];
        if (typeof(opts.defaultColors) == "function") {
          //assume this is a d3 scale
          //if there is a domain for the color scale given
          //then we will need to assign colors with dimples assignColor
          if( opts.defaultColors.domain().length > 0 ){
            defaultColorsArray = opts.defaultColors.range();
            opts.defaultColors.domain().forEach( function( d, i ) {
              assignedColors[d] = new dimple.color(opts.defaultColors.range()[i])
            })
          } else {
            for (var n=0;n<opts.defaultColors.range().length;n++) {
              defaultColorsArray.push(opts.defaultColors(n));
            };
          }
        } else {
          // if here then should be an array of hex colors
          defaultColorsArray = opts.defaultColors; 
          
          
          // just get the first 6 characters of hex color
          defaultColorsArray = defaultColorsArray.map(function(d){
            return d.substring(0,7);
          })
        }
    
        
        //if colors not assigned with no keys and opts.groups
        if (!(Object.keys(assignedColors).length) & Boolean(opts.groups)) {
          //let's just assign colors in order with each unique
          //this is important if facetting where need colors assigned
          //if not in all pairs
          opts.groups = (typeof opts.groups == "string") ? [opts.groups] : opts.groups;
          d3.set(
            data.map(function(d){
              //dimple colors by last item in groups
              return d[opts.groups[opts.groups.length-1]]
            })
          ).values().forEach(function(u,i){
            //u will be our uniqe and will pick color from defaultColorsArray
            //console.log([u,defaultColorsArray[i]].concat());
            assignedColors[u] = new dimple.color(defaultColorsArray[i % defaultColorsArray.length])
          })
        }
      }
    
      
      //do series
      //set up a function since same for each
      //as of now we have x,y,groups,data,type in opts for primary layer
      //and other layers reside in opts.layers
      function buildSeries(layer, hidden, myChart, data){
        //inherit from primary layer if not intentionally changed or xAxis, yAxis, zAxis null
        if (!layer.xAxis) layer.xAxis = opts.xAxis;    
        if (!layer.yAxis) layer.yAxis = opts.yAxis;
        if (!layer.zAxis) layer.zAxis = opts.zAxis;
        
        var x = buildAxis("x", layer, myChart);
        x.hidden = hidden;
        
        var y = buildAxis("y", layer, myChart);
        y.hidden = hidden;
        
        //z for bubbles
        var z = null;
        if (!(typeof(layer.zAxis) === 'undefined') && layer.zAxis.type){
          z = buildAxis("z", layer, myChart);
        };
        
        //here think I need to evaluate group and if missing do null
        //as the group argument
        //if provided need to use groups from layer
        var s = new dimple.series(myChart, null, x, y, z, c, null, dimple.plot[layer.type], dimple.aggregateMethod.avg, dimple.plot[layer.type].stacked);
        
        //as of v1.1.4 dimple can use different dataset for each series
        // facets not currently working with layer data; need to change structure
        // for now just allow one source of data
        s.data = data;
        /*
        if(layer.data){
          //convert to an array of objects
          var tempdata;
          //avoid lodash for now
          datakeys = d3.keys(layer.data)
          tempdata = layer.data[datakeys[1]].map(function(d,i){
            var tempobj = {}
            datakeys.forEach(function(key){
              tempobj[key] = layer.data[key][i]
            })
            return tempobj
          })
          s.data = tempdata;
        }
        */
        
        //for measure axis dimple sorts at the series level not at axis level
        ['x','y'].map(function(ax){
          if( layer[ax + 'Axis'].type=="addMeasureAxis" && layer[ax + 'Axis'].orderRule ){
            if( typeof layer[ax + 'Axis'].orderRule == "string" ){
              s.addOrderRule( layer[ax + 'Axis'].orderRule );
            } else if ( typeof layer[ax + 'Axis'].orderRule == "object" ) {
              s._orderRules = layer[ax + 'Axis'].orderRule;
            }
          }
        })
        
        if(layer.hasOwnProperty("groups")) {
          s.categoryFields = (typeof layer.groups === "object") ? layer.groups : [layer.groups];
          //series offers an aggregate method that we will also need to check if available
          //options available are avg, count, max, min, sum
        }
        if (!(typeof(layer.aggregate) === 'undefined')) {
          s.aggregate = eval(layer.aggregate);
        }
        if (!(typeof(layer.lineWeight) === 'undefined')) {
          s.lineWeight = layer.lineWeight;
        }
        if (!(typeof(layer.lineMarkers) === 'undefined')) {
          s.lineMarkers = layer.lineMarkers;
        }
        if (!(typeof(layer.barGap) === 'undefined')) {
          s.barGap = layer.barGap;
        }    
        if (!(typeof(layer.interpolation) === 'undefined')) {
          s.interpolation = layer.interpolation;
        }     
       /* if (!(typeof(layer.eventHandler) === 'undefined')) {
          layer.eventHandler = (layer.eventHandler.length === "undefined") ? layer.eventHandler : [layer.eventHandler];
          layer.eventHandler.forEach(function(evt){
            s.addEventHandler(evt.event, eval(evt.handler))
          })
        }*/
          
        myChart.series.push(s);
        
        /*placeholder fix domain of primary scale for new series data
        //not working right now but something like this
        //for now just use overrideMin and overrideMax from rCharts
        for( var i = 0; i<2; i++) {
          if (!myChart.axes[i].overrideMin) {
            myChart.series[0]._axisBounds(i==0?"x":"y").min = myChart.series[0]._axisBounds(i==0?"x":"y").min < s._axisBounds(i==0?"x":"y").min ? myChart.series[0]._axisBounds(i==0?"x":"y").min : s._axisBounds(i==0?"x":"y").min;
          }
          if (!myChart.axes[i].overrideMax) {  
            myChart.series[0]._axisBounds(i==0?"x":"y")._max = myChart.series[0]._axisBounds(i==0?"x":"y").max > s._axisBounds(i==0?"x":"y").max ? myChart.series[0]._axisBounds(i==0?"x":"y").max : s._axisBounds(i==0?"x":"y").max;
          }
          myChart.axes[i]._update();
        }
        */
        
        return myChart;
      };
    
        
      //function to build axes
      function buildAxis(position, layer, myChart){
        var axis;
        var axisopts = opts[position+"Axis"];
        
        if(axisopts.measure) {
          axis = myChart[axisopts.type](position,layer[position],axisopts.measure);
        } else {
          axis = myChart[axisopts.type](position, layer[position]);
        };
        
        if (axisopts.type === "addPctAxis") {
          axis.showPercent = true;
        } else {
          axis.showPercent = false;
        }
        
        if (axisopts.orderRule) axis.addOrderRule(axisopts.orderRule);
        if (axisopts.grouporderRule) axis.addGroupOrderRule(axisopts.grouporderRule);  
        if (axisopts.inputFormat) axis.dateParseFormat = axisopts.inputFormat;
        if (axisopts.outputFormat) axis.tickFormat = axisopts.outputFormat;        
        Object.keys(axisopts).filter(function(oky){
          return [
            "measure","type","orderRule","grouporderRule",
            "outputFormat","inputFormat"
          ].indexOf(oky) < 0
        }).forEach(function(oky){
          axis[oky] = axisopts[oky]
        })
        return axis;
      };
          
          
    
      //if facet not provided for x or y make Dummy variable
      //handle NULL facet
      if (typeof opts.facet == "undefined") opts.facet = {}
      opts.facet.x = opts.facet.x ? opts.facet.x : "Dummy"
      opts.facet.y = opts.facet.y ? opts.facet.y : "Dummy"    
      if(opts.facet.x === "Dummy" || opts.facet.y === "Dummy") {
        data.forEach(function(d){
          d.Dummy = 1;
        })
      }
    
      var rows = d3.set(data.map(function(d){return d[opts.facet.y]})).values();
      var nrow = opts.facet.nrow ? opts.facet.nrow : rows.length;
      var cols = d3.set(data.map(function(d){return d[opts.facet.x]})).values()
      var ncol = opts.facet.ncol ? opts.facet.ncol : cols.length;
      
      var tuples = d3.merge(rows.map(function(row,irow){return cols.map(function(col,icol){return {key:row + "~" + col, values: {"row":irow, "col":icol} }})}))
        
    
      var svgGrid = d3.select("#" + el.id).append("svg")
        .style("width", opts.width ? opts.width : "100%")
        .style("height", opts.height ? opts.height : "90%" );
       // .attr("transform", "translate(50,0)");
       
      var grid = d3.layout.grid()
        .rows( nrow )
        .cols( ncol )
        .size([ opts.width ? opts.width : el.getBoundingClientRect().width * 0.9, opts.height? opts.height : el.getBoundingClientRect().height * 0.9 - 30])
        .bands();    
    
      grid(tuples);
    
      tuples.forEach(function(cell,cellnum) {

        var filteredData = dimple.filterData(data, opts.facet.x, cell.key.split('~')[1]);
        filteredData = dimple.filterData(filteredData, opts.facet.y, cell.key.split('~')[0]);    
        
        // Draw a new chart which will go in the current shape
        var subChart = new dimple.chart(svgGrid, filteredData);

        if (tuples.length > 1){
          // Position the chart inside the shape
          subChart.height = grid.nodeSize()[1]
          subChart.width = grid.nodeSize()[0]      
          
          if (opts.margins) {
            subChart.setBounds(
              parseFloat(cell.x) + opts.margins.left,
              parseFloat(cell.y) + opts.margins.top,
              subChart.width - opts.margins.right- opts.margins.left,
              subChart.height - opts.margins.top - opts.margins.bottom
            )
          } else {
            subChart.setBounds(
              parseFloat(cell.x) + (30 * ( ncol == 1 ? 1.5 : 1 )), 
              parseFloat(cell.y) + (20 * ( nrow == 1 ? 1.5 : 2 )),
              parseFloat(grid.nodeSize()[0]) - (30 * ( ncol == 1 ? 1.25 : 2 )),
              parseFloat(grid.nodeSize()[1]) - (20 * ( nrow == 1 ? 3 : 2.5 ))
            );
          }
          
        } else { //only one chart
          if (opts.bounds) {
            subChart.setBounds(opts.bounds.x, opts.bounds.y, opts.bounds.width, opts.bounds.height);//myChart.setBounds(80, 30, 480, 330);
          }
        }
        
        //dimple allows use of custom CSS with noFormats
        if(opts.noFormats) { subChart.noFormats = opts.noFormats; };
        
        //need to fix later for better colorAxis support
        if(d3.keys(opts.colorAxis).length > 0) {
          c = subChart[opts.colorAxis.type](opts.colorAxis.colorSeries,opts.colorAxis.palette) ;
          if(opts.colorAxis.outputFormat){
            c.tickFormat = opts.colorAxis.outputFormat;
          }
        }
      
        //add the colors from the array into the chart's defaultColors
        if (typeof defaultColorsArray != "undefined"){
          subChart.defaultColors = defaultColorsArray.map(function(d) {
            return new dimple.color(d);
          });          
        }
        subChart._assignedColors = assignedColors;
        
        subChart = buildSeries(opts, false, subChart, filteredData);
        if (opts.layers.length > 0) {
          opts.layers.forEach(function(layer){
            subChart = buildSeries(layer, true, subChart, filteredData);
          })
        }
      
        //unsure if this is best but if legend is provided (not empty) then evaluate
        // also only want one legend so only set for cellnum = 0
        if(d3.keys(opts.legend).length > 0 && cellnum == 0) {
          var l =subChart.addLegend();
          d3.keys(opts.legend).forEach(function(d){
            l[d] = opts.legend[d];
          });
        }
        //quick way to get this going but need to make this cleaner
        if(opts.storyboard) {
          subChart.setStoryboard(opts.storyboard);
        };
        
        //catch all for other options
        //these can be provided by dMyChart$chart( ... )
        //{{{ chart }}}  
        
        //add facet row and column in case we need later
        subChart.facetposition = cell.values;
        
        // undocumented hook to run last minute chart code
        //  allow functions using htmlwidgets::JS
        if( typeof opts.chart !== "undefined" ) {
          if( opts.chart.length == 0 ) opts.chart = [opts.chart]
          opts.chart.forEach(function(c){
            if(typeof c == "function"){
              // function should return an altered chart
              subChart = c.call(subChart);
            }
          })
        }
        
        subCharts.push(subChart);
      })
    
      subCharts.forEach(function(subChart) {
        subChart.draw();
      })
      
      //get rid of all y for those not in column 1
      //can easily customize this to only remove bits and pieces
      if(opts.facet.removeAxes) {
        ["x","y","z"].forEach(function(position){
          //work on axis scaling
          //assume if remove then same scales for all charts
          axisdomain = [];      
          subCharts.forEach(function(subChart){
            subChart.axes.forEach(function(axis){
              if (axis.position === position && !axis._hasCategories()){
                axisdomain.push(axis._scale.domain())
              }
            })
          });
          axisdomain = d3.extent([].concat.apply([], axisdomain));
          subCharts.forEach(function(subChart){
            subChart.axes.forEach(function(axis){
              if (axis.position === position && !axis._hasCategories()){
                axis.overrideMin = axisdomain[0];
                axis.overrideMax = axisdomain[1];
              }
            })
            subChart.draw(null,true)
          });
        })
        
        //evaluate which do not fall in column 1 or row 1 to remove
        var xpos = d3.extent(subCharts,function(d){return d.x});
        var ypos = d3.extent(subCharts,function(d){return d.y});    
        subCharts.filter(function(d){
          return d.x!=xpos[0];
        }).forEach(function(d){
          d.series[0]._dropLineOrigin = function(){
            return {"x" : xpos[0],"y" : ypos[1] + d._heightPixels()}
          }
          d.axes.forEach(function(axis){
            if (axis.position === "y"){
              //leave there for reference but set opacity 0
              if (axis.shapes) axis.shapes.style("opacity",0);
              if (axis.titleShape) axis.titleShape.style("opacity",0);
            }
          })
        });
        //now x for those not in row 1
        subCharts.filter(function(d){
          return d.y!=ypos[1];
        }).forEach(function(d){
          d.series[0]._dropLineOrigin = function(){
            return {"x" : xpos[0],"y" : ypos[1] + d._heightPixels()}
          }        
          d.axes.forEach(function(axis){
            if (axis.position === "x"){
              //leave there for reference but set opacity 0
              if (axis.shapes) axis.shapes.style("opacity",0);
              if (axis.titleShape) axis.titleShape.style("opacity",0);
            }
          })
        });
      }
    return subCharts;
    }
  }
})
