HTMLWidgets.widget({

  name: 'bioFabric_htmlwidget',

  type: 'output',

  initialize: function(el, width, height) {

    return {}

  },

  renderValue: function(el, x, instance) {
    
    // clear contents in case of dynamic/Shiny
    el.innerHTML = "";
    
    // convert to array of objects
    x.data.nodes = HTMLWidgets.dataframeToD3(x.data.nodes);
    x.data.links = HTMLWidgets.dataframeToD3(x.data.links);
    
    fabric( x.data, {container: el} );

  },

  resize: function(el, width, height, instance) {

  }

});
