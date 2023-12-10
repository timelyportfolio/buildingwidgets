HTMLWidgets.widget({

  name: 'export_widget',

  type: 'output',

  // extract bits and pieces from NY Times svg_crowbar
  //   https://github.com/NYTimes/svg-crowbar
  svg_crowbar: function(svg){
    var prefix = {
      xmlns: "http://www.w3.org/2000/xmlns/",
      xlink: "http://www.w3.org/1999/xlink",
      svg: "http://www.w3.org/2000/svg"
    };

    var emptySvg = window.document.createElementNS(prefix.svg, 'svg');
    window.document.body.appendChild(emptySvg);
    var emptySvgDeclarationComputed = getComputedStyle(emptySvg);

    svg.setAttribute("version", "1.1");

    // removing attributes so they aren't doubled up
    svg.removeAttribute("xmlns");
    svg.removeAttribute("xlink");

    // These are needed for the svg
    if (!svg.hasAttributeNS(prefix.xmlns, "xmlns")) {
      svg.setAttributeNS(prefix.xmlns, "xmlns", prefix.svg);
    }

    if (!svg.hasAttributeNS(prefix.xmlns, "xmlns:xlink")) {
      svg.setAttributeNS(prefix.xmlns, "xmlns:xlink", prefix.xlink);
    }

    emptySvg.innerHTML = svg.innerHTML;

    setInlineStyles(emptySvg, emptySvgDeclarationComputed);

    window.document.body.removeChild(emptySvg);

    return emptySvg;


    function setInlineStyles(svg, emptySvgDeclarationComputed) {

      function explicitlySetStyle (element) {
        var cSSStyleDeclarationComputed = getComputedStyle(element);
        var i, len, key, value;
        var computedStyleStr = "";
        for (i=0, len=cSSStyleDeclarationComputed.length; i<len; i++) {
          key=cSSStyleDeclarationComputed[i];
          value=cSSStyleDeclarationComputed.getPropertyValue(key);
          if (value!==emptySvgDeclarationComputed.getPropertyValue(key)) {
            computedStyleStr+=key+":"+value+";";
          }
        }
        element.setAttribute('style', computedStyleStr);
      }
      function traverse(obj){
        var tree = [];
        tree.push(obj);
        visit(obj);
        function visit(node) {
          if (node && node.hasChildNodes()) {
            var child = node.firstChild;
            while (child) {
              if (child.nodeType === 1 && child.nodeName != 'SCRIPT'){
                tree.push(child);
                visit(child);
              }
              child = child.nextSibling;
            }
          }
        }
        return tree;
      }
      // hardcode computed css styles inside svg
      var allElements = traverse(svg);
      var i = allElements.length;
      while (i--){
        explicitlySetStyle(allElements[i]);
      }
    }


    return emptySvg;
  },

  // our function to export as png
  pngify: function( svg ){
    var cvs = document.createElement("canvas")
    cvs.width = svg.getBoundingClientRect().width
    cvs.height = svg.getBoundingClientRect().height

    //check for percentage height and width
    //  if so explicitly set height and width on svg as attributes
    if(svg.style.width) {
      svg.style.width = null
      svg.style.height = null
      svg.setAttribute("width",cvs.width)
      svg.setAttribute("height", cvs.height)
    }

    svg = window.HTMLWidgets.svg_crowbar( svg );

    var ctx = cvs.getContext("2d")

    var datUrl

    try {
      ctx.drawSvg( svg.outerHTML, 0, 0 )
      datUrl = cvs.toDataURL()
      downloadFile( datUrl )
    } catch(e) {
      console.log(["failed with error", e].join(' '));
    }

  },

  initialize: function(el, width, height) {

    // add our function to HTMLWidgets
    if(typeof window.HTMLWidgets.pngify === "undefined")  window.HTMLWidgets.pngify = this.pngify;
    if(typeof window.HTMLWidgets.svg_crowbar === "undefined")  window.HTMLWidgets.svg_crowbar = this.svg_crowbar;

    return { };

  },

  renderValue: function(el, x, instance) {

    var elSelect;

    // if a string assume it is a selector
    if( typeof x.selector === "string" ){
      elSelect = document.querySelectorAll( x.selector )
    }

    // if nothing get all htmlwidgets
    if( typeof x.selector === "undefined" || x.selector === null ){
      // filter out export_widget htmlwidgets
      elSelect = [].filter.call(
                    document.querySelectorAll(".html-widget-static-bound"),
                    function(e){
                      return [].indexOf.call(e.classList,"export_widget") < 0
                    }
                  )
    }

    [].forEach.call( elSelect, function(e){
        var btn = document.createElement("button")
        btn.style.position = "relative"
        btn.style.bottom = "95%"
        btn.style.left = "95%"
        btn.style.width = "30px";
        btn.style.height = "30px";
        // download icon courtesy Font Awesome (MIT License)
        btn.style.backgroundImage = ["url('data:image/svg+xml;utf8,",
                                '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z"/></svg>',
                                "')"
                               ].join("")
        btn.onclick = function() {
          HTMLWidgets.pngify(
            e.tagName === "svg" ? e : e.getElementsByTagName("svg")[0]
          )
        }
        // handle placement
        if ( e.tagName === "svg" ) {
          e.parentNode.appendChild( btn )
        } else {
          e.appendChild( btn )
        }
    })

  },

  resize: function(el, width, height, instance) {

  }

});
