# biofabric

a module for generating [biofabric graphs](https://github.com/wjrl/BioFabric) using d3. adapted from [this example](http://www.biofabric.org/gallery/pages/SuperQuickBioFabric.html) and made more abstract

![graph](graph.png)

**You will most likely have to do edits to the code to get your graph to render beautifully** as the original code this was adapted from was designed around the `miserables.json` data.

## usage

```js
var fabric = require('biofabric')
fabric(graph, {width: 1400})
```

`graph` should be a JS object like this:

```json
{
  "nodes":[
    {"name":"Bob","group":1},
    {"name":"Alice","group":2}
  ],
  "links":[
    {"source":1,"target":0,"value":1}
  ]
}
```

