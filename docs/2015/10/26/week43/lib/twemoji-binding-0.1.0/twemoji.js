HTMLWidgets.widget({

  name: 'twemoji',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {

    twemoji.parse(
      document.body,
      x.options
    );

  },

  resize: function(el, width, height, instance) {

  }

});
