/*! d3.chart.layout - v0.1.1
 *  https://github.com/bansaghi/d3.chart.layout/
 *  
 *  Copyright (c) 2014 Anna Bansaghi
 *  License under the BSD license.
 */

d3.chart("hierarchy", {

  initialize: function() {

    this.d3      = {};
    this.layers  = {};

    this.base.attr("width",  this.base.node().parentNode.clientWidth);
    this.base.attr("height", this.base.node().parentNode.clientHeight);

    this.d3.zoom = d3.behavior.zoom();
    this.layers.base = this.base.append("g");
    
    this.name(this._name         || "name");
    this.value(this._value       || "value");
    this.duration(this._duration || 750);

  },




  transform: function(root) {
    return root;
  },


  name: function(_) {
    if (!arguments.length) {
      return this._name;
    }

    this._name = _;

    this.trigger("change:name");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  value: function(_) {
    if (!arguments.length) {
      return this._value;
    }

    this._value = _;

    this.trigger("change:value");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  duration: function(_) {
    if (!arguments.length) {
      return this._duration;
    }

    this._duration = _;

    this.trigger("change:duration");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  zoomable: function(_) {
    var chart = this;

    var extent = _ || [0, Infinity];

    function zoom() {
      chart.layers.base
        .attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    }

    chart.base.call(chart.d3.zoom.scaleExtent(extent).on("zoom", zoom));

    return chart;
  },
});




d3.chart("hierarchy").extend("cluster-tree", {

  initialize : function() {

    var chart = this;

    var counter = 0;

    chart.radius(chart._radius || 4.5);

    chart._width  = chart.base.attr("width");
    chart._height = chart.base.attr("height");

    chart.layers.links = chart.layers.base.append("g").classed("links", true);
    chart.layers.nodes = chart.layers.base.append("g").classed("nodes", true);


    chart.layer("nodes", chart.layers.nodes, {

      dataBind: function(data) {
        return this.selectAll(".node")
          .data(data, function(d) { return d._id || (d._id = ++counter); });
      },

      insert: function() {
        return this.append("g")
          .classed("node", true);
      },

      events: {
        "enter": function() {
          this.append("circle")
            .attr("r", 0)
            .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

          this.append("text")
            .attr("dy", ".35em")
            .text(function(d) { return d[chart._name]; })
            .style("fill-opacity", 0);

          // http://stackoverflow.com/questions/1067464/need-to-cancel-click-mouseup-events-when-double-click-event-detected/1067484#1067484
          this.on("click", function(event) {
            var that = this;

            setTimeout(function() {
              var dblclick = parseInt(that.getAttribute("data-double"), 10);
              if (dblclick > 0) {
                that.setAttribute("data-double", dblclick-1);
              } else {
                chart.trigger("singleClick", event);
              }
            }, 300);
            d3.event.stopPropagation();

          }).on("dblclick", function(event) {
            this.setAttribute("data-double", 2);
            chart.trigger("doubleClick", event);
            d3.event.stopPropagation();
          });
        },

        "merge:transition": function() {
          this.select("circle")
            .attr("r", chart._radius)
            .style("stroke", function(d) { return d.path ? "brown" : "steelblue"; })
            .style("fill", function(d) { return d.path && ! d.parent.path ? "#E2A76F"
                                                                          : d._children ? "lightsteelblue" : "#fff"; });
          this.select("text")
            .style("fill-opacity", 1);
        },

        "exit:transition": function() {
          this.duration(chart._duration)
            .remove();

          this.select("circle")
            .attr("r", 0);

          this.select("text")
            .style("fill-opacity", 0);
        },
      }
    });


    chart.layer("links", chart.layers.links, {
      dataBind: function(data) {
        return this.selectAll(".link")
          .data(chart.d3.layout.links(data), function(d) { return d.target._id; });
      },

      insert: function() {
        return this.append("path")
          .classed("link", true);
      },

      events: {
        "enter": function() {
          this
            .attr("d", function(d) {
              var o = { x: chart.source.x0, y: chart.source.y0 };
              return chart.d3.diagonal({ source: o, target: o });
            });
        },

        "merge:transition": function() {
          this.duration(chart._duration)
            .attr("d", chart.d3.diagonal)
            .attr("stroke", function(d) { return d.source.path && d.target.path ? "#dd7b7b" : "#ccc"; })
            .style("stroke-width", function(d) { return d.path ? 1 : 1.5; });
        },

        "exit:transition": function() {
          this.duration(chart._duration)
            .attr("d", function(d) {
              var o = { x: chart.source.x, y: chart.source.y };
              return chart.d3.diagonal({ source: o, target: o });
            })
            .remove();
        },
      },
    });
  },


  radius: function(_) {
    if (!arguments.length) {
      return this._radius;
    }

    this._radius = _;  

    this.trigger("change:radius");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  collapsible: function() {
    var chart = this;

    chart.once("collapse:init", function() {
      //chart.root.children.forEach(collapse);
    });


    chart.on("singleClick", function(d) {
      d = toggle(d);
      chart.trigger("transform:stash");
      chart.draw(d);
    });


    function toggle(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else if (d._children) {
        d.children = d._children;
        d._children = null;
      }
      return d;
    }

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    return this;
  },

});




d3.chart("cluster-tree").extend("cluster-tree.cartesian", {

  initialize : function() {

    var chart = this;

    chart.margin(chart._margin || {});

    chart.d3.diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });


    chart.layers.nodes.on("enter", function() {
      this
        .attr("transform", function(d) { return "translate(" + chart.source.y0 + "," + chart.source.x0 + ")"; });

      this.select("text")
        .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
        .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; });
    });

    chart.layers.nodes.on("merge:transition", function() {
      this.duration(chart._duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
    });

    chart.layers.nodes.on("exit:transition", function() {
      this
        .attr("transform", function(d) { return "translate(" + chart.source.y + "," + chart.source.x + ")"; });
    });


    chart.on("change:margin", function() {
      chart._width  = chart.base.attr("width")  - chart._margin.left - chart._margin.right;
      chart._height = chart.base.attr("height") - chart._margin.top  - chart._margin.bottom;
      chart.base.attr("transform", "translate(" + chart._margin.left + "," + chart._margin.top + ")");
    });
  },



  transform: function(root) {
    var chart = this,
        nodes;
    chart.source = root;

    if ( ! chart.root) {
      chart.root    = root;
      chart.root.x0 = chart._height / 2;
      chart.root.y0 = 0;

      nodes = chart.d3.layout
        .size([chart._height, chart._width])
        .nodes(chart.root); // workaround for getting correct chart.root to transform method in hierarchy.js

      chart.trigger("collapse:init");
    }

    nodes = chart.d3.layout
      //.size([chart._height, chart._width])
      .nodes(chart.root).reverse();

//    nodes.forEach(function(d) { d.y = d.depth * 180; });

    chart.on("transform:stash", function() {
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    });

    return nodes;
  },


  margin: function(_) {
    if (!arguments.length) {
      return this._margin;
    }

    ["top", "right", "bottom", "left"].forEach(function(dimension) {
      if (dimension in _) {
        this[dimension] = _[dimension];
      }
    }, this._margin = { top: 0, right: 0, bottom: 0, left: 0 });

    this.trigger("change:margin");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },
});




d3.chart("cluster-tree").extend("cluster-tree.radial", {

  initialize : function() {

    var chart = this;

    chart.diameter(chart._diameter || Math.min(chart._width, chart._height));

    chart.d3.diagonal = d3.svg.diagonal.radial().projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
    chart.d3.zoom.translate([chart._diameter / 2, chart._diameter / 2]);

    chart.layers.base
      .attr("transform", "translate(" + chart._diameter / 2 + "," + chart._diameter / 2 + ")");


    chart.layers.nodes.on("enter", function() {
      this
        .attr("transform", function(d) { return "rotate(" + (chart.source.x0 - 90) + ")translate(" + chart.source.y0 + ")"; });

      this.select("text")
        .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
        .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; });
    });

    chart.layers.nodes.on("merge:transition", function() {
      this.duration(chart._duration)
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });
    });

    chart.layers.nodes.on("exit:transition", function() {
      this
        .attr("transform", function(d) { return "rotate(" + (chart.source.x - 90) + ")translate(" + chart.source.y + ")"; });
    });
  },


  transform: function(root) {
    var chart = this,
        nodes;
    chart.source = root;

    if ( ! chart.root) {
      chart.root    = root;
      chart.root.x0 = 360;
      chart.root.y0 = 0;

      nodes = chart.d3.layout
        .size([360, chart._diameter / 4])
        .separation(function(a, b) { if (a.depth === 0) { return 1; } else { return (a.parent == b.parent ? 1 : 2) / a.depth; }}) // workaround
        .nodes(chart.root);

      chart.trigger("collapse:init");
    }

    nodes = chart.d3.layout.nodes(chart.root).reverse();

    //nodes.forEach(function(d) { d.y = d.depth * 180; });

    chart.on("transform:stash", function() {
      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    });

    return nodes;
  },


  diameter: function(_) {
    if (!arguments.length) {
      return this._diameter;
    }

    this._diameter = _;
    
    this.trigger("change:diameter");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },
});




d3.chart("cluster-tree.cartesian").extend("cluster.cartesian", {

  initialize : function() {
    this.d3.layout = d3.layout.cluster();
  },
});


d3.chart("cluster-tree.radial").extend("cluster.radial", {

  initialize : function() {
    this.d3.layout = d3.layout.cluster();
  },
});


d3.chart("hierarchy").extend("pack.flattened", {

  initialize : function() {

    var chart = this;

    chart.d3.layout = d3.layout.pack();
   
    chart._width  = chart.base.attr("width");
    chart._height = chart.base.attr("height");

    chart.flatten(chart._flatten || null);
    chart.formats(chart._formats || {});
    chart.diameter(chart._diameter || Math.min(chart._width, chart._height));

    chart.d3.zoom.translate([(chart._width - chart._diameter) / 2, (chart._height - chart._diameter) / 2]);

    chart.layers.base
      .attr("transform", "translate(" + (chart._width - chart._diameter) / 2 + "," + (chart._height - chart._diameter) / 2 + ")");


    chart.layer("base", chart.layers.base, {

      dataBind: function(data) {
        return this.selectAll(".node")
          .data(data.filter(function(d) { return ! d.children; }));
      },

      insert: function() {
        return this.append("g");
      },

      events: {
        "enter": function() {

          this.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          this.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("stroke", "#aaa")
            .style("fill", chart._formats.fill);

          this.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d[chart._name].substring(0, d.r / 3); });

          this.append("title")
            .text(chart._formats.title);

          this.on("click", function(event) {
            var that = this;

            setTimeout(function() {
              var dblclick = parseInt(that.getAttribute("data-double"), 10);
              if (dblclick > 0) {
                that.setAttribute("data-double", dblclick-1);
              } else {
                chart.trigger("singleClick", event);
              }
            }, 300);
            d3.event.stopPropagation();

          }).on("dblclick", function(event) {
            this.setAttribute("data-double", 2);
            chart.trigger("doubleClick", event);
            d3.event.stopPropagation();
          });
        },
      }
    });

    chart.on("change:diameter", function() {
      chart.layers.base
        .attr("transform", "translate(" + (chart._width - chart._diameter) / 2 + "," + (chart._height - chart._diameter) / 2 + ")");
    });
  },



  transform: function(root) {
    var chart = this;
    chart.root = root;

    return chart.d3.layout
      .size([chart._diameter, chart._diameter])
      .sort(null)
      .padding(1.5)
      .value(function(d) { return d[chart._value]; })
      .nodes(chart._flatten ? chart._flatten(root) : root);
  },


  diameter: function(_) {
    if (!arguments.length) {
      return this._diameter;
    }

    this._diameter = _ - 10;

    this.trigger("change:diameter");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  flatten: function(_) {
    if (!arguments.length) {
      return this._flatten;
    }

    this._flatten = _;

    this.trigger("change:flatten");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  formats: function(_) {
    if (!arguments.length) {
      return this._formats;
    }
    var chart = this;
    var color = d3.scale.category20c();

    ["title", "fill"].forEach(function(format) {
      if (format in _) {
        this[format] = d3.functor(_[format]);
      }
    }, this._formats = {
       title : function(d) { return d[chart._value]; },
       fill  : function(d) { return color(d[chart._name]); }
      }
    );

    this.trigger("change:formats");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },

});




d3.chart("hierarchy").extend("pack.nested", {

  initialize : function() {

    var chart = this;
    
    chart.d3.layout = d3.layout.pack();

    chart._width  = chart.base.attr("width");
    chart._height = chart.base.attr("height");
    chart.diameter(chart._diameter || Math.min(chart._width, chart._height));

    chart.d3.zoom.translate([(chart._width - chart._diameter) / 2, (chart._height - chart._diameter) / 2]);

    chart.layers.base
      .attr("transform", "translate(" + (chart._width - chart._diameter) / 2 + "," + (chart._height - chart._diameter) / 2 + ")");


    chart.layer("base", chart.layers.base, {

      dataBind: function(data) {
        return this.selectAll(".node").data(data);
      },

      insert: function() {
        return this.append("g");
      },

      events: {
        enter: function() {

          this.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

          this.append("circle")
            .attr("r", function(d) { return d.r; });

          this.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle");

          this.on("click", function(event) {
            var that = this;

            setTimeout(function() {
              var dblclick = parseInt(that.getAttribute("data-double"), 10);
              if (dblclick > 0) {
                that.setAttribute("data-double", dblclick-1);
              } else {
                chart.trigger("singleClick", event);
              }
            }, 300);
            d3.event.stopPropagation();

          }).on("dblclick", function(event) {
            this.setAttribute("data-double", 2);
            chart.trigger("doubleClick", event);
            d3.event.stopPropagation();
          });
        },

        merge: function() {

          this.attr("class", function(d) { return d.children ? "node parent" : "node child"; });

          this.select("text")
            .style("opacity", function(d) { return d.r > 20 ? 1 : 0; })
            .text(function(d) { return d[chart._name]; });
        },
      }
    });


    chart.on("change:diameter", function() {
      chart.layers.base
        .attr("transform", "translate(" + (chart._width - chart._diameter) / 2 + "," + (chart._height - chart._diameter) / 2 + ")");
    });
  },


  transform: function(root) {
    var chart = this;
    chart.root = root;
   
    return chart.d3.layout
      .size([chart._diameter, chart._diameter])
      .value(function(d) { return d[chart._value]; })
      .nodes(root);
  },


  diameter: function(_) {
    if (!arguments.length) {
      return this._diameter;
    }

    this._diameter = _ - 10;

    this.trigger("change:diameter");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  }, 


  collapsible: function() {
    var chart = this;

    var node,
        x = d3.scale.linear().range([0, chart._diameter]),
        y = d3.scale.linear().range([0, chart._diameter]);


    chart.layers.base.on("merge", function() {
      node = chart.root;
      chart.on("singleClick", function(d) { collapse(node == d ? chart.root : d); });
    });

    chart.base.on("click", function() { collapse(chart.root); });
//    d3.select(window).on("click", function() { collapse(chart.root); });


    function collapse(d) {
      var k = chart._diameter / d.r / 2;

      x.domain([d.x - d.r, d.x + d.r]);
      y.domain([d.y - d.r, d.y + d.r]);

      var t = chart.layers.base.transition()
        .duration(chart._duration);

      t.selectAll(".node")
        .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

      t.selectAll("circle")
        .attr("r", function(d) { return k * d.r; });

      t.selectAll("text")
        .style("opacity", function(d) { return k * d.r > 20 ? 1 : 0; });

      node = d;
    }

    return this;
  },


});




d3.chart("hierarchy").extend("partition.arc", {
 
  initialize : function() {

    var chart = this;

    chart.d3.layout = d3.layout.partition();

    chart._width  = chart.base.attr("width");
    chart._height = chart.base.attr("height");

    chart.diameter(chart._diameter || Math.min(chart._width, chart._height));


    chart.d3.color = d3.scale.category20c();
    chart.d3.x     = d3.scale.linear().range([0, 2 * Math.PI]);
    chart.d3.y     = d3.scale.sqrt().range([0, chart._diameter / 2]);
    chart.d3.arc   = d3.svg.arc()
      .startAngle(function(d)  { return Math.max(0, Math.min(2 * Math.PI, chart.d3.x(d.x))); })
      .endAngle(function(d)    { return Math.max(0, Math.min(2 * Math.PI, chart.d3.x(d.x + d.dx))); })
      .innerRadius(function(d) { return Math.max(0, chart.d3.y(d.y)); })
      .outerRadius(function(d) { return Math.max(0, chart.d3.y(d.y + d.dy)); });

    chart.d3.zoom.translate([chart.base.attr("width") / 2, chart.base.attr("height") / 2]);

    chart.layers.base
      .attr("transform", "translate(" + chart.base.attr("width") / 2 + "," + chart.base.attr("height") / 2 + ")");


    chart.layer("base", chart.layers.base, {

      dataBind: function(data) {
        return this.selectAll(".form-container")
          .data(data);
      },

      insert: function() {
        return this.append("g")
          .classed("form-container",true)
      },

      events: {
        enter: function() {
          this.append("path").attr("d", chart.d3.arc)
            .style("fill", function(d) { return chart.d3.color((d.children ? d : d.parent)[chart._name]); });
            
          // change to add labels based on 
          //   http://stackoverflow.com/questions/22622381/how-to-position-text-labels-on-a-sunburst-chart-with-d3-js
          
          function getAngle(d) {
            // Offset the angle by 90 deg since the '0' degree axis for arc is Y axis, while
            // for text it is the X axis.
            var thetaDeg = (180 / Math.PI * (chart.d3.arc.startAngle()(d) + chart.d3.arc.endAngle()(d)) / 2 - 90);
            // If we are rotating the text by more than 90 deg, then "flip" it.
            // This is why "text-anchor", "middle" is important, otherwise, this "flip" would
            // a little harder.
            return (thetaDeg > 90) ? thetaDeg - 180 : thetaDeg;
        }
        
          this.append("text")
            .style("font-size", "10px")
            .attr("x", function(d) {
              return d.x;
            })
             // Rotate around the center of the text, not the bottom left corner
            .attr("text-anchor", "middle")
             // First translate to the desired point and set the rotation
             // Not sure what the intent of using this.parentNode.getBBox().width was here (?)
            .attr("transform", function(d) {
              return "translate(" + chart.d3.arc.centroid(d) + ")" + "rotate(" + getAngle(d) + ")"; 
              
            })                                    
            .attr("dx", "6") // margin
            .attr("dy", ".35em") // vertical-align
            .text(function(d){
              return d.name
            })
            .attr("pointer-events","none");

          this.on("click", function(event) {
            var that = this;

            setTimeout(function() {
              var dblclick = parseInt(that.getAttribute("data-double"), 10);
              if (dblclick > 0) {
                that.setAttribute("data-double", dblclick-1);
              } else {
                chart.trigger("singleClick", event);
              }
            }, 300);
            d3.event.stopPropagation();

          }).on("dblclick", function(event) {
            this.setAttribute("data-double", 2);
            chart.trigger("doubleClick", event);
            d3.event.stopPropagation();
          });
        }
      }
    });


    chart.on("change:radius", function() {
      chart.layers.paths
        .attr("transform", "translate(" + chart.base.attr("width") / 2 + "," + chart.base.attr("height") / 2 + ")");
      chart.d3.y = d3.scale.sqrt().range([0, chart._diameter / 2]);
    });
  },



  transform: function(root) {
    var chart = this;
    chart.root = root;

    return chart.d3.layout
      .value(function(d) { return d[chart._value]; })
      .nodes(root);
  },


  diameter: function(_) {
    if (!arguments.length) {
      return this._diameter;
    }

    this._diameter = _ - 10;  

    this.trigger("change:radius");
    if (this.root) {
      this.draw(this.root);
    }

    return this;
  },


  collapsible: function() {
    var chart = this;

    chart.layers.base.on("merge", function() {
      function getAngle(d) {
          // Offset the angle by 90 deg since the '0' degree axis for arc is Y axis, while
          // for text it is the X axis.
          var thetaDeg = (180 / Math.PI * (chart.d3.arc.startAngle()(d) + chart.d3.arc.endAngle()(d)) / 2 - 90);
          // If we are rotating the text by more than 90 deg, then "flip" it.
          // This is why "text-anchor", "middle" is important, otherwise, this "flip" would
          // a little harder.
          return (thetaDeg > 90) ? thetaDeg - 180 : thetaDeg;
      }      
      
      var path = this.select("path");
      var label = this.select("text");
      chart.on("singleClick", function(d) {
          path.transition()
            .duration(chart._duration)
            .attrTween("d", arcTween(d));
            
          label
            .transition()
              .duration(chart._duration)
            .attr("x", function(d) {
              return d.x;
            })
            .attr("transform", function(d) {
              return "translate(" + chart.d3.arc.centroid(d) + ")" + "rotate(" + getAngle(d) + ")"; 
            })             
        });
    });

    function arcTween(d) {
      var xd = d3.interpolate(chart.d3.x.domain(), [d.x, d.x + d.dx]),
          yd = d3.interpolate(chart.d3.y.domain(), [d.y, 1]),
          yr = d3.interpolate(chart.d3.y.range(), [d.y ? 20 : 0, chart._diameter / 2]);
      return function(d, i) {
        return i ? function(t) { return chart.d3.arc(d); }
                 : function(t) { chart.d3.x.domain(xd(t)); chart.d3.y.domain(yd(t)).range(yr(t)); return chart.d3.arc(d); };
      };
    }
    

    function get_start_angle(d,ref)
    {
        if (ref)
        {
            var ref_span = ref.dx-ref.dy;
            return (d.dx-ref.dx)/ref_span*Math.PI*2.0
        }
        else
        {
            return d.dx;
        }
    }
    
    function get_stop_angle(d,ref)
    {
        if (ref)
        {
            var ref_span = ref.dy-ref.dy;
            return (d.dy-ref.dx)/ref_span*Math.PI*2.0
        }
        else
        {
            return d.dx;
        }
    }
    
    function get_level(d,ref)
    {
        if (ref)
        {
            return d[3]-ref[3];
        }
        else
        {
            return d[3];
        }
    }
    
    function change_ref(data_point, reference_point) {
        return [
            get_start_angle(data_point, reference_point),
            get_stop_angle (data_point, reference_point),
            data_point[2],
            get_level      (data_point, reference_point)
        ];
    }
    



    return this;
  },

});



d3.chart("hierarchy").extend("partition.rectangle", {

  initialize : function() {

    var chart = this;
    
    chart.d3.layout = d3.layout.partition();

    chart._width  = chart.base.attr("width");
    chart._height = chart.base.attr("height");

   
    var x = d3.scale.linear().range([0, chart._width]),
        y = d3.scale.linear().range([0, chart._height]);

    chart.d3.transform = function(d, ky) { return "translate(8," + d.dx * ky / 2 + ")"; };


    chart.layer("base", chart.layers.base, {

      dataBind: function(data) {
        return this.selectAll(".partition")
          .data(data);
      },

      insert: function() {
        return this.append("g")
          .classed("partition", true)
          .attr("transform", function(d) { return "translate(" + x(d.y) + "," + y(d.x) + ")"; });
      },

      events: {
        enter: function() {
          var kx = chart._width  / chart.root.dx,
              ky = chart._height / 1; 

          this.append("rect")
            .attr("class", function(d) { return d.children ? "parent" : "child"; })
            .attr("width", chart.root.dy * kx)
            .attr("height", function(d) { return d.dx * ky; }); 

          this.append("text")
            .attr("transform", function(d) { return chart.d3.transform(d, ky); })
            .attr("dy", ".35em")
            .style("opacity", function(d) { return d.dx * ky > 12 ? 1 : 0; })
            .text(function(d) { return d[chart._name]; });

          this.on("click", function(event) {
            var that = this;

            setTimeout(function() {
              var dblclick = parseInt(that.getAttribute("data-double"), 10);
              if (dblclick > 0) {
                that.setAttribute("data-double", dblclick-1);
              } else {
                chart.trigger("singleClick", event);
              }
            }, 300);
            d3.event.stopPropagation();

          }).on("dblclick", function(event) {
            this.setAttribute("data-double", 2);
            chart.trigger("doubleClick", event);
            d3.event.stopPropagation();
          });
        }
      }
    });
  },



  transform: function(root) {
    var chart = this;
    chart.root = root;

    return chart.d3.layout
      .value(function(d) { return d[chart._value]; })
      .nodes(root);
  },


  collapsible: function() {
    var chart = this;

    var node,
        x = d3.scale.linear(),
        y = d3.scale.linear().range([0, chart._height]);

    chart.layers.base.on("merge", function() {
      node = chart.root;
      chart.on("singleClick", function(d) { collapse(node == d ? chart.root : d); });
    });

    chart.base.on("click", function() { collapse(chart.root); });


    function collapse(d) {
      var kx = (d.y ? chart._width - 40 : chart._width) / (1 - d.y),
          ky = chart._height / d.dx;

      x.domain([d.y, 1]).range([d.y ? 40 : 0, chart._width]);
      y.domain([d.x, d.x + d.dx]);

      var t = chart.layers.base.transition()
        .duration(chart._duration);

      t.selectAll(".partition")
        .attr("transform", function(d) { return "translate(" + x(d.y) + "," + y(d.x) + ")"; });

      t.selectAll("rect")
        .attr("width", d.dy * kx)
        .attr("height", function(d) { return d.dx * ky; });

      t.selectAll("text")
        .attr("transform", function(d) { return chart.d3.transform(d, ky); })
        .style("opacity", function(d) { return d.dx * ky > 12 ? 1 : 0; });

      node = d;
    }
  
    return this;
  },

});



d3.chart("cluster-tree.cartesian").extend("tree.cartesian", {

  initialize : function() {
    this.d3.layout = d3.layout.tree();
  },
});


d3.chart("cluster-tree.radial").extend("tree.radial", {

  initialize : function() {
    this.d3.layout = d3.layout.tree();
  }
});


d3.chart("hierarchy").extend("treemap", {
 
  initialize : function() {

    var chart = this;

    chart.d3.layout = d3.layout.treemap();

    chart._width  = chart.base.attr("width");
    chart._height = chart.base.attr("height");

    var color = d3.scale.category20c();

    chart.layer("base", chart.layers.base, {

      dataBind: function(data) {
        return this.selectAll(".cell")
          .data(data);
      },

      insert: function() {
        return this.append("g")
          .classed("cell", true)
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
      },

      events: {
        enter: function() {

          this.append("rect")
            .attr("width", function(d) { return d.dx; })
            .attr("height", function(d) { return d.dy; })
            .attr("fill", function(d) { return d.parent ? color(d.parent[chart._name]) : null; });

          this.append("text")
            .attr("x", function(d) { return d.dx / 2; })
            .attr("y", function(d) { return d.dy / 2; })
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(function(d) { return d.children ? null : d[chart._name]; }) // order is matter! getComputedTextLength
            .style("opacity", function(d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });

          this.on("click", function(event) {
            var that = this;

            setTimeout(function() {
              var dblclick = parseInt(that.getAttribute("data-double"), 10);
              if (dblclick > 0) {
                that.setAttribute("data-double", dblclick-1);
              } else {
                chart.trigger("singleClick", event);
              }
            }, 300);
            d3.event.stopPropagation();

          }).on("dblclick", function(event) {
            this.setAttribute("data-double", 2);
            chart.trigger("doubleClick", event);
            d3.event.stopPropagation();
          });
        },
      }
    });
  },


  transform: function(root) {
    var chart  = this;
    chart.root = root;

    return chart.d3.layout
      .round(false)
      .size([chart._width, chart._height])
      .sticky(true)
      .value(function(d) { return d[chart._value]; })
      .nodes(root);
  },


  collapsible: function() {
    var chart = this;

    var node,
        x = d3.scale.linear().range([0, chart._width]),
        y = d3.scale.linear().range([0, chart._height]);

    chart.layers.base.on("merge", function() {
      node = chart.root;
      chart.on("singleClick", function(d) { collapse(node == d.parent ? chart.root : d.parent); });
    });

    chart.base.on("click", function() { collapse(chart.root); });


    function collapse(d) {
      var kx = chart._width  / d.dx,
          ky = chart._height / d.dy;

      x.domain([d.x, d.x + d.dx]);
      y.domain([d.y, d.y + d.dy]);

      var t = chart.layers.base.transition()
        .duration(chart._duration);

      t.selectAll(".cell")
        .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

      t.selectAll("rect")
        .attr("width", function(d) { return kx * d.dx; })
        .attr("height", function(d) { return ky * d.dy; });

      t.selectAll("text")
        .attr("x", function(d) { return kx * d.dx / 2; })
        .attr("y", function(d) { return ky * d.dy / 2; })
        .style("opacity", function(d) { return kx * d.dx > d.w ? 1 : 0; });

      node = d;
    }

    return this;
  },

});


