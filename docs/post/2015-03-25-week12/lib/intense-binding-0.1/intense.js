HTMLWidgets.widget({

  name: 'intense',

  type: 'output',

  initialize: function(el, width, height) {

    return { }

  },

  renderValue: function(el, x, instance) {
    // start by clearing out the el if dynamic/Shiny
    el.innerHTML = ""

    // will consider three cases
    //  one if img populated then assume we create the element with innerHTML
    //    and then run Intense on the childNodes
    if( x.img ){
      el.style.display = "";
      el.innerHTML = x.img;
      Intense(el.childNodes)
    } else if( x.selector ) {
      // second case if selector then just run Intense on the selector
      el.style.display = "none"
      Intense( document.querySelectorAll( x.selector ) )
    } else {
    // third if neither img or selector then assume being used for dependencies
      el.style.display = "none"
    }

  },

  resize: function(el, width, height, instance) {

  }

});
