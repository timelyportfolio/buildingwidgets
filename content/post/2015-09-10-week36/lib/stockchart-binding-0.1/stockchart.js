HTMLWidgets.widget({

  name: 'stockchart',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {

    var parseDate = d3.time.format("%Y-%m-%d").parse;

    x.data = HTMLWidgets.dataframeToD3( x.data );

    x.data.forEach(function(d, i) {
      d.date = new Date(parseDate(d.date).getTime());
      d.open = +d.open;
      d.high = +d.high;
      d.low = +d.low;
      d.close = +d.close;
      d.volume = +d.volume;
    })

    setTimeout(function(){
      React.render(
        React.createElement(
          CandleStickChartWithZoomPan,
          x
        ), document.getElementById(el.id)
      ), 3000})


  },

  resize: function(el, width, height, instance) {

  }

});
