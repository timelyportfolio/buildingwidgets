HTMLWidgets.widget({

  name: 'd3radar',

  type: 'output',

  initialize: function(el, width, height) {

    return {};

  },

  renderValue: function(el, x, instance) {

    // delete all contents in the case of dynamic/shiny
    el.innerHTML = "";
    
    var radarChart = RadarChart();
    
    // fit height and width of container
    radarChart.width( el.getBoundingClientRect().width );
    radarChart.height( el.getBoundingClientRect().height );
    
    d3.select(el)
      .call(radarChart);
    
    
    radarChart
      .data(x.data)
      .options({'filter':false}) // disable filter for now since needs unique id
      .options({'legend': {display: true}}) //turn on legend by default
      .update();

  },

  resize: function(el, width, height, instance) {

  }

});
