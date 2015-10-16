HTMLWidgets.widget({

  name: 'railroad',

  type: 'output',

  initialize: function(el, width, height) {

    return { }

  },

  renderValue: function(el, x, instance) {
    // clean out el for dynamic / Shiny situations
    el.innerHTML = ""
    
    Diagram.apply(null,x.diagram.map(function(d){
        var f_;
        try { 
          f_ = eval(d);
        } catch(e){
         return d; 
        }
        return f_;
      })).addTo(el)
  },

  resize: function(el, width, height, instance) {

  }

});
