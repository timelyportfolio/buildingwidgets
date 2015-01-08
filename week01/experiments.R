library(igraph)
library(pipeR)
library(DiagrammeR)
library(htmltools)

# make a simple graph
iG <- graph.formula(Sam+-Mary+-Tom++Jill)

# get the edges in a form almost ready for DiagrammeR
print( E(iG) ) %>>%
  unlist %>>%
  unname %>>%
  (
    c(
      "graph LR"
      ,paste0(gsub(x=.,pattern="(\\s)*(->)(\\s)*",replacement="-->"))
    )
  ) %>>%
  paste(collapse=";") %>>%
  DiagrammeR

tagList(
c(
'graph TD;',
     'classDef exClass opacity:0.5 !important;',
     'a-->b;',
     'class a exClass;'
) %>>% DiagrammeR
,c(
  'graph TD;',
  'a-->b;',
  'class a exClass;'
) %>>% DiagrammeR
) %>>% html_print


# workflow of a post graph
DiagrammeR("
  graph TD;
    idhw{htmlwidget} -->experiments;
    idhw -->content;
    experiments -->RMarkdown
    content -->RMarkdown
    RMarkdown -->|R/knitr|Markdown;
    Markdown -->|Pandoc|HTML;
    HTML -->|git push| Github;
    HTML -->|copy/paste| Squarespace ;
")
# htmlwidgets network of yaml dependency or package imports/suggest
library(yaml)

showcaseWidgets = list(
  c("leaflet","rstudio/leaflet/master/inst/htmlwidgets/leaflet.yaml")
  ,c("dygraphs","rstudio/dygraphs/master/inst/htmlwidgets/dygraphs.yaml")
  ,c("networkD3","christophergandrud/networkD3/master/inst/htmlwidgets/sankeyNetwork.yaml")
  ,c("DT","rstudio/DT/master/inst/htmlwidgets/datatables.yaml")
  ,c("rthreejs","bwlewis/rthreejs/master/inst/htmlwidgets/globe.yaml")
)

deps = lapply(
  showcaseWidgets
  ,function(w){
    y = paste0(
      "https://raw.githubusercontent.com/"
      ,w[2]
    )
    deps = yaml.load_file( y )
    data.frame(
      widget = w[1]
      ,dependency = unlist(deps)[grep(x=names(unlist(deps)),pattern=".name")]
      ,stringsAsFactors = F
    )
  }
)

deps = do.call(rbind,deps)

DiagrammeR(
  c(
    "graph LR;"
    ,sapply(
      1:nrow(deps)
      ,function(n){
        paste0(
          "id",which(unique(deps[,1])==deps[n,1]),"["
          ,deps[n,"widget"]
          ,"]-->"
          ,"id",which(unique(deps[,2])==deps[n,2])+nrow(deps),"["
          , deps[n,"dependency"]
          ,"]"
        )
      }
    )
    ,paste0(
      "style id"
      , 1:length(unique(deps[,1]))
      , " fill:"
      , RColorBrewer::brewer.pal( n = 9, "Set1")[1:length(unique(deps[,1]))]
    )
  )
)

# htmlwidgets stars/forks
# some sequence diagram example
# animated path example (advanced) and does not work in RStudio
dg = DiagrammeR("
  graph LR; animA[A]; style animA stroke-dasharray: 10,  animation: dash 1s linear infinite; 
")
# add a call our script makeAnimated defined in tags$script after render
dg$x$tasks = htmlwidgets::JS("makeAnimated")
tagList(
  dg
  ,tags$script(sprintf("
    function makeAnimated (el){
      // get the stylesheet and add a rule for an animated path
      var sty = document.styleSheets[0] //el.getElementsByTagName('style')[0];
      // http://davidwalsh.name/add-rules-stylesheets
      //   http://css-tricks.com/svg-line-animation-works/
      sty.insertRule('%s')
    }"
    ,HTML( ' @keyframes dash { to { stroke-dashoffset: 20;  } } ' )
  ))
) %>>% html_print




library(diagram)
svgPlot(plotmat(
  get.adjacency(iG,sparse=F,edges=T)
  ,box.size=0.05
  ,relsize=0.8
)) %>>% saveXML %>>% HTML  %>>% html_print
