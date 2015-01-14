# think I'll try to add a pan/zoom plugin probably for svg

library(SVGAnnotation)
library(htmltools)
library(htmlwidgets)

# make the skeleton of a widget
setwd("..")
devtools::create("svgPanZoom")
setwd("svgPanZoom")
scaffoldWidget("svgPanZoom",bowerPkg = "svg-pan-zoom")

