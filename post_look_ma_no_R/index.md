`htmlwidgets` in effect are reusable HTML/JS/CSS components (think simple Polymer or WebComponents)  I don't recommend it, but if we wanted to use an `htmlwidget` with no R, it is fairly straightforward.  Even if you decided not to do this, I think it will be helpful to clear up some of the magic internals of `htmlwidgets`.

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

To see it working, I'll embed the iframe below, or go directly to the [example.html](//timelyportfolio.github.io/post_look_ma_no_R/example.html).

<iframe src="https://timelyportfolio.github.io/post_look_ma_no_R/example.html" style='height:400px; width:400px; border:none;'></iframe>

### easier? way

The data `script` with `data-for` piece can be tricky to populate.  Many times, it might be easier to manually render our `htmlwidget` from JavaScript.

