function send_click_event_to_menu_objects(e) {
  $("#selection_new, #selection_delete, #selection_rename, #save_selection_name, #selection_name_box, #selection_name_dropdown").get().forEach (
      function (d) {
          d.dispatchEvent (e);
      }
  );
}

function update_selection_names (id, skip_rebuild) {
    skip_rebuild = skip_rebuild || false;
    id = id || 0;
    current_selection_name = selection_set[id];
    current_selection_id = id;
    if (!skip_rebuild) {
        d3.selectAll (".selection_set").remove();
        d3.select ("#selection_name_dropdown")
          .selectAll (".selection_set")
          .data (selection_set)
          .enter()
          .append ("li")
          .attr ("class", "selection_set")
          .append ("a")
          .attr ("href", "#")
          .text (function (d) { return d;})
          .style ("color", function (d,i) {return color_scheme(i);})
          .on ("click", function (d,i) {update_selection_names (i,true);});
    }
    d3.select ("#selection_name_box")
      .style ("color",  color_scheme(id))
      .property ("value", current_selection_name);
    tree.selection_label (selection_set[id]);
}

function selection_handler_name_box (e) {
    var name_box = d3.select (this);
     switch (e.detail[0]) {
        case 'save':
        case 'cancel':
            name_box.attr ("disabled", true)
                    .style ("color",  color_scheme(current_selection_id));
            break;
        case 'new':
            name_box
              .property ("value", "new_selection_name")
              .style ("color",  color_scheme(selection_set.length));
            name_box[0][0].disabled = null;
            break;
        case 'rename':
           name_box[0][0].disabled = null;
           break;
    }
}
function selection_handler_new (e) {
  debugger;
    var element = d3.select (this);
    $(this).data('tooltip', false);
    switch (e.detail[0]) {
        case 'save':
        case 'cancel':
            if (selection_set.length == max_selections) {
                element.classed ("disabled", true);
                    $(this).tooltip ({'title' : 'Up to ' + max_selections + ' are allowed', 'placement' : 'left'});
            } else {
                element.classed ("disabled", null);
            }
            break;
        default:
            element.classed ("disabled", true);
            break;
    }
}
function selection_handler_rename (e) {
    var element = d3.select (this);
    element.classed ("disabled", (e.detail[0] == "save" || e.detail[0] == "cancel") ? null : true);
}
function selection_handler_save_selection_name (e) {
    var element = d3.select (this);
    element.style ("display", (e.detail[0] == "save" || e.detail[0] == "cancel") ? "none" : null);
}
function selection_handler_name_dropdown (e) {
    var element = d3.select (this).selectAll (".selection_set");
    element.classed ("disabled", (e.detail[0] == "save" || e.detail[0] == "cancel") ? null : true);
}
function selection_handler_delete (e) {
    var element = d3.select (this);
    $(this).tooltip('destroy');
    switch (e.detail[0]) {
        case 'save':
        case 'cancel':
            if (selection_set.length == 1) {
                element.classed ("disabled", true);
                    $(this).tooltip ({'title' : 'At least one named selection set <br> is required;<br>it can be empty, however', 'placement' : 'bottom', 'html': true});
            } else {
                element.classed ("disabled", null);
            }
            break;
        default:
            element.classed ("disabled", true);
            break;
    }}


HTMLWidgets.widget({

  name: 'treewidget',

  type: 'output',

  initialize: function(el, width, height) {
    
    /* Set up toolbar */
    //this.toolbar_setup(el);
    
    /* Add selection widget */
    //this.selection_menu_setup(el);
    
    /* Some global variables */
    selection_set = ['Foreground'];
    current_selection_name = $("#selection_name_box").val();
    current_selection_id = 0;
    max_selections       = 10;
    color_scheme = d3.scale.category10();
    selection_menu_element_action = "phylotree_menu_element_action";
    
    /* Add SVG tree container */
    var svg=d3.select(el).append("svg")
     .attr("width",width)
     .attr("height",height);
    
    /* Make tree global */ 
    tree=d3.layout.phylotree(el)
      .size ([height, width])
      .separation (function (a,b) {return 0;})
      .count_handler (function (count) {
              $("#selected_branch_counter").text (function (d) {return count[current_selection_name];});
              $("#selected_filtered_counter").text (count.tag);
          }
      );      
    
    this.default_tree_settings(tree);
    
    /* Add event listeners */
    
    $("#selection_new").get(0).addEventListener(selection_menu_element_action,selection_handler_new,false);
    $("#selection_rename").get(0).addEventListener(selection_menu_element_action,selection_handler_rename,false);
    $("#selection_delete").get(0).addEventListener(selection_menu_element_action,selection_handler_delete,false);
    $("#selection_delete").get(0).dispatchEvent (new CustomEvent (selection_menu_element_action,{'detail' : ['cancel', null]}));
    $("#selection_name_box").get(0).addEventListener(selection_menu_element_action,selection_handler_name_box,false);
    $("#save_selection_name").get(0).addEventListener(selection_menu_element_action,selection_handler_save_selection_name,false);
    $("#selection_name_dropdown").get(0).addEventListener(selection_menu_element_action,selection_handler_name_dropdown,false);
    
    update_selection_names();
    
    return {"svg": svg, "tree": tree};
  },

  renderValue: function(el, x, instance) {
    var newick_string = x.nwk;
    var svg = instance.svg;
    var tree = instance.tree;

    tree(d3_phylotree_newick_parser(newick_string)).svg(svg).layout();
     
    /* Add tools */
    
    $("#expand_spacing").on ("click", function (e) {
      tree.spacing_x (tree.spacing_x() + 1).update(true);
    });
    
    $("#compress_spacing").on ("click", function (e) {
      tree.spacing_x (tree.spacing_x() - 1).update(true);
    });

    function sort_nodes (asc) {
      tree.traverse_and_compute (function (n) {
        var d = 1;
        if (n.children && n.children.length) {
          d += d3.max (n.children, function (d) { return d["count_depth"];});
        }
        n["count_depth"] = d;
      });
      tree.resort_children (function (a,b) {
        return (a["count_depth"] - b["count_depth"]) * (asc ? 1 : -1);
      });
    }

    $("#sort_original").on ("click", function (e) {
      tree.resort_children (function (a,b) {
        return a["original_child_order"] - b["original_child_order"];
      });
    });

    $("#sort_ascending").on ("click", function (e) {
      sort_nodes (true);
    });

    $("#sort_descending").on ("click", function (e) {
      sort_nodes (false);
    });

    $("#save_tree").on ("click", function (e) {
      var tagged_tree=tree.get_newick (
            function (node) {
                var tags = [];
                selection_set.forEach (function (d) { if (node[d]) {tags.push(d)}; });
                if (tags.length) {
                    return "{" + tags.join (",") + "}";
                }
                return "";
            }
       );
      var blob = new Blob([tagged_tree], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "phylowidget_tree.nwk");
    });
    
    $("#exit_widget").on ("click", function (e) {
      if (confirm("Close phylowidget?")) {
        if("Shiny" in window){
          var tagged_tree=tree.get_newick (
            function (node) {
                var tags = [];
                selection_set.forEach (function (d) { if (node[d]) {tags.push(d)}; });
                if (tags.length) {
                    return "{" + tags.join (",") + "}";
                }
                return "";
            }
          );
          Shiny.onInputChange("tree",tagged_tree);
          Shiny.onInputChange("close",1);
        }
        window.close();
      }
    });

    /* Selection events */
    
    $("#mp_label").on ("click", function (e) {
      tree.max_parsimony (true);
    });


    $("#and_label").on ("click", function (e) {
      tree.internal_label (function (d) { return d.reduce (function (prev, curr) {return curr[current_selection_name] && prev; }, true)}, true);
    });

    $("#or_label").on ("click", function (e) {
      tree.internal_label (function (d) { return d.reduce (function (prev, curr) {return curr[current_selection_name] || prev; }, false)}, true);
    });

    $("#filter_add").on ("click", function (e) {
      tree.modify_selection (function (d) { return d.tag || d[current_selection_name];}, current_selection_name, false, true)
        .modify_selection (function (d) { return false; }, "tag", false, false);
    });

    $("#filter_remove").on ("click", function (e) {
      tree.modify_selection (function (d) { return !d.tag;});
    });

    $("#select_all").on ("click", function (e) {
      tree.modify_selection (function (d) { return true;});
    });

    $("#select_all_internal").on ("click", function (e) {
      tree.modify_selection (function (d) { return !d3_phylotree_is_leafnode (d.target);});
    });

    $("#select_all_leaves").on ("click", function (e) {
      tree.modify_selection (function (d) { return d3_phylotree_is_leafnode (d.target);});
    });

    $("#select_none").on ("click", function (e) {
      tree.modify_selection (function (d) { return false;});
    });

    $("#clear_internal").on ("click", function (e) {
      tree.modify_selection (function (d) { return d3_phylotree_is_leafnode (d.target) ? d.target[current_selection_name] : false;});
    });

    $("#clear_leaves").on ("click", function (e) {
      tree.modify_selection (function (d) { return !d3_phylotree_is_leafnode (d.target) ? d.target[current_selection_name] : false;});
    });
    
    /* Filtering */
    
    $("#branch_filter").on ("input propertychange", function (e) {
      var filter_value = $(this).val();
      var rx = new RegExp (filter_value,"i");
      tree.modify_selection (function (n) {
        return filter_value.length && (tree.branch_name () (n.target).search (rx)) != -1;
      },"tag");
    })
    // Need to tidy below

    var valid_id = new RegExp ("^[\\w]+$");

  $("#selection_name_box").on ("input propertychange", function (e) {
     var name = $(this).val();
     var accept_name = (selection_set.indexOf (name) < 0) &&
                       valid_id.exec (name) ;
     d3.select ("#save_selection_button").classed ("disabled", accept_name ? null : true );
  });
  $("#selection_rename > a").on ("click", function (e) {
      d3.select ("#save_selection_button")
             .classed ("disabled",true)
             .on ("click", function (e) { // save selection handler
                  var old_selection_name = current_selection_name;
                  selection_set[current_selection_id] = current_selection_name = $("#selection_name_box").val();
                  if (old_selection_name != current_selection_name) {
                      tree.update_key_name (old_selection_name, current_selection_name);
                      update_selection_names (current_selection_id);
                  }
                  send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                               {'detail' : ['save', this]}));
             });
      d3.select ("#cancel_selection_button")
                 .classed ("disabled",false)
                 .on ("click", function (e) { // save selection handler
                      $("#selection_name_box").val(current_selection_name);
                      send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                                   {'detail' : ['cancel', this]}));
                });
      send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                                   {'detail' : ['rename', this]}));
      e.preventDefault    ();
  });
  $("#selection_delete > a").on ("click", function (e) {
      tree.update_key_name (selection_set[current_selection_id], null)
      selection_set.splice (current_selection_id, 1);
      if (current_selection_id > 0) {
          current_selection_id --;
      }
      current_selection_name = selection_set[current_selection_id];
      update_selection_names (current_selection_id)
      $("#selection_name_box").val(current_selection_name)
      send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                                   {'detail' : ['save', this]}));
      e.preventDefault    ();
  });
  
  $("#selection_new > a").on ("click", function (e) {
  
      d3.select ("#save_selection_button")
                 .classed ("disabled",true)
                 .on ("click", function (e) { // save selection handler
                      current_selection_name = $("#selection_name_box").val();
                      current_selection_id = selection_set.length;
                      selection_set.push (current_selection_name);
                      update_selection_names (current_selection_id);
                      send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                                   {'detail' : ['save', this]}));
                });
  
       d3.select ("#cancel_selection_button")
                 .classed ("disabled",false)
                 .on ("click", function (e) { // save selection handler
                      $("#selection_name_box").val(current_selection_name);
                      send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                                   {'detail' : ['cancel', this]}));
                });
  
  
     send_click_event_to_menu_objects (new CustomEvent (selection_menu_element_action,
                                 {'detail' : ['new', this]}));
    e.preventDefault    ();
});
    
    /* Dynamic resize */
    this.makeResponsive(el);
   
  },

  resize: function(el, width, height, instance) {
    var svg=d3.select("#"+el.id+" svg")
     .attr("width",width)
     .attr("height",height);
     
      instance.tree.size ([height, width]).layout();
  },
  
  makeResponsive: function(el){
     var svg = el.getElementsByTagName("svg")[0];
     if(svg){
      svg.setAttribute("viewBox", "0 0 " + svg.getAttribute("width") + " " + svg.getAttribute("height"))
      if(svg.width) {svg.removeAttribute("width")};
      if(svg.height) {svg.removeAttribute("height")};
      svg.style.width = "100%";
      svg.style.height = "100%";
     }
  },
  
  node_colorizer: function(element, data) {
    try{
      var count_class = 0;
      selection_set.forEach (function (d,i) { if (data[d]) {count_class ++; element.style ("fill", color_scheme(i), i == current_selection_id ?  "important" : null);}});
      if (count_class > 1){}
      else {
        if (count_class == 0) {
            element.style ("fill", null);
        }
      };
    }
    catch (e) {}
   },
   
   edge_colorizer: function(element, data) {
     try {
       var count_class = 0;
       selection_set.forEach (function (d,i) { if (data[d]) {count_class ++; element.style ("stroke", color_scheme(i), i == current_selection_id ?  "important" : null);}});

        if (count_class > 1) {
          element.classed ("branch-multiple", true);
        } else
        if (count_class == 0) {
             element.style ("stroke", null)
                   .classed ("branch-multiple", false);
        }
      }
    catch (e) {}

    },
    
    default_tree_settings: function(tree) {
      tree.branch_length (null);
      tree.branch_name (null);
      tree.node_span ('equal');
      tree.options ({'draw-size-bubbles' : false}, false);
      tree.style_nodes (this.node_colorizer);
      tree.style_edges (this.edge_colorizer);
      tree.selection_label (current_selection_name);
    },
    
    get_tagged_tree: function(tree){
       var tagged_tree=tree.get_newick (
            function (node) {
                var tags = [];
                selection_set.forEach (function (d) { if (node[d]) {tags.push(d)}; });
                if (tags.length) {
                    return "{" + tags.join (",") + "}";
                }
                return "";
            }
       );
      return tagged_tree;
    }

});
