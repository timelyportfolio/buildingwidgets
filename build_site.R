library(htmltools)
library(pipeR)

options("scipen"=100)

Sys.Date():as.Date("2015-12-31") %>>%
  ( as.xts(x=round(runif(length(.),max=4)),order.by=as.Date(.)) ) %>>%
  (.[xts::endpoints(.,on="weeks")]) %>>%
  (
    data.frame(
      date = as.integer(index(.))*24*60*60 #*1000
      ,value = coredata(.)
    )
  ) %>>%
( 
  structure(
    lapply(
      1:nrow(.)
      ,function(n){
        .[n,2]
      }
    )
    ,names = .[,1]
  )
) %>>%
jsonlite::toJSON(
    auto_unbox=T
) %>>%
(~js) %>>%
cat( file = "posts.json" )


tagList(
  tags$div(id="cal-heatmap",style = "height:100%;width:100%")
  ,tags$script(sprintf("
    var cal = new CalHeatMap();
  	cal.init({
      domain: 'month',
      subDomain : 'week',
      start: new Date(2015,0),
      range: 12,
      data: %s,
      dataType: 'json'
  	});
  ",js))
) %>>%
  attachDependencies(
    list(
      htmlDependency(
        name = "d3"
        ,version = "3.4"
        ,src = c(href = "http://d3js.org")
        ,script = "d3.v3.min.js"
      )
      ,htmlDependency(
        name = "cal-heatmap"
        ,version = "3.3.1"
        ,src = c(href = "http://cdn.jsdelivr.net/cal-heatmap/3.3.10")
        ,script = "cal-heatmap.min.js"
        ,style = "cal-heatmap.css"
      )
    )
  ) %>>%
  html_print %>>%
  (~ file.copy(from = ., to = "index.html", overwrite = T) ) 