HTMLWidgets.widget({

  name: 'tooltipster',

  type: 'output',

  initialize: function(el, width, height) {

    return {  };

  },

  renderValue: function(el, x, instance) {

    $(x.selector).tooltipster(x.options);

  },

  resize: function(el, width, height, instance) {

  }

});
