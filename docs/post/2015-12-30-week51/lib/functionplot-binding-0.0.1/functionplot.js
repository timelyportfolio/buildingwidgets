HTMLWidgets.widget({

  name: 'functionplot',

  type: 'output',

  initialize: function(el, width, height) {

    return {};

  },

  renderValue: function(el, x, instance) {

    // clear out the container in case of dynamic/Shiny
    el.innerHTML = "";
    
    x.target = el;
    x.width = el.getBoundingClientRect().width;
    x.height = el.getBoundingClientRect().height;
    
    //insure data is an array
    if(!Array.isArray(x.data)){
      x.data = [x.data]
    }
    
    instance = functionPlot(x);

  },

  resize: function(el, width, height, instance) {

  }

});
