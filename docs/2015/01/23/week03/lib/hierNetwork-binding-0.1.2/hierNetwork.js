HTMLWidgets.widget({

  name: "hierNetwork",
  type: "output",

  initialize: function(el, width, height) {

    svg = d3.select(el).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
    return {};

  },

  resize: function(el, width, height, tree) {

  },

  renderValue: function(el, x, tree) {
    // x is a list with two elements, options and root; root must already be a
    // JSON array with the d3Tree root data
    
    // add type of chart without period as class for styling
    d3.select(el).classed(x.options.type.replace(/\./g, ""),true);
    
    var svg = d3.select(el).selectAll("svg");
    
    tree.chart = svg.chart( x.options.type )
        .value( x.options.value )
            
    if( typeof x.options.margin !== "undefined" && tree.chart.margin ){
      tree.chart.margin( x.options.margin )
    }
            
    if( typeof x.options.radius !== "undefined" ) {
      tree.chart.radius( x.options.radius )
    }
    
    if( typeof x.options.zoomable !== "undefined" && x.options.zoomable && tree.chart.zoomable ){
      tree.chart.zoomable([0.1, 5])
    }
    
    if( typeof x.options.collapsible !== "undefined" && x.options.collapsible && tree.chart.collapsible ) {
      tree.chart.collapsible()
    }
    
    if( typeof x.options.duration !== "undefined" ){
      tree.chart.duration( x.options.duration )
    }
    
    tree.chart.draw( JSON.parse( x.root ) );

  },
});
