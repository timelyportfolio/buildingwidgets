HTMLWidgets.widget({

  name: 'flowtype',

  type: 'output',

  initialize: function(el, width, height) {

    return {  }

  },

  renderValue: function(el, x, instance) {

    el.style.display = 'none';
    $(x.selector).flowtype( x.options );

  },

  resize: function(el, width, height, instance) {

  }

});
