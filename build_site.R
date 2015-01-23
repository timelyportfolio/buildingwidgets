library(htmltools)
library(pipeR)
library(xts)

options("scipen"=100)

as.Date("2015-01-01"):as.Date("2015-12-31") %>>%
  (
    as.xts(
      # make programmatic
      x = c(rep(NA,7),100,rep(NA,6),100,rep(NA,7),100,rep(NA,length(.)-23))
      ,order.by=as.Date(.)
    )
  ) %>>%
  #(~ .[endpoints(.,on="weeks")][1] = 100) %>>%
  (
    data.frame(
      date = as.integer(index(.))*24*60*60 #*1000
      ,value = coredata(.)
    )
  ) %>>%
  ( 
    structure(
      as.list(.[[2]][!is.na(.[[2]])])
      ,names = as.character(.[[1]][!is.na(.[[2]])])
    )
  ) %>>%
  jsonlite::toJSON(
      auto_unbox=T
      ,na="null"
  ) %>>%
  (~js)# %>>%
  #cat( file = "posts.json" )


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
      dataType: 'json',
      subDomainTitleFormat:{
        filled : 'widgets created for {date}',
        empty : 'no widgets {date}'
      },
      verticalOrientation: true,
      displayLegend: false, 
      onClick: function(date, count) {
      	console.log(d3.time.format('%%U')(date) + ' clicked')
        window.open( './week' + d3.time.format('%%U')(date), name = '_blank' )
      }
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
        ,version = "3.5"
        ,src = c(href = "./lib/cal-heatmap")
        ,script = "cal-heatmap.js"
        ,style = "cal-heatmap.css"
      )
    )
  ) %>>%
  html_print %>>%
  (~ file.copy(from = ., to = "index.html", overwrite = T) ) 