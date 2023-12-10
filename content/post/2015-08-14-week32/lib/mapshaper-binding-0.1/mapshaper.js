HTMLWidgets.widget({

  name: 'mapshaper',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {


    // stackoverflow http://stackoverflow.com/questions/27159179/how-to-convert-blob-to-file-in-javascript?rq=1
    function blobToFile(theBlob, fileName){
      //A Blob() is almost a File() - it's just missing the two properties below which we will add
      theBlob.lastModifiedDate = new Date();
      theBlob.name = fileName;
      return theBlob;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Blob?redirectlocale=en-US&redirectslug=DOM%2FBlob
    var jsonFiles = []
    if(Array.isArray(x.files)){
      x.files.forEach( function(fl) {
        //if object assume source was a list from R
        if(typeof(fl.geojson) === "object") {
          fl.geojson = JSON.stringify(fl.geojson);
        }

        var bf = blobToFile(
          new Blob(
            [fl.geojson],
            {type : 'application/json'}
          ),// the blob
          fl.name + ".json"
        )
        jsonFiles.push( bf );
      })
    }

    // http://www.2ality.com/2013/06/triggering-events.html
    //   https://developer.mozilla.org/en-US/docs/Web/Events/drop
    var dropEvent = new Event(
    	"drop",
    	{
    		bubbles: true,
    		cancelable: true
    	}
    );

    dropEvent.dataTransfer = { files: jsonFiles }

    // do two things here to get the R data integrated
    //  1.  try to use setTimeout for delayed add once
    //        mapshaper has finished loading
    setTimeout(
      function(){document.body.dispatchEvent( dropEvent );}
      ,5e2
    )
    //  2.  if timeout fails, then provide a button for
    //        manual integration of R data
    document.getElementById('r-selection-btn').onclick = function(){
      document.body.dispatchEvent( dropEvent );
    }
  },

  resize: function(el, width, height, instance) {

  }

});
