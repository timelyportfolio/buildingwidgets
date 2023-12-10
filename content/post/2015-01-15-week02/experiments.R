# think I'll try to add a pan/zoom plugin probably for svg

library(SVGAnnotation)
library(htmltools)
library(htmlwidgets)

# make the skeleton of a widget
setwd("..")
devtools::create("svgPanZoom")
setwd("svgPanZoom")
scaffoldWidget("svgPanZoom",bowerPkg = "svg-pan-zoom")

library(svgPanZoom)

# try it with HiveR
### 2D Hive Plots
require("grid")
# Generate some random data
test2 <- ranHiveData(nx = 2)
test3 <- ranHiveData(nx = 3)

# First the nx = 2 case.
# Note that gpar contains parameters that apply to both the
# axis labels and arrow. A 6th value in arrow offsets the arrow vertically:
plotHive(test2, ch = 5, axLabs = c("axis 1", "axis 2"), rot = c(-90, 90),
         axLab.pos = c(20, 20), axLab.gpar = gpar(col = "pink", fontsize = 14, lwd = 2),
         arrow = c("radius units", 0, 20, 60, 25, 40))

# Now nx = 3:
plotHive(test3) # default plot

# Add axis labels & options to nx = 3 example.  Note that rot is not part of gpar
plotHive(test3, ch = 5, axLabs = c("axis 1", "axis 2", "axis 3"),
         axLab.pos = c(10, 15, 15), rot = c(0, 30, -30),
         axLab.gpar = gpar(col = "orange", fontsize = 14))

# from HiveR documentation ?plotHive 
library(HiveR)
data(HEC)
svgPanZoom(
  svgPlot(
    {
      data(HEC)
      setwd(system.file("extdata", "Misc", package = "HiveR"))
      plotHive(HEC, ch = 0.1, bkgnd = "white",
               axLabs = c("hair\ncolor", "eye\ncolor"),
               axLab.pos = c(1, 1),
               axLab.gpar = gpar(fontsize = 14),
               anNodes = "HECnodes.txt",
               anNode.gpar = gpar(col = "black"),
               grInfo = "HECgraphics.txt",
               arrow = c("more\ncommon", 0.0, 2, 4, 1, -2))
      
      grid.text("males", x = 0, y = 2.3, default.units = "native")
      grid.text("females", x = 0, y = -2.3, default.units = "native")
      grid.text("Pairing of Eye Color with Hair Color", x = 0, y = 3.75,
                default.units = "native", gp = gpar(fontsize = 18))
      grid.text("A test of plotHive annotation options", x = 0, y = 3.25,
                default.units = "native", gp = gpar(fontsize = 12))
      grid.text("Images from Wikipedia Commons", x = 0, y = -3.5,
                default.units = "native", gp = gpar(fontsize = 9))
      setwd(currDir)
    }
  , height = 20
  , width = 30)
)
