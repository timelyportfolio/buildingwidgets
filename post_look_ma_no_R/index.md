`htmlwidgets` in effect are reusable HTML/JS/CSS components (think simple Polymer or WebComponents)  I don't recommend it, but if we wanted to use an `htmlwidget` with no R, it is fairly straightforward.  Even if you decided not to do this, I think it will be helpful in your journey to `htmlwidgets` mastery.

We'll use the simple but powerful `jsonedit` from the `listviewer` package.  Its JavaScript binding is very sparse, so I hope it will be a good subject.

### Output from a `htmlwidget`

Let's start by seeing what happens when we create our htmlwidget.  The `R` code would look something like this.

```
library(listviewer)
# give it an empty list() or {} in JavaScript
jsonedit(list())
```

If we open our developer tools in Chrome, we should see something like this.


![screenshot of html from htmlwidget](C:/Users/Kent.TLEAVELL_NT/Dropbox/development/r/buildingwidgets/post_look_ma_no_R/screenshot_htmlwidget_output.png)


Each `htmlwidget` will be different, but the ingredients will usually contain:

1. JavaScript and CSS dependencies
    - `htmlwidgets.js`
    - js/css for the source libraries which are provided in the `htmlwidget` yaml
    ![screenshot of yaml dependencies](C:/Users/Kent.TLEAVELL_NT/Dropbox/development/r/buildingwidgets/post_look_ma_no_R/screenshot_yaml.png)
    - the htmlwidget binding - `jsonedit.js`
 
2. HTML tags
    - usually a `<div>` with an `id` and `class='..widgetname.. html-widget'`, but depending on the widget might be a different `tag` or set of `tags`
    - `<script type='application/json' data-for='..widgetid..'>`

  
### copy/paste method

Nearly every step to enlightenment in programming starts with copy/paste, so we'll copy/paste the bits and pieces to make this.  We'll change to use the CDN for `jsoneditor`.  Also, we'll change the random element `id` to `mywidget`.  These aren't necessary, but they might be considered an improvement.


```
<!doctype html>
<html>
  <head>
    <script src="https://cdn.rawgit.com/ramnathv/htmlwidgets/master/inst/www/htmlwidgets.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.5.6/jsoneditor.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/5.5.6/jsoneditor.min.css" rel="stylesheet">
    
    <script src="https://cdn.rawgit.com/timelyportfolio/listviewer/master/inst/htmlwidgets/jsonedit.js"></script>
  </head>
  <body>
    <div id="mywidget" class="jsonedit html-widget" style="height:100%;width:100%;"></div>
    <script type="application/json" data-for="mywidget">
      {"x":{"data":[],"options":{"mode":"tree","modes":["code","form","text","tree","view"]}},"evals":[],"jsHooks":[]}
    </script>
  </body>
</html>
```

To see it working, I'll embed the iframe below, or go directly to the [example.html](//timelyportfolio.github.io/buildingwidgets/post_look_ma_no_R/example.html).

<iframe src="//timelyportfolio.github.io/buildingwidgets/post_look_ma_no_R/example.html" style="height:200px; width:400px; border:none;"></iframe>


### easier way?

The data `script` with `data-for` piece can be tricky to populate.  Many times, it might be easier to manually render our `htmlwidget` from JavaScript.  We can get rid of the `<script ... data-for>` and use some more traditional looking JavaScript.

#### find the widget binding

```
  // use HTMLWidgets.widgets to give us
  // a list of available htmlwiget bindings
  //  in this case we should just have one
  var widgets = HTMLWidgets.widgets;
  // assume there might be lots, so filter for the one we want
  //  in this case, we want jsonedit
  var jed = widgets.filter(function(widget){
    return widget.name === "jsonedit"
  })[0];
  
```

#### get/make all the arguments for `renderValue`

```
  // the binding should have an intialize, renderValue, and resize
  //  to render we use renderValue with arguments
  //    el the DOM element in which we want to render
  //    x  the data and options
  //    instance return value from initialize
  
  // get our htmlwidget DOM element
  var el = document.getElementById('mywidget');
  // make our x data and options
  //  this varies by widget
  //    and if widget built robustly then might be able
  //    to eliminate much of this
  var x = {
    "data":[],
    "options":{"mode":"tree","modes":["code","form","text","tree","view"]}
  };
  // get our htmlwidget instance with initialize
  var instance = jed.initialize(el);
```

#### render our widget

```  
  jed.renderValue(
    el,
    x,
    instance
  );
```

To see it working, I'll embed the iframe below, or go directly to the [example.html](//timelyportfolio.github.io/buildingwidgets/post_look_ma_no_R/example_manualjs.html).

<iframe src="//timelyportfolio.github.io/buildingwidgets/post_look_ma_no_R/example_manualjs.html" style="height:200px; width:400px; border:none;"></iframe>


### widget from a button

Now let's push a button and let JavaScript make us a `htmlwidget` from the `<textarea>`.  We'll just need to make a few minor adjustments.


#### add our html tags for the textarea and button

```
<textarea id="text-data">{"x":1,"y":[1,2,3,4]}</textarea>
<button id="btn-make" onclick="make_widget()">Make a Widget</button>
```

#### wrap our render into a function

```
  function make_widget(){
    // this time we'll parse the JavaScript from the textarea
    //  to populate jsonedit
    var jsondata = JSON.parse(
      document.getElementById('text-data').value
    );
    
    ...
    
        var x= {
          "data":jsondata,
          "options":{"mode":"tree","modes":["code","form","text","tree","view"]}
        };
        
    ...
  }
```

To see it working, I'll embed the iframe below, or go directly to the [example.html](//timelyportfolio.github.io/buildingwidgets/post_look_ma_no_R/example_button.html).

<iframe src="//timelyportfolio.github.io/buildingwidgets/post_look_ma_no_R/example_button.html" style="height:200px; width:400px; border:none;"></iframe>

### Reusable Components

Resability and portability is quite nice, so if you really like an `htmlwidget`, but don't use R, you can still use them.  We'd love to have some more JavaScript/HTML/CSS, or heck Python, Go, Elm folks.
