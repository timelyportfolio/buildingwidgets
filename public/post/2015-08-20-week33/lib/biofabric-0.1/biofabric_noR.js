// adapted from www.biofabric.org/gallery/pages/SuperQuickBioFabric.html
//  by Max Oxgden at https://github.com/maxogden/biofabric

// WARNING! The code has NOT been tested on different networks besides miserables.json! Probably handles singleton nodes and duplicate links incorrectly! 

// modified to be standalone for the htmlwidget
//  https://github.com/timelyportfolio/RBioFabric

var fabric = (function(){
  
  // Constants:
  
  var ONE_SEC = 1000
  var BASE_TRANS = ONE_SEC
  var LINK_COL = d3.rgb(0, 71, 90)
  var NODE_COL = d3.rgb(255, 147, 0)
  var PAD = 40
  var GRID = 18
  var NODE_SIZE = 16
  var NODE_HALF = NODE_SIZE / 2
  var LINK_WIDTH = 3
  var NODE_WIDTH = 3
  var WRAP_LOC_X = .87
  
  var tagOrder = [
    "EX-blue",
    "EX-orange",
    "EX-dark-cyan",
    "EX-red",
    "EX-dark-orange",
    "EX-dark-gray-purple",
    "EX-cyan",
    "EX-yellow-orange",
    "EX-pure-blue",
    "EX-dark-yellow-green",
    "EX-dark-magenta",
    "EX-dark-green",
    "EX-blue-magenta",
    "EX-yellow-green",
    "EX-magenta",
    "EX-green",
    "EX-yellow",
    "EX-purple",
    "EX-dark-purple",
    "EX-dark-red",
    "EX-pale-green",
    "EX-pale-blue",
    "EX-dark-tan",
    "EX-pale-blue-magenta",
    "EX-pale-yellow orange",
    "EX-medium-magenta",
    "EX-pale-red",
    "EX-pale-cyan",
    "EX-pale-yellow-green",
    "EX-pale-purple",
    "EX-pale-magenta",
    "EX-pale-red-orange"
  ]
  
  var baseColors = {
    "EX-cyan":{"r":0, "g":255, "b":255},
    "EX-dark-cyan":{"r":0, "g":100, "b":128},
    "EX-yellow-orange":{"r":255, "g":153, "b":0},
    "EX-pale-green":{"r":133, "g":205, "b":102},
    "EX-dark-green":{"r":39, "g":128, "b":0},
    "EX-pale-red-orange":{"r":230, "g":156, "b":138},
    "EX-yellow-green":{"r":154, "g":255, "b":0},
    "EX-yellow":{"r":255, "g":203, "b":0},
    "EX-dark-gray-purple":{"r":0, "g":25, "b":128},
    "EX-pale-magenta":{"r":212, "g":138, "b":230},
    "EX-pale-purple":{"r":149, "g":165, "b":230},
    "EX-purple":{"r":102, "g":51, "b":255},
    "EX-dark-red":{"r":140, "g":56, "b":56},
    "EX-red":{"r":255, "g":0, "b":0},
    "EX-pale-yellow-green":{"r":222, "g":230, "b":138},
    "EX-dark-purple":{"r":77, "g":56, "b":140},
    "EX-pale-cyan":{"r":138, "g":230, "b":181},
    "EX-pure-blue":{"r":0, "g":0, "b":255},
    "EX-dark-yellow-green":{"r":114, "g":128, "b":0},
    "EX-magenta":{"r":255, "g":0, "b":255},
    "EX-dark-tan":{"r":166, "g":133, "b":83},
    "EX-pale-blue":{"r":102, "g":183, "b":205},
    "EX-orange":{"r":255, "g":103, "b":0},
    "EX-medium-magenta":{"r":166, "g":83, "b":166},
    "EX-blue-magenta":{"r":155, "g":0, "b":255},
    "EX-green":{"r":0, "g":255, "b":0},
    "EX-dark-magenta":{"r":102, "g":0, "b":128},
    "EX-pale-blue-magenta":{"r":146, "g":102, "b":205},
    "EX-pale-yellow orange":{"r":205, "g":175, "b":102},
    "EX-dark-orange":{"r":128, "g":92, "b":0},
    "EX-blue":{"r":0, "g":152, "b":255},
    "EX-pale-red":{"r":205, "g":102, "b":153}
  }
  
  
  function createFabric(graph, opts) {
    if (!opts) opts = {}
      
    var width = opts.width || 1200
    var hw = width / 2
    var height = opts.height || 500
    var hh = height / 2
    
    var bsvg = d3.select(opts.container || document.body).append("svg:svg")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", opts.bgColor || "#FFFFFF")
  
    //
    // Add and initialize some stuff to the graph we read in:
    //
    
    for (var i = 0; i < graph.nodes.length; i++) {
      graph.nodes[i].row = -1
      graph.nodes[i].degree = 0
      graph.nodes[i].zoneMin = -1000
      graph.nodes[i].zoneMax = -1000
      graph.nodes[i].neighbors = []
    }
  
    //
    // We calculate degree and record neighbors for later sorting: 
    //
  
    for (var i = 0; i < graph.links.length; i++) {
      var link = graph.links[i]
      graph.nodes[link.source].degree++
      graph.nodes[link.target].degree++
      graph.nodes[link.source].neighbors.push(graph.nodes[link.target])
      graph.nodes[link.target].neighbors.push(graph.nodes[link.source])
    }
  
    //
    // Figure out the width and height we need to zoom to fit it all in.
    // Note we are assuming more links than nodes: 
    //
  
    var gwidth = (2 * PAD) + (GRID * graph.links.length)
    var gheight = (2 * PAD) + (GRID * graph.nodes.length)
    var sfac = width / gwidth
  
    //
    // Add the zooming transform at the top of the SVG tree. 
    //
  
    var svg = bsvg.append("svg:g")
    .attr("transform", "translate(" + hw + "," + hh + ") scale(" + sfac + ") translate(-" + gwidth / 2 + ",-" + gheight / 2 + ")")
  
    assignNodesToCircle(graph, gheight / 2.3, (gwidth / 2), gheight / 2)
    buildGraph(svg, graph)
    instantForce(svg, graph, gwidth, gheight)
    buildGraphPost(svg, graph)
    installForce(svg, gwidth, gheight, sfac)
    nodeToLines(svg, gwidth)
    sortGraph(graph)
    nodesToRows(svg)
    sortLinks(graph)
    linksToVert(svg)
    drawGlyphs(svg, graph)
    boundNodes(graph)
    setNodeLength(svg)
    drawLabels(svg, graph)
    colorNodesAndLinks(svg, 1.43)
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Turn the nodes into long lines:
  //
  
  function nodeToLinesClosure(mySvg, myWidth, sec) {
   return (function () { nodeToLines(mySvg, myWidth, sec) })
  }
  
  function nodeToLines(mySvg, myWidth, sec) {
   d3.selectAll(".node")
        .attr("x1", function(d) { return (d.x - (myWidth * 1.5)) })
        .attr("x2", function(d) { return (d.x + (myWidth * 1.5)) })
        .style("stroke-width", NODE_WIDTH)
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Fix the initial conditions:
  //
  
  function assignNodesToCircle(myGraph, radius, cx, cy) {
    myGraph.nodes.forEach(function(d, i) {
      d.x = cx + (radius * Math.sin((Math.PI * 2) * (i / myGraph.nodes.length))) 
      d.y = cy + (radius * Math.cos((Math.PI * 2) * (i / myGraph.nodes.length)))
    })
  }
  
  function linksToVert(mySvg) {
    mySvg.selectAll(".linkB")
      .attr("x1", function(d) { return PAD + d.col * GRID })
      .attr("y1", function(d) { return PAD + d.source.row * GRID })
      .attr("x2", function(d) { return PAD + d.col* GRID })
      .attr("y2", function(d) { return PAD + d.target.row * GRID })
  
    mySvg.selectAll(".linkF")
      .attr("x1", function(d) { return PAD + d.col * GRID })
      .attr("y1", function(d) { return PAD + d.source.row * GRID })
      .attr("x2", function(d) { return PAD + d.col* GRID })
      .attr("y2", function(d) { return PAD + d.target.row * GRID })
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Generate colors from the color cycle
  //
  
  function cycleColor(mult) {
    return function(d, i) { 
      var tag = tagOrder[i % tagOrder.length]
      var myR = Math.min(255, baseColors[tag].r * mult)
      var myG = Math.min(255, baseColors[tag].g * mult)
      var myB = Math.min(255, baseColors[tag].b * mult)
      return (d3.rgb(myR, myG, myB))
    }
  }
   
  ///////////////////////////////////////////////////////////////////
  //
  // Color the nodes and the links:
  //
  
  function colorNodesAndLinks(mySvg, val) {
    mySvg.selectAll(".node")
          .style("stroke", cycleColor(val))
  
    mySvg.selectAll(".linkF")
          .style("stroke", cycleColor(1 / val))
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Draw the endpoint glyphs while bringing the links forward:
  //
  
  function drawGlyphs(mySvg, myGraph, mySec) {
  
    var myg = mySvg.selectAll(".glyph")
        .data(myGraph.links)
        .enter().append("svg:rect")
        .attr("class", "glyph")
        .attr("x", function(d) {return PAD + d.col* GRID - 5 })
        .attr("y", function(d) {return PAD + d.source.row * GRID - 5 })
        .attr("width", 10)
        .attr("height", 10)
        .style("stroke-width", function(d) { return 4 })
        .style("stroke", "black")
        .style("fill", cycleColor(1/1.43))
        .style("opacity", "0.0")
        .append("svg:title")
        .text(function(d) { return d.source.name + "-" + d.target.name })
    
   var myg2 = mySvg.selectAll(".glyph2")
        .data(myGraph.links)
        .enter().append("svg:rect")
        .attr("class", "glyph2")
        .attr("x", function(d) {return PAD + d.col * GRID - 5 })
        .attr("y", function(d) {return PAD + d.target.row * GRID - 5 })
        .attr("width", 10)
        .attr("height", 10)
        .style("stroke-width", function(d) { return 4 })
        .style("stroke", "black")
        .style("fill", cycleColor(1/1.43))
        .style("opacity", "0.0")
        .append("svg:title")
        .text(function(d) { return d.source.name + "-" + d.target.name })
  
    // Trying to change back link opacity to 0 at the same time gave weird behavior
    // on my old browser. Make the lines 0 width and white instead before ditching 'em.
    // Also, the glyphs don't do this last little "pulse" at the end if the opacity
    // is < 1.0, at last on my old browser. Since this is a small demo, should not
    // be a performance issue:
  
    mySvg.selectAll(".linkF, .glyph, .glyph2")
         .style("opacity", "0.98")
  
    mySvg.selectAll(".linkB")
         .style("stroke-width", 0)
         .style("stroke", "#FFFFFF")
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Draw node labels:
  //
  
  function drawLabels(mySvg, myGraph) {
    mySvg.selectAll(".nodeLabel")
      .data(myGraph.nodes)
      .enter().append("svg:text")
      .attr("class", "nodeLabel")
      .text(function(d) { return d.name })
      .style("opacity", "0.0")
      .attr("x", function(d) { return PAD + (GRID * d.minCol) })
      .attr("y", function(d) { return PAD + (GRID * d.row) })
      .append("svg:title")
      .text(function(d) { return d.name })
  
    var zlSel = mySvg.selectAll(".zoneLabel")
      .data(myGraph.nodes)
      .enter().append("svg:text")
      .attr("transform", function(d) { 
        return "translate(" + (PAD + (GRID * (d.zoneMin + d.zoneMax) / 2)) + "," + (PAD + (GRID * (d.row - 1))) + ") scale(" + 1 + ")"
      })
      .attr("class", "zoneLabel")
      .text(function(d) { return d.name })
      .style("opacity", "0.0")
  
    zlSel.append("svg:title").text(function(d) { return d.name })
  
    function sizeIt(d, i) {
      var bbw = zlSel[0][i].getBBox().width
      var bbh = zlSel[0][i].getBBox().height
      var sfac = (GRID * (d.zoneMax - d.zoneMin) * 0.667) / bbw
      if (sfac > .33) {
        return "translate(" + (PAD + (GRID * (d.zoneMin + d.zoneMax) / 2)) + "," + (PAD + (GRID * (d.row - 1))) + ") scale(" + sfac  + ")"
      } else {
        return "translate(" + (PAD + (GRID * (d.zoneMin + d.zoneMax) / 2) + (0.4 * bbh / 2)) + "," + (PAD + (GRID * (d.row - 1)) - (0.4 * bbw / 2)) + ") rotate(" + -90  + ") scale(" + 0.4  + ")"
      }
    }
    zlSel.attr("transform", sizeIt)
  
    // Zone labels are anti-aliased better when opacity is < 1.0!
    mySvg.selectAll(".nodeLabel")
      .style("opacity", "0.98")
      .style("text-anchor", "end");
      
    mySvg.selectAll(".zoneLabel")
      .style("opacity", "0.98")
      .style("text-anchor", "middle");
  }

  
  
  ///////////////////////////////////////////////////////////////////
  //
  // Node sorting function based on degree and name:
  //
  
  function compareNodes(a, b) {
    if (a.degree < b.degree) {
       return 1
    } else if (a.degree > b.degree) {
       return -1
    } else {
       return (-a.name.localeCompare(b.name))
    }
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Set the node line lengths to final values:
  //
  
  function setNodeLength(mySvg) {
   mySvg.selectAll(".node")
         .attr("x1", function(d) { return PAD + GRID * d.minCol })
         .attr("x2", function(d) { return PAD + GRID * d.maxCol })
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Move nodes to final row positions:
  //
  
  function nodesToRows(mySvg, sec) {
     mySvg.selectAll(".node")
         .attr("y1", function(d) { return PAD + (d.row * GRID) })
         .attr("y2", function(d) { return PAD + (d.row * GRID) })
  
    mySvg.selectAll(".linkB, .linkF")
         .attr("y1", function(d) { return PAD + d.source.row * GRID })
         .attr("y2", function(d) { return PAD + d.target.row * GRID })
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Run the D3 force layout w/o animation:
  //
  
  function instantForce(mySvg, myGraph, myWidth, myHeight) {
    var force = d3.layout.force()
                  .charge(-120)
                  .linkDistance(30)
                  .size([myWidth, myHeight])
    force.nodes(myGraph.nodes)
         .links(myGraph.links)
         .start()  
    var iters = 600
    var thresh = 0.001
    for (var i = iters; i > 0; i--) {
      force.tick()
      if (force.alpha() < thresh) {
        break
      }
    }
    force.stop()
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Install the completed D3 force layout onto the graph. We apply a scale factor to make it bigger:
  //
  
  function installForce(mySvg, myWidth, myHeight, sfac, mySec) {
    mySvg.selectAll(".linkB")
         .attr("x1", function(d) { return ((d.source.x - (myWidth / 2)) / sfac) + (myWidth / 2) })
         .attr("y1", function(d) { return ((d.source.y - (myHeight / 2)) / sfac) + (myHeight / 2) })
         .attr("x2", function(d) { return ((d.target.x - (myWidth / 2)) / sfac) + (myWidth / 2) })
         .attr("y2", function(d) { return ((d.target.y - (myHeight / 2)) / sfac) + (myHeight / 2) })
    .style("opacity", "1.0")
    mySvg.selectAll(".linkF")
         .attr("x1", function(d) { return ((d.source.x - (myWidth / 2)) / sfac) + (myWidth / 2) })
         .attr("y1", function(d) { return ((d.source.y - (myHeight / 2)) / sfac) + (myHeight / 2) })
         .attr("x2", function(d) { return ((d.target.x - (myWidth / 2)) / sfac) + (myWidth / 2) })
         .attr("y2", function(d) { return ((d.target.y - (myHeight / 2)) / sfac) + (myHeight / 2) })
    mySvg.selectAll(".node")
         .attr("x1", function(d) { return ((d.x - (myWidth / 2)) / sfac) + (myWidth / 2) - 8 })
         .attr("y1", function(d) { return ((d.y - (myHeight / 2)) / sfac) + (myHeight / 2) })
         .attr("x2", function(d) { return ((d.x - (myWidth / 2)) / sfac) + (myWidth / 2) + 8})
         .attr("y2", function(d) { return ((d.y - (myHeight / 2)) / sfac) + (myHeight / 2) })
         .style("opacity", "1.0")
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Build the graph, using the graph data as it exists BEFORE the "force"
  // call.  The force() call changes some of the fields in the original import
  // from link source and target indices to node object references.
  //
  
  function buildGraph(mySvg, myGraph) {
    mySvg.selectAll(".linkB")
        .data(myGraph.links)
        .enter().append("svg:line")
        .attr("class", "linkB")
        .attr("x1", function(d) { return myGraph.nodes[d.source].x })
        .attr("y1", function(d) { return myGraph.nodes[d.source].y })
        .attr("x2", function(d) { return myGraph.nodes[d.target].x })
        .attr("y2", function(d) { return myGraph.nodes[d.target].y })
        .style("stroke-width", LINK_WIDTH)
        .style("stroke", LINK_COL)
        .style("opacity", "0.0")
  
     mySvg.selectAll(".node")
        .data(myGraph.nodes)
        .enter().append("svg:line")
        .attr("class", "node")
        .attr("x1", function(d) { return d.x - NODE_HALF })
        .attr("y1", function(d) { return d.y })
        .attr("x2", function(d) { return d.x + NODE_HALF })
        .attr("y2", function(d) { return d.y })
        .style("stroke-width", NODE_SIZE)
        .style("stroke", NODE_COL)
        .style("opacity", "0.0")
  
    mySvg.selectAll(".linkF")
        .data(myGraph.links)
        .enter().append("svg:line")
        .attr("class", "linkF")
        .attr("x1", function(d) { return myGraph.nodes[d.source].x })
        .attr("y1", function(d) { return myGraph.nodes[d.source].y })
        .attr("x2", function(d) { return myGraph.nodes[d.target].x })
        .attr("y2", function(d) { return myGraph.nodes[d.target].y })
        .style("stroke-width", LINK_WIDTH)
        .style("stroke", LINK_COL)
        .style("opacity", "0.0")
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Build the graph, using the graph data as it exists AFTER the "force"
  // call.  This one uses object references:
  //
  
  function buildGraphPost(mySvg, myGraph) {
    mySvg.selectAll(".linkB")
        .data(myGraph.links)
        .enter().append("svg:line")
        .attr("class", "linkB")
        .attr("x1", function(d) { return d.source.x })
        .attr("y1", function(d) { return d.source.y })
        .attr("x2", function(d) { return d.target.x })
        .attr("y2", function(d) { return d.target.y })
        .style("stroke-width", LINK_WIDTH)
        .style("stroke", LINK_COL)
        .style("opacity", "0.0")
  
     mySvg.selectAll(".node")
        .data(myGraph.nodes)
        .enter().append("svg:line")
        .attr("class", "node")
        .attr("x1", function(d) { return d.x - NODE_HALF })
        .attr("y1", function(d) { return d.y })
        .attr("x2", function(d) { return d.x + NODE_HALF })
        .attr("y2", function(d) { return d.y })
        .style("stroke-width", NODE_SIZE)
        .style("stroke", NODE_COL)
        .style("opacity", "0.0")
  
    mySvg.selectAll(".linkF")
        .data(myGraph.links)
        .enter().append("svg:line")
        .attr("class", "linkF")
        .attr("x1", function(d) { return d.source.x })
        .attr("y1", function(d) { return d.source.y })
        .attr("x2", function(d) { return d.target.x })
        .attr("y2", function(d) { return d.target.y })
        .style("stroke-width", LINK_WIDTH)
        .style("stroke", LINK_COL)
        .style("opacity", "0.0")
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Build the row sort. (Breadth first, from the highest degree node,
  // traversing neighbors in the order of degree):
  //
  
  function sortGraph(myGraph) {
    //myGraph.nodes.sort(compareNodes)
    var currNode = myGraph.nodes[0]
    currNode.row = 0
    orderKids(currNode, 1)
  }
  
  function orderKids(myNode, currVal) {
    //myNode.neighbors.sort(compareNodes)
    var toCheck = 0
    for (var i = 0; i < myNode.neighbors.length; i++) {
      var checkNode = myNode.neighbors[i]
      if (checkNode.row === -1) {
        checkNode.row = currVal++
        toCheck++
      }
    }
    if (toCheck > 0) {
      for (var i = 0; i < myNode.neighbors.length; i++) {
        var checkNode = myNode.neighbors[i]
        if (checkNode.row !== -1) {
          currVal = orderKids(checkNode, currVal)
        }
      }
    }
    return (currVal)
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Link sorting
  //
  
  // Create what we want to sort:
  
  function createSortingHat(myGraph) {
    var sorter = []
    for (var i = 0; i < myGraph.links.length; i++) {
      var link = myGraph.links[i]
      var aGuy = {}
      aGuy.min = Math.min(link.source.row, link.target.row)
      aGuy.max = Math.max(link.source.row, link.target.row)
      aGuy.index = i
      sorter.push(aGuy)
    }
    return (sorter)
  }
  
  function compareGuys(a, b) {
    if (a.min < b.min) {
       return -1
    }
   if (a.min > b.min) {
       return 1
    // mins are the same:
    } 
   if (a.max < b.max) {
       return -1
    } 
   if (a.max > b.max) {
       return 1
    }
    return 0
  }
  
  // Horribly inefficient, but this is a small demo...
  
  function sortLinks(myGraph) {
    var sortingHat = createSortingHat(myGraph)
    sortingHat.sort(compareGuys)
    var lastGuy = null
    for (var i = 0; i < sortingHat.length; i++) {
      var aGuy = sortingHat[i]
      var useLink = myGraph.links[aGuy.index]
      useLink.col = i
      if ((lastGuy != null) && (aGuy.min > lastGuy.min)) {
        var gotIt = false
        for (var j = i - 1; j >= 0; j--) {
          if ((sortingHat[j].min < lastGuy.min) || (j === 0)) {  
            for (var k = 0; k < myGraph.nodes.length; k++) {
              var chkNode = myGraph.nodes[k]
              if (chkNode.row === lastGuy.min) {
                gotIt = true
                myGraph.nodes[k].zoneMin = j
                myGraph.nodes[k].zoneMax = i
                break
              }
            }
            if (gotIt) {
              break
            }
          }
        }
      }
      lastGuy = aGuy
    }
  }
  
  ///////////////////////////////////////////////////////////////////
  //
  // Figure out the final node lengths:
  // 
  
  function boundNodes(myGraph) {
    for (var i = 0; i < myGraph.nodes.length; i++) {
      myGraph.nodes[i].minCol = Number.MAX_VALUE / 2
      myGraph.nodes[i].maxCol = -Number.MAX_VALUE / 2
    }
  
    for (var i = 0; i < myGraph.links.length; i++) {
      var link = myGraph.links[i]
      if (link.col < link.source.minCol) {
        link.source.minCol = link.col
      }
      if (link.col > link.source.maxCol) {
        link.source.maxCol = link.col
      }
      if (link.col < link.target.minCol) {
        link.target.minCol = link.col
      }
      if (link.col > link.target.maxCol) {
       link.target.maxCol = link.col
      }
    }
  }
  
  return createFabric;
})();