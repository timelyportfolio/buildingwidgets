# reusable updating radarChart

###Design based on original by [NadiehBremer](https://twitter.com/NadiehBremer) at [Visual Cinnamon](http://www.visualcinnamon.com/2015/10/different-look-d3-radar-chart.html)

###Coding philosophy inspired by [Rob Moore](http://www.toptal.com/d3-js/towards-reusable-d3-js-charts)

####[See this block in production with Live Data](http://tennisvisuals.com/examples/MatchRadar.html)

#### [Find the Latest Code on GitHub](https://github.com/TennisVisuals/updating-radar-chart)

#####I figured out enter/exit/update for nested objects by studying [Lee Mendelowitz's block](http://bl.ocks.org/LeeMendelowitz/11383724) and reviewing [Mike's comments](https://groups.google.com/forum/#!topic/d3-js/5AxgsKK31EA)

###Features:
- Separate layer for hover objects which need to remain on top of chart
- Separate layer for tooltip which needs to be uppermost layer
- Events are configurable as options such that external functions can be seamlessly integrated
 - e.g. external tooltips can be configured for mouseover events

###Accessors:
####*by default accessors with no parameters return current values*
- chart.duration(transition-time) // duration of transitions
- chart.options(object) // many options don't have accessors
- chart.width(width)
- chart.height(height)
- chart.margins(object)
- chart.data(data) // set data
- chart.update() // update chart
- chart.maxValue(value) // maxValue of axis values
- chart.levels(value) // number of ring levels
- chart.opacity(value) // opacity of unselected areas
- chart.borderWidth(value) // width of border surrounding areas
- chart.rounded(true/false) // select rounded areas
- chart.events(object) -- chart.events({'legend': {'mouseover': null}})
- chart.color(d3.scale)
- chart.colors(object) -- chart.colors({'axis1': 'color1', 'axis2': 'color2'})

#####operations on data held in chart instance
- chart.pop()
- chart.push(row) -or- chart.push([row, row])
- chart.shift()
- chart.unshift(row) -or- chart.unshift([row, row])
- chart.slice(begin, end)

#####operations performed on data prior to display
- chart.invert(axis) -or- chart.invert([axis, axis]) // index or "axis label"
- chart.ranges({'axis': [min, max]}) 
- chart.filterAxes('axis') -or- chart.filterAxes(['axis', 'axis'])
- chart.filterAreas('key') -or- chart.filterAreas(['key1', 'key2'])

#####convenience
- chart.keys() // return a list of data keys
- chart.axes() // return labels of all axes
- chart.nodes() // return svg object
