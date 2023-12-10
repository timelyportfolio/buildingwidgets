HTMLWidgets.widget({

  name: 'navr',

  type: 'output',

  initialize: function(el, width, height) {

    return {}

  },

  renderValue: function(el, x, instance) {

    // create a new div for our toolbar
    var navDiv = document.createElement("nav");
    navDiv.id = "nav-" + el.id
    // add the items from the taglist into our div
    navDiv.innerHTML = x.taglist;

    // get the selector provided so we can add our navDiv
    var navContainer = document.querySelectorAll( x.selector )[0]
    // add our navDiv as the first element in the container
    navContainer.insertBefore(navDiv, navContainer.firstChild)


    var nav = responsiveNav(
      navDiv.id,
      x.options
    );

  },

  resize: function(el, width, height, instance) {

  }

});
