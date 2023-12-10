HTMLWidgets.widget({

  name: 'd3kit-timeline',

  type: 'output',

  factory: function(el, width, height) {
    
    var chart = {}; 

    return {
      renderValue: function(x) {
        // clean out el container in case of dynamic/Shiny
        el.innerHTML = "";
        
        // get width and height from el container
        var width = el.getBoundingClientRect().width;
        var height = el.getBoundingClientRect().height;
        
        // add width and height to options
        x.options.initialWidth = width;
        x.options.initialHeight = height;
        
        // try to convert time variable into JavaScript date
        if(typeof(x.options.timeFn) === "undefined") {
          x.options.timeFn = function(d){
            return new Date(d.time)
          };
        } else {
          // thanks http://stackoverflow.com/questions/1833588/javascript-clone-a-function
          var originaltimeFn = x.options.timeFn.bind({});
          x.options.timeFn = function(d){ return new Date(originaltimeFn(d)) };
        }
        
        // instantiate d3kit-timeline using options
        chart = new d3Kit.Timeline(el, x.options);
        
        // work to specify axis
        if(typeof(x.axes) !== "undefined"){
          Object.keys(x.axes[0]).map(function(axkey,i){
            if(this[axkey] !== null && chart.axis[axkey]){
              chart.axis[axkey](this[axkey])
            }
          },
          x.axes[0])
        }
        
        // supply data in array of objects form
        chart.data(HTMLWidgets.dataframeToD3(x.data));
        
        // set up a container for tasks to perform after completion
        //  one example would be add callbacks for event handling
        //  styling
        if (!(typeof x.tasks === "undefined") ){
          if ( (typeof x.tasks.length === "undefined") ||
           (typeof x.tasks === "function" ) ) {
             // handle a function not enclosed in array
             // should be able to remove once using jsonlite
             x.tasks = [x.tasks];
          }
          x.tasks.map(function(t){
            // for each tasks call the task with el supplied as `this`
            t.call({el:el,chart:chart});
          });
        }
      },

      resize: function(width, height) {
        
      },
      
      timeline: chart
    };
    
  }
});