(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.vl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
// JavaScript specs as packaged in the D3 library (d3js.org). Please see license at http://colorbrewer.org/export/LICENSE.txt
!function() {

var colorbrewer = {YlGn: {
3: ["#f7fcb9","#addd8e","#31a354"],
4: ["#ffffcc","#c2e699","#78c679","#238443"],
5: ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
6: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
7: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
8: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
9: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]
},YlGnBu: {
3: ["#edf8b1","#7fcdbb","#2c7fb8"],
4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
},GnBu: {
3: ["#e0f3db","#a8ddb5","#43a2ca"],
4: ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
5: ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
6: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
7: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
8: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
9: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]
},BuGn: {
3: ["#e5f5f9","#99d8c9","#2ca25f"],
4: ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
5: ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
6: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
7: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
8: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
9: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]
},PuBuGn: {
3: ["#ece2f0","#a6bddb","#1c9099"],
4: ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
5: ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
6: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
7: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
8: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
9: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]
},PuBu: {
3: ["#ece7f2","#a6bddb","#2b8cbe"],
4: ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
5: ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
6: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
7: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
8: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
9: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]
},BuPu: {
3: ["#e0ecf4","#9ebcda","#8856a7"],
4: ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
5: ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
6: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
7: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
8: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
9: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]
},RdPu: {
3: ["#fde0dd","#fa9fb5","#c51b8a"],
4: ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
5: ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
6: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
7: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
8: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
9: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]
},PuRd: {
3: ["#e7e1ef","#c994c7","#dd1c77"],
4: ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
5: ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
6: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
7: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
8: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
9: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
},OrRd: {
3: ["#fee8c8","#fdbb84","#e34a33"],
4: ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
5: ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
6: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
7: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
8: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
9: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
},YlOrRd: {
3: ["#ffeda0","#feb24c","#f03b20"],
4: ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
5: ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
6: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
7: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
8: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
9: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
},YlOrBr: {
3: ["#fff7bc","#fec44f","#d95f0e"],
4: ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
5: ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
6: ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
7: ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
8: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
9: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]
},Purples: {
3: ["#efedf5","#bcbddc","#756bb1"],
4: ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],
5: ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],
6: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],
7: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
8: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
9: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]
},Blues: {
3: ["#deebf7","#9ecae1","#3182bd"],
4: ["#eff3ff","#bdd7e7","#6baed6","#2171b5"],
5: ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],
6: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],
7: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
8: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
9: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
},Greens: {
3: ["#e5f5e0","#a1d99b","#31a354"],
4: ["#edf8e9","#bae4b3","#74c476","#238b45"],
5: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],
6: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],
7: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
8: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
9: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]
},Oranges: {
3: ["#fee6ce","#fdae6b","#e6550d"],
4: ["#feedde","#fdbe85","#fd8d3c","#d94701"],
5: ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],
6: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],
7: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
8: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
9: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]
},Reds: {
3: ["#fee0d2","#fc9272","#de2d26"],
4: ["#fee5d9","#fcae91","#fb6a4a","#cb181d"],
5: ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],
6: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],
7: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
8: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
9: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
},Greys: {
3: ["#f0f0f0","#bdbdbd","#636363"],
4: ["#f7f7f7","#cccccc","#969696","#525252"],
5: ["#f7f7f7","#cccccc","#969696","#636363","#252525"],
6: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],
7: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
8: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
9: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]
},PuOr: {
3: ["#f1a340","#f7f7f7","#998ec3"],
4: ["#e66101","#fdb863","#b2abd2","#5e3c99"],
5: ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
6: ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
7: ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
8: ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
9: ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
10: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
11: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]
},BrBG: {
3: ["#d8b365","#f5f5f5","#5ab4ac"],
4: ["#a6611a","#dfc27d","#80cdc1","#018571"],
5: ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
6: ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
7: ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
8: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
9: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
10: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
11: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]
},PRGn: {
3: ["#af8dc3","#f7f7f7","#7fbf7b"],
4: ["#7b3294","#c2a5cf","#a6dba0","#008837"],
5: ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
6: ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
7: ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
8: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
9: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
10: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
11: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]
},PiYG: {
3: ["#e9a3c9","#f7f7f7","#a1d76a"],
4: ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
5: ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
6: ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
7: ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
8: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
9: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
10: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
11: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
},RdBu: {
3: ["#ef8a62","#f7f7f7","#67a9cf"],
4: ["#ca0020","#f4a582","#92c5de","#0571b0"],
5: ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
6: ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
7: ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
},RdGy: {
3: ["#ef8a62","#ffffff","#999999"],
4: ["#ca0020","#f4a582","#bababa","#404040"],
5: ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
6: ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
7: ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]
},RdYlBu: {
3: ["#fc8d59","#ffffbf","#91bfdb"],
4: ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
5: ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
6: ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
7: ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
8: ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
9: ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
},Spectral: {
3: ["#fc8d59","#ffffbf","#99d594"],
4: ["#d7191c","#fdae61","#abdda4","#2b83ba"],
5: ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
6: ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
7: ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
8: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
9: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
10: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
11: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
},RdYlGn: {
3: ["#fc8d59","#ffffbf","#91cf60"],
4: ["#d7191c","#fdae61","#a6d96a","#1a9641"],
5: ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
6: ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
7: ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
8: ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
9: ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
},Accent: {
3: ["#7fc97f","#beaed4","#fdc086"],
4: ["#7fc97f","#beaed4","#fdc086","#ffff99"],
5: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
6: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
7: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
8: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
},Dark2: {
3: ["#1b9e77","#d95f02","#7570b3"],
4: ["#1b9e77","#d95f02","#7570b3","#e7298a"],
5: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],
6: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],
7: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],
8: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
},Paired: {
3: ["#a6cee3","#1f78b4","#b2df8a"],
4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
},Pastel1: {
3: ["#fbb4ae","#b3cde3","#ccebc5"],
4: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
5: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
6: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
7: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
8: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
9: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
},Pastel2: {
3: ["#b3e2cd","#fdcdac","#cbd5e8"],
4: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
5: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
6: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
7: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
8: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]
},Set1: {
3: ["#e41a1c","#377eb8","#4daf4a"],
4: ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
5: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
6: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
7: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
8: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
9: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]
},Set2: {
3: ["#66c2a5","#fc8d62","#8da0cb"],
4: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
5: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
6: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
7: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
8: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]
},Set3: {
3: ["#8dd3c7","#ffffb3","#bebada"],
4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
}};

if (typeof define === "function" && define.amd) {
    define(colorbrewer);
} else if (typeof module === "object" && module.exports) {
    module.exports = colorbrewer;
} else {
    this.colorbrewer = colorbrewer;
}

}();

},{}],3:[function(require,module,exports){
module.exports = require('./colorbrewer.js');

},{"./colorbrewer.js":2}],4:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('d3-color', ['exports'], factory) :
  factory((global.d3_color = {}));
}(this, function (exports) { 'use strict';

  function Color() {};

  var reHex3 = /^#([0-9a-f]{3})$/;
  var reHex6 = /^#([0-9a-f]{6})$/;
  var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
  var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
  var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
  color.prototype = Color.prototype = {
    displayable: function() {
      return this.rgb().displayable();
    },
    toString: function() {
      return this.rgb() + "";
    }
  };

  function color(format) {
    var m;
    format = (format + "").trim().toLowerCase();
    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf))) // #f00
        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
        : (m = reRgbInteger.exec(format)) ? rgb(m[1], m[2], m[3]) // rgb(255,0,0)
        : (m = reRgbPercent.exec(format)) ? rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100) // rgb(100%,0%,0%)
        : (m = reHslPercent.exec(format)) ? hsl(m[1], m[2] / 100, m[3] / 100) // hsl(120,50%,50%)
        : named.hasOwnProperty(format) ? rgbn(named[format])
        : null;
  };

  function rgbn(n) {
    return rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff);
  }

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  var darker = .7;
  var brighter = 1 / darker;

  function rgb(r, g, b) {
    if (arguments.length === 1) {
      if (!(r instanceof Color)) r = color(r);
      if (r) {
        r = r.rgb();
        b = r.b;
        g = r.g;
        r = r.r;
      } else {
        r = g = b = NaN;
      }
    }
    return new Rgb(r, g, b);
  };

  function Rgb(r, g, b) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
  };

  var prototype = rgb.prototype = Rgb.prototype = new Color;

  prototype.brighter = function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k);
  };

  prototype.darker = function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k);
  };

  prototype.rgb = function() {
    return this;
  };

  prototype.displayable = function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255);
  };

  prototype.toString = function() {
    return format(this.r, this.g, this.b);
  };

  function format(r, g, b) {
    return "#"
        + (isNaN(r) ? "00" : (r = Math.round(r)) < 16 ? "0" + Math.max(0, r).toString(16) : Math.min(255, r).toString(16))
        + (isNaN(g) ? "00" : (g = Math.round(g)) < 16 ? "0" + Math.max(0, g).toString(16) : Math.min(255, g).toString(16))
        + (isNaN(b) ? "00" : (b = Math.round(b)) < 16 ? "0" + Math.max(0, b).toString(16) : Math.min(255, b).toString(16));
  };

  function hsl(h, s, l) {
    if (arguments.length === 1) {
      if (h instanceof Hsl) {
        l = h.l;
        s = h.s;
        h = h.h;
      } else {
        if (!(h instanceof Color)) h = color(h);
        if (h) {
          if (h instanceof Hsl) return h;
          h = h.rgb();
          var r = h.r / 255,
              g = h.g / 255,
              b = h.b / 255,
              min = Math.min(r, g, b),
              max = Math.max(r, g, b),
              range = max - min;
          l = (max + min) / 2;
          if (range) {
            s = l < .5 ? range / (max + min) : range / (2 - max - min);
            if (r === max) h = (g - b) / range + (g < b) * 6;
            else if (g === max) h = (b - r) / range + 2;
            else h = (r - g) / range + 4;
            h *= 60;
          } else {
            h = NaN;
            s = l > 0 && l < 1 ? 0 : h;
          }
        } else {
          h = s = l = NaN;
        }
      }
    }
    return new Hsl(h, s, l);
  };

  function Hsl(h, s, l) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
  };

  var prototype$1 = hsl.prototype = Hsl.prototype = new Color;

  prototype$1.brighter = function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k);
  };

  prototype$1.darker = function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k);
  };

  prototype$1.rgb = function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < .5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2)
    );
  };

  prototype$1.displayable = function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1);
  };

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  var Kn = 18;

  var Xn = 0.950470;
  var Yn = 1;
  var Zn = 1.088830;
  var t0 = 4 / 29;
  var t1 = 6 / 29;
  var t2 = 3 * t1 * t1;
  var t3 = t1 * t1 * t1;
  function lab(l, a, b) {
    if (arguments.length === 1) {
      if (l instanceof Lab) {
        b = l.b;
        a = l.a;
        l = l.l;
      } else if (l instanceof Hcl) {
        var h = l.h * deg2rad;
        b = Math.sin(h) * l.c;
        a = Math.cos(h) * l.c;
        l = l.l;
      } else {
        if (!(l instanceof Rgb)) l = rgb(l);
        var r = rgb2xyz(l.r),
            g = rgb2xyz(l.g),
            b = rgb2xyz(l.b),
            x = xyz2lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / Xn),
            y = xyz2lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / Yn),
            z = xyz2lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / Zn);
        b = 200 * (y - z);
        a = 500 * (x - y);
        l = 116 * y - 16;
      }
    }
    return new Lab(l, a, b);
  };

  function Lab(l, a, b) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
  };

  var prototype$2 = lab.prototype = Lab.prototype = new Color;

  prototype$2.brighter = function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b);
  };

  prototype$2.darker = function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b);
  };

  prototype$2.rgb = function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new Rgb(
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z)
    );
  };

  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }

  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }

  function xyz2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
  }

  function rgb2xyz(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  }

  var deg2rad = Math.PI / 180;
  var rad2deg = 180 / Math.PI;

  function hcl(h, c, l) {
    if (arguments.length === 1) {
      if (h instanceof Hcl) {
        l = h.l;
        c = h.c;
        h = h.h;
      } else {
        if (!(h instanceof Lab)) h = lab(h);
        l = h.l;
        c = Math.sqrt(h.a * h.a + h.b * h.b);
        h = Math.atan2(h.b, h.a) * rad2deg;
        if (h < 0) h += 360;
      }
    }
    return new Hcl(h, c, l);
  };

  function Hcl(h, c, l) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
  };

  var prototype$3 = hcl.prototype = Hcl.prototype = new Color;

  prototype$3.brighter = function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k));
  };

  prototype$3.darker = function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k));
  };

  prototype$3.rgb = function() {
    return lab(this).rgb();
  };

  var A = -0.14861;
  var B = +1.78277;
  var C = -0.29227;
  var D = -0.90649;
  var E = +1.97294;
  var ED = E * D;
  var EB = E * B;
  var BC_DA = B * C - D * A;
  function cubehelix(h, s, l) {
    if (arguments.length === 1) {
      if (h instanceof Cubehelix) {
        l = h.l;
        s = h.s;
        h = h.h;
      } else {
        if (!(h instanceof Rgb)) h = rgb(h);
        var r = h.r / 255, g = h.g / 255, b = h.b / 255;
        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB);
        var bl = b - l, k = (E * (g - l) - C * bl) / D;
        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)); // NaN if l=0 or l=1
        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
        if (h < 0) h += 360;
      }
    }
    return new Cubehelix(h, s, l);
  };

  function Cubehelix(h, s, l) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
  };

  var prototype$4 = cubehelix.prototype = Cubehelix.prototype = new Color;

  prototype$4.brighter = function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k);
  };

  prototype$4.darker = function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k);
  };

  prototype$4.rgb = function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh))
    );
  };

  function deltaHue(h1, h0) {
    var delta = h1 - h0;
    return delta > 180 || delta < -180
        ? delta - 360 * Math.round(delta / 360)
        : delta;
  };

  function interpolateCubehelixGamma(gamma) {
    return function(a, b) {
      a = cubehelix(a);
      b = cubehelix(b);
      var ah = isNaN(a.h) ? b.h : a.h,
          as = isNaN(a.s) ? b.s : a.s,
          al = a.l,
          bh = isNaN(b.h) ? 0 : deltaHue(b.h, ah),
          bs = isNaN(b.s) ? 0 : b.s - as,
          bl = b.l - al;
      return function(t) {
        a.h = ah + bh * t;
        a.s = as + bs * t;
        a.l = al + bl * Math.pow(t, gamma);
        return a + "";
      };
    };
  };

  function interpolateCubehelixGammaLong(gamma) {
    return function(a, b) {
      a = cubehelix(a);
      b = cubehelix(b);
      var ah = isNaN(a.h) ? b.h : a.h,
          as = isNaN(a.s) ? b.s : a.s,
          al = a.l,
          bh = isNaN(b.h) ? 0 : b.h - ah,
          bs = isNaN(b.s) ? 0 : b.s - as,
          bl = b.l - al;
      return function(t) {
        a.h = ah + bh * t;
        a.s = as + bs * t;
        a.l = al + bl * Math.pow(t, gamma);
        return a + "";
      };
    };
  };

  function interpolateRgb(a, b) {
    a = rgb(a);
    b = rgb(b);
    var ar = a.r,
        ag = a.g,
        ab = a.b,
        br = b.r - ar,
        bg = b.g - ag,
        bb = b.b - ab;
    return function(t) {
      return format(Math.round(ar + br * t), Math.round(ag + bg * t), Math.round(ab + bb * t));
    };
  };

  function interpolateHsl(a, b) {
    a = hsl(a);
    b = hsl(b);
    var ah = isNaN(a.h) ? b.h : a.h,
        as = isNaN(a.s) ? b.s : a.s,
        al = a.l,
        bh = isNaN(b.h) ? 0 : deltaHue(b.h, ah),
        bs = isNaN(b.s) ? 0 : b.s - as,
        bl = b.l - al;
    return function(t) {
      a.h = ah + bh * t;
      a.s = as + bs * t;
      a.l = al + bl * t;
      return a + "";
    };
  };

  function interpolateHslLong(a, b) {
    a = hsl(a);
    b = hsl(b);
    var ah = isNaN(a.h) ? b.h : a.h,
        as = isNaN(a.s) ? b.s : a.s,
        al = a.l,
        bh = isNaN(b.h) ? 0 : b.h - ah,
        bs = isNaN(b.s) ? 0 : b.s - as,
        bl = b.l - al;
    return function(t) {
      a.h = ah + bh * t;
      a.s = as + bs * t;
      a.l = al + bl * t;
      return a + "";
    };
  };

  function interpolateLab(a, b) {
    a = lab(a);
    b = lab(b);
    var al = a.l,
        aa = a.a,
        ab = a.b,
        bl = b.l - al,
        ba = b.a - aa,
        bb = b.b - ab;
    return function(t) {
      a.l = al + bl * t;
      a.a = aa + ba * t;
      a.b = ab + bb * t;
      return a + "";
    };
  };

  function interpolateHcl(a, b) {
    a = hcl(a);
    b = hcl(b);
    var ah = isNaN(a.h) ? b.h : a.h,
        ac = isNaN(a.c) ? b.c : a.c,
        al = a.l,
        bh = isNaN(b.h) ? 0 : deltaHue(b.h, ah),
        bc = isNaN(b.c) ? 0 : b.c - ac,
        bl = b.l - al;
    return function(t) {
      a.h = ah + bh * t;
      a.c = ac + bc * t;
      a.l = al + bl * t;
      return a + "";
    };
  };

  function interpolateHclLong(a, b) {
    a = hcl(a);
    b = hcl(b);
    var ah = isNaN(a.h) ? b.h : a.h,
        ac = isNaN(a.c) ? b.c : a.c,
        al = a.l,
        bh = isNaN(b.h) ? 0 : b.h - ah,
        bc = isNaN(b.c) ? 0 : b.c - ac,
        bl = b.l - al;
    return function(t) {
      a.h = ah + bh * t;
      a.c = ac + bc * t;
      a.l = al + bl * t;
      return a + "";
    };
  };

  var interpolateCubehelix = interpolateCubehelixGamma(1);
  var interpolateCubehelixLong = interpolateCubehelixGammaLong(1);

  var version = "0.2.8";

  exports.version = version;
  exports.interpolateCubehelix = interpolateCubehelix;
  exports.interpolateCubehelixLong = interpolateCubehelixLong;
  exports.interpolateCubehelixGamma = interpolateCubehelixGamma;
  exports.interpolateCubehelixGammaLong = interpolateCubehelixGammaLong;
  exports.color = color;
  exports.rgb = rgb;
  exports.hsl = hsl;
  exports.lab = lab;
  exports.hcl = hcl;
  exports.cubehelix = cubehelix;
  exports.interpolateRgb = interpolateRgb;
  exports.interpolateHsl = interpolateHsl;
  exports.interpolateHslLong = interpolateHslLong;
  exports.interpolateLab = interpolateLab;
  exports.interpolateHcl = interpolateHcl;
  exports.interpolateHclLong = interpolateHclLong;

}));
},{}],5:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('d3-format', ['exports'], factory) :
  factory((global.d3_format = {}));
}(this, function (exports) { 'use strict';

  var zhCn = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["¥", ""]
  };

  var svSe = {
    decimal: ",",
    thousands: "\xa0",
    grouping: [3],
    currency: ["", "SEK"]
  };

  var ruRu = {
    decimal: ",",
    thousands: "\xa0",
    grouping: [3],
    currency: ["", "\xa0руб."]
  };

  var ptBr = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["R$", ""]
  };

  var plPl = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["", "zł"]
  };

  var nlNl = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["€\xa0", ""]
  };

  var mkMk = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["", "\xa0ден."]
  };

  var koKr = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["₩", ""]
  };

  var jaJp = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["", "円"]
  };

  var itIt = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["€", ""]
  };

  var huHu = {
    decimal: ",",
    thousands: "\xa0",
    grouping: [3],
    currency: ["", "\xa0Ft"]
  };

  var heIl = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["₪", ""]
  };

  var frFr = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["", "\xa0€"]
  };

  var frCa = {
    decimal: ",",
    thousands: "\xa0",
    grouping: [3],
    currency: ["", "$"]
  };

  var fiFi = {
    decimal: ",",
    thousands: "\xa0",
    grouping: [3],
    currency: ["", "\xa0€"]
  };

  var esEs = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["", "\xa0€"]
  };

  var enUs = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  };

  var enGb = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["£", ""]
  };

  var enCa = {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  };

  var deDe = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["", "\xa0€"]
  };

  var deCh = {
    decimal: ",",
    thousands: "'",
    grouping: [3],
    currency: ["", "\xa0CHF"]
  };

  var caEs = {
    decimal: ",",
    thousands: ".",
    grouping: [3],
    currency: ["", "\xa0€"]
  };

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimal(1.23) returns ["123", 0].
  function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  };

  function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
  };

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  };

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  };

  function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  };

  function formatDefault(x, p) {
    x = x.toPrecision(p);

    out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (x[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        case "e": break out;
        default: if (i0 > 0) i0 = 0; break;
      }
    }

    return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
  };

  var formatTypes = {
    "": formatDefault,
    "%": function(x, p) { return (x * 100).toFixed(p); },
    "b": function(x) { return Math.round(x).toString(2); },
    "c": function(x) { return x + ""; },
    "d": function(x) { return Math.round(x).toString(10); },
    "e": function(x, p) { return x.toExponential(p); },
    "f": function(x, p) { return x.toFixed(p); },
    "g": function(x, p) { return x.toPrecision(p); },
    "o": function(x) { return Math.round(x).toString(8); },
    "p": function(x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function(x) { return Math.round(x).toString(16); }
  };

  // [[fill]align][sign][symbol][0][width][,][.precision][type]
  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    return new FormatSpecifier(specifier);
  };

  function FormatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

    var match,
        fill = match[1] || " ",
        align = match[2] || ">",
        sign = match[3] || "-",
        symbol = match[4] || "",
        zero = !!match[5],
        width = match[6] && +match[6],
        comma = !!match[7],
        precision = match[8] && +match[8].slice(1),
        type = match[9] || "";

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // Map invalid types to the default format.
    else if (!formatTypes[type]) type = "";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    this.fill = fill;
    this.align = align;
    this.sign = sign;
    this.symbol = symbol;
    this.zero = zero;
    this.width = width;
    this.comma = comma;
    this.precision = precision;
    this.type = type;
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width == null ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
        + this.type;
  };

  var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function identity(x) {
    return x;
  }

  function locale(locale) {
    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
        currency = locale.currency,
        decimal = locale.decimal;

    function format(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          type = specifier.type;

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = !type || /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision == null ? (type ? 6 : 12)
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      return function(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Convert negative to positive, and compute the prefix.
          // Note that -0 is not less than 0, but 1 / -0 is!
          var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);

          // Perform the initial formatting.
          value = formatType(value, precision);

          // If the original value was negative, it may be rounded to zero during
          // formatting; treat this as (positive) zero.
          if (valueNegative) {
            var i = -1, n = value.length, c;
            valueNegative = false;
            while (++i < n) {
              if (c = value.charCodeAt(i), (48 < c && c < 58)
                  || (type === "x" && 96 < c && c < 103)
                  || (type === "X" && 64 < c && c < 71)) {
                valueNegative = true;
                break;
              }
            }
          }

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            var i = -1, n = value.length, c;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": return valuePrefix + value + valueSuffix + padding;
          case "=": return valuePrefix + padding + value + valueSuffix;
          case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
        }
        return padding + valuePrefix + value + valueSuffix;
      };
    }

    function formatPrefix(specifier, value) {
      var f = format((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: format,
      formatPrefix: formatPrefix
    };
  };

  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  };

  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  };

  function precisionRound(step, max) {
    return Math.max(0, exponent(Math.abs(max)) - exponent(Math.abs(step))) + 1;
  };

  var localeDefinitions = {
    "ca-ES": caEs,
    "de-CH": deCh,
    "de-DE": deDe,
    "en-CA": enCa,
    "en-GB": enGb,
    "en-US": enUs,
    "es-ES": esEs,
    "fi-FI": fiFi,
    "fr-CA": frCa,
    "fr-FR": frFr,
    "he-IL": heIl,
    "hu-HU": huHu,
    "it-IT": itIt,
    "ja-JP": jaJp,
    "ko-KR": koKr,
    "mk-MK": mkMk,
    "nl-NL": nlNl,
    "pl-PL": plPl,
    "pt-BR": ptBr,
    "ru-RU": ruRu,
    "sv-SE": svSe,
    "zh-CN": zhCn
  };

  var defaultLocale = locale(enUs);
  var format = defaultLocale.format;
  var formatPrefix = defaultLocale.formatPrefix;

  function localeFormat(definition) {
    if (typeof definition === "string") {
      if (!localeDefinitions.hasOwnProperty(definition)) return null;
      definition = localeDefinitions[definition];
    }
    return locale(definition);
  };

  var version = "0.3.6";

  exports.version = version;
  exports.format = format;
  exports.formatPrefix = formatPrefix;
  exports.localeFormat = localeFormat;
  exports.formatSpecifier = formatSpecifier;
  exports.precisionFixed = precisionFixed;
  exports.precisionPrefix = precisionPrefix;
  exports.precisionRound = precisionRound;

}));
},{}],6:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-time')) :
  typeof define === 'function' && define.amd ? define('d3-time-format', ['exports', 'd3-time'], factory) :
  factory((global.d3_time_format = {}),global.d3_time);
}(this, function (exports,d3Time) { 'use strict';

  var zhCn = {
    dateTime: "%a %b %e %X %Y",
    date: "%Y/%-m/%-d",
    time: "%H:%M:%S",
    periods: ["上午", "下午"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
  };

  var svSe = {
    dateTime: "%A den %d %B %Y %X",
    date: "%Y-%m-%d",
    time: "%H:%M:%S",
    periods: ["fm", "em"],
    days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
    shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
  };

  var ruRu = {
    dateTime: "%A, %e %B %Y г. %X",
    date: "%d.%m.%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
  };

  var ptBr = {
    dateTime: "%A, %e de %B de %Y. %X",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  };

  var plPl = {
    dateTime: "%A, %e %B %Y, %X",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"], // unused
    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]/* In Polish language abbraviated months are not commonly used so there is a dispute about the proper abbraviations. */
  };

  var nlNl = {
    dateTime: "%a %e %B %Y %T",
    date: "%d-%m-%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"], // unused
    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
  };

  var mkMk = {
    dateTime: "%A, %e %B %Y г. %X",
    date: "%d.%m.%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
    shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
    months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
    shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
  };

  var koKr = {
    dateTime: "%Y/%m/%d %a %X",
    date: "%Y/%m/%d",
    time: "%H:%M:%S",
    periods: ["오전", "오후"],
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    shortDays: ["일", "월", "화", "수", "목", "금", "토"],
    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
  };

  var jaJp = {
    dateTime: "%Y %b %e %a %X",
    date: "%Y/%m/%d",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
    shortDays: ["日", "月", "火", "水", "木", "金", "土"],
    months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
    shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  };

  var itIt = {
    dateTime: "%A %e %B %Y, %X",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"], // unused
    days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
  };

  var huHu = {
    dateTime: "%Y. %B %-e., %A %X",
    date: "%Y. %m. %d.",
    time: "%H:%M:%S",
    periods: ["de.", "du."], // unused
    days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
    shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
    months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
    shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
  };

  var heIl = {
    dateTime: "%A, %e ב%B %Y %X",
    date: "%d.%m.%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
    shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
    shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
  };

  var frFr = {
    dateTime: "%A, le %e %B %Y, %X",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"], // unused
    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
  };

  var frCa = {
    dateTime: "%a %e %b %Y %X",
    date: "%Y-%m-%d",
    time: "%H:%M:%S",
    periods: ["", ""],
    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
  };

  var fiFi = {
    dateTime: "%A, %-d. %Bta %Y klo %X",
    date: "%-d.%-m.%Y",
    time: "%H:%M:%S",
    periods: ["a.m.", "p.m."],
    days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
    shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
    months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
    shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
  };

  var esEs = {
    dateTime: "%A, %e de %B de %Y, %X",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
  };

  var locale$1 = {
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };

  var enGb = {
    dateTime: "%a %e %b %X %Y",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };

  var enCa = {
    dateTime: "%a %b %e %X %Y",
    date: "%Y-%m-%d",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };

  var deDe = {
    dateTime: "%A, der %e. %B %Y, %X",
    date: "%d.%m.%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"], // unused
    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };

  var deCh = {
    dateTime: "%A, der %e. %B %Y, %X",
    date: "%d.%m.%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"], // unused
    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };

  var caEs = {
    dateTime: "%A, %e de %B de %Y, %X",
    date: "%d/%m/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
    shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
    months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
    shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
  };

  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date.setFullYear(d.y);
      return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }

  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date.setUTCFullYear(d.y);
      return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }

  function newYear(y) {
    return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
  }

  function locale(locale) {
    var locale_dateTime = locale.dateTime,
        locale_date = locale.date,
        locale_time = locale.time,
        locale_periods = locale.periods,
        locale_weekdays = locale.days,
        locale_shortWeekdays = locale.shortDays,
        locale_months = locale.months,
        locale_shortMonths = locale.shortMonths;

    var periodLookup = formatLookup(locale_periods),
        weekdayRe = formatRe(locale_weekdays),
        weekdayLookup = formatLookup(locale_weekdays),
        shortWeekdayRe = formatRe(locale_shortWeekdays),
        shortWeekdayLookup = formatLookup(locale_shortWeekdays),
        monthRe = formatRe(locale_months),
        monthLookup = formatLookup(locale_months),
        shortMonthRe = formatRe(locale_shortMonths),
        shortMonthLookup = formatLookup(locale_shortMonths);

    var formats = {
      "a": formatShortWeekday,
      "A": formatWeekday,
      "b": formatShortMonth,
      "B": formatMonth,
      "c": null,
      "d": formatDayOfMonth,
      "e": formatDayOfMonth,
      "H": formatHour24,
      "I": formatHour12,
      "j": formatDayOfYear,
      "L": formatMilliseconds,
      "m": formatMonthNumber,
      "M": formatMinutes,
      "p": formatPeriod,
      "S": formatSeconds,
      "U": formatWeekNumberSunday,
      "w": formatWeekdayNumber,
      "W": formatWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatYear,
      "Y": formatFullYear,
      "Z": formatZone,
      "%": formatLiteralPercent
    };

    var utcFormats = {
      "a": formatUTCShortWeekday,
      "A": formatUTCWeekday,
      "b": formatUTCShortMonth,
      "B": formatUTCMonth,
      "c": null,
      "d": formatUTCDayOfMonth,
      "e": formatUTCDayOfMonth,
      "H": formatUTCHour24,
      "I": formatUTCHour12,
      "j": formatUTCDayOfYear,
      "L": formatUTCMilliseconds,
      "m": formatUTCMonthNumber,
      "M": formatUTCMinutes,
      "p": formatUTCPeriod,
      "S": formatUTCSeconds,
      "U": formatUTCWeekNumberSunday,
      "w": formatUTCWeekdayNumber,
      "W": formatUTCWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatUTCYear,
      "Y": formatUTCFullYear,
      "Z": formatUTCZone,
      "%": formatLiteralPercent
    };

    var parses = {
      "a": parseShortWeekday,
      "A": parseWeekday,
      "b": parseShortMonth,
      "B": parseMonth,
      "c": parseLocaleDateTime,
      "d": parseDayOfMonth,
      "e": parseDayOfMonth,
      "H": parseHour24,
      "I": parseHour24,
      "j": parseDayOfYear,
      "L": parseMilliseconds,
      "m": parseMonthNumber,
      "M": parseMinutes,
      "p": parsePeriod,
      "S": parseSeconds,
      "U": parseWeekNumberSunday,
      "w": parseWeekdayNumber,
      "W": parseWeekNumberMonday,
      "x": parseLocaleDate,
      "X": parseLocaleTime,
      "y": parseYear,
      "Y": parseFullYear,
      "Z": parseZone,
      "%": parseLiteralPercent
    };

    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);

    function newFormat(specifier, formats) {
      return function(date) {
        var string = [],
            i = -1,
            j = 0,
            n = specifier.length,
            c,
            pad,
            format;

        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string.push(specifier.slice(j, i));
            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
            if (format = formats[c]) c = format(date, pad == null ? (c === "e" ? " " : "0") : pad);
            string.push(c);
            j = i + 1;
          }
        }

        string.push(specifier.slice(j, i));
        return string.join("");
      };
    }

    function newParse(specifier, newDate) {
      return function(string) {
        var d = newYear(1900),
            i = parseSpecifier(d, specifier, string, 0);
        if (i != string.length) return null;

        // The am-pm flag is 0 for AM, and 1 for PM.
        if ("p" in d) d.H = d.H % 12 + d.p * 12;

        // If a time zone is specified, all fields are interpreted as UTC and then
        // offset according to the specified time zone.
        if ("Z" in d) {
          if ("w" in d && ("W" in d || "U" in d)) {
            var day = utcDate(newYear(d.y)).getUTCDay();
            if ("W" in d) d.U = d.W, d.w = (d.w + 6) % 7, --day;
            d.m = 0;
            d.d = d.w + d.U * 7 - (day + 6) % 7;
          }
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }

        // Otherwise, all fields are in local time.
        if ("w" in d && ("W" in d || "U" in d)) {
          var day = newDate(newYear(d.y)).getDay();
          if ("W" in d) d.U = d.W, d.w = (d.w + 6) % 7, --day;
          d.m = 0;
          d.d = d.w + d.U * 7 - (day + 6) % 7;
        }
        return newDate(d);
      };
    }

    function parseSpecifier(d, specifier, string, j) {
      var i = 0,
          n = specifier.length,
          m = string.length,
          c,
          parse;

      while (i < n) {
        if (j >= m) return -1;
        c = specifier.charCodeAt(i++);
        if (c === 37) {
          c = specifier.charAt(i++);
          parse = parses[c in pads ? specifier.charAt(i++) : c];
          if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }

      return j;
    }

    function parseShortWeekday(d, string, i) {
      var n = shortWeekdayRe.exec(string.slice(i));
      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }

    function parseWeekday(d, string, i) {
      var n = weekdayRe.exec(string.slice(i));
      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }

    function parseShortMonth(d, string, i) {
      var n = shortMonthRe.exec(string.slice(i));
      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }

    function parseMonth(d, string, i) {
      var n = monthRe.exec(string.slice(i));
      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }

    function parseLocaleDateTime(d, string, i) {
      return parseSpecifier(d, locale_dateTime, string, i);
    }

    function parseLocaleDate(d, string, i) {
      return parseSpecifier(d, locale_date, string, i);
    }

    function parseLocaleTime(d, string, i) {
      return parseSpecifier(d, locale_time, string, i);
    }

    function parsePeriod(d, string, i) {
      var n = periodLookup[string.slice(i, i += 2).toLowerCase()];
      return n == null ? -1 : (d.p = n, i);
    }

    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }

    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }

    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }

    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }

    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }

    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }

    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }

    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }

    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }

    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }

    return {
      format: function(specifier) {
        var f = newFormat(specifier += "", formats);
        f.parse = newParse(specifier, localDate);
        f.toString = function() { return specifier; };
        return f;
      },
      utcFormat: function(specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.parse = newParse(specifier, utcDate);
        f.toString = function() { return specifier; };
        return f;
      }
    };
  };

  var pads = {"-": "", "_": " ", "0": "0"};
  var numberRe = /^\s*\d+/;
  var percentRe = /^%/;
  var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "",
        string = (sign ? -value : value) + "",
        length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }

  function requote(s) {
    return s.replace(requoteRe, "\\$&");
  }

  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }

  function formatLookup(names) {
    var map = {}, i = -1, n = names.length;
    while (++i < n) map[names[i].toLowerCase()] = i;
    return map;
  }

  function parseWeekdayNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }

  function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }

  function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }

  function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }

  function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
  }

  function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
    if (n) {
      d.Z = n[1] ? 0              // 'Z' for UTC
          : n[3] ? -(n[2] + n[3]) // sign differs from getTimezoneOffset!
                 : -n[2] * 100;
      return i + n[0].length;
    }
    return -1;
  }

  function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }

  function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }

  function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }

  function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }

  function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }

  function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }

  function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }

  function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }

  function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
  }

  function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
  }

  function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
  }

  function formatDayOfYear(d, p) {
    return pad(1 + d3Time.day.count(d3Time.year(d), d), p, 3);
  }

  function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
  }

  function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
  }

  function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
  }

  function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
  }

  function formatWeekNumberSunday(d, p) {
    return pad(d3Time.sunday.count(d3Time.year(d), d), p, 2);
  }

  function formatWeekdayNumber(d) {
    return d.getDay();
  }

  function formatWeekNumberMonday(d, p) {
    return pad(d3Time.monday.count(d3Time.year(d), d), p, 2);
  }

  function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
  }

  function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
  }

  function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+"))
        + pad(z / 60 | 0, "0", 2)
        + pad(z % 60, "0", 2);
  }

  function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
  }

  function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
  }

  function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
  }

  function formatUTCDayOfYear(d, p) {
    return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
  }

  function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
  }

  function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
  }

  function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
  }

  function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
  }

  function formatUTCWeekNumberSunday(d, p) {
    return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2);
  }

  function formatUTCWeekdayNumber(d) {
    return d.getUTCDay();
  }

  function formatUTCWeekNumberMonday(d, p) {
    return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2);
  }

  function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
  }

  function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
  }

  function formatUTCZone() {
    return "+0000";
  }

  function formatLiteralPercent() {
    return "%";
  }

  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

  function formatIsoNative(date) {
    return date.toISOString();
  }

  formatIsoNative.parse = function(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };

  formatIsoNative.toString = function() {
    return isoSpecifier;
  };

  var formatIso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z")
      ? formatIsoNative
      : locale$1.utcFormat(isoSpecifier);

  var localeDefinitions = {
    "ca-ES": caEs,
    "de-CH": deCh,
    "de-DE": deDe,
    "en-CA": enCa,
    "en-GB": enGb,
    "en-US": locale$1,
    "es-ES": esEs,
    "fi-FI": fiFi,
    "fr-CA": frCa,
    "fr-FR": frFr,
    "he-IL": heIl,
    "hu-HU": huHu,
    "it-IT": itIt,
    "ja-JP": jaJp,
    "ko-KR": koKr,
    "mk-MK": mkMk,
    "nl-NL": nlNl,
    "pl-PL": plPl,
    "pt-BR": ptBr,
    "ru-RU": ruRu,
    "sv-SE": svSe,
    "zh-CN": zhCn
  };

  var defaultLocale = locale(locale$1);
  var format = defaultLocale.format;
  var utcFormat = defaultLocale.utcFormat;

  function localeFormat(definition) {
    if (typeof definition === "string") {
      if (!localeDefinitions.hasOwnProperty(definition)) return null;
      definition = localeDefinitions[definition];
    }
    return locale(definition);
  };

  var version = "0.1.5";

  exports.version = version;
  exports.format = format;
  exports.utcFormat = utcFormat;
  exports.localeFormat = localeFormat;
  exports.isoFormat = formatIso;

}));
},{"d3-time":7}],7:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('d3-time', ['exports'], factory) :
  factory((global.d3_time = {}));
}(this, function (exports) { 'use strict';

  var t0 = new Date;
  var t1 = new Date;
  function newInterval(floori, offseti, count) {

    function interval(date) {
      return floori(date = new Date(+date)), date;
    }

    interval.floor = interval;

    interval.round = function(date) {
      var d0 = new Date(+date),
          d1 = new Date(date - 1);
      floori(d0), floori(d1), offseti(d1, 1);
      return date - d0 < d1 - date ? d0 : d1;
    };

    interval.ceil = function(date) {
      return floori(date = new Date(date - 1)), offseti(date, 1), date;
    };

    interval.offset = function(date, step) {
      return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };

    interval.range = function(start, stop, step) {
      var range = [];
      start = new Date(start - 1);
      stop = new Date(+stop);
      step = step == null ? 1 : Math.floor(step);
      if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
      offseti(start, 1), floori(start);
      if (start < stop) range.push(new Date(+start));
      while (offseti(start, step), floori(start), start < stop) range.push(new Date(+start));
      return range;
    };

    interval.filter = function(test) {
      return newInterval(function(date) {
        while (floori(date), !test(date)) date.setTime(date - 1);
      }, function(date, step) {
        while (--step >= 0) while (offseti(date, 1), !test(date));
      });
    };

    if (count) interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    return interval;
  };

  var millisecond = newInterval(function() {
    // noop
  }, function(date, step) {
    date.setTime(+date + step);
  }, function(start, end) {
    return end - start;
  });

  var second = newInterval(function(date) {
    date.setMilliseconds(0);
  }, function(date, step) {
    date.setTime(+date + step * 1e3);
  }, function(start, end) {
    return (end - start) / 1e3;
  });

  var minute = newInterval(function(date) {
    date.setSeconds(0, 0);
  }, function(date, step) {
    date.setTime(+date + step * 6e4);
  }, function(start, end) {
    return (end - start) / 6e4;
  });

  var hour = newInterval(function(date) {
    date.setMinutes(0, 0, 0);
  }, function(date, step) {
    date.setTime(+date + step * 36e5);
  }, function(start, end) {
    return (end - start) / 36e5;
  });

  var day = newInterval(function(date) {
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 864e5;
  });

  function weekday(i) {
    return newInterval(function(date) {
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    }, function(date, step) {
      date.setDate(date.getDate() + step * 7);
    }, function(start, end) {
      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * 6e4) / 6048e5;
    });
  }

  var sunday = weekday(0);
  var monday = weekday(1);
  var tuesday = weekday(2);
  var wednesday = weekday(3);
  var thursday = weekday(4);
  var friday = weekday(5);
  var saturday = weekday(6);

  var month = newInterval(function(date) {
    date.setHours(0, 0, 0, 0);
    date.setDate(1);
  }, function(date, step) {
    date.setMonth(date.getMonth() + step);
  }, function(start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
  });

  var year = newInterval(function(date) {
    date.setHours(0, 0, 0, 0);
    date.setMonth(0, 1);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step);
  }, function(start, end) {
    return end.getFullYear() - start.getFullYear();
  });

  var utcSecond = newInterval(function(date) {
    date.setUTCMilliseconds(0);
  }, function(date, step) {
    date.setTime(+date + step * 1e3);
  }, function(start, end) {
    return (end - start) / 1e3;
  });

  var utcMinute = newInterval(function(date) {
    date.setUTCSeconds(0, 0);
  }, function(date, step) {
    date.setTime(+date + step * 6e4);
  }, function(start, end) {
    return (end - start) / 6e4;
  });

  var utcHour = newInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setTime(+date + step * 36e5);
  }, function(start, end) {
    return (end - start) / 36e5;
  });

  var utcDay = newInterval(function(date) {
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
  }, function(start, end) {
    return (end - start) / 864e5;
  });

  function utcWeekday(i) {
    return newInterval(function(date) {
      date.setUTCHours(0, 0, 0, 0);
      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    }, function(date, step) {
      date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start, end) {
      return (end - start) / 6048e5;
    });
  }

  var utcSunday = utcWeekday(0);
  var utcMonday = utcWeekday(1);
  var utcTuesday = utcWeekday(2);
  var utcWednesday = utcWeekday(3);
  var utcThursday = utcWeekday(4);
  var utcFriday = utcWeekday(5);
  var utcSaturday = utcWeekday(6);

  var utcMonth = newInterval(function(date) {
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(1);
  }, function(date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
  }, function(start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
  });

  var utcYear = newInterval(function(date) {
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCMonth(0, 1);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
  }, function(start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
  });

  var milliseconds = millisecond.range;
  var seconds = second.range;
  var minutes = minute.range;
  var hours = hour.range;
  var days = day.range;
  var sundays = sunday.range;
  var mondays = monday.range;
  var tuesdays = tuesday.range;
  var wednesdays = wednesday.range;
  var thursdays = thursday.range;
  var fridays = friday.range;
  var saturdays = saturday.range;
  var weeks = sunday.range;
  var months = month.range;
  var years = year.range;

  var utcMillisecond = millisecond;
  var utcMilliseconds = milliseconds;
  var utcSeconds = utcSecond.range;
  var utcMinutes = utcMinute.range;
  var utcHours = utcHour.range;
  var utcDays = utcDay.range;
  var utcSundays = utcSunday.range;
  var utcMondays = utcMonday.range;
  var utcTuesdays = utcTuesday.range;
  var utcWednesdays = utcWednesday.range;
  var utcThursdays = utcThursday.range;
  var utcFridays = utcFriday.range;
  var utcSaturdays = utcSaturday.range;
  var utcWeeks = utcSunday.range;
  var utcMonths = utcMonth.range;
  var utcYears = utcYear.range;

  var version = "0.0.7";

  exports.version = version;
  exports.milliseconds = milliseconds;
  exports.seconds = seconds;
  exports.minutes = minutes;
  exports.hours = hours;
  exports.days = days;
  exports.sundays = sundays;
  exports.mondays = mondays;
  exports.tuesdays = tuesdays;
  exports.wednesdays = wednesdays;
  exports.thursdays = thursdays;
  exports.fridays = fridays;
  exports.saturdays = saturdays;
  exports.weeks = weeks;
  exports.months = months;
  exports.years = years;
  exports.utcMillisecond = utcMillisecond;
  exports.utcMilliseconds = utcMilliseconds;
  exports.utcSeconds = utcSeconds;
  exports.utcMinutes = utcMinutes;
  exports.utcHours = utcHours;
  exports.utcDays = utcDays;
  exports.utcSundays = utcSundays;
  exports.utcMondays = utcMondays;
  exports.utcTuesdays = utcTuesdays;
  exports.utcWednesdays = utcWednesdays;
  exports.utcThursdays = utcThursdays;
  exports.utcFridays = utcFridays;
  exports.utcSaturdays = utcSaturdays;
  exports.utcWeeks = utcWeeks;
  exports.utcMonths = utcMonths;
  exports.utcYears = utcYears;
  exports.millisecond = millisecond;
  exports.second = second;
  exports.minute = minute;
  exports.hour = hour;
  exports.day = day;
  exports.sunday = sunday;
  exports.monday = monday;
  exports.tuesday = tuesday;
  exports.wednesday = wednesday;
  exports.thursday = thursday;
  exports.friday = friday;
  exports.saturday = saturday;
  exports.week = sunday;
  exports.month = month;
  exports.year = year;
  exports.utcSecond = utcSecond;
  exports.utcMinute = utcMinute;
  exports.utcHour = utcHour;
  exports.utcDay = utcDay;
  exports.utcSunday = utcSunday;
  exports.utcMonday = utcMonday;
  exports.utcTuesday = utcTuesday;
  exports.utcWednesday = utcWednesday;
  exports.utcThursday = utcThursday;
  exports.utcFriday = utcFriday;
  exports.utcSaturday = utcSaturday;
  exports.utcWeek = utcSunday;
  exports.utcMonth = utcMonth;
  exports.utcYear = utcYear;
  exports.interval = newInterval;

}));
},{}],8:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],9:[function(require,module,exports){
var util = require('../util'),
    time = require('../time'),
    EPSILON = 1e-15;

function bins(opt) {
  if (!opt) { throw Error("Missing binning options."); }

  // determine range
  var maxb = opt.maxbins || 15,
      base = opt.base || 10,
      logb = Math.log(base),
      div = opt.div || [5, 2],
      min = opt.min,
      max = opt.max,
      span = max - min,
      step, level, minstep, precision, v, i, eps;

  if (opt.step) {
    // if step size is explicitly given, use that
    step = opt.step;
  } else if (opt.steps) {
    // if provided, limit choice to acceptable step sizes
    step = opt.steps[Math.min(
      opt.steps.length - 1,
      bisect(opt.steps, span/maxb, 0, opt.steps.length)
    )];
  } else {
    // else use span to determine step size
    level = Math.ceil(Math.log(maxb) / logb);
    minstep = opt.minstep || 0;
    step = Math.max(
      minstep,
      Math.pow(base, Math.round(Math.log(span) / logb) - level)
    );

    // increase step size if too many bins
    do { step *= base; } while (Math.ceil(span/step) > maxb);

    // decrease step size if allowed
    for (i=0; i<div.length; ++i) {
      v = step / div[i];
      if (v >= minstep && span / v <= maxb) step = v;
    }
  }

  // update precision, min and max
  v = Math.log(step);
  precision = v >= 0 ? 0 : ~~(-v / logb) + 1;
  eps = Math.pow(base, -precision - 1);
  min = Math.min(min, Math.floor(min / step + eps) * step);
  max = Math.ceil(max / step) * step;

  return {
    start: min,
    stop:  max,
    step:  step,
    unit:  {precision: precision},
    value: value,
    index: index
  };
}

function bisect(a, x, lo, hi) {
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (util.cmp(a[mid], x) < 0) { lo = mid + 1; }
    else { hi = mid; }
  }
  return lo;
}

function value(v) {
  return this.step * Math.floor(v / this.step + EPSILON);
}

function index(v) {
  return Math.floor((v - this.start) / this.step + EPSILON);
}

function date_value(v) {
  return this.unit.date(value.call(this, v));
}

function date_index(v) {
  return index.call(this, this.unit.unit(v));
}

bins.date = function(opt) {
  if (!opt) { throw Error("Missing date binning options."); }

  // find time step, then bin
  var units = opt.utc ? time.utc : time,
      dmin = opt.min,
      dmax = opt.max,
      maxb = opt.maxbins || 20,
      minb = opt.minbins || 4,
      span = (+dmax) - (+dmin),
      unit = opt.unit ? units[opt.unit] : units.find(span, minb, maxb),
      spec = bins({
        min:     unit.min != null ? unit.min : unit.unit(dmin),
        max:     unit.max != null ? unit.max : unit.unit(dmax),
        maxbins: maxb,
        minstep: unit.minstep,
        steps:   unit.step
      });

  spec.unit = unit;
  spec.index = date_index;
  if (!opt.raw) spec.value = date_value;
  return spec;
};

module.exports = bins;

},{"../time":13,"../util":14}],10:[function(require,module,exports){
var gen = module.exports = {};

gen.repeat = function(val, n) {
  var a = Array(n), i;
  for (i=0; i<n; ++i) a[i] = val;
  return a;
};

gen.zeros = function(n) {
  return gen.repeat(0, n);
};

gen.range = function(start, stop, step) {
  if (arguments.length < 3) {
    step = 1;
    if (arguments.length < 2) {
      stop = start;
      start = 0;
    }
  }
  if ((stop - start) / step == Infinity) throw new Error('Infinite range');
  var range = [], i = -1, j;
  if (step < 0) while ((j = start + step * ++i) > stop) range.push(j);
  else while ((j = start + step * ++i) < stop) range.push(j);
  return range;
};

gen.random = {};

gen.random.uniform = function(min, max) {
  if (max === undefined) {
    max = min === undefined ? 1 : min;
    min = 0;
  }
  var d = max - min;
  var f = function() {
    return min + d * Math.random();
  };
  f.samples = function(n) { return gen.zeros(n).map(f); };
  return f;
};

gen.random.integer = function(a, b) {
  if (b === undefined) {
    b = a;
    a = 0;
  }
  var d = b - a;
  var f = function() {
    return a + Math.floor(d * Math.random());
  };
  f.samples = function(n) { return gen.zeros(n).map(f); };
  return f;
};

gen.random.normal = function(mean, stdev) {
  mean = mean || 0;
  stdev = stdev || 1;
  var next;
  var f = function() {
    var x = 0, y = 0, rds, c;
    if (next !== undefined) {
      x = next;
      next = undefined;
      return x;
    }
    do {
      x = Math.random()*2-1;
      y = Math.random()*2-1;
      rds = x*x + y*y;
    } while (rds === 0 || rds > 1);
    c = Math.sqrt(-2*Math.log(rds)/rds); // Box-Muller transform
    next = mean + y*c*stdev;
    return mean + x*c*stdev;
  };
  f.samples = function(n) { return gen.zeros(n).map(f); };
  return f;
};

},{}],11:[function(require,module,exports){
var util = require('../util');

var TYPES = '__types__';

var PARSERS = {
  boolean: util.boolean,
  integer: util.number,
  number:  util.number,
  date:    util.date,
  string:  function(x) { return x==='' ? null : x; }
};

var TESTS = {
  boolean: function(x) { return x==='true' || x==='false' || util.isBoolean(x); },
  integer: function(x) { return TESTS.number(x) && (x=+x) === ~~x; },
  number: function(x) { return !isNaN(+x) && !util.isDate(x); },
  date: function(x) { return !isNaN(Date.parse(x)); }
};

function annotation(data, types) {
  if (!types) return data && data[TYPES] || null;
  data[TYPES] = types;
}

function type(values, f) {
  values = util.array(values);
  f = util.$(f);
  var v, i, n;

  // if data array has type annotations, use them
  if (values[TYPES]) {
    v = f(values[TYPES]);
    if (util.isString(v)) return v;
  }

  for (i=0, n=values.length; !util.isValid(v) && i<n; ++i) {
    v = f ? f(values[i]) : values[i];
  }

  return util.isDate(v) ? 'date' :
    util.isNumber(v)    ? 'number' :
    util.isBoolean(v)   ? 'boolean' :
    util.isString(v)    ? 'string' : null;
}

function typeAll(data, fields) {
  if (!data.length) return;
  fields = fields || util.keys(data[0]);
  return fields.reduce(function(types, f) {
    return (types[f] = type(data, f), types);
  }, {});
}

function infer(values, f) {
  values = util.array(values);
  f = util.$(f);
  var i, j, v;

  // types to test for, in precedence order
  var types = ['boolean', 'integer', 'number', 'date'];

  for (i=0; i<values.length; ++i) {
    // get next value to test
    v = f ? f(values[i]) : values[i];
    // test value against remaining types
    for (j=0; j<types.length; ++j) {
      if (util.isValid(v) && !TESTS[types[j]](v)) {
        types.splice(j, 1);
        j -= 1;
      }
    }
    // if no types left, return 'string'
    if (types.length === 0) return 'string';
  }

  return types[0];
}

function inferAll(data, fields) {
  fields = fields || util.keys(data[0]);
  return fields.reduce(function(types, f) {
    types[f] = infer(data, f);
    return types;
  }, {});
}

type.annotation = annotation;
type.all = typeAll;
type.infer = infer;
type.inferAll = inferAll;
type.parsers = PARSERS;
module.exports = type;

},{"../util":14}],12:[function(require,module,exports){
var util = require('./util');
var type = require('./import/type');
var gen = require('./generate');
var stats = {};

// Collect unique values.
// Output: an array of unique values, in first-observed order
stats.unique = function(values, f, results) {
  f = util.$(f);
  results = results || [];
  var u = {}, v, i, n;
  for (i=0, n=values.length; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (v in u) continue;
    u[v] = 1;
    results.push(v);
  }
  return results;
};

// Return the length of the input array.
stats.count = function(values) {
  return values && values.length || 0;
};

// Count the number of non-null, non-undefined, non-NaN values.
stats.count.valid = function(values, f) {
  f = util.$(f);
  var v, i, n, valid = 0;
  for (i=0, n=values.length; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) valid += 1;
  }
  return valid;
};

// Count the number of null or undefined values.
stats.count.missing = function(values, f) {
  f = util.$(f);
  var v, i, n, count = 0;
  for (i=0, n=values.length; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (v == null) count += 1;
  }
  return count;
};

// Count the number of distinct values.
// Null, undefined and NaN are each considered distinct values.
stats.count.distinct = function(values, f) {
  f = util.$(f);
  var u = {}, v, i, n, count = 0;
  for (i=0, n=values.length; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (v in u) continue;
    u[v] = 1;
    count += 1;
  }
  return count;
};

// Construct a map from distinct values to occurrence counts.
stats.count.map = function(values, f) {
  f = util.$(f);
  var map = {}, v, i, n;
  for (i=0, n=values.length; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    map[v] = (v in map) ? map[v] + 1 : 1;
  }
  return map;
};

// Compute the median of an array of numbers.
stats.median = function(values, f) {
  if (f) values = values.map(util.$(f));
  values = values.filter(util.isValid).sort(util.cmp);
  return stats.quantile(values, 0.5);
};

// Computes the quartile boundaries of an array of numbers.
stats.quartile = function(values, f) {
  if (f) values = values.map(util.$(f));
  values = values.filter(util.isValid).sort(util.cmp);
  var q = stats.quantile;
  return [q(values, 0.25), q(values, 0.50), q(values, 0.75)];
};

// Compute the quantile of a sorted array of numbers.
// Adapted from the D3.js implementation.
stats.quantile = function(values, f, p) {
  if (p === undefined) { p = f; f = util.identity; }
  f = util.$(f);
  var H = (values.length - 1) * p + 1,
      h = Math.floor(H),
      v = +f(values[h - 1]),
      e = H - h;
  return e ? v + e * (f(values[h]) - v) : v;
};

// Compute the sum of an array of numbers.
stats.sum = function(values, f) {
  f = util.$(f);
  for (var sum=0, i=0, n=values.length, v; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) sum += v;
  }
  return sum;
};

// Compute the mean (average) of an array of numbers.
stats.mean = function(values, f) {
  f = util.$(f);
  var mean = 0, delta, i, n, c, v;
  for (i=0, c=0, n=values.length; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) {
      delta = v - mean;
      mean = mean + delta / (++c);
    }
  }
  return mean;
};

// Compute the sample variance of an array of numbers.
stats.variance = function(values, f) {
  f = util.$(f);
  if (!util.isArray(values) || values.length < 2) return 0;
  var mean = 0, M2 = 0, delta, i, c, v;
  for (i=0, c=0; i<values.length; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) {
      delta = v - mean;
      mean = mean + delta / (++c);
      M2 = M2 + delta * (v - mean);
    }
  }
  M2 = M2 / (c - 1);
  return M2;
};

// Compute the sample standard deviation of an array of numbers.
stats.stdev = function(values, f) {
  return Math.sqrt(stats.variance(values, f));
};

// Compute the Pearson mode skewness ((median-mean)/stdev) of an array of numbers.
stats.modeskew = function(values, f) {
  var avg = stats.mean(values, f),
      med = stats.median(values, f),
      std = stats.stdev(values, f);
  return std === 0 ? 0 : (avg - med) / std;
};

// Find the minimum value in an array.
stats.min = function(values, f) {
  return stats.extent(values, f)[0];
};

// Find the maximum value in an array.
stats.max = function(values, f) {
  return stats.extent(values, f)[1];
};

// Find the minimum and maximum of an array of values.
stats.extent = function(values, f) {
  f = util.$(f);
  var a, b, v, i, n = values.length;
  for (i=0; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) { a = b = v; break; }
  }
  for (; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) {
      if (v < a) a = v;
      if (v > b) b = v;
    }
  }
  return [a, b];
};

// Find the integer indices of the minimum and maximum values.
stats.extent.index = function(values, f) {
  f = util.$(f);
  var x = -1, y = -1, a, b, v, i, n = values.length;
  for (i=0; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) { a = b = v; x = y = i; break; }
  }
  for (; i<n; ++i) {
    v = f ? f(values[i]) : values[i];
    if (util.isValid(v)) {
      if (v < a) { a = v; x = i; }
      if (v > b) { b = v; y = i; }
    }
  }
  return [x, y];
};

// Compute the dot product of two arrays of numbers.
stats.dot = function(values, a, b) {
  var sum = 0, i, v;
  if (!b) {
    if (values.length !== a.length) {
      throw Error('Array lengths must match.');
    }
    for (i=0; i<values.length; ++i) {
      v = values[i] * a[i];
      if (v === v) sum += v;
    }
  } else {
    a = util.$(a);
    b = util.$(b);
    for (i=0; i<values.length; ++i) {
      v = a(values[i]) * b(values[i]);
      if (v === v) sum += v;
    }
  }
  return sum;
};

// Compute ascending rank scores for an array of values.
// Ties are assigned their collective mean rank.
stats.rank = function(values, f) {
  f = util.$(f) || util.identity;
  var a = values.map(function(v, i) {
      return {idx: i, val: f(v)};
    })
    .sort(util.comparator('val'));

  var n = values.length,
      r = Array(n),
      tie = -1, p = {}, i, v, mu;

  for (i=0; i<n; ++i) {
    v = a[i].val;
    if (tie < 0 && p === v) {
      tie = i - 1;
    } else if (tie > -1 && p !== v) {
      mu = 1 + (i-1 + tie) / 2;
      for (; tie<i; ++tie) r[a[tie].idx] = mu;
      tie = -1;
    }
    r[a[i].idx] = i + 1;
    p = v;
  }

  if (tie > -1) {
    mu = 1 + (n-1 + tie) / 2;
    for (; tie<n; ++tie) r[a[tie].idx] = mu;
  }

  return r;
};

// Compute the sample Pearson product-moment correlation of two arrays of numbers.
stats.cor = function(values, a, b) {
  var fn = b;
  b = fn ? values.map(util.$(b)) : a;
  a = fn ? values.map(util.$(a)) : values;

  var dot = stats.dot(a, b),
      mua = stats.mean(a),
      mub = stats.mean(b),
      sda = stats.stdev(a),
      sdb = stats.stdev(b),
      n = values.length;

  return (dot - n*mua*mub) / ((n-1) * sda * sdb);
};

// Compute the Spearman rank correlation of two arrays of values.
stats.cor.rank = function(values, a, b) {
  var ra = b ? stats.rank(values, util.$(a)) : stats.rank(values),
      rb = b ? stats.rank(values, util.$(b)) : stats.rank(a),
      n = values.length, i, s, d;

  for (i=0, s=0; i<n; ++i) {
    d = ra[i] - rb[i];
    s += d * d;
  }

  return 1 - 6*s / (n * (n*n-1));
};

// Compute the distance correlation of two arrays of numbers.
// http://en.wikipedia.org/wiki/Distance_correlation
stats.cor.dist = function(values, a, b) {
  var X = b ? values.map(util.$(a)) : values,
      Y = b ? values.map(util.$(b)) : a;

  var A = stats.dist.mat(X),
      B = stats.dist.mat(Y),
      n = A.length,
      i, aa, bb, ab;

  for (i=0, aa=0, bb=0, ab=0; i<n; ++i) {
    aa += A[i]*A[i];
    bb += B[i]*B[i];
    ab += A[i]*B[i];
  }

  return Math.sqrt(ab / Math.sqrt(aa*bb));
};

// Compute the vector distance between two arrays of numbers.
// Default is Euclidean (exp=2) distance, configurable via exp argument.
stats.dist = function(values, a, b, exp) {
  var f = util.isFunction(b) || util.isString(b),
      X = values,
      Y = f ? values : a,
      e = f ? exp : b,
      L2 = e === 2 || e == null,
      n = values.length, s = 0, d, i;
  if (f) {
    a = util.$(a);
    b = util.$(b);
  }
  for (i=0; i<n; ++i) {
    d = f ? (a(X[i])-b(Y[i])) : (X[i]-Y[i]);
    s += L2 ? d*d : Math.pow(Math.abs(d), e);
  }
  return L2 ? Math.sqrt(s) : Math.pow(s, 1/e);
};

// Construct a mean-centered distance matrix for an array of numbers.
stats.dist.mat = function(X) {
  var n = X.length,
      m = n*n,
      A = Array(m),
      R = gen.zeros(n),
      M = 0, v, i, j;

  for (i=0; i<n; ++i) {
    A[i*n+i] = 0;
    for (j=i+1; j<n; ++j) {
      A[i*n+j] = (v = Math.abs(X[i] - X[j]));
      A[j*n+i] = v;
      R[i] += v;
      R[j] += v;
    }
  }

  for (i=0; i<n; ++i) {
    M += R[i];
    R[i] /= n;
  }
  M /= m;

  for (i=0; i<n; ++i) {
    for (j=i; j<n; ++j) {
      A[i*n+j] += M - R[i] - R[j];
      A[j*n+i] = A[i*n+j];
    }
  }

  return A;
};

// Compute the Shannon entropy (log base 2) of an array of counts.
stats.entropy = function(counts, f) {
  f = util.$(f);
  var i, p, s = 0, H = 0, n = counts.length;
  for (i=0; i<n; ++i) {
    s += (f ? f(counts[i]) : counts[i]);
  }
  if (s === 0) return 0;
  for (i=0; i<n; ++i) {
    p = (f ? f(counts[i]) : counts[i]) / s;
    if (p) H += p * Math.log(p);
  }
  return -H / Math.LN2;
};

// Compute the mutual information between two discrete variables.
// Returns an array of the form [MI, MI_distance]
// MI_distance is defined as 1 - I(a,b) / H(a,b).
// http://en.wikipedia.org/wiki/Mutual_information
stats.mutual = function(values, a, b, counts) {
  var x = counts ? values.map(util.$(a)) : values,
      y = counts ? values.map(util.$(b)) : a,
      z = counts ? values.map(util.$(counts)) : b;

  var px = {},
      py = {},
      n = z.length,
      s = 0, I = 0, H = 0, p, t, i;

  for (i=0; i<n; ++i) {
    px[x[i]] = 0;
    py[y[i]] = 0;
  }

  for (i=0; i<n; ++i) {
    px[x[i]] += z[i];
    py[y[i]] += z[i];
    s += z[i];
  }

  t = 1 / (s * Math.LN2);
  for (i=0; i<n; ++i) {
    if (z[i] === 0) continue;
    p = (s * z[i]) / (px[x[i]] * py[y[i]]);
    I += z[i] * t * Math.log(p);
    H += z[i] * t * Math.log(z[i]/s);
  }

  return [I, 1 + I/H];
};

// Compute the mutual information between two discrete variables.
stats.mutual.info = function(values, a, b, counts) {
  return stats.mutual(values, a, b, counts)[0];
};

// Compute the mutual information distance between two discrete variables.
// MI_distance is defined as 1 - I(a,b) / H(a,b).
stats.mutual.dist = function(values, a, b, counts) {
  return stats.mutual(values, a, b, counts)[1];
};

// Compute a profile of summary statistics for a variable.
stats.profile = function(values, f) {
  var mean = 0,
      valid = 0,
      missing = 0,
      distinct = 0,
      min = null,
      max = null,
      M2 = 0,
      vals = [],
      u = {}, delta, sd, i, v, x;

  // compute summary stats
  for (i=0; i<values.length; ++i) {
    v = f ? f(values[i]) : values[i];

    // update unique values
    u[v] = (v in u) ? u[v] + 1 : (distinct += 1, 1);

    if (v == null) {
      ++missing;
    } else if (util.isValid(v)) {
      // update stats
      x = (typeof v === 'string') ? v.length : v;
      if (min===null || x < min) min = x;
      if (max===null || x > max) max = x;
      delta = x - mean;
      mean = mean + delta / (++valid);
      M2 = M2 + delta * (x - mean);
      vals.push(x);
    }
  }
  M2 = M2 / (valid - 1);
  sd = Math.sqrt(M2);

  // sort values for median and iqr
  vals.sort(util.cmp);

  return {
    type:     type(values, f),
    unique:   u,
    count:    values.length,
    valid:    valid,
    missing:  missing,
    distinct: distinct,
    min:      min,
    max:      max,
    mean:     mean,
    stdev:    sd,
    median:   (v = stats.quantile(vals, 0.5)),
    q1:       stats.quantile(vals, 0.25),
    q3:       stats.quantile(vals, 0.75),
    modeskew: sd === 0 ? 0 : (mean - v) / sd
  };
};

// Compute profiles for all variables in a data set.
stats.summary = function(data, fields) {
  fields = fields || util.keys(data[0]);
  var s = fields.map(function(f) {
    var p = stats.profile(data, util.$(f));
    return (p.field = f, p);
  });
  return (s.__summary__ = true, s);
};

module.exports = stats;

},{"./generate":10,"./import/type":11,"./util":14}],13:[function(require,module,exports){
var d3_time = require('d3-time');

var tempDate = new Date(),
    baseDate = new Date(0, 0, 1).setFullYear(0), // Jan 1, 0 AD
    utcBaseDate = new Date(Date.UTC(0, 0, 1)).setUTCFullYear(0);

function date(d) {
  return (tempDate.setTime(+d), tempDate);
}

// create a time unit entry
function entry(type, date, unit, step, min, max) {
  var e = {
    type: type,
    date: date,
    unit: unit
  };
  if (step) {
    e.step = step;
  } else {
    e.minstep = 1;
  }
  if (min != null) e.min = min;
  if (max != null) e.max = max;
  return e;
}

function create(type, unit, base, step, min, max) {
  return entry(type,
    function(d) { return unit.offset(base, d); },
    function(d) { return unit.count(base, d); },
    step, min, max);
}

var locale = [
  create('second', d3_time.second, baseDate),
  create('minute', d3_time.minute, baseDate),
  create('hour',   d3_time.hour,   baseDate),
  create('day',    d3_time.day,    baseDate, [1, 7]),
  create('month',  d3_time.month,  baseDate, [1, 3, 6]),
  create('year',   d3_time.year,   baseDate),

  // periodic units
  entry('seconds',
    function(d) { return new Date(1970, 0, 1, 0, 0, d); },
    function(d) { return date(d).getSeconds(); },
    null, 0, 59
  ),
  entry('minutes',
    function(d) { return new Date(1970, 0, 1, 0, d); },
    function(d) { return date(d).getMinutes(); },
    null, 0, 59
  ),
  entry('hours',
    function(d) { return new Date(1970, 0, 1, d); },
    function(d) { return date(d).getHours(); },
    null, 0, 23
  ),
  entry('weekdays',
    function(d) { return new Date(1970, 0, 4+d); },
    function(d) { return date(d).getDay(); },
    [1], 0, 6
  ),
  entry('dates',
    function(d) { return new Date(1970, 0, d); },
    function(d) { return date(d).getDate(); },
    [1], 1, 31
  ),
  entry('months',
    function(d) { return new Date(1970, d % 12, 1); },
    function(d) { return date(d).getMonth(); },
    [1], 0, 11
  )
];

var utc = [
  create('second', d3_time.utcSecond, utcBaseDate),
  create('minute', d3_time.utcMinute, utcBaseDate),
  create('hour',   d3_time.utcHour,   utcBaseDate),
  create('day',    d3_time.utcDay,    utcBaseDate, [1, 7]),
  create('month',  d3_time.utcMonth,  utcBaseDate, [1, 3, 6]),
  create('year',   d3_time.utcYear,   utcBaseDate),

  // periodic units
  entry('seconds',
    function(d) { return new Date(Date.UTC(1970, 0, 1, 0, 0, d)); },
    function(d) { return date(d).getUTCSeconds(); },
    null, 0, 59
  ),
  entry('minutes',
    function(d) { return new Date(Date.UTC(1970, 0, 1, 0, d)); },
    function(d) { return date(d).getUTCMinutes(); },
    null, 0, 59
  ),
  entry('hours',
    function(d) { return new Date(Date.UTC(1970, 0, 1, d)); },
    function(d) { return date(d).getUTCHours(); },
    null, 0, 23
  ),
  entry('weekdays',
    function(d) { return new Date(Date.UTC(1970, 0, 4+d)); },
    function(d) { return date(d).getUTCDay(); },
    [1], 0, 6
  ),
  entry('dates',
    function(d) { return new Date(Date.UTC(1970, 0, d)); },
    function(d) { return date(d).getUTCDate(); },
    [1], 1, 31
  ),
  entry('months',
    function(d) { return new Date(Date.UTC(1970, d % 12, 1)); },
    function(d) { return date(d).getUTCMonth(); },
    [1], 0, 11
  )
];

var STEPS = [
  [31536e6, 5],  // 1-year
  [7776e6, 4],   // 3-month
  [2592e6, 4],   // 1-month
  [12096e5, 3],  // 2-week
  [6048e5, 3],   // 1-week
  [1728e5, 3],   // 2-day
  [864e5, 3],    // 1-day
  [432e5, 2],    // 12-hour
  [216e5, 2],    // 6-hour
  [108e5, 2],    // 3-hour
  [36e5, 2],     // 1-hour
  [18e5, 1],     // 30-minute
  [9e5, 1],      // 15-minute
  [3e5, 1],      // 5-minute
  [6e4, 1],      // 1-minute
  [3e4, 0],      // 30-second
  [15e3, 0],     // 15-second
  [5e3, 0],      // 5-second
  [1e3, 0]       // 1-second
];

function find(units, span, minb, maxb) {
  var step = STEPS[0], i, n, bins;

  for (i=1, n=STEPS.length; i<n; ++i) {
    step = STEPS[i];
    if (span > step[0]) {
      bins = span / step[0];
      if (bins > maxb) {
        return units[STEPS[i-1][1]];
      }
      if (bins >= minb) {
        return units[step[1]];
      }
    }
  }
  return units[STEPS[n-1][1]];
}

function toUnitMap(units) {
  var map = {}, i, n;
  for (i=0, n=units.length; i<n; ++i) {
    map[units[i].type] = units[i];
  }
  map.find = function(span, minb, maxb) {
    return find(units, span, minb, maxb);
  };
  return map;
}

module.exports = toUnitMap(locale);
module.exports.utc = toUnitMap(utc);

},{"d3-time":8}],14:[function(require,module,exports){
var buffer = require('buffer'),
    time = require('./time'),
    utc = time.utc;

var u = module.exports = {};

// utility functions

var FNAME = '__name__';

u.namedfunc = function(name, f) { return (f[FNAME] = name, f); };

u.name = function(f) { return f==null ? null : f[FNAME]; };

u.identity = function(x) { return x; };

u.true = u.namedfunc('true', function() { return true; });

u.false = u.namedfunc('false', function() { return false; });

u.duplicate = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

u.equal = function(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};

u.extend = function(obj) {
  for (var x, name, i=1, len=arguments.length; i<len; ++i) {
    x = arguments[i];
    for (name in x) { obj[name] = x[name]; }
  }
  return obj;
};

u.length = function(x) {
  return x != null && x.length != null ? x.length : null;
};

u.keys = function(x) {
  var keys = [], k;
  for (k in x) keys.push(k);
  return keys;
};

u.vals = function(x) {
  var vals = [], k;
  for (k in x) vals.push(x[k]);
  return vals;
};

u.toMap = function(list, f) {
  return (f = u.$(f)) ?
    list.reduce(function(obj, x) { return (obj[f(x)] = 1, obj); }, {}) :
    list.reduce(function(obj, x) { return (obj[x] = 1, obj); }, {});
};

u.keystr = function(values) {
  // use to ensure consistent key generation across modules
  var n = values.length;
  if (!n) return '';
  for (var s=String(values[0]), i=1; i<n; ++i) {
    s += '|' + String(values[i]);
  }
  return s;
};

// type checking functions

var toString = Object.prototype.toString;

u.isObject = function(obj) {
  return obj === Object(obj);
};

u.isFunction = function(obj) {
  return toString.call(obj) === '[object Function]';
};

u.isString = function(obj) {
  return typeof value === 'string' || toString.call(obj) === '[object String]';
};

u.isArray = Array.isArray || function(obj) {
  return toString.call(obj) === '[object Array]';
};

u.isNumber = function(obj) {
  return typeof obj === 'number' || toString.call(obj) === '[object Number]';
};

u.isBoolean = function(obj) {
  return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
};

u.isDate = function(obj) {
  return toString.call(obj) === '[object Date]';
};

u.isValid = function(obj) {
  return obj != null && obj === obj;
};

u.isBuffer = (buffer.Buffer && buffer.Buffer.isBuffer) || u.false;

// type coercion functions

u.number = function(s) {
  return s == null || s === '' ? null : +s;
};

u.boolean = function(s) {
  return s == null || s === '' ? null : s==='false' ? false : !!s;
};

u.date = function(s) {
  return s == null || s === '' ? null : Date.parse(s);
};

u.array = function(x) {
  return x != null ? (u.isArray(x) ? x : [x]) : [];
};

u.str = function(x) {
  return u.isArray(x) ? '[' + x.map(u.str) + ']'
    : u.isObject(x) ? JSON.stringify(x)
    : u.isString(x) ? ('\''+util_escape_str(x)+'\'') : x;
};

var escape_str_re = /(^|[^\\])'/g;

function util_escape_str(x) {
  return x.replace(escape_str_re, '$1\\\'');
}

// data access functions

var field_re = /\[(.*?)\]|[^.\[]+/g;

u.field = function(f) {
  return String(f).match(field_re).map(function(d) {
    return d[0] !== '[' ? d :
      d[1] !== "'" && d[1] !== '"' ? d.slice(1, -1) :
      d.slice(2, -2).replace(/\\(["'])/g, '$1');
  });
};

u.accessor = function(f) {
  var s;
  return f==null || u.isFunction(f) ? f :
    u.namedfunc(f, (s = u.field(f)).length > 1 ?
      function(x) { return s.reduce(function(x,f) { return x[f]; }, x); } :
      function(x) { return x[f]; }
    );
};

// short-cut for accessor
u.$ = u.accessor;

u.mutator = function(f) {
  var s;
  return u.isString(f) && (s=u.field(f)).length > 1 ?
    function(x, v) {
      for (var i=0; i<s.length-1; ++i) x = x[s[i]];
      x[s[i]] = v;
    } :
    function(x, v) { x[f] = v; };
};


u.$func = function(name, op) {
  return function(f) {
    f = u.$(f) || u.identity;
    var n = name + (u.name(f) ? '_'+u.name(f) : '');
    return u.namedfunc(n, function(d) { return op(f(d)); });
  };
};

u.$valid  = u.$func('valid', u.isValid);
u.$length = u.$func('length', u.length);

u.$in = function(f, values) {
  f = u.$(f);
  var map = u.isArray(values) ? u.toMap(values) : values;
  return function(d) { return !!map[f(d)]; };
};

u.$year   = u.$func('year', time.year.unit);
u.$month  = u.$func('month', time.months.unit);
u.$date   = u.$func('date', time.dates.unit);
u.$day    = u.$func('day', time.weekdays.unit);
u.$hour   = u.$func('hour', time.hours.unit);
u.$minute = u.$func('minute', time.minutes.unit);
u.$second = u.$func('second', time.seconds.unit);

u.$utcYear   = u.$func('utcYear', utc.year.unit);
u.$utcMonth  = u.$func('utcMonth', utc.months.unit);
u.$utcDate   = u.$func('utcDate', utc.dates.unit);
u.$utcDay    = u.$func('utcDay', utc.weekdays.unit);
u.$utcHour   = u.$func('utcHour', utc.hours.unit);
u.$utcMinute = u.$func('utcMinute', utc.minutes.unit);
u.$utcSecond = u.$func('utcSecond', utc.seconds.unit);

// comparison / sorting functions

u.comparator = function(sort) {
  var sign = [];
  if (sort === undefined) sort = [];
  sort = u.array(sort).map(function(f) {
    var s = 1;
    if      (f[0] === '-') { s = -1; f = f.slice(1); }
    else if (f[0] === '+') { s = +1; f = f.slice(1); }
    sign.push(s);
    return u.accessor(f);
  });
  return function(a,b) {
    var i, n, f, x, y;
    for (i=0, n=sort.length; i<n; ++i) {
      f = sort[i]; x = f(a); y = f(b);
      if (x < y) return -1 * sign[i];
      if (x > y) return sign[i];
    }
    return 0;
  };
};

u.cmp = function(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a >= b) {
    return 0;
  } else if (a === null) {
    return -1;
  } else if (b === null) {
    return 1;
  }
  return NaN;
};

u.numcmp = function(a, b) { return a - b; };

u.stablesort = function(array, sortBy, keyFn) {
  var indices = array.reduce(function(idx, v, i) {
    return (idx[keyFn(v)] = i, idx);
  }, {});

  array.sort(function(a, b) {
    var sa = sortBy(a),
        sb = sortBy(b);
    return sa < sb ? -1 : sa > sb ? 1
         : (indices[keyFn(a)] - indices[keyFn(b)]);
  });

  return array;
};


// string functions

u.pad = function(s, length, pos, padchar) {
  padchar = padchar || " ";
  var d = length - s.length;
  if (d <= 0) return s;
  switch (pos) {
    case 'left':
      return strrep(d, padchar) + s;
    case 'middle':
    case 'center':
      return strrep(Math.floor(d/2), padchar) +
         s + strrep(Math.ceil(d/2), padchar);
    default:
      return s + strrep(d, padchar);
  }
};

function strrep(n, str) {
  var s = "", i;
  for (i=0; i<n; ++i) s += str;
  return s;
}

u.truncate = function(s, length, pos, word, ellipsis) {
  var len = s.length;
  if (len <= length) return s;
  ellipsis = ellipsis !== undefined ? String(ellipsis) : '\u2026';
  var l = Math.max(0, length - ellipsis.length);

  switch (pos) {
    case 'left':
      return ellipsis + (word ? truncateOnWord(s,l,1) : s.slice(len-l));
    case 'middle':
    case 'center':
      var l1 = Math.ceil(l/2), l2 = Math.floor(l/2);
      return (word ? truncateOnWord(s,l1) : s.slice(0,l1)) +
        ellipsis + (word ? truncateOnWord(s,l2,1) : s.slice(len-l2));
    default:
      return (word ? truncateOnWord(s,l) : s.slice(0,l)) + ellipsis;
  }
};

function truncateOnWord(s, len, rev) {
  var cnt = 0, tok = s.split(truncate_word_re);
  if (rev) {
    s = (tok = tok.reverse())
      .filter(function(w) { cnt += w.length; return cnt <= len; })
      .reverse();
  } else {
    s = tok.filter(function(w) { cnt += w.length; return cnt <= len; });
  }
  return s.length ? s.join('').trim() : tok[0].slice(0, len);
}

var truncate_word_re = /([\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF])/;

},{"./time":13,"buffer":1}],15:[function(require,module,exports){
exports.AGGREGATE_OPS = [
    'values', 'count', 'valid', 'missing', 'distinct',
    'sum', 'mean', 'average', 'variance', 'variancep', 'stdev',
    'stdevp', 'median', 'q1', 'q3', 'modeskew', 'min', 'max',
    'argmin', 'argmax'
];
exports.SHARED_DOMAIN_OPS = [
    'mean', 'average', 'stdev', 'stdevp', 'median', 'q1', 'q3', 'min', 'max'
];
},{}],16:[function(require,module,exports){
exports.MAXBINS_DEFAULT = 15;
},{}],17:[function(require,module,exports){
/*
 * Constants and utilities for encoding channels (Visual variables)
 * such as 'x', 'y', 'color'.
 */
exports.X = 'x';
exports.Y = 'y';
exports.ROW = 'row';
exports.COLUMN = 'column';
exports.SHAPE = 'shape';
exports.SIZE = 'size';
exports.COLOR = 'color';
exports.TEXT = 'text';
exports.DETAIL = 'detail';
exports.CHANNELS = [exports.X, exports.Y, exports.ROW, exports.COLUMN, exports.SIZE, exports.SHAPE, exports.COLOR, exports.TEXT, exports.DETAIL];
;
function getSupportedRole(channel) {
    switch (channel) {
        case exports.X:
        case exports.Y:
        case exports.COLOR:
            return {
                measure: true,
                dimension: true
            };
        case exports.ROW:
        case exports.COLUMN:
        case exports.SHAPE:
        case exports.DETAIL:
            return {
                measure: false,
                dimension: true
            };
        case exports.SIZE:
        case exports.TEXT:
            return {
                measure: true,
                dimension: false
            };
    }
    throw new Error('Invalid encoding channel' + channel);
}
exports.getSupportedRole = getSupportedRole;
},{}],18:[function(require,module,exports){
var bin_1 = require('../bin');
var channel_1 = require('../channel');
var data_1 = require('../data');
var vlFieldDef = require('../fielddef');
var vlEncoding = require('../encoding');
var marktype_1 = require('../marktype');
var schema = require('../schema/schema');
var schemaUtil = require('../schema/schemautil');
var type_1 = require('../type');
var util = require('../util');
var Model = (function () {
    function Model(spec, theme) {
        this.numberFormat = function (channel) {
            return this.config('numberFormat');
        };
        var defaults = schema.instantiate();
        this._spec = schemaUtil.merge(defaults, theme || {}, spec);
        this._stack = this.getStackProperties();
        vlEncoding.forEach(this._spec.encoding, function (fieldDef) {
            if (fieldDef.type) {
                fieldDef.type = type_1.getFullName(fieldDef.type);
            }
        });
    }
    Model.prototype.getStackProperties = function () {
        var stack = (this.has(channel_1.COLOR)) ? channel_1.COLOR : (this.has(channel_1.DETAIL)) ? channel_1.DETAIL : null;
        if (stack &&
            (this.is(marktype_1.BAR) || this.is(marktype_1.AREA)) &&
            this.config('stack') !== false &&
            this.isAggregate()) {
            var isXMeasure = this.isMeasure(channel_1.X);
            var isYMeasure = this.isMeasure(channel_1.Y);
            if (isXMeasure && !isYMeasure) {
                return {
                    groupbyChannel: channel_1.Y,
                    fieldChannel: channel_1.X,
                    stackChannel: stack,
                    config: this.config('stack')
                };
            }
            else if (isYMeasure && !isXMeasure) {
                return {
                    groupbyChannel: channel_1.X,
                    fieldChannel: channel_1.Y,
                    stackChannel: stack,
                    config: this.config('stack')
                };
            }
        }
        return null;
    };
    Model.prototype.stack = function () {
        return this._stack;
    };
    Model.prototype.toSpec = function (excludeConfig, excludeData) {
        var encoding = util.duplicate(this._spec.encoding), spec;
        spec = {
            marktype: this._spec.marktype,
            encoding: encoding
        };
        if (!excludeConfig) {
            spec.config = util.duplicate(this._spec.config);
        }
        if (!excludeData) {
            spec.data = util.duplicate(this._spec.data);
        }
        var defaults = schema.instantiate();
        return schemaUtil.subtract(spec, defaults);
    };
    Model.prototype.marktype = function () {
        return this._spec.marktype;
    };
    Model.prototype.is = function (m) {
        return this._spec.marktype === m;
    };
    Model.prototype.has = function (channel) {
        return this._spec.encoding[channel].field !== undefined;
    };
    Model.prototype.fieldDef = function (channel) {
        return this._spec.encoding[channel];
    };
    Model.prototype.fieldRef = function (channel, opt) {
        opt = opt || {};
        return vlFieldDef.fieldRef(this._spec.encoding[channel], opt);
    };
    Model.prototype.fields = function () {
        return vlEncoding.fields(this._spec.encoding);
    };
    Model.prototype.fieldTitle = function (channel) {
        if (vlFieldDef.isCount(this._spec.encoding[channel])) {
            return vlFieldDef.COUNT_DISPLAYNAME;
        }
        var fn = this._spec.encoding[channel].aggregate || this._spec.encoding[channel].timeUnit || (this._spec.encoding[channel].bin && 'bin');
        if (fn) {
            return fn.toUpperCase() + '(' + this._spec.encoding[channel].field + ')';
        }
        else {
            return this._spec.encoding[channel].field;
        }
    };
    Model.prototype.bandWidth = function (channel, useSmallBand) {
        if (this.fieldDef(channel).scale.bandWidth !== undefined) {
            return this.fieldDef(channel).scale.bandWidth;
        }
        useSmallBand = useSmallBand ||
            (channel === channel_1.Y && this.has(channel_1.ROW) && this.has(channel_1.Y)) ||
            (channel === channel_1.X && this.has(channel_1.COLUMN) && this.has(channel_1.X));
        return this.config(useSmallBand ? 'smallBandWidth' : 'largeBandWidth');
    };
    Model.prototype.padding = function (channel) {
        if (this.fieldDef(channel).scale.padding !== undefined) {
            return this.fieldDef(channel).scale.padding;
        }
        if (channel === channel_1.ROW || channel === channel_1.COLUMN) {
            return this.config('cellPadding');
        }
        return this.config('padding');
    };
    Model.prototype.bin = function (channel) {
        var bin = this._spec.encoding[channel].bin;
        if (bin === {})
            return false;
        if (bin === true)
            return {
                maxbins: bin_1.MAXBINS_DEFAULT
            };
        return bin;
    };
    Model.prototype.map = function (f) {
        return vlEncoding.map(this._spec.encoding, f);
    };
    Model.prototype.reduce = function (f, init) {
        return vlEncoding.reduce(this._spec.encoding, f, init);
    };
    Model.prototype.forEach = function (f) {
        return vlEncoding.forEach(this._spec.encoding, f);
    };
    Model.prototype.isTypes = function (channel, type) {
        var fieldDef = this.fieldDef(channel);
        return fieldDef && vlFieldDef.isTypes(fieldDef, type);
    };
    Model.prototype.isOrdinalScale = function (channel) {
        return this.has(channel) &&
            vlFieldDef.isOrdinalScale(this.fieldDef(channel));
    };
    Model.prototype.isDimension = function (channel) {
        return this.has(channel) &&
            vlFieldDef.isDimension(this.fieldDef(channel));
    };
    Model.prototype.isMeasure = function (channel) {
        return this.has(channel) &&
            vlFieldDef.isMeasure(this.fieldDef(channel));
    };
    Model.prototype.isAggregate = function () {
        return vlEncoding.isAggregate(this._spec.encoding);
    };
    Model.prototype.dataTable = function () {
        return this.isAggregate() ? data_1.SUMMARY : data_1.SOURCE;
    };
    Model.prototype.details = function () {
        var encoding = this;
        return this.reduce(function (refs, fieldDef, channel) {
            if (!fieldDef.aggregate && (channel !== channel_1.X && channel !== channel_1.Y)) {
                refs.push(encoding.fieldRef(channel));
            }
            return refs;
        }, []);
    };
    Model.prototype.facets = function () {
        var encoding = this;
        return this.reduce(function (refs, field, channel) {
            if (!field.aggregate && (channel === channel_1.ROW || channel === channel_1.COLUMN)) {
                refs.push(encoding.fieldRef(channel));
            }
            return refs;
        }, []);
    };
    Model.prototype.cardinality = function (channel, stats) {
        return vlFieldDef.cardinality(this.fieldDef(channel), stats, this.config('filterNull'));
    };
    Model.prototype.data = function () {
        return this._spec.data;
    };
    Model.prototype.hasValues = function () {
        var vals = this.data().values;
        return vals && vals.length;
    };
    Model.prototype.config = function (name) {
        return this._spec.config[name];
    };
    return Model;
})();
exports.Model = Model;
},{"../bin":16,"../channel":17,"../data":31,"../encoding":32,"../fielddef":33,"../marktype":34,"../schema/schema":44,"../schema/schemautil":45,"../type":50,"../util":51}],19:[function(require,module,exports){
var util_1 = require('../util');
var util = require('../util');
var type_1 = require('../type');
var channel_1 = require('../channel');
var time = require('./time');
function compileAxis(channel, model, layout, stats) {
    var isCol = channel === channel_1.COLUMN, isRow = channel === channel_1.ROW, type = isCol ? 'x' : isRow ? 'y' : channel;
    var def = {
        type: type,
        scale: channel
    };
    [
        'format', 'grid', 'layer', 'offset', 'orient', 'tickSize', 'ticks', 'title', 'titleOffset',
        'tickPadding', 'tickSize', 'tickSizeMajor', 'tickSizeMinor', 'tickSizeEnd',
        'values', 'subdivide'
    ].forEach(function (property) {
        var method;
        var value = (method = exports[property]) ?
            method(model, channel, layout, stats, def) :
            model.fieldDef(channel).axis[property];
        if (value !== undefined) {
            def[property] = value;
        }
    });
    var props = model.fieldDef(channel).axis.properties || {};
    [
        'axis', 'grid', 'labels', 'title',
        'ticks', 'majorTicks', 'minorTicks'
    ].forEach(function (group) {
        var value = properties[group] ?
            properties[group](model, channel, props[group], layout, def) :
            props[group];
        if (value !== undefined) {
            def.properties = def.properties || {};
            def.properties[group] = value;
        }
    });
    return def;
}
exports.compileAxis = compileAxis;
function format(model, channel) {
    var fieldDef = model.fieldDef(channel);
    var format = fieldDef.axis.format;
    if (format !== undefined) {
        return format;
    }
    if (fieldDef.type === type_1.QUANTITATIVE) {
        return model.numberFormat(channel);
    }
    else if (fieldDef.type === type_1.TEMPORAL) {
        var timeUnit = fieldDef.timeUnit;
        if (!timeUnit) {
            return model.config('timeFormat');
        }
        else if (timeUnit === 'year') {
            return 'd';
        }
    }
    return undefined;
}
exports.format = format;
function grid(model, channel) {
    var grid = model.fieldDef(channel).axis.grid;
    if (grid !== undefined) {
        return grid;
    }
    return channel === channel_1.ROW || channel === channel_1.COLUMN ||
        (model.isTypes(channel, [type_1.QUANTITATIVE, type_1.TEMPORAL]) && !model.fieldDef(channel).bin);
}
exports.grid = grid;
function layer(model, channel, layout, stats, def) {
    var layer = model.fieldDef(channel).axis.layer;
    if (layer !== undefined) {
        return layer;
    }
    if (def.grid) {
        return 'back';
    }
    return undefined;
}
exports.layer = layer;
;
function offset(model, channel, layout) {
    var offset = model.fieldDef(channel).axis.offset;
    if (offset) {
        return offset;
    }
    if (channel === channel_1.ROW) {
        return layout.y.axisTitleOffset + 20;
    }
    return undefined;
}
exports.offset = offset;
function orient(model, channel, layout, stats) {
    var orient = model.fieldDef(channel).axis.orient;
    if (orient) {
        return orient;
    }
    else if (channel === channel_1.COLUMN) {
        return 'top';
    }
    else if (channel === channel_1.X && model.has(channel_1.Y) && model.isOrdinalScale(channel_1.Y) && model.cardinality(channel_1.Y, stats) > 30) {
        return 'top';
    }
    return undefined;
}
exports.orient = orient;
function ticks(model, channel) {
    var ticks = model.fieldDef(channel).axis.ticks;
    if (ticks !== undefined) {
        return ticks;
    }
    if (channel === channel_1.X && !model.fieldDef(channel).bin) {
        return 5;
    }
    return undefined;
}
exports.ticks = ticks;
function tickSize(model, channel) {
    var tickSize = model.fieldDef(channel).axis.tickSize;
    if (tickSize !== undefined) {
        return tickSize;
    }
    if (channel === channel_1.ROW || channel === channel_1.COLUMN) {
        return 0;
    }
    return undefined;
}
exports.tickSize = tickSize;
function title(model, channel, layout) {
    var axisSpec = model.fieldDef(channel).axis;
    if (axisSpec.title !== undefined) {
        return axisSpec.title;
    }
    var fieldTitle = model.fieldTitle(channel);
    var maxLength;
    if (axisSpec.titleMaxLength) {
        maxLength = axisSpec.titleMaxLength;
    }
    else if (channel === channel_1.X) {
        maxLength = layout.cellWidth / model.config('characterWidth');
    }
    else if (channel === channel_1.Y) {
        maxLength = layout.cellHeight / model.config('characterWidth');
    }
    return maxLength ? util.truncate(fieldTitle, maxLength) : fieldTitle;
}
exports.title = title;
function titleOffset(model, channel) {
    var value = model.fieldDef(channel).axis.titleOffset;
    if (value)
        return value;
    switch (channel) {
        case channel_1.ROW: return 0;
        case channel_1.COLUMN: return 35;
    }
    return undefined;
}
exports.titleOffset = titleOffset;
var properties;
(function (properties) {
    function axis(model, channel, spec) {
        if (channel === channel_1.ROW || channel === channel_1.COLUMN) {
            return util.extend({
                opacity: { value: 0 }
            }, spec || {});
        }
        return spec || undefined;
    }
    properties.axis = axis;
    function grid(model, channel, spec, layout, def) {
        var cellPadding = layout.cellPadding;
        if (def.grid) {
            if (channel === channel_1.COLUMN) {
                var yOffset = model.config('cellGridOffset');
                var sign = model.fieldDef(channel).axis.orient === 'bottom' ? -1 : 1;
                return util.extend({
                    x: {
                        offset: util_1.roundFloat(layout.cellWidth * (1 + cellPadding / 2.0)),
                        scale: 'column',
                        field: 'data'
                    },
                    y: {
                        value: -sign * yOffset,
                    },
                    y2: {
                        field: { group: 'mark.group.height' },
                        offset: sign * yOffset,
                        mult: sign
                    },
                    stroke: { value: model.config('cellGridColor') },
                    strokeOpacity: { value: model.config('cellGridOpacity') }
                }, spec || {});
            }
            else if (channel === channel_1.ROW) {
                var xOffset = model.config('cellGridOffset');
                var sign = model.fieldDef(channel).axis.orient === 'right' ? -1 : 1;
                return util.extend({
                    y: {
                        offset: util_1.roundFloat(-layout.cellHeight * (cellPadding / 2)),
                        scale: 'row',
                        field: 'data'
                    },
                    x: {
                        value: sign * (def.offset - xOffset)
                    },
                    x2: {
                        field: { group: 'mark.group.width' },
                        offset: sign * (def.offset + xOffset),
                        mult: sign
                    },
                    stroke: { value: model.config('cellGridColor') },
                    strokeOpacity: { value: model.config('cellGridOpacity') }
                }, spec || {});
            }
            else {
                return util.extend({
                    stroke: { value: model.config('gridColor') },
                    strokeOpacity: { value: model.config('gridOpacity') }
                }, spec || {});
            }
        }
        return spec || undefined;
    }
    properties.grid = grid;
    function labels(model, channel, spec, layout, def) {
        var fieldDef = model.fieldDef(channel);
        var timeUnit = fieldDef.timeUnit;
        if (fieldDef.type === type_1.TEMPORAL && timeUnit && (time.hasScale(timeUnit))) {
            spec = util.extend({
                text: { scale: 'time-' + timeUnit, field: 'data' }
            }, spec || {});
        }
        if (model.isTypes(channel, [type_1.NOMINAL, type_1.ORDINAL]) && fieldDef.axis.labelMaxLength) {
            spec = util.extend({
                text: {
                    template: '{{ datum.data | truncate:' + fieldDef.axis.labelMaxLength + '}}'
                }
            }, spec || {});
        }
        if (channel === channel_1.X) {
            if ((model.isDimension(channel_1.X) || fieldDef.type === type_1.TEMPORAL)) {
                spec = util.extend({
                    angle: { value: 270 },
                    align: { value: def.orient === 'top' ? 'left' : 'right' },
                    baseline: { value: 'middle' }
                }, spec || {});
            }
        }
        return spec || undefined;
    }
    properties.labels = labels;
    function title(model, channel, spec, layout) {
        if (channel === channel_1.ROW) {
            return util.extend({
                angle: { value: 0 },
                align: { value: 'right' },
                baseline: { value: 'middle' },
                dy: { value: (-layout.height / 2) - 20 }
            }, spec || {});
        }
        return spec || undefined;
    }
    properties.title = title;
})(properties || (properties = {}));
},{"../channel":17,"../type":50,"../util":51,"./time":30}],20:[function(require,module,exports){
var Model_1 = require('./Model');
var vlTime = require('./time');
var axis_1 = require('./axis');
var data_1 = require('./data');
var legend_1 = require('./legend');
var marks_1 = require('./marks');
var scale_1 = require('./scale');
var facet_1 = require('./facet');
var layout_1 = require('./layout');
var stack_1 = require('./stack');
var style_1 = require('./style');
var subfacet_1 = require('./subfacet');
var data_2 = require('../data');
var channel_1 = require('../channel');
var Model_2 = require('./Model');
exports.Model = Model_2.Model;
function compile(spec, stats, theme) {
    var model = new Model_1.Model(spec, theme);
    if (!stats) {
        if (model.hasValues()) {
            stats = data_2.stats(model.data().values);
        }
        else {
            console.error('No stats provided and data is not embedded.');
        }
    }
    var layout = layout_1.default(model, stats);
    var output = {
        width: layout.width,
        height: layout.height,
        padding: 'auto',
        data: data_1.compileData(model),
        marks: [{
                name: 'cell',
                type: 'group',
                properties: {
                    enter: {
                        width: layout.cellWidth ?
                            { value: layout.cellWidth } :
                            { field: { group: 'width' } },
                        height: layout.cellHeight ?
                            { value: layout.cellHeight } :
                            { field: { group: 'height' } }
                    }
                }
            }]
    };
    var timeScales = vlTime.scales(model);
    if (timeScales.length > 0) {
        output.scales = timeScales;
    }
    var group = output.marks[0];
    var styleCfg = style_1.default(model, stats), mdefs = group.marks = marks_1.compileMarks(model, layout, styleCfg), mdef = mdefs[mdefs.length - 1];
    var stack = model.stack();
    if (stack) {
        stack_1.default(model, mdef, stack);
    }
    var marktype = model.marktype();
    var isLineType = marktype === 'line' || marktype === 'area';
    var details = model.details();
    if (details.length > 0 && isLineType) {
        subfacet_1.default(group, mdef, details);
    }
    if (isLineType && model.config('autoSortLine')) {
        var f = (model.isMeasure(channel_1.X) && model.isDimension(channel_1.Y)) ? channel_1.Y : channel_1.X;
        if (!mdef.from) {
            mdef.from = {};
        }
        mdef.from.transform = [{ type: 'sort', by: '-' + model.fieldRef(f) }];
    }
    var singleScaleNames = [].concat.apply([], mdefs.map(function (markProps) {
        return scale_1.compileScaleNames(markProps.properties.update);
    }));
    var legends = legend_1.compileLegends(model, styleCfg);
    if (model.has(channel_1.ROW) || model.has(channel_1.COLUMN)) {
        output = facet_1.default(group, model, layout, output, singleScaleNames, stats);
        if (legends.length > 0) {
            output.legends = legends;
        }
    }
    else {
        group.scales = scale_1.compileScales(singleScaleNames, model, layout, stats);
        var axes = [];
        if (model.has(channel_1.X)) {
            axes.push(axis_1.compileAxis(channel_1.X, model, layout, stats));
        }
        if (model.has(channel_1.Y)) {
            axes.push(axis_1.compileAxis(channel_1.Y, model, layout, stats));
        }
        if (axes.length > 0) {
            group.axes = axes;
        }
        if (legends.length > 0) {
            group.legends = legends;
        }
    }
    return {
        spec: output
    };
}
exports.compile = compile;
},{"../channel":17,"../data":31,"./Model":18,"./axis":19,"./data":21,"./facet":22,"./layout":23,"./legend":24,"./marks":25,"./scale":26,"./stack":27,"./style":28,"./subfacet":29,"./time":30}],21:[function(require,module,exports){
var vlFieldDef = require('../fielddef');
var util = require('../util');
var bin_1 = require('../bin');
var data_1 = require('../data');
var time = require('./time');
var type_1 = require('../type');
function compileData(model) {
    var def = [source.def(model)];
    var summaryDef = summary.def(model);
    if (summaryDef) {
        def.push(summaryDef);
    }
    filterNonPositive(def[def.length - 1], model);
    var stackDef = model.stack();
    if (stackDef) {
        def.push(stack.def(model, stackDef));
    }
    return def;
}
exports.compileData = compileData;
var source;
(function (source_1) {
    function def(model) {
        var source = { name: data_1.SOURCE };
        if (model.hasValues()) {
            source.values = model.data().values;
            source.format = { type: 'json' };
        }
        else {
            source.url = model.data().url;
            source.format = { type: model.data().formatType };
        }
        var parse = formatParse(model);
        if (parse) {
            source.format.parse = parse;
        }
        source.transform = transform(model);
        return source;
    }
    source_1.def = def;
    function formatParse(model) {
        var parse;
        model.forEach(function (fieldDef) {
            if (fieldDef.type === type_1.TEMPORAL) {
                parse = parse || {};
                parse[fieldDef.field] = 'date';
            }
            else if (fieldDef.type === type_1.QUANTITATIVE) {
                if (vlFieldDef.isCount(fieldDef))
                    return;
                parse = parse || {};
                parse[fieldDef.field] = 'number';
            }
        });
        return parse;
    }
    function transform(model) {
        return nullFilterTransform(model).concat(formulaTransform(model), timeTransform(model), binTransform(model), filterTransform(model));
    }
    source_1.transform = transform;
    function timeTransform(model) {
        return model.reduce(function (transform, fieldDef, channel) {
            if (fieldDef.type === type_1.TEMPORAL && fieldDef.timeUnit) {
                var fieldRef = model.fieldRef(channel, { nofn: true, datum: true });
                transform.push({
                    type: 'formula',
                    field: model.fieldRef(channel),
                    expr: time.formula(fieldDef.timeUnit, fieldRef)
                });
            }
            return transform;
        }, []);
    }
    source_1.timeTransform = timeTransform;
    function binTransform(model) {
        return model.reduce(function (transform, fieldDef, channel) {
            var bin = model.bin(channel);
            if (bin) {
                transform.push({
                    type: 'bin',
                    field: fieldDef.field,
                    output: {
                        start: model.fieldRef(channel, { binSuffix: '_start' }),
                        end: model.fieldRef(channel, { binSuffix: '_end' })
                    },
                    maxbins: typeof bin === 'boolean' ? bin_1.MAXBINS_DEFAULT : bin.maxbins
                });
                transform.push({
                    type: 'formula',
                    field: model.fieldRef(channel, { binSuffix: '_mid' }),
                    expr: '(' + model.fieldRef(channel, { datum: 1, binSuffix: '_start' }) + '+' + model.fieldRef(channel, { datum: 1, binSuffix: '_end' }) + ')/2'
                });
            }
            return transform;
        }, []);
    }
    source_1.binTransform = binTransform;
    function nullFilterTransform(model) {
        var filteredFields = util.reduce(model.fields(), function (filteredFields, fieldList, fieldName) {
            if (fieldName === '*')
                return filteredFields;
            if ((model.config('filterNull').quantitative && fieldList.containsType[type_1.QUANTITATIVE]) ||
                (model.config('filterNull').temporal && fieldList.containsType[type_1.TEMPORAL]) ||
                (model.config('filterNull').ordinal && fieldList.containsType[type_1.ORDINAL]) ||
                (model.config('filterNull').nominal && fieldList.containsType[type_1.NOMINAL])) {
                filteredFields.push(fieldName);
            }
            return filteredFields;
        }, []);
        return filteredFields.length > 0 ?
            [{
                    type: 'filter',
                    test: filteredFields.map(function (fieldName) {
                        return 'datum.' + fieldName + '!==null';
                    }).join(' && ')
                }] : [];
    }
    source_1.nullFilterTransform = nullFilterTransform;
    function filterTransform(model) {
        var filter = model.data().filter;
        return filter ? [{
                type: 'filter',
                test: filter
            }] : [];
    }
    source_1.filterTransform = filterTransform;
    function formulaTransform(model) {
        var calculate = model.data().calculate;
        if (calculate === undefined) {
            return [];
        }
        return calculate.reduce(function (transform, formula) {
            transform.push(util.extend({ type: formula }, formula));
            return transform;
        }, []);
    }
    source_1.formulaTransform = formulaTransform;
})(source = exports.source || (exports.source = {}));
var summary;
(function (summary) {
    function def(model) {
        var dims = {};
        var meas = {};
        var hasAggregate = false;
        model.forEach(function (fieldDef, channel) {
            if (fieldDef.aggregate) {
                hasAggregate = true;
                if (fieldDef.aggregate === 'count') {
                    meas['*'] = meas['*'] || {};
                    meas['*'].count = true;
                }
                else {
                    meas[fieldDef.field] = meas[fieldDef.field] || {};
                    meas[fieldDef.field][fieldDef.aggregate] = true;
                }
            }
            else {
                if (fieldDef.bin) {
                    dims[model.fieldRef(channel, { binSuffix: '_start' })] = model.fieldRef(channel, { binSuffix: '_start' });
                    dims[model.fieldRef(channel, { binSuffix: '_mid' })] = model.fieldRef(channel, { binSuffix: '_mid' });
                    dims[model.fieldRef(channel, { binSuffix: '_end' })] = model.fieldRef(channel, { binSuffix: '_end' });
                }
                else {
                    dims[fieldDef.field] = model.fieldRef(channel);
                }
            }
        });
        var groupby = util.vals(dims);
        var summarize = util.reduce(meas, function (summarize, fnDictSet, field) {
            summarize[field] = util.keys(fnDictSet);
            return summarize;
        }, {});
        if (hasAggregate) {
            return {
                name: data_1.SUMMARY,
                source: data_1.SOURCE,
                transform: [{
                        type: 'aggregate',
                        groupby: groupby,
                        summarize: summarize
                    }]
            };
        }
        return null;
    }
    summary.def = def;
    ;
})(summary = exports.summary || (exports.summary = {}));
var stack;
(function (stack) {
    function def(model, stackProps) {
        var groupbyChannel = stackProps.groupbyChannel;
        var fieldChannel = stackProps.fieldChannel;
        var facets = model.facets();
        var stacked = {
            name: data_1.STACKED,
            source: model.dataTable(),
            transform: [{
                    type: 'aggregate',
                    groupby: [model.fieldRef(groupbyChannel)].concat(facets),
                    summarize: [{ ops: ['sum'], field: model.fieldRef(fieldChannel) }]
                }]
        };
        if (facets && facets.length > 0) {
            stacked.transform.push({
                type: 'aggregate',
                groupby: facets,
                summarize: [{
                        ops: ['max'],
                        field: model.fieldRef(fieldChannel, { prefn: 'sum_' })
                    }]
            });
        }
        return stacked;
    }
    stack.def = def;
    ;
})(stack = exports.stack || (exports.stack = {}));
function filterNonPositive(dataTable, model) {
    model.forEach(function (_, channel) {
        if (model.fieldDef(channel).scale.type === 'log') {
            dataTable.transform.push({
                type: 'filter',
                test: model.fieldRef(channel, { datum: 1 }) + ' > 0'
            });
        }
    });
}
exports.filterNonPositive = filterNonPositive;
},{"../bin":16,"../data":31,"../fielddef":33,"../type":50,"../util":51,"./time":30}],22:[function(require,module,exports){
var util = require('../util');
var channel_1 = require('../channel');
var axis_1 = require('./axis');
var scale_1 = require('./scale');
function groupdef(name, opt) {
    opt = opt || {};
    var group = {
        name: name || undefined,
        type: 'group',
        properties: {
            enter: {
                width: opt.width || { field: { group: 'width' } },
                height: opt.height || { field: { group: 'height' } }
            }
        }
    };
    if (opt.from) {
        group.from = opt.from;
    }
    if (opt.x) {
        group.properties.enter.x = opt.x;
    }
    if (opt.y) {
        group.properties.enter.y = opt.y;
    }
    if (opt.axes) {
        group.axes = opt.axes;
    }
    return group;
}
function default_1(group, model, layout, output, singleScaleNames, stats) {
    var enter = group.properties.enter;
    var facetKeys = [], cellAxes = [], from, axesGrp;
    var hasRow = model.has(channel_1.ROW), hasCol = model.has(channel_1.COLUMN);
    enter.fill = { value: model.config('cellBackgroundColor') };
    group.from = { data: group.marks[0].from.data };
    for (var i = 0; i < group.marks.length; i++) {
        var mark = group.marks[i];
        if (mark.from.transform) {
            delete mark.from.data;
        }
        else {
            delete mark.from;
        }
    }
    if (hasRow) {
        if (!model.isDimension(channel_1.ROW)) {
            util.error('Row encoding should be ordinal.');
        }
        enter.y = { scale: channel_1.ROW, field: model.fieldRef(channel_1.ROW) };
        enter.height = { 'value': layout.cellHeight };
        facetKeys.push(model.fieldRef(channel_1.ROW));
        if (hasCol) {
            from = util.duplicate(group.from);
            from.transform = from.transform || [];
            from.transform.unshift({ type: 'facet', groupby: [model.fieldRef(channel_1.COLUMN)] });
        }
        axesGrp = groupdef('x-axes', {
            axes: model.has(channel_1.X) ? [axis_1.compileAxis(channel_1.X, model, layout, stats)] : undefined,
            x: hasCol ? { scale: channel_1.COLUMN, field: model.fieldRef(channel_1.COLUMN) } : { value: 0 },
            width: hasCol && { 'value': layout.cellWidth },
            from: from
        });
        output.marks.unshift(axesGrp);
        (output.axes = output.axes || []);
        output.axes.push(axis_1.compileAxis(channel_1.ROW, model, layout, stats));
    }
    else {
        if (model.has(channel_1.X)) {
            cellAxes.push(axis_1.compileAxis(channel_1.X, model, layout, stats));
        }
    }
    if (hasCol) {
        if (!model.isDimension(channel_1.COLUMN)) {
            util.error('Col encoding should be ordinal.');
        }
        enter.x = { scale: channel_1.COLUMN, field: model.fieldRef(channel_1.COLUMN) };
        enter.width = { 'value': layout.cellWidth };
        facetKeys.push(model.fieldRef(channel_1.COLUMN));
        if (hasRow) {
            from = util.duplicate(group.from);
            from.transform = from.transform || [];
            from.transform.unshift({ type: 'facet', groupby: [model.fieldRef(channel_1.ROW)] });
        }
        axesGrp = groupdef('y-axes', {
            axes: model.has(channel_1.Y) ? [axis_1.compileAxis(channel_1.Y, model, layout, stats)] : undefined,
            y: hasRow && { scale: channel_1.ROW, field: model.fieldRef(channel_1.ROW) },
            x: hasRow && { value: 0 },
            height: hasRow && { 'value': layout.cellHeight },
            from: from
        });
        output.marks.unshift(axesGrp);
        (output.axes = output.axes || []);
        output.axes.push(axis_1.compileAxis(channel_1.COLUMN, model, layout, stats));
    }
    else {
        if (model.has(channel_1.Y)) {
            cellAxes.push(axis_1.compileAxis(channel_1.Y, model, layout, stats));
        }
    }
    output.scales = (output.scales || []).concat(scale_1.compileScales(scale_1.compileScaleNames(enter).concat(singleScaleNames), model, layout, stats, true));
    if (cellAxes.length > 0) {
        group.axes = cellAxes;
    }
    var trans = (group.from.transform || (group.from.transform = []));
    trans.unshift({ type: 'facet', groupby: facetKeys });
    return output;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
},{"../channel":17,"../util":51,"./axis":19,"./scale":26}],23:[function(require,module,exports){
/// <reference path="../../typings/d3-format.d.ts"/>
var d3_format = require('d3-format');
var util_1 = require('../util');
var channel_1 = require('../channel');
var time = require('./time');
var type_1 = require('../type');
var util_2 = require('../util');
function default_1(model, stats) {
    var layout = box(model, stats);
    layout = offset(model, stats, layout);
    return layout;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function box(model, stats) {
    var hasRow = model.has(channel_1.ROW), hasCol = model.has(channel_1.COLUMN), hasX = model.has(channel_1.X), hasY = model.has(channel_1.Y), marktype = model.marktype();
    var xCardinality = hasX && model.isDimension(channel_1.X) ? model.cardinality(channel_1.X, stats) : 1, yCardinality = hasY && model.isDimension(channel_1.Y) ? model.cardinality(channel_1.Y, stats) : 1;
    var useSmallBand = xCardinality > model.config('largeBandMaxCardinality') ||
        yCardinality > model.config('largeBandMaxCardinality');
    var cellWidth, cellHeight, cellPadding = model.config('cellPadding');
    if (hasX) {
        if (model.isOrdinalScale(channel_1.X)) {
            cellWidth = (xCardinality + model.padding(channel_1.X)) * model.bandWidth(channel_1.X, useSmallBand);
        }
        else {
            cellWidth = hasCol || hasRow ? model.fieldDef(channel_1.COLUMN).width : model.config('singleWidth');
        }
    }
    else {
        if (marktype === channel_1.TEXT) {
            cellWidth = model.config('textCellWidth');
        }
        else {
            cellWidth = model.bandWidth(channel_1.X);
        }
    }
    if (hasY) {
        if (model.isOrdinalScale(channel_1.Y)) {
            cellHeight = (yCardinality + model.padding(channel_1.Y)) * model.bandWidth(channel_1.Y, useSmallBand);
        }
        else {
            cellHeight = hasCol || hasRow ? model.fieldDef(channel_1.ROW).height : model.config('singleHeight');
        }
    }
    else {
        cellHeight = model.bandWidth(channel_1.Y);
    }
    var width = cellWidth, height = cellHeight;
    if (hasCol) {
        var colCardinality = model.cardinality(channel_1.COLUMN, stats);
        width = cellWidth * ((1 + cellPadding) * (colCardinality - 1) + 1);
    }
    if (hasRow) {
        var rowCardinality = model.cardinality(channel_1.ROW, stats);
        height = cellHeight * ((1 + cellPadding) * (rowCardinality - 1) + 1);
    }
    return {
        cellWidth: util_2.roundFloat(cellWidth),
        cellHeight: util_2.roundFloat(cellHeight),
        cellPadding: cellPadding,
        width: util_2.roundFloat(width),
        height: util_2.roundFloat(height),
        x: { useSmallBand: useSmallBand },
        y: { useSmallBand: useSmallBand }
    };
}
function getMaxNumberLength(model, channel, fieldStats) {
    var format = model.numberFormat(channel);
    return d3_format.format(format)(fieldStats.max).length;
}
function getMaxLength(model, stats, channel) {
    var fieldDef = model.fieldDef(channel), fieldStats = stats[fieldDef.field];
    if (fieldDef.bin) {
        return getMaxNumberLength(model, channel, fieldStats);
    }
    if (fieldDef.type === type_1.QUANTITATIVE) {
        return getMaxNumberLength(model, channel, fieldStats);
    }
    else if (fieldDef.type === type_1.TEMPORAL) {
        return time.maxLength(model.fieldDef(channel).timeUnit, model);
    }
    else if (model.isTypes(channel, [type_1.NOMINAL, type_1.ORDINAL])) {
        if (fieldStats.type === 'number') {
            return getMaxNumberLength(model, channel, fieldStats);
        }
        else {
            return Math.min(fieldStats.max, fieldDef.axis.labelMaxLength || Infinity);
        }
    }
}
function offset(model, stats, layout) {
    [channel_1.X, channel_1.Y].forEach(function (channel) {
        var extraOffset = channel === channel_1.X ? 20 : 22;
        var fieldDef = model.fieldDef(channel);
        var maxLength;
        if (model.isDimension(channel) || fieldDef.type === type_1.TEMPORAL) {
            maxLength = getMaxLength(model, stats, channel);
        }
        else if (fieldDef.type === type_1.QUANTITATIVE || fieldDef.aggregate === 'count') {
            if (channel === channel_1.Y) {
                maxLength = getMaxLength(model, stats, channel);
            }
        }
        else {
        }
        if (maxLength) {
            util_1.setter(layout, [channel, 'axisTitleOffset'], model.config('characterWidth') * maxLength + extraOffset);
        }
        else {
            util_1.setter(layout, [channel, 'axisTitleOffset'], model.config('characterWidth') * 3 + extraOffset);
        }
    });
    return layout;
}
},{"../channel":17,"../type":50,"../util":51,"./time":30,"d3-format":5}],24:[function(require,module,exports){
var util = require('../util');
var channel_1 = require('../channel');
var time = require('./time');
var type_1 = require('../type');
function compileLegends(model, styleCfg) {
    var defs = [];
    if (model.has(channel_1.COLOR) && model.fieldDef(channel_1.COLOR).legend) {
        defs.push(compileLegend(model, channel_1.COLOR, {
            fill: channel_1.COLOR
        }, styleCfg));
    }
    if (model.has(channel_1.SIZE) && model.fieldDef(channel_1.SIZE).legend) {
        defs.push(compileLegend(model, channel_1.SIZE, {
            size: channel_1.SIZE
        }, styleCfg));
    }
    if (model.has(channel_1.SHAPE) && model.fieldDef(channel_1.SHAPE).legend) {
        defs.push(compileLegend(model, channel_1.SHAPE, {
            shape: channel_1.SHAPE
        }, styleCfg));
    }
    return defs;
}
exports.compileLegends = compileLegends;
function compileLegend(model, channel, def, styleCfg) {
    var legend = model.fieldDef(channel).legend;
    def.title = title(model, channel);
    ['orient', 'format', 'values'].forEach(function (property) {
        var value = legend[property];
        if (value !== undefined) {
            def[property] = value;
        }
    });
    var props = legend.properties || {};
    ['title', 'labels', 'symbols', 'legend'].forEach(function (group) {
        var value = properties[group] ?
            properties[group](model, channel, props[group], styleCfg) :
            props[group];
        if (value !== undefined) {
            def.properties = def.properties || {};
            def.properties[group] = value;
        }
    });
    return def;
}
exports.compileLegend = compileLegend;
function title(model, channel) {
    var leg = model.fieldDef(channel).legend;
    if (leg.title)
        return leg.title;
    return model.fieldTitle(channel);
}
exports.title = title;
var properties;
(function (properties) {
    function labels(model, channel, spec) {
        var fieldDef = model.fieldDef(channel);
        var timeUnit = fieldDef.timeUnit;
        if (fieldDef.type === type_1.TEMPORAL && timeUnit && time.hasScale(timeUnit)) {
            return util.extend({
                text: {
                    scale: 'time-' + timeUnit
                }
            }, spec || {});
        }
        return spec;
    }
    properties.labels = labels;
    function symbols(model, channel, spec, styleCfg) {
        var symbols = {};
        var marktype = model.marktype();
        switch (marktype) {
            case 'bar':
            case 'tick':
            case 'text':
                symbols.stroke = { value: 'transparent' };
                symbols.shape = { value: 'square' };
                break;
            case 'circle':
            case 'square':
                symbols.shape = { value: marktype };
            case 'point':
                if (model.fieldDef(channel_1.SHAPE).filled) {
                    if (model.has(channel_1.COLOR) && channel === channel_1.COLOR) {
                        symbols.fill = { scale: channel_1.COLOR, field: 'data' };
                    }
                    else {
                        symbols.fill = { value: model.fieldDef(channel_1.COLOR).value };
                    }
                    symbols.stroke = { value: 'transparent' };
                }
                else {
                    if (model.has(channel_1.COLOR) && channel === channel_1.COLOR) {
                        symbols.stroke = { scale: channel_1.COLOR, field: 'data' };
                    }
                    else {
                        symbols.stroke = { value: model.fieldDef(channel_1.COLOR).value };
                    }
                    symbols.fill = { value: 'transparent' };
                    symbols.strokeWidth = { value: model.config('strokeWidth') };
                }
                break;
            case 'line':
            case 'area':
                break;
        }
        var opacity = model.fieldDef(channel_1.COLOR).opacity || styleCfg.opacity;
        if (opacity) {
            symbols.opacity = { value: opacity };
        }
        symbols = util.extend(symbols, spec || {});
        return util.keys(symbols).length > 0 ? symbols : undefined;
    }
    properties.symbols = symbols;
})(properties || (properties = {}));
},{"../channel":17,"../type":50,"../util":51,"./time":30}],25:[function(require,module,exports){
var channel_1 = require('../channel');
var type_1 = require('../type');
function compileMarks(model, layout, style) {
    var defs = [], mark = exports[model.marktype()], from = model.dataTable();
    if (model.marktype() === channel_1.TEXT && model.has(channel_1.COLOR)) {
        var bg = {
            x: { value: 0 },
            y: { value: 0 },
            x2: { value: layout.cellWidth },
            y2: { value: layout.cellHeight },
            fill: { scale: channel_1.COLOR, field: model.fieldRef(channel_1.COLOR) }
        };
        defs.push({
            type: 'rect',
            from: { data: from },
            properties: { enter: bg, update: bg }
        });
    }
    var p = mark.prop(model, layout, style);
    defs.push({
        type: mark.type,
        from: { data: from },
        properties: { update: p }
    });
    return defs;
}
exports.compileMarks = compileMarks;
exports.bar = {
    type: 'rect',
    prop: bar_props
};
exports.line = {
    type: 'line',
    prop: line_props
};
exports.area = {
    type: 'area',
    prop: area_props
};
exports.tick = {
    type: 'rect',
    prop: tick_props
};
exports.circle = {
    type: 'symbol',
    prop: filled_point_props('circle')
};
exports.square = {
    type: 'symbol',
    prop: filled_point_props('square')
};
exports.point = {
    type: 'symbol',
    prop: point_props
};
exports.text = {
    type: 'text',
    prop: text_props
};
function bar_props(e, layout, style) {
    var p = {};
    if (e.fieldDef(channel_1.X).bin) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_start' }), offset: 1 };
        p.x2 = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_end' }) };
    }
    else if (e.isMeasure(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X) };
        if (!e.has(channel_1.Y) || e.isDimension(channel_1.Y)) {
            p.x2 = { value: 0 };
        }
    }
    else {
        if (e.has(channel_1.X)) {
            p.xc = { scale: channel_1.X, field: e.fieldRef(channel_1.X) };
        }
        else {
            p.x = { value: 0, offset: e.config('singleBarOffset') };
        }
    }
    if (!p.x2) {
        if (!e.has(channel_1.X) || e.isOrdinalScale(channel_1.X)) {
            if (e.has(channel_1.SIZE)) {
                p.width = { scale: channel_1.SIZE, field: e.fieldRef(channel_1.SIZE) };
            }
            else {
                p.width = {
                    value: e.bandWidth(channel_1.X, layout.x.useSmallBand),
                    offset: -1
                };
            }
        }
        else {
            p.width = { value: 2 };
        }
    }
    if (e.fieldDef(channel_1.Y).bin) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_start' }) };
        p.y2 = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_end' }), offset: 1 };
    }
    else if (e.isMeasure(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y) };
        p.y2 = { field: { group: 'height' } };
    }
    else {
        if (e.has(channel_1.Y)) {
            p.yc = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y) };
        }
        else {
            p.y2 = {
                field: { group: 'height' },
                offset: -e.config('singleBarOffset')
            };
        }
        if (e.has(channel_1.SIZE)) {
            p.height = { scale: channel_1.SIZE, field: e.fieldRef(channel_1.SIZE) };
        }
        else {
            p.height = {
                value: e.bandWidth(channel_1.Y, layout.y.useSmallBand),
                offset: -1
            };
        }
    }
    if (e.has(channel_1.COLOR)) {
        p.fill = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
    }
    else {
        p.fill = { value: e.fieldDef(channel_1.COLOR).value };
    }
    var opacity = e.fieldDef(channel_1.COLOR).opacity;
    if (opacity)
        p.opacity = { value: opacity };
    return p;
}
function point_props(e, layout, style) {
    var p = {};
    if (e.has(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_mid' }) };
    }
    else if (!e.has(channel_1.X)) {
        p.x = { value: e.bandWidth(channel_1.X, layout.x.useSmallBand) / 2 };
    }
    if (e.has(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_mid' }) };
    }
    else if (!e.has(channel_1.Y)) {
        p.y = { value: e.bandWidth(channel_1.Y, layout.y.useSmallBand) / 2 };
    }
    if (e.has(channel_1.SIZE)) {
        p.size = { scale: channel_1.SIZE, field: e.fieldRef(channel_1.SIZE) };
    }
    else if (!e.has(channel_1.SIZE)) {
        p.size = { value: e.fieldDef(channel_1.SIZE).value };
    }
    if (e.has(channel_1.SHAPE)) {
        p.shape = { scale: channel_1.SHAPE, field: e.fieldRef(channel_1.SHAPE) };
    }
    else if (!e.has(channel_1.SHAPE)) {
        p.shape = { value: e.fieldDef(channel_1.SHAPE).value };
    }
    if (e.fieldDef(channel_1.SHAPE).filled) {
        if (e.has(channel_1.COLOR)) {
            p.fill = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
        }
        else if (!e.has(channel_1.COLOR)) {
            p.fill = { value: e.fieldDef(channel_1.COLOR).value };
        }
    }
    else {
        if (e.has(channel_1.COLOR)) {
            p.stroke = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
        }
        else if (!e.has(channel_1.COLOR)) {
            p.stroke = { value: e.fieldDef(channel_1.COLOR).value };
        }
        p.strokeWidth = { value: e.config('strokeWidth') };
    }
    var opacity = e.fieldDef(channel_1.COLOR).opacity || style.opacity;
    if (opacity)
        p.opacity = { value: opacity };
    return p;
}
function line_props(e, layout, style) {
    var p = {};
    if (e.has(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_mid' }) };
    }
    else if (!e.has(channel_1.X)) {
        p.x = { value: 0 };
    }
    if (e.has(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_mid' }) };
    }
    else if (!e.has(channel_1.Y)) {
        p.y = { field: { group: 'height' } };
    }
    if (e.has(channel_1.COLOR)) {
        p.stroke = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
    }
    else if (!e.has(channel_1.COLOR)) {
        p.stroke = { value: e.fieldDef(channel_1.COLOR).value };
    }
    var opacity = e.fieldDef(channel_1.COLOR).opacity;
    if (opacity)
        p.opacity = { value: opacity };
    p.strokeWidth = { value: e.config('strokeWidth') };
    return p;
}
function area_props(e, layout, style) {
    var p = {};
    if (e.isMeasure(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X) };
        if (e.isDimension(channel_1.Y)) {
            p.x2 = { scale: channel_1.X, value: 0 };
            p.orient = { value: 'horizontal' };
        }
    }
    else if (e.has(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_mid' }) };
    }
    else {
        p.x = { value: 0 };
    }
    if (e.isMeasure(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y) };
        p.y2 = { scale: channel_1.Y, value: 0 };
    }
    else if (e.has(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_mid' }) };
    }
    else {
        p.y = { field: { group: 'height' } };
    }
    if (e.has(channel_1.COLOR)) {
        p.fill = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
    }
    else if (!e.has(channel_1.COLOR)) {
        p.fill = { value: e.fieldDef(channel_1.COLOR).value };
    }
    var opacity = e.fieldDef(channel_1.COLOR).opacity;
    if (opacity)
        p.opacity = { value: opacity };
    return p;
}
function tick_props(e, layout, style) {
    var p = {};
    if (e.has(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_mid' }) };
        if (e.isDimension(channel_1.X)) {
            p.x.offset = -e.bandWidth(channel_1.X, layout.x.useSmallBand) / 3;
        }
    }
    else if (!e.has(channel_1.X)) {
        p.x = { value: 0 };
    }
    if (e.has(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_mid' }) };
        if (e.isDimension(channel_1.Y)) {
            p.y.offset = -e.bandWidth(channel_1.Y, layout.y.useSmallBand) / 3;
        }
    }
    else if (!e.has(channel_1.Y)) {
        p.y = { value: 0 };
    }
    if (!e.has(channel_1.X) || e.isDimension(channel_1.X)) {
        p.width = { value: e.bandWidth(channel_1.X, layout.y.useSmallBand) / 1.5 };
    }
    else {
        p.width = { value: 1 };
    }
    if (!e.has(channel_1.Y) || e.isDimension(channel_1.Y)) {
        p.height = { value: e.bandWidth(channel_1.Y, layout.y.useSmallBand) / 1.5 };
    }
    else {
        p.height = { value: 1 };
    }
    if (e.has(channel_1.COLOR)) {
        p.fill = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
    }
    else {
        p.fill = { value: e.fieldDef(channel_1.COLOR).value };
    }
    var opacity = e.fieldDef(channel_1.COLOR).opacity || style.opacity;
    if (opacity)
        p.opacity = { value: opacity };
    return p;
}
function filled_point_props(shape) {
    return function (e, layout, style) {
        var p = {};
        if (e.has(channel_1.X)) {
            p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_mid' }) };
        }
        else if (!e.has(channel_1.X)) {
            p.x = { value: e.bandWidth(channel_1.X, layout.x.useSmallBand) / 2 };
        }
        if (e.has(channel_1.Y)) {
            p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_mid' }) };
        }
        else if (!e.has(channel_1.Y)) {
            p.y = { value: e.bandWidth(channel_1.Y, layout.y.useSmallBand) / 2 };
        }
        if (e.has(channel_1.SIZE)) {
            p.size = { scale: channel_1.SIZE, field: e.fieldRef(channel_1.SIZE) };
        }
        else if (!e.has(channel_1.X)) {
            p.size = { value: e.fieldDef(channel_1.SIZE).value };
        }
        p.shape = { value: shape };
        if (e.has(channel_1.COLOR)) {
            p.fill = { scale: channel_1.COLOR, field: e.fieldRef(channel_1.COLOR) };
        }
        else if (!e.has(channel_1.COLOR)) {
            p.fill = { value: e.fieldDef(channel_1.COLOR).value };
        }
        var opacity = e.fieldDef(channel_1.COLOR).opacity || style.opacity;
        if (opacity)
            p.opacity = { value: opacity };
        return p;
    };
}
function text_props(e, layout, style) {
    var p = {}, fieldDef = e.fieldDef(channel_1.TEXT);
    if (e.has(channel_1.X)) {
        p.x = { scale: channel_1.X, field: e.fieldRef(channel_1.X, { binSuffix: '_mid' }) };
    }
    else if (!e.has(channel_1.X)) {
        if (e.has(channel_1.TEXT) && e.fieldDef(channel_1.TEXT).type === type_1.QUANTITATIVE) {
            p.x = { value: layout.cellWidth - 5 };
        }
        else {
            p.x = { value: e.bandWidth(channel_1.X, layout.x.useSmallBand) / 2 };
        }
    }
    if (e.has(channel_1.Y)) {
        p.y = { scale: channel_1.Y, field: e.fieldRef(channel_1.Y, { binSuffix: '_mid' }) };
    }
    else if (!e.has(channel_1.Y)) {
        p.y = { value: e.bandWidth(channel_1.Y, layout.y.useSmallBand) / 2 };
    }
    if (e.has(channel_1.SIZE)) {
        p.fontSize = { scale: channel_1.SIZE, field: e.fieldRef(channel_1.SIZE) };
    }
    else if (!e.has(channel_1.SIZE)) {
        p.fontSize = { value: fieldDef.font.size };
    }
    p.fill = { value: fieldDef.color };
    var opacity = e.fieldDef(channel_1.COLOR).opacity || style.opacity;
    if (opacity)
        p.opacity = { value: opacity };
    if (e.has(channel_1.TEXT)) {
        if (e.fieldDef(channel_1.TEXT).type === type_1.QUANTITATIVE) {
            var numberFormat = fieldDef.format !== undefined ?
                fieldDef.format : e.numberFormat(channel_1.TEXT);
            p.text = { template: '{{' + e.fieldRef(channel_1.TEXT, { datum: true }) + ' | number:\'' +
                    numberFormat + '\'}}' };
            p.align = { value: fieldDef.align };
        }
        else {
            p.text = { field: e.fieldRef(channel_1.TEXT) };
        }
    }
    else {
        p.text = { value: fieldDef.placeholder };
    }
    p.font = { value: fieldDef.font.family };
    p.fontWeight = { value: fieldDef.font.weight };
    p.fontStyle = { value: fieldDef.font.style };
    p.baseline = { value: fieldDef.baseline };
    return p;
}
},{"../channel":17,"../type":50}],26:[function(require,module,exports){
/// <reference path="../../typings/colorbrewer.d.ts"/>
/// <reference path="../../typings/d3-color.d.ts"/>
var colorbrewer = require('colorbrewer');
var d3_color_1 = require('d3-color');
var util = require('../util');
var aggregate_1 = require('../aggregate');
var channel_1 = require('../channel');
var data_1 = require('../data');
var time = require('./time');
var type_1 = require('../type');
function compileScaleNames(props) {
    return util.keys(util.keys(props).reduce(function (a, x) {
        if (props[x] && props[x].scale)
            a[props[x].scale] = 1;
        return a;
    }, {}));
}
exports.compileScaleNames = compileScaleNames;
function compileScales(names, model, layout, stats, facet) {
    return names.reduce(function (a, channel) {
        var scaleDef = {};
        scaleDef.name = channel;
        var t = scaleDef.type = type(channel, model);
        scaleDef.domain = domain(model, channel, t, facet);
        [
            'range', 'reverse', 'round',
            'clamp', 'nice',
            'exponent', 'zero',
            'bandWidth', 'outerPadding', 'padding', 'points'
        ].forEach(function (property) {
            var value = exports[property](model, channel, t, layout, stats);
            if (value !== undefined) {
                scaleDef[property] = value;
            }
        });
        return (a.push(scaleDef), a);
    }, []);
}
exports.compileScales = compileScales;
function type(channel, model) {
    var fieldDef = model.fieldDef(channel);
    switch (fieldDef.type) {
        case type_1.NOMINAL:
        case type_1.ORDINAL:
            return 'ordinal';
        case type_1.TEMPORAL:
            return fieldDef.timeUnit ? time.scale.type(fieldDef.timeUnit, channel) : 'time';
        case type_1.QUANTITATIVE:
            if (model.bin(channel)) {
                return channel === channel_1.ROW || channel === channel_1.COLUMN || channel === channel_1.SHAPE ? 'ordinal' : 'linear';
            }
            return fieldDef.scale.type;
    }
}
exports.type = type;
function domain(model, channel, type, facet) {
    if (facet === void 0) { facet = false; }
    var fieldDef = model.fieldDef(channel);
    if (fieldDef.scale.domain) {
        return fieldDef.scale.domain;
    }
    if (fieldDef.type === type_1.TEMPORAL) {
        var range = time.scale.domain(fieldDef.timeUnit, channel);
        if (range)
            return range;
    }
    var stack = model.stack();
    if (stack && channel === stack.fieldChannel) {
        return {
            data: data_1.STACKED,
            field: model.fieldRef(channel, {
                prefn: (facet ? 'max_' : '') + 'sum_'
            })
        };
    }
    var useRawDomain = _useRawDomain(model, channel);
    var sort = domainSort(model, channel, type);
    if (useRawDomain) {
        return {
            data: data_1.SOURCE,
            field: model.fieldRef(channel, { noAggregate: true })
        };
    }
    else if (fieldDef.bin) {
        return {
            data: model.dataTable(),
            field: type === 'ordinal' ?
                model.fieldRef(channel, { binSuffix: '_start' }) :
                [
                    model.fieldRef(channel, { binSuffix: '_start' }),
                    model.fieldRef(channel, { binSuffix: '_end' })
                ]
        };
    }
    else if (sort) {
        return {
            data: sort.op ? data_1.SOURCE : model.dataTable(),
            field: model.fieldRef(channel),
            sort: sort
        };
    }
    else {
        return {
            data: model.dataTable(),
            field: model.fieldRef(channel)
        };
    }
}
exports.domain = domain;
function domainSort(model, channel, type) {
    var sort = model.fieldDef(channel).sort;
    if (sort === 'ascending' || sort === 'descending') {
        return true;
    }
    if (type === 'ordinal' && util.isObject(sort)) {
        return {
            op: sort.op,
            field: sort.field
        };
    }
    return undefined;
}
exports.domainSort = domainSort;
function reverse(model, channel) {
    var sort = model.fieldDef(channel).sort;
    return sort && (sort === 'descending' || (sort.order === 'descending')) ? true : undefined;
}
exports.reverse = reverse;
function _useRawDomain(model, channel) {
    var fieldDef = model.fieldDef(channel);
    var scaleUseRawDomain = fieldDef.scale.useRawDomain;
    var useRawDomainEnabled = scaleUseRawDomain !== undefined ?
        scaleUseRawDomain : model.config('useRawDomain');
    return useRawDomainEnabled &&
        fieldDef.aggregate &&
        aggregate_1.SHARED_DOMAIN_OPS.indexOf(fieldDef.aggregate) >= 0 &&
        ((fieldDef.type === type_1.QUANTITATIVE && !fieldDef.bin) ||
            (fieldDef.type === type_1.TEMPORAL &&
                (!fieldDef.timeUnit || !time.isOrdinalFn(fieldDef.timeUnit))));
}
exports._useRawDomain = _useRawDomain;
function bandWidth(model, channel, type, layout) {
    // TODO: eliminate layout
    switch (channel) {
        case channel_1.X:
        case channel_1.Y:
            if (type === 'ordinal') {
                return model.bandWidth(channel, layout[channel].useSmallBand);
            }
            break;
        case channel_1.ROW:
            return layout.cellHeight;
        case channel_1.COLUMN:
            return layout.cellWidth;
    }
    return undefined;
}
exports.bandWidth = bandWidth;
function clamp(model, channel) {
    return model.fieldDef(channel).scale.clamp;
}
exports.clamp = clamp;
function exponent(model, channel) {
    return model.fieldDef(channel).scale.exponent;
}
exports.exponent = exponent;
function nice(model, channel, type) {
    if (model.fieldDef(channel).scale.nice !== undefined) {
        return model.fieldDef(channel).scale.nice;
    }
    switch (channel) {
        case channel_1.X:
        case channel_1.Y:
            if (type === 'time' || type === 'ordinal') {
                return undefined;
            }
            return true;
        case channel_1.ROW:
        case channel_1.COLUMN:
            return true;
    }
    return undefined;
}
exports.nice = nice;
function outerPadding(model, channel, type) {
    if (type === 'ordinal') {
        if (model.fieldDef(channel).scale.outerPadding !== undefined) {
            return model.fieldDef(channel).scale.outerPadding;
        }
        if (channel === channel_1.ROW || channel === channel_1.COLUMN) {
            return 0;
        }
    }
    return undefined;
}
exports.outerPadding = outerPadding;
function padding(model, channel, type) {
    if (type === 'ordinal') {
        return model.padding(channel);
    }
    return undefined;
}
exports.padding = padding;
function points(model, channel, type) {
    if (type === 'ordinal') {
        if (model.fieldDef(channel).scale.points !== undefined) {
            return model.fieldDef(channel).scale.points;
        }
        switch (channel) {
            case channel_1.X:
            case channel_1.Y:
                return true;
        }
    }
    return undefined;
}
exports.points = points;
function range(model, channel, type, layout, stats) {
    var fieldDef = model.fieldDef(channel);
    if (fieldDef.scale.range) {
        return fieldDef.scale.range;
    }
    switch (channel) {
        case channel_1.X:
            return layout.cellWidth ? [0, layout.cellWidth] : 'width';
        case channel_1.Y:
            if (type === 'ordinal') {
                return layout.cellHeight ?
                    (fieldDef.bin ? [layout.cellHeight, 0] : [0, layout.cellHeight]) :
                    'height';
            }
            return layout.cellHeight ? [layout.cellHeight, 0] : 'height';
        case channel_1.SIZE:
            if (model.is('bar')) {
                return [3, Math.max(model.bandWidth(channel_1.X), model.bandWidth(channel_1.Y))];
            }
            else if (model.is(channel_1.TEXT)) {
                return [8, 40];
            }
            var bandWidth = Math.min(model.bandWidth(channel_1.X), model.bandWidth(channel_1.Y)) - 1;
            return [10, 0.8 * bandWidth * bandWidth];
        case channel_1.SHAPE:
            return 'shapes';
        case channel_1.COLOR:
            return color(model, channel, type, stats);
    }
    return undefined;
}
exports.range = range;
function round(model, channel) {
    if (model.fieldDef(channel).scale.round !== undefined) {
        return model.fieldDef(channel).scale.round;
    }
    switch (channel) {
        case channel_1.X:
        case channel_1.Y:
        case channel_1.ROW:
        case channel_1.COLUMN:
        case channel_1.SIZE:
            return true;
    }
    return undefined;
}
exports.round = round;
function zero(model, channel) {
    var fieldDef = model.fieldDef(channel);
    var timeUnit = fieldDef.timeUnit;
    if (fieldDef.scale.zero !== undefined) {
        return fieldDef.scale.zero;
    }
    if (fieldDef.type === type_1.TEMPORAL) {
        if (timeUnit === 'year') {
            return false;
        }
        return undefined;
    }
    if (fieldDef.bin) {
        return false;
    }
    return channel === channel_1.X || channel === channel_1.Y ?
        undefined :
        false;
}
exports.zero = zero;
function color(model, channel, scaleType, stats) {
    var fieldDef = model.fieldDef(channel_1.COLOR), colorScale = fieldDef.scale, cardinality = model.cardinality(channel_1.COLOR, stats), type = fieldDef.type;
    var range = colorScale.range;
    if (range === undefined) {
        var ordinalPalette = colorScale.ordinalPalette, quantitativeRange = colorScale.quantitativeRange;
        if (scaleType === 'ordinal') {
            if (type === type_1.NOMINAL) {
                if (cardinality <= 10) {
                    range = colorScale.c10palette;
                }
                else {
                    range = colorScale.c20palette;
                }
                return colors.palette(range, cardinality, type);
            }
            else {
                if (ordinalPalette) {
                    return colors.palette(ordinalPalette, cardinality, type);
                }
                return colors.interpolate(quantitativeRange[0], quantitativeRange[1], cardinality);
            }
        }
        else {
            return [quantitativeRange[0], quantitativeRange[1]];
        }
    }
}
exports.color = color;
var colors;
(function (colors) {
    function palette(range, cardinality, type) {
        switch (range) {
            case 'category10k':
                return ['#2ca02c', '#e377c2', '#7f7f7f', '#17becf', '#8c564b', '#d62728', '#bcbd22', '#9467bd', '#ff7f0e', '#1f77b4'];
            case 'category10':
                return ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
            case 'category20':
                return ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'];
            case 'category20b':
                return ['#393b79', '#5254a3', '#6b6ecf', '#9c9ede', '#637939', '#8ca252', '#b5cf6b', '#cedb9c', '#8c6d31', '#bd9e39', '#e7ba52', '#e7cb94', '#843c39', '#ad494a', '#d6616b', '#e7969c', '#7b4173', '#a55194', '#ce6dbd', '#de9ed6'];
            case 'category20c':
                return ['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#e6550d', '#fd8d3c', '#fdae6b', '#fdd0a2', '#31a354', '#74c476', '#a1d99b', '#c7e9c0', '#756bb1', '#9e9ac8', '#bcbddc', '#dadaeb', '#636363', '#969696', '#bdbdbd', '#d9d9d9'];
        }
        if (range in colorbrewer) {
            var palette = colorbrewer[range];
            if (cardinality in palette)
                return palette[cardinality];
            if (type === type_1.NOMINAL) {
                return palette[Math.max.apply(null, util.keys(palette))];
            }
            var ps = cardinality < 3 ? 3 : Math.max.apply(null, util.keys(palette)), from = 0, to = ps - 1;
            return colors.interpolate(palette[ps][from], palette[ps][to], cardinality);
        }
        return range;
    }
    colors.palette = palette;
    function interpolate(start, end, cardinality) {
        var interpolator = d3_color_1.interpolateHsl(start, end);
        return util.range(cardinality).map(function (i) { return interpolator(i * 1.0 / (cardinality - 1)); });
    }
    colors.interpolate = interpolate;
})(colors = exports.colors || (exports.colors = {}));
},{"../aggregate":15,"../channel":17,"../data":31,"../type":50,"../util":51,"./time":30,"colorbrewer":3,"d3-color":4}],27:[function(require,module,exports){
var util = require('../util');
function default_1(model, mdef, stackProps) {
    var groupby = stackProps.groupbyChannel;
    var fieldChannel = stackProps.fieldChannel;
    var valName = model.fieldRef(fieldChannel);
    var startField = valName + '_start';
    var endField = valName + '_end';
    var transforms = [];
    if (model.marktype() === 'area') {
        transforms.push({
            type: 'impute',
            field: model.fieldRef(fieldChannel),
            groupby: [model.fieldRef(stackProps.stackChannel)],
            orderby: [model.fieldRef(groupby)],
            method: 'value',
            value: 0
        });
    }
    var sortby = stackProps.config.sort === 'descending' ?
        '-' + model.fieldRef(stackProps.stackChannel) :
        stackProps.config.sort === 'ascending' ?
            model.fieldRef(stackProps.stackChannel) :
            util.isObject(stackProps.config.sort) ?
                stackProps.config.sort :
                '-' + model.fieldRef(stackProps.stackChannel);
    var stackTransform = {
        type: 'stack',
        groupby: [model.fieldRef(groupby)],
        field: model.fieldRef(fieldChannel),
        sortby: sortby,
        output: { start: startField, end: endField }
    };
    if (stackProps.config.offset) {
        stackTransform.offset = stackProps.config.offset;
    }
    transforms.push(stackTransform);
    mdef.from.transform = transforms;
    mdef.properties.update[fieldChannel] = {
        scale: fieldChannel,
        field: startField
    };
    mdef.properties.update[fieldChannel + '2'] = {
        scale: fieldChannel,
        field: endField
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
},{"../util":51}],28:[function(require,module,exports){
var vlFieldDef = require('../fielddef');
var channel_1 = require('../channel');
function default_1(model, stats) {
    return {
        opacity: estimateOpacity(model, stats),
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
function estimateOpacity(model, stats) {
    if (!stats) {
        return 1;
    }
    var numPoints = 0;
    if (model.isAggregate()) {
        numPoints = 1;
        model.forEach(function (fieldDef, channel) {
            if (channel !== channel_1.ROW && channel !== channel_1.COLUMN &&
                !((channel === channel_1.X || channel === channel_1.Y) &&
                    vlFieldDef.isOrdinalScale(fieldDef))) {
                numPoints *= model.cardinality(channel, stats);
            }
        });
    }
    else {
        if (!stats['*'])
            return 1;
        numPoints = stats['*'].max;
        var numMultiples = 1;
        if (model.has(channel_1.ROW)) {
            numMultiples *= model.cardinality(channel_1.ROW, stats);
        }
        if (model.has(channel_1.COLUMN)) {
            numMultiples *= model.cardinality(channel_1.COLUMN, stats);
        }
        numPoints /= numMultiples;
    }
    var opacity = 0;
    if (numPoints <= 25) {
        opacity = 1;
    }
    else if (numPoints < 200) {
        opacity = 0.8;
    }
    else if (numPoints < 1000 || model.is('tick')) {
        opacity = 0.7;
    }
    else {
        opacity = 0.3;
    }
    return opacity;
}
},{"../channel":17,"../fielddef":33}],29:[function(require,module,exports){
function default_1(group, mdef, details) {
    var m = group.marks;
    var g = {
        name: 'subfacet',
        type: 'group',
        from: mdef.from,
        properties: {
            enter: {
                width: { field: { group: 'width' } },
                height: { field: { group: 'height' } }
            }
        },
        marks: m
    };
    group.marks = [g];
    delete mdef.from;
    var trans = (g.from.transform || (g.from.transform = []));
    trans.push({ type: 'facet', groupby: details });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
},{}],30:[function(require,module,exports){
/// <reference path="../../typings/d3-time-format.d.ts"/>
var d3_time_format_1 = require('d3-time-format');
var util = require('../util');
var channel_1 = require('../channel');
var type_1 = require('../type');
var LONG_DATE = new Date(Date.UTC(2014, 8, 17));
function cardinality(fieldDef, stats, filterNull, type) {
    var timeUnit = fieldDef.timeUnit;
    switch (timeUnit) {
        case 'seconds': return 60;
        case 'minutes': return 60;
        case 'hours': return 24;
        case 'day': return 7;
        case 'date': return 31;
        case 'month': return 12;
        case 'year':
            var stat = stats[fieldDef.field], yearstat = stats['year_' + fieldDef.field];
            if (!yearstat) {
                return null;
            }
            return yearstat.distinct -
                (stat.missing > 0 && filterNull[type] ? 1 : 0);
    }
    return null;
}
exports.cardinality = cardinality;
function formula(timeUnit, fieldRef) {
    var fn = 'utc' + timeUnit;
    return fn + '(' + fieldRef + ')';
}
exports.formula = formula;
function maxLength(timeUnit, model) {
    switch (timeUnit) {
        case 'seconds':
        case 'minutes':
        case 'hours':
        case 'date':
            return 2;
        case 'month':
        case 'day':
            var rng = range(timeUnit, model);
            if (rng) {
                return Math.max.apply(null, rng.map(function (r) { return r.length; }));
            }
            return 2;
        case 'year':
            return 4;
    }
    var timeFormat = model.config('timeFormat');
    return d3_time_format_1.utcFormat(timeFormat)(LONG_DATE).length;
}
exports.maxLength = maxLength;
function range(timeUnit, model) {
    var labelLength = model.config('timeScaleLabelLength'), scaleLabel;
    switch (timeUnit) {
        case 'day':
            scaleLabel = model.config('dayScaleLabel');
            break;
        case 'month':
            scaleLabel = model.config('monthScaleLabel');
            break;
    }
    if (scaleLabel) {
        return labelLength ? scaleLabel.map(function (s) { return s.substr(0, labelLength); }) : scaleLabel;
    }
    return;
}
exports.range = range;
function scales(model) {
    var scales = model.reduce(function (scales, fieldDef) {
        var timeUnit = fieldDef.timeUnit;
        if (fieldDef.type === type_1.TEMPORAL && timeUnit && !scales[timeUnit]) {
            var scaleDef = scale.def(fieldDef.timeUnit, model);
            if (scaleDef)
                scales[timeUnit] = scaleDef;
        }
        return scales;
    }, {});
    return util.vals(scales);
}
exports.scales = scales;
function isOrdinalFn(timeUnit) {
    switch (timeUnit) {
        case 'seconds':
        case 'minutes':
        case 'hours':
        case 'day':
        case 'date':
        case 'month':
            return true;
    }
    return false;
}
exports.isOrdinalFn = isOrdinalFn;
var scale;
(function (scale) {
    function def(timeUnit, model) {
        var rangeDef = range(timeUnit, model);
        if (rangeDef) {
            return {
                name: 'time-' + timeUnit,
                type: 'ordinal',
                domain: scale.domain(timeUnit),
                range: rangeDef
            };
        }
        return null;
    }
    scale.def = def;
    function type(timeUnit, channel) {
        if (channel === channel_1.COLOR) {
            return 'linear';
        }
        return isOrdinalFn(timeUnit) || channel === channel_1.COLUMN || channel === channel_1.ROW ? 'ordinal' : 'linear';
    }
    scale.type = type;
    function domain(timeUnit, channel) {
        var isColor = channel === channel_1.COLOR;
        switch (timeUnit) {
            case 'seconds':
            case 'minutes': return isColor ? [0, 59] : util.range(0, 60);
            case 'hours': return isColor ? [0, 23] : util.range(0, 24);
            case 'day': return isColor ? [0, 6] : util.range(0, 7);
            case 'date': return isColor ? [1, 31] : util.range(1, 32);
            case 'month': return isColor ? [0, 11] : util.range(0, 12);
        }
        return null;
    }
    scale.domain = domain;
})(scale = exports.scale || (exports.scale = {}));
function hasScale(timeUnit) {
    switch (timeUnit) {
        case 'day':
        case 'month':
            return true;
    }
    return false;
}
exports.hasScale = hasScale;
},{"../channel":17,"../type":50,"../util":51,"d3-time-format":6}],31:[function(require,module,exports){
/*
 * Constants and utilities for data.
 */
var util = require('./util');
var type_1 = require('./type');
exports.SUMMARY = 'summary';
exports.SOURCE = 'source';
exports.STACKED = 'stacked';
exports.types = {
    'boolean': type_1.NOMINAL,
    'number': type_1.QUANTITATIVE,
    'integer': type_1.QUANTITATIVE,
    'date': type_1.TEMPORAL,
    'string': type_1.NOMINAL
};
function stats(data) {
    var summary = util.summary(data);
    return summary.reduce(function (s, profile) {
        s[profile.field] = profile;
        return s;
    }, {
        '*': {
            max: data.length,
            min: 0
        }
    });
}
exports.stats = stats;
},{"./type":50,"./util":51}],32:[function(require,module,exports){
var channel_1 = require('./channel');
function countRetinal(encoding) {
    var count = 0;
    if (encoding.color)
        count++;
    if (encoding.size)
        count++;
    if (encoding.shape)
        count++;
    return count;
}
exports.countRetinal = countRetinal;
function has(encoding, channel) {
    var fieldDef = encoding && encoding[channel];
    return fieldDef && fieldDef.field;
}
exports.has = has;
function isAggregate(encoding) {
    for (var k in encoding) {
        if (has(encoding, k) && encoding[k].aggregate) {
            return true;
        }
    }
    return false;
}
exports.isAggregate = isAggregate;
function forEach(encoding, f) {
    var i = 0;
    channel_1.CHANNELS.forEach(function (channel) {
        if (has(encoding, channel)) {
            f(encoding[channel], channel, i++);
        }
    });
}
exports.forEach = forEach;
function map(encoding, f) {
    var arr = [];
    channel_1.CHANNELS.forEach(function (k) {
        if (has(encoding, k)) {
            arr.push(f(encoding[k], k, encoding));
        }
    });
    return arr;
}
exports.map = map;
function reduce(encoding, f, init) {
    var r = init;
    channel_1.CHANNELS.forEach(function (k) {
        if (has(encoding, k)) {
            r = f(r, encoding[k], k, encoding);
        }
    });
    return r;
}
exports.reduce = reduce;
function fields(encoding) {
    return reduce(encoding, function (m, fieldDef) {
        var fieldList = m[fieldDef.field] = m[fieldDef.field] || [];
        var containsType = fieldList.containsType = fieldList.containsType || {};
        if (fieldList.indexOf(fieldDef) === -1) {
            fieldList.push(fieldDef);
            containsType[fieldDef.type] = true;
        }
        return m;
    }, {});
}
exports.fields = fields;
},{"./channel":17}],33:[function(require,module,exports){
// utility for a field definition object
var bin_1 = require('./bin');
var util = require('./util');
var time = require('./compiler/time');
var type_1 = require('./type');
function fieldRef(fieldDef, opt) {
    opt = opt || {};
    var f = (opt.datum ? 'datum.' : '') + (opt.prefn || ''), field = fieldDef.field;
    if (isCount(fieldDef)) {
        return f + 'count';
    }
    else if (opt.fn) {
        return f + opt.fn + '_' + field;
    }
    else if (!opt.nofn && fieldDef.bin) {
        var binSuffix = opt.binSuffix || '_start';
        return f + 'bin_' + field + binSuffix;
    }
    else if (!opt.nofn && !opt.noAggregate && fieldDef.aggregate) {
        return f + fieldDef.aggregate + '_' + field;
    }
    else if (!opt.nofn && fieldDef.timeUnit) {
        return f + fieldDef.timeUnit + '_' + field;
    }
    else {
        return f + field;
    }
}
exports.fieldRef = fieldRef;
function isTypes(fieldDef, types) {
    for (var t = 0; t < types.length; t++) {
        if (fieldDef.type === types[t]) {
            return true;
        }
    }
    return false;
}
exports.isTypes = isTypes;
function isOrdinalScale(fieldDef) {
    return isTypes(fieldDef, [type_1.NOMINAL, type_1.ORDINAL]) ||
        (fieldDef.type === type_1.TEMPORAL && fieldDef.timeUnit && time.isOrdinalFn(fieldDef.timeUnit));
}
exports.isOrdinalScale = isOrdinalScale;
function _isFieldDimension(fieldDef) {
    return isTypes(fieldDef, [type_1.NOMINAL, type_1.ORDINAL]) || !!fieldDef.bin ||
        (fieldDef.type === type_1.TEMPORAL && !!fieldDef.timeUnit);
}
function isDimension(fieldDef) {
    return fieldDef && _isFieldDimension(fieldDef);
}
exports.isDimension = isDimension;
function isMeasure(fieldDef) {
    return fieldDef && !_isFieldDimension(fieldDef);
}
exports.isMeasure = isMeasure;
function count() {
    return { field: '*', aggregate: 'count', type: type_1.QUANTITATIVE, displayName: exports.COUNT_DISPLAYNAME };
}
exports.count = count;
exports.COUNT_DISPLAYNAME = 'Number of Records';
function isCount(fieldDef) {
    return fieldDef.aggregate === 'count';
}
exports.isCount = isCount;
function cardinality(fieldDef, stats, filterNull) {
    // FIXME need to take filter into account
    if (filterNull === void 0) { filterNull = {}; }
    var stat = stats[fieldDef.field];
    var type = fieldDef.type;
    if (fieldDef.bin) {
        var bin = fieldDef.bin;
        var maxbins = (typeof bin === 'boolean') ? bin_1.MAXBINS_DEFAULT : bin.maxbins;
        var bins = util.getbins(stat, maxbins);
        return (bins.stop - bins.start) / bins.step;
    }
    if (fieldDef.type === type_1.TEMPORAL) {
        var cardinality = time.cardinality(fieldDef, stats, filterNull, type);
        if (cardinality !== null)
            return cardinality;
    }
    if (fieldDef.aggregate) {
        return 1;
    }
    return stat.distinct -
        (stat.missing > 0 && filterNull[type] ? 1 : 0);
}
exports.cardinality = cardinality;
},{"./bin":16,"./compiler/time":30,"./type":50,"./util":51}],34:[function(require,module,exports){
exports.AREA = 'area';
exports.BAR = 'bar';
exports.LINE = 'line';
exports.POINT = 'point';
exports.TEXT = 'text';
exports.TICK = 'tick';
},{}],35:[function(require,module,exports){
exports.axis = {
    type: 'object',
    properties: {
        format: {
            type: 'string',
            default: undefined,
            description: 'The formatting pattern for axis labels. ' +
                'If not undefined, this will be determined by ' +
                'the max value ' +
                'of the field.'
        },
        grid: {
            type: 'boolean',
            default: undefined,
            description: 'A flag indicate if gridlines should be created in addition to ticks. If `grid` is unspecified, the default value is `true` for ROW and COL. For X and Y, the default value is `true` for quantitative and time fields and `false` otherwise.'
        },
        layer: {
            type: 'string',
            default: undefined,
            description: 'A string indicating if the axis (and any gridlines) should be placed above or below the data marks.'
        },
        orient: {
            type: 'string',
            default: undefined,
            enum: ['top', 'right', 'left', 'bottom'],
            description: 'The orientation of the axis. One of top, bottom, left or right. The orientation can be used to further specialize the axis type (e.g., a y axis oriented for the right edge of the chart).'
        },
        ticks: {
            type: 'integer',
            default: undefined,
            minimum: 0,
            description: 'A desired number of ticks, for axes visualizing quantitative scales. The resulting number may be different so that values are "nice" (multiples of 2, 5, 10) and lie within the underlying scale\'s range.'
        },
        title: {
            type: 'string',
            default: undefined,
            description: 'A title for the axis. (Shows field name and its function by default.)'
        },
        labelMaxLength: {
            type: 'integer',
            default: 25,
            minimum: 0,
            description: 'Truncate labels that are too long.'
        },
        titleMaxLength: {
            type: 'integer',
            default: undefined,
            minimum: 0,
            description: 'Max length for axis title if the title is automatically generated from the field\'s description'
        },
        titleOffset: {
            type: 'integer',
            default: undefined,
            description: 'A title offset value for the axis.'
        },
        properties: {
            type: 'object',
            default: undefined,
            description: 'Optional mark property definitions for custom axis styling.'
        }
    }
};
},{}],36:[function(require,module,exports){
var bin_1 = require('../bin');
var type_1 = require('../type');
var util_1 = require('../util');
exports.bin = {
    type: ['boolean', 'object'],
    default: false,
    properties: {
        maxbins: {
            type: 'integer',
            default: bin_1.MAXBINS_DEFAULT,
            minimum: 2,
            description: 'Maximum number of bins.'
        }
    },
    supportedTypes: util_1.toMap([type_1.QUANTITATIVE])
};
},{"../bin":16,"../type":50,"../util":51}],37:[function(require,module,exports){
// TODO: add interface Config
exports.config = {
    type: 'object',
    properties: {
        width: {
            type: 'integer',
            default: undefined
        },
        height: {
            type: 'integer',
            default: undefined
        },
        viewport: {
            type: 'array',
            items: {
                type: 'integer'
            },
            default: undefined
        },
        gridColor: {
            type: 'string',
            role: 'color',
            default: '#000000'
        },
        gridOpacity: {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 0.08
        },
        filterNull: {
            type: 'object',
            properties: {
                nominal: { type: 'boolean', default: false },
                ordinal: { type: 'boolean', default: false },
                quantitative: { type: 'boolean', default: true },
                temporal: { type: 'boolean', default: true }
            }
        },
        autoSortLine: {
            type: 'boolean',
            default: true
        },
        singleHeight: {
            type: 'integer',
            default: 200,
            minimum: 0
        },
        singleWidth: {
            type: 'integer',
            default: 200,
            minimum: 0
        },
        largeBandWidth: {
            type: 'integer',
            default: 21,
            minimum: 0
        },
        smallBandWidth: {
            type: 'integer',
            default: 12,
            minimum: 0
        },
        largeBandMaxCardinality: {
            type: 'integer',
            default: 10
        },
        padding: {
            type: 'number',
            default: 1,
            description: 'default scale padding for ordinal x/y scales.'
        },
        cellPadding: {
            type: 'number',
            default: 0.1,
            description: 'default scale padding for row/column scales.'
        },
        cellGridColor: {
            type: 'string',
            role: 'color',
            default: '#000000'
        },
        cellGridOpacity: {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 0.25
        },
        cellGridOffset: {
            type: 'number',
            default: 6
        },
        cellBackgroundColor: {
            type: 'string',
            role: 'color',
            default: 'rgba(0,0,0,0)'
        },
        textCellWidth: {
            type: 'integer',
            default: 90,
            minimum: 0
        },
        stack: {
            type: ['boolean', 'object'],
            default: {},
            description: 'Enable stacking (for bar and area marks only).',
            properties: {
                sort: {
                    oneOf: [{
                            type: 'string',
                            enum: ['ascending', 'descending']
                        }, {
                            type: 'array',
                            items: { type: 'string' },
                        }],
                    description: 'Order of the stack. ' +
                        'This can be either a string (either "descending" or "ascending")' +
                        'or a list of fields to determine the order of stack layers.' +
                        'By default, stack uses descending order.'
                },
                offset: {
                    type: 'string',
                    enum: ['zero', 'center', 'normalize']
                }
            }
        },
        strokeWidth: {
            type: 'integer',
            default: 2,
            minimum: 0
        },
        singleBarOffset: {
            type: 'integer',
            default: 5,
            minimum: 0
        },
        timeScaleLabelLength: {
            type: 'integer',
            default: 3,
            minimum: 0,
            description: 'Max length for values in dayScaleLabel and monthScaleLabel.  Zero means using full names in dayScaleLabel/monthScaleLabel.'
        },
        dayScaleLabel: {
            type: 'array',
            items: {
                type: 'string'
            },
            default: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            description: 'Axis labels for day of week, starting from Sunday.' +
                '(Consistent with Javascript -- See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay.'
        },
        monthScaleLabel: {
            type: 'array',
            items: {
                type: 'string'
            },
            default: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            description: 'Axis labels for month.'
        },
        characterWidth: {
            type: 'integer',
            default: 6
        },
        numberFormat: {
            type: 'string',
            default: 's',
            description: 'D3 Number format for axis labels and text tables.'
        },
        timeFormat: {
            type: 'string',
            default: '%Y-%m-%d',
            description: 'Date format for axis labels.'
        },
        useRawDomain: {
            type: 'boolean',
            default: false,
            description: 'Use the source data range as scale domain instead of ' +
                'aggregated data for aggregate axis. ' +
                'This option does not work with sum or count aggregate' +
                'as they might have a substantially larger scale range.' +
                'By default, use value from config.useRawDomain.'
        }
    }
};
},{}],38:[function(require,module,exports){
exports.data = {
    type: 'object',
    properties: {
        formatType: {
            type: 'string',
            enum: ['json', 'csv', 'tsv'],
            default: 'json'
        },
        url: {
            type: 'string',
            default: undefined
        },
        values: {
            type: 'array',
            default: undefined,
            description: 'Pass array of objects instead of a url to a file.',
            items: {
                type: 'object',
                additionalProperties: true
            }
        },
        filter: {
            type: 'string',
            default: undefined,
            description: 'A string containing the filter Vega expression. Use `datum` to refer to the current data object.'
        },
        calculate: {
            type: 'array',
            default: undefined,
            description: 'Calculate new field(s) using the provided expresssion(s). Calculation are applied before filter.',
            items: {
                type: 'object',
                properties: {
                    field: {
                        type: 'string',
                        description: 'The field in which to store the computed formula value.'
                    },
                    expr: {
                        type: 'string',
                        description: 'A string containing an expression for the formula. Use the variable `datum` to to refer to the current data object.'
                    }
                }
            }
        }
    }
};
},{}],39:[function(require,module,exports){
/// <reference path="../../typings/colorbrewer.d.ts"/>
var colorbrewer = require('colorbrewer');
var schemautil_1 = require('./schemautil');
var util_1 = require('../util');
var vlUtil = require('../util');
var axis_schema_1 = require('./axis.schema');
var legend_schema_1 = require('./legend.schema');
var sort_schema_1 = require('./sort.schema');
var fielddef_schema_1 = require('./fielddef.schema');
var requiredNameType = {
    required: ['field', 'type']
};
var x = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.typicalField), requiredNameType, {
    supportedMarktypes: { point: true, tick: true, bar: true, line: true, area: true, circle: true, square: true },
    properties: {
        axis: axis_schema_1.axis,
        sort: sort_schema_1.sort
    }
});
var y = util_1.duplicate(x);
var facet = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.onlyOrdinalField), requiredNameType, {
    supportedMarktypes: { point: true, tick: true, bar: true, line: true, area: true, circle: true, square: true, text: true },
    properties: {
        axis: axis_schema_1.axis,
        sort: sort_schema_1.sort
    }
});
var row = schemautil_1.merge(util_1.duplicate(facet), {
    properties: {
        height: {
            type: 'number',
            minimum: 0,
            default: 150
        }
    }
});
var column = schemautil_1.merge(util_1.duplicate(facet), {
    properties: {
        width: {
            type: 'number',
            minimum: 0,
            default: 150
        }
    }
});
var size = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.typicalField), {
    supportedMarktypes: { point: true, bar: true, circle: true, square: true, text: true },
    properties: {
        legend: legend_schema_1.legend,
        sort: sort_schema_1.sort,
        value: {
            type: 'integer',
            default: 30,
            minimum: 0,
            description: 'Size of marks.'
        }
    }
});
var color = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.typicalField), {
    supportedMarktypes: { point: true, tick: true, bar: true, line: true, area: true, circle: true, square: true, 'text': true },
    properties: {
        legend: legend_schema_1.legend,
        sort: sort_schema_1.sort,
        value: {
            type: 'string',
            role: 'color',
            default: '#4682b4',
            description: 'Color to be used for marks.'
        },
        opacity: {
            type: 'number',
            default: undefined,
            minimum: 0,
            maximum: 1
        },
        scale: {
            type: 'object',
            properties: {
                range: {
                    type: ['string', 'array'],
                    default: undefined,
                    description: 'Color palette, if undefined vega-lite will use data property' +
                        'to pick one from c10palette, c20palette, or ordinalPalette.'
                },
                c10palette: {
                    type: 'string',
                    default: 'category10',
                    enum: [
                        'category10', 'category10k',
                        'Pastel1', 'Pastel2', 'Set1', 'Set2', 'Set3'
                    ]
                },
                c20palette: {
                    type: 'string',
                    default: 'category20',
                    enum: ['category20', 'category20b', 'category20c']
                },
                ordinalPalette: {
                    type: 'string',
                    default: undefined,
                    description: 'Color palette to encode ordinal variables.',
                    enum: vlUtil.keys(colorbrewer)
                },
                quantitativeRange: {
                    type: 'array',
                    default: ['#AFC6A3', '#09622A'],
                    description: 'Color range to encode quantitative variables.',
                    minItems: 2,
                    maxItems: 2,
                    items: {
                        type: 'string',
                        role: 'color'
                    }
                }
            }
        }
    }
});
var shape = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.onlyOrdinalField), {
    supportedMarktypes: { point: true, circle: true, square: true },
    properties: {
        legend: legend_schema_1.legend,
        sort: sort_schema_1.sort,
        value: {
            type: 'string',
            enum: ['circle', 'square', 'cross', 'diamond', 'triangle-up', 'triangle-down'],
            default: 'circle',
            description: 'Mark to be used.'
        },
        filled: {
            type: 'boolean',
            default: false,
            description: 'Whether the shape\'s color should be used as fill color instead of stroke color.'
        }
    }
});
var detail = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.onlyOrdinalField), {
    supportedMarktypes: { point: true, tick: true, line: true, circle: true, square: true },
    properties: {
        sort: sort_schema_1.sort
    }
});
var text = schemautil_1.merge(util_1.duplicate(fielddef_schema_1.typicalField), {
    supportedMarktypes: { 'text': true },
    properties: {
        sort: sort_schema_1.sort,
        align: {
            type: 'string',
            default: 'right'
        },
        baseline: {
            type: 'string',
            default: 'middle'
        },
        color: {
            type: 'string',
            role: 'color',
            default: '#000000'
        },
        margin: {
            type: 'integer',
            default: 4,
            minimum: 0
        },
        placeholder: {
            type: 'string',
            default: 'Abc'
        },
        font: {
            type: 'object',
            properties: {
                weight: {
                    type: 'string',
                    enum: ['normal', 'bold'],
                    default: 'normal'
                },
                size: {
                    type: 'integer',
                    default: 10,
                    minimum: 0
                },
                family: {
                    type: 'string',
                    default: 'Helvetica Neue'
                },
                style: {
                    type: 'string',
                    default: 'normal',
                    enum: ['normal', 'italic']
                }
            }
        },
        format: {
            type: 'string',
            default: '',
            description: 'The formatting pattern for text value.' +
                'If not defined, this will be determined automatically'
        },
    }
});
exports.encoding = {
    type: 'object',
    properties: {
        x: x,
        y: y,
        row: row,
        column: column,
        size: size,
        color: color,
        shape: shape,
        text: text,
        detail: detail
    }
};
},{"../util":51,"./axis.schema":35,"./fielddef.schema":40,"./legend.schema":41,"./schemautil":45,"./sort.schema":46,"colorbrewer":3}],40:[function(require,module,exports){
var bin_schema_1 = require('./bin.schema');
var scale_schema_1 = require('./scale.schema');
var aggregate_1 = require('../aggregate');
var util_1 = require('../util');
var schemautil_1 = require('./schemautil');
var timeunit_1 = require('../timeunit');
var type_1 = require('../type');
exports.fieldDef = {
    type: 'object',
    properties: {
        field: {
            type: 'string'
        },
        type: {
            type: 'string',
            enum: [type_1.NOMINAL, type_1.ORDINAL, type_1.QUANTITATIVE, type_1.TEMPORAL]
        },
        timeUnit: {
            type: 'string',
            enum: timeunit_1.TIMEUNITS,
            supportedTypes: util_1.toMap([type_1.TEMPORAL])
        },
        bin: bin_schema_1.bin,
    }
};
exports.aggregate = {
    type: 'string',
    enum: aggregate_1.AGGREGATE_OPS,
    supportedEnums: {
        quantitative: aggregate_1.AGGREGATE_OPS,
        ordinal: ['median', 'min', 'max'],
        nominal: [],
        temporal: ['mean', 'median', 'min', 'max'],
        '': ['count']
    },
    supportedTypes: util_1.toMap([type_1.QUANTITATIVE, type_1.NOMINAL, type_1.ORDINAL, type_1.TEMPORAL, ''])
};
exports.typicalField = schemautil_1.merge(util_1.duplicate(exports.fieldDef), {
    properties: {
        aggregate: exports.aggregate,
        scale: scale_schema_1.typicalScale
    }
});
exports.onlyOrdinalField = schemautil_1.merge(util_1.duplicate(exports.fieldDef), {
    properties: {
        aggregate: {
            type: 'string',
            enum: ['count'],
            supportedTypes: util_1.toMap([type_1.NOMINAL, type_1.ORDINAL])
        },
        scale: scale_schema_1.ordinalOnlyScale
    }
});
},{"../aggregate":15,"../timeunit":49,"../type":50,"../util":51,"./bin.schema":36,"./scale.schema":43,"./schemautil":45}],41:[function(require,module,exports){
exports.legend = {
    default: true,
    description: 'Properties of a legend or boolean flag for determining whether to show it.',
    oneOf: [{
            type: 'object',
            properties: {
                orient: {
                    type: 'string',
                    default: undefined,
                    description: 'The orientation of the legend. One of "left" or "right". This determines how the legend is positioned within the scene. The default is "right".'
                },
                title: {
                    type: 'string',
                    default: undefined,
                    description: 'A title for the legend. (Shows field name and its function by default.)'
                },
                format: {
                    type: 'string',
                    default: undefined,
                    description: 'An optional formatting pattern for legend labels. Vega uses D3\'s format pattern.'
                },
                values: {
                    type: 'array',
                    default: undefined,
                    description: 'Explicitly set the visible legend values.'
                },
                properties: {
                    type: 'object',
                    default: undefined,
                    description: 'Optional mark property definitions for custom legend styling. '
                }
            }
        }, {
            type: 'boolean'
        }]
};
},{}],42:[function(require,module,exports){
exports.marktype = {
    type: 'string',
    enum: ['point', 'tick', 'bar', 'line', 'area', 'circle', 'square', 'text']
};
},{}],43:[function(require,module,exports){
var util_1 = require('../util');
var schemautil_1 = require('./schemautil');
var type_1 = require('../type');
var scale = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['linear', 'log', 'pow', 'sqrt', 'quantile'],
            default: 'linear',
            supportedTypes: util_1.toMap([type_1.QUANTITATIVE])
        },
        domain: {
            default: undefined,
            type: ['array', 'object'],
            description: 'The domain of the scale, representing the set of data values. For quantitative data, this can take the form of a two-element array with minimum and maximum values. For ordinal/categorical data, this may be an array of valid input values. The domain may also be specified by a reference to a data source.'
        },
        range: {
            default: undefined,
            type: ['array', 'object'],
            description: 'The range of the scale, representing the set of visual values. For numeric values, the range can take the form of a two-element array with minimum and maximum values. For ordinal or quantized data, the range may by an array of desired output values, which are mapped to elements in the specified domain. For ordinal scales only, the range can be defined using a DataRef: the range values are then drawn dynamically from a backing data set.'
        },
        round: {
            default: undefined,
            type: 'boolean',
            description: 'If true, rounds numeric output values to integers. This can be helpful for snapping to the pixel grid.'
        }
    }
};
var ordinalScaleMixin = {
    properties: {
        bandWidth: {
            type: 'integer',
            minimum: 0,
            default: undefined
        },
        outerPadding: {
            type: 'number',
            default: undefined
        },
        padding: {
            type: 'number',
            default: undefined,
            description: 'Applies spacing among ordinal elements in the scale range. The actual effect depends on how the scale is configured. If the __points__ parameter is `true`, the padding value is interpreted as a multiple of the spacing between points. A reasonable value is 1.0, such that the first and last point will be offset from the minimum and maximum value by half the distance between points. Otherwise, padding is typically in the range [0, 1] and corresponds to the fraction of space in the range interval to allocate to padding. A value of 0.5 means that the range band width will be equal to the padding width. For more, see the [D3 ordinal scale documentation](https://github.com/mbostock/d3/wiki/Ordinal-Scales).'
        },
        points: {
            type: 'boolean',
            default: undefined,
            description: 'If true, distributes the ordinal values over a quantitative range at uniformly spaced points. The spacing of the points can be adjusted using the padding property. If false, the ordinal scale will construct evenly-spaced bands, rather than points.'
        }
    }
};
var typicalScaleMixin = {
    properties: {
        clamp: {
            type: 'boolean',
            default: true,
            description: 'If true, values that exceed the data domain are clamped to either the minimum or maximum range value'
        },
        nice: {
            default: undefined,
            oneOf: [
                {
                    type: 'boolean',
                    description: 'If true, modifies the scale domain to use a more human-friendly number range (e.g., 7 instead of 6.96).'
                }, {
                    type: 'string',
                    enum: ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'],
                    description: 'If specified, modifies the scale domain to use a more human-friendly value range. For time and utc scale types only, the nice value should be a string indicating the desired time interval; legal values are "second", "minute", "hour", "day", "week", "month", or "year".'
                }
            ],
            supportedTypes: util_1.toMap([type_1.QUANTITATIVE, type_1.TEMPORAL]),
            description: ''
        },
        exponent: {
            type: 'number',
            default: undefined,
            description: 'Sets the exponent of the scale transformation. For pow scale types only, otherwise ignored.'
        },
        zero: {
            type: 'boolean',
            description: 'If true, ensures that a zero baseline value is included in the scale domain. This option is ignored for non-quantitative scales.',
            default: undefined,
            supportedTypes: util_1.toMap([type_1.QUANTITATIVE, type_1.TEMPORAL])
        },
        useRawDomain: {
            type: 'boolean',
            default: undefined,
            description: 'Uses the source data range as scale domain instead of ' +
                'aggregated data for aggregate axis. ' +
                'This option does not work with sum or count aggregate' +
                'as they might have a substantially larger scale range.' +
                'By default, use value from config.useRawDomain.'
        }
    }
};
exports.ordinalOnlyScale = schemautil_1.merge(util_1.duplicate(scale), ordinalScaleMixin);
exports.typicalScale = schemautil_1.merge(util_1.duplicate(scale), ordinalScaleMixin, typicalScaleMixin);
},{"../type":50,"../util":51,"./schemautil":45}],44:[function(require,module,exports){
// Package of defining Vega-lite Specification's json schema
/// <reference path="../../typings/vega.d.ts"/>
var schemaUtil = require('./schemautil');
var marktype_schema_1 = require('./marktype.schema');
var config_schema_1 = require('./config.schema');
var data_schema_1 = require('./data.schema');
var encoding_schema_1 = require('./encoding.schema');
var fielddef_schema_1 = require('./fielddef.schema');
exports.aggregate = fielddef_schema_1.aggregate;
exports.util = schemaUtil;
exports.schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    description: 'Schema for Vega-lite specification',
    type: 'object',
    required: ['marktype', 'encoding'],
    properties: {
        data: data_schema_1.data,
        marktype: marktype_schema_1.marktype,
        encoding: encoding_schema_1.encoding,
        config: config_schema_1.config
    }
};
function instantiate() {
    return schemaUtil.instantiate(exports.schema);
}
exports.instantiate = instantiate;
;
},{"./config.schema":37,"./data.schema":38,"./encoding.schema":39,"./fielddef.schema":40,"./marktype.schema":42,"./schemautil":45}],45:[function(require,module,exports){
var util = require('../util');
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
;
function extend(instance, schema) {
    return merge(instantiate(schema), instance);
}
exports.extend = extend;
;
function instantiate(schema) {
    var val;
    if (schema === undefined) {
        return undefined;
    }
    else if ('default' in schema) {
        val = schema.default;
        return util.isObject(val) ? util.duplicate(val) : val;
    }
    else if (schema.type === 'object') {
        var instance = {};
        for (var name in schema.properties) {
            val = instantiate(schema.properties[name]);
            if (val !== undefined) {
                instance[name] = val;
            }
        }
        return instance;
    }
    else if (schema.type === 'array') {
        return undefined;
    }
    return undefined;
}
exports.instantiate = instantiate;
;
function subtract(instance, defaults) {
    var changes = {};
    for (var prop in instance) {
        var def = defaults[prop];
        var ins = instance[prop];
        if (!defaults || def !== ins) {
            if (typeof ins === 'object' && !util.isArray(ins) && def) {
                var c = subtract(ins, def);
                if (!isEmpty(c)) {
                    changes[prop] = c;
                }
            }
            else if (util.isArray(ins)) {
                if (util.isArray(def)) {
                    if (ins.length === def.length) {
                        var equal = true;
                        for (var i = 0; i < ins.length; i++) {
                            if (ins[i] !== def[i]) {
                                equal = false;
                                break;
                            }
                        }
                        if (equal) {
                            continue;
                        }
                    }
                }
                changes[prop] = ins;
            }
            else {
                changes[prop] = ins;
            }
        }
    }
    return changes;
}
exports.subtract = subtract;
;
function merge(dest) {
    var src = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        src[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < src.length; i++) {
        dest = merge_(dest, src[i]);
    }
    return dest;
}
exports.merge = merge;
;
function merge_(dest, src) {
    if (typeof src !== 'object' || src === null) {
        return dest;
    }
    for (var p in src) {
        if (!src.hasOwnProperty(p)) {
            continue;
        }
        if (src[p] === undefined) {
            continue;
        }
        if (typeof src[p] !== 'object' || src[p] === null) {
            dest[p] = src[p];
        }
        else if (typeof dest[p] !== 'object' || dest[p] === null) {
            dest[p] = merge(src[p].constructor === Array ? [] : {}, src[p]);
        }
        else {
            merge(dest[p], src[p]);
        }
    }
    return dest;
}
},{"../util":51}],46:[function(require,module,exports){
var aggregate_1 = require('../aggregate');
var type_1 = require('../type');
var util_1 = require('../util');
exports.sort = {
    default: 'ascending',
    supportedTypes: util_1.toMap([type_1.QUANTITATIVE, type_1.ORDINAL]),
    oneOf: [
        {
            type: 'string',
            enum: ['ascending', 'descending', 'unsorted']
        },
        {
            type: 'object',
            required: ['field', 'op'],
            properties: {
                field: {
                    type: 'string',
                    description: 'The field name to aggregate over.'
                },
                op: {
                    type: 'string',
                    enum: aggregate_1.AGGREGATE_OPS,
                    description: 'The field name to aggregate over.'
                },
                order: {
                    type: 'string',
                    enum: ['ascending', 'descending']
                }
            }
        }
    ]
};
},{"../aggregate":15,"../type":50,"../util":51}],47:[function(require,module,exports){
/** module for shorthand */
var aggregate_1 = require('./aggregate');
var timeunit_1 = require('./timeunit');
var type_1 = require('./type');
var vlEncoding = require('./encoding');
exports.DELIM = '|';
exports.ASSIGN = '=';
exports.TYPE = ',';
exports.FUNC = '_';
function shorten(spec) {
    return 'mark' + exports.ASSIGN + spec.marktype +
        exports.DELIM + shortenEncoding(spec.encoding);
}
exports.shorten = shorten;
function parse(shorthand, data, config) {
    var split = shorthand.split(exports.DELIM), marktype = split.shift().split(exports.ASSIGN)[1].trim(), encoding = parseEncoding(split.join(exports.DELIM));
    var spec = {
        marktype: marktype,
        encoding: encoding
    };
    if (data !== undefined) {
        spec.data = data;
    }
    if (config !== undefined) {
        spec.config = config;
    }
    return spec;
}
exports.parse = parse;
function shortenEncoding(encoding) {
    return vlEncoding.map(encoding, function (fieldDef, channel) {
        return channel + exports.ASSIGN + shortenFieldDef(fieldDef);
    }).join(exports.DELIM);
}
exports.shortenEncoding = shortenEncoding;
function parseEncoding(encodingShorthand) {
    return encodingShorthand.split(exports.DELIM).reduce(function (m, e) {
        var split = e.split(exports.ASSIGN), enctype = split[0].trim(), fieldDefShorthand = split[1];
        m[enctype] = parseFieldDef(fieldDefShorthand);
        return m;
    }, {});
}
exports.parseEncoding = parseEncoding;
function shortenFieldDef(fieldDef) {
    return (fieldDef.aggregate ? fieldDef.aggregate + exports.FUNC : '') +
        (fieldDef.timeUnit ? fieldDef.timeUnit + exports.FUNC : '') +
        (fieldDef.bin ? 'bin' + exports.FUNC : '') +
        (fieldDef.field || '') + exports.TYPE + type_1.SHORT_TYPE[fieldDef.type];
}
exports.shortenFieldDef = shortenFieldDef;
function shortenFieldDefs(fieldDefs, delim) {
    if (delim === void 0) { delim = exports.DELIM; }
    return fieldDefs.map(shortenFieldDef).join(delim);
}
exports.shortenFieldDefs = shortenFieldDefs;
function parseFieldDef(fieldDefShorthand) {
    var split = fieldDefShorthand.split(exports.TYPE), i;
    var fieldDef = {
        field: split[0].trim(),
        type: type_1.TYPE_FROM_SHORT_TYPE[split[1].trim()]
    };
    for (i in aggregate_1.AGGREGATE_OPS) {
        var a = aggregate_1.AGGREGATE_OPS[i];
        if (fieldDef.field.indexOf(a + '_') === 0) {
            fieldDef.field = fieldDef.field.substr(a.length + 1);
            if (a === 'count' && fieldDef.field.length === 0)
                fieldDef.field = '*';
            fieldDef.aggregate = a;
            break;
        }
    }
    for (i in timeunit_1.TIMEUNITS) {
        var tu = timeunit_1.TIMEUNITS[i];
        if (fieldDef.field && fieldDef.field.indexOf(tu + '_') === 0) {
            fieldDef.field = fieldDef.field.substr(fieldDef.field.length + 1);
            fieldDef.timeUnit = tu;
            break;
        }
    }
    if (fieldDef.field && fieldDef.field.indexOf('bin_') === 0) {
        fieldDef.field = fieldDef.field.substr(4);
        fieldDef.bin = true;
    }
    return fieldDef;
}
exports.parseFieldDef = parseFieldDef;
},{"./aggregate":15,"./encoding":32,"./timeunit":49,"./type":50}],48:[function(require,module,exports){
/* Utilities for a Vega-Lite specificiation */
var vlEncoding = require('./encoding');
var util = require('./util');
var Model_1 = require('./compiler/Model');
var channel_1 = require('./channel');
var marktype_1 = require('./marktype');
function alwaysNoOcclusion(spec) {
    return vlEncoding.isAggregate(spec.encoding);
}
exports.alwaysNoOcclusion = alwaysNoOcclusion;
function getCleanSpec(spec) {
    return new Model_1.Model(spec).toSpec(true);
}
exports.getCleanSpec = getCleanSpec;
function isStack(spec) {
    return (spec.encoding[channel_1.COLOR].field || spec.encoding[channel_1.DETAIL].field) &&
        (spec.marktype === marktype_1.BAR || spec.marktype === marktype_1.AREA) &&
        (!spec.config || !spec.config.stack !== false) &&
        vlEncoding.isAggregate(spec.encoding);
}
exports.isStack = isStack;
function transpose(spec) {
    var oldenc = spec.encoding, encoding = util.duplicate(spec.encoding);
    encoding.x = oldenc.y;
    encoding.y = oldenc.x;
    encoding.row = oldenc.column;
    encoding.column = oldenc.row;
    spec.encoding = encoding;
    return spec;
}
exports.transpose = transpose;
},{"./channel":17,"./compiler/Model":18,"./encoding":32,"./marktype":34,"./util":51}],49:[function(require,module,exports){
exports.TIMEUNITS = [
    'year', 'month', 'day', 'date', 'hours', 'minutes', 'seconds'
];
},{}],50:[function(require,module,exports){
/** Constants and utilities for data type */
exports.QUANTITATIVE = 'quantitative';
exports.ORDINAL = 'ordinal';
exports.TEMPORAL = 'temporal';
exports.NOMINAL = 'nominal';
exports.SHORT_TYPE = {
    quantitative: 'Q',
    temporal: 'T',
    nominal: 'N',
    ordinal: 'O'
};
exports.TYPE_FROM_SHORT_TYPE = {
    Q: exports.QUANTITATIVE,
    T: exports.TEMPORAL,
    O: exports.ORDINAL,
    N: exports.NOMINAL
};
function getFullName(type) {
    return exports.TYPE_FROM_SHORT_TYPE[type.toUpperCase()] ||
        type.toLowerCase();
}
exports.getFullName = getFullName;
},{}],51:[function(require,module,exports){
/// <reference path="../typings/datalib.d.ts"/>
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('datalib/src/util'));
__export(require('datalib/src/generate'));
__export(require('datalib/src/stats'));
var dlBin = require('datalib/src/bins/bins');
exports.bin = dlBin;
function roundFloat(x, digit) {
    if (digit === void 0) { digit = 4; }
    return +x.toFixed(digit);
}
exports.roundFloat = roundFloat;
function forEach(obj, f, thisArg) {
    if (obj.forEach) {
        obj.forEach.call(thisArg, f);
    }
    else {
        for (var k in obj) {
            f.call(thisArg, obj[k], k, obj);
        }
    }
}
exports.forEach = forEach;
function reduce(obj, f, init, thisArg) {
    if (obj.reduce) {
        return obj.reduce.call(thisArg, f, init);
    }
    else {
        for (var k in obj) {
            init = f.call(thisArg, init, obj[k], k, obj);
        }
        return init;
    }
}
exports.reduce = reduce;
function map(obj, f, thisArg) {
    if (obj.map) {
        return obj.map.call(thisArg, f);
    }
    else {
        var output = [];
        for (var k in obj) {
            output.push(f.call(thisArg, obj[k], k, obj));
        }
        return output;
    }
}
exports.map = map;
function any(arr, f) {
    var i = 0, k;
    for (k in arr) {
        if (f(arr[k], k, i++))
            return true;
    }
    return false;
}
exports.any = any;
function all(arr, f) {
    var i = 0, k;
    for (k in arr) {
        if (!f(arr[k], k, i++))
            return false;
    }
    return true;
}
exports.all = all;
function getbins(stats, maxbins) {
    return dlBin({
        min: stats.min,
        max: stats.max,
        maxbins: maxbins
    });
}
exports.getbins = getbins;
function setter(x, p, val, noaugment) {
    if (noaugment === void 0) { noaugment = false; }
    for (var i = 0; i < p.length - 1; ++i) {
        if (!noaugment && !(p[i] in x)) {
            x = x[p[i]] = {};
        }
        else {
            x = x[p[i]];
        }
    }
    x[p[i]] = val;
}
exports.setter = setter;
function error(message) {
    console.error('[VL Error]', message);
}
exports.error = error;
},{"datalib/src/bins/bins":9,"datalib/src/generate":10,"datalib/src/stats":12,"datalib/src/util":14}],52:[function(require,module,exports){
var util_1 = require('./util');
exports.DEFAULT_REQUIRED_CHANNEL_MAP = {
    text: ['text'],
    line: ['x', 'y'],
    area: ['x', 'y']
};
exports.DEFAULT_SUPPORTED_CHANNEL_TYPE = {
    bar: util_1.toMap(['row', 'column', 'x', 'y', 'size', 'color', 'detail']),
    line: util_1.toMap(['row', 'column', 'x', 'y', 'color', 'detail']),
    area: util_1.toMap(['row', 'column', 'x', 'y', 'color', 'detail']),
    tick: util_1.toMap(['row', 'column', 'x', 'y', 'color', 'detail']),
    circle: util_1.toMap(['row', 'column', 'x', 'y', 'color', 'size', 'detail']),
    square: util_1.toMap(['row', 'column', 'x', 'y', 'color', 'size', 'detail']),
    point: util_1.toMap(['row', 'column', 'x', 'y', 'color', 'size', 'detail', 'shape']),
    text: util_1.toMap(['row', 'column', 'size', 'color', 'text'])
};
function getEncodingMappingError(spec, requiredChannelMap, supportedChannelMap) {
    if (requiredChannelMap === void 0) { requiredChannelMap = exports.DEFAULT_REQUIRED_CHANNEL_MAP; }
    if (supportedChannelMap === void 0) { supportedChannelMap = exports.DEFAULT_SUPPORTED_CHANNEL_TYPE; }
    var marktype = spec.marktype;
    var encoding = spec.encoding;
    var requiredChannels = requiredChannelMap[marktype];
    var supportedChannels = supportedChannelMap[marktype];
    for (var i in requiredChannels) {
        if (!(requiredChannels[i] in encoding)) {
            return 'Missing encoding channel \"' + requiredChannels[i] +
                '\" for marktype \"' + marktype + '\"';
        }
    }
    for (var channel in encoding) {
        if (!supportedChannels[channel]) {
            return 'Encoding channel \"' + channel +
                '\" is not supported by mark type \"' + marktype + '\"';
        }
    }
    if (marktype === 'bar' && !encoding.x && !encoding.y) {
        return 'Missing both x and y for bar';
    }
    return null;
}
exports.getEncodingMappingError = getEncodingMappingError;
},{"./util":51}],53:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var vlBin = require('./bin');
var vlChannel = require('./channel');
var vlData = require('./data');
var vlEncoding = require('./encoding');
var vlFieldDef = require('./fielddef');
var vlCompiler = require('./compiler/compiler');
var vlSchema = require('./schema/schema');
var vlShorthand = require('./shorthand');
var vlSpec = require('./spec');
var vlTimeUnit = require('./timeunit');
var vlType = require('./type');
var vlValidate = require('./validate');
var d3_format_1 = require('d3-format');
__export(require('./util'));
exports.bin = vlBin;
exports.channel = vlChannel;
exports.compiler = vlCompiler;
exports.compile = vlCompiler.compile;
exports.data = vlData;
exports.encoding = vlEncoding;
exports.fieldDef = vlFieldDef;
exports.schema = vlSchema;
exports.shorthand = vlShorthand;
exports.spec = vlSpec;
exports.timeUnit = vlTimeUnit;
exports.type = vlType;
exports.format = d3_format_1.format;
exports.validate = vlValidate;
exports.version = '0.9.0';
},{"./bin":16,"./channel":17,"./compiler/compiler":20,"./data":31,"./encoding":32,"./fielddef":33,"./schema/schema":44,"./shorthand":47,"./spec":48,"./timeunit":49,"./type":50,"./util":51,"./validate":52,"d3-format":5}]},{},[53])(53)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yYnJld2VyL2NvbG9yYnJld2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yYnJld2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2QzLWNvbG9yL2J1aWxkL2QzLWNvbG9yLmpzIiwibm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9idWlsZC9kMy1mb3JtYXQuanMiLCJub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvYnVpbGQvZDMtdGltZS1mb3JtYXQuanMiLCJub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvbm9kZV9tb2R1bGVzL2QzLXRpbWUvYnVpbGQvZDMtdGltZS5qcyIsIm5vZGVfbW9kdWxlcy9kYXRhbGliL3NyYy9iaW5zL2JpbnMuanMiLCJub2RlX21vZHVsZXMvZGF0YWxpYi9zcmMvZ2VuZXJhdGUuanMiLCJub2RlX21vZHVsZXMvZGF0YWxpYi9zcmMvaW1wb3J0L3R5cGUuanMiLCJub2RlX21vZHVsZXMvZGF0YWxpYi9zcmMvc3RhdHMuanMiLCJub2RlX21vZHVsZXMvZGF0YWxpYi9zcmMvdGltZS5qcyIsIm5vZGVfbW9kdWxlcy9kYXRhbGliL3NyYy91dGlsLmpzIiwic3JjL2FnZ3JlZ2F0ZS50cyIsInNyYy9iaW4udHMiLCJzcmMvY2hhbm5lbC50cyIsInNyYy9jb21waWxlci9Nb2RlbC50cyIsInNyYy9jb21waWxlci9heGlzLnRzIiwic3JjL2NvbXBpbGVyL2NvbXBpbGVyLnRzIiwic3JjL2NvbXBpbGVyL2RhdGEudHMiLCJzcmMvY29tcGlsZXIvZmFjZXQudHMiLCJzcmMvY29tcGlsZXIvbGF5b3V0LnRzIiwic3JjL2NvbXBpbGVyL2xlZ2VuZC50cyIsInNyYy9jb21waWxlci9tYXJrcy50cyIsInNyYy9jb21waWxlci9zY2FsZS50cyIsInNyYy9jb21waWxlci9zdGFjay50cyIsInNyYy9jb21waWxlci9zdHlsZS50cyIsInNyYy9jb21waWxlci9zdWJmYWNldC50cyIsInNyYy9jb21waWxlci90aW1lLnRzIiwic3JjL2RhdGEudHMiLCJzcmMvZW5jb2RpbmcudHMiLCJzcmMvZmllbGRkZWYudHMiLCJzcmMvbWFya3R5cGUudHMiLCJzcmMvc2NoZW1hL2F4aXMuc2NoZW1hLnRzIiwic3JjL3NjaGVtYS9iaW4uc2NoZW1hLnRzIiwic3JjL3NjaGVtYS9jb25maWcuc2NoZW1hLnRzIiwic3JjL3NjaGVtYS9kYXRhLnNjaGVtYS50cyIsInNyYy9zY2hlbWEvZW5jb2Rpbmcuc2NoZW1hLnRzIiwic3JjL3NjaGVtYS9maWVsZGRlZi5zY2hlbWEudHMiLCJzcmMvc2NoZW1hL2xlZ2VuZC5zY2hlbWEudHMiLCJzcmMvc2NoZW1hL21hcmt0eXBlLnNjaGVtYS50cyIsInNyYy9zY2hlbWEvc2NhbGUuc2NoZW1hLnRzIiwic3JjL3NjaGVtYS9zY2hlbWEudHMiLCJzcmMvc2NoZW1hL3NjaGVtYXV0aWwudHMiLCJzcmMvc2NoZW1hL3NvcnQuc2NoZW1hLnRzIiwic3JjL3Nob3J0aGFuZC50cyIsInNyYy9zcGVjLnRzIiwic3JjL3RpbWV1bml0LnRzIiwic3JjL3R5cGUudHMiLCJzcmMvdXRpbC50cyIsInNyYy92YWxpZGF0ZS50cyIsInNyYy92bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNUQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDanFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3IwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1VGEscUJBQWEsR0FBRztJQUMzQixRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVTtJQUNqRCxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU87SUFDMUQsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSztJQUN4RCxRQUFRLEVBQUUsUUFBUTtDQUNuQixDQUFDO0FBRVcseUJBQWlCLEdBQUc7SUFDL0IsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLO0NBQ3pFLENBQUM7O0FDVFcsdUJBQWUsR0FBRyxFQUFFLENBQUM7O0FDQWxDOzs7R0FHRztBQUVVLFNBQUMsR0FBRyxHQUFHLENBQUM7QUFDUixTQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ1IsV0FBRyxHQUFHLEtBQUssQ0FBQztBQUNaLGNBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIsYUFBSyxHQUFHLE9BQU8sQ0FBQztBQUNoQixZQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2QsYUFBSyxHQUFHLE9BQU8sQ0FBQztBQUNoQixZQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2QsY0FBTSxHQUFHLFFBQVEsQ0FBQztBQUVsQixnQkFBUSxHQUFHLENBQUMsU0FBQyxFQUFFLFNBQUMsRUFBRSxXQUFHLEVBQUUsY0FBTSxFQUFFLFlBQUksRUFBRSxhQUFLLEVBQUUsYUFBSyxFQUFFLFlBQUksRUFBRSxjQUFNLENBQUMsQ0FBQztBQU03RSxDQUFDO0FBT0YsMEJBQWlDLE9BQWdCO0lBQy9DLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEIsS0FBSyxTQUFDLENBQUM7UUFDUCxLQUFLLFNBQUMsQ0FBQztRQUNQLEtBQUssYUFBSztZQUNSLE1BQU0sQ0FBQztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDO1FBQ0osS0FBSyxXQUFHLENBQUM7UUFDVCxLQUFLLGNBQU0sQ0FBQztRQUNaLEtBQUssYUFBSyxDQUFDO1FBQ1gsS0FBSyxjQUFNO1lBQ1QsTUFBTSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUM7UUFDSixLQUFLLFlBQUksQ0FBQztRQUNWLEtBQUssWUFBSTtZQUNQLE1BQU0sQ0FBQztnQkFDTCxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDO0lBQ04sQ0FBQztJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQXpCZSx3QkFBZ0IsbUJBeUIvQixDQUFBOztBQ2pERCxvQkFBOEIsUUFBUSxDQUFDLENBQUE7QUFDdkMsd0JBQXdELFlBQVksQ0FBQyxDQUFBO0FBQ3JFLHFCQUE4QixTQUFTLENBQUMsQ0FBQTtBQUN4QyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyx5QkFBd0IsYUFBYSxDQUFDLENBQUE7QUFDdEMsSUFBWSxNQUFNLFdBQU0sa0JBQWtCLENBQUMsQ0FBQTtBQUMzQyxJQUFZLFVBQVUsV0FBTSxzQkFBc0IsQ0FBQyxDQUFBO0FBRW5ELHFCQUEwQixTQUFTLENBQUMsQ0FBQTtBQUNwQyxJQUFZLElBQUksV0FBTSxTQUFTLENBQUMsQ0FBQTtBQU1oQztJQU1FLGVBQVksSUFBVSxFQUFFLEtBQU07UUF1SjlCLGlCQUFZLEdBQUcsVUFBUyxPQUFpQjtZQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUF6SkEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBR3hDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBUyxRQUFRO1lBQ3ZELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixRQUFRLENBQUMsSUFBSSxHQUFHLGtCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFFTyxrQ0FBa0IsR0FBMUI7UUFDRSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUMsR0FBRyxlQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQyxHQUFHLGdCQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTNFLEVBQUUsQ0FBQyxDQUFDLEtBQUs7WUFDTCxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUs7WUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBQyxDQUFDLENBQUM7WUFFbkMsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDO29CQUNMLGNBQWMsRUFBRSxXQUFDO29CQUNqQixZQUFZLEVBQUUsV0FBQztvQkFDZixZQUFZLEVBQUUsS0FBSztvQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUM3QixDQUFDO1lBQ0osQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUM7b0JBQ0wsY0FBYyxFQUFFLFdBQUM7b0JBQ2pCLFlBQVksRUFBRSxXQUFDO29CQUNmLFlBQVksRUFBRSxLQUFLO29CQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQzdCLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sYUFBYyxFQUFFLFdBQVk7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUNoRCxJQUFTLENBQUM7UUFFWixJQUFJLEdBQUc7WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQzdCLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBR0QsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0JBQUUsR0FBRixVQUFHLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQkFBRyxHQUFILFVBQUksT0FBZ0I7UUFFbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDMUQsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdELHdCQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLEdBQUk7UUFDN0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUtELHNCQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQkFBVSxHQUFWLFVBQVcsT0FBZ0I7UUFDekIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQ3hJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzNFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7SUFFRCx5QkFBUyxHQUFULFVBQVUsT0FBZ0IsRUFBRSxZQUFzQjtRQUNoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUV6RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2hELENBQUM7UUFJRCxZQUFZLEdBQUcsWUFBWTtZQUUzQixDQUFDLE9BQU8sS0FBSyxXQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsT0FBTyxLQUFLLFdBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxPQUFnQjtRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzlDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssYUFBRyxJQUFJLE9BQU8sS0FBSyxnQkFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELG1CQUFHLEdBQUgsVUFBSSxPQUFnQjtRQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDO1lBQ2YsTUFBTSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxxQkFBZTthQUN6QixDQUFDO1FBQ0osTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFPRCxtQkFBRyxHQUFILFVBQUksQ0FBQztRQUNILE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sQ0FBQyxFQUFFLElBQUk7UUFDWixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxPQUFnQixFQUFFLElBQWdCO1FBQ3hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBR0QsOEJBQWMsR0FBZCxVQUFlLE9BQWdCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN0QixVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN0QixVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN0QixVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLGNBQU8sR0FBRyxhQUFNLENBQUM7SUFDL0MsQ0FBQztJQUdELHVCQUFPLEdBQVA7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFJLEVBQUUsUUFBa0IsRUFBRSxPQUFnQjtZQUNwRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBQyxJQUFJLE9BQU8sS0FBSyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFjLEVBQUUsS0FBZSxFQUFFLE9BQWdCO1lBQzNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sS0FBSyxhQUFHLElBQUksT0FBTyxLQUFLLGdCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxPQUFnQixFQUFFLEtBQUs7UUFDakMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxvQkFBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFHRCx5QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxJQUFZO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsWUFBQztBQUFELENBalBBLEFBaVBDLElBQUE7QUFqUFksYUFBSyxRQWlQakIsQ0FBQTs7QUNwUUQscUJBQXlCLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksSUFBSSxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ2hDLHFCQUF1RCxTQUFTLENBQUMsQ0FBQTtBQUNqRSx3QkFBeUMsWUFBWSxDQUFDLENBQUE7QUFDdEQsSUFBWSxJQUFJLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFLL0IscUJBQTRCLE9BQWdCLEVBQUUsS0FBWSxFQUFFLE1BQU0sRUFBRSxLQUFLO0lBQ3ZFLElBQUksS0FBSyxHQUFHLE9BQU8sS0FBSyxnQkFBTSxFQUM1QixLQUFLLEdBQUcsT0FBTyxLQUFLLGFBQUcsRUFDdkIsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRSxPQUFPLENBQUM7SUFJNUMsSUFBSSxHQUFHLEdBQU87UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQztJQUdGO1FBRUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhO1FBRTFGLGFBQWEsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhO1FBQzFFLFFBQVEsRUFBRSxXQUFXO0tBQ3RCLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUTtRQUN6QixJQUFJLE1BQTZFLENBQUM7UUFFbEYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQzFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBR0gsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUUxRDtRQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU87UUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZO0tBQ3BDLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSztRQUN0QixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQzVELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNmLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDdEMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFoRGUsbUJBQVcsY0FnRDFCLENBQUE7QUFFRCxnQkFBdUIsS0FBWSxFQUFFLE9BQWdCO0lBQ25ELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxtQkFBWSxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBbEJlLGNBQU0sU0FrQnJCLENBQUE7QUFFRCxjQUFxQixLQUFZLEVBQUUsT0FBZ0I7SUFDakQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzdDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBTUQsTUFBTSxDQUFDLE9BQU8sS0FBSyxhQUFHLElBQUksT0FBTyxLQUFLLGdCQUFNO1FBQzFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxtQkFBWSxFQUFFLGVBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFaZSxZQUFJLE9BWW5CLENBQUE7QUFFRCxlQUFzQixLQUFZLEVBQUUsT0FBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUc7SUFDdEUsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFYixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFWZSxhQUFLLFFBVXBCLENBQUE7QUFBQSxDQUFDO0FBRUYsZ0JBQXVCLEtBQVksRUFBRSxPQUFnQixFQUFFLE1BQU07SUFDM0QsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxFQUFFLENBQUEsQ0FBQyxPQUFPLEtBQUssYUFBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFWZSxjQUFNLFNBVXJCLENBQUE7QUFFRCxnQkFBdUIsS0FBWSxFQUFFLE9BQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUs7SUFDbEUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLGdCQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxXQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHeEcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFaZSxjQUFNLFNBWXJCLENBQUE7QUFFRCxlQUFzQixLQUFZLEVBQUUsT0FBZ0I7SUFDbEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQVplLGFBQUssUUFZcEIsQ0FBQTtBQUVELGtCQUF5QixLQUFZLEVBQUUsT0FBZ0I7SUFDckQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxhQUFHLElBQUksT0FBTyxLQUFLLGdCQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBVGUsZ0JBQVEsV0FTdkIsQ0FBQTtBQUdELGVBQXNCLEtBQVksRUFBRSxPQUFnQixFQUFFLE1BQU07SUFDMUQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFHRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTNDLElBQUksU0FBUyxDQUFDO0lBQ2QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDcEMsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssV0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssV0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQ3ZFLENBQUM7QUFuQmUsYUFBSyxRQW1CcEIsQ0FBQTtBQUdELHFCQUE0QixLQUFZLEVBQUUsT0FBZ0I7SUFFeEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFekIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoQixLQUFLLGFBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25CLEtBQUssZ0JBQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFWZSxtQkFBVyxjQVUxQixDQUFBO0FBRUQsSUFBVSxVQUFVLENBc0huQjtBQXRIRCxXQUFVLFVBQVUsRUFBQyxDQUFDO0lBQ3BCLGNBQXFCLEtBQVksRUFBRSxPQUFnQixFQUFFLElBQUk7UUFDdkQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLGFBQUcsSUFBSSxPQUFPLEtBQUssZ0JBQU0sQ0FBQyxDQUFDLENBQUM7WUFFMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2pCLE9BQU8sRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUM7YUFDcEIsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFSZSxlQUFJLE9BUW5CLENBQUE7SUFFRCxjQUFxQixLQUFZLEVBQUUsT0FBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDcEUsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVyQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxnQkFBTSxDQUFDLENBQUMsQ0FBQztnQkFFdkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUU3QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFHckUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ2pCLENBQUMsRUFBRTt3QkFDRCxNQUFNLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFFLFdBQVcsR0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFFM0QsS0FBSyxFQUFFLFFBQVE7d0JBQ2YsS0FBSyxFQUFFLE1BQU07cUJBQ2Q7b0JBQ0QsQ0FBQyxFQUFFO3dCQUNELEtBQUssRUFBRSxDQUFFLElBQUksR0FBRyxPQUFPO3FCQUN4QjtvQkFDRCxFQUFFLEVBQUU7d0JBQ0YsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFDO3dCQUNuQyxNQUFNLEVBQUUsSUFBSSxHQUFHLE9BQU87d0JBQ3RCLElBQUksRUFBRSxJQUFJO3FCQUNYO29CQUNELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUNoRCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2lCQUMxRCxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxhQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBRTdDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUlwRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsQ0FBQyxFQUFFO3dCQUNELE1BQU0sRUFBRSxpQkFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFeEQsS0FBSyxFQUFFLEtBQUs7d0JBQ1osS0FBSyxFQUFFLE1BQU07cUJBQ2Q7b0JBQ0QsQ0FBQyxFQUFFO3dCQUNELEtBQUssRUFBRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztxQkFDckM7b0JBQ0QsRUFBRSxFQUFFO3dCQUNGLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBQzt3QkFDbEMsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO3dCQUVyQyxJQUFJLEVBQUUsSUFBSTtxQkFDWDtvQkFDRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtvQkFDaEQsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtpQkFDMUQsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDakIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNqQixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDNUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7aUJBQ3RELEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQS9EZSxlQUFJLE9BK0RuQixDQUFBO0lBRUQsZ0JBQXVCLEtBQVksRUFBRSxPQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRztRQUN0RSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxlQUFRLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDakIsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQzthQUNqRCxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxjQUFPLEVBQUUsY0FBTyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFFL0UsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2pCLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsMkJBQTJCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTtpQkFDNUU7YUFDRixFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQztvQkFDbkIsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEtBQUssS0FBSyxHQUFHLE1BQU0sR0FBRSxPQUFPLEVBQUM7b0JBQ3RELFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7aUJBQzVCLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQTdCZSxpQkFBTSxTQTZCckIsQ0FBQTtJQUVELGVBQXNCLEtBQVksRUFBRSxPQUFnQixFQUFFLElBQUksRUFBRSxNQUFNO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxhQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNqQixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO2dCQUNqQixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDO2dCQUN2QixRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDO2dCQUMzQixFQUFFLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDO2FBQ3ZDLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBVmUsZ0JBQUssUUFVcEIsQ0FBQTtBQUNILENBQUMsRUF0SFMsVUFBVSxLQUFWLFVBQVUsUUFzSG5COztBQ25URCxzQkFBb0IsU0FBUyxDQUFDLENBQUE7QUFFOUIsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMscUJBQTBCLFFBQVEsQ0FBQyxDQUFBO0FBQ25DLHFCQUEwQixRQUFRLENBQUMsQ0FBQTtBQUNuQyx1QkFBNkIsVUFBVSxDQUFDLENBQUE7QUFDeEMsc0JBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBQ3JDLHNCQUErQyxTQUFTLENBQUMsQ0FBQTtBQUd6RCxzQkFBb0IsU0FBUyxDQUFDLENBQUE7QUFDOUIsdUJBQXFCLFVBQVUsQ0FBQyxDQUFBO0FBQ2hDLHNCQUFvQixTQUFTLENBQUMsQ0FBQTtBQUM5QixzQkFBb0IsU0FBUyxDQUFDLENBQUE7QUFDOUIseUJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBRXBDLHFCQUFtQyxTQUFTLENBQUMsQ0FBQTtBQUM3Qyx3QkFBZ0MsWUFBWSxDQUFDLENBQUE7QUFFN0Msc0JBQW9CLFNBQVMsQ0FBQztBQUF0Qiw4QkFBc0I7QUFFOUIsaUJBQXdCLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBTTtJQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEdBQUcsWUFBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLE1BQU0sR0FBRyxnQkFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUdwQyxJQUFJLE1BQU0sR0FBTztRQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztRQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07UUFDckIsT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsa0JBQVcsQ0FBQyxLQUFLLENBQUM7UUFDeEIsS0FBSyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLE9BQU87Z0JBQ2IsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRTt3QkFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7NEJBQ2QsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBQzs0QkFDekIsRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLEVBQUM7d0JBQ2xDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVTs0QkFDakIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBQzs0QkFDMUIsRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUM7cUJBQ25DO2lCQUNGO2FBQ0YsQ0FBQztLQUNILENBQUM7SUFHSixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUc1QixJQUFJLFFBQVEsR0FBRyxlQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxvQkFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQzNELElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVWLGVBQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsSUFBTSxVQUFVLEdBQUcsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxDQUFDO0lBRzlELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUU5QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXJDLGtCQUFVLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBQyxHQUFHLFdBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUdELElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxTQUFTO1FBQ3JFLE1BQU0sQ0FBQyx5QkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixJQUFJLE9BQU8sR0FBRyx1QkFBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUc5QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLEdBQUcsZUFBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEtBQUssQ0FBQyxNQUFNLEdBQUcscUJBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXJFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVcsQ0FBQyxXQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFXLENBQUMsV0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUM7UUFDTCxJQUFJLEVBQUUsTUFBTTtLQUViLENBQUM7QUFDSixDQUFDO0FBL0dlLGVBQU8sVUErR3RCLENBQUE7O0FDdklELElBQVksVUFBVSxXQUFNLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQVksSUFBSSxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBS2hDLG9CQUE4QixRQUFRLENBQUMsQ0FBQTtBQUV2QyxxQkFBdUMsU0FBUyxDQUFDLENBQUE7QUFDakQsSUFBWSxJQUFJLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDL0IscUJBQXVELFNBQVMsQ0FBQyxDQUFBO0FBV2pFLHFCQUE0QixLQUFZO0lBQ3RDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTlCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUtELGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRzlDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQXBCZSxtQkFBVyxjQW9CMUIsQ0FBQTtBQVlELElBQWlCLE1BQU0sQ0E0SXRCO0FBNUlELFdBQWlCLFFBQU0sRUFBQyxDQUFDO0lBQ3ZCLGFBQW9CLEtBQVk7UUFDOUIsSUFBSSxNQUFNLEdBQVUsRUFBQyxJQUFJLEVBQUUsYUFBTSxFQUFDLENBQUM7UUFHbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDcEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFDLENBQUM7UUFDbEQsQ0FBQztRQUdELElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7UUFFRCxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFwQmUsWUFBRyxNQW9CbEIsQ0FBQTtJQUVELHFCQUFxQixLQUFZO1FBQy9CLElBQUksS0FBSyxDQUFDO1FBRVYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLFFBQWtCO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxtQkFBWSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBQyxNQUFNLENBQUM7Z0JBQ3pDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQU1ELG1CQUEwQixLQUFZO1FBR3BDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQ3RDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUN2QixhQUFhLENBQUMsS0FBSyxDQUFDLEVBQ3BCLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFDbkIsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQVRlLGtCQUFTLFlBU3hCLENBQUE7SUFFRCx1QkFBOEIsS0FBWTtRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFTLFNBQVMsRUFBRSxRQUFrQixFQUFFLE9BQWdCO1lBQzFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBRWxFLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztpQkFDaEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQWJlLHNCQUFhLGdCQWE1QixDQUFBO0lBRUQsc0JBQTZCLEtBQVk7UUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBUyxTQUFTLEVBQUUsUUFBa0IsRUFBRSxPQUFnQjtZQUMxRSxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDYixJQUFJLEVBQUUsS0FBSztvQkFDWCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7b0JBQ3JCLE1BQU0sRUFBRTt3QkFDTixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUM7d0JBQ3JELEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQztxQkFDbEQ7b0JBQ0QsT0FBTyxFQUFFLE9BQU8sR0FBRyxLQUFLLFNBQVMsR0FBRyxxQkFBZSxHQUFHLEdBQUcsQ0FBQyxPQUFPO2lCQUNsRSxDQUFDLENBQUM7Z0JBRUgsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDYixJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUM7b0JBQ25ELElBQUksRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLEdBQUcsS0FBSztpQkFDMUksQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQXRCZSxxQkFBWSxlQXNCM0IsQ0FBQTtJQUtELDZCQUFvQyxLQUFZO1FBQzlDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUM3QyxVQUFTLGNBQWMsRUFBRSxTQUFTLEVBQUUsU0FBUztZQUMzQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFHN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLG1CQUFZLENBQUMsQ0FBQztnQkFDakYsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLGVBQVEsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBTyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUUsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzlCLENBQUM7b0JBQ0MsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBUyxTQUFTO3dCQUN6QyxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDO0lBdEJlLDRCQUFtQixzQkFzQmxDLENBQUE7SUFFRCx5QkFBZ0MsS0FBWTtRQUMxQyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsTUFBTTthQUNmLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDVixDQUFDO0lBTmUsd0JBQWUsa0JBTTlCLENBQUE7SUFFRCwwQkFBaUMsS0FBWTtRQUMzQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWixDQUFDO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBUyxTQUFTLEVBQUUsT0FBTztZQUNqRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFWZSx5QkFBZ0IsbUJBVS9CLENBQUE7QUFDSCxDQUFDLEVBNUlnQixNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUE0SXRCO0FBRUQsSUFBaUIsT0FBTyxDQXdEdkI7QUF4REQsV0FBaUIsT0FBTyxFQUFDLENBQUM7SUFDeEIsYUFBb0IsS0FBWTtRQUU5QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFHZCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFFZCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLFFBQVEsRUFBRSxPQUFnQjtZQUMvQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDcEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNsRCxDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUVqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7b0JBQ3RHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDbEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUNwRyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUVILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFJOUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBUyxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUs7WUFDcEUsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQztnQkFDTCxJQUFJLEVBQUUsY0FBTztnQkFDYixNQUFNLEVBQUUsYUFBTTtnQkFDZCxTQUFTLEVBQUUsQ0FBQzt3QkFDVixJQUFJLEVBQUUsV0FBVzt3QkFDakIsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLFNBQVMsRUFBRSxTQUFTO3FCQUNyQixDQUFDO2FBQ0gsQ0FBQztRQUNKLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXREZSxXQUFHLE1Bc0RsQixDQUFBO0lBQUEsQ0FBQztBQUNKLENBQUMsRUF4RGdCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQXdEdkI7QUFFRCxJQUFpQixLQUFLLENBaUNyQjtBQWpDRCxXQUFpQixLQUFLLEVBQUMsQ0FBQztJQUl0QixhQUFvQixLQUFZLEVBQUUsVUFBMkI7UUFDM0QsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUU1QixJQUFJLE9BQU8sR0FBVTtZQUNuQixJQUFJLEVBQUUsY0FBTztZQUNiLE1BQU0sRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3pCLFNBQVMsRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxXQUFXO29CQUVqQixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztvQkFDeEQsU0FBUyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDO2lCQUNqRSxDQUFDO1NBQ0gsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsTUFBTTtnQkFDZixTQUFTLEVBQUUsQ0FBQzt3QkFDVixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBRVosS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDO3FCQUNyRCxDQUFDO2FBQ0gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQTVCZSxTQUFHLE1BNEJsQixDQUFBO0lBQUEsQ0FBQztBQUNKLENBQUMsRUFqQ2dCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQWlDckI7QUFFRCwyQkFBa0MsU0FBUyxFQUFFLEtBQVk7SUFDdkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBRSxPQUFPO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRyxNQUFNO2FBQ25ELENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFUZSx5QkFBaUIsb0JBU2hDLENBQUE7O0FDelNELElBQVksSUFBSSxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ2hDLHdCQUFnQyxZQUFZLENBQUMsQ0FBQTtBQUc3QyxxQkFBMEIsUUFBUSxDQUFDLENBQUE7QUFDbkMsc0JBQStDLFNBQVMsQ0FBQyxDQUFBO0FBRXpELGtCQUFrQixJQUFJLEVBQUUsR0FBRztJQUN6QixHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUdoQixJQUFJLEtBQUssR0FBTztRQUNkLElBQUksRUFBRSxJQUFJLElBQUksU0FBUztRQUN2QixJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFBQztnQkFDN0MsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUM7YUFDakQ7U0FDRjtLQUNGLENBQUM7SUFFRixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDYixLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsbUJBQXdCLEtBQUssRUFBRSxLQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLO0lBQ2xGLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25DLElBQUksU0FBUyxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7SUFFakQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxDQUFDLENBQUM7SUFFeEQsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUMsQ0FBQztJQUcxRCxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDO0lBRzlDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLGFBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFHLENBQUMsRUFBQyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBQyxDQUFDO1FBRTVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVELE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3pCLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQVcsQ0FBQyxXQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVM7WUFDdkUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFDLEtBQUssRUFBRSxnQkFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFNLENBQUMsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQztZQUN2RSxLQUFLLEVBQUUsTUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUM7WUFDNUMsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFFTCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVyxDQUFDLGFBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakIsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBVyxDQUFDLFdBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLGdCQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQyxFQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUM7UUFFMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBVyxDQUFDLFdBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUztZQUN2RSxDQUFDLEVBQUUsTUFBTSxJQUFJLEVBQUMsS0FBSyxFQUFFLGFBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFHLENBQUMsRUFBQztZQUNyRCxDQUFDLEVBQUUsTUFBTSxJQUFJLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQztZQUN2QixNQUFNLEVBQUUsTUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUM7WUFDOUMsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBVyxDQUFDLGdCQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQVcsQ0FBQyxXQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0lBSUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFhLENBQ3hELHlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNqRCxLQUFLLEVBQ0wsTUFBTSxFQUNOLEtBQUssRUFDTCxJQUFJLENBQ0wsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3hCLENBQUM7SUFHRCxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUF4R0Q7MkJBd0dDLENBQUE7O0FDOUlELG9EQUFvRDtBQUlwRCxJQUFZLFNBQVMsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUN2QyxxQkFBcUIsU0FBUyxDQUFDLENBQUE7QUFDL0Isd0JBQStDLFlBQVksQ0FBQyxDQUFBO0FBRTVELElBQVksSUFBSSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQy9CLHFCQUF1RCxTQUFTLENBQUMsQ0FBQTtBQUNqRSxxQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFFbkMsbUJBQXdCLEtBQVksRUFBRSxLQUFLO0lBQ3pDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUpEOzJCQUlDLENBQUE7QUFRRCxhQUFhLEtBQVksRUFBRSxLQUFLO0lBQzlCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBRyxDQUFDLEVBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsRUFDMUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLEVBQ25CLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxFQUNuQixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBR2hDLElBQUksWUFBWSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDL0UsWUFBWSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVoRixJQUFJLFlBQVksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztRQUN2RSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBRXpELElBQUksU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUdyRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsU0FBUyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuRixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLEdBQUcsTUFBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLGNBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNILENBQUM7SUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFNUIsVUFBVSxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixVQUFVLEdBQUcsTUFBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUQsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDM0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLGNBQWMsR0FBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxNQUFNLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELE1BQU0sQ0FBQztRQUVMLFNBQVMsRUFBRSxpQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxVQUFVLEVBQUUsaUJBQVUsQ0FBQyxVQUFVLENBQUM7UUFDbEMsV0FBVyxFQUFFLFdBQVc7UUFFeEIsS0FBSyxFQUFFLGlCQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3hCLE1BQU0sRUFBRSxpQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUUxQixDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsWUFBWSxFQUFDO1FBQy9CLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBRSxZQUFZLEVBQUM7S0FDaEMsQ0FBQztBQUNKLENBQUM7QUFFRCw0QkFBNEIsS0FBWSxFQUFFLE9BQWdCLEVBQUUsVUFBVTtJQUNwRSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDekQsQ0FBQztBQUdELHNCQUFzQixLQUFZLEVBQUUsS0FBSyxFQUFFLE9BQWdCO0lBQ3pELElBQUksUUFBUSxHQUFhLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQzlDLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLG1CQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxlQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxjQUFPLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZ0JBQWdCLEtBQVksRUFBRSxLQUFLLEVBQUUsTUFBTTtJQUN6QyxDQUFDLFdBQUMsRUFBRSxXQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPO1FBRTlCLElBQUksV0FBVyxHQUFHLE9BQU8sS0FBSyxXQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksU0FBUyxDQUFDO1FBRWQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLGVBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0QsU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBR1IsUUFBUSxDQUFDLElBQUksS0FBSyxtQkFBWSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEtBQUssT0FDM0QsQ0FBQyxDQUFDLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FDRCxPQUFPLEtBQUcsV0FHWixDQUFDLENBQUMsQ0FBQztnQkFDRCxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztRQUVSLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsYUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDekcsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBRU4sYUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDaEcsQ0FBQztJQUVILENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDOztBQzFKRCxJQUFZLElBQUksV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNoQyx3QkFBMEMsWUFBWSxDQUFDLENBQUE7QUFFdkQsSUFBWSxJQUFJLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDL0IscUJBQXVCLFNBQVMsQ0FBQyxDQUFBO0FBRWpDLHdCQUErQixLQUFZLEVBQUUsUUFBUTtJQUNuRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFFZCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsZUFBSyxFQUFFO1lBQ3BDLElBQUksRUFBRSxlQUFLO1NBRVosRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsY0FBSSxFQUFFO1lBQ25DLElBQUksRUFBRSxjQUFJO1NBQ1gsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsZUFBSyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxlQUFLO1NBQ2IsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQXRCZSxzQkFBYyxpQkFzQjdCLENBQUE7QUFFRCx1QkFBOEIsS0FBWSxFQUFFLE9BQWdCLEVBQUUsR0FBRyxFQUFFLFFBQVE7SUFDekUsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFHNUMsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBR2xDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxRQUFRO1FBQ3RELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUdILElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSztRQUM3RCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUM7WUFDekQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztZQUN0QyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQTNCZSxxQkFBYSxnQkEyQjVCLENBQUE7QUFFRCxlQUFzQixLQUFZLEVBQUUsT0FBZ0I7SUFDbEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFekMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFOZSxhQUFLLFFBTXBCLENBQUE7QUFFRCxJQUFVLFVBQVUsQ0FpRW5CO0FBakVELFdBQVUsVUFBVSxFQUFDLENBQUM7SUFDcEIsZ0JBQXVCLEtBQVksRUFBRSxPQUFnQixFQUFFLElBQUk7UUFDekQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxPQUFPLEdBQUUsUUFBUTtpQkFDekI7YUFDRixFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFYZSxpQkFBTSxTQVdyQixDQUFBO0lBRUQsaUJBQXdCLEtBQVksRUFBRSxPQUFnQixFQUFFLElBQUksRUFBRSxRQUFRO1FBQ3BFLElBQUksT0FBTyxHQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQztZQUVSLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUM7WUFFcEMsS0FBSyxPQUFPO2dCQUVWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssZUFBSyxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxlQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDO29CQUMvQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQztvQkFDdEQsQ0FBQztvQkFDRCxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLElBQUksT0FBTyxLQUFLLGVBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsZUFBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7b0JBQ3hELENBQUM7b0JBQ0QsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUMsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBRUQsS0FBSyxDQUFDO1lBQ1IsS0FBSyxNQUFNLENBQUM7WUFDWixLQUFLLE1BQU07Z0JBRVQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUVELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNaLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFFM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzdELENBQUM7SUFsRGUsa0JBQU8sVUFrRHRCLENBQUE7QUFDSCxDQUFDLEVBakVTLFVBQVUsS0FBVixVQUFVLFFBaUVuQjs7QUNuSUQsd0JBQTBELFlBQVksQ0FBQyxDQUFBO0FBQ3ZFLHFCQUEyQixTQUFTLENBQUMsQ0FBQTtBQUtyQyxzQkFBNkIsS0FBWSxFQUFFLE1BQU0sRUFBRSxLQUFLO0lBQ3RELElBQUksSUFBSSxHQUFHLEVBQUUsRUFDWCxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUNoQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRzNCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxFQUFFLEdBQUc7WUFDUCxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDO1lBQ2IsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQztZQUNiLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFDO1lBQzdCLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFDO1lBQzlCLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxlQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLEVBQUM7U0FDbkQsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUM7WUFDbEIsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNSLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUM7UUFDbEIsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQztLQUN4QixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQTlCZSxvQkFBWSxlQThCM0IsQ0FBQTtBQUVZLFdBQUcsR0FBRztJQUNqQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxTQUFTO0NBQ2hCLENBQUM7QUFFVyxZQUFJLEdBQUc7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsVUFBVTtDQUNqQixDQUFDO0FBRVcsWUFBSSxHQUFHO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLFVBQVU7Q0FDakIsQ0FBQztBQUVXLFlBQUksR0FBRztJQUNsQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxVQUFVO0NBQ2pCLENBQUM7QUFFVyxjQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDO0NBQ25DLENBQUM7QUFFVyxjQUFNLEdBQUc7SUFDcEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDO0NBQ25DLENBQUM7QUFFVyxhQUFLLEdBQUc7SUFDbkIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsV0FBVztDQUNsQixDQUFDO0FBRVcsWUFBSSxHQUFHO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLFVBQVU7Q0FDakIsQ0FBQztBQUVGLG1CQUFtQixDQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUs7SUFFeEMsSUFBSSxDQUFDLEdBQU8sRUFBRSxDQUFDO0lBR2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQy9ELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxXQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLENBQUMsRUFBQyxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsY0FBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQUksQ0FBQyxFQUFDLENBQUM7WUFDbkQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxLQUFLLEdBQUc7b0JBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUM1QyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUNYLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFBQyxDQUFDO0lBQ3BDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxXQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsRUFBRSxHQUFHO2dCQUNMLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ3hCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDckMsQ0FBQztRQUNKLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUMsS0FBSyxFQUFFLGNBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsRUFBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxNQUFNLEdBQUc7Z0JBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUM1QyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ1gsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxlQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLEVBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFFMUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxxQkFBcUIsQ0FBUSxFQUFFLE1BQU0sRUFBRSxLQUFLO0lBRTFDLElBQUksQ0FBQyxHQUFPLEVBQUUsQ0FBQztJQUdmLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxXQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO0lBQzNELENBQUM7SUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztJQUMzRCxDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxjQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBSSxDQUFDLEVBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQUksQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUMsS0FBSyxFQUFFLGVBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsRUFBQyxDQUFDO0lBQ3JELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUMsS0FBSyxFQUFFLGVBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsRUFBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsZUFBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxFQUFDLENBQUM7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDekQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQztJQUUxQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELG9CQUFvQixDQUFRLEVBQUMsTUFBTSxFQUFFLEtBQUs7SUFFeEMsSUFBSSxDQUFDLEdBQU8sRUFBRSxDQUFDO0lBR2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQzlELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ25CLENBQUM7SUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFDLEtBQUssRUFBRSxlQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLEVBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBRTFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDO0lBRWpELE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBR0Qsb0JBQW9CLENBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSztJQUV6QyxJQUFJLENBQUMsR0FBTyxFQUFFLENBQUM7SUFHZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUQsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUNuQixDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxXQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDO0lBQzlELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxlQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBSyxDQUFDLEVBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsb0JBQW9CLENBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSztJQUV6QyxJQUFJLENBQUMsR0FBTyxFQUFFLENBQUM7SUFHZixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsV0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDbkIsQ0FBQztJQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxXQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUNuQixDQUFDO0lBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsRUFBQyxDQUFDO0lBQ2xFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDeEIsQ0FBQztJQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBQyxLQUFLLEVBQUUsZUFBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxFQUFDLENBQUM7SUFDcEQsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzFELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQztRQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFFekMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCw0QkFBNEIsS0FBSztJQUMvQixNQUFNLENBQUMsVUFBUyxDQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUs7UUFFckMsSUFBSSxDQUFDLEdBQU8sRUFBRSxDQUFDO1FBR2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLFdBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQzlELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7UUFDM0QsQ0FBQztRQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxXQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBQyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQzNELENBQUM7UUFHRCxFQUFF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O2dCQUNmLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRXhILEtBQUssWUFBWTtnQkFDZixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFdE8sS0FBSyxhQUFhO2dCQUNoQixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFdE8sS0FBSyxhQUFhO2dCQUNoQixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeE8sQ0FBQztRQUlELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUdqQyxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFHeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFHRCxJQUFJLEVBQUUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNyRSxJQUFJLEdBQUcsQ0FBQyxFQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBR3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBNUNlLGNBQU8sVUE0Q3RCLENBQUE7SUFFRCxxQkFBNEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXO1FBQ2pELElBQUksWUFBWSxHQUFHLHlCQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFIZSxrQkFBVyxjQUcxQixDQUFBO0FBQ0gsQ0FBQyxFQW5EZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBbUR0Qjs7QUN2YkQsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFtQmhDLG1CQUF3QixLQUFZLEVBQUUsSUFBSSxFQUFFLFVBQTJCO0lBQ3JFLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7SUFDeEMsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztJQUUzQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLElBQUksVUFBVSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDcEMsSUFBSSxRQUFRLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUVoQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFaEMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNkLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsTUFBTSxFQUFFLE9BQU87WUFDZixLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZO1FBQ3JDLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDL0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVztZQUNwQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDbkMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUN0QixHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHL0QsSUFBSSxjQUFjLEdBQW1CO1FBQ25DLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDbkMsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUM7S0FDM0MsQ0FBQztJQUVGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QixjQUFjLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUdqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRztRQUNyQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixLQUFLLEVBQUUsVUFBVTtLQUNsQixDQUFDO0lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxHQUFHO1FBQzNDLEtBQUssRUFBRSxZQUFZO1FBQ25CLEtBQUssRUFBRSxRQUFRO0tBQ2hCLENBQUM7QUFDSixDQUFDO0FBeEREOzJCQXdEQyxDQUFBOztBQzFFRCxJQUFZLFVBQVUsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMxQyx3QkFBeUMsWUFBWSxDQUFDLENBQUE7QUFFdEQsbUJBQXdCLEtBQVksRUFBRSxLQUFLO0lBQ3pDLE1BQU0sQ0FBQztRQUNMLE9BQU8sRUFBRSxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUN2QyxDQUFDO0FBQ0osQ0FBQztBQUpEOzJCQUlDLENBQUE7QUFBQSxDQUFDO0FBRUYseUJBQXlCLEtBQVksRUFBRSxLQUFLO0lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsU0FBUyxHQUFHLENBQUMsQ0FBQztRQU9kLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBUyxRQUFrQixFQUFFLE9BQWdCO1lBRXpELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxhQUFHLElBQUksT0FBTyxLQUFLLGdCQUFNO2dCQUNyQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssV0FBQyxJQUFJLE9BQU8sS0FBSyxXQUFDLENBQUM7b0JBQ2xDLFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQ3JDLENBQUMsQ0FBQyxDQUFDO2dCQUNILFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFHTixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFWCxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUczQixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsWUFBWSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsWUFBWSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsU0FBUyxJQUFJLFlBQVksQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNqQixDQUFDOztBQ3BFRCxtQkFBd0IsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPO0lBQzFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDcEIsSUFBSSxDQUFDLEdBQUc7UUFDTixJQUFJLEVBQUUsVUFBVTtRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLEVBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFBQzthQUNuQztTQUNGO1FBQ0QsS0FBSyxFQUFFLENBQUM7S0FDVCxDQUFDO0lBRUYsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUdqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBckJEOzJCQXFCQyxDQUFBOztBQ3JCRCx5REFBeUQ7QUFFekQsK0JBQXdCLGdCQUFnQixDQUFDLENBQUE7QUFLekMsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDaEMsd0JBQTBDLFlBQVksQ0FBQyxDQUFBO0FBQ3ZELHFCQUF1QixTQUFTLENBQUMsQ0FBQTtBQUtqQyxJQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVsRCxxQkFBNEIsUUFBa0IsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUk7SUFDckUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDMUIsS0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMxQixLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3hCLEtBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN2QixLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3hCLEtBQUssTUFBTTtZQUNULElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQzlCLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUFDLENBQUM7WUFFL0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2dCQUN0QixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBcEJlLG1CQUFXLGNBb0IxQixDQUFBO0FBRUQsaUJBQXdCLFFBQVEsRUFBRSxRQUFnQjtJQUVoRCxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDbkMsQ0FBQztBQUplLGVBQU8sVUFJdEIsQ0FBQTtBQUVELG1CQUEwQixRQUFRLEVBQUUsS0FBWTtJQUM5QyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssTUFBTTtZQUNULE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssS0FBSztZQUNSLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFUixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxDQUFDLElBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsS0FBSyxNQUFNO1lBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFHRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQywwQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNqRCxDQUFDO0FBdEJlLGlCQUFTLFlBc0J4QixDQUFBO0FBRUQsZUFBc0IsUUFBUSxFQUFFLEtBQVk7SUFDMUMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxFQUNwRCxVQUFVLENBQUM7SUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssS0FBSztZQUNSLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQztRQUNSLEtBQUssT0FBTztZQUNWLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDO0lBQ1YsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQy9CLFVBQVMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FDaEQsR0FBRyxVQUFVLENBQUM7SUFDbkIsQ0FBQztJQUNELE1BQU0sQ0FBQztBQUNULENBQUM7QUFqQmUsYUFBSyxRQWlCcEIsQ0FBQTtBQU9ELGdCQUF1QixLQUFZO0lBQ2pDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBUyxNQUFNLEVBQUUsUUFBUTtRQUNqRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxJQUFJLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVDLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFYZSxjQUFNLFNBV3JCLENBQUE7QUFFRCxxQkFBNEIsUUFBUTtJQUNsQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLE9BQU87WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVhlLG1CQUFXLGNBVzFCLENBQUE7QUFHRCxJQUFpQixLQUFLLENBcUNyQjtBQXJDRCxXQUFpQixLQUFLLEVBQUMsQ0FBQztJQUV0QixhQUFvQixRQUFRLEVBQUUsS0FBWTtRQUN4QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU8sR0FBQyxRQUFRO2dCQUN0QixJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLEtBQUssRUFBRSxRQUFRO2FBQ2hCLENBQUM7UUFDSixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFaZSxTQUFHLE1BWWxCLENBQUE7SUFFRCxjQUFxQixRQUFRLEVBQUUsT0FBZ0I7UUFDN0MsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLGVBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBR0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLEtBQUssZ0JBQU0sSUFBSSxPQUFPLEtBQUssYUFBRyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDL0YsQ0FBQztJQVBlLFVBQUksT0FPbkIsQ0FBQTtJQUVELGdCQUF1QixRQUFRLEVBQUUsT0FBaUI7UUFDaEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxLQUFLLGVBQUssQ0FBQztRQUNoQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1RCxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFELEtBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEQsS0FBSyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6RCxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVhlLFlBQU0sU0FXckIsQ0FBQTtBQUNILENBQUMsRUFyQ2dCLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXFDckI7QUFHRCxrQkFBeUIsUUFBUTtJQUMvQixNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxPQUFPO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUM7QUFQZSxnQkFBUSxXQU92QixDQUFBOztBQ3RLRDs7R0FFRztBQUVILElBQVksSUFBSSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQy9CLHFCQUF1RCxRQUFRLENBQUMsQ0FBQTtBQUVuRCxlQUFPLEdBQUcsU0FBUyxDQUFDO0FBQ3BCLGNBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIsZUFBTyxHQUFHLFNBQVMsQ0FBQztBQUlwQixhQUFLLEdBQUc7SUFDbkIsU0FBUyxFQUFFLGNBQU87SUFDbEIsUUFBUSxFQUFFLG1CQUFZO0lBQ3RCLFNBQVMsRUFBRSxtQkFBWTtJQUN2QixNQUFNLEVBQUUsZUFBUTtJQUNoQixRQUFRLEVBQUUsY0FBTztDQUNsQixDQUFDO0FBRUYsZUFBc0IsSUFBdUI7SUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQUMsRUFBRSxPQUFPO1FBQ3ZDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLEVBQUU7UUFDRCxHQUFHLEVBQUU7WUFDSCxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDaEIsR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFaZSxhQUFLLFFBWXBCLENBQUE7O0FDN0JELHdCQUFnQyxXQUFXLENBQUMsQ0FBQTtBQUk1QyxzQkFBNkIsUUFBa0I7SUFDN0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUM7QUFOZSxvQkFBWSxlQU0zQixDQUFBO0FBRUQsYUFBb0IsUUFBa0IsRUFBRSxPQUFnQjtJQUN0RCxJQUFJLFFBQVEsR0FBYSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQztBQUNwQyxDQUFDO0FBSGUsV0FBRyxNQUdsQixDQUFBO0FBRUQscUJBQTRCLFFBQWtCO0lBQzVDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBUGUsbUJBQVcsY0FPMUIsQ0FBQTtBQUVELGlCQUF3QixRQUFrQixFQUNsQixDQUErQztJQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixrQkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFTLE9BQU87UUFDL0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBUmUsZUFBTyxVQVF0QixDQUFBO0FBRUQsYUFBb0IsUUFBa0IsRUFDbEIsQ0FBaUQ7SUFDbkUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2Isa0JBQVEsQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQVRlLFdBQUcsTUFTbEIsQ0FBQTtBQUVELGdCQUF1QixRQUFrQixFQUN2QixDQUEyRCxFQUMzRCxJQUFJO0lBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLGtCQUFRLENBQUMsT0FBTyxDQUFDLFVBQVMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBVmUsY0FBTSxTQVVyQixDQUFBO0FBTUQsZ0JBQXVCLFFBQWtCO0lBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFFBQWtCO1FBQ3JELElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUQsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUV6RSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXpCLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQVplLGNBQU0sU0FZckIsQ0FBQTs7QUMvRUQsd0NBQXdDO0FBS3hDLG9CQUE4QixPQUFPLENBQUMsQ0FBQTtBQUV0QyxJQUFZLElBQUksV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUMvQixJQUFZLElBQUksV0FBTSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXhDLHFCQUF5RixRQUFRLENBQUMsQ0FBQTtBQWlCbEcsa0JBQXlCLFFBQWtCLEVBQUUsR0FBb0I7SUFDL0QsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFFaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQ3JELEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBRXpCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQztRQUMxQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDO0lBQUUsSUFBSSxDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQXBCZSxnQkFBUSxXQW9CdkIsQ0FBQTtBQUVELGlCQUF3QixRQUFrQixFQUFFLEtBQW9CO0lBQzlELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBUGUsZUFBTyxVQU90QixDQUFBO0FBTUQsd0JBQStCLFFBQWtCO0lBQy9DLE1BQU0sQ0FBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBTyxFQUFFLGNBQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxlQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFDO0FBQzlGLENBQUM7QUFIZSxzQkFBYyxpQkFHN0IsQ0FBQTtBQUlELDJCQUEyQixRQUFrQjtJQUMzQyxNQUFNLENBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQU8sRUFBRSxjQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUM3RCxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFFLENBQUM7QUFDekQsQ0FBQztBQUVELHFCQUE0QixRQUFrQjtJQUM1QyxNQUFNLENBQUMsUUFBUSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGZSxtQkFBVyxjQUUxQixDQUFBO0FBRUQsbUJBQTBCLFFBQWtCO0lBQzFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRmUsaUJBQVMsWUFFeEIsQ0FBQTtBQUVEO0lBQ0UsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBWSxFQUFFLFdBQVcsRUFBRSx5QkFBaUIsRUFBQyxDQUFDO0FBQzdGLENBQUM7QUFGZSxhQUFLLFFBRXBCLENBQUE7QUFFWSx5QkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztBQUVyRCxpQkFBd0IsUUFBa0I7SUFDeEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDO0FBQ3hDLENBQUM7QUFGZSxlQUFPLFVBRXRCLENBQUE7QUFFRCxxQkFBNEIsUUFBa0IsRUFBRSxLQUFLLEVBQUUsVUFBZTtJQUNwRSx5Q0FBeUM7SUFEWSwwQkFBZSxHQUFmLGVBQWU7SUFHcEUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBRXpCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDekIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxTQUFTLENBQUMsR0FBRyxxQkFBZSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFM0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxlQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsRUFBRSxDQUFBLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFFOUMsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO1FBQ2xCLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBMUJlLG1CQUFXLGNBMEIxQixDQUFBOztBQ3RIWSxZQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2QsV0FBRyxHQUFHLEtBQUssQ0FBQztBQUNaLFlBQUksR0FBRyxNQUFNLENBQUM7QUFDZCxhQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ2hCLFlBQUksR0FBRyxNQUFNLENBQUM7QUFDZCxZQUFJLEdBQUcsTUFBTSxDQUFDOztBQ1VoQixZQUFJLEdBQUc7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFFVixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQzFDLCtDQUErQztnQkFDL0MsZ0JBQWdCO2dCQUNoQixlQUFlO1NBQzdCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsU0FBUztZQUNsQixXQUFXLEVBQUUsOE9BQThPO1NBQzVQO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsU0FBUztZQUNsQixXQUFXLEVBQUUscUdBQXFHO1NBQ25IO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDeEMsV0FBVyxFQUFFLDRMQUE0TDtTQUMxTTtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUsNE1BQTRNO1NBQzFOO1FBRUQsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsU0FBUztZQUNsQixXQUFXLEVBQUUsdUVBQXVFO1NBQ3JGO1FBRUQsY0FBYyxFQUFFO1lBQ2QsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1lBQ1YsV0FBVyxFQUFFLG9DQUFvQztTQUNsRDtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUsaUdBQWlHO1NBQy9HO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsU0FBUztZQUNsQixXQUFXLEVBQUUsb0NBQW9DO1NBQ2xEO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsU0FBUztZQUNsQixXQUFXLEVBQUUsNkRBQTZEO1NBQzNFO0tBQ0Y7Q0FDRixDQUFDOztBQy9FRixvQkFBOEIsUUFBUSxDQUFDLENBQUE7QUFDdkMscUJBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBQ3JDLHFCQUFvQixTQUFTLENBQUMsQ0FBQTtBQVFuQixXQUFHLEdBQUc7SUFDZixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQzNCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUscUJBQWU7WUFDeEIsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUseUJBQXlCO1NBQ3ZDO0tBQ0Y7SUFDRCxjQUFjLEVBQUUsWUFBSyxDQUFDLENBQUMsbUJBQVksQ0FBQyxDQUFDO0NBQ3RDLENBQUM7O0FDdEJGLDZCQUE2QjtBQUVsQixjQUFNLEdBQUc7SUFDbEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFFVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxTQUFTO1NBQ25CO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsU0FBUztTQUNuQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsSUFBSTtTQUNkO1FBSUQsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO2dCQUN6QyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUM7Z0JBQ3pDLFlBQVksRUFBRSxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQztnQkFDN0MsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDO2FBQzFDO1NBQ0Y7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7UUFHRCxZQUFZLEVBQUU7WUFFWixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxHQUFHO1lBQ1osT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELFdBQVcsRUFBRTtZQUVYLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLEdBQUc7WUFDWixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsY0FBYyxFQUFFO1lBQ2QsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxjQUFjLEVBQUU7WUFFZCxJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELHVCQUF1QixFQUFFO1lBQ3ZCLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLEVBQUU7U0FDWjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUsK0NBQStDO1NBQzdEO1FBRUQsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsR0FBRztZQUNaLFdBQVcsRUFBRSw4Q0FBOEM7U0FDNUQ7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsSUFBSTtTQUNkO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxlQUFlO1NBQ3pCO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFHRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxDQUFDOzRCQUNOLElBQUksRUFBRSxRQUFROzRCQUNkLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7eUJBQ2xDLEVBQUM7NEJBQ0EsSUFBSSxFQUFFLE9BQU87NEJBQ2IsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQzt5QkFDeEIsQ0FBQztvQkFDRixXQUFXLEVBQUUsc0JBQXNCO3dCQUNqQyxrRUFBa0U7d0JBQ2xFLDZEQUE2RDt3QkFDN0QsMENBQTBDO2lCQUM3QztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUM7aUJBR3RDO2FBQ0Y7U0FDRjtRQUdELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxvQkFBb0IsRUFBRTtZQUNwQixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUsNEhBQTRIO1NBQzFJO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUN2RixXQUFXLEVBQUUsb0RBQW9EO2dCQUMvRCxrSUFBa0k7U0FDckk7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsUUFBUTthQUNmO1lBQ0QsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7WUFDbkksV0FBVyxFQUFFLHdCQUF3QjtTQUN0QztRQUVELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLEdBQUc7WUFDWixXQUFXLEVBQUUsbURBQW1EO1NBQ2pFO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsVUFBVTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzVDO1FBQ0QsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsS0FBSztZQUNkLFdBQVcsRUFBRSx1REFBdUQ7Z0JBQ3ZELHNDQUFzQztnQkFDdEMsdURBQXVEO2dCQUN2RCx3REFBd0Q7Z0JBQ3hELGlEQUFpRDtTQUMvRDtLQUNGO0NBQ0YsQ0FBQzs7QUM3TFMsWUFBSSxHQUFHO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBRVYsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUM1QixPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFNBQVM7U0FDbkI7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFdBQVcsRUFBRSxtREFBbUQ7WUFDaEUsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRO2dCQUNkLG9CQUFvQixFQUFFLElBQUk7YUFDM0I7U0FDRjtRQUVELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLGtHQUFrRztTQUNoSDtRQUVELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLGtHQUFrRztZQUMvRyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxXQUFXLEVBQUUseURBQXlEO3FCQUN2RTtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLFFBQVE7d0JBQ2QsV0FBVyxFQUFFLHFIQUFxSDtxQkFDbkk7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDOztBQzlERixzREFBc0Q7QUFDdEQsSUFBWSxXQUFXLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFFM0MsMkJBQW9CLGNBQWMsQ0FBQyxDQUFBO0FBQ25DLHFCQUF3QixTQUFTLENBQUMsQ0FBQTtBQUNsQyxJQUFZLE1BQU0sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUdsQyw0QkFBbUIsZUFBZSxDQUFDLENBQUE7QUFFbkMsOEJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNEJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLGdDQUE2QyxtQkFBbUIsQ0FBQyxDQUFBO0FBZWpFLElBQUksZ0JBQWdCLEdBQUc7SUFDckIsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztDQUM1QixDQUFDO0FBRUYsSUFBSSxDQUFDLEdBQUcsa0JBQUssQ0FBQyxnQkFBUyxDQUFDLDhCQUFZLENBQUMsRUFBRSxnQkFBZ0IsRUFBRTtJQUN2RCxrQkFBa0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDNUcsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGtCQUFJO1FBQ1YsSUFBSSxFQUFFLGtCQUFJO0tBQ1g7Q0FDRixDQUFDLENBQUM7QUFDSCxJQUFJLENBQUMsR0FBRyxnQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXJCLElBQUksS0FBSyxHQUFHLGtCQUFLLENBQUMsZ0JBQVMsQ0FBQyxrQ0FBZ0IsQ0FBQyxFQUFFLGdCQUFnQixFQUFFO0lBQy9ELGtCQUFrQixFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDO0lBQ3hILFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxrQkFBSTtRQUNWLElBQUksRUFBRSxrQkFBSTtLQUNYO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBSSxHQUFHLEdBQUcsa0JBQUssQ0FBQyxnQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ2hDLFVBQVUsRUFBRTtRQUVWLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsR0FBRztTQUNiO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sR0FBRyxrQkFBSyxDQUFDLGdCQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDbkMsVUFBVSxFQUFFO1FBRVYsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxHQUFHO1NBQ2I7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILElBQUksSUFBSSxHQUFHLGtCQUFLLENBQUMsZ0JBQVMsQ0FBQyw4QkFBWSxDQUFDLEVBQUU7SUFDeEMsa0JBQWtCLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUM7SUFDcEYsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLHNCQUFNO1FBQ2QsSUFBSSxFQUFFLGtCQUFJO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1lBQ1YsV0FBVyxFQUFFLGdCQUFnQjtTQUM5QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsSUFBSSxLQUFLLEdBQUcsa0JBQUssQ0FBQyxnQkFBUyxDQUFDLDhCQUFZLENBQUMsRUFBRTtJQUN6QyxrQkFBa0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMxSCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsc0JBQU07UUFDZCxJQUFJLEVBQUUsa0JBQUk7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLDZCQUE2QjtTQUMzQztRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixXQUFXLEVBQ1QsOERBQThEO3dCQUM5RCw2REFBNkQ7aUJBRWhFO2dCQUNELFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsWUFBWTtvQkFDckIsSUFBSSxFQUFFO3dCQUVKLFlBQVksRUFBRSxhQUFhO3dCQUUzQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtxQkFDN0M7aUJBQ0Y7Z0JBQ0QsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxZQUFZO29CQUNyQixJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztpQkFDbkQ7Z0JBQ0QsY0FBYyxFQUFFO29CQUNkLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxTQUFTO29CQUNsQixXQUFXLEVBQUUsNENBQTRDO29CQUN6RCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQy9CO2dCQUNELGlCQUFpQixFQUFFO29CQUNqQixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO29CQUUvQixXQUFXLEVBQUUsK0NBQStDO29CQUM1RCxRQUFRLEVBQUUsQ0FBQztvQkFDWCxRQUFRLEVBQUUsQ0FBQztvQkFDWCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLE9BQU87cUJBQ2Q7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFJLEtBQUssR0FBRyxrQkFBSyxDQUFDLGdCQUFTLENBQUMsa0NBQWdCLENBQUMsRUFBRTtJQUM3QyxrQkFBa0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxzQkFBTTtRQUNkLElBQUksRUFBRSxrQkFBSTtRQUNWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7WUFDOUUsT0FBTyxFQUFFLFFBQVE7WUFDakIsV0FBVyxFQUFFLGtCQUFrQjtTQUNoQztRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLEtBQUs7WUFDZCxXQUFXLEVBQUUsa0ZBQWtGO1NBQ2hHO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sR0FBRyxrQkFBSyxDQUFDLGdCQUFTLENBQUMsa0NBQWdCLENBQUMsRUFBRTtJQUM5QyxrQkFBa0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUNyRixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsa0JBQUk7S0FDWDtDQUNGLENBQUMsQ0FBQztBQUdILElBQUksSUFBSSxHQUFHLGtCQUFLLENBQUMsZ0JBQVMsQ0FBQyw4QkFBWSxDQUFDLEVBQUU7SUFDeEMsa0JBQWtCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQ2xDLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxrQkFBSTtRQUdWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxTQUFTO1NBQ25CO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxLQUFLO1NBQ2Y7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztvQkFDeEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCO2dCQUNELElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQztpQkFDWDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLGdCQUFnQjtpQkFDMUI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxRQUFRO29CQUNqQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLHdDQUF3QztnQkFDeEMsdURBQXVEO1NBQ3JFO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFUSxnQkFBUSxHQUFHO0lBQ3BCLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztRQUNKLEdBQUcsRUFBRSxHQUFHO1FBQ1IsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7Q0FDRixDQUFDOztBQzFQRiwyQkFBdUIsY0FBYyxDQUFDLENBQUE7QUFFdEMsNkJBQW9ELGdCQUFnQixDQUFDLENBQUE7QUFHckUsMEJBQTRCLGNBQWMsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixTQUFTLENBQUMsQ0FBQTtBQUN6QywyQkFBb0IsY0FBYyxDQUFDLENBQUE7QUFDbkMseUJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLHFCQUF1RCxTQUFTLENBQUMsQ0FBQTtBQWlDdEQsZ0JBQVEsR0FBRztJQUNwQixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxDQUFDLGNBQU8sRUFBRSxjQUFPLEVBQUUsbUJBQVksRUFBRSxlQUFRLENBQUM7U0FDakQ7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxvQkFBUztZQUNmLGNBQWMsRUFBRSxZQUFLLENBQUMsQ0FBQyxlQUFRLENBQUMsQ0FBQztTQUNsQztRQUNELEdBQUcsRUFBRSxnQkFBRztLQUNUO0NBQ0YsQ0FBQztBQUVTLGlCQUFTLEdBQUc7SUFDckIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUseUJBQWE7SUFDbkIsY0FBYyxFQUFFO1FBQ2QsWUFBWSxFQUFFLHlCQUFhO1FBQzNCLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDO1FBQy9CLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUNkO0lBQ0QsY0FBYyxFQUFFLFlBQUssQ0FBQyxDQUFDLG1CQUFZLEVBQUUsY0FBTyxFQUFFLGNBQU8sRUFBRSxlQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDdEUsQ0FBQztBQUVTLG9CQUFZLEdBQUcsa0JBQUssQ0FBQyxnQkFBUyxDQUFDLGdCQUFRLENBQUMsRUFBRTtJQUNuRCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsaUJBQVM7UUFDcEIsS0FBSyxFQUFFLDJCQUFZO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDO0FBRVEsd0JBQWdCLEdBQUcsa0JBQUssQ0FBQyxnQkFBUyxDQUFDLGdCQUFRLENBQUMsRUFBRTtJQUN2RCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNmLGNBQWMsRUFBRSxZQUFLLENBQUMsQ0FBQyxjQUFPLEVBQUUsY0FBTyxDQUFDLENBQUM7U0FDMUM7UUFDRCxLQUFLLEVBQUUsK0JBQWdCO0tBQ3hCO0NBQ0YsQ0FBQyxDQUFDOztBQ25GUSxjQUFNLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUk7SUFDYixXQUFXLEVBQUUsNEVBQTRFO0lBQ3pGLEtBQUssRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxTQUFTO29CQUNsQixXQUFXLEVBQUUsaUpBQWlKO2lCQUMvSjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLFdBQVcsRUFBRSx5RUFBeUU7aUJBQ3ZGO2dCQUNELE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsU0FBUztvQkFDbEIsV0FBVyxFQUFFLG1GQUFtRjtpQkFDakc7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxPQUFPO29CQUNiLE9BQU8sRUFBRSxTQUFTO29CQUNsQixXQUFXLEVBQUUsMkNBQTJDO2lCQUN6RDtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLFdBQVcsRUFBRSxnRUFBZ0U7aUJBQzlFO2FBQ0Y7U0FDRixFQUFFO1lBQ0QsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztDQUNILENBQUM7O0FDM0NTLGdCQUFRLEdBQUc7SUFDcEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0NBQzNFLENBQUM7O0FDSEYscUJBQXdDLFNBQVMsQ0FBQyxDQUFBO0FBQ2xELDJCQUFvQixjQUFjLENBQUMsQ0FBQTtBQUNuQyxxQkFBcUMsU0FBUyxDQUFDLENBQUE7QUF3Qi9DLElBQUksS0FBSyxHQUFHO0lBQ1YsSUFBSSxFQUFFLFFBQVE7SUFFZCxVQUFVLEVBQUU7UUFFVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsUUFBUTtZQUVkLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFDbEQsT0FBTyxFQUFFLFFBQVE7WUFDakIsY0FBYyxFQUFFLFlBQUssQ0FBQyxDQUFDLG1CQUFZLENBQUMsQ0FBQztTQUN0QztRQUNELE1BQU0sRUFBRTtZQUNOLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFDekIsV0FBVyxFQUFFLGlUQUFpVDtTQUMvVDtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFDekIsV0FBVyxFQUFFLHliQUF5YjtTQUN2YztRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLHdHQUF3RztTQUN0SDtLQUNGO0NBQ0YsQ0FBQztBQUdGLElBQUksaUJBQWlCLEdBQUc7SUFDdEIsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxTQUFTO1NBQ25CO1FBRUQsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsU0FBUztTQUVuQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLHNzQkFBc3NCO1NBQ2h0QjtRQUNMLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLHlQQUF5UDtTQUN2UTtLQUNGO0NBQ0YsQ0FBQztBQUVGLElBQUksaUJBQWlCLEdBQUc7SUFDdEIsVUFBVSxFQUFFO1FBRVYsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVM7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLFdBQVcsRUFBRSxzR0FBc0c7U0FDcEg7UUFDRCxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsU0FBUztZQUNsQixLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsV0FBVyxFQUFFLHlHQUF5RztpQkFDdkgsRUFBQztvQkFDQSxJQUFJLEVBQUUsUUFBUTtvQkFDZCxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7b0JBQ2xFLFdBQVcsRUFBRSw4UUFBOFE7aUJBQzVSO2FBQ0Y7WUFFRCxjQUFjLEVBQUUsWUFBSyxDQUFDLENBQUMsbUJBQVksRUFBRSxlQUFRLENBQUMsQ0FBQztZQUMvQyxXQUFXLEVBQUUsRUFBRTtTQUNoQjtRQUdELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLDZGQUE2RjtTQUMzRztRQUNELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTO1lBQ2YsV0FBVyxFQUFFLGtJQUFrSTtZQUMvSSxPQUFPLEVBQUUsU0FBUztZQUNsQixjQUFjLEVBQUUsWUFBSyxDQUFDLENBQUMsbUJBQVksRUFBRSxlQUFRLENBQUMsQ0FBQztTQUNoRDtRQUdELFlBQVksRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLHdEQUF3RDtnQkFDeEQsc0NBQXNDO2dCQUN0Qyx1REFBdUQ7Z0JBQ3ZELHdEQUF3RDtnQkFDeEQsaURBQWlEO1NBQy9EO0tBQ0Y7Q0FDRixDQUFDO0FBRVMsd0JBQWdCLEdBQUcsa0JBQUssQ0FBQyxnQkFBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDMUQsb0JBQVksR0FBRyxrQkFBSyxDQUFDLGdCQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7QUN2SXBGLDREQUE0RDtBQUU1RCwrQ0FBK0M7QUFFL0MsSUFBWSxVQUFVLFdBQU0sY0FBYyxDQUFDLENBQUE7QUFDM0MsZ0NBQXVCLG1CQUFtQixDQUFDLENBQUE7QUFDM0MsOEJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNEJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGdDQUFpQyxtQkFBbUIsQ0FBQyxDQUFBO0FBVXJELGdDQUF3QixtQkFBbUIsQ0FBQztBQUFwQyxnREFBb0M7QUFFakMsWUFBSSxHQUFHLFVBQVUsQ0FBQztBQUdsQixjQUFNLEdBQUc7SUFDbEIsT0FBTyxFQUFFLHlDQUF5QztJQUNsRCxXQUFXLEVBQUUsb0NBQW9DO0lBQ2pELElBQUksRUFBRSxRQUFRO0lBQ2QsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztJQUNsQyxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsa0JBQUk7UUFDVixRQUFRLEVBQUUsMEJBQVE7UUFDbEIsUUFBUSxFQUFFLDBCQUFRO1FBQ2xCLE1BQU0sRUFBRSxzQkFBTTtLQUNmO0NBQ0YsQ0FBQztBQUdGO0lBQ0UsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsY0FBTSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUZlLG1CQUFXLGNBRTFCLENBQUE7QUFBQSxDQUFDOztBQ3ZDRixJQUFZLElBQUksV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVoQyxpQkFBaUIsR0FBRztJQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFBQSxDQUFDO0FBRUYsZ0JBQXVCLFFBQVEsRUFBRSxNQUFNO0lBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFGZSxjQUFNLFNBRXJCLENBQUE7QUFBQSxDQUFDO0FBR0YscUJBQTRCLE1BQU07SUFDaEMsSUFBSSxHQUFHLENBQUM7SUFDUixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDeEQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQXBCZSxtQkFBVyxjQW9CMUIsQ0FBQTtBQUFBLENBQUM7QUFHRixrQkFBeUIsUUFBUSxFQUFFLFFBQVE7SUFDekMsSUFBSSxPQUFPLEdBQU8sRUFBRSxDQUFDO0lBQ3JCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO1lBQ0gsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXRCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDakIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDckMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3RCLEtBQUssR0FBRyxLQUFLLENBQUM7Z0NBQ2QsS0FBSyxDQUFDOzRCQUNSLENBQUM7d0JBQ0gsQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNWLFFBQVEsQ0FBQzt3QkFDWCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQW5DZSxnQkFBUSxXQW1DdkIsQ0FBQTtBQUFBLENBQUM7QUFFRixlQUFzQixJQUFJO0lBQUUsYUFBYTtTQUFiLFdBQWEsQ0FBYixzQkFBYSxDQUFiLElBQWE7UUFBYiw0QkFBYTs7SUFDdkMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUcsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNqQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFMZSxhQUFLLFFBS3BCLENBQUE7QUFBQSxDQUFDO0FBR0YsZ0JBQWdCLElBQUksRUFBRSxHQUFHO0lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFFBQVEsQ0FBQztRQUNYLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6QixRQUFRLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7QUNwR0QsMEJBQTRCLGNBQWMsQ0FBQyxDQUFBO0FBQzNDLHFCQUFvQyxTQUFTLENBQUMsQ0FBQTtBQUM5QyxxQkFBb0IsU0FBUyxDQUFDLENBQUE7QUFRbkIsWUFBSSxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLGNBQWMsRUFBRSxZQUFLLENBQUMsQ0FBQyxtQkFBWSxFQUFFLGNBQU8sQ0FBQyxDQUFDO0lBQzlDLEtBQUssRUFBRTtRQUNMO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztTQUM5QztRQUNEO1lBQ0UsSUFBSSxFQUFFLFFBQVE7WUFDZCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1lBQ3pCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsV0FBVyxFQUFFLG1DQUFtQztpQkFDakQ7Z0JBQ0QsRUFBRSxFQUFFO29CQUNGLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSx5QkFBYTtvQkFDbkIsV0FBVyxFQUFFLG1DQUFtQztpQkFDakQ7Z0JBQ0QsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxRQUFRO29CQUNkLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7aUJBQ2xDO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQzs7QUN0Q0YsMkJBQTJCO0FBTTNCLDBCQUE0QixhQUFhLENBQUMsQ0FBQTtBQUMxQyx5QkFBd0IsWUFBWSxDQUFDLENBQUE7QUFDckMscUJBQStDLFFBQVEsQ0FBQyxDQUFBO0FBRXhELElBQVksVUFBVSxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBRTVCLGFBQUssR0FBRyxHQUFHLENBQUM7QUFDWixjQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2IsWUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNYLFlBQUksR0FBRyxHQUFHLENBQUM7QUFHeEIsaUJBQXdCLElBQVU7SUFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxjQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDcEMsYUFBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhlLGVBQU8sVUFHdEIsQ0FBQTtBQUVELGVBQXNCLFNBQWlCLEVBQUUsSUFBSyxFQUFFLE1BQU87SUFDckQsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsRUFDaEMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ2hELFFBQVEsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsQ0FBQyxDQUFDO0lBRTlDLElBQUksSUFBSSxHQUFRO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQztJQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFqQmUsYUFBSyxRQWlCcEIsQ0FBQTtBQUVELHlCQUFnQyxRQUFrQjtJQUNoRCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBUyxRQUFRLEVBQUUsT0FBTztRQUN4RCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQU0sR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUssQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFKZSx1QkFBZSxrQkFJOUIsQ0FBQTtBQUVELHVCQUE4QixpQkFBeUI7SUFDckQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQU0sQ0FBQyxFQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUN6QixpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDO0FBVGUscUJBQWEsZ0JBUzVCLENBQUE7QUFFRCx5QkFBZ0MsUUFBa0I7SUFDaEQsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxHQUFHLFlBQUksR0FBRyxFQUFFLENBQUM7UUFDMUQsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsWUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuRCxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLFlBQUksR0FBRyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLFlBQUksR0FBRyxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBTGUsdUJBQWUsa0JBSzlCLENBQUE7QUFFRCwwQkFBaUMsU0FBcUIsRUFBRSxLQUFhO0lBQWIscUJBQWEsR0FBYixxQkFBYTtJQUNuRSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUZlLHdCQUFnQixtQkFFL0IsQ0FBQTtBQUVELHVCQUE4QixpQkFBeUI7SUFDckQsSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFlBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU3QyxJQUFJLFFBQVEsR0FBYTtRQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUN0QixJQUFJLEVBQUUsMkJBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzVDLENBQUM7SUFHRixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUkseUJBQWEsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcseUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7Z0JBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDdkUsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDdkIsS0FBSyxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxFQUFFLEdBQUcsb0JBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEUsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFHRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBbkNlLHFCQUFhLGdCQW1DNUIsQ0FBQTs7QUN6R0QsOENBQThDO0FBRTlDLElBQVksVUFBVSxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBQ3pDLElBQVksSUFBSSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQy9CLHNCQUFvQixrQkFBa0IsQ0FBQyxDQUFBO0FBRXZDLHdCQUE0QixXQUFXLENBQUMsQ0FBQTtBQUN4Qyx5QkFBd0IsWUFBWSxDQUFDLENBQUE7QUFJckMsMkJBQWtDLElBQVU7SUFFMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFIZSx5QkFBaUIsb0JBR2hDLENBQUE7QUFFRCxzQkFBNkIsSUFBVTtJQUVyQyxNQUFNLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFIZSxvQkFBWSxlQUczQixDQUFBO0FBRUQsaUJBQXdCLElBQVU7SUFDaEMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hFLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxjQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFJLENBQUM7UUFDakQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDOUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUxlLGVBQU8sVUFLdEIsQ0FBQTtBQUdELG1CQUEwQixJQUFVO0lBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQ3hCLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEIsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFUZSxpQkFBUyxZQVN4QixDQUFBOztBQ3RDWSxpQkFBUyxHQUFHO0lBQ3ZCLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVM7Q0FDOUQsQ0FBQzs7QUNGRiw0Q0FBNEM7QUFFL0Isb0JBQVksR0FBRyxjQUFjLENBQUM7QUFDOUIsZUFBTyxHQUFHLFNBQVMsQ0FBQztBQUNwQixnQkFBUSxHQUFHLFVBQVUsQ0FBQztBQUN0QixlQUFPLEdBQUcsU0FBUyxDQUFDO0FBTXBCLGtCQUFVLEdBQUc7SUFDeEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsUUFBUSxFQUFFLEdBQUc7SUFDYixPQUFPLEVBQUUsR0FBRztJQUNaLE9BQU8sRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQUtXLDRCQUFvQixHQUFHO0lBQ2xDLENBQUMsRUFBRSxvQkFBWTtJQUNmLENBQUMsRUFBRSxnQkFBUTtJQUNYLENBQUMsRUFBRSxlQUFPO0lBQ1YsQ0FBQyxFQUFFLGVBQU87Q0FDWCxDQUFDO0FBT0YscUJBQTRCLElBQVk7SUFDdEMsTUFBTSxDQUFDLDRCQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUhlLG1CQUFXLGNBRzFCLENBQUE7O0FDcENELCtDQUErQzs7OztBQUUvQyxpQkFBYyxrQkFBa0IsQ0FBQyxFQUFBO0FBQ2pDLGlCQUFjLHNCQUFzQixDQUFDLEVBQUE7QUFDckMsaUJBQWMsbUJBQW1CLENBQUMsRUFBQTtBQUdsQyxJQUFPLEtBQUssV0FBVyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JDLFdBQUcsR0FBRyxLQUFLLENBQUM7QUFLdkIsb0JBQTJCLENBQVMsRUFBRSxLQUFnQjtJQUFoQixxQkFBZ0IsR0FBaEIsU0FBZ0I7SUFDcEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRmUsa0JBQVUsYUFFekIsQ0FBQTtBQUVELGlCQUF3QixHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU87SUFDckMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQVJlLGVBQU8sVUFRdEIsQ0FBQTtBQUVELGdCQUF1QixHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFRO0lBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBVGUsY0FBTSxTQVNyQixDQUFBO0FBRUQsYUFBb0IsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFRO0lBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBVmUsV0FBRyxNQVVsQixDQUFBO0FBRUQsYUFBb0IsR0FBZSxFQUFFLENBQXlCO0lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDYixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQU5lLFdBQUcsTUFNbEIsQ0FBQTtBQUVELGFBQW9CLEdBQWUsRUFBRSxDQUF5QjtJQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQU5lLFdBQUcsTUFNbEIsQ0FBQTtBQUVELGlCQUF3QixLQUFLLEVBQUUsT0FBTztJQUNwQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ1gsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1FBQ2QsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1FBQ2QsT0FBTyxFQUFFLE9BQU87S0FDakIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU5lLGVBQU8sVUFNdEIsQ0FBQTtBQVFELGdCQUF1QixDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFpQjtJQUFqQix5QkFBaUIsR0FBakIsaUJBQWlCO0lBQ2pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDaEIsQ0FBQztBQVRlLGNBQU0sU0FTckIsQ0FBQTtBQUdELGVBQXNCLE9BQVk7SUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUZlLGFBQUssUUFFcEIsQ0FBQTs7QUMxRkQscUJBQW9CLFFBQVEsQ0FBQyxDQUFBO0FBV2hCLG9DQUE0QixHQUF1QjtJQUM5RCxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDZCxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2hCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Q0FDakIsQ0FBQztBQVdXLHNDQUE4QixHQUF3QjtJQUNqRSxHQUFHLEVBQUUsWUFBSyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBSSxFQUFFLFlBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsSUFBSSxFQUFFLFlBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsSUFBSSxFQUFFLFlBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsTUFBTSxFQUFFLFlBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sRUFBRSxZQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRSxLQUFLLEVBQUUsWUFBSyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdFLElBQUksRUFBRSxZQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDeEQsQ0FBQztBQWtCRixpQ0FBd0MsSUFBVSxFQUM1QyxrQkFBcUUsRUFDckUsbUJBQXlFO0lBRHpFLGtDQUFxRSxHQUFyRSx5REFBcUU7SUFDckUsbUNBQXlFLEdBQXpFLDREQUF5RTtJQUU3RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDN0IsSUFBSSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxJQUFJLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLDZCQUE2QixHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDbEQsb0JBQW9CLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqRCxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMscUJBQXFCLEdBQUcsT0FBTztnQkFDL0IscUNBQXFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLDhCQUE4QixDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQTVCZSwrQkFBdUIsMEJBNEJ0QyxDQUFBOzs7OztBQ3JGRCxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUMvQixJQUFZLFNBQVMsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUN2QyxJQUFZLE1BQU0sV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUNqQyxJQUFZLFVBQVUsV0FBTSxZQUFZLENBQUMsQ0FBQTtBQUN6QyxJQUFZLFVBQVUsV0FBTSxZQUFZLENBQUMsQ0FBQTtBQUN6QyxJQUFZLFVBQVUsV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBQ2xELElBQVksUUFBUSxXQUFNLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsSUFBWSxXQUFXLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDM0MsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxVQUFVLFdBQU0sWUFBWSxDQUFDLENBQUE7QUFDekMsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDakMsSUFBWSxVQUFVLFdBQU0sWUFBWSxDQUFDLENBQUE7QUFHekMsMEJBQWlDLFdBQVcsQ0FBQyxDQUFBO0FBRTdDLGlCQUFjLFFBQVEsQ0FBQyxFQUFBO0FBRVosV0FBRyxHQUFHLEtBQUssQ0FBQztBQUNaLGVBQU8sR0FBRyxTQUFTLENBQUM7QUFDcEIsZ0JBQVEsR0FBRyxVQUFVLENBQUM7QUFDdEIsZUFBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDN0IsWUFBSSxHQUFHLE1BQU0sQ0FBQztBQUVkLGdCQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RCLGdCQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RCLGNBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIsaUJBQVMsR0FBRyxXQUFXLENBQUM7QUFDeEIsWUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNkLGdCQUFRLEdBQUcsVUFBVSxDQUFDO0FBQ3RCLFlBQUksR0FBRyxNQUFNLENBQUM7QUFDZCxjQUFNLEdBQUcsa0JBQVEsQ0FBQztBQUNsQixnQkFBUSxHQUFHLFVBQVUsQ0FBQztBQUVwQixlQUFPLEdBQUcsYUFBYSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiIsIi8vIFRoaXMgcHJvZHVjdCBpbmNsdWRlcyBjb2xvciBzcGVjaWZpY2F0aW9ucyBhbmQgZGVzaWducyBkZXZlbG9wZWQgYnkgQ3ludGhpYSBCcmV3ZXIgKGh0dHA6Ly9jb2xvcmJyZXdlci5vcmcvKS5cbi8vIEphdmFTY3JpcHQgc3BlY3MgYXMgcGFja2FnZWQgaW4gdGhlIEQzIGxpYnJhcnkgKGQzanMub3JnKS4gUGxlYXNlIHNlZSBsaWNlbnNlIGF0IGh0dHA6Ly9jb2xvcmJyZXdlci5vcmcvZXhwb3J0L0xJQ0VOU0UudHh0XG4hZnVuY3Rpb24oKSB7XG5cbnZhciBjb2xvcmJyZXdlciA9IHtZbEduOiB7XG4zOiBbXCIjZjdmY2I5XCIsXCIjYWRkZDhlXCIsXCIjMzFhMzU0XCJdLFxuNDogW1wiI2ZmZmZjY1wiLFwiI2MyZTY5OVwiLFwiIzc4YzY3OVwiLFwiIzIzODQ0M1wiXSxcbjU6IFtcIiNmZmZmY2NcIixcIiNjMmU2OTlcIixcIiM3OGM2NzlcIixcIiMzMWEzNTRcIixcIiMwMDY4MzdcIl0sXG42OiBbXCIjZmZmZmNjXCIsXCIjZDlmMGEzXCIsXCIjYWRkZDhlXCIsXCIjNzhjNjc5XCIsXCIjMzFhMzU0XCIsXCIjMDA2ODM3XCJdLFxuNzogW1wiI2ZmZmZjY1wiLFwiI2Q5ZjBhM1wiLFwiI2FkZGQ4ZVwiLFwiIzc4YzY3OVwiLFwiIzQxYWI1ZFwiLFwiIzIzODQ0M1wiLFwiIzAwNWEzMlwiXSxcbjg6IFtcIiNmZmZmZTVcIixcIiNmN2ZjYjlcIixcIiNkOWYwYTNcIixcIiNhZGRkOGVcIixcIiM3OGM2NzlcIixcIiM0MWFiNWRcIixcIiMyMzg0NDNcIixcIiMwMDVhMzJcIl0sXG45OiBbXCIjZmZmZmU1XCIsXCIjZjdmY2I5XCIsXCIjZDlmMGEzXCIsXCIjYWRkZDhlXCIsXCIjNzhjNjc5XCIsXCIjNDFhYjVkXCIsXCIjMjM4NDQzXCIsXCIjMDA2ODM3XCIsXCIjMDA0NTI5XCJdXG59LFlsR25CdToge1xuMzogW1wiI2VkZjhiMVwiLFwiIzdmY2RiYlwiLFwiIzJjN2ZiOFwiXSxcbjQ6IFtcIiNmZmZmY2NcIixcIiNhMWRhYjRcIixcIiM0MWI2YzRcIixcIiMyMjVlYThcIl0sXG41OiBbXCIjZmZmZmNjXCIsXCIjYTFkYWI0XCIsXCIjNDFiNmM0XCIsXCIjMmM3ZmI4XCIsXCIjMjUzNDk0XCJdLFxuNjogW1wiI2ZmZmZjY1wiLFwiI2M3ZTliNFwiLFwiIzdmY2RiYlwiLFwiIzQxYjZjNFwiLFwiIzJjN2ZiOFwiLFwiIzI1MzQ5NFwiXSxcbjc6IFtcIiNmZmZmY2NcIixcIiNjN2U5YjRcIixcIiM3ZmNkYmJcIixcIiM0MWI2YzRcIixcIiMxZDkxYzBcIixcIiMyMjVlYThcIixcIiMwYzJjODRcIl0sXG44OiBbXCIjZmZmZmQ5XCIsXCIjZWRmOGIxXCIsXCIjYzdlOWI0XCIsXCIjN2ZjZGJiXCIsXCIjNDFiNmM0XCIsXCIjMWQ5MWMwXCIsXCIjMjI1ZWE4XCIsXCIjMGMyYzg0XCJdLFxuOTogW1wiI2ZmZmZkOVwiLFwiI2VkZjhiMVwiLFwiI2M3ZTliNFwiLFwiIzdmY2RiYlwiLFwiIzQxYjZjNFwiLFwiIzFkOTFjMFwiLFwiIzIyNWVhOFwiLFwiIzI1MzQ5NFwiLFwiIzA4MWQ1OFwiXVxufSxHbkJ1OiB7XG4zOiBbXCIjZTBmM2RiXCIsXCIjYThkZGI1XCIsXCIjNDNhMmNhXCJdLFxuNDogW1wiI2YwZjllOFwiLFwiI2JhZTRiY1wiLFwiIzdiY2NjNFwiLFwiIzJiOGNiZVwiXSxcbjU6IFtcIiNmMGY5ZThcIixcIiNiYWU0YmNcIixcIiM3YmNjYzRcIixcIiM0M2EyY2FcIixcIiMwODY4YWNcIl0sXG42OiBbXCIjZjBmOWU4XCIsXCIjY2NlYmM1XCIsXCIjYThkZGI1XCIsXCIjN2JjY2M0XCIsXCIjNDNhMmNhXCIsXCIjMDg2OGFjXCJdLFxuNzogW1wiI2YwZjllOFwiLFwiI2NjZWJjNVwiLFwiI2E4ZGRiNVwiLFwiIzdiY2NjNFwiLFwiIzRlYjNkM1wiLFwiIzJiOGNiZVwiLFwiIzA4NTg5ZVwiXSxcbjg6IFtcIiNmN2ZjZjBcIixcIiNlMGYzZGJcIixcIiNjY2ViYzVcIixcIiNhOGRkYjVcIixcIiM3YmNjYzRcIixcIiM0ZWIzZDNcIixcIiMyYjhjYmVcIixcIiMwODU4OWVcIl0sXG45OiBbXCIjZjdmY2YwXCIsXCIjZTBmM2RiXCIsXCIjY2NlYmM1XCIsXCIjYThkZGI1XCIsXCIjN2JjY2M0XCIsXCIjNGViM2QzXCIsXCIjMmI4Y2JlXCIsXCIjMDg2OGFjXCIsXCIjMDg0MDgxXCJdXG59LEJ1R246IHtcbjM6IFtcIiNlNWY1ZjlcIixcIiM5OWQ4YzlcIixcIiMyY2EyNWZcIl0sXG40OiBbXCIjZWRmOGZiXCIsXCIjYjJlMmUyXCIsXCIjNjZjMmE0XCIsXCIjMjM4YjQ1XCJdLFxuNTogW1wiI2VkZjhmYlwiLFwiI2IyZTJlMlwiLFwiIzY2YzJhNFwiLFwiIzJjYTI1ZlwiLFwiIzAwNmQyY1wiXSxcbjY6IFtcIiNlZGY4ZmJcIixcIiNjY2VjZTZcIixcIiM5OWQ4YzlcIixcIiM2NmMyYTRcIixcIiMyY2EyNWZcIixcIiMwMDZkMmNcIl0sXG43OiBbXCIjZWRmOGZiXCIsXCIjY2NlY2U2XCIsXCIjOTlkOGM5XCIsXCIjNjZjMmE0XCIsXCIjNDFhZTc2XCIsXCIjMjM4YjQ1XCIsXCIjMDA1ODI0XCJdLFxuODogW1wiI2Y3ZmNmZFwiLFwiI2U1ZjVmOVwiLFwiI2NjZWNlNlwiLFwiIzk5ZDhjOVwiLFwiIzY2YzJhNFwiLFwiIzQxYWU3NlwiLFwiIzIzOGI0NVwiLFwiIzAwNTgyNFwiXSxcbjk6IFtcIiNmN2ZjZmRcIixcIiNlNWY1ZjlcIixcIiNjY2VjZTZcIixcIiM5OWQ4YzlcIixcIiM2NmMyYTRcIixcIiM0MWFlNzZcIixcIiMyMzhiNDVcIixcIiMwMDZkMmNcIixcIiMwMDQ0MWJcIl1cbn0sUHVCdUduOiB7XG4zOiBbXCIjZWNlMmYwXCIsXCIjYTZiZGRiXCIsXCIjMWM5MDk5XCJdLFxuNDogW1wiI2Y2ZWZmN1wiLFwiI2JkYzllMVwiLFwiIzY3YTljZlwiLFwiIzAyODE4YVwiXSxcbjU6IFtcIiNmNmVmZjdcIixcIiNiZGM5ZTFcIixcIiM2N2E5Y2ZcIixcIiMxYzkwOTlcIixcIiMwMTZjNTlcIl0sXG42OiBbXCIjZjZlZmY3XCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNjdhOWNmXCIsXCIjMWM5MDk5XCIsXCIjMDE2YzU5XCJdLFxuNzogW1wiI2Y2ZWZmN1wiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzY3YTljZlwiLFwiIzM2OTBjMFwiLFwiIzAyODE4YVwiLFwiIzAxNjQ1MFwiXSxcbjg6IFtcIiNmZmY3ZmJcIixcIiNlY2UyZjBcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM2N2E5Y2ZcIixcIiMzNjkwYzBcIixcIiMwMjgxOGFcIixcIiMwMTY0NTBcIl0sXG45OiBbXCIjZmZmN2ZiXCIsXCIjZWNlMmYwXCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNjdhOWNmXCIsXCIjMzY5MGMwXCIsXCIjMDI4MThhXCIsXCIjMDE2YzU5XCIsXCIjMDE0NjM2XCJdXG59LFB1QnU6IHtcbjM6IFtcIiNlY2U3ZjJcIixcIiNhNmJkZGJcIixcIiMyYjhjYmVcIl0sXG40OiBbXCIjZjFlZWY2XCIsXCIjYmRjOWUxXCIsXCIjNzRhOWNmXCIsXCIjMDU3MGIwXCJdLFxuNTogW1wiI2YxZWVmNlwiLFwiI2JkYzllMVwiLFwiIzc0YTljZlwiLFwiIzJiOGNiZVwiLFwiIzA0NWE4ZFwiXSxcbjY6IFtcIiNmMWVlZjZcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM3NGE5Y2ZcIixcIiMyYjhjYmVcIixcIiMwNDVhOGRcIl0sXG43OiBbXCIjZjFlZWY2XCIsXCIjZDBkMWU2XCIsXCIjYTZiZGRiXCIsXCIjNzRhOWNmXCIsXCIjMzY5MGMwXCIsXCIjMDU3MGIwXCIsXCIjMDM0ZTdiXCJdLFxuODogW1wiI2ZmZjdmYlwiLFwiI2VjZTdmMlwiLFwiI2QwZDFlNlwiLFwiI2E2YmRkYlwiLFwiIzc0YTljZlwiLFwiIzM2OTBjMFwiLFwiIzA1NzBiMFwiLFwiIzAzNGU3YlwiXSxcbjk6IFtcIiNmZmY3ZmJcIixcIiNlY2U3ZjJcIixcIiNkMGQxZTZcIixcIiNhNmJkZGJcIixcIiM3NGE5Y2ZcIixcIiMzNjkwYzBcIixcIiMwNTcwYjBcIixcIiMwNDVhOGRcIixcIiMwMjM4NThcIl1cbn0sQnVQdToge1xuMzogW1wiI2UwZWNmNFwiLFwiIzllYmNkYVwiLFwiIzg4NTZhN1wiXSxcbjQ6IFtcIiNlZGY4ZmJcIixcIiNiM2NkZTNcIixcIiM4Yzk2YzZcIixcIiM4ODQxOWRcIl0sXG41OiBbXCIjZWRmOGZiXCIsXCIjYjNjZGUzXCIsXCIjOGM5NmM2XCIsXCIjODg1NmE3XCIsXCIjODEwZjdjXCJdLFxuNjogW1wiI2VkZjhmYlwiLFwiI2JmZDNlNlwiLFwiIzllYmNkYVwiLFwiIzhjOTZjNlwiLFwiIzg4NTZhN1wiLFwiIzgxMGY3Y1wiXSxcbjc6IFtcIiNlZGY4ZmJcIixcIiNiZmQzZTZcIixcIiM5ZWJjZGFcIixcIiM4Yzk2YzZcIixcIiM4YzZiYjFcIixcIiM4ODQxOWRcIixcIiM2ZTAxNmJcIl0sXG44OiBbXCIjZjdmY2ZkXCIsXCIjZTBlY2Y0XCIsXCIjYmZkM2U2XCIsXCIjOWViY2RhXCIsXCIjOGM5NmM2XCIsXCIjOGM2YmIxXCIsXCIjODg0MTlkXCIsXCIjNmUwMTZiXCJdLFxuOTogW1wiI2Y3ZmNmZFwiLFwiI2UwZWNmNFwiLFwiI2JmZDNlNlwiLFwiIzllYmNkYVwiLFwiIzhjOTZjNlwiLFwiIzhjNmJiMVwiLFwiIzg4NDE5ZFwiLFwiIzgxMGY3Y1wiLFwiIzRkMDA0YlwiXVxufSxSZFB1OiB7XG4zOiBbXCIjZmRlMGRkXCIsXCIjZmE5ZmI1XCIsXCIjYzUxYjhhXCJdLFxuNDogW1wiI2ZlZWJlMlwiLFwiI2ZiYjRiOVwiLFwiI2Y3NjhhMVwiLFwiI2FlMDE3ZVwiXSxcbjU6IFtcIiNmZWViZTJcIixcIiNmYmI0YjlcIixcIiNmNzY4YTFcIixcIiNjNTFiOGFcIixcIiM3YTAxNzdcIl0sXG42OiBbXCIjZmVlYmUyXCIsXCIjZmNjNWMwXCIsXCIjZmE5ZmI1XCIsXCIjZjc2OGExXCIsXCIjYzUxYjhhXCIsXCIjN2EwMTc3XCJdLFxuNzogW1wiI2ZlZWJlMlwiLFwiI2ZjYzVjMFwiLFwiI2ZhOWZiNVwiLFwiI2Y3NjhhMVwiLFwiI2RkMzQ5N1wiLFwiI2FlMDE3ZVwiLFwiIzdhMDE3N1wiXSxcbjg6IFtcIiNmZmY3ZjNcIixcIiNmZGUwZGRcIixcIiNmY2M1YzBcIixcIiNmYTlmYjVcIixcIiNmNzY4YTFcIixcIiNkZDM0OTdcIixcIiNhZTAxN2VcIixcIiM3YTAxNzdcIl0sXG45OiBbXCIjZmZmN2YzXCIsXCIjZmRlMGRkXCIsXCIjZmNjNWMwXCIsXCIjZmE5ZmI1XCIsXCIjZjc2OGExXCIsXCIjZGQzNDk3XCIsXCIjYWUwMTdlXCIsXCIjN2EwMTc3XCIsXCIjNDkwMDZhXCJdXG59LFB1UmQ6IHtcbjM6IFtcIiNlN2UxZWZcIixcIiNjOTk0YzdcIixcIiNkZDFjNzdcIl0sXG40OiBbXCIjZjFlZWY2XCIsXCIjZDdiNWQ4XCIsXCIjZGY2NWIwXCIsXCIjY2UxMjU2XCJdLFxuNTogW1wiI2YxZWVmNlwiLFwiI2Q3YjVkOFwiLFwiI2RmNjViMFwiLFwiI2RkMWM3N1wiLFwiIzk4MDA0M1wiXSxcbjY6IFtcIiNmMWVlZjZcIixcIiNkNGI5ZGFcIixcIiNjOTk0YzdcIixcIiNkZjY1YjBcIixcIiNkZDFjNzdcIixcIiM5ODAwNDNcIl0sXG43OiBbXCIjZjFlZWY2XCIsXCIjZDRiOWRhXCIsXCIjYzk5NGM3XCIsXCIjZGY2NWIwXCIsXCIjZTcyOThhXCIsXCIjY2UxMjU2XCIsXCIjOTEwMDNmXCJdLFxuODogW1wiI2Y3ZjRmOVwiLFwiI2U3ZTFlZlwiLFwiI2Q0YjlkYVwiLFwiI2M5OTRjN1wiLFwiI2RmNjViMFwiLFwiI2U3Mjk4YVwiLFwiI2NlMTI1NlwiLFwiIzkxMDAzZlwiXSxcbjk6IFtcIiNmN2Y0ZjlcIixcIiNlN2UxZWZcIixcIiNkNGI5ZGFcIixcIiNjOTk0YzdcIixcIiNkZjY1YjBcIixcIiNlNzI5OGFcIixcIiNjZTEyNTZcIixcIiM5ODAwNDNcIixcIiM2NzAwMWZcIl1cbn0sT3JSZDoge1xuMzogW1wiI2ZlZThjOFwiLFwiI2ZkYmI4NFwiLFwiI2UzNGEzM1wiXSxcbjQ6IFtcIiNmZWYwZDlcIixcIiNmZGNjOGFcIixcIiNmYzhkNTlcIixcIiNkNzMwMWZcIl0sXG41OiBbXCIjZmVmMGQ5XCIsXCIjZmRjYzhhXCIsXCIjZmM4ZDU5XCIsXCIjZTM0YTMzXCIsXCIjYjMwMDAwXCJdLFxuNjogW1wiI2ZlZjBkOVwiLFwiI2ZkZDQ5ZVwiLFwiI2ZkYmI4NFwiLFwiI2ZjOGQ1OVwiLFwiI2UzNGEzM1wiLFwiI2IzMDAwMFwiXSxcbjc6IFtcIiNmZWYwZDlcIixcIiNmZGQ0OWVcIixcIiNmZGJiODRcIixcIiNmYzhkNTlcIixcIiNlZjY1NDhcIixcIiNkNzMwMWZcIixcIiM5OTAwMDBcIl0sXG44OiBbXCIjZmZmN2VjXCIsXCIjZmVlOGM4XCIsXCIjZmRkNDllXCIsXCIjZmRiYjg0XCIsXCIjZmM4ZDU5XCIsXCIjZWY2NTQ4XCIsXCIjZDczMDFmXCIsXCIjOTkwMDAwXCJdLFxuOTogW1wiI2ZmZjdlY1wiLFwiI2ZlZThjOFwiLFwiI2ZkZDQ5ZVwiLFwiI2ZkYmI4NFwiLFwiI2ZjOGQ1OVwiLFwiI2VmNjU0OFwiLFwiI2Q3MzAxZlwiLFwiI2IzMDAwMFwiLFwiIzdmMDAwMFwiXVxufSxZbE9yUmQ6IHtcbjM6IFtcIiNmZmVkYTBcIixcIiNmZWIyNGNcIixcIiNmMDNiMjBcIl0sXG40OiBbXCIjZmZmZmIyXCIsXCIjZmVjYzVjXCIsXCIjZmQ4ZDNjXCIsXCIjZTMxYTFjXCJdLFxuNTogW1wiI2ZmZmZiMlwiLFwiI2ZlY2M1Y1wiLFwiI2ZkOGQzY1wiLFwiI2YwM2IyMFwiLFwiI2JkMDAyNlwiXSxcbjY6IFtcIiNmZmZmYjJcIixcIiNmZWQ5NzZcIixcIiNmZWIyNGNcIixcIiNmZDhkM2NcIixcIiNmMDNiMjBcIixcIiNiZDAwMjZcIl0sXG43OiBbXCIjZmZmZmIyXCIsXCIjZmVkOTc2XCIsXCIjZmViMjRjXCIsXCIjZmQ4ZDNjXCIsXCIjZmM0ZTJhXCIsXCIjZTMxYTFjXCIsXCIjYjEwMDI2XCJdLFxuODogW1wiI2ZmZmZjY1wiLFwiI2ZmZWRhMFwiLFwiI2ZlZDk3NlwiLFwiI2ZlYjI0Y1wiLFwiI2ZkOGQzY1wiLFwiI2ZjNGUyYVwiLFwiI2UzMWExY1wiLFwiI2IxMDAyNlwiXSxcbjk6IFtcIiNmZmZmY2NcIixcIiNmZmVkYTBcIixcIiNmZWQ5NzZcIixcIiNmZWIyNGNcIixcIiNmZDhkM2NcIixcIiNmYzRlMmFcIixcIiNlMzFhMWNcIixcIiNiZDAwMjZcIixcIiM4MDAwMjZcIl1cbn0sWWxPckJyOiB7XG4zOiBbXCIjZmZmN2JjXCIsXCIjZmVjNDRmXCIsXCIjZDk1ZjBlXCJdLFxuNDogW1wiI2ZmZmZkNFwiLFwiI2ZlZDk4ZVwiLFwiI2ZlOTkyOVwiLFwiI2NjNGMwMlwiXSxcbjU6IFtcIiNmZmZmZDRcIixcIiNmZWQ5OGVcIixcIiNmZTk5MjlcIixcIiNkOTVmMGVcIixcIiM5OTM0MDRcIl0sXG42OiBbXCIjZmZmZmQ0XCIsXCIjZmVlMzkxXCIsXCIjZmVjNDRmXCIsXCIjZmU5OTI5XCIsXCIjZDk1ZjBlXCIsXCIjOTkzNDA0XCJdLFxuNzogW1wiI2ZmZmZkNFwiLFwiI2ZlZTM5MVwiLFwiI2ZlYzQ0ZlwiLFwiI2ZlOTkyOVwiLFwiI2VjNzAxNFwiLFwiI2NjNGMwMlwiLFwiIzhjMmQwNFwiXSxcbjg6IFtcIiNmZmZmZTVcIixcIiNmZmY3YmNcIixcIiNmZWUzOTFcIixcIiNmZWM0NGZcIixcIiNmZTk5MjlcIixcIiNlYzcwMTRcIixcIiNjYzRjMDJcIixcIiM4YzJkMDRcIl0sXG45OiBbXCIjZmZmZmU1XCIsXCIjZmZmN2JjXCIsXCIjZmVlMzkxXCIsXCIjZmVjNDRmXCIsXCIjZmU5OTI5XCIsXCIjZWM3MDE0XCIsXCIjY2M0YzAyXCIsXCIjOTkzNDA0XCIsXCIjNjYyNTA2XCJdXG59LFB1cnBsZXM6IHtcbjM6IFtcIiNlZmVkZjVcIixcIiNiY2JkZGNcIixcIiM3NTZiYjFcIl0sXG40OiBbXCIjZjJmMGY3XCIsXCIjY2JjOWUyXCIsXCIjOWU5YWM4XCIsXCIjNmE1MWEzXCJdLFxuNTogW1wiI2YyZjBmN1wiLFwiI2NiYzllMlwiLFwiIzllOWFjOFwiLFwiIzc1NmJiMVwiLFwiIzU0Mjc4ZlwiXSxcbjY6IFtcIiNmMmYwZjdcIixcIiNkYWRhZWJcIixcIiNiY2JkZGNcIixcIiM5ZTlhYzhcIixcIiM3NTZiYjFcIixcIiM1NDI3OGZcIl0sXG43OiBbXCIjZjJmMGY3XCIsXCIjZGFkYWViXCIsXCIjYmNiZGRjXCIsXCIjOWU5YWM4XCIsXCIjODA3ZGJhXCIsXCIjNmE1MWEzXCIsXCIjNGExNDg2XCJdLFxuODogW1wiI2ZjZmJmZFwiLFwiI2VmZWRmNVwiLFwiI2RhZGFlYlwiLFwiI2JjYmRkY1wiLFwiIzllOWFjOFwiLFwiIzgwN2RiYVwiLFwiIzZhNTFhM1wiLFwiIzRhMTQ4NlwiXSxcbjk6IFtcIiNmY2ZiZmRcIixcIiNlZmVkZjVcIixcIiNkYWRhZWJcIixcIiNiY2JkZGNcIixcIiM5ZTlhYzhcIixcIiM4MDdkYmFcIixcIiM2YTUxYTNcIixcIiM1NDI3OGZcIixcIiMzZjAwN2RcIl1cbn0sQmx1ZXM6IHtcbjM6IFtcIiNkZWViZjdcIixcIiM5ZWNhZTFcIixcIiMzMTgyYmRcIl0sXG40OiBbXCIjZWZmM2ZmXCIsXCIjYmRkN2U3XCIsXCIjNmJhZWQ2XCIsXCIjMjE3MWI1XCJdLFxuNTogW1wiI2VmZjNmZlwiLFwiI2JkZDdlN1wiLFwiIzZiYWVkNlwiLFwiIzMxODJiZFwiLFwiIzA4NTE5Y1wiXSxcbjY6IFtcIiNlZmYzZmZcIixcIiNjNmRiZWZcIixcIiM5ZWNhZTFcIixcIiM2YmFlZDZcIixcIiMzMTgyYmRcIixcIiMwODUxOWNcIl0sXG43OiBbXCIjZWZmM2ZmXCIsXCIjYzZkYmVmXCIsXCIjOWVjYWUxXCIsXCIjNmJhZWQ2XCIsXCIjNDI5MmM2XCIsXCIjMjE3MWI1XCIsXCIjMDg0NTk0XCJdLFxuODogW1wiI2Y3ZmJmZlwiLFwiI2RlZWJmN1wiLFwiI2M2ZGJlZlwiLFwiIzllY2FlMVwiLFwiIzZiYWVkNlwiLFwiIzQyOTJjNlwiLFwiIzIxNzFiNVwiLFwiIzA4NDU5NFwiXSxcbjk6IFtcIiNmN2ZiZmZcIixcIiNkZWViZjdcIixcIiNjNmRiZWZcIixcIiM5ZWNhZTFcIixcIiM2YmFlZDZcIixcIiM0MjkyYzZcIixcIiMyMTcxYjVcIixcIiMwODUxOWNcIixcIiMwODMwNmJcIl1cbn0sR3JlZW5zOiB7XG4zOiBbXCIjZTVmNWUwXCIsXCIjYTFkOTliXCIsXCIjMzFhMzU0XCJdLFxuNDogW1wiI2VkZjhlOVwiLFwiI2JhZTRiM1wiLFwiIzc0YzQ3NlwiLFwiIzIzOGI0NVwiXSxcbjU6IFtcIiNlZGY4ZTlcIixcIiNiYWU0YjNcIixcIiM3NGM0NzZcIixcIiMzMWEzNTRcIixcIiMwMDZkMmNcIl0sXG42OiBbXCIjZWRmOGU5XCIsXCIjYzdlOWMwXCIsXCIjYTFkOTliXCIsXCIjNzRjNDc2XCIsXCIjMzFhMzU0XCIsXCIjMDA2ZDJjXCJdLFxuNzogW1wiI2VkZjhlOVwiLFwiI2M3ZTljMFwiLFwiI2ExZDk5YlwiLFwiIzc0YzQ3NlwiLFwiIzQxYWI1ZFwiLFwiIzIzOGI0NVwiLFwiIzAwNWEzMlwiXSxcbjg6IFtcIiNmN2ZjZjVcIixcIiNlNWY1ZTBcIixcIiNjN2U5YzBcIixcIiNhMWQ5OWJcIixcIiM3NGM0NzZcIixcIiM0MWFiNWRcIixcIiMyMzhiNDVcIixcIiMwMDVhMzJcIl0sXG45OiBbXCIjZjdmY2Y1XCIsXCIjZTVmNWUwXCIsXCIjYzdlOWMwXCIsXCIjYTFkOTliXCIsXCIjNzRjNDc2XCIsXCIjNDFhYjVkXCIsXCIjMjM4YjQ1XCIsXCIjMDA2ZDJjXCIsXCIjMDA0NDFiXCJdXG59LE9yYW5nZXM6IHtcbjM6IFtcIiNmZWU2Y2VcIixcIiNmZGFlNmJcIixcIiNlNjU1MGRcIl0sXG40OiBbXCIjZmVlZGRlXCIsXCIjZmRiZTg1XCIsXCIjZmQ4ZDNjXCIsXCIjZDk0NzAxXCJdLFxuNTogW1wiI2ZlZWRkZVwiLFwiI2ZkYmU4NVwiLFwiI2ZkOGQzY1wiLFwiI2U2NTUwZFwiLFwiI2E2MzYwM1wiXSxcbjY6IFtcIiNmZWVkZGVcIixcIiNmZGQwYTJcIixcIiNmZGFlNmJcIixcIiNmZDhkM2NcIixcIiNlNjU1MGRcIixcIiNhNjM2MDNcIl0sXG43OiBbXCIjZmVlZGRlXCIsXCIjZmRkMGEyXCIsXCIjZmRhZTZiXCIsXCIjZmQ4ZDNjXCIsXCIjZjE2OTEzXCIsXCIjZDk0ODAxXCIsXCIjOGMyZDA0XCJdLFxuODogW1wiI2ZmZjVlYlwiLFwiI2ZlZTZjZVwiLFwiI2ZkZDBhMlwiLFwiI2ZkYWU2YlwiLFwiI2ZkOGQzY1wiLFwiI2YxNjkxM1wiLFwiI2Q5NDgwMVwiLFwiIzhjMmQwNFwiXSxcbjk6IFtcIiNmZmY1ZWJcIixcIiNmZWU2Y2VcIixcIiNmZGQwYTJcIixcIiNmZGFlNmJcIixcIiNmZDhkM2NcIixcIiNmMTY5MTNcIixcIiNkOTQ4MDFcIixcIiNhNjM2MDNcIixcIiM3ZjI3MDRcIl1cbn0sUmVkczoge1xuMzogW1wiI2ZlZTBkMlwiLFwiI2ZjOTI3MlwiLFwiI2RlMmQyNlwiXSxcbjQ6IFtcIiNmZWU1ZDlcIixcIiNmY2FlOTFcIixcIiNmYjZhNGFcIixcIiNjYjE4MWRcIl0sXG41OiBbXCIjZmVlNWQ5XCIsXCIjZmNhZTkxXCIsXCIjZmI2YTRhXCIsXCIjZGUyZDI2XCIsXCIjYTUwZjE1XCJdLFxuNjogW1wiI2ZlZTVkOVwiLFwiI2ZjYmJhMVwiLFwiI2ZjOTI3MlwiLFwiI2ZiNmE0YVwiLFwiI2RlMmQyNlwiLFwiI2E1MGYxNVwiXSxcbjc6IFtcIiNmZWU1ZDlcIixcIiNmY2JiYTFcIixcIiNmYzkyNzJcIixcIiNmYjZhNGFcIixcIiNlZjNiMmNcIixcIiNjYjE4MWRcIixcIiM5OTAwMGRcIl0sXG44OiBbXCIjZmZmNWYwXCIsXCIjZmVlMGQyXCIsXCIjZmNiYmExXCIsXCIjZmM5MjcyXCIsXCIjZmI2YTRhXCIsXCIjZWYzYjJjXCIsXCIjY2IxODFkXCIsXCIjOTkwMDBkXCJdLFxuOTogW1wiI2ZmZjVmMFwiLFwiI2ZlZTBkMlwiLFwiI2ZjYmJhMVwiLFwiI2ZjOTI3MlwiLFwiI2ZiNmE0YVwiLFwiI2VmM2IyY1wiLFwiI2NiMTgxZFwiLFwiI2E1MGYxNVwiLFwiIzY3MDAwZFwiXVxufSxHcmV5czoge1xuMzogW1wiI2YwZjBmMFwiLFwiI2JkYmRiZFwiLFwiIzYzNjM2M1wiXSxcbjQ6IFtcIiNmN2Y3ZjdcIixcIiNjY2NjY2NcIixcIiM5Njk2OTZcIixcIiM1MjUyNTJcIl0sXG41OiBbXCIjZjdmN2Y3XCIsXCIjY2NjY2NjXCIsXCIjOTY5Njk2XCIsXCIjNjM2MzYzXCIsXCIjMjUyNTI1XCJdLFxuNjogW1wiI2Y3ZjdmN1wiLFwiI2Q5ZDlkOVwiLFwiI2JkYmRiZFwiLFwiIzk2OTY5NlwiLFwiIzYzNjM2M1wiLFwiIzI1MjUyNVwiXSxcbjc6IFtcIiNmN2Y3ZjdcIixcIiNkOWQ5ZDlcIixcIiNiZGJkYmRcIixcIiM5Njk2OTZcIixcIiM3MzczNzNcIixcIiM1MjUyNTJcIixcIiMyNTI1MjVcIl0sXG44OiBbXCIjZmZmZmZmXCIsXCIjZjBmMGYwXCIsXCIjZDlkOWQ5XCIsXCIjYmRiZGJkXCIsXCIjOTY5Njk2XCIsXCIjNzM3MzczXCIsXCIjNTI1MjUyXCIsXCIjMjUyNTI1XCJdLFxuOTogW1wiI2ZmZmZmZlwiLFwiI2YwZjBmMFwiLFwiI2Q5ZDlkOVwiLFwiI2JkYmRiZFwiLFwiIzk2OTY5NlwiLFwiIzczNzM3M1wiLFwiIzUyNTI1MlwiLFwiIzI1MjUyNVwiLFwiIzAwMDAwMFwiXVxufSxQdU9yOiB7XG4zOiBbXCIjZjFhMzQwXCIsXCIjZjdmN2Y3XCIsXCIjOTk4ZWMzXCJdLFxuNDogW1wiI2U2NjEwMVwiLFwiI2ZkYjg2M1wiLFwiI2IyYWJkMlwiLFwiIzVlM2M5OVwiXSxcbjU6IFtcIiNlNjYxMDFcIixcIiNmZGI4NjNcIixcIiNmN2Y3ZjdcIixcIiNiMmFiZDJcIixcIiM1ZTNjOTlcIl0sXG42OiBbXCIjYjM1ODA2XCIsXCIjZjFhMzQwXCIsXCIjZmVlMGI2XCIsXCIjZDhkYWViXCIsXCIjOTk4ZWMzXCIsXCIjNTQyNzg4XCJdLFxuNzogW1wiI2IzNTgwNlwiLFwiI2YxYTM0MFwiLFwiI2ZlZTBiNlwiLFwiI2Y3ZjdmN1wiLFwiI2Q4ZGFlYlwiLFwiIzk5OGVjM1wiLFwiIzU0Mjc4OFwiXSxcbjg6IFtcIiNiMzU4MDZcIixcIiNlMDgyMTRcIixcIiNmZGI4NjNcIixcIiNmZWUwYjZcIixcIiNkOGRhZWJcIixcIiNiMmFiZDJcIixcIiM4MDczYWNcIixcIiM1NDI3ODhcIl0sXG45OiBbXCIjYjM1ODA2XCIsXCIjZTA4MjE0XCIsXCIjZmRiODYzXCIsXCIjZmVlMGI2XCIsXCIjZjdmN2Y3XCIsXCIjZDhkYWViXCIsXCIjYjJhYmQyXCIsXCIjODA3M2FjXCIsXCIjNTQyNzg4XCJdLFxuMTA6IFtcIiM3ZjNiMDhcIixcIiNiMzU4MDZcIixcIiNlMDgyMTRcIixcIiNmZGI4NjNcIixcIiNmZWUwYjZcIixcIiNkOGRhZWJcIixcIiNiMmFiZDJcIixcIiM4MDczYWNcIixcIiM1NDI3ODhcIixcIiMyZDAwNGJcIl0sXG4xMTogW1wiIzdmM2IwOFwiLFwiI2IzNTgwNlwiLFwiI2UwODIxNFwiLFwiI2ZkYjg2M1wiLFwiI2ZlZTBiNlwiLFwiI2Y3ZjdmN1wiLFwiI2Q4ZGFlYlwiLFwiI2IyYWJkMlwiLFwiIzgwNzNhY1wiLFwiIzU0Mjc4OFwiLFwiIzJkMDA0YlwiXVxufSxCckJHOiB7XG4zOiBbXCIjZDhiMzY1XCIsXCIjZjVmNWY1XCIsXCIjNWFiNGFjXCJdLFxuNDogW1wiI2E2NjExYVwiLFwiI2RmYzI3ZFwiLFwiIzgwY2RjMVwiLFwiIzAxODU3MVwiXSxcbjU6IFtcIiNhNjYxMWFcIixcIiNkZmMyN2RcIixcIiNmNWY1ZjVcIixcIiM4MGNkYzFcIixcIiMwMTg1NzFcIl0sXG42OiBbXCIjOGM1MTBhXCIsXCIjZDhiMzY1XCIsXCIjZjZlOGMzXCIsXCIjYzdlYWU1XCIsXCIjNWFiNGFjXCIsXCIjMDE2NjVlXCJdLFxuNzogW1wiIzhjNTEwYVwiLFwiI2Q4YjM2NVwiLFwiI2Y2ZThjM1wiLFwiI2Y1ZjVmNVwiLFwiI2M3ZWFlNVwiLFwiIzVhYjRhY1wiLFwiIzAxNjY1ZVwiXSxcbjg6IFtcIiM4YzUxMGFcIixcIiNiZjgxMmRcIixcIiNkZmMyN2RcIixcIiNmNmU4YzNcIixcIiNjN2VhZTVcIixcIiM4MGNkYzFcIixcIiMzNTk3OGZcIixcIiMwMTY2NWVcIl0sXG45OiBbXCIjOGM1MTBhXCIsXCIjYmY4MTJkXCIsXCIjZGZjMjdkXCIsXCIjZjZlOGMzXCIsXCIjZjVmNWY1XCIsXCIjYzdlYWU1XCIsXCIjODBjZGMxXCIsXCIjMzU5NzhmXCIsXCIjMDE2NjVlXCJdLFxuMTA6IFtcIiM1NDMwMDVcIixcIiM4YzUxMGFcIixcIiNiZjgxMmRcIixcIiNkZmMyN2RcIixcIiNmNmU4YzNcIixcIiNjN2VhZTVcIixcIiM4MGNkYzFcIixcIiMzNTk3OGZcIixcIiMwMTY2NWVcIixcIiMwMDNjMzBcIl0sXG4xMTogW1wiIzU0MzAwNVwiLFwiIzhjNTEwYVwiLFwiI2JmODEyZFwiLFwiI2RmYzI3ZFwiLFwiI2Y2ZThjM1wiLFwiI2Y1ZjVmNVwiLFwiI2M3ZWFlNVwiLFwiIzgwY2RjMVwiLFwiIzM1OTc4ZlwiLFwiIzAxNjY1ZVwiLFwiIzAwM2MzMFwiXVxufSxQUkduOiB7XG4zOiBbXCIjYWY4ZGMzXCIsXCIjZjdmN2Y3XCIsXCIjN2ZiZjdiXCJdLFxuNDogW1wiIzdiMzI5NFwiLFwiI2MyYTVjZlwiLFwiI2E2ZGJhMFwiLFwiIzAwODgzN1wiXSxcbjU6IFtcIiM3YjMyOTRcIixcIiNjMmE1Y2ZcIixcIiNmN2Y3ZjdcIixcIiNhNmRiYTBcIixcIiMwMDg4MzdcIl0sXG42OiBbXCIjNzYyYTgzXCIsXCIjYWY4ZGMzXCIsXCIjZTdkNGU4XCIsXCIjZDlmMGQzXCIsXCIjN2ZiZjdiXCIsXCIjMWI3ODM3XCJdLFxuNzogW1wiIzc2MmE4M1wiLFwiI2FmOGRjM1wiLFwiI2U3ZDRlOFwiLFwiI2Y3ZjdmN1wiLFwiI2Q5ZjBkM1wiLFwiIzdmYmY3YlwiLFwiIzFiNzgzN1wiXSxcbjg6IFtcIiM3NjJhODNcIixcIiM5OTcwYWJcIixcIiNjMmE1Y2ZcIixcIiNlN2Q0ZThcIixcIiNkOWYwZDNcIixcIiNhNmRiYTBcIixcIiM1YWFlNjFcIixcIiMxYjc4MzdcIl0sXG45OiBbXCIjNzYyYTgzXCIsXCIjOTk3MGFiXCIsXCIjYzJhNWNmXCIsXCIjZTdkNGU4XCIsXCIjZjdmN2Y3XCIsXCIjZDlmMGQzXCIsXCIjYTZkYmEwXCIsXCIjNWFhZTYxXCIsXCIjMWI3ODM3XCJdLFxuMTA6IFtcIiM0MDAwNGJcIixcIiM3NjJhODNcIixcIiM5OTcwYWJcIixcIiNjMmE1Y2ZcIixcIiNlN2Q0ZThcIixcIiNkOWYwZDNcIixcIiNhNmRiYTBcIixcIiM1YWFlNjFcIixcIiMxYjc4MzdcIixcIiMwMDQ0MWJcIl0sXG4xMTogW1wiIzQwMDA0YlwiLFwiIzc2MmE4M1wiLFwiIzk5NzBhYlwiLFwiI2MyYTVjZlwiLFwiI2U3ZDRlOFwiLFwiI2Y3ZjdmN1wiLFwiI2Q5ZjBkM1wiLFwiI2E2ZGJhMFwiLFwiIzVhYWU2MVwiLFwiIzFiNzgzN1wiLFwiIzAwNDQxYlwiXVxufSxQaVlHOiB7XG4zOiBbXCIjZTlhM2M5XCIsXCIjZjdmN2Y3XCIsXCIjYTFkNzZhXCJdLFxuNDogW1wiI2QwMWM4YlwiLFwiI2YxYjZkYVwiLFwiI2I4ZTE4NlwiLFwiIzRkYWMyNlwiXSxcbjU6IFtcIiNkMDFjOGJcIixcIiNmMWI2ZGFcIixcIiNmN2Y3ZjdcIixcIiNiOGUxODZcIixcIiM0ZGFjMjZcIl0sXG42OiBbXCIjYzUxYjdkXCIsXCIjZTlhM2M5XCIsXCIjZmRlMGVmXCIsXCIjZTZmNWQwXCIsXCIjYTFkNzZhXCIsXCIjNGQ5MjIxXCJdLFxuNzogW1wiI2M1MWI3ZFwiLFwiI2U5YTNjOVwiLFwiI2ZkZTBlZlwiLFwiI2Y3ZjdmN1wiLFwiI2U2ZjVkMFwiLFwiI2ExZDc2YVwiLFwiIzRkOTIyMVwiXSxcbjg6IFtcIiNjNTFiN2RcIixcIiNkZTc3YWVcIixcIiNmMWI2ZGFcIixcIiNmZGUwZWZcIixcIiNlNmY1ZDBcIixcIiNiOGUxODZcIixcIiM3ZmJjNDFcIixcIiM0ZDkyMjFcIl0sXG45OiBbXCIjYzUxYjdkXCIsXCIjZGU3N2FlXCIsXCIjZjFiNmRhXCIsXCIjZmRlMGVmXCIsXCIjZjdmN2Y3XCIsXCIjZTZmNWQwXCIsXCIjYjhlMTg2XCIsXCIjN2ZiYzQxXCIsXCIjNGQ5MjIxXCJdLFxuMTA6IFtcIiM4ZTAxNTJcIixcIiNjNTFiN2RcIixcIiNkZTc3YWVcIixcIiNmMWI2ZGFcIixcIiNmZGUwZWZcIixcIiNlNmY1ZDBcIixcIiNiOGUxODZcIixcIiM3ZmJjNDFcIixcIiM0ZDkyMjFcIixcIiMyNzY0MTlcIl0sXG4xMTogW1wiIzhlMDE1MlwiLFwiI2M1MWI3ZFwiLFwiI2RlNzdhZVwiLFwiI2YxYjZkYVwiLFwiI2ZkZTBlZlwiLFwiI2Y3ZjdmN1wiLFwiI2U2ZjVkMFwiLFwiI2I4ZTE4NlwiLFwiIzdmYmM0MVwiLFwiIzRkOTIyMVwiLFwiIzI3NjQxOVwiXVxufSxSZEJ1OiB7XG4zOiBbXCIjZWY4YTYyXCIsXCIjZjdmN2Y3XCIsXCIjNjdhOWNmXCJdLFxuNDogW1wiI2NhMDAyMFwiLFwiI2Y0YTU4MlwiLFwiIzkyYzVkZVwiLFwiIzA1NzFiMFwiXSxcbjU6IFtcIiNjYTAwMjBcIixcIiNmNGE1ODJcIixcIiNmN2Y3ZjdcIixcIiM5MmM1ZGVcIixcIiMwNTcxYjBcIl0sXG42OiBbXCIjYjIxODJiXCIsXCIjZWY4YTYyXCIsXCIjZmRkYmM3XCIsXCIjZDFlNWYwXCIsXCIjNjdhOWNmXCIsXCIjMjE2NmFjXCJdLFxuNzogW1wiI2IyMTgyYlwiLFwiI2VmOGE2MlwiLFwiI2ZkZGJjN1wiLFwiI2Y3ZjdmN1wiLFwiI2QxZTVmMFwiLFwiIzY3YTljZlwiLFwiIzIxNjZhY1wiXSxcbjg6IFtcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNkMWU1ZjBcIixcIiM5MmM1ZGVcIixcIiM0MzkzYzNcIixcIiMyMTY2YWNcIl0sXG45OiBbXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZjdmN2Y3XCIsXCIjZDFlNWYwXCIsXCIjOTJjNWRlXCIsXCIjNDM5M2MzXCIsXCIjMjE2NmFjXCJdLFxuMTA6IFtcIiM2NzAwMWZcIixcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNkMWU1ZjBcIixcIiM5MmM1ZGVcIixcIiM0MzkzYzNcIixcIiMyMTY2YWNcIixcIiMwNTMwNjFcIl0sXG4xMTogW1wiIzY3MDAxZlwiLFwiI2IyMTgyYlwiLFwiI2Q2NjA0ZFwiLFwiI2Y0YTU4MlwiLFwiI2ZkZGJjN1wiLFwiI2Y3ZjdmN1wiLFwiI2QxZTVmMFwiLFwiIzkyYzVkZVwiLFwiIzQzOTNjM1wiLFwiIzIxNjZhY1wiLFwiIzA1MzA2MVwiXVxufSxSZEd5OiB7XG4zOiBbXCIjZWY4YTYyXCIsXCIjZmZmZmZmXCIsXCIjOTk5OTk5XCJdLFxuNDogW1wiI2NhMDAyMFwiLFwiI2Y0YTU4MlwiLFwiI2JhYmFiYVwiLFwiIzQwNDA0MFwiXSxcbjU6IFtcIiNjYTAwMjBcIixcIiNmNGE1ODJcIixcIiNmZmZmZmZcIixcIiNiYWJhYmFcIixcIiM0MDQwNDBcIl0sXG42OiBbXCIjYjIxODJiXCIsXCIjZWY4YTYyXCIsXCIjZmRkYmM3XCIsXCIjZTBlMGUwXCIsXCIjOTk5OTk5XCIsXCIjNGQ0ZDRkXCJdLFxuNzogW1wiI2IyMTgyYlwiLFwiI2VmOGE2MlwiLFwiI2ZkZGJjN1wiLFwiI2ZmZmZmZlwiLFwiI2UwZTBlMFwiLFwiIzk5OTk5OVwiLFwiIzRkNGQ0ZFwiXSxcbjg6IFtcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNlMGUwZTBcIixcIiNiYWJhYmFcIixcIiM4Nzg3ODdcIixcIiM0ZDRkNGRcIl0sXG45OiBbXCIjYjIxODJiXCIsXCIjZDY2MDRkXCIsXCIjZjRhNTgyXCIsXCIjZmRkYmM3XCIsXCIjZmZmZmZmXCIsXCIjZTBlMGUwXCIsXCIjYmFiYWJhXCIsXCIjODc4Nzg3XCIsXCIjNGQ0ZDRkXCJdLFxuMTA6IFtcIiM2NzAwMWZcIixcIiNiMjE4MmJcIixcIiNkNjYwNGRcIixcIiNmNGE1ODJcIixcIiNmZGRiYzdcIixcIiNlMGUwZTBcIixcIiNiYWJhYmFcIixcIiM4Nzg3ODdcIixcIiM0ZDRkNGRcIixcIiMxYTFhMWFcIl0sXG4xMTogW1wiIzY3MDAxZlwiLFwiI2IyMTgyYlwiLFwiI2Q2NjA0ZFwiLFwiI2Y0YTU4MlwiLFwiI2ZkZGJjN1wiLFwiI2ZmZmZmZlwiLFwiI2UwZTBlMFwiLFwiI2JhYmFiYVwiLFwiIzg3ODc4N1wiLFwiIzRkNGQ0ZFwiLFwiIzFhMWExYVwiXVxufSxSZFlsQnU6IHtcbjM6IFtcIiNmYzhkNTlcIixcIiNmZmZmYmZcIixcIiM5MWJmZGJcIl0sXG40OiBbXCIjZDcxOTFjXCIsXCIjZmRhZTYxXCIsXCIjYWJkOWU5XCIsXCIjMmM3YmI2XCJdLFxuNTogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2ZmZmZiZlwiLFwiI2FiZDllOVwiLFwiIzJjN2JiNlwiXSxcbjY6IFtcIiNkNzMwMjdcIixcIiNmYzhkNTlcIixcIiNmZWUwOTBcIixcIiNlMGYzZjhcIixcIiM5MWJmZGJcIixcIiM0NTc1YjRcIl0sXG43OiBbXCIjZDczMDI3XCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDkwXCIsXCIjZmZmZmJmXCIsXCIjZTBmM2Y4XCIsXCIjOTFiZmRiXCIsXCIjNDU3NWI0XCJdLFxuODogW1wiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA5MFwiLFwiI2UwZjNmOFwiLFwiI2FiZDllOVwiLFwiIzc0YWRkMVwiLFwiIzQ1NzViNFwiXSxcbjk6IFtcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOTBcIixcIiNmZmZmYmZcIixcIiNlMGYzZjhcIixcIiNhYmQ5ZTlcIixcIiM3NGFkZDFcIixcIiM0NTc1YjRcIl0sXG4xMDogW1wiI2E1MDAyNlwiLFwiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA5MFwiLFwiI2UwZjNmOFwiLFwiI2FiZDllOVwiLFwiIzc0YWRkMVwiLFwiIzQ1NzViNFwiLFwiIzMxMzY5NVwiXSxcbjExOiBbXCIjYTUwMDI2XCIsXCIjZDczMDI3XCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDkwXCIsXCIjZmZmZmJmXCIsXCIjZTBmM2Y4XCIsXCIjYWJkOWU5XCIsXCIjNzRhZGQxXCIsXCIjNDU3NWI0XCIsXCIjMzEzNjk1XCJdXG59LFNwZWN0cmFsOiB7XG4zOiBbXCIjZmM4ZDU5XCIsXCIjZmZmZmJmXCIsXCIjOTlkNTk0XCJdLFxuNDogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2FiZGRhNFwiLFwiIzJiODNiYVwiXSxcbjU6IFtcIiNkNzE5MWNcIixcIiNmZGFlNjFcIixcIiNmZmZmYmZcIixcIiNhYmRkYTRcIixcIiMyYjgzYmFcIl0sXG42OiBbXCIjZDUzZTRmXCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDhiXCIsXCIjZTZmNTk4XCIsXCIjOTlkNTk0XCIsXCIjMzI4OGJkXCJdLFxuNzogW1wiI2Q1M2U0ZlwiLFwiI2ZjOGQ1OVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2U2ZjU5OFwiLFwiIzk5ZDU5NFwiLFwiIzMyODhiZFwiXSxcbjg6IFtcIiNkNTNlNGZcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNlNmY1OThcIixcIiNhYmRkYTRcIixcIiM2NmMyYTVcIixcIiMzMjg4YmRcIl0sXG45OiBbXCIjZDUzZTRmXCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZmZmZmJmXCIsXCIjZTZmNTk4XCIsXCIjYWJkZGE0XCIsXCIjNjZjMmE1XCIsXCIjMzI4OGJkXCJdLFxuMTA6IFtcIiM5ZTAxNDJcIixcIiNkNTNlNGZcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNlNmY1OThcIixcIiNhYmRkYTRcIixcIiM2NmMyYTVcIixcIiMzMjg4YmRcIixcIiM1ZTRmYTJcIl0sXG4xMTogW1wiIzllMDE0MlwiLFwiI2Q1M2U0ZlwiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2ZmZmZiZlwiLFwiI2U2ZjU5OFwiLFwiI2FiZGRhNFwiLFwiIzY2YzJhNVwiLFwiIzMyODhiZFwiLFwiIzVlNGZhMlwiXVxufSxSZFlsR246IHtcbjM6IFtcIiNmYzhkNTlcIixcIiNmZmZmYmZcIixcIiM5MWNmNjBcIl0sXG40OiBbXCIjZDcxOTFjXCIsXCIjZmRhZTYxXCIsXCIjYTZkOTZhXCIsXCIjMWE5NjQxXCJdLFxuNTogW1wiI2Q3MTkxY1wiLFwiI2ZkYWU2MVwiLFwiI2ZmZmZiZlwiLFwiI2E2ZDk2YVwiLFwiIzFhOTY0MVwiXSxcbjY6IFtcIiNkNzMwMjdcIixcIiNmYzhkNTlcIixcIiNmZWUwOGJcIixcIiNkOWVmOGJcIixcIiM5MWNmNjBcIixcIiMxYTk4NTBcIl0sXG43OiBbXCIjZDczMDI3XCIsXCIjZmM4ZDU5XCIsXCIjZmVlMDhiXCIsXCIjZmZmZmJmXCIsXCIjZDllZjhiXCIsXCIjOTFjZjYwXCIsXCIjMWE5ODUwXCJdLFxuODogW1wiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2Q5ZWY4YlwiLFwiI2E2ZDk2YVwiLFwiIzY2YmQ2M1wiLFwiIzFhOTg1MFwiXSxcbjk6IFtcIiNkNzMwMjdcIixcIiNmNDZkNDNcIixcIiNmZGFlNjFcIixcIiNmZWUwOGJcIixcIiNmZmZmYmZcIixcIiNkOWVmOGJcIixcIiNhNmQ5NmFcIixcIiM2NmJkNjNcIixcIiMxYTk4NTBcIl0sXG4xMDogW1wiI2E1MDAyNlwiLFwiI2Q3MzAyN1wiLFwiI2Y0NmQ0M1wiLFwiI2ZkYWU2MVwiLFwiI2ZlZTA4YlwiLFwiI2Q5ZWY4YlwiLFwiI2E2ZDk2YVwiLFwiIzY2YmQ2M1wiLFwiIzFhOTg1MFwiLFwiIzAwNjgzN1wiXSxcbjExOiBbXCIjYTUwMDI2XCIsXCIjZDczMDI3XCIsXCIjZjQ2ZDQzXCIsXCIjZmRhZTYxXCIsXCIjZmVlMDhiXCIsXCIjZmZmZmJmXCIsXCIjZDllZjhiXCIsXCIjYTZkOTZhXCIsXCIjNjZiZDYzXCIsXCIjMWE5ODUwXCIsXCIjMDA2ODM3XCJdXG59LEFjY2VudDoge1xuMzogW1wiIzdmYzk3ZlwiLFwiI2JlYWVkNFwiLFwiI2ZkYzA4NlwiXSxcbjQ6IFtcIiM3ZmM5N2ZcIixcIiNiZWFlZDRcIixcIiNmZGMwODZcIixcIiNmZmZmOTlcIl0sXG41OiBbXCIjN2ZjOTdmXCIsXCIjYmVhZWQ0XCIsXCIjZmRjMDg2XCIsXCIjZmZmZjk5XCIsXCIjMzg2Y2IwXCJdLFxuNjogW1wiIzdmYzk3ZlwiLFwiI2JlYWVkNFwiLFwiI2ZkYzA4NlwiLFwiI2ZmZmY5OVwiLFwiIzM4NmNiMFwiLFwiI2YwMDI3ZlwiXSxcbjc6IFtcIiM3ZmM5N2ZcIixcIiNiZWFlZDRcIixcIiNmZGMwODZcIixcIiNmZmZmOTlcIixcIiMzODZjYjBcIixcIiNmMDAyN2ZcIixcIiNiZjViMTdcIl0sXG44OiBbXCIjN2ZjOTdmXCIsXCIjYmVhZWQ0XCIsXCIjZmRjMDg2XCIsXCIjZmZmZjk5XCIsXCIjMzg2Y2IwXCIsXCIjZjAwMjdmXCIsXCIjYmY1YjE3XCIsXCIjNjY2NjY2XCJdXG59LERhcmsyOiB7XG4zOiBbXCIjMWI5ZTc3XCIsXCIjZDk1ZjAyXCIsXCIjNzU3MGIzXCJdLFxuNDogW1wiIzFiOWU3N1wiLFwiI2Q5NWYwMlwiLFwiIzc1NzBiM1wiLFwiI2U3Mjk4YVwiXSxcbjU6IFtcIiMxYjllNzdcIixcIiNkOTVmMDJcIixcIiM3NTcwYjNcIixcIiNlNzI5OGFcIixcIiM2NmE2MWVcIl0sXG42OiBbXCIjMWI5ZTc3XCIsXCIjZDk1ZjAyXCIsXCIjNzU3MGIzXCIsXCIjZTcyOThhXCIsXCIjNjZhNjFlXCIsXCIjZTZhYjAyXCJdLFxuNzogW1wiIzFiOWU3N1wiLFwiI2Q5NWYwMlwiLFwiIzc1NzBiM1wiLFwiI2U3Mjk4YVwiLFwiIzY2YTYxZVwiLFwiI2U2YWIwMlwiLFwiI2E2NzYxZFwiXSxcbjg6IFtcIiMxYjllNzdcIixcIiNkOTVmMDJcIixcIiM3NTcwYjNcIixcIiNlNzI5OGFcIixcIiM2NmE2MWVcIixcIiNlNmFiMDJcIixcIiNhNjc2MWRcIixcIiM2NjY2NjZcIl1cbn0sUGFpcmVkOiB7XG4zOiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCJdLFxuNDogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiXSxcbjU6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIl0sXG42OiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCJdLFxuNzogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiLFwiI2ZkYmY2ZlwiXSxcbjg6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIixcIiNlMzFhMWNcIixcIiNmZGJmNmZcIixcIiNmZjdmMDBcIl0sXG45OiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCIsXCIjZmRiZjZmXCIsXCIjZmY3ZjAwXCIsXCIjY2FiMmQ2XCJdLFxuMTA6IFtcIiNhNmNlZTNcIixcIiMxZjc4YjRcIixcIiNiMmRmOGFcIixcIiMzM2EwMmNcIixcIiNmYjlhOTlcIixcIiNlMzFhMWNcIixcIiNmZGJmNmZcIixcIiNmZjdmMDBcIixcIiNjYWIyZDZcIixcIiM2YTNkOWFcIl0sXG4xMTogW1wiI2E2Y2VlM1wiLFwiIzFmNzhiNFwiLFwiI2IyZGY4YVwiLFwiIzMzYTAyY1wiLFwiI2ZiOWE5OVwiLFwiI2UzMWExY1wiLFwiI2ZkYmY2ZlwiLFwiI2ZmN2YwMFwiLFwiI2NhYjJkNlwiLFwiIzZhM2Q5YVwiLFwiI2ZmZmY5OVwiXSxcbjEyOiBbXCIjYTZjZWUzXCIsXCIjMWY3OGI0XCIsXCIjYjJkZjhhXCIsXCIjMzNhMDJjXCIsXCIjZmI5YTk5XCIsXCIjZTMxYTFjXCIsXCIjZmRiZjZmXCIsXCIjZmY3ZjAwXCIsXCIjY2FiMmQ2XCIsXCIjNmEzZDlhXCIsXCIjZmZmZjk5XCIsXCIjYjE1OTI4XCJdXG59LFBhc3RlbDE6IHtcbjM6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIl0sXG40OiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCIsXCIjZGVjYmU0XCJdLFxuNTogW1wiI2ZiYjRhZVwiLFwiI2IzY2RlM1wiLFwiI2NjZWJjNVwiLFwiI2RlY2JlNFwiLFwiI2ZlZDlhNlwiXSxcbjY6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIixcIiNkZWNiZTRcIixcIiNmZWQ5YTZcIixcIiNmZmZmY2NcIl0sXG43OiBbXCIjZmJiNGFlXCIsXCIjYjNjZGUzXCIsXCIjY2NlYmM1XCIsXCIjZGVjYmU0XCIsXCIjZmVkOWE2XCIsXCIjZmZmZmNjXCIsXCIjZTVkOGJkXCJdLFxuODogW1wiI2ZiYjRhZVwiLFwiI2IzY2RlM1wiLFwiI2NjZWJjNVwiLFwiI2RlY2JlNFwiLFwiI2ZlZDlhNlwiLFwiI2ZmZmZjY1wiLFwiI2U1ZDhiZFwiLFwiI2ZkZGFlY1wiXSxcbjk6IFtcIiNmYmI0YWVcIixcIiNiM2NkZTNcIixcIiNjY2ViYzVcIixcIiNkZWNiZTRcIixcIiNmZWQ5YTZcIixcIiNmZmZmY2NcIixcIiNlNWQ4YmRcIixcIiNmZGRhZWNcIixcIiNmMmYyZjJcIl1cbn0sUGFzdGVsMjoge1xuMzogW1wiI2IzZTJjZFwiLFwiI2ZkY2RhY1wiLFwiI2NiZDVlOFwiXSxcbjQ6IFtcIiNiM2UyY2RcIixcIiNmZGNkYWNcIixcIiNjYmQ1ZThcIixcIiNmNGNhZTRcIl0sXG41OiBbXCIjYjNlMmNkXCIsXCIjZmRjZGFjXCIsXCIjY2JkNWU4XCIsXCIjZjRjYWU0XCIsXCIjZTZmNWM5XCJdLFxuNjogW1wiI2IzZTJjZFwiLFwiI2ZkY2RhY1wiLFwiI2NiZDVlOFwiLFwiI2Y0Y2FlNFwiLFwiI2U2ZjVjOVwiLFwiI2ZmZjJhZVwiXSxcbjc6IFtcIiNiM2UyY2RcIixcIiNmZGNkYWNcIixcIiNjYmQ1ZThcIixcIiNmNGNhZTRcIixcIiNlNmY1YzlcIixcIiNmZmYyYWVcIixcIiNmMWUyY2NcIl0sXG44OiBbXCIjYjNlMmNkXCIsXCIjZmRjZGFjXCIsXCIjY2JkNWU4XCIsXCIjZjRjYWU0XCIsXCIjZTZmNWM5XCIsXCIjZmZmMmFlXCIsXCIjZjFlMmNjXCIsXCIjY2NjY2NjXCJdXG59LFNldDE6IHtcbjM6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIl0sXG40OiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCIsXCIjOTg0ZWEzXCJdLFxuNTogW1wiI2U0MWExY1wiLFwiIzM3N2ViOFwiLFwiIzRkYWY0YVwiLFwiIzk4NGVhM1wiLFwiI2ZmN2YwMFwiXSxcbjY6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIixcIiM5ODRlYTNcIixcIiNmZjdmMDBcIixcIiNmZmZmMzNcIl0sXG43OiBbXCIjZTQxYTFjXCIsXCIjMzc3ZWI4XCIsXCIjNGRhZjRhXCIsXCIjOTg0ZWEzXCIsXCIjZmY3ZjAwXCIsXCIjZmZmZjMzXCIsXCIjYTY1NjI4XCJdLFxuODogW1wiI2U0MWExY1wiLFwiIzM3N2ViOFwiLFwiIzRkYWY0YVwiLFwiIzk4NGVhM1wiLFwiI2ZmN2YwMFwiLFwiI2ZmZmYzM1wiLFwiI2E2NTYyOFwiLFwiI2Y3ODFiZlwiXSxcbjk6IFtcIiNlNDFhMWNcIixcIiMzNzdlYjhcIixcIiM0ZGFmNGFcIixcIiM5ODRlYTNcIixcIiNmZjdmMDBcIixcIiNmZmZmMzNcIixcIiNhNjU2MjhcIixcIiNmNzgxYmZcIixcIiM5OTk5OTlcIl1cbn0sU2V0Mjoge1xuMzogW1wiIzY2YzJhNVwiLFwiI2ZjOGQ2MlwiLFwiIzhkYTBjYlwiXSxcbjQ6IFtcIiM2NmMyYTVcIixcIiNmYzhkNjJcIixcIiM4ZGEwY2JcIixcIiNlNzhhYzNcIl0sXG41OiBbXCIjNjZjMmE1XCIsXCIjZmM4ZDYyXCIsXCIjOGRhMGNiXCIsXCIjZTc4YWMzXCIsXCIjYTZkODU0XCJdLFxuNjogW1wiIzY2YzJhNVwiLFwiI2ZjOGQ2MlwiLFwiIzhkYTBjYlwiLFwiI2U3OGFjM1wiLFwiI2E2ZDg1NFwiLFwiI2ZmZDkyZlwiXSxcbjc6IFtcIiM2NmMyYTVcIixcIiNmYzhkNjJcIixcIiM4ZGEwY2JcIixcIiNlNzhhYzNcIixcIiNhNmQ4NTRcIixcIiNmZmQ5MmZcIixcIiNlNWM0OTRcIl0sXG44OiBbXCIjNjZjMmE1XCIsXCIjZmM4ZDYyXCIsXCIjOGRhMGNiXCIsXCIjZTc4YWMzXCIsXCIjYTZkODU0XCIsXCIjZmZkOTJmXCIsXCIjZTVjNDk0XCIsXCIjYjNiM2IzXCJdXG59LFNldDM6IHtcbjM6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIl0sXG40OiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCJdLFxuNTogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiXSxcbjY6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIl0sXG43OiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCIsXCIjYjNkZTY5XCJdLFxuODogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiLFwiI2ZkYjQ2MlwiLFwiI2IzZGU2OVwiLFwiI2ZjY2RlNVwiXSxcbjk6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIixcIiNiM2RlNjlcIixcIiNmY2NkZTVcIixcIiNkOWQ5ZDlcIl0sXG4xMDogW1wiIzhkZDNjN1wiLFwiI2ZmZmZiM1wiLFwiI2JlYmFkYVwiLFwiI2ZiODA3MlwiLFwiIzgwYjFkM1wiLFwiI2ZkYjQ2MlwiLFwiI2IzZGU2OVwiLFwiI2ZjY2RlNVwiLFwiI2Q5ZDlkOVwiLFwiI2JjODBiZFwiXSxcbjExOiBbXCIjOGRkM2M3XCIsXCIjZmZmZmIzXCIsXCIjYmViYWRhXCIsXCIjZmI4MDcyXCIsXCIjODBiMWQzXCIsXCIjZmRiNDYyXCIsXCIjYjNkZTY5XCIsXCIjZmNjZGU1XCIsXCIjZDlkOWQ5XCIsXCIjYmM4MGJkXCIsXCIjY2NlYmM1XCJdLFxuMTI6IFtcIiM4ZGQzYzdcIixcIiNmZmZmYjNcIixcIiNiZWJhZGFcIixcIiNmYjgwNzJcIixcIiM4MGIxZDNcIixcIiNmZGI0NjJcIixcIiNiM2RlNjlcIixcIiNmY2NkZTVcIixcIiNkOWQ5ZDlcIixcIiNiYzgwYmRcIixcIiNjY2ViYzVcIixcIiNmZmVkNmZcIl1cbn19O1xuXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoY29sb3JicmV3ZXIpO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb2xvcmJyZXdlcjtcbn0gZWxzZSB7XG4gICAgdGhpcy5jb2xvcmJyZXdlciA9IGNvbG9yYnJld2VyO1xufVxuXG59KCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29sb3JicmV3ZXIuanMnKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2QzLWNvbG9yJywgWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgZmFjdG9yeSgoZ2xvYmFsLmQzX2NvbG9yID0ge30pKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIENvbG9yKCkge307XG5cbiAgdmFyIHJlSGV4MyA9IC9eIyhbMC05YS1mXXszfSkkLztcbiAgdmFyIHJlSGV4NiA9IC9eIyhbMC05YS1mXXs2fSkkLztcbiAgdmFyIHJlUmdiSW50ZWdlciA9IC9ecmdiXFwoXFxzKihbLStdP1xcZCspXFxzKixcXHMqKFstK10/XFxkKylcXHMqLFxccyooWy0rXT9cXGQrKVxccypcXCkkLztcbiAgdmFyIHJlUmdiUGVyY2VudCA9IC9ecmdiXFwoXFxzKihbLStdP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbLStdP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbLStdP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgdmFyIHJlSHNsUGVyY2VudCA9IC9eaHNsXFwoXFxzKihbLStdP1xcZCsoPzpcXC5cXGQrKT8pXFxzKixcXHMqKFstK10/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFstK10/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICBjb2xvci5wcm90b3R5cGUgPSBDb2xvci5wcm90b3R5cGUgPSB7XG4gICAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJnYigpICsgXCJcIjtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gY29sb3IoZm9ybWF0KSB7XG4gICAgdmFyIG07XG4gICAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAobSA9IHJlSGV4My5leGVjKGZvcm1hdCkpID8gKG0gPSBwYXJzZUludChtWzFdLCAxNiksIHJnYigobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweDBmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSkpIC8vICNmMDBcbiAgICAgICAgOiAobSA9IHJlSGV4Ni5leGVjKGZvcm1hdCkpID8gcmdibihwYXJzZUludChtWzFdLCAxNikpIC8vICNmZjAwMDBcbiAgICAgICAgOiAobSA9IHJlUmdiSW50ZWdlci5leGVjKGZvcm1hdCkpID8gcmdiKG1bMV0sIG1bMl0sIG1bM10pIC8vIHJnYigyNTUsMCwwKVxuICAgICAgICA6IChtID0gcmVSZ2JQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyByZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCkgLy8gcmdiKDEwMCUsMCUsMCUpXG4gICAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbChtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwKSAvLyBoc2woMTIwLDUwJSw1MCUpXG4gICAgICAgIDogbmFtZWQuaGFzT3duUHJvcGVydHkoZm9ybWF0KSA/IHJnYm4obmFtZWRbZm9ybWF0XSlcbiAgICAgICAgOiBudWxsO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJnYm4obikge1xuICAgIHJldHVybiByZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmKTtcbiAgfVxuXG4gIHZhciBuYW1lZCA9IHtcbiAgICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxuICAgIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gICAgYXF1YTogMHgwMGZmZmYsXG4gICAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXG4gICAgYXp1cmU6IDB4ZjBmZmZmLFxuICAgIGJlaWdlOiAweGY1ZjVkYyxcbiAgICBiaXNxdWU6IDB4ZmZlNGM0LFxuICAgIGJsYWNrOiAweDAwMDAwMCxcbiAgICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXG4gICAgYmx1ZTogMHgwMDAwZmYsXG4gICAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gICAgYnJvd246IDB4YTUyYTJhLFxuICAgIGJ1cmx5d29vZDogMHhkZWI4ODcsXG4gICAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgICBjaGFydHJldXNlOiAweDdmZmYwMCxcbiAgICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxuICAgIGNvcmFsOiAweGZmN2Y1MCxcbiAgICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXG4gICAgY29ybnNpbGs6IDB4ZmZmOGRjLFxuICAgIGNyaW1zb246IDB4ZGMxNDNjLFxuICAgIGN5YW46IDB4MDBmZmZmLFxuICAgIGRhcmtibHVlOiAweDAwMDA4YixcbiAgICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gICAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXG4gICAgZGFya2dyYXk6IDB4YTlhOWE5LFxuICAgIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gICAgZGFya2dyZXk6IDB4YTlhOWE5LFxuICAgIGRhcmtraGFraTogMHhiZGI3NmIsXG4gICAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICAgIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcbiAgICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcbiAgICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgICBkYXJrcmVkOiAweDhiMDAwMCxcbiAgICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcbiAgICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICAgIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxuICAgIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxuICAgIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICAgIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxuICAgIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxuICAgIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXG4gICAgZGltZ3JheTogMHg2OTY5NjksXG4gICAgZGltZ3JleTogMHg2OTY5NjksXG4gICAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXG4gICAgZmlyZWJyaWNrOiAweGIyMjIyMixcbiAgICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gICAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxuICAgIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxuICAgIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gICAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXG4gICAgZ29sZDogMHhmZmQ3MDAsXG4gICAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgICBncmF5OiAweDgwODA4MCxcbiAgICBncmVlbjogMHgwMDgwMDAsXG4gICAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICAgIGdyZXk6IDB4ODA4MDgwLFxuICAgIGhvbmV5ZGV3OiAweGYwZmZmMCxcbiAgICBob3RwaW5rOiAweGZmNjliNCxcbiAgICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxuICAgIGluZGlnbzogMHg0YjAwODIsXG4gICAgaXZvcnk6IDB4ZmZmZmYwLFxuICAgIGtoYWtpOiAweGYwZTY4YyxcbiAgICBsYXZlbmRlcjogMHhlNmU2ZmEsXG4gICAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gICAgbGF3bmdyZWVuOiAweDdjZmMwMCxcbiAgICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxuICAgIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gICAgbGlnaHRjb3JhbDogMHhmMDgwODAsXG4gICAgbGlnaHRjeWFuOiAweGUwZmZmZixcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gICAgbGlnaHRncmF5OiAweGQzZDNkMyxcbiAgICBsaWdodGdyZWVuOiAweDkwZWU5MCxcbiAgICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICAgIGxpZ2h0cGluazogMHhmZmI2YzEsXG4gICAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxuICAgIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICAgIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXG4gICAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxuICAgIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXG4gICAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxuICAgIGxpbWU6IDB4MDBmZjAwLFxuICAgIGxpbWVncmVlbjogMHgzMmNkMzIsXG4gICAgbGluZW46IDB4ZmFmMGU2LFxuICAgIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICAgIG1hcm9vbjogMHg4MDAwMDAsXG4gICAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXG4gICAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gICAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcbiAgICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxuICAgIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcbiAgICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICAgIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXG4gICAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcbiAgICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICAgIG1pc3R5cm9zZTogMHhmZmU0ZTEsXG4gICAgbW9jY2FzaW46IDB4ZmZlNGI1LFxuICAgIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgICBuYXZ5OiAweDAwMDA4MCxcbiAgICBvbGRsYWNlOiAweGZkZjVlNixcbiAgICBvbGl2ZTogMHg4MDgwMDAsXG4gICAgb2xpdmVkcmFiOiAweDZiOGUyMyxcbiAgICBvcmFuZ2U6IDB4ZmZhNTAwLFxuICAgIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gICAgb3JjaGlkOiAweGRhNzBkNixcbiAgICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcbiAgICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICAgIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxuICAgIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxuICAgIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICAgIHBlYWNocHVmZjogMHhmZmRhYjksXG4gICAgcGVydTogMHhjZDg1M2YsXG4gICAgcGluazogMHhmZmMwY2IsXG4gICAgcGx1bTogMHhkZGEwZGQsXG4gICAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXG4gICAgcHVycGxlOiAweDgwMDA4MCxcbiAgICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcbiAgICByZWQ6IDB4ZmYwMDAwLFxuICAgIHJvc3licm93bjogMHhiYzhmOGYsXG4gICAgcm95YWxibHVlOiAweDQxNjllMSxcbiAgICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXG4gICAgc2FsbW9uOiAweGZhODA3MixcbiAgICBzYW5keWJyb3duOiAweGY0YTQ2MCxcbiAgICBzZWFncmVlbjogMHgyZThiNTcsXG4gICAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICAgIHNpZW5uYTogMHhhMDUyMmQsXG4gICAgc2lsdmVyOiAweGMwYzBjMCxcbiAgICBza3libHVlOiAweDg3Y2VlYixcbiAgICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxuICAgIHNsYXRlZ3JheTogMHg3MDgwOTAsXG4gICAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgICBzbm93OiAweGZmZmFmYSxcbiAgICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXG4gICAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgICB0YW46IDB4ZDJiNDhjLFxuICAgIHRlYWw6IDB4MDA4MDgwLFxuICAgIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICAgIHRvbWF0bzogMHhmZjYzNDcsXG4gICAgdHVycXVvaXNlOiAweDQwZTBkMCxcbiAgICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICAgIHdoZWF0OiAweGY1ZGViMyxcbiAgICB3aGl0ZTogMHhmZmZmZmYsXG4gICAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gICAgeWVsbG93OiAweGZmZmYwMCxcbiAgICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcbiAgfTtcblxuICB2YXIgZGFya2VyID0gLjc7XG4gIHZhciBicmlnaHRlciA9IDEgLyBkYXJrZXI7XG5cbiAgZnVuY3Rpb24gcmdiKHIsIGcsIGIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKCEociBpbnN0YW5jZW9mIENvbG9yKSkgciA9IGNvbG9yKHIpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgciA9IHIucmdiKCk7XG4gICAgICAgIGIgPSByLmI7XG4gICAgICAgIGcgPSByLmc7XG4gICAgICAgIHIgPSByLnI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByID0gZyA9IGIgPSBOYU47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmdiKHIsIGcsIGIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFJnYihyLCBnLCBiKSB7XG4gICAgdGhpcy5yID0gK3I7XG4gICAgdGhpcy5nID0gK2c7XG4gICAgdGhpcy5iID0gK2I7XG4gIH07XG5cbiAgdmFyIHByb3RvdHlwZSA9IHJnYi5wcm90b3R5cGUgPSBSZ2IucHJvdG90eXBlID0gbmV3IENvbG9yO1xuXG4gIHByb3RvdHlwZS5icmlnaHRlciA9IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogayk7XG4gIH07XG5cbiAgcHJvdG90eXBlLmRhcmtlciA9IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IFJnYih0aGlzLnIgKiBrLCB0aGlzLmcgKiBrLCB0aGlzLmIgKiBrKTtcbiAgfTtcblxuICBwcm90b3R5cGUucmdiID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcHJvdG90eXBlLmRpc3BsYXlhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMuciAmJiB0aGlzLnIgPD0gMjU1KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmcgJiYgdGhpcy5nIDw9IDI1NSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5iICYmIHRoaXMuYiA8PSAyNTUpO1xuICB9O1xuXG4gIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmb3JtYXQodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9ybWF0KHIsIGcsIGIpIHtcbiAgICByZXR1cm4gXCIjXCJcbiAgICAgICAgKyAoaXNOYU4ocikgPyBcIjAwXCIgOiAociA9IE1hdGgucm91bmQocikpIDwgMTYgPyBcIjBcIiArIE1hdGgubWF4KDAsIHIpLnRvU3RyaW5nKDE2KSA6IE1hdGgubWluKDI1NSwgcikudG9TdHJpbmcoMTYpKVxuICAgICAgICArIChpc05hTihnKSA/IFwiMDBcIiA6IChnID0gTWF0aC5yb3VuZChnKSkgPCAxNiA/IFwiMFwiICsgTWF0aC5tYXgoMCwgZykudG9TdHJpbmcoMTYpIDogTWF0aC5taW4oMjU1LCBnKS50b1N0cmluZygxNikpXG4gICAgICAgICsgKGlzTmFOKGIpID8gXCIwMFwiIDogKGIgPSBNYXRoLnJvdW5kKGIpKSA8IDE2ID8gXCIwXCIgKyBNYXRoLm1heCgwLCBiKS50b1N0cmluZygxNikgOiBNYXRoLm1pbigyNTUsIGIpLnRvU3RyaW5nKDE2KSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaHNsKGgsIHMsIGwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKGggaW5zdGFuY2VvZiBIc2wpIHtcbiAgICAgICAgbCA9IGgubDtcbiAgICAgICAgcyA9IGgucztcbiAgICAgICAgaCA9IGguaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghKGggaW5zdGFuY2VvZiBDb2xvcikpIGggPSBjb2xvcihoKTtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICBpZiAoaCBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIGg7XG4gICAgICAgICAgaCA9IGgucmdiKCk7XG4gICAgICAgICAgdmFyIHIgPSBoLnIgLyAyNTUsXG4gICAgICAgICAgICAgIGcgPSBoLmcgLyAyNTUsXG4gICAgICAgICAgICAgIGIgPSBoLmIgLyAyNTUsXG4gICAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgICAgICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgICAgICAgICAgcmFuZ2UgPSBtYXggLSBtaW47XG4gICAgICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgICAgIHMgPSBsIDwgLjUgPyByYW5nZSAvIChtYXggKyBtaW4pIDogcmFuZ2UgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHJhbmdlICsgKGcgPCBiKSAqIDY7XG4gICAgICAgICAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcmFuZ2UgKyAyO1xuICAgICAgICAgICAgZWxzZSBoID0gKHIgLSBnKSAvIHJhbmdlICsgNDtcbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggPSBOYU47XG4gICAgICAgICAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaCA9IHMgPSBsID0gTmFOO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgSHNsKGgsIHMsIGwpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEhzbChoLCBzLCBsKSB7XG4gICAgdGhpcy5oID0gK2g7XG4gICAgdGhpcy5zID0gK3M7XG4gICAgdGhpcy5sID0gK2w7XG4gIH07XG5cbiAgdmFyIHByb3RvdHlwZSQxID0gaHNsLnByb3RvdHlwZSA9IEhzbC5wcm90b3R5cGUgPSBuZXcgQ29sb3I7XG5cbiAgcHJvdG90eXBlJDEuYnJpZ2h0ZXIgPSBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrKTtcbiAgfTtcblxuICBwcm90b3R5cGUkMS5kYXJrZXIgPSBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGspO1xuICB9O1xuXG4gIHByb3RvdHlwZSQxLnJnYiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMilcbiAgICApO1xuICB9O1xuXG4gIHByb3RvdHlwZSQxLmRpc3BsYXlhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMucyAmJiB0aGlzLnMgPD0gMSB8fCBpc05hTih0aGlzLnMpKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmwgJiYgdGhpcy5sIDw9IDEpO1xuICB9O1xuXG4gIC8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbiAgZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgICByZXR1cm4gKGggPCA2MCA/IG0xICsgKG0yIC0gbTEpICogaCAvIDYwXG4gICAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgICAgOiBtMSkgKiAyNTU7XG4gIH1cblxuICB2YXIgS24gPSAxODtcblxuICB2YXIgWG4gPSAwLjk1MDQ3MDtcbiAgdmFyIFluID0gMTtcbiAgdmFyIFpuID0gMS4wODg4MzA7XG4gIHZhciB0MCA9IDQgLyAyOTtcbiAgdmFyIHQxID0gNiAvIDI5O1xuICB2YXIgdDIgPSAzICogdDEgKiB0MTtcbiAgdmFyIHQzID0gdDEgKiB0MSAqIHQxO1xuICBmdW5jdGlvbiBsYWIobCwgYSwgYikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpZiAobCBpbnN0YW5jZW9mIExhYikge1xuICAgICAgICBiID0gbC5iO1xuICAgICAgICBhID0gbC5hO1xuICAgICAgICBsID0gbC5sO1xuICAgICAgfSBlbHNlIGlmIChsIGluc3RhbmNlb2YgSGNsKSB7XG4gICAgICAgIHZhciBoID0gbC5oICogZGVnMnJhZDtcbiAgICAgICAgYiA9IE1hdGguc2luKGgpICogbC5jO1xuICAgICAgICBhID0gTWF0aC5jb3MoaCkgKiBsLmM7XG4gICAgICAgIGwgPSBsLmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIShsIGluc3RhbmNlb2YgUmdiKSkgbCA9IHJnYihsKTtcbiAgICAgICAgdmFyIHIgPSByZ2IyeHl6KGwuciksXG4gICAgICAgICAgICBnID0gcmdiMnh5eihsLmcpLFxuICAgICAgICAgICAgYiA9IHJnYjJ4eXoobC5iKSxcbiAgICAgICAgICAgIHggPSB4eXoybGFiKCgwLjQxMjQ1NjQgKiByICsgMC4zNTc1NzYxICogZyArIDAuMTgwNDM3NSAqIGIpIC8gWG4pLFxuICAgICAgICAgICAgeSA9IHh5ejJsYWIoKDAuMjEyNjcyOSAqIHIgKyAwLjcxNTE1MjIgKiBnICsgMC4wNzIxNzUwICogYikgLyBZbiksXG4gICAgICAgICAgICB6ID0geHl6MmxhYigoMC4wMTkzMzM5ICogciArIDAuMTE5MTkyMCAqIGcgKyAwLjk1MDMwNDEgKiBiKSAvIFpuKTtcbiAgICAgICAgYiA9IDIwMCAqICh5IC0geik7XG4gICAgICAgIGEgPSA1MDAgKiAoeCAtIHkpO1xuICAgICAgICBsID0gMTE2ICogeSAtIDE2O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IExhYihsLCBhLCBiKTtcbiAgfTtcblxuICBmdW5jdGlvbiBMYWIobCwgYSwgYikge1xuICAgIHRoaXMubCA9ICtsO1xuICAgIHRoaXMuYSA9ICthO1xuICAgIHRoaXMuYiA9ICtiO1xuICB9O1xuXG4gIHZhciBwcm90b3R5cGUkMiA9IGxhYi5wcm90b3R5cGUgPSBMYWIucHJvdG90eXBlID0gbmV3IENvbG9yO1xuXG4gIHByb3RvdHlwZSQyLmJyaWdodGVyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgTGFiKHRoaXMubCArIEtuICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5hLCB0aGlzLmIpO1xuICB9O1xuXG4gIHByb3RvdHlwZSQyLmRhcmtlciA9IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgLSBLbiAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iKTtcbiAgfTtcblxuICBwcm90b3R5cGUkMi5yZ2IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeSA9ICh0aGlzLmwgKyAxNikgLyAxMTYsXG4gICAgICAgIHggPSBpc05hTih0aGlzLmEpID8geSA6IHkgKyB0aGlzLmEgLyA1MDAsXG4gICAgICAgIHogPSBpc05hTih0aGlzLmIpID8geSA6IHkgLSB0aGlzLmIgLyAyMDA7XG4gICAgeSA9IFluICogbGFiMnh5eih5KTtcbiAgICB4ID0gWG4gKiBsYWIyeHl6KHgpO1xuICAgIHogPSBabiAqIGxhYjJ4eXooeik7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICB4eXoycmdiKCAzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopLCAvLyBENjUgLT4gc1JHQlxuICAgICAgeHl6MnJnYigtMC45NjkyNjYwICogeCArIDEuODc2MDEwOCAqIHkgKyAwLjA0MTU1NjAgKiB6KSxcbiAgICAgIHh5ejJyZ2IoIDAuMDU1NjQzNCAqIHggLSAwLjIwNDAyNTkgKiB5ICsgMS4wNTcyMjUyICogeilcbiAgICApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHh5ejJsYWIodCkge1xuICAgIHJldHVybiB0ID4gdDMgPyBNYXRoLnBvdyh0LCAxIC8gMykgOiB0IC8gdDIgKyB0MDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxhYjJ4eXoodCkge1xuICAgIHJldHVybiB0ID4gdDEgPyB0ICogdCAqIHQgOiB0MiAqICh0IC0gdDApO1xuICB9XG5cbiAgZnVuY3Rpb24geHl6MnJnYih4KSB7XG4gICAgcmV0dXJuIDI1NSAqICh4IDw9IDAuMDAzMTMwOCA/IDEyLjkyICogeCA6IDEuMDU1ICogTWF0aC5wb3coeCwgMSAvIDIuNCkgLSAwLjA1NSk7XG4gIH1cblxuICBmdW5jdGlvbiByZ2IyeHl6KHgpIHtcbiAgICByZXR1cm4gKHggLz0gMjU1KSA8PSAwLjA0MDQ1ID8geCAvIDEyLjkyIDogTWF0aC5wb3coKHggKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfVxuXG4gIHZhciBkZWcycmFkID0gTWF0aC5QSSAvIDE4MDtcbiAgdmFyIHJhZDJkZWcgPSAxODAgLyBNYXRoLlBJO1xuXG4gIGZ1bmN0aW9uIGhjbChoLCBjLCBsKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChoIGluc3RhbmNlb2YgSGNsKSB7XG4gICAgICAgIGwgPSBoLmw7XG4gICAgICAgIGMgPSBoLmM7XG4gICAgICAgIGggPSBoLmg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIShoIGluc3RhbmNlb2YgTGFiKSkgaCA9IGxhYihoKTtcbiAgICAgICAgbCA9IGgubDtcbiAgICAgICAgYyA9IE1hdGguc3FydChoLmEgKiBoLmEgKyBoLmIgKiBoLmIpO1xuICAgICAgICBoID0gTWF0aC5hdGFuMihoLmIsIGguYSkgKiByYWQyZGVnO1xuICAgICAgICBpZiAoaCA8IDApIGggKz0gMzYwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEhjbChoLCBjLCBsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBIY2woaCwgYywgbCkge1xuICAgIHRoaXMuaCA9ICtoO1xuICAgIHRoaXMuYyA9ICtjO1xuICAgIHRoaXMubCA9ICtsO1xuICB9O1xuXG4gIHZhciBwcm90b3R5cGUkMyA9IGhjbC5wcm90b3R5cGUgPSBIY2wucHJvdG90eXBlID0gbmV3IENvbG9yO1xuXG4gIHByb3RvdHlwZSQzLmJyaWdodGVyID0gZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgKyBLbiAqIChrID09IG51bGwgPyAxIDogaykpO1xuICB9O1xuXG4gIHByb3RvdHlwZSQzLmRhcmtlciA9IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sIC0gS24gKiAoayA9PSBudWxsID8gMSA6IGspKTtcbiAgfTtcblxuICBwcm90b3R5cGUkMy5yZ2IgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGFiKHRoaXMpLnJnYigpO1xuICB9O1xuXG4gIHZhciBBID0gLTAuMTQ4NjE7XG4gIHZhciBCID0gKzEuNzgyNzc7XG4gIHZhciBDID0gLTAuMjkyMjc7XG4gIHZhciBEID0gLTAuOTA2NDk7XG4gIHZhciBFID0gKzEuOTcyOTQ7XG4gIHZhciBFRCA9IEUgKiBEO1xuICB2YXIgRUIgPSBFICogQjtcbiAgdmFyIEJDX0RBID0gQiAqIEMgLSBEICogQTtcbiAgZnVuY3Rpb24gY3ViZWhlbGl4KGgsIHMsIGwpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKGggaW5zdGFuY2VvZiBDdWJlaGVsaXgpIHtcbiAgICAgICAgbCA9IGgubDtcbiAgICAgICAgcyA9IGgucztcbiAgICAgICAgaCA9IGguaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghKGggaW5zdGFuY2VvZiBSZ2IpKSBoID0gcmdiKGgpO1xuICAgICAgICB2YXIgciA9IGguciAvIDI1NSwgZyA9IGguZyAvIDI1NSwgYiA9IGguYiAvIDI1NTtcbiAgICAgICAgbCA9IChCQ19EQSAqIGIgKyBFRCAqIHIgLSBFQiAqIGcpIC8gKEJDX0RBICsgRUQgLSBFQik7XG4gICAgICAgIHZhciBibCA9IGIgLSBsLCBrID0gKEUgKiAoZyAtIGwpIC0gQyAqIGJsKSAvIEQ7XG4gICAgICAgIHMgPSBNYXRoLnNxcnQoayAqIGsgKyBibCAqIGJsKSAvIChFICogbCAqICgxIC0gbCkpOyAvLyBOYU4gaWYgbD0wIG9yIGw9MVxuICAgICAgICBoID0gcyA/IE1hdGguYXRhbjIoaywgYmwpICogcmFkMmRlZyAtIDEyMCA6IE5hTjtcbiAgICAgICAgaWYgKGggPCAwKSBoICs9IDM2MDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgoaCwgcywgbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQ3ViZWhlbGl4KGgsIHMsIGwpIHtcbiAgICB0aGlzLmggPSAraDtcbiAgICB0aGlzLnMgPSArcztcbiAgICB0aGlzLmwgPSArbDtcbiAgfTtcblxuICB2YXIgcHJvdG90eXBlJDQgPSBjdWJlaGVsaXgucHJvdG90eXBlID0gQ3ViZWhlbGl4LnByb3RvdHlwZSA9IG5ldyBDb2xvcjtcblxuICBwcm90b3R5cGUkNC5icmlnaHRlciA9IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGspO1xuICB9O1xuXG4gIHByb3RvdHlwZSQ0LmRhcmtlciA9IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gZGFya2VyIDogTWF0aC5wb3coZGFya2VyLCBrKTtcbiAgICByZXR1cm4gbmV3IEN1YmVoZWxpeCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogayk7XG4gIH07XG5cbiAgcHJvdG90eXBlJDQucmdiID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGggPSBpc05hTih0aGlzLmgpID8gMCA6ICh0aGlzLmggKyAxMjApICogZGVnMnJhZCxcbiAgICAgICAgbCA9ICt0aGlzLmwsXG4gICAgICAgIGEgPSBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyAqIGwgKiAoMSAtIGwpLFxuICAgICAgICBjb3NoID0gTWF0aC5jb3MoaCksXG4gICAgICAgIHNpbmggPSBNYXRoLnNpbihoKTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIDI1NSAqIChsICsgYSAqIChBICogY29zaCArIEIgKiBzaW5oKSksXG4gICAgICAyNTUgKiAobCArIGEgKiAoQyAqIGNvc2ggKyBEICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEUgKiBjb3NoKSlcbiAgICApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbHRhSHVlKGgxLCBoMCkge1xuICAgIHZhciBkZWx0YSA9IGgxIC0gaDA7XG4gICAgcmV0dXJuIGRlbHRhID4gMTgwIHx8IGRlbHRhIDwgLTE4MFxuICAgICAgICA/IGRlbHRhIC0gMzYwICogTWF0aC5yb3VuZChkZWx0YSAvIDM2MClcbiAgICAgICAgOiBkZWx0YTtcbiAgfTtcblxuICBmdW5jdGlvbiBpbnRlcnBvbGF0ZUN1YmVoZWxpeEdhbW1hKGdhbW1hKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGEgPSBjdWJlaGVsaXgoYSk7XG4gICAgICBiID0gY3ViZWhlbGl4KGIpO1xuICAgICAgdmFyIGFoID0gaXNOYU4oYS5oKSA/IGIuaCA6IGEuaCxcbiAgICAgICAgICBhcyA9IGlzTmFOKGEucykgPyBiLnMgOiBhLnMsXG4gICAgICAgICAgYWwgPSBhLmwsXG4gICAgICAgICAgYmggPSBpc05hTihiLmgpID8gMCA6IGRlbHRhSHVlKGIuaCwgYWgpLFxuICAgICAgICAgIGJzID0gaXNOYU4oYi5zKSA/IDAgOiBiLnMgLSBhcyxcbiAgICAgICAgICBibCA9IGIubCAtIGFsO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgYS5oID0gYWggKyBiaCAqIHQ7XG4gICAgICAgIGEucyA9IGFzICsgYnMgKiB0O1xuICAgICAgICBhLmwgPSBhbCArIGJsICogTWF0aC5wb3codCwgZ2FtbWEpO1xuICAgICAgICByZXR1cm4gYSArIFwiXCI7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gaW50ZXJwb2xhdGVDdWJlaGVsaXhHYW1tYUxvbmcoZ2FtbWEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgICAgYSA9IGN1YmVoZWxpeChhKTtcbiAgICAgIGIgPSBjdWJlaGVsaXgoYik7XG4gICAgICB2YXIgYWggPSBpc05hTihhLmgpID8gYi5oIDogYS5oLFxuICAgICAgICAgIGFzID0gaXNOYU4oYS5zKSA/IGIucyA6IGEucyxcbiAgICAgICAgICBhbCA9IGEubCxcbiAgICAgICAgICBiaCA9IGlzTmFOKGIuaCkgPyAwIDogYi5oIC0gYWgsXG4gICAgICAgICAgYnMgPSBpc05hTihiLnMpID8gMCA6IGIucyAtIGFzLFxuICAgICAgICAgIGJsID0gYi5sIC0gYWw7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICBhLmggPSBhaCArIGJoICogdDtcbiAgICAgICAgYS5zID0gYXMgKyBicyAqIHQ7XG4gICAgICAgIGEubCA9IGFsICsgYmwgKiBNYXRoLnBvdyh0LCBnYW1tYSk7XG4gICAgICAgIHJldHVybiBhICsgXCJcIjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBpbnRlcnBvbGF0ZVJnYihhLCBiKSB7XG4gICAgYSA9IHJnYihhKTtcbiAgICBiID0gcmdiKGIpO1xuICAgIHZhciBhciA9IGEucixcbiAgICAgICAgYWcgPSBhLmcsXG4gICAgICAgIGFiID0gYS5iLFxuICAgICAgICBiciA9IGIuciAtIGFyLFxuICAgICAgICBiZyA9IGIuZyAtIGFnLFxuICAgICAgICBiYiA9IGIuYiAtIGFiO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gZm9ybWF0KE1hdGgucm91bmQoYXIgKyBiciAqIHQpLCBNYXRoLnJvdW5kKGFnICsgYmcgKiB0KSwgTWF0aC5yb3VuZChhYiArIGJiICogdCkpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gaW50ZXJwb2xhdGVIc2woYSwgYikge1xuICAgIGEgPSBoc2woYSk7XG4gICAgYiA9IGhzbChiKTtcbiAgICB2YXIgYWggPSBpc05hTihhLmgpID8gYi5oIDogYS5oLFxuICAgICAgICBhcyA9IGlzTmFOKGEucykgPyBiLnMgOiBhLnMsXG4gICAgICAgIGFsID0gYS5sLFxuICAgICAgICBiaCA9IGlzTmFOKGIuaCkgPyAwIDogZGVsdGFIdWUoYi5oLCBhaCksXG4gICAgICAgIGJzID0gaXNOYU4oYi5zKSA/IDAgOiBiLnMgLSBhcyxcbiAgICAgICAgYmwgPSBiLmwgLSBhbDtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgYS5oID0gYWggKyBiaCAqIHQ7XG4gICAgICBhLnMgPSBhcyArIGJzICogdDtcbiAgICAgIGEubCA9IGFsICsgYmwgKiB0O1xuICAgICAgcmV0dXJuIGEgKyBcIlwiO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gaW50ZXJwb2xhdGVIc2xMb25nKGEsIGIpIHtcbiAgICBhID0gaHNsKGEpO1xuICAgIGIgPSBoc2woYik7XG4gICAgdmFyIGFoID0gaXNOYU4oYS5oKSA/IGIuaCA6IGEuaCxcbiAgICAgICAgYXMgPSBpc05hTihhLnMpID8gYi5zIDogYS5zLFxuICAgICAgICBhbCA9IGEubCxcbiAgICAgICAgYmggPSBpc05hTihiLmgpID8gMCA6IGIuaCAtIGFoLFxuICAgICAgICBicyA9IGlzTmFOKGIucykgPyAwIDogYi5zIC0gYXMsXG4gICAgICAgIGJsID0gYi5sIC0gYWw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGEuaCA9IGFoICsgYmggKiB0O1xuICAgICAgYS5zID0gYXMgKyBicyAqIHQ7XG4gICAgICBhLmwgPSBhbCArIGJsICogdDtcbiAgICAgIHJldHVybiBhICsgXCJcIjtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGludGVycG9sYXRlTGFiKGEsIGIpIHtcbiAgICBhID0gbGFiKGEpO1xuICAgIGIgPSBsYWIoYik7XG4gICAgdmFyIGFsID0gYS5sLFxuICAgICAgICBhYSA9IGEuYSxcbiAgICAgICAgYWIgPSBhLmIsXG4gICAgICAgIGJsID0gYi5sIC0gYWwsXG4gICAgICAgIGJhID0gYi5hIC0gYWEsXG4gICAgICAgIGJiID0gYi5iIC0gYWI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGEubCA9IGFsICsgYmwgKiB0O1xuICAgICAgYS5hID0gYWEgKyBiYSAqIHQ7XG4gICAgICBhLmIgPSBhYiArIGJiICogdDtcbiAgICAgIHJldHVybiBhICsgXCJcIjtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGludGVycG9sYXRlSGNsKGEsIGIpIHtcbiAgICBhID0gaGNsKGEpO1xuICAgIGIgPSBoY2woYik7XG4gICAgdmFyIGFoID0gaXNOYU4oYS5oKSA/IGIuaCA6IGEuaCxcbiAgICAgICAgYWMgPSBpc05hTihhLmMpID8gYi5jIDogYS5jLFxuICAgICAgICBhbCA9IGEubCxcbiAgICAgICAgYmggPSBpc05hTihiLmgpID8gMCA6IGRlbHRhSHVlKGIuaCwgYWgpLFxuICAgICAgICBiYyA9IGlzTmFOKGIuYykgPyAwIDogYi5jIC0gYWMsXG4gICAgICAgIGJsID0gYi5sIC0gYWw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGEuaCA9IGFoICsgYmggKiB0O1xuICAgICAgYS5jID0gYWMgKyBiYyAqIHQ7XG4gICAgICBhLmwgPSBhbCArIGJsICogdDtcbiAgICAgIHJldHVybiBhICsgXCJcIjtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGludGVycG9sYXRlSGNsTG9uZyhhLCBiKSB7XG4gICAgYSA9IGhjbChhKTtcbiAgICBiID0gaGNsKGIpO1xuICAgIHZhciBhaCA9IGlzTmFOKGEuaCkgPyBiLmggOiBhLmgsXG4gICAgICAgIGFjID0gaXNOYU4oYS5jKSA/IGIuYyA6IGEuYyxcbiAgICAgICAgYWwgPSBhLmwsXG4gICAgICAgIGJoID0gaXNOYU4oYi5oKSA/IDAgOiBiLmggLSBhaCxcbiAgICAgICAgYmMgPSBpc05hTihiLmMpID8gMCA6IGIuYyAtIGFjLFxuICAgICAgICBibCA9IGIubCAtIGFsO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBhLmggPSBhaCArIGJoICogdDtcbiAgICAgIGEuYyA9IGFjICsgYmMgKiB0O1xuICAgICAgYS5sID0gYWwgKyBibCAqIHQ7XG4gICAgICByZXR1cm4gYSArIFwiXCI7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaW50ZXJwb2xhdGVDdWJlaGVsaXggPSBpbnRlcnBvbGF0ZUN1YmVoZWxpeEdhbW1hKDEpO1xuICB2YXIgaW50ZXJwb2xhdGVDdWJlaGVsaXhMb25nID0gaW50ZXJwb2xhdGVDdWJlaGVsaXhHYW1tYUxvbmcoMSk7XG5cbiAgdmFyIHZlcnNpb24gPSBcIjAuMi44XCI7XG5cbiAgZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgZXhwb3J0cy5pbnRlcnBvbGF0ZUN1YmVoZWxpeCA9IGludGVycG9sYXRlQ3ViZWhlbGl4O1xuICBleHBvcnRzLmludGVycG9sYXRlQ3ViZWhlbGl4TG9uZyA9IGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZztcbiAgZXhwb3J0cy5pbnRlcnBvbGF0ZUN1YmVoZWxpeEdhbW1hID0gaW50ZXJwb2xhdGVDdWJlaGVsaXhHYW1tYTtcbiAgZXhwb3J0cy5pbnRlcnBvbGF0ZUN1YmVoZWxpeEdhbW1hTG9uZyA9IGludGVycG9sYXRlQ3ViZWhlbGl4R2FtbWFMb25nO1xuICBleHBvcnRzLmNvbG9yID0gY29sb3I7XG4gIGV4cG9ydHMucmdiID0gcmdiO1xuICBleHBvcnRzLmhzbCA9IGhzbDtcbiAgZXhwb3J0cy5sYWIgPSBsYWI7XG4gIGV4cG9ydHMuaGNsID0gaGNsO1xuICBleHBvcnRzLmN1YmVoZWxpeCA9IGN1YmVoZWxpeDtcbiAgZXhwb3J0cy5pbnRlcnBvbGF0ZVJnYiA9IGludGVycG9sYXRlUmdiO1xuICBleHBvcnRzLmludGVycG9sYXRlSHNsID0gaW50ZXJwb2xhdGVIc2w7XG4gIGV4cG9ydHMuaW50ZXJwb2xhdGVIc2xMb25nID0gaW50ZXJwb2xhdGVIc2xMb25nO1xuICBleHBvcnRzLmludGVycG9sYXRlTGFiID0gaW50ZXJwb2xhdGVMYWI7XG4gIGV4cG9ydHMuaW50ZXJwb2xhdGVIY2wgPSBpbnRlcnBvbGF0ZUhjbDtcbiAgZXhwb3J0cy5pbnRlcnBvbGF0ZUhjbExvbmcgPSBpbnRlcnBvbGF0ZUhjbExvbmc7XG5cbn0pKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdkMy1mb3JtYXQnLCBbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICBmYWN0b3J5KChnbG9iYWwuZDNfZm9ybWF0ID0ge30pKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciB6aENuID0ge1xuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHRob3VzYW5kczogXCIsXCIsXG4gICAgZ3JvdXBpbmc6IFszXSxcbiAgICBjdXJyZW5jeTogW1wiwqVcIiwgXCJcIl1cbiAgfTtcblxuICB2YXIgc3ZTZSA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiXFx4YTBcIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJTRUtcIl1cbiAgfTtcblxuICB2YXIgcnVSdSA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiXFx4YTBcIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJcXHhhMNGA0YPQsS5cIl1cbiAgfTtcblxuICB2YXIgcHRCciA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiLlwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIlIkXCIsIFwiXCJdXG4gIH07XG5cbiAgdmFyIHBsUGwgPSB7XG4gICAgZGVjaW1hbDogXCIsXCIsXG4gICAgdGhvdXNhbmRzOiBcIi5cIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJ6xYJcIl1cbiAgfTtcblxuICB2YXIgbmxObCA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiLlwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIuKCrFxceGEwXCIsIFwiXCJdXG4gIH07XG5cbiAgdmFyIG1rTWsgPSB7XG4gICAgZGVjaW1hbDogXCIsXCIsXG4gICAgdGhvdXNhbmRzOiBcIi5cIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJcXHhhMNC00LXQvS5cIl1cbiAgfTtcblxuICB2YXIga29LciA9IHtcbiAgICBkZWNpbWFsOiBcIi5cIixcbiAgICB0aG91c2FuZHM6IFwiLFwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIuKCqVwiLCBcIlwiXVxuICB9O1xuXG4gIHZhciBqYUpwID0ge1xuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHRob3VzYW5kczogXCIsXCIsXG4gICAgZ3JvdXBpbmc6IFszXSxcbiAgICBjdXJyZW5jeTogW1wiXCIsIFwi5YaGXCJdXG4gIH07XG5cbiAgdmFyIGl0SXQgPSB7XG4gICAgZGVjaW1hbDogXCIsXCIsXG4gICAgdGhvdXNhbmRzOiBcIi5cIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCLigqxcIiwgXCJcIl1cbiAgfTtcblxuICB2YXIgaHVIdSA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiXFx4YTBcIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJcXHhhMEZ0XCJdXG4gIH07XG5cbiAgdmFyIGhlSWwgPSB7XG4gICAgZGVjaW1hbDogXCIuXCIsXG4gICAgdGhvdXNhbmRzOiBcIixcIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCLigqpcIiwgXCJcIl1cbiAgfTtcblxuICB2YXIgZnJGciA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiLlwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIlwiLCBcIlxceGEw4oKsXCJdXG4gIH07XG5cbiAgdmFyIGZyQ2EgPSB7XG4gICAgZGVjaW1hbDogXCIsXCIsXG4gICAgdGhvdXNhbmRzOiBcIlxceGEwXCIsXG4gICAgZ3JvdXBpbmc6IFszXSxcbiAgICBjdXJyZW5jeTogW1wiXCIsIFwiJFwiXVxuICB9O1xuXG4gIHZhciBmaUZpID0ge1xuICAgIGRlY2ltYWw6IFwiLFwiLFxuICAgIHRob3VzYW5kczogXCJcXHhhMFwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIlwiLCBcIlxceGEw4oKsXCJdXG4gIH07XG5cbiAgdmFyIGVzRXMgPSB7XG4gICAgZGVjaW1hbDogXCIsXCIsXG4gICAgdGhvdXNhbmRzOiBcIi5cIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJcXHhhMOKCrFwiXVxuICB9O1xuXG4gIHZhciBlblVzID0ge1xuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHRob3VzYW5kczogXCIsXCIsXG4gICAgZ3JvdXBpbmc6IFszXSxcbiAgICBjdXJyZW5jeTogW1wiJFwiLCBcIlwiXVxuICB9O1xuXG4gIHZhciBlbkdiID0ge1xuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHRob3VzYW5kczogXCIsXCIsXG4gICAgZ3JvdXBpbmc6IFszXSxcbiAgICBjdXJyZW5jeTogW1wiwqNcIiwgXCJcIl1cbiAgfTtcblxuICB2YXIgZW5DYSA9IHtcbiAgICBkZWNpbWFsOiBcIi5cIixcbiAgICB0aG91c2FuZHM6IFwiLFwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIiRcIiwgXCJcIl1cbiAgfTtcblxuICB2YXIgZGVEZSA9IHtcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICB0aG91c2FuZHM6IFwiLlwiLFxuICAgIGdyb3VwaW5nOiBbM10sXG4gICAgY3VycmVuY3k6IFtcIlwiLCBcIlxceGEw4oKsXCJdXG4gIH07XG5cbiAgdmFyIGRlQ2ggPSB7XG4gICAgZGVjaW1hbDogXCIsXCIsXG4gICAgdGhvdXNhbmRzOiBcIidcIixcbiAgICBncm91cGluZzogWzNdLFxuICAgIGN1cnJlbmN5OiBbXCJcIiwgXCJcXHhhMENIRlwiXVxuICB9O1xuXG4gIHZhciBjYUVzID0ge1xuICAgIGRlY2ltYWw6IFwiLFwiLFxuICAgIHRob3VzYW5kczogXCIuXCIsXG4gICAgZ3JvdXBpbmc6IFszXSxcbiAgICBjdXJyZW5jeTogW1wiXCIsIFwiXFx4YTDigqxcIl1cbiAgfTtcblxuICAvLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4gIC8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuICAvLyBGb3IgZXhhbXBsZSwgZm9ybWF0RGVjaW1hbCgxLjIzKSByZXR1cm5zIFtcIjEyM1wiLCAwXS5cbiAgZnVuY3Rpb24gZm9ybWF0RGVjaW1hbCh4LCBwKSB7XG4gICAgaWYgKChpID0gKHggPSBwID8geC50b0V4cG9uZW50aWFsKHAgLSAxKSA6IHgudG9FeHBvbmVudGlhbCgpKS5pbmRleE9mKFwiZVwiKSkgPCAwKSByZXR1cm4gbnVsbDsgLy8gTmFOLCDCsUluZmluaXR5XG4gICAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAgIC8vIFRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgdG9FeHBvbmVudGlhbCBlaXRoZXIgaGFzIHRoZSBmb3JtIFxcZFxcLlxcZCtlWy0rXVxcZCtcbiAgICAvLyAoZS5nLiwgMS4yZSszKSBvciB0aGUgZm9ybSBcXGRlWy0rXVxcZCsgKGUuZy4sIDFlKzMpLlxuICAgIHJldHVybiBbXG4gICAgICBjb2VmZmljaWVudC5sZW5ndGggPiAxID8gY29lZmZpY2llbnRbMF0gKyBjb2VmZmljaWVudC5zbGljZSgyKSA6IGNvZWZmaWNpZW50LFxuICAgICAgK3guc2xpY2UoaSArIDEpXG4gICAgXTtcbiAgfTtcblxuICBmdW5jdGlvbiBleHBvbmVudCh4KSB7XG4gICAgcmV0dXJuIHggPSBmb3JtYXREZWNpbWFsKE1hdGguYWJzKHgpKSwgeCA/IHhbMV0gOiBOYU47XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9ybWF0R3JvdXAoZ3JvdXBpbmcsIHRob3VzYW5kcykge1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgd2lkdGgpIHtcbiAgICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgIHQgPSBbXSxcbiAgICAgICAgICBqID0gMCxcbiAgICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgICAgd2hpbGUgKGkgPiAwICYmIGcgPiAwKSB7XG4gICAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgICB0LnB1c2godmFsdWUuc3Vic3RyaW5nKGkgLT0gZywgaSArIGcpKTtcbiAgICAgICAgaWYgKChsZW5ndGggKz0gZyArIDEpID4gd2lkdGgpIGJyZWFrO1xuICAgICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdC5yZXZlcnNlKCkuam9pbih0aG91c2FuZHMpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHByZWZpeEV4cG9uZW50O1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFByZWZpeEF1dG8oeCwgcCkge1xuICAgIHZhciBkID0gZm9ybWF0RGVjaW1hbCh4LCBwKTtcbiAgICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgICBleHBvbmVudCA9IGRbMV0sXG4gICAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgICAgbiA9IGNvZWZmaWNpZW50Lmxlbmd0aDtcbiAgICByZXR1cm4gaSA9PT0gbiA/IGNvZWZmaWNpZW50XG4gICAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICAgIDogaSA+IDAgPyBjb2VmZmljaWVudC5zbGljZSgwLCBpKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoaSlcbiAgICAgICAgOiBcIjAuXCIgKyBuZXcgQXJyYXkoMSAtIGkpLmpvaW4oXCIwXCIpICsgZm9ybWF0RGVjaW1hbCh4LCBNYXRoLm1heCgwLCBwICsgaSAtIDEpKVswXTsgLy8gbGVzcyB0aGFuIDF5IVxuICB9O1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFJvdW5kZWQoeCwgcCkge1xuICAgIHZhciBkID0gZm9ybWF0RGVjaW1hbCh4LCBwKTtcbiAgICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgICBleHBvbmVudCA9IGRbMV07XG4gICAgcmV0dXJuIGV4cG9uZW50IDwgMCA/IFwiMC5cIiArIG5ldyBBcnJheSgtZXhwb25lbnQpLmpvaW4oXCIwXCIpICsgY29lZmZpY2llbnRcbiAgICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICAgIDogY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoZXhwb25lbnQgLSBjb2VmZmljaWVudC5sZW5ndGggKyAyKS5qb2luKFwiMFwiKTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3JtYXREZWZhdWx0KHgsIHApIHtcbiAgICB4ID0geC50b1ByZWNpc2lvbihwKTtcblxuICAgIG91dDogZm9yICh2YXIgbiA9IHgubGVuZ3RoLCBpID0gMSwgaTAgPSAtMSwgaTE7IGkgPCBuOyArK2kpIHtcbiAgICAgIHN3aXRjaCAoeFtpXSkge1xuICAgICAgICBjYXNlIFwiLlwiOiBpMCA9IGkxID0gaTsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIwXCI6IGlmIChpMCA9PT0gMCkgaTAgPSBpOyBpMSA9IGk7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiZVwiOiBicmVhayBvdXQ7XG4gICAgICAgIGRlZmF1bHQ6IGlmIChpMCA+IDApIGkwID0gMDsgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGkwID4gMCA/IHguc2xpY2UoMCwgaTApICsgeC5zbGljZShpMSArIDEpIDogeDtcbiAgfTtcblxuICB2YXIgZm9ybWF0VHlwZXMgPSB7XG4gICAgXCJcIjogZm9ybWF0RGVmYXVsdCxcbiAgICBcIiVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gKHggKiAxMDApLnRvRml4ZWQocCk7IH0sXG4gICAgXCJiXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMik7IH0sXG4gICAgXCJjXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHggKyBcIlwiOyB9LFxuICAgIFwiZFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDEwKTsgfSxcbiAgICBcImVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4geC50b0V4cG9uZW50aWFsKHApOyB9LFxuICAgIFwiZlwiOiBmdW5jdGlvbih4LCBwKSB7IHJldHVybiB4LnRvRml4ZWQocCk7IH0sXG4gICAgXCJnXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9QcmVjaXNpb24ocCk7IH0sXG4gICAgXCJvXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoOCk7IH0sXG4gICAgXCJwXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIGZvcm1hdFJvdW5kZWQoeCAqIDEwMCwgcCk7IH0sXG4gICAgXCJyXCI6IGZvcm1hdFJvdW5kZWQsXG4gICAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gICAgXCJYXCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IH0sXG4gICAgXCJ4XCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpOyB9XG4gIH07XG5cbiAgLy8gW1tmaWxsXWFsaWduXVtzaWduXVtzeW1ib2xdWzBdW3dpZHRoXVssXVsucHJlY2lzaW9uXVt0eXBlXVxuICB2YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtXFwoIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KFthLXolXSk/JC9pO1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICByZXR1cm4gbmV3IEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpIHtcbiAgICBpZiAoIShtYXRjaCA9IHJlLmV4ZWMoc3BlY2lmaWVyKSkpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZm9ybWF0OiBcIiArIHNwZWNpZmllcik7XG5cbiAgICB2YXIgbWF0Y2gsXG4gICAgICAgIGZpbGwgPSBtYXRjaFsxXSB8fCBcIiBcIixcbiAgICAgICAgYWxpZ24gPSBtYXRjaFsyXSB8fCBcIj5cIixcbiAgICAgICAgc2lnbiA9IG1hdGNoWzNdIHx8IFwiLVwiLFxuICAgICAgICBzeW1ib2wgPSBtYXRjaFs0XSB8fCBcIlwiLFxuICAgICAgICB6ZXJvID0gISFtYXRjaFs1XSxcbiAgICAgICAgd2lkdGggPSBtYXRjaFs2XSAmJiArbWF0Y2hbNl0sXG4gICAgICAgIGNvbW1hID0gISFtYXRjaFs3XSxcbiAgICAgICAgcHJlY2lzaW9uID0gbWF0Y2hbOF0gJiYgK21hdGNoWzhdLnNsaWNlKDEpLFxuICAgICAgICB0eXBlID0gbWF0Y2hbOV0gfHwgXCJcIjtcblxuICAgIC8vIFRoZSBcIm5cIiB0eXBlIGlzIGFuIGFsaWFzIGZvciBcIixnXCIuXG4gICAgaWYgKHR5cGUgPT09IFwiblwiKSBjb21tYSA9IHRydWUsIHR5cGUgPSBcImdcIjtcblxuICAgIC8vIE1hcCBpbnZhbGlkIHR5cGVzIHRvIHRoZSBkZWZhdWx0IGZvcm1hdC5cbiAgICBlbHNlIGlmICghZm9ybWF0VHlwZXNbdHlwZV0pIHR5cGUgPSBcIlwiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMuYWxpZ24gPSBhbGlnbjtcbiAgICB0aGlzLnNpZ24gPSBzaWduO1xuICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgIHRoaXMuemVybyA9IHplcm87XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29tbWEgPSBjb21tYTtcbiAgICB0aGlzLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICAgKyB0aGlzLmFsaWduXG4gICAgICAgICsgdGhpcy5zaWduXG4gICAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICAgKyAodGhpcy56ZXJvID8gXCIwXCIgOiBcIlwiKVxuICAgICAgICArICh0aGlzLndpZHRoID09IG51bGwgPyBcIlwiIDogTWF0aC5tYXgoMSwgdGhpcy53aWR0aCB8IDApKVxuICAgICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgICArICh0aGlzLnByZWNpc2lvbiA9PSBudWxsID8gXCJcIiA6IFwiLlwiICsgTWF0aC5tYXgoMCwgdGhpcy5wcmVjaXNpb24gfCAwKSlcbiAgICAgICAgKyB0aGlzLnR5cGU7XG4gIH07XG5cbiAgdmFyIHByZWZpeGVzID0gW1wieVwiLFwielwiLFwiYVwiLFwiZlwiLFwicFwiLFwiblwiLFwiwrVcIixcIm1cIixcIlwiLFwia1wiLFwiTVwiLFwiR1wiLFwiVFwiLFwiUFwiLFwiRVwiLFwiWlwiLFwiWVwiXTtcblxuICBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhbGUobG9jYWxlKSB7XG4gICAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nICYmIGxvY2FsZS50aG91c2FuZHMgPyBmb3JtYXRHcm91cChsb2NhbGUuZ3JvdXBpbmcsIGxvY2FsZS50aG91c2FuZHMpIDogaWRlbnRpdHksXG4gICAgICAgIGN1cnJlbmN5ID0gbG9jYWxlLmN1cnJlbmN5LFxuICAgICAgICBkZWNpbWFsID0gbG9jYWxlLmRlY2ltYWw7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQoc3BlY2lmaWVyKSB7XG4gICAgICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKTtcblxuICAgICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgICBhbGlnbiA9IHNwZWNpZmllci5hbGlnbixcbiAgICAgICAgICBzaWduID0gc3BlY2lmaWVyLnNpZ24sXG4gICAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgICB6ZXJvID0gc3BlY2lmaWVyLnplcm8sXG4gICAgICAgICAgd2lkdGggPSBzcGVjaWZpZXIud2lkdGgsXG4gICAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgICAgcHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbixcbiAgICAgICAgICB0eXBlID0gc3BlY2lmaWVyLnR5cGU7XG5cbiAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgLy8gRm9yIFNJLXByZWZpeCwgdGhlIHN1ZmZpeCBpcyBsYXppbHkgY29tcHV0ZWQuXG4gICAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5WzBdIDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICAgIHN1ZmZpeCA9IHN5bWJvbCA9PT0gXCIkXCIgPyBjdXJyZW5jeVsxXSA6IC9bJXBdLy50ZXN0KHR5cGUpID8gXCIlXCIgOiBcIlwiO1xuXG4gICAgICAvLyBXaGF0IGZvcm1hdCBmdW5jdGlvbiBzaG91bGQgd2UgdXNlP1xuICAgICAgLy8gSXMgdGhpcyBhbiBpbnRlZ2VyIHR5cGU/XG4gICAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgICAgdmFyIGZvcm1hdFR5cGUgPSBmb3JtYXRUeXBlc1t0eXBlXSxcbiAgICAgICAgICBtYXliZVN1ZmZpeCA9ICF0eXBlIHx8IC9bZGVmZ3BycyVdLy50ZXN0KHR5cGUpO1xuXG4gICAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgICAvLyBvciBjbGFtcCB0aGUgc3BlY2lmaWVkIHByZWNpc2lvbiB0byB0aGUgc3VwcG9ydGVkIHJhbmdlLlxuICAgICAgLy8gRm9yIHNpZ25pZmljYW50IHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMSwgMjFdLlxuICAgICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uID09IG51bGwgPyAodHlwZSA/IDYgOiAxMilcbiAgICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgICA6IE1hdGgubWF4KDAsIE1hdGgubWluKDIwLCBwcmVjaXNpb24pKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICAgIHZhbHVlU3VmZml4ID0gc3VmZml4O1xuXG4gICAgICAgIGlmICh0eXBlID09PSBcImNcIikge1xuICAgICAgICAgIHZhbHVlU3VmZml4ID0gZm9ybWF0VHlwZSh2YWx1ZSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSArdmFsdWU7XG5cbiAgICAgICAgICAvLyBDb252ZXJ0IG5lZ2F0aXZlIHRvIHBvc2l0aXZlLCBhbmQgY29tcHV0ZSB0aGUgcHJlZml4LlxuICAgICAgICAgIC8vIE5vdGUgdGhhdCAtMCBpcyBub3QgbGVzcyB0aGFuIDAsIGJ1dCAxIC8gLTAgaXMhXG4gICAgICAgICAgdmFyIHZhbHVlTmVnYXRpdmUgPSAodmFsdWUgPCAwIHx8IDEgLyB2YWx1ZSA8IDApICYmICh2YWx1ZSAqPSAtMSwgdHJ1ZSk7XG5cbiAgICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXRUeXBlKHZhbHVlLCBwcmVjaXNpb24pO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIG9yaWdpbmFsIHZhbHVlIHdhcyBuZWdhdGl2ZSwgaXQgbWF5IGJlIHJvdW5kZWQgdG8gemVybyBkdXJpbmdcbiAgICAgICAgICAvLyBmb3JtYXR0aW5nOyB0cmVhdCB0aGlzIGFzIChwb3NpdGl2ZSkgemVyby5cbiAgICAgICAgICBpZiAodmFsdWVOZWdhdGl2ZSkge1xuICAgICAgICAgICAgdmFyIGkgPSAtMSwgbiA9IHZhbHVlLmxlbmd0aCwgYztcbiAgICAgICAgICAgIHZhbHVlTmVnYXRpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgICAgIGlmIChjID0gdmFsdWUuY2hhckNvZGVBdChpKSwgKDQ4IDwgYyAmJiBjIDwgNTgpXG4gICAgICAgICAgICAgICAgICB8fCAodHlwZSA9PT0gXCJ4XCIgJiYgOTYgPCBjICYmIGMgPCAxMDMpXG4gICAgICAgICAgICAgICAgICB8fCAodHlwZSA9PT0gXCJYXCIgJiYgNjQgPCBjICYmIGMgPCA3MSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZU5lZ2F0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICAgIHZhbHVlUHJlZml4ID0gKHZhbHVlTmVnYXRpdmUgPyAoc2lnbiA9PT0gXCIoXCIgPyBzaWduIDogXCItXCIpIDogc2lnbiA9PT0gXCItXCIgfHwgc2lnbiA9PT0gXCIoXCIgPyBcIlwiIDogc2lnbikgKyB2YWx1ZVByZWZpeDtcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHZhbHVlU3VmZml4ICsgKHR5cGUgPT09IFwic1wiID8gcHJlZml4ZXNbOCArIHByZWZpeEV4cG9uZW50IC8gM10gOiBcIlwiKSArICh2YWx1ZU5lZ2F0aXZlICYmIHNpZ24gPT09IFwiKFwiID8gXCIpXCIgOiBcIlwiKTtcblxuICAgICAgICAgIC8vIEJyZWFrIHRoZSBmb3JtYXR0ZWQgdmFsdWUgaW50byB0aGUgaW50ZWdlciDigJx2YWx1ZeKAnSBwYXJ0IHRoYXQgY2FuIGJlXG4gICAgICAgICAgLy8gZ3JvdXBlZCwgYW5kIGZyYWN0aW9uYWwgb3IgZXhwb25lbnRpYWwg4oCcc3VmZml44oCdIHBhcnQgdGhhdCBpcyBub3QuXG4gICAgICAgICAgaWYgKG1heWJlU3VmZml4KSB7XG4gICAgICAgICAgICB2YXIgaSA9IC0xLCBuID0gdmFsdWUubGVuZ3RoLCBjO1xuICAgICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgICAgaWYgKGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpLCA0OCA+IGMgfHwgYyA+IDU3KSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdWZmaXggPSAoYyA9PT0gNDYgPyBkZWNpbWFsICsgdmFsdWUuc2xpY2UoaSArIDEpIDogdmFsdWUuc2xpY2UoaSkpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBub3QgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYmVmb3JlIHBhZGRpbmcuXG4gICAgICAgIGlmIChjb21tYSAmJiAhemVybykgdmFsdWUgPSBncm91cCh2YWx1ZSwgSW5maW5pdHkpO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHBhZGRpbmcuXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZVByZWZpeC5sZW5ndGggKyB2YWx1ZS5sZW5ndGggKyB2YWx1ZVN1ZmZpeC5sZW5ndGgsXG4gICAgICAgICAgICBwYWRkaW5nID0gbGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpIDogXCJcIjtcblxuICAgICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYWZ0ZXIgcGFkZGluZy5cbiAgICAgICAgaWYgKGNvbW1hICYmIHplcm8pIHZhbHVlID0gZ3JvdXAocGFkZGluZyArIHZhbHVlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gdmFsdWVTdWZmaXgubGVuZ3RoIDogSW5maW5pdHkpLCBwYWRkaW5nID0gXCJcIjtcblxuICAgICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgZmluYWwgb3V0cHV0IGJhc2VkIG9uIHRoZSBkZXNpcmVkIGFsaWdubWVudC5cbiAgICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICAgIGNhc2UgXCI8XCI6IHJldHVybiB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nO1xuICAgICAgICAgIGNhc2UgXCI9XCI6IHJldHVybiB2YWx1ZVByZWZpeCArIHBhZGRpbmcgKyB2YWx1ZSArIHZhbHVlU3VmZml4O1xuICAgICAgICAgIGNhc2UgXCJeXCI6IHJldHVybiBwYWRkaW5nLnNsaWNlKDAsIGxlbmd0aCA9IHBhZGRpbmcubGVuZ3RoID4+IDEpICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZy5zbGljZShsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWRkaW5nICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSkge1xuICAgICAgdmFyIGYgPSBmb3JtYXQoKHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpLCBzcGVjaWZpZXIudHlwZSA9IFwiZlwiLCBzcGVjaWZpZXIpKSxcbiAgICAgICAgICBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgICAgayA9IE1hdGgucG93KDEwLCAtZSksXG4gICAgICAgICAgcHJlZml4ID0gcHJlZml4ZXNbOCArIGUgLyAzXTtcbiAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZihrICogdmFsdWUpICsgcHJlZml4O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gcHJlY2lzaW9uRml4ZWQoc3RlcCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCAtZXhwb25lbnQoTWF0aC5hYnMoc3RlcCkpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwcmVjaXNpb25QcmVmaXgoc3RlcCwgdmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMgLSBleHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHByZWNpc2lvblJvdW5kKHN0ZXAsIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBleHBvbmVudChNYXRoLmFicyhtYXgpKSAtIGV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSkgKyAxO1xuICB9O1xuXG4gIHZhciBsb2NhbGVEZWZpbml0aW9ucyA9IHtcbiAgICBcImNhLUVTXCI6IGNhRXMsXG4gICAgXCJkZS1DSFwiOiBkZUNoLFxuICAgIFwiZGUtREVcIjogZGVEZSxcbiAgICBcImVuLUNBXCI6IGVuQ2EsXG4gICAgXCJlbi1HQlwiOiBlbkdiLFxuICAgIFwiZW4tVVNcIjogZW5VcyxcbiAgICBcImVzLUVTXCI6IGVzRXMsXG4gICAgXCJmaS1GSVwiOiBmaUZpLFxuICAgIFwiZnItQ0FcIjogZnJDYSxcbiAgICBcImZyLUZSXCI6IGZyRnIsXG4gICAgXCJoZS1JTFwiOiBoZUlsLFxuICAgIFwiaHUtSFVcIjogaHVIdSxcbiAgICBcIml0LUlUXCI6IGl0SXQsXG4gICAgXCJqYS1KUFwiOiBqYUpwLFxuICAgIFwia28tS1JcIjoga29LcixcbiAgICBcIm1rLU1LXCI6IG1rTWssXG4gICAgXCJubC1OTFwiOiBubE5sLFxuICAgIFwicGwtUExcIjogcGxQbCxcbiAgICBcInB0LUJSXCI6IHB0QnIsXG4gICAgXCJydS1SVVwiOiBydVJ1LFxuICAgIFwic3YtU0VcIjogc3ZTZSxcbiAgICBcInpoLUNOXCI6IHpoQ25cbiAgfTtcblxuICB2YXIgZGVmYXVsdExvY2FsZSA9IGxvY2FsZShlblVzKTtcbiAgdmFyIGZvcm1hdCA9IGRlZmF1bHRMb2NhbGUuZm9ybWF0O1xuICB2YXIgZm9ybWF0UHJlZml4ID0gZGVmYXVsdExvY2FsZS5mb3JtYXRQcmVmaXg7XG5cbiAgZnVuY3Rpb24gbG9jYWxlRm9ybWF0KGRlZmluaXRpb24pIHtcbiAgICBpZiAodHlwZW9mIGRlZmluaXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICghbG9jYWxlRGVmaW5pdGlvbnMuaGFzT3duUHJvcGVydHkoZGVmaW5pdGlvbikpIHJldHVybiBudWxsO1xuICAgICAgZGVmaW5pdGlvbiA9IGxvY2FsZURlZmluaXRpb25zW2RlZmluaXRpb25dO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlKGRlZmluaXRpb24pO1xuICB9O1xuXG4gIHZhciB2ZXJzaW9uID0gXCIwLjMuNlwiO1xuXG4gIGV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG4gIGV4cG9ydHMuZm9ybWF0ID0gZm9ybWF0O1xuICBleHBvcnRzLmZvcm1hdFByZWZpeCA9IGZvcm1hdFByZWZpeDtcbiAgZXhwb3J0cy5sb2NhbGVGb3JtYXQgPSBsb2NhbGVGb3JtYXQ7XG4gIGV4cG9ydHMuZm9ybWF0U3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyO1xuICBleHBvcnRzLnByZWNpc2lvbkZpeGVkID0gcHJlY2lzaW9uRml4ZWQ7XG4gIGV4cG9ydHMucHJlY2lzaW9uUHJlZml4ID0gcHJlY2lzaW9uUHJlZml4O1xuICBleHBvcnRzLnByZWNpc2lvblJvdW5kID0gcHJlY2lzaW9uUm91bmQ7XG5cbn0pKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ2QzLXRpbWUnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2QzLXRpbWUtZm9ybWF0JywgWydleHBvcnRzJywgJ2QzLXRpbWUnXSwgZmFjdG9yeSkgOlxuICBmYWN0b3J5KChnbG9iYWwuZDNfdGltZV9mb3JtYXQgPSB7fSksZ2xvYmFsLmQzX3RpbWUpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cyxkM1RpbWUpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciB6aENuID0ge1xuICAgIGRhdGVUaW1lOiBcIiVhICViICVlICVYICVZXCIsXG4gICAgZGF0ZTogXCIlWS8lLW0vJS1kXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIuS4iuWNiFwiLCBcIuS4i+WNiFwiXSxcbiAgICBkYXlzOiBbXCLmmJ/mnJ/ml6VcIiwgXCLmmJ/mnJ/kuIBcIiwgXCLmmJ/mnJ/kuoxcIiwgXCLmmJ/mnJ/kuIlcIiwgXCLmmJ/mnJ/lm5tcIiwgXCLmmJ/mnJ/kupRcIiwgXCLmmJ/mnJ/lha1cIl0sXG4gICAgc2hvcnREYXlzOiBbXCLmmJ/mnJ/ml6VcIiwgXCLmmJ/mnJ/kuIBcIiwgXCLmmJ/mnJ/kuoxcIiwgXCLmmJ/mnJ/kuIlcIiwgXCLmmJ/mnJ/lm5tcIiwgXCLmmJ/mnJ/kupRcIiwgXCLmmJ/mnJ/lha1cIl0sXG4gICAgbW9udGhzOiBbXCLkuIDmnIhcIiwgXCLkuozmnIhcIiwgXCLkuInmnIhcIiwgXCLlm5vmnIhcIiwgXCLkupTmnIhcIiwgXCLlha3mnIhcIiwgXCLkuIPmnIhcIiwgXCLlhavmnIhcIiwgXCLkuZ3mnIhcIiwgXCLljYHmnIhcIiwgXCLljYHkuIDmnIhcIiwgXCLljYHkuozmnIhcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIuS4gOaciFwiLCBcIuS6jOaciFwiLCBcIuS4ieaciFwiLCBcIuWbm+aciFwiLCBcIuS6lOaciFwiLCBcIuWFreaciFwiLCBcIuS4g+aciFwiLCBcIuWFq+aciFwiLCBcIuS5neaciFwiLCBcIuWNgeaciFwiLCBcIuWNgeS4gOaciFwiLCBcIuWNgeS6jOaciFwiXVxuICB9O1xuXG4gIHZhciBzdlNlID0ge1xuICAgIGRhdGVUaW1lOiBcIiVBIGRlbiAlZCAlQiAlWSAlWFwiLFxuICAgIGRhdGU6IFwiJVktJW0tJWRcIixcbiAgICB0aW1lOiBcIiVIOiVNOiVTXCIsXG4gICAgcGVyaW9kczogW1wiZm1cIiwgXCJlbVwiXSxcbiAgICBkYXlzOiBbXCJTw7ZuZGFnXCIsIFwiTcOlbmRhZ1wiLCBcIlRpc2RhZ1wiLCBcIk9uc2RhZ1wiLCBcIlRvcnNkYWdcIiwgXCJGcmVkYWdcIiwgXCJMw7ZyZGFnXCJdLFxuICAgIHNob3J0RGF5czogW1wiU8O2blwiLCBcIk3DpW5cIiwgXCJUaXNcIiwgXCJPbnNcIiwgXCJUb3JcIiwgXCJGcmVcIiwgXCJMw7ZyXCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyaVwiLCBcIkZlYnJ1YXJpXCIsIFwiTWFyc1wiLCBcIkFwcmlsXCIsIFwiTWFqXCIsIFwiSnVuaVwiLCBcIkp1bGlcIiwgXCJBdWd1c3RpXCIsIFwiU2VwdGVtYmVyXCIsIFwiT2t0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1halwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9rdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxuICB9O1xuXG4gIHZhciBydVJ1ID0ge1xuICAgIGRhdGVUaW1lOiBcIiVBLCAlZSAlQiAlWSDQsy4gJVhcIixcbiAgICBkYXRlOiBcIiVkLiVtLiVZXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIkFNXCIsIFwiUE1cIl0sXG4gICAgZGF5czogW1wi0LLQvtGB0LrRgNC10YHQtdC90YzQtVwiLCBcItC/0L7QvdC10LTQtdC70YzQvdC40LpcIiwgXCLQstGC0L7RgNC90LjQulwiLCBcItGB0YDQtdC00LBcIiwgXCLRh9C10YLQstC10YDQs1wiLCBcItC/0Y/RgtC90LjRhtCwXCIsIFwi0YHRg9Cx0LHQvtGC0LBcIl0sXG4gICAgc2hvcnREYXlzOiBbXCLQstGBXCIsIFwi0L/QvVwiLCBcItCy0YJcIiwgXCLRgdGAXCIsIFwi0YfRglwiLCBcItC/0YJcIiwgXCLRgdCxXCJdLFxuICAgIG1vbnRoczogW1wi0Y/QvdCy0LDRgNGPXCIsIFwi0YTQtdCy0YDQsNC70Y9cIiwgXCLQvNCw0YDRgtCwXCIsIFwi0LDQv9GA0LXQu9GPXCIsIFwi0LzQsNGPXCIsIFwi0LjRjtC90Y9cIiwgXCLQuNGO0LvRj1wiLCBcItCw0LLQs9GD0YHRgtCwXCIsIFwi0YHQtdC90YLRj9Cx0YDRj1wiLCBcItC+0LrRgtGP0LHRgNGPXCIsIFwi0L3QvtGP0LHRgNGPXCIsIFwi0LTQtdC60LDQsdGA0Y9cIl0sXG4gICAgc2hvcnRNb250aHM6IFtcItGP0L3QslwiLCBcItGE0LXQslwiLCBcItC80LDRgFwiLCBcItCw0L/RgFwiLCBcItC80LDQuVwiLCBcItC40Y7QvVwiLCBcItC40Y7Qu1wiLCBcItCw0LLQs1wiLCBcItGB0LXQvVwiLCBcItC+0LrRglwiLCBcItC90L7Rj1wiLCBcItC00LXQulwiXVxuICB9O1xuXG4gIHZhciBwdEJyID0ge1xuICAgIGRhdGVUaW1lOiBcIiVBLCAlZSBkZSAlQiBkZSAlWS4gJVhcIixcbiAgICBkYXRlOiBcIiVkLyVtLyVZXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIkFNXCIsIFwiUE1cIl0sXG4gICAgZGF5czogW1wiRG9taW5nb1wiLCBcIlNlZ3VuZGFcIiwgXCJUZXLDp2FcIiwgXCJRdWFydGFcIiwgXCJRdWludGFcIiwgXCJTZXh0YVwiLCBcIlPDoWJhZG9cIl0sXG4gICAgc2hvcnREYXlzOiBbXCJEb21cIiwgXCJTZWdcIiwgXCJUZXJcIiwgXCJRdWFcIiwgXCJRdWlcIiwgXCJTZXhcIiwgXCJTw6FiXCJdLFxuICAgIG1vbnRoczogW1wiSmFuZWlyb1wiLCBcIkZldmVyZWlyb1wiLCBcIk1hcsOnb1wiLCBcIkFicmlsXCIsIFwiTWFpb1wiLCBcIkp1bmhvXCIsIFwiSnVsaG9cIiwgXCJBZ29zdG9cIiwgXCJTZXRlbWJyb1wiLCBcIk91dHVicm9cIiwgXCJOb3ZlbWJyb1wiLCBcIkRlemVtYnJvXCJdLFxuICAgIHNob3J0TW9udGhzOiBbXCJKYW5cIiwgXCJGZXZcIiwgXCJNYXJcIiwgXCJBYnJcIiwgXCJNYWlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBZ29cIiwgXCJTZXRcIiwgXCJPdXRcIiwgXCJOb3ZcIiwgXCJEZXpcIl1cbiAgfTtcblxuICB2YXIgcGxQbCA9IHtcbiAgICBkYXRlVGltZTogXCIlQSwgJWUgJUIgJVksICVYXCIsXG4gICAgZGF0ZTogXCIlZC8lbS8lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLCAvLyB1bnVzZWRcbiAgICBkYXlzOiBbXCJOaWVkemllbGFcIiwgXCJQb25pZWR6aWHFgmVrXCIsIFwiV3RvcmVrXCIsIFwixZpyb2RhXCIsIFwiQ3p3YXJ0ZWtcIiwgXCJQacSFdGVrXCIsIFwiU29ib3RhXCJdLFxuICAgIHNob3J0RGF5czogW1wiTmllZHouXCIsIFwiUG9uLlwiLCBcIld0LlwiLCBcIsWaci5cIiwgXCJDencuXCIsIFwiUHQuXCIsIFwiU29iLlwiXSxcbiAgICBtb250aHM6IFtcIlN0eWN6ZcWEXCIsIFwiTHV0eVwiLCBcIk1hcnplY1wiLCBcIkt3aWVjaWXFhFwiLCBcIk1halwiLCBcIkN6ZXJ3aWVjXCIsIFwiTGlwaWVjXCIsIFwiU2llcnBpZcWEXCIsIFwiV3J6ZXNpZcWEXCIsIFwiUGHFumR6aWVybmlrXCIsIFwiTGlzdG9wYWRcIiwgXCJHcnVkemllxYRcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIlN0eWN6LlwiLCBcIkx1dHlcIiwgXCJNYXJ6LlwiLCBcIkt3aWUuXCIsIFwiTWFqXCIsIFwiQ3plcncuXCIsIFwiTGlwYy5cIiwgXCJTaWVycC5cIiwgXCJXcnouXCIsIFwiUGHFumR6LlwiLCBcIkxpc3RvcC5cIiwgXCJHcnVkei5cIl0vKiBJbiBQb2xpc2ggbGFuZ3VhZ2UgYWJicmF2aWF0ZWQgbW9udGhzIGFyZSBub3QgY29tbW9ubHkgdXNlZCBzbyB0aGVyZSBpcyBhIGRpc3B1dGUgYWJvdXQgdGhlIHByb3BlciBhYmJyYXZpYXRpb25zLiAqL1xuICB9O1xuXG4gIHZhciBubE5sID0ge1xuICAgIGRhdGVUaW1lOiBcIiVhICVlICVCICVZICVUXCIsXG4gICAgZGF0ZTogXCIlZC0lbS0lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLCAvLyB1bnVzZWRcbiAgICBkYXlzOiBbXCJ6b25kYWdcIiwgXCJtYWFuZGFnXCIsIFwiZGluc2RhZ1wiLCBcIndvZW5zZGFnXCIsIFwiZG9uZGVyZGFnXCIsIFwidnJpamRhZ1wiLCBcInphdGVyZGFnXCJdLFxuICAgIHNob3J0RGF5czogW1wiem9cIiwgXCJtYVwiLCBcImRpXCIsIFwid29cIiwgXCJkb1wiLCBcInZyXCIsIFwiemFcIl0sXG4gICAgbW9udGhzOiBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdLFxuICAgIHNob3J0TW9udGhzOiBbXCJqYW5cIiwgXCJmZWJcIiwgXCJtcnRcIiwgXCJhcHJcIiwgXCJtZWlcIiwgXCJqdW5cIiwgXCJqdWxcIiwgXCJhdWdcIiwgXCJzZXBcIiwgXCJva3RcIiwgXCJub3ZcIiwgXCJkZWNcIl1cbiAgfTtcblxuICB2YXIgbWtNayA9IHtcbiAgICBkYXRlVGltZTogXCIlQSwgJWUgJUIgJVkg0LMuICVYXCIsXG4gICAgZGF0ZTogXCIlZC4lbS4lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIGRheXM6IFtcItC90LXQtNC10LvQsFwiLCBcItC/0L7QvdC10LTQtdC70L3QuNC6XCIsIFwi0LLRgtC+0YDQvdC40LpcIiwgXCLRgdGA0LXQtNCwXCIsIFwi0YfQtdGC0LLRgNGC0L7QulwiLCBcItC/0LXRgtC+0LpcIiwgXCLRgdCw0LHQvtGC0LBcIl0sXG4gICAgc2hvcnREYXlzOiBbXCLQvdC10LRcIiwgXCLQv9C+0L1cIiwgXCLQstGC0L5cIiwgXCLRgdGA0LVcIiwgXCLRh9C10YJcIiwgXCLQv9C10YJcIiwgXCLRgdCw0LFcIl0sXG4gICAgbW9udGhzOiBbXCLRmNCw0L3Rg9Cw0YDQuFwiLCBcItGE0LXQstGA0YPQsNGA0LhcIiwgXCLQvNCw0YDRglwiLCBcItCw0L/RgNC40LtcIiwgXCLQvNCw0ZhcIiwgXCLRmNGD0L3QuFwiLCBcItGY0YPQu9C4XCIsIFwi0LDQstCz0YPRgdGCXCIsIFwi0YHQtdC/0YLQtdC80LLRgNC4XCIsIFwi0L7QutGC0L7QvNCy0YDQuFwiLCBcItC90L7QtdC80LLRgNC4XCIsIFwi0LTQtdC60LXQvNCy0YDQuFwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wi0ZjQsNC9XCIsIFwi0YTQtdCyXCIsIFwi0LzQsNGAXCIsIFwi0LDQv9GAXCIsIFwi0LzQsNGYXCIsIFwi0ZjRg9C9XCIsIFwi0ZjRg9C7XCIsIFwi0LDQstCzXCIsIFwi0YHQtdC/XCIsIFwi0L7QutGCXCIsIFwi0L3QvtC1XCIsIFwi0LTQtdC6XCJdXG4gIH07XG5cbiAgdmFyIGtvS3IgPSB7XG4gICAgZGF0ZVRpbWU6IFwiJVkvJW0vJWQgJWEgJVhcIixcbiAgICBkYXRlOiBcIiVZLyVtLyVkXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIuyYpOyghFwiLCBcIuyYpO2bhFwiXSxcbiAgICBkYXlzOiBbXCLsnbzsmpTsnbxcIiwgXCLsm5TsmpTsnbxcIiwgXCLtmZTsmpTsnbxcIiwgXCLsiJjsmpTsnbxcIiwgXCLrqqnsmpTsnbxcIiwgXCLquIjsmpTsnbxcIiwgXCLthqDsmpTsnbxcIl0sXG4gICAgc2hvcnREYXlzOiBbXCLsnbxcIiwgXCLsm5RcIiwgXCLtmZRcIiwgXCLsiJhcIiwgXCLrqqlcIiwgXCLquIhcIiwgXCLthqBcIl0sXG4gICAgbW9udGhzOiBbXCIx7JuUXCIsIFwiMuyblFwiLCBcIjPsm5RcIiwgXCI07JuUXCIsIFwiNeyblFwiLCBcIjbsm5RcIiwgXCI37JuUXCIsIFwiOOyblFwiLCBcIjnsm5RcIiwgXCIxMOyblFwiLCBcIjEx7JuUXCIsIFwiMTLsm5RcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIjHsm5RcIiwgXCIy7JuUXCIsIFwiM+yblFwiLCBcIjTsm5RcIiwgXCI17JuUXCIsIFwiNuyblFwiLCBcIjfsm5RcIiwgXCI47JuUXCIsIFwiOeyblFwiLCBcIjEw7JuUXCIsIFwiMTHsm5RcIiwgXCIxMuyblFwiXVxuICB9O1xuXG4gIHZhciBqYUpwID0ge1xuICAgIGRhdGVUaW1lOiBcIiVZICViICVlICVhICVYXCIsXG4gICAgZGF0ZTogXCIlWS8lbS8lZFwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIGRheXM6IFtcIuaXpeabnOaXpVwiLCBcIuaciOabnOaXpVwiLCBcIueBq+abnOaXpVwiLCBcIuawtOabnOaXpVwiLCBcIuacqOabnOaXpVwiLCBcIumHkeabnOaXpVwiLCBcIuWcn+abnOaXpVwiXSxcbiAgICBzaG9ydERheXM6IFtcIuaXpVwiLCBcIuaciFwiLCBcIueBq1wiLCBcIuawtFwiLCBcIuacqFwiLCBcIumHkVwiLCBcIuWcn1wiXSxcbiAgICBtb250aHM6IFtcIuedpuaciFwiLCBcIuWmguaciFwiLCBcIuW8peeUn1wiLCBcIuWNr+aciFwiLCBcIueakOaciFwiLCBcIuawtOeEoeaciFwiLCBcIuaWh+aciFwiLCBcIuiRieaciFwiLCBcIumVt+aciFwiLCBcIuelnueEoeaciFwiLCBcIumcnOaciFwiLCBcIuW4q+i1sFwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wiMeaciFwiLCBcIjLmnIhcIiwgXCIz5pyIXCIsIFwiNOaciFwiLCBcIjXmnIhcIiwgXCI25pyIXCIsIFwiN+aciFwiLCBcIjjmnIhcIiwgXCI55pyIXCIsIFwiMTDmnIhcIiwgXCIxMeaciFwiLCBcIjEy5pyIXCJdXG4gIH07XG5cbiAgdmFyIGl0SXQgPSB7XG4gICAgZGF0ZVRpbWU6IFwiJUEgJWUgJUIgJVksICVYXCIsXG4gICAgZGF0ZTogXCIlZC8lbS8lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLCAvLyB1bnVzZWRcbiAgICBkYXlzOiBbXCJEb21lbmljYVwiLCBcIkx1bmVkw6xcIiwgXCJNYXJ0ZWTDrFwiLCBcIk1lcmNvbGVkw6xcIiwgXCJHaW92ZWTDrFwiLCBcIlZlbmVyZMOsXCIsIFwiU2FiYXRvXCJdLFxuICAgIHNob3J0RGF5czogW1wiRG9tXCIsIFwiTHVuXCIsIFwiTWFyXCIsIFwiTWVyXCIsIFwiR2lvXCIsIFwiVmVuXCIsIFwiU2FiXCJdLFxuICAgIG1vbnRoczogW1wiR2VubmFpb1wiLCBcIkZlYmJyYWlvXCIsIFwiTWFyem9cIiwgXCJBcHJpbGVcIiwgXCJNYWdnaW9cIiwgXCJHaXVnbm9cIiwgXCJMdWdsaW9cIiwgXCJBZ29zdG9cIiwgXCJTZXR0ZW1icmVcIiwgXCJPdHRvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEaWNlbWJyZVwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wiR2VuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWFnXCIsIFwiR2l1XCIsIFwiTHVnXCIsIFwiQWdvXCIsIFwiU2V0XCIsIFwiT3R0XCIsIFwiTm92XCIsIFwiRGljXCJdXG4gIH07XG5cbiAgdmFyIGh1SHUgPSB7XG4gICAgZGF0ZVRpbWU6IFwiJVkuICVCICUtZS4sICVBICVYXCIsXG4gICAgZGF0ZTogXCIlWS4gJW0uICVkLlwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJkZS5cIiwgXCJkdS5cIl0sIC8vIHVudXNlZFxuICAgIGRheXM6IFtcInZhc8Ohcm5hcFwiLCBcImjDqXRmxZFcIiwgXCJrZWRkXCIsIFwic3plcmRhXCIsIFwiY3PDvHTDtnJ0w7ZrXCIsIFwicMOpbnRla1wiLCBcInN6b21iYXRcIl0sXG4gICAgc2hvcnREYXlzOiBbXCJWXCIsIFwiSFwiLCBcIktcIiwgXCJTemVcIiwgXCJDc1wiLCBcIlBcIiwgXCJTem9cIl0sXG4gICAgbW9udGhzOiBbXCJqYW51w6FyXCIsIFwiZmVicnXDoXJcIiwgXCJtw6FyY2l1c1wiLCBcIsOhcHJpbGlzXCIsIFwibcOhanVzXCIsIFwiasO6bml1c1wiLCBcImrDumxpdXNcIiwgXCJhdWd1c3p0dXNcIiwgXCJzemVwdGVtYmVyXCIsIFwib2t0w7NiZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdLFxuICAgIHNob3J0TW9udGhzOiBbXCJqYW4uXCIsIFwiZmViLlwiLCBcIm3DoXIuXCIsIFwiw6Fwci5cIiwgXCJtw6FqLlwiLCBcImrDum4uXCIsIFwiasO6bC5cIiwgXCJhdWcuXCIsIFwic3plcHQuXCIsIFwib2t0LlwiLCBcIm5vdi5cIiwgXCJkZWMuXCJdXG4gIH07XG5cbiAgdmFyIGhlSWwgPSB7XG4gICAgZGF0ZVRpbWU6IFwiJUEsICVlINeRJUIgJVkgJVhcIixcbiAgICBkYXRlOiBcIiVkLiVtLiVZXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIkFNXCIsIFwiUE1cIl0sXG4gICAgZGF5czogW1wi16jXkNep15XXn1wiLCBcItep16DXmVwiLCBcItep15zXmdep15lcIiwgXCLXqNeR15nXoteZXCIsIFwi15fXnteZ16nXmVwiLCBcItep15nXqdeZXCIsIFwi16nXkdeqXCJdLFxuICAgIHNob3J0RGF5czogW1wi15DXs1wiLCBcIteR17NcIiwgXCLXktezXCIsIFwi15PXs1wiLCBcIteU17NcIiwgXCLXldezXCIsIFwi16nXs1wiXSxcbiAgICBtb250aHM6IFtcIteZ16DXldeQ16hcIiwgXCLXpNeR16jXldeQ16hcIiwgXCLXnteo16VcIiwgXCLXkNek16jXmdecXCIsIFwi157XkNeZXCIsIFwi15nXldeg15lcIiwgXCLXmdeV15zXmVwiLCBcIteQ15XXkteV16HXmFwiLCBcIteh16TXmNee15HXqFwiLCBcIteQ15XXp9eY15XXkdeoXCIsIFwi16DXldeR157XkdeoXCIsIFwi15PXptee15HXqFwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wi15nXoNeV17NcIiwgXCLXpNeR16jXs1wiLCBcItee16jXpVwiLCBcIteQ16TXqNezXCIsIFwi157XkNeZXCIsIFwi15nXldeg15lcIiwgXCLXmdeV15zXmVwiLCBcIteQ15XXktezXCIsIFwi16HXpNeY17NcIiwgXCLXkNeV16fXs1wiLCBcIteg15XXkdezXCIsIFwi15PXptee17NcIl1cbiAgfTtcblxuICB2YXIgZnJGciA9IHtcbiAgICBkYXRlVGltZTogXCIlQSwgbGUgJWUgJUIgJVksICVYXCIsXG4gICAgZGF0ZTogXCIlZC8lbS8lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLCAvLyB1bnVzZWRcbiAgICBkYXlzOiBbXCJkaW1hbmNoZVwiLCBcImx1bmRpXCIsIFwibWFyZGlcIiwgXCJtZXJjcmVkaVwiLCBcImpldWRpXCIsIFwidmVuZHJlZGlcIiwgXCJzYW1lZGlcIl0sXG4gICAgc2hvcnREYXlzOiBbXCJkaW0uXCIsIFwibHVuLlwiLCBcIm1hci5cIiwgXCJtZXIuXCIsIFwiamV1LlwiLCBcInZlbi5cIiwgXCJzYW0uXCJdLFxuICAgIG1vbnRoczogW1wiamFudmllclwiLCBcImbDqXZyaWVyXCIsIFwibWFyc1wiLCBcImF2cmlsXCIsIFwibWFpXCIsIFwianVpblwiLCBcImp1aWxsZXRcIiwgXCJhb8O7dFwiLCBcInNlcHRlbWJyZVwiLCBcIm9jdG9icmVcIiwgXCJub3ZlbWJyZVwiLCBcImTDqWNlbWJyZVwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wiamFudi5cIiwgXCJmw6l2ci5cIiwgXCJtYXJzXCIsIFwiYXZyLlwiLCBcIm1haVwiLCBcImp1aW5cIiwgXCJqdWlsLlwiLCBcImFvw7t0XCIsIFwic2VwdC5cIiwgXCJvY3QuXCIsIFwibm92LlwiLCBcImTDqWMuXCJdXG4gIH07XG5cbiAgdmFyIGZyQ2EgPSB7XG4gICAgZGF0ZVRpbWU6IFwiJWEgJWUgJWIgJVkgJVhcIixcbiAgICBkYXRlOiBcIiVZLSVtLSVkXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIlwiLCBcIlwiXSxcbiAgICBkYXlzOiBbXCJkaW1hbmNoZVwiLCBcImx1bmRpXCIsIFwibWFyZGlcIiwgXCJtZXJjcmVkaVwiLCBcImpldWRpXCIsIFwidmVuZHJlZGlcIiwgXCJzYW1lZGlcIl0sXG4gICAgc2hvcnREYXlzOiBbXCJkaW1cIiwgXCJsdW5cIiwgXCJtYXJcIiwgXCJtZXJcIiwgXCJqZXVcIiwgXCJ2ZW5cIiwgXCJzYW1cIl0sXG4gICAgbW9udGhzOiBbXCJqYW52aWVyXCIsIFwiZsOpdnJpZXJcIiwgXCJtYXJzXCIsIFwiYXZyaWxcIiwgXCJtYWlcIiwgXCJqdWluXCIsIFwianVpbGxldFwiLCBcImFvw7t0XCIsIFwic2VwdGVtYnJlXCIsIFwib2N0b2JyZVwiLCBcIm5vdmVtYnJlXCIsIFwiZMOpY2VtYnJlXCJdLFxuICAgIHNob3J0TW9udGhzOiBbXCJqYW5cIiwgXCJmw6l2XCIsIFwibWFyXCIsIFwiYXZyXCIsIFwibWFpXCIsIFwianVpXCIsIFwianVsXCIsIFwiYW/Du1wiLCBcInNlcFwiLCBcIm9jdFwiLCBcIm5vdlwiLCBcImTDqWNcIl1cbiAgfTtcblxuICB2YXIgZmlGaSA9IHtcbiAgICBkYXRlVGltZTogXCIlQSwgJS1kLiAlQnRhICVZIGtsbyAlWFwiLFxuICAgIGRhdGU6IFwiJS1kLiUtbS4lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJhLm0uXCIsIFwicC5tLlwiXSxcbiAgICBkYXlzOiBbXCJzdW5udW50YWlcIiwgXCJtYWFuYW50YWlcIiwgXCJ0aWlzdGFpXCIsIFwia2Vza2l2aWlra29cIiwgXCJ0b3JzdGFpXCIsIFwicGVyamFudGFpXCIsIFwibGF1YW50YWlcIl0sXG4gICAgc2hvcnREYXlzOiBbXCJTdVwiLCBcIk1hXCIsIFwiVGlcIiwgXCJLZVwiLCBcIlRvXCIsIFwiUGVcIiwgXCJMYVwiXSxcbiAgICBtb250aHM6IFtcInRhbW1pa3V1XCIsIFwiaGVsbWlrdXVcIiwgXCJtYWFsaXNrdXVcIiwgXCJodWh0aWt1dVwiLCBcInRvdWtva3V1XCIsIFwia2Vzw6RrdXVcIiwgXCJoZWluw6RrdXVcIiwgXCJlbG9rdXVcIiwgXCJzeXlza3V1XCIsIFwibG9rYWt1dVwiLCBcIm1hcnJhc2t1dVwiLCBcImpvdWx1a3V1XCJdLFxuICAgIHNob3J0TW9udGhzOiBbXCJUYW1taVwiLCBcIkhlbG1pXCIsIFwiTWFhbGlzXCIsIFwiSHVodGlcIiwgXCJUb3Vrb1wiLCBcIktlc8OkXCIsIFwiSGVpbsOkXCIsIFwiRWxvXCIsIFwiU3l5c1wiLCBcIkxva2FcIiwgXCJNYXJyYXNcIiwgXCJKb3VsdVwiXVxuICB9O1xuXG4gIHZhciBlc0VzID0ge1xuICAgIGRhdGVUaW1lOiBcIiVBLCAlZSBkZSAlQiBkZSAlWSwgJVhcIixcbiAgICBkYXRlOiBcIiVkLyVtLyVZXCIsXG4gICAgdGltZTogXCIlSDolTTolU1wiLFxuICAgIHBlcmlvZHM6IFtcIkFNXCIsIFwiUE1cIl0sXG4gICAgZGF5czogW1wiZG9taW5nb1wiLCBcImx1bmVzXCIsIFwibWFydGVzXCIsIFwibWnDqXJjb2xlc1wiLCBcImp1ZXZlc1wiLCBcInZpZXJuZXNcIiwgXCJzw6FiYWRvXCJdLFxuICAgIHNob3J0RGF5czogW1wiZG9tXCIsIFwibHVuXCIsIFwibWFyXCIsIFwibWnDqVwiLCBcImp1ZVwiLCBcInZpZVwiLCBcInPDoWJcIl0sXG4gICAgbW9udGhzOiBbXCJlbmVyb1wiLCBcImZlYnJlcm9cIiwgXCJtYXJ6b1wiLCBcImFicmlsXCIsIFwibWF5b1wiLCBcImp1bmlvXCIsIFwianVsaW9cIiwgXCJhZ29zdG9cIiwgXCJzZXB0aWVtYnJlXCIsIFwib2N0dWJyZVwiLCBcIm5vdmllbWJyZVwiLCBcImRpY2llbWJyZVwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wiZW5lXCIsIFwiZmViXCIsIFwibWFyXCIsIFwiYWJyXCIsIFwibWF5XCIsIFwianVuXCIsIFwianVsXCIsIFwiYWdvXCIsIFwic2VwXCIsIFwib2N0XCIsIFwibm92XCIsIFwiZGljXCJdXG4gIH07XG5cbiAgdmFyIGxvY2FsZSQxID0ge1xuICAgIGRhdGVUaW1lOiBcIiVhICViICVlICVYICVZXCIsXG4gICAgZGF0ZTogXCIlbS8lZC8lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgIHNob3J0RGF5czogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxuICB9O1xuXG4gIHZhciBlbkdiID0ge1xuICAgIGRhdGVUaW1lOiBcIiVhICVlICViICVYICVZXCIsXG4gICAgZGF0ZTogXCIlZC8lbS8lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgIHNob3J0RGF5czogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxuICB9O1xuXG4gIHZhciBlbkNhID0ge1xuICAgIGRhdGVUaW1lOiBcIiVhICViICVlICVYICVZXCIsXG4gICAgZGF0ZTogXCIlWS0lbS0lZFwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgIHNob3J0RGF5czogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXVxuICB9O1xuXG4gIHZhciBkZURlID0ge1xuICAgIGRhdGVUaW1lOiBcIiVBLCBkZXIgJWUuICVCICVZLCAlWFwiLFxuICAgIGRhdGU6IFwiJWQuJW0uJVlcIixcbiAgICB0aW1lOiBcIiVIOiVNOiVTXCIsXG4gICAgcGVyaW9kczogW1wiQU1cIiwgXCJQTVwiXSwgLy8gdW51c2VkXG4gICAgZGF5czogW1wiU29ubnRhZ1wiLCBcIk1vbnRhZ1wiLCBcIkRpZW5zdGFnXCIsIFwiTWl0dHdvY2hcIiwgXCJEb25uZXJzdGFnXCIsIFwiRnJlaXRhZ1wiLCBcIlNhbXN0YWdcIl0sXG4gICAgc2hvcnREYXlzOiBbXCJTb1wiLCBcIk1vXCIsIFwiRGlcIiwgXCJNaVwiLCBcIkRvXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgICBtb250aHM6IFtcIkphbnVhclwiLCBcIkZlYnJ1YXJcIiwgXCJNw6RyelwiLCBcIkFwcmlsXCIsIFwiTWFpXCIsIFwiSnVuaVwiLCBcIkp1bGlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPa3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZXplbWJlclwiXSxcbiAgICBzaG9ydE1vbnRoczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTXJ6XCIsIFwiQXByXCIsIFwiTWFpXCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2t0XCIsIFwiTm92XCIsIFwiRGV6XCJdXG4gIH07XG5cbiAgdmFyIGRlQ2ggPSB7XG4gICAgZGF0ZVRpbWU6IFwiJUEsIGRlciAlZS4gJUIgJVksICVYXCIsXG4gICAgZGF0ZTogXCIlZC4lbS4lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLCAvLyB1bnVzZWRcbiAgICBkYXlzOiBbXCJTb25udGFnXCIsIFwiTW9udGFnXCIsIFwiRGllbnN0YWdcIiwgXCJNaXR0d29jaFwiLCBcIkRvbm5lcnN0YWdcIiwgXCJGcmVpdGFnXCIsIFwiU2Ftc3RhZ1wiXSxcbiAgICBzaG9ydERheXM6IFtcIlNvXCIsIFwiTW9cIiwgXCJEaVwiLCBcIk1pXCIsIFwiRG9cIiwgXCJGclwiLCBcIlNhXCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyXCIsIFwiRmVicnVhclwiLCBcIk3DpHJ6XCIsIFwiQXByaWxcIiwgXCJNYWlcIiwgXCJKdW5pXCIsIFwiSnVsaVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9rdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlemVtYmVyXCJdLFxuICAgIHNob3J0TW9udGhzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNcnpcIiwgXCJBcHJcIiwgXCJNYWlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPa3RcIiwgXCJOb3ZcIiwgXCJEZXpcIl1cbiAgfTtcblxuICB2YXIgY2FFcyA9IHtcbiAgICBkYXRlVGltZTogXCIlQSwgJWUgZGUgJUIgZGUgJVksICVYXCIsXG4gICAgZGF0ZTogXCIlZC8lbS8lWVwiLFxuICAgIHRpbWU6IFwiJUg6JU06JVNcIixcbiAgICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIGRheXM6IFtcImRpdW1lbmdlXCIsIFwiZGlsbHVuc1wiLCBcImRpbWFydHNcIiwgXCJkaW1lY3Jlc1wiLCBcImRpam91c1wiLCBcImRpdmVuZHJlc1wiLCBcImRpc3NhYnRlXCJdLFxuICAgIHNob3J0RGF5czogW1wiZGcuXCIsIFwiZGwuXCIsIFwiZHQuXCIsIFwiZGMuXCIsIFwiZGouXCIsIFwiZHYuXCIsIFwiZHMuXCJdLFxuICAgIG1vbnRoczogW1wiZ2VuZXJcIiwgXCJmZWJyZXJcIiwgXCJtYXLDp1wiLCBcImFicmlsXCIsIFwibWFpZ1wiLCBcImp1bnlcIiwgXCJqdWxpb2xcIiwgXCJhZ29zdFwiLCBcInNldGVtYnJlXCIsIFwib2N0dWJyZVwiLCBcIm5vdmVtYnJlXCIsIFwiZGVzZW1icmVcIl0sXG4gICAgc2hvcnRNb250aHM6IFtcImdlbi5cIiwgXCJmZWJyLlwiLCBcIm1hcsOnXCIsIFwiYWJyLlwiLCBcIm1haWdcIiwgXCJqdW55XCIsIFwianVsLlwiLCBcImFnLlwiLCBcInNldC5cIiwgXCJvY3QuXCIsIFwibm92LlwiLCBcImRlcy5cIl1cbiAgfTtcblxuICBmdW5jdGlvbiBsb2NhbERhdGUoZCkge1xuICAgIGlmICgwIDw9IGQueSAmJiBkLnkgPCAxMDApIHtcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoLTEsIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xuICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkLnkpO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXRjRGF0ZShkKSB7XG4gICAgaWYgKDAgPD0gZC55ICYmIGQueSA8IDEwMCkge1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygtMSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCkpO1xuICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcihkLnkpO1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld1llYXIoeSkge1xuICAgIHJldHVybiB7eTogeSwgbTogMCwgZDogMSwgSDogMCwgTTogMCwgUzogMCwgTDogMH07XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhbGUobG9jYWxlKSB7XG4gICAgdmFyIGxvY2FsZV9kYXRlVGltZSA9IGxvY2FsZS5kYXRlVGltZSxcbiAgICAgICAgbG9jYWxlX2RhdGUgPSBsb2NhbGUuZGF0ZSxcbiAgICAgICAgbG9jYWxlX3RpbWUgPSBsb2NhbGUudGltZSxcbiAgICAgICAgbG9jYWxlX3BlcmlvZHMgPSBsb2NhbGUucGVyaW9kcyxcbiAgICAgICAgbG9jYWxlX3dlZWtkYXlzID0gbG9jYWxlLmRheXMsXG4gICAgICAgIGxvY2FsZV9zaG9ydFdlZWtkYXlzID0gbG9jYWxlLnNob3J0RGF5cyxcbiAgICAgICAgbG9jYWxlX21vbnRocyA9IGxvY2FsZS5tb250aHMsXG4gICAgICAgIGxvY2FsZV9zaG9ydE1vbnRocyA9IGxvY2FsZS5zaG9ydE1vbnRocztcblxuICAgIHZhciBwZXJpb2RMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3BlcmlvZHMpLFxuICAgICAgICB3ZWVrZGF5UmUgPSBmb3JtYXRSZShsb2NhbGVfd2Vla2RheXMpLFxuICAgICAgICB3ZWVrZGF5TG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV93ZWVrZGF5cyksXG4gICAgICAgIHNob3J0V2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgICBzaG9ydFdlZWtkYXlMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgICBtb250aFJlID0gZm9ybWF0UmUobG9jYWxlX21vbnRocyksXG4gICAgICAgIG1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9tb250aHMpLFxuICAgICAgICBzaG9ydE1vbnRoUmUgPSBmb3JtYXRSZShsb2NhbGVfc2hvcnRNb250aHMpLFxuICAgICAgICBzaG9ydE1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9zaG9ydE1vbnRocyk7XG5cbiAgICB2YXIgZm9ybWF0cyA9IHtcbiAgICAgIFwiYVwiOiBmb3JtYXRTaG9ydFdlZWtkYXksXG4gICAgICBcIkFcIjogZm9ybWF0V2Vla2RheSxcbiAgICAgIFwiYlwiOiBmb3JtYXRTaG9ydE1vbnRoLFxuICAgICAgXCJCXCI6IGZvcm1hdE1vbnRoLFxuICAgICAgXCJjXCI6IG51bGwsXG4gICAgICBcImRcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICAgIFwiZVwiOiBmb3JtYXREYXlPZk1vbnRoLFxuICAgICAgXCJIXCI6IGZvcm1hdEhvdXIyNCxcbiAgICAgIFwiSVwiOiBmb3JtYXRIb3VyMTIsXG4gICAgICBcImpcIjogZm9ybWF0RGF5T2ZZZWFyLFxuICAgICAgXCJMXCI6IGZvcm1hdE1pbGxpc2Vjb25kcyxcbiAgICAgIFwibVwiOiBmb3JtYXRNb250aE51bWJlcixcbiAgICAgIFwiTVwiOiBmb3JtYXRNaW51dGVzLFxuICAgICAgXCJwXCI6IGZvcm1hdFBlcmlvZCxcbiAgICAgIFwiU1wiOiBmb3JtYXRTZWNvbmRzLFxuICAgICAgXCJVXCI6IGZvcm1hdFdlZWtOdW1iZXJTdW5kYXksXG4gICAgICBcIndcIjogZm9ybWF0V2Vla2RheU51bWJlcixcbiAgICAgIFwiV1wiOiBmb3JtYXRXZWVrTnVtYmVyTW9uZGF5LFxuICAgICAgXCJ4XCI6IG51bGwsXG4gICAgICBcIlhcIjogbnVsbCxcbiAgICAgIFwieVwiOiBmb3JtYXRZZWFyLFxuICAgICAgXCJZXCI6IGZvcm1hdEZ1bGxZZWFyLFxuICAgICAgXCJaXCI6IGZvcm1hdFpvbmUsXG4gICAgICBcIiVcIjogZm9ybWF0TGl0ZXJhbFBlcmNlbnRcbiAgICB9O1xuXG4gICAgdmFyIHV0Y0Zvcm1hdHMgPSB7XG4gICAgICBcImFcIjogZm9ybWF0VVRDU2hvcnRXZWVrZGF5LFxuICAgICAgXCJBXCI6IGZvcm1hdFVUQ1dlZWtkYXksXG4gICAgICBcImJcIjogZm9ybWF0VVRDU2hvcnRNb250aCxcbiAgICAgIFwiQlwiOiBmb3JtYXRVVENNb250aCxcbiAgICAgIFwiY1wiOiBudWxsLFxuICAgICAgXCJkXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgICBcImVcIjogZm9ybWF0VVRDRGF5T2ZNb250aCxcbiAgICAgIFwiSFwiOiBmb3JtYXRVVENIb3VyMjQsXG4gICAgICBcIklcIjogZm9ybWF0VVRDSG91cjEyLFxuICAgICAgXCJqXCI6IGZvcm1hdFVUQ0RheU9mWWVhcixcbiAgICAgIFwiTFwiOiBmb3JtYXRVVENNaWxsaXNlY29uZHMsXG4gICAgICBcIm1cIjogZm9ybWF0VVRDTW9udGhOdW1iZXIsXG4gICAgICBcIk1cIjogZm9ybWF0VVRDTWludXRlcyxcbiAgICAgIFwicFwiOiBmb3JtYXRVVENQZXJpb2QsXG4gICAgICBcIlNcIjogZm9ybWF0VVRDU2Vjb25kcyxcbiAgICAgIFwiVVwiOiBmb3JtYXRVVENXZWVrTnVtYmVyU3VuZGF5LFxuICAgICAgXCJ3XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXIsXG4gICAgICBcIldcIjogZm9ybWF0VVRDV2Vla051bWJlck1vbmRheSxcbiAgICAgIFwieFwiOiBudWxsLFxuICAgICAgXCJYXCI6IG51bGwsXG4gICAgICBcInlcIjogZm9ybWF0VVRDWWVhcixcbiAgICAgIFwiWVwiOiBmb3JtYXRVVENGdWxsWWVhcixcbiAgICAgIFwiWlwiOiBmb3JtYXRVVENab25lLFxuICAgICAgXCIlXCI6IGZvcm1hdExpdGVyYWxQZXJjZW50XG4gICAgfTtcblxuICAgIHZhciBwYXJzZXMgPSB7XG4gICAgICBcImFcIjogcGFyc2VTaG9ydFdlZWtkYXksXG4gICAgICBcIkFcIjogcGFyc2VXZWVrZGF5LFxuICAgICAgXCJiXCI6IHBhcnNlU2hvcnRNb250aCxcbiAgICAgIFwiQlwiOiBwYXJzZU1vbnRoLFxuICAgICAgXCJjXCI6IHBhcnNlTG9jYWxlRGF0ZVRpbWUsXG4gICAgICBcImRcIjogcGFyc2VEYXlPZk1vbnRoLFxuICAgICAgXCJlXCI6IHBhcnNlRGF5T2ZNb250aCxcbiAgICAgIFwiSFwiOiBwYXJzZUhvdXIyNCxcbiAgICAgIFwiSVwiOiBwYXJzZUhvdXIyNCxcbiAgICAgIFwialwiOiBwYXJzZURheU9mWWVhcixcbiAgICAgIFwiTFwiOiBwYXJzZU1pbGxpc2Vjb25kcyxcbiAgICAgIFwibVwiOiBwYXJzZU1vbnRoTnVtYmVyLFxuICAgICAgXCJNXCI6IHBhcnNlTWludXRlcyxcbiAgICAgIFwicFwiOiBwYXJzZVBlcmlvZCxcbiAgICAgIFwiU1wiOiBwYXJzZVNlY29uZHMsXG4gICAgICBcIlVcIjogcGFyc2VXZWVrTnVtYmVyU3VuZGF5LFxuICAgICAgXCJ3XCI6IHBhcnNlV2Vla2RheU51bWJlcixcbiAgICAgIFwiV1wiOiBwYXJzZVdlZWtOdW1iZXJNb25kYXksXG4gICAgICBcInhcIjogcGFyc2VMb2NhbGVEYXRlLFxuICAgICAgXCJYXCI6IHBhcnNlTG9jYWxlVGltZSxcbiAgICAgIFwieVwiOiBwYXJzZVllYXIsXG4gICAgICBcIllcIjogcGFyc2VGdWxsWWVhcixcbiAgICAgIFwiWlwiOiBwYXJzZVpvbmUsXG4gICAgICBcIiVcIjogcGFyc2VMaXRlcmFsUGVyY2VudFxuICAgIH07XG5cbiAgICAvLyBUaGVzZSByZWN1cnNpdmUgZGlyZWN0aXZlIGRlZmluaXRpb25zIG11c3QgYmUgZGVmZXJyZWQuXG4gICAgZm9ybWF0cy54ID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlLCBmb3JtYXRzKTtcbiAgICBmb3JtYXRzLlggPSBuZXdGb3JtYXQobG9jYWxlX3RpbWUsIGZvcm1hdHMpO1xuICAgIGZvcm1hdHMuYyA9IG5ld0Zvcm1hdChsb2NhbGVfZGF0ZVRpbWUsIGZvcm1hdHMpO1xuICAgIHV0Y0Zvcm1hdHMueCA9IG5ld0Zvcm1hdChsb2NhbGVfZGF0ZSwgdXRjRm9ybWF0cyk7XG4gICAgdXRjRm9ybWF0cy5YID0gbmV3Rm9ybWF0KGxvY2FsZV90aW1lLCB1dGNGb3JtYXRzKTtcbiAgICB1dGNGb3JtYXRzLmMgPSBuZXdGb3JtYXQobG9jYWxlX2RhdGVUaW1lLCB1dGNGb3JtYXRzKTtcblxuICAgIGZ1bmN0aW9uIG5ld0Zvcm1hdChzcGVjaWZpZXIsIGZvcm1hdHMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBbXSxcbiAgICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgbiA9IHNwZWNpZmllci5sZW5ndGgsXG4gICAgICAgICAgICBjLFxuICAgICAgICAgICAgcGFkLFxuICAgICAgICAgICAgZm9ybWF0O1xuXG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgaWYgKHNwZWNpZmllci5jaGFyQ29kZUF0KGkpID09PSAzNykge1xuICAgICAgICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgICAgICAgIGlmICgocGFkID0gcGFkc1tjID0gc3BlY2lmaWVyLmNoYXJBdCgrK2kpXSkgIT0gbnVsbCkgYyA9IHNwZWNpZmllci5jaGFyQXQoKytpKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXQgPSBmb3JtYXRzW2NdKSBjID0gZm9ybWF0KGRhdGUsIHBhZCA9PSBudWxsID8gKGMgPT09IFwiZVwiID8gXCIgXCIgOiBcIjBcIikgOiBwYWQpO1xuICAgICAgICAgICAgc3RyaW5nLnB1c2goYyk7XG4gICAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5qb2luKFwiXCIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdQYXJzZShzcGVjaWZpZXIsIG5ld0RhdGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgdmFyIGQgPSBuZXdZZWFyKDE5MDApLFxuICAgICAgICAgICAgaSA9IHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nLCAwKTtcbiAgICAgICAgaWYgKGkgIT0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy8gVGhlIGFtLXBtIGZsYWcgaXMgMCBmb3IgQU0sIGFuZCAxIGZvciBQTS5cbiAgICAgICAgaWYgKFwicFwiIGluIGQpIGQuSCA9IGQuSCAlIDEyICsgZC5wICogMTI7XG5cbiAgICAgICAgLy8gSWYgYSB0aW1lIHpvbmUgaXMgc3BlY2lmaWVkLCBhbGwgZmllbGRzIGFyZSBpbnRlcnByZXRlZCBhcyBVVEMgYW5kIHRoZW5cbiAgICAgICAgLy8gb2Zmc2V0IGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIHRpbWUgem9uZS5cbiAgICAgICAgaWYgKFwiWlwiIGluIGQpIHtcbiAgICAgICAgICBpZiAoXCJ3XCIgaW4gZCAmJiAoXCJXXCIgaW4gZCB8fCBcIlVcIiBpbiBkKSkge1xuICAgICAgICAgICAgdmFyIGRheSA9IHV0Y0RhdGUobmV3WWVhcihkLnkpKS5nZXRVVENEYXkoKTtcbiAgICAgICAgICAgIGlmIChcIldcIiBpbiBkKSBkLlUgPSBkLlcsIGQudyA9IChkLncgKyA2KSAlIDcsIC0tZGF5O1xuICAgICAgICAgICAgZC5tID0gMDtcbiAgICAgICAgICAgIGQuZCA9IGQudyArIGQuVSAqIDcgLSAoZGF5ICsgNikgJSA3O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkLkggKz0gZC5aIC8gMTAwIHwgMDtcbiAgICAgICAgICBkLk0gKz0gZC5aICUgMTAwO1xuICAgICAgICAgIHJldHVybiB1dGNEYXRlKGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBhbGwgZmllbGRzIGFyZSBpbiBsb2NhbCB0aW1lLlxuICAgICAgICBpZiAoXCJ3XCIgaW4gZCAmJiAoXCJXXCIgaW4gZCB8fCBcIlVcIiBpbiBkKSkge1xuICAgICAgICAgIHZhciBkYXkgPSBuZXdEYXRlKG5ld1llYXIoZC55KSkuZ2V0RGF5KCk7XG4gICAgICAgICAgaWYgKFwiV1wiIGluIGQpIGQuVSA9IGQuVywgZC53ID0gKGQudyArIDYpICUgNywgLS1kYXk7XG4gICAgICAgICAgZC5tID0gMDtcbiAgICAgICAgICBkLmQgPSBkLncgKyBkLlUgKiA3IC0gKGRheSArIDYpICUgNztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0ZShkKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTcGVjaWZpZXIoZCwgc3BlY2lmaWVyLCBzdHJpbmcsIGopIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICBuID0gc3BlY2lmaWVyLmxlbmd0aCxcbiAgICAgICAgICBtID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBjLFxuICAgICAgICAgIHBhcnNlO1xuXG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgaWYgKGogPj0gbSkgcmV0dXJuIC0xO1xuICAgICAgICBjID0gc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgaWYgKGMgPT09IDM3KSB7XG4gICAgICAgICAgYyA9IHNwZWNpZmllci5jaGFyQXQoaSsrKTtcbiAgICAgICAgICBwYXJzZSA9IHBhcnNlc1tjIGluIHBhZHMgPyBzcGVjaWZpZXIuY2hhckF0KGkrKykgOiBjXTtcbiAgICAgICAgICBpZiAoIXBhcnNlIHx8ICgoaiA9IHBhcnNlKGQsIHN0cmluZywgaikpIDwgMCkpIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChjICE9IHN0cmluZy5jaGFyQ29kZUF0KGorKykpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGo7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTaG9ydFdlZWtkYXkoZCwgc3RyaW5nLCBpKSB7XG4gICAgICB2YXIgbiA9IHNob3J0V2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICAgIHJldHVybiBuID8gKGQudyA9IHNob3J0V2Vla2RheUxvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgICAgdmFyIG4gPSB3ZWVrZGF5UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgICAgcmV0dXJuIG4gPyAoZC53ID0gd2Vla2RheUxvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTaG9ydE1vbnRoKGQsIHN0cmluZywgaSkge1xuICAgICAgdmFyIG4gPSBzaG9ydE1vbnRoUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgICAgcmV0dXJuIG4gPyAoZC5tID0gc2hvcnRNb250aExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNb250aChkLCBzdHJpbmcsIGkpIHtcbiAgICAgIHZhciBuID0gbW9udGhSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgICByZXR1cm4gbiA/IChkLm0gPSBtb250aExvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfZGF0ZVRpbWUsIHN0cmluZywgaSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlKGQsIHN0cmluZywgaSkge1xuICAgICAgcmV0dXJuIHBhcnNlU3BlY2lmaWVyKGQsIGxvY2FsZV9kYXRlLCBzdHJpbmcsIGkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTG9jYWxlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfdGltZSwgc3RyaW5nLCBpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVBlcmlvZChkLCBzdHJpbmcsIGkpIHtcbiAgICAgIHZhciBuID0gcGVyaW9kTG9va3VwW3N0cmluZy5zbGljZShpLCBpICs9IDIpLnRvTG93ZXJDYXNlKCldO1xuICAgICAgcmV0dXJuIG4gPT0gbnVsbCA/IC0xIDogKGQucCA9IG4sIGkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFNob3J0V2Vla2RheShkKSB7XG4gICAgICByZXR1cm4gbG9jYWxlX3Nob3J0V2Vla2RheXNbZC5nZXREYXkoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0V2Vla2RheShkKSB7XG4gICAgICByZXR1cm4gbG9jYWxlX3dlZWtkYXlzW2QuZ2V0RGF5KCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFNob3J0TW9udGgoZCkge1xuICAgICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldE1vbnRoKCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbnRoKGQpIHtcbiAgICAgIHJldHVybiBsb2NhbGVfbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0UGVyaW9kKGQpIHtcbiAgICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0SG91cnMoKSA+PSAxMildO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFVUQ1Nob3J0V2Vla2RheShkKSB7XG4gICAgICByZXR1cm4gbG9jYWxlX3Nob3J0V2Vla2RheXNbZC5nZXRVVENEYXkoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheShkKSB7XG4gICAgICByZXR1cm4gbG9jYWxlX3dlZWtkYXlzW2QuZ2V0VVRDRGF5KCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFVUQ1Nob3J0TW9udGgoZCkge1xuICAgICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldFVUQ01vbnRoKCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoKGQpIHtcbiAgICAgIHJldHVybiBsb2NhbGVfbW9udGhzW2QuZ2V0VVRDTW9udGgoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0VVRDUGVyaW9kKGQpIHtcbiAgICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0VVRDSG91cnMoKSA+PSAxMildO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgICB2YXIgZiA9IG5ld0Zvcm1hdChzcGVjaWZpZXIgKz0gXCJcIiwgZm9ybWF0cyk7XG4gICAgICAgIGYucGFyc2UgPSBuZXdQYXJzZShzcGVjaWZpZXIsIGxvY2FsRGF0ZSk7XG4gICAgICAgIGYudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgICB9LFxuICAgICAgdXRjRm9ybWF0OiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgICAgdmFyIGYgPSBuZXdGb3JtYXQoc3BlY2lmaWVyICs9IFwiXCIsIHV0Y0Zvcm1hdHMpO1xuICAgICAgICBmLnBhcnNlID0gbmV3UGFyc2Uoc3BlY2lmaWVyLCB1dGNEYXRlKTtcbiAgICAgICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBwYWRzID0ge1wiLVwiOiBcIlwiLCBcIl9cIjogXCIgXCIsIFwiMFwiOiBcIjBcIn07XG4gIHZhciBudW1iZXJSZSA9IC9eXFxzKlxcZCsvO1xuICB2YXIgcGVyY2VudFJlID0gL14lLztcbiAgdmFyIHJlcXVvdGVSZSA9IC9bXFxcXFxcXlxcJFxcKlxcK1xcP1xcfFxcW1xcXVxcKFxcKVxcLlxce1xcfV0vZztcbiAgZnVuY3Rpb24gcGFkKHZhbHVlLCBmaWxsLCB3aWR0aCkge1xuICAgIHZhciBzaWduID0gdmFsdWUgPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgICBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsXG4gICAgICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgcmV0dXJuIHNpZ24gKyAobGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpICsgc3RyaW5nIDogc3RyaW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVvdGUocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UocmVxdW90ZVJlLCBcIlxcXFwkJlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFJlKG5hbWVzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyBuYW1lcy5tYXAocmVxdW90ZSkuam9pbihcInxcIikgKyBcIilcIiwgXCJpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TG9va3VwKG5hbWVzKSB7XG4gICAgdmFyIG1hcCA9IHt9LCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIG1hcFtuYW1lc1tpXS50b0xvd2VyQ2FzZSgpXSA9IGk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlV2Vla2RheU51bWJlcihkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgcmV0dXJuIG4gPyAoZC53ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlV2Vla051bWJlclN1bmRheShkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLlUgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVyTW9uZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQuVyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUZ1bGxZZWFyKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDQpKTtcbiAgICByZXR1cm4gbiA/IChkLnkgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VZZWFyKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkLnkgPSArblswXSArICgrblswXSA+IDY4ID8gMTkwMCA6IDIwMDApLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVpvbmUoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSAvXihaKXwoWystXVxcZFxcZCkoPzpcXDo/KFxcZFxcZCkpPy8uZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDYpKTtcbiAgICBpZiAobikge1xuICAgICAgZC5aID0gblsxXSA/IDAgICAgICAgICAgICAgIC8vICdaJyBmb3IgVVRDXG4gICAgICAgICAgOiBuWzNdID8gLShuWzJdICsgblszXSkgLy8gc2lnbiBkaWZmZXJzIGZyb20gZ2V0VGltZXpvbmVPZmZzZXQhXG4gICAgICAgICAgICAgICAgIDogLW5bMl0gKiAxMDA7XG4gICAgICByZXR1cm4gaSArIG5bMF0ubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1vbnRoTnVtYmVyKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkLm0gPSBuWzBdIC0gMSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VEYXlPZk1vbnRoKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgICByZXR1cm4gbiA/IChkLmQgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VEYXlPZlllYXIoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMykpO1xuICAgIHJldHVybiBuID8gKGQubSA9IDAsIGQuZCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhvdXIyNChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5IID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTWludXRlcyhkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5NID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gICAgcmV0dXJuIG4gPyAoZC5TID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTWlsbGlzZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDMpKTtcbiAgICByZXR1cm4gbiA/IChkLkwgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMaXRlcmFsUGVyY2VudChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHBlcmNlbnRSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICAgIHJldHVybiBuID8gaSArIG5bMF0ubGVuZ3RoIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXREYXlPZk1vbnRoKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0RGF0ZSgpLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdEhvdXIyNChkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkLmdldEhvdXJzKCksIHAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0SG91cjEyKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdERheU9mWWVhcihkLCBwKSB7XG4gICAgcmV0dXJuIHBhZCgxICsgZDNUaW1lLmRheS5jb3VudChkM1RpbWUueWVhcihkKSwgZCksIHAsIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TWlsbGlzZWNvbmRzKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0TWlsbGlzZWNvbmRzKCksIHAsIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TW9udGhOdW1iZXIoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZC5nZXRNb250aCgpICsgMSwgcCwgMik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRNaW51dGVzKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0TWludXRlcygpLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFNlY29uZHMoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZC5nZXRTZWNvbmRzKCksIHAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0V2Vla051bWJlclN1bmRheShkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkM1RpbWUuc3VuZGF5LmNvdW50KGQzVGltZS55ZWFyKGQpLCBkKSwgcCwgMik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyKGQpIHtcbiAgICByZXR1cm4gZC5nZXREYXkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFdlZWtOdW1iZXJNb25kYXkoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZDNUaW1lLm1vbmRheS5jb3VudChkM1RpbWUueWVhcihkKSwgZCksIHAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0WWVhcihkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0RnVsbFllYXIoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZC5nZXRGdWxsWWVhcigpICUgMTAwMDAsIHAsIDQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0Wm9uZShkKSB7XG4gICAgdmFyIHogPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgcmV0dXJuICh6ID4gMCA/IFwiLVwiIDogKHogKj0gLTEsIFwiK1wiKSlcbiAgICAgICAgKyBwYWQoeiAvIDYwIHwgMCwgXCIwXCIsIDIpXG4gICAgICAgICsgcGFkKHogJSA2MCwgXCIwXCIsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDRGF5T2ZNb250aChkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkLmdldFVUQ0RhdGUoKSwgcCwgMik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENIb3VyMjQoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZC5nZXRVVENIb3VycygpLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ0hvdXIxMihkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgcCwgMik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENEYXlPZlllYXIoZCwgcCkge1xuICAgIHJldHVybiBwYWQoMSArIGQzVGltZS51dGNEYXkuY291bnQoZDNUaW1lLnV0Y1llYXIoZCksIGQpLCBwLCAzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ01pbGxpc2Vjb25kcyhkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkLmdldFVUQ01pbGxpc2Vjb25kcygpLCBwLCAzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoTnVtYmVyKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0VVRDTW9udGgoKSArIDEsIHAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDTWludXRlcyhkLCBwKSB7XG4gICAgcmV0dXJuIHBhZChkLmdldFVUQ01pbnV0ZXMoKSwgcCwgMik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENTZWNvbmRzKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0VVRDU2Vjb25kcygpLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXkoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZDNUaW1lLnV0Y1N1bmRheS5jb3VudChkM1RpbWUudXRjWWVhcihkKSwgZCksIHAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheU51bWJlcihkKSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDRGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQzVGltZS51dGNNb25kYXkuY291bnQoZDNUaW1lLnV0Y1llYXIoZCksIGQpLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1llYXIoZCwgcCkge1xuICAgIHJldHVybiBwYWQoZC5nZXRVVENGdWxsWWVhcigpICUgMTAwLCBwLCAyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ0Z1bGxZZWFyKGQsIHApIHtcbiAgICByZXR1cm4gcGFkKGQuZ2V0VVRDRnVsbFllYXIoKSAlIDEwMDAwLCBwLCA0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFVUQ1pvbmUoKSB7XG4gICAgcmV0dXJuIFwiKzAwMDBcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdExpdGVyYWxQZXJjZW50KCkge1xuICAgIHJldHVybiBcIiVcIjtcbiAgfVxuXG4gIHZhciBpc29TcGVjaWZpZXIgPSBcIiVZLSVtLSVkVCVIOiVNOiVTLiVMWlwiO1xuXG4gIGZ1bmN0aW9uIGZvcm1hdElzb05hdGl2ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbiAgfVxuXG4gIGZvcm1hdElzb05hdGl2ZS5wYXJzZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoc3RyaW5nKTtcbiAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyBudWxsIDogZGF0ZTtcbiAgfTtcblxuICBmb3JtYXRJc29OYXRpdmUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaXNvU3BlY2lmaWVyO1xuICB9O1xuXG4gIHZhciBmb3JtYXRJc28gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyAmJiArbmV3IERhdGUoXCIyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFpcIilcbiAgICAgID8gZm9ybWF0SXNvTmF0aXZlXG4gICAgICA6IGxvY2FsZSQxLnV0Y0Zvcm1hdChpc29TcGVjaWZpZXIpO1xuXG4gIHZhciBsb2NhbGVEZWZpbml0aW9ucyA9IHtcbiAgICBcImNhLUVTXCI6IGNhRXMsXG4gICAgXCJkZS1DSFwiOiBkZUNoLFxuICAgIFwiZGUtREVcIjogZGVEZSxcbiAgICBcImVuLUNBXCI6IGVuQ2EsXG4gICAgXCJlbi1HQlwiOiBlbkdiLFxuICAgIFwiZW4tVVNcIjogbG9jYWxlJDEsXG4gICAgXCJlcy1FU1wiOiBlc0VzLFxuICAgIFwiZmktRklcIjogZmlGaSxcbiAgICBcImZyLUNBXCI6IGZyQ2EsXG4gICAgXCJmci1GUlwiOiBmckZyLFxuICAgIFwiaGUtSUxcIjogaGVJbCxcbiAgICBcImh1LUhVXCI6IGh1SHUsXG4gICAgXCJpdC1JVFwiOiBpdEl0LFxuICAgIFwiamEtSlBcIjogamFKcCxcbiAgICBcImtvLUtSXCI6IGtvS3IsXG4gICAgXCJtay1NS1wiOiBta01rLFxuICAgIFwibmwtTkxcIjogbmxObCxcbiAgICBcInBsLVBMXCI6IHBsUGwsXG4gICAgXCJwdC1CUlwiOiBwdEJyLFxuICAgIFwicnUtUlVcIjogcnVSdSxcbiAgICBcInN2LVNFXCI6IHN2U2UsXG4gICAgXCJ6aC1DTlwiOiB6aENuXG4gIH07XG5cbiAgdmFyIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGUobG9jYWxlJDEpO1xuICB2YXIgZm9ybWF0ID0gZGVmYXVsdExvY2FsZS5mb3JtYXQ7XG4gIHZhciB1dGNGb3JtYXQgPSBkZWZhdWx0TG9jYWxlLnV0Y0Zvcm1hdDtcblxuICBmdW5jdGlvbiBsb2NhbGVGb3JtYXQoZGVmaW5pdGlvbikge1xuICAgIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKCFsb2NhbGVEZWZpbml0aW9ucy5oYXNPd25Qcm9wZXJ0eShkZWZpbml0aW9uKSkgcmV0dXJuIG51bGw7XG4gICAgICBkZWZpbml0aW9uID0gbG9jYWxlRGVmaW5pdGlvbnNbZGVmaW5pdGlvbl07XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGUoZGVmaW5pdGlvbik7XG4gIH07XG5cbiAgdmFyIHZlcnNpb24gPSBcIjAuMS41XCI7XG5cbiAgZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXQ7XG4gIGV4cG9ydHMudXRjRm9ybWF0ID0gdXRjRm9ybWF0O1xuICBleHBvcnRzLmxvY2FsZUZvcm1hdCA9IGxvY2FsZUZvcm1hdDtcbiAgZXhwb3J0cy5pc29Gb3JtYXQgPSBmb3JtYXRJc287XG5cbn0pKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdkMy10aW1lJywgWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgZmFjdG9yeSgoZ2xvYmFsLmQzX3RpbWUgPSB7fSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHQwID0gbmV3IERhdGU7XG4gIHZhciB0MSA9IG5ldyBEYXRlO1xuICBmdW5jdGlvbiBuZXdJbnRlcnZhbChmbG9vcmksIG9mZnNldGksIGNvdW50KSB7XG5cbiAgICBmdW5jdGlvbiBpbnRlcnZhbChkYXRlKSB7XG4gICAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSkpLCBkYXRlO1xuICAgIH1cblxuICAgIGludGVydmFsLmZsb29yID0gaW50ZXJ2YWw7XG5cbiAgICBpbnRlcnZhbC5yb3VuZCA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgIHZhciBkMCA9IG5ldyBEYXRlKCtkYXRlKSxcbiAgICAgICAgICBkMSA9IG5ldyBEYXRlKGRhdGUgLSAxKTtcbiAgICAgIGZsb29yaShkMCksIGZsb29yaShkMSksIG9mZnNldGkoZDEsIDEpO1xuICAgICAgcmV0dXJuIGRhdGUgLSBkMCA8IGQxIC0gZGF0ZSA/IGQwIDogZDE7XG4gICAgfTtcblxuICAgIGludGVydmFsLmNlaWwgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZShkYXRlIC0gMSkpLCBvZmZzZXRpKGRhdGUsIDEpLCBkYXRlO1xuICAgIH07XG5cbiAgICBpbnRlcnZhbC5vZmZzZXQgPSBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0aShkYXRlID0gbmV3IERhdGUoK2RhdGUpLCBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKSksIGRhdGU7XG4gICAgfTtcblxuICAgIGludGVydmFsLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICAgIHZhciByYW5nZSA9IFtdO1xuICAgICAgc3RhcnQgPSBuZXcgRGF0ZShzdGFydCAtIDEpO1xuICAgICAgc3RvcCA9IG5ldyBEYXRlKCtzdG9wKTtcbiAgICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKTtcbiAgICAgIGlmICghKHN0YXJ0IDwgc3RvcCkgfHwgIShzdGVwID4gMCkpIHJldHVybiByYW5nZTsgLy8gYWxzbyBoYW5kbGVzIEludmFsaWQgRGF0ZVxuICAgICAgb2Zmc2V0aShzdGFydCwgMSksIGZsb29yaShzdGFydCk7XG4gICAgICBpZiAoc3RhcnQgPCBzdG9wKSByYW5nZS5wdXNoKG5ldyBEYXRlKCtzdGFydCkpO1xuICAgICAgd2hpbGUgKG9mZnNldGkoc3RhcnQsIHN0ZXApLCBmbG9vcmkoc3RhcnQpLCBzdGFydCA8IHN0b3ApIHJhbmdlLnB1c2gobmV3IERhdGUoK3N0YXJ0KSk7XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfTtcblxuICAgIGludGVydmFsLmZpbHRlciA9IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICAgIHJldHVybiBuZXdJbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIHdoaWxlIChmbG9vcmkoZGF0ZSksICF0ZXN0KGRhdGUpKSBkYXRlLnNldFRpbWUoZGF0ZSAtIDEpO1xuICAgICAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgICAgICB3aGlsZSAoLS1zdGVwID49IDApIHdoaWxlIChvZmZzZXRpKGRhdGUsIDEpLCAhdGVzdChkYXRlKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKGNvdW50KSBpbnRlcnZhbC5jb3VudCA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHQwLnNldFRpbWUoK3N0YXJ0KSwgdDEuc2V0VGltZSgrZW5kKTtcbiAgICAgIGZsb29yaSh0MCksIGZsb29yaSh0MSk7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihjb3VudCh0MCwgdDEpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9O1xuXG4gIHZhciBtaWxsaXNlY29uZCA9IG5ld0ludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIC8vIG5vb3BcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXApO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGVuZCAtIHN0YXJ0O1xuICB9KTtcblxuICB2YXIgc2Vjb25kID0gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0TWlsbGlzZWNvbmRzKDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIDFlMyk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIDFlMztcbiAgfSk7XG5cbiAgdmFyIG1pbnV0ZSA9IG5ld0ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldFNlY29uZHMoMCwgMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogNmU0KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gNmU0O1xuICB9KTtcblxuICB2YXIgaG91ciA9IG5ld0ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldE1pbnV0ZXMoMCwgMCwgMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogMzZlNSk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIDM2ZTU7XG4gIH0pO1xuXG4gIHZhciBkYXkgPSBuZXdJbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXApO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCAtIChlbmQuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0YXJ0LmdldFRpbWV6b25lT2Zmc2V0KCkpICogNmU0KSAvIDg2NGU1O1xuICB9KTtcblxuICBmdW5jdGlvbiB3ZWVrZGF5KGkpIHtcbiAgICByZXR1cm4gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChkYXRlLmdldERheSgpICsgNyAtIGkpICUgNyk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgc3RlcCAqIDcpO1xuICAgIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoZW5kIC0gc3RhcnQgLSAoZW5kLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBzdGFydC5nZXRUaW1lem9uZU9mZnNldCgpKSAqIDZlNCkgLyA2MDQ4ZTU7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3VuZGF5ID0gd2Vla2RheSgwKTtcbiAgdmFyIG1vbmRheSA9IHdlZWtkYXkoMSk7XG4gIHZhciB0dWVzZGF5ID0gd2Vla2RheSgyKTtcbiAgdmFyIHdlZG5lc2RheSA9IHdlZWtkYXkoMyk7XG4gIHZhciB0aHVyc2RheSA9IHdlZWtkYXkoNCk7XG4gIHZhciBmcmlkYXkgPSB3ZWVrZGF5KDUpO1xuICB2YXIgc2F0dXJkYXkgPSB3ZWVrZGF5KDYpO1xuXG4gIHZhciBtb250aCA9IG5ld0ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgc3RlcCk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gZW5kLmdldE1vbnRoKCkgLSBzdGFydC5nZXRNb250aCgpICsgKGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKSkgKiAxMjtcbiAgfSk7XG5cbiAgdmFyIHllYXIgPSBuZXdJbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBkYXRlLnNldE1vbnRoKDAsIDEpO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwKTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKCk7XG4gIH0pO1xuXG4gIHZhciB1dGNTZWNvbmQgPSBuZXdJbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRVVENNaWxsaXNlY29uZHMoMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogMWUzKTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gMWUzO1xuICB9KTtcblxuICB2YXIgdXRjTWludXRlID0gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDU2Vjb25kcygwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiA2ZTQpO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyA2ZTQ7XG4gIH0pO1xuXG4gIHZhciB1dGNIb3VyID0gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDTWludXRlcygwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiAzNmU1KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gMzZlNTtcbiAgfSk7XG5cbiAgdmFyIHV0Y0RheSA9IG5ld0ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgc3RlcCk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIDg2NGU1O1xuICB9KTtcblxuICBmdW5jdGlvbiB1dGNXZWVrZGF5KGkpIHtcbiAgICByZXR1cm4gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIChkYXRlLmdldFVUQ0RheSgpICsgNyAtIGkpICUgNyk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgICAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgc3RlcCAqIDcpO1xuICAgIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gNjA0OGU1O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHV0Y1N1bmRheSA9IHV0Y1dlZWtkYXkoMCk7XG4gIHZhciB1dGNNb25kYXkgPSB1dGNXZWVrZGF5KDEpO1xuICB2YXIgdXRjVHVlc2RheSA9IHV0Y1dlZWtkYXkoMik7XG4gIHZhciB1dGNXZWRuZXNkYXkgPSB1dGNXZWVrZGF5KDMpO1xuICB2YXIgdXRjVGh1cnNkYXkgPSB1dGNXZWVrZGF5KDQpO1xuICB2YXIgdXRjRnJpZGF5ID0gdXRjV2Vla2RheSg1KTtcbiAgdmFyIHV0Y1NhdHVyZGF5ID0gdXRjV2Vla2RheSg2KTtcblxuICB2YXIgdXRjTW9udGggPSBuZXdJbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgICBkYXRlLnNldFVUQ0RhdGUoMSk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldFVUQ01vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSArIHN0ZXApO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIGVuZC5nZXRVVENNb250aCgpIC0gc3RhcnQuZ2V0VVRDTW9udGgoKSArIChlbmQuZ2V0VVRDRnVsbFllYXIoKSAtIHN0YXJ0LmdldFVUQ0Z1bGxZZWFyKCkpICogMTI7XG4gIH0pO1xuXG4gIHZhciB1dGNZZWFyID0gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gZW5kLmdldFVUQ0Z1bGxZZWFyKCkgLSBzdGFydC5nZXRVVENGdWxsWWVhcigpO1xuICB9KTtcblxuICB2YXIgbWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmQucmFuZ2U7XG4gIHZhciBzZWNvbmRzID0gc2Vjb25kLnJhbmdlO1xuICB2YXIgbWludXRlcyA9IG1pbnV0ZS5yYW5nZTtcbiAgdmFyIGhvdXJzID0gaG91ci5yYW5nZTtcbiAgdmFyIGRheXMgPSBkYXkucmFuZ2U7XG4gIHZhciBzdW5kYXlzID0gc3VuZGF5LnJhbmdlO1xuICB2YXIgbW9uZGF5cyA9IG1vbmRheS5yYW5nZTtcbiAgdmFyIHR1ZXNkYXlzID0gdHVlc2RheS5yYW5nZTtcbiAgdmFyIHdlZG5lc2RheXMgPSB3ZWRuZXNkYXkucmFuZ2U7XG4gIHZhciB0aHVyc2RheXMgPSB0aHVyc2RheS5yYW5nZTtcbiAgdmFyIGZyaWRheXMgPSBmcmlkYXkucmFuZ2U7XG4gIHZhciBzYXR1cmRheXMgPSBzYXR1cmRheS5yYW5nZTtcbiAgdmFyIHdlZWtzID0gc3VuZGF5LnJhbmdlO1xuICB2YXIgbW9udGhzID0gbW9udGgucmFuZ2U7XG4gIHZhciB5ZWFycyA9IHllYXIucmFuZ2U7XG5cbiAgdmFyIHV0Y01pbGxpc2Vjb25kID0gbWlsbGlzZWNvbmQ7XG4gIHZhciB1dGNNaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHM7XG4gIHZhciB1dGNTZWNvbmRzID0gdXRjU2Vjb25kLnJhbmdlO1xuICB2YXIgdXRjTWludXRlcyA9IHV0Y01pbnV0ZS5yYW5nZTtcbiAgdmFyIHV0Y0hvdXJzID0gdXRjSG91ci5yYW5nZTtcbiAgdmFyIHV0Y0RheXMgPSB1dGNEYXkucmFuZ2U7XG4gIHZhciB1dGNTdW5kYXlzID0gdXRjU3VuZGF5LnJhbmdlO1xuICB2YXIgdXRjTW9uZGF5cyA9IHV0Y01vbmRheS5yYW5nZTtcbiAgdmFyIHV0Y1R1ZXNkYXlzID0gdXRjVHVlc2RheS5yYW5nZTtcbiAgdmFyIHV0Y1dlZG5lc2RheXMgPSB1dGNXZWRuZXNkYXkucmFuZ2U7XG4gIHZhciB1dGNUaHVyc2RheXMgPSB1dGNUaHVyc2RheS5yYW5nZTtcbiAgdmFyIHV0Y0ZyaWRheXMgPSB1dGNGcmlkYXkucmFuZ2U7XG4gIHZhciB1dGNTYXR1cmRheXMgPSB1dGNTYXR1cmRheS5yYW5nZTtcbiAgdmFyIHV0Y1dlZWtzID0gdXRjU3VuZGF5LnJhbmdlO1xuICB2YXIgdXRjTW9udGhzID0gdXRjTW9udGgucmFuZ2U7XG4gIHZhciB1dGNZZWFycyA9IHV0Y1llYXIucmFuZ2U7XG5cbiAgdmFyIHZlcnNpb24gPSBcIjAuMC43XCI7XG5cbiAgZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgZXhwb3J0cy5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHM7XG4gIGV4cG9ydHMuc2Vjb25kcyA9IHNlY29uZHM7XG4gIGV4cG9ydHMubWludXRlcyA9IG1pbnV0ZXM7XG4gIGV4cG9ydHMuaG91cnMgPSBob3VycztcbiAgZXhwb3J0cy5kYXlzID0gZGF5cztcbiAgZXhwb3J0cy5zdW5kYXlzID0gc3VuZGF5cztcbiAgZXhwb3J0cy5tb25kYXlzID0gbW9uZGF5cztcbiAgZXhwb3J0cy50dWVzZGF5cyA9IHR1ZXNkYXlzO1xuICBleHBvcnRzLndlZG5lc2RheXMgPSB3ZWRuZXNkYXlzO1xuICBleHBvcnRzLnRodXJzZGF5cyA9IHRodXJzZGF5cztcbiAgZXhwb3J0cy5mcmlkYXlzID0gZnJpZGF5cztcbiAgZXhwb3J0cy5zYXR1cmRheXMgPSBzYXR1cmRheXM7XG4gIGV4cG9ydHMud2Vla3MgPSB3ZWVrcztcbiAgZXhwb3J0cy5tb250aHMgPSBtb250aHM7XG4gIGV4cG9ydHMueWVhcnMgPSB5ZWFycztcbiAgZXhwb3J0cy51dGNNaWxsaXNlY29uZCA9IHV0Y01pbGxpc2Vjb25kO1xuICBleHBvcnRzLnV0Y01pbGxpc2Vjb25kcyA9IHV0Y01pbGxpc2Vjb25kcztcbiAgZXhwb3J0cy51dGNTZWNvbmRzID0gdXRjU2Vjb25kcztcbiAgZXhwb3J0cy51dGNNaW51dGVzID0gdXRjTWludXRlcztcbiAgZXhwb3J0cy51dGNIb3VycyA9IHV0Y0hvdXJzO1xuICBleHBvcnRzLnV0Y0RheXMgPSB1dGNEYXlzO1xuICBleHBvcnRzLnV0Y1N1bmRheXMgPSB1dGNTdW5kYXlzO1xuICBleHBvcnRzLnV0Y01vbmRheXMgPSB1dGNNb25kYXlzO1xuICBleHBvcnRzLnV0Y1R1ZXNkYXlzID0gdXRjVHVlc2RheXM7XG4gIGV4cG9ydHMudXRjV2VkbmVzZGF5cyA9IHV0Y1dlZG5lc2RheXM7XG4gIGV4cG9ydHMudXRjVGh1cnNkYXlzID0gdXRjVGh1cnNkYXlzO1xuICBleHBvcnRzLnV0Y0ZyaWRheXMgPSB1dGNGcmlkYXlzO1xuICBleHBvcnRzLnV0Y1NhdHVyZGF5cyA9IHV0Y1NhdHVyZGF5cztcbiAgZXhwb3J0cy51dGNXZWVrcyA9IHV0Y1dlZWtzO1xuICBleHBvcnRzLnV0Y01vbnRocyA9IHV0Y01vbnRocztcbiAgZXhwb3J0cy51dGNZZWFycyA9IHV0Y1llYXJzO1xuICBleHBvcnRzLm1pbGxpc2Vjb25kID0gbWlsbGlzZWNvbmQ7XG4gIGV4cG9ydHMuc2Vjb25kID0gc2Vjb25kO1xuICBleHBvcnRzLm1pbnV0ZSA9IG1pbnV0ZTtcbiAgZXhwb3J0cy5ob3VyID0gaG91cjtcbiAgZXhwb3J0cy5kYXkgPSBkYXk7XG4gIGV4cG9ydHMuc3VuZGF5ID0gc3VuZGF5O1xuICBleHBvcnRzLm1vbmRheSA9IG1vbmRheTtcbiAgZXhwb3J0cy50dWVzZGF5ID0gdHVlc2RheTtcbiAgZXhwb3J0cy53ZWRuZXNkYXkgPSB3ZWRuZXNkYXk7XG4gIGV4cG9ydHMudGh1cnNkYXkgPSB0aHVyc2RheTtcbiAgZXhwb3J0cy5mcmlkYXkgPSBmcmlkYXk7XG4gIGV4cG9ydHMuc2F0dXJkYXkgPSBzYXR1cmRheTtcbiAgZXhwb3J0cy53ZWVrID0gc3VuZGF5O1xuICBleHBvcnRzLm1vbnRoID0gbW9udGg7XG4gIGV4cG9ydHMueWVhciA9IHllYXI7XG4gIGV4cG9ydHMudXRjU2Vjb25kID0gdXRjU2Vjb25kO1xuICBleHBvcnRzLnV0Y01pbnV0ZSA9IHV0Y01pbnV0ZTtcbiAgZXhwb3J0cy51dGNIb3VyID0gdXRjSG91cjtcbiAgZXhwb3J0cy51dGNEYXkgPSB1dGNEYXk7XG4gIGV4cG9ydHMudXRjU3VuZGF5ID0gdXRjU3VuZGF5O1xuICBleHBvcnRzLnV0Y01vbmRheSA9IHV0Y01vbmRheTtcbiAgZXhwb3J0cy51dGNUdWVzZGF5ID0gdXRjVHVlc2RheTtcbiAgZXhwb3J0cy51dGNXZWRuZXNkYXkgPSB1dGNXZWRuZXNkYXk7XG4gIGV4cG9ydHMudXRjVGh1cnNkYXkgPSB1dGNUaHVyc2RheTtcbiAgZXhwb3J0cy51dGNGcmlkYXkgPSB1dGNGcmlkYXk7XG4gIGV4cG9ydHMudXRjU2F0dXJkYXkgPSB1dGNTYXR1cmRheTtcbiAgZXhwb3J0cy51dGNXZWVrID0gdXRjU3VuZGF5O1xuICBleHBvcnRzLnV0Y01vbnRoID0gdXRjTW9udGg7XG4gIGV4cG9ydHMudXRjWWVhciA9IHV0Y1llYXI7XG4gIGV4cG9ydHMuaW50ZXJ2YWwgPSBuZXdJbnRlcnZhbDtcblxufSkpOyIsInZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpLFxuICAgIHRpbWUgPSByZXF1aXJlKCcuLi90aW1lJyksXG4gICAgRVBTSUxPTiA9IDFlLTE1O1xuXG5mdW5jdGlvbiBiaW5zKG9wdCkge1xuICBpZiAoIW9wdCkgeyB0aHJvdyBFcnJvcihcIk1pc3NpbmcgYmlubmluZyBvcHRpb25zLlwiKTsgfVxuXG4gIC8vIGRldGVybWluZSByYW5nZVxuICB2YXIgbWF4YiA9IG9wdC5tYXhiaW5zIHx8IDE1LFxuICAgICAgYmFzZSA9IG9wdC5iYXNlIHx8IDEwLFxuICAgICAgbG9nYiA9IE1hdGgubG9nKGJhc2UpLFxuICAgICAgZGl2ID0gb3B0LmRpdiB8fCBbNSwgMl0sXG4gICAgICBtaW4gPSBvcHQubWluLFxuICAgICAgbWF4ID0gb3B0Lm1heCxcbiAgICAgIHNwYW4gPSBtYXggLSBtaW4sXG4gICAgICBzdGVwLCBsZXZlbCwgbWluc3RlcCwgcHJlY2lzaW9uLCB2LCBpLCBlcHM7XG5cbiAgaWYgKG9wdC5zdGVwKSB7XG4gICAgLy8gaWYgc3RlcCBzaXplIGlzIGV4cGxpY2l0bHkgZ2l2ZW4sIHVzZSB0aGF0XG4gICAgc3RlcCA9IG9wdC5zdGVwO1xuICB9IGVsc2UgaWYgKG9wdC5zdGVwcykge1xuICAgIC8vIGlmIHByb3ZpZGVkLCBsaW1pdCBjaG9pY2UgdG8gYWNjZXB0YWJsZSBzdGVwIHNpemVzXG4gICAgc3RlcCA9IG9wdC5zdGVwc1tNYXRoLm1pbihcbiAgICAgIG9wdC5zdGVwcy5sZW5ndGggLSAxLFxuICAgICAgYmlzZWN0KG9wdC5zdGVwcywgc3Bhbi9tYXhiLCAwLCBvcHQuc3RlcHMubGVuZ3RoKVxuICAgICldO1xuICB9IGVsc2Uge1xuICAgIC8vIGVsc2UgdXNlIHNwYW4gdG8gZGV0ZXJtaW5lIHN0ZXAgc2l6ZVxuICAgIGxldmVsID0gTWF0aC5jZWlsKE1hdGgubG9nKG1heGIpIC8gbG9nYik7XG4gICAgbWluc3RlcCA9IG9wdC5taW5zdGVwIHx8IDA7XG4gICAgc3RlcCA9IE1hdGgubWF4KFxuICAgICAgbWluc3RlcCxcbiAgICAgIE1hdGgucG93KGJhc2UsIE1hdGgucm91bmQoTWF0aC5sb2coc3BhbikgLyBsb2diKSAtIGxldmVsKVxuICAgICk7XG5cbiAgICAvLyBpbmNyZWFzZSBzdGVwIHNpemUgaWYgdG9vIG1hbnkgYmluc1xuICAgIGRvIHsgc3RlcCAqPSBiYXNlOyB9IHdoaWxlIChNYXRoLmNlaWwoc3Bhbi9zdGVwKSA+IG1heGIpO1xuXG4gICAgLy8gZGVjcmVhc2Ugc3RlcCBzaXplIGlmIGFsbG93ZWRcbiAgICBmb3IgKGk9MDsgaTxkaXYubGVuZ3RoOyArK2kpIHtcbiAgICAgIHYgPSBzdGVwIC8gZGl2W2ldO1xuICAgICAgaWYgKHYgPj0gbWluc3RlcCAmJiBzcGFuIC8gdiA8PSBtYXhiKSBzdGVwID0gdjtcbiAgICB9XG4gIH1cblxuICAvLyB1cGRhdGUgcHJlY2lzaW9uLCBtaW4gYW5kIG1heFxuICB2ID0gTWF0aC5sb2coc3RlcCk7XG4gIHByZWNpc2lvbiA9IHYgPj0gMCA/IDAgOiB+figtdiAvIGxvZ2IpICsgMTtcbiAgZXBzID0gTWF0aC5wb3coYmFzZSwgLXByZWNpc2lvbiAtIDEpO1xuICBtaW4gPSBNYXRoLm1pbihtaW4sIE1hdGguZmxvb3IobWluIC8gc3RlcCArIGVwcykgKiBzdGVwKTtcbiAgbWF4ID0gTWF0aC5jZWlsKG1heCAvIHN0ZXApICogc3RlcDtcblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBtaW4sXG4gICAgc3RvcDogIG1heCxcbiAgICBzdGVwOiAgc3RlcCxcbiAgICB1bml0OiAge3ByZWNpc2lvbjogcHJlY2lzaW9ufSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaW5kZXg6IGluZGV4XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpc2VjdChhLCB4LCBsbywgaGkpIHtcbiAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICBpZiAodXRpbC5jbXAoYVttaWRdLCB4KSA8IDApIHsgbG8gPSBtaWQgKyAxOyB9XG4gICAgZWxzZSB7IGhpID0gbWlkOyB9XG4gIH1cbiAgcmV0dXJuIGxvO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2KSB7XG4gIHJldHVybiB0aGlzLnN0ZXAgKiBNYXRoLmZsb29yKHYgLyB0aGlzLnN0ZXAgKyBFUFNJTE9OKTtcbn1cblxuZnVuY3Rpb24gaW5kZXgodikge1xuICByZXR1cm4gTWF0aC5mbG9vcigodiAtIHRoaXMuc3RhcnQpIC8gdGhpcy5zdGVwICsgRVBTSUxPTik7XG59XG5cbmZ1bmN0aW9uIGRhdGVfdmFsdWUodikge1xuICByZXR1cm4gdGhpcy51bml0LmRhdGUodmFsdWUuY2FsbCh0aGlzLCB2KSk7XG59XG5cbmZ1bmN0aW9uIGRhdGVfaW5kZXgodikge1xuICByZXR1cm4gaW5kZXguY2FsbCh0aGlzLCB0aGlzLnVuaXQudW5pdCh2KSk7XG59XG5cbmJpbnMuZGF0ZSA9IGZ1bmN0aW9uKG9wdCkge1xuICBpZiAoIW9wdCkgeyB0aHJvdyBFcnJvcihcIk1pc3NpbmcgZGF0ZSBiaW5uaW5nIG9wdGlvbnMuXCIpOyB9XG5cbiAgLy8gZmluZCB0aW1lIHN0ZXAsIHRoZW4gYmluXG4gIHZhciB1bml0cyA9IG9wdC51dGMgPyB0aW1lLnV0YyA6IHRpbWUsXG4gICAgICBkbWluID0gb3B0Lm1pbixcbiAgICAgIGRtYXggPSBvcHQubWF4LFxuICAgICAgbWF4YiA9IG9wdC5tYXhiaW5zIHx8IDIwLFxuICAgICAgbWluYiA9IG9wdC5taW5iaW5zIHx8IDQsXG4gICAgICBzcGFuID0gKCtkbWF4KSAtICgrZG1pbiksXG4gICAgICB1bml0ID0gb3B0LnVuaXQgPyB1bml0c1tvcHQudW5pdF0gOiB1bml0cy5maW5kKHNwYW4sIG1pbmIsIG1heGIpLFxuICAgICAgc3BlYyA9IGJpbnMoe1xuICAgICAgICBtaW46ICAgICB1bml0Lm1pbiAhPSBudWxsID8gdW5pdC5taW4gOiB1bml0LnVuaXQoZG1pbiksXG4gICAgICAgIG1heDogICAgIHVuaXQubWF4ICE9IG51bGwgPyB1bml0Lm1heCA6IHVuaXQudW5pdChkbWF4KSxcbiAgICAgICAgbWF4YmluczogbWF4YixcbiAgICAgICAgbWluc3RlcDogdW5pdC5taW5zdGVwLFxuICAgICAgICBzdGVwczogICB1bml0LnN0ZXBcbiAgICAgIH0pO1xuXG4gIHNwZWMudW5pdCA9IHVuaXQ7XG4gIHNwZWMuaW5kZXggPSBkYXRlX2luZGV4O1xuICBpZiAoIW9wdC5yYXcpIHNwZWMudmFsdWUgPSBkYXRlX3ZhbHVlO1xuICByZXR1cm4gc3BlYztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmlucztcbiIsInZhciBnZW4gPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5nZW4ucmVwZWF0ID0gZnVuY3Rpb24odmFsLCBuKSB7XG4gIHZhciBhID0gQXJyYXkobiksIGk7XG4gIGZvciAoaT0wOyBpPG47ICsraSkgYVtpXSA9IHZhbDtcbiAgcmV0dXJuIGE7XG59O1xuXG5nZW4uemVyb3MgPSBmdW5jdGlvbihuKSB7XG4gIHJldHVybiBnZW4ucmVwZWF0KDAsIG4pO1xufTtcblxuZ2VuLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgc3RlcCA9IDE7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICBzdG9wID0gc3RhcnQ7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICB9XG4gIGlmICgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXAgPT0gSW5maW5pdHkpIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgcmFuZ2UnKTtcbiAgdmFyIHJhbmdlID0gW10sIGkgPSAtMSwgajtcbiAgaWYgKHN0ZXAgPCAwKSB3aGlsZSAoKGogPSBzdGFydCArIHN0ZXAgKiArK2kpID4gc3RvcCkgcmFuZ2UucHVzaChqKTtcbiAgZWxzZSB3aGlsZSAoKGogPSBzdGFydCArIHN0ZXAgKiArK2kpIDwgc3RvcCkgcmFuZ2UucHVzaChqKTtcbiAgcmV0dXJuIHJhbmdlO1xufTtcblxuZ2VuLnJhbmRvbSA9IHt9O1xuXG5nZW4ucmFuZG9tLnVuaWZvcm0gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICBtYXggPSBtaW4gPT09IHVuZGVmaW5lZCA/IDEgOiBtaW47XG4gICAgbWluID0gMDtcbiAgfVxuICB2YXIgZCA9IG1heCAtIG1pbjtcbiAgdmFyIGYgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbWluICsgZCAqIE1hdGgucmFuZG9tKCk7XG4gIH07XG4gIGYuc2FtcGxlcyA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIGdlbi56ZXJvcyhuKS5tYXAoZik7IH07XG4gIHJldHVybiBmO1xufTtcblxuZ2VuLnJhbmRvbS5pbnRlZ2VyID0gZnVuY3Rpb24oYSwgYikge1xuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYiA9IGE7XG4gICAgYSA9IDA7XG4gIH1cbiAgdmFyIGQgPSBiIC0gYTtcbiAgdmFyIGYgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYSArIE1hdGguZmxvb3IoZCAqIE1hdGgucmFuZG9tKCkpO1xuICB9O1xuICBmLnNhbXBsZXMgPSBmdW5jdGlvbihuKSB7IHJldHVybiBnZW4uemVyb3MobikubWFwKGYpOyB9O1xuICByZXR1cm4gZjtcbn07XG5cbmdlbi5yYW5kb20ubm9ybWFsID0gZnVuY3Rpb24obWVhbiwgc3RkZXYpIHtcbiAgbWVhbiA9IG1lYW4gfHwgMDtcbiAgc3RkZXYgPSBzdGRldiB8fCAxO1xuICB2YXIgbmV4dDtcbiAgdmFyIGYgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeCA9IDAsIHkgPSAwLCByZHMsIGM7XG4gICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgeCA9IG5leHQ7XG4gICAgICBuZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGRvIHtcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgIHJkcyA9IHgqeCArIHkqeTtcbiAgICB9IHdoaWxlIChyZHMgPT09IDAgfHwgcmRzID4gMSk7XG4gICAgYyA9IE1hdGguc3FydCgtMipNYXRoLmxvZyhyZHMpL3Jkcyk7IC8vIEJveC1NdWxsZXIgdHJhbnNmb3JtXG4gICAgbmV4dCA9IG1lYW4gKyB5KmMqc3RkZXY7XG4gICAgcmV0dXJuIG1lYW4gKyB4KmMqc3RkZXY7XG4gIH07XG4gIGYuc2FtcGxlcyA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIGdlbi56ZXJvcyhuKS5tYXAoZik7IH07XG4gIHJldHVybiBmO1xufTtcbiIsInZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG52YXIgVFlQRVMgPSAnX190eXBlc19fJztcblxudmFyIFBBUlNFUlMgPSB7XG4gIGJvb2xlYW46IHV0aWwuYm9vbGVhbixcbiAgaW50ZWdlcjogdXRpbC5udW1iZXIsXG4gIG51bWJlcjogIHV0aWwubnVtYmVyLFxuICBkYXRlOiAgICB1dGlsLmRhdGUsXG4gIHN0cmluZzogIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHg9PT0nJyA/IG51bGwgOiB4OyB9XG59O1xuXG52YXIgVEVTVFMgPSB7XG4gIGJvb2xlYW46IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHg9PT0ndHJ1ZScgfHwgeD09PSdmYWxzZScgfHwgdXRpbC5pc0Jvb2xlYW4oeCk7IH0sXG4gIGludGVnZXI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIFRFU1RTLm51bWJlcih4KSAmJiAoeD0reCkgPT09IH5+eDsgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbih4KSB7IHJldHVybiAhaXNOYU4oK3gpICYmICF1dGlsLmlzRGF0ZSh4KTsgfSxcbiAgZGF0ZTogZnVuY3Rpb24oeCkgeyByZXR1cm4gIWlzTmFOKERhdGUucGFyc2UoeCkpOyB9XG59O1xuXG5mdW5jdGlvbiBhbm5vdGF0aW9uKGRhdGEsIHR5cGVzKSB7XG4gIGlmICghdHlwZXMpIHJldHVybiBkYXRhICYmIGRhdGFbVFlQRVNdIHx8IG51bGw7XG4gIGRhdGFbVFlQRVNdID0gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIHR5cGUodmFsdWVzLCBmKSB7XG4gIHZhbHVlcyA9IHV0aWwuYXJyYXkodmFsdWVzKTtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIHYsIGksIG47XG5cbiAgLy8gaWYgZGF0YSBhcnJheSBoYXMgdHlwZSBhbm5vdGF0aW9ucywgdXNlIHRoZW1cbiAgaWYgKHZhbHVlc1tUWVBFU10pIHtcbiAgICB2ID0gZih2YWx1ZXNbVFlQRVNdKTtcbiAgICBpZiAodXRpbC5pc1N0cmluZyh2KSkgcmV0dXJuIHY7XG4gIH1cblxuICBmb3IgKGk9MCwgbj12YWx1ZXMubGVuZ3RoOyAhdXRpbC5pc1ZhbGlkKHYpICYmIGk8bjsgKytpKSB7XG4gICAgdiA9IGYgPyBmKHZhbHVlc1tpXSkgOiB2YWx1ZXNbaV07XG4gIH1cblxuICByZXR1cm4gdXRpbC5pc0RhdGUodikgPyAnZGF0ZScgOlxuICAgIHV0aWwuaXNOdW1iZXIodikgICAgPyAnbnVtYmVyJyA6XG4gICAgdXRpbC5pc0Jvb2xlYW4odikgICA/ICdib29sZWFuJyA6XG4gICAgdXRpbC5pc1N0cmluZyh2KSAgICA/ICdzdHJpbmcnIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gdHlwZUFsbChkYXRhLCBmaWVsZHMpIHtcbiAgaWYgKCFkYXRhLmxlbmd0aCkgcmV0dXJuO1xuICBmaWVsZHMgPSBmaWVsZHMgfHwgdXRpbC5rZXlzKGRhdGFbMF0pO1xuICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbih0eXBlcywgZikge1xuICAgIHJldHVybiAodHlwZXNbZl0gPSB0eXBlKGRhdGEsIGYpLCB0eXBlcyk7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gaW5mZXIodmFsdWVzLCBmKSB7XG4gIHZhbHVlcyA9IHV0aWwuYXJyYXkodmFsdWVzKTtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIGksIGosIHY7XG5cbiAgLy8gdHlwZXMgdG8gdGVzdCBmb3IsIGluIHByZWNlZGVuY2Ugb3JkZXJcbiAgdmFyIHR5cGVzID0gWydib29sZWFuJywgJ2ludGVnZXInLCAnbnVtYmVyJywgJ2RhdGUnXTtcblxuICBmb3IgKGk9MDsgaTx2YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBnZXQgbmV4dCB2YWx1ZSB0byB0ZXN0XG4gICAgdiA9IGYgPyBmKHZhbHVlc1tpXSkgOiB2YWx1ZXNbaV07XG4gICAgLy8gdGVzdCB2YWx1ZSBhZ2FpbnN0IHJlbWFpbmluZyB0eXBlc1xuICAgIGZvciAoaj0wOyBqPHR5cGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAodXRpbC5pc1ZhbGlkKHYpICYmICFURVNUU1t0eXBlc1tqXV0odikpIHtcbiAgICAgICAgdHlwZXMuc3BsaWNlKGosIDEpO1xuICAgICAgICBqIC09IDE7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIG5vIHR5cGVzIGxlZnQsIHJldHVybiAnc3RyaW5nJ1xuICAgIGlmICh0eXBlcy5sZW5ndGggPT09IDApIHJldHVybiAnc3RyaW5nJztcbiAgfVxuXG4gIHJldHVybiB0eXBlc1swXTtcbn1cblxuZnVuY3Rpb24gaW5mZXJBbGwoZGF0YSwgZmllbGRzKSB7XG4gIGZpZWxkcyA9IGZpZWxkcyB8fCB1dGlsLmtleXMoZGF0YVswXSk7XG4gIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uKHR5cGVzLCBmKSB7XG4gICAgdHlwZXNbZl0gPSBpbmZlcihkYXRhLCBmKTtcbiAgICByZXR1cm4gdHlwZXM7XG4gIH0sIHt9KTtcbn1cblxudHlwZS5hbm5vdGF0aW9uID0gYW5ub3RhdGlvbjtcbnR5cGUuYWxsID0gdHlwZUFsbDtcbnR5cGUuaW5mZXIgPSBpbmZlcjtcbnR5cGUuaW5mZXJBbGwgPSBpbmZlckFsbDtcbnR5cGUucGFyc2VycyA9IFBBUlNFUlM7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGU7XG4iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIHR5cGUgPSByZXF1aXJlKCcuL2ltcG9ydC90eXBlJyk7XG52YXIgZ2VuID0gcmVxdWlyZSgnLi9nZW5lcmF0ZScpO1xudmFyIHN0YXRzID0ge307XG5cbi8vIENvbGxlY3QgdW5pcXVlIHZhbHVlcy5cbi8vIE91dHB1dDogYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcywgaW4gZmlyc3Qtb2JzZXJ2ZWQgb3JkZXJcbnN0YXRzLnVuaXF1ZSA9IGZ1bmN0aW9uKHZhbHVlcywgZiwgcmVzdWx0cykge1xuICBmID0gdXRpbC4kKGYpO1xuICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcbiAgdmFyIHUgPSB7fSwgdiwgaSwgbjtcbiAgZm9yIChpPTAsIG49dmFsdWVzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodiBpbiB1KSBjb250aW51ZTtcbiAgICB1W3ZdID0gMTtcbiAgICByZXN1bHRzLnB1c2godik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW5wdXQgYXJyYXkuXG5zdGF0cy5jb3VudCA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzICYmIHZhbHVlcy5sZW5ndGggfHwgMDtcbn07XG5cbi8vIENvdW50IHRoZSBudW1iZXIgb2Ygbm9uLW51bGwsIG5vbi11bmRlZmluZWQsIG5vbi1OYU4gdmFsdWVzLlxuc3RhdHMuY291bnQudmFsaWQgPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIHYsIGksIG4sIHZhbGlkID0gMDtcbiAgZm9yIChpPTAsIG49dmFsdWVzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodXRpbC5pc1ZhbGlkKHYpKSB2YWxpZCArPSAxO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn07XG5cbi8vIENvdW50IHRoZSBudW1iZXIgb2YgbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzLlxuc3RhdHMuY291bnQubWlzc2luZyA9IGZ1bmN0aW9uKHZhbHVlcywgZikge1xuICBmID0gdXRpbC4kKGYpO1xuICB2YXIgdiwgaSwgbiwgY291bnQgPSAwO1xuICBmb3IgKGk9MCwgbj12YWx1ZXMubGVuZ3RoOyBpPG47ICsraSkge1xuICAgIHYgPSBmID8gZih2YWx1ZXNbaV0pIDogdmFsdWVzW2ldO1xuICAgIGlmICh2ID09IG51bGwpIGNvdW50ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuLy8gQ291bnQgdGhlIG51bWJlciBvZiBkaXN0aW5jdCB2YWx1ZXMuXG4vLyBOdWxsLCB1bmRlZmluZWQgYW5kIE5hTiBhcmUgZWFjaCBjb25zaWRlcmVkIGRpc3RpbmN0IHZhbHVlcy5cbnN0YXRzLmNvdW50LmRpc3RpbmN0ID0gZnVuY3Rpb24odmFsdWVzLCBmKSB7XG4gIGYgPSB1dGlsLiQoZik7XG4gIHZhciB1ID0ge30sIHYsIGksIG4sIGNvdW50ID0gMDtcbiAgZm9yIChpPTAsIG49dmFsdWVzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodiBpbiB1KSBjb250aW51ZTtcbiAgICB1W3ZdID0gMTtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5cbi8vIENvbnN0cnVjdCBhIG1hcCBmcm9tIGRpc3RpbmN0IHZhbHVlcyB0byBvY2N1cnJlbmNlIGNvdW50cy5cbnN0YXRzLmNvdW50Lm1hcCA9IGZ1bmN0aW9uKHZhbHVlcywgZikge1xuICBmID0gdXRpbC4kKGYpO1xuICB2YXIgbWFwID0ge30sIHYsIGksIG47XG4gIGZvciAoaT0wLCBuPXZhbHVlcy5sZW5ndGg7IGk8bjsgKytpKSB7XG4gICAgdiA9IGYgPyBmKHZhbHVlc1tpXSkgOiB2YWx1ZXNbaV07XG4gICAgbWFwW3ZdID0gKHYgaW4gbWFwKSA/IG1hcFt2XSArIDEgOiAxO1xuICB9XG4gIHJldHVybiBtYXA7XG59O1xuXG4vLyBDb21wdXRlIHRoZSBtZWRpYW4gb2YgYW4gYXJyYXkgb2YgbnVtYmVycy5cbnN0YXRzLm1lZGlhbiA9IGZ1bmN0aW9uKHZhbHVlcywgZikge1xuICBpZiAoZikgdmFsdWVzID0gdmFsdWVzLm1hcCh1dGlsLiQoZikpO1xuICB2YWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKHV0aWwuaXNWYWxpZCkuc29ydCh1dGlsLmNtcCk7XG4gIHJldHVybiBzdGF0cy5xdWFudGlsZSh2YWx1ZXMsIDAuNSk7XG59O1xuXG4vLyBDb21wdXRlcyB0aGUgcXVhcnRpbGUgYm91bmRhcmllcyBvZiBhbiBhcnJheSBvZiBudW1iZXJzLlxuc3RhdHMucXVhcnRpbGUgPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgaWYgKGYpIHZhbHVlcyA9IHZhbHVlcy5tYXAodXRpbC4kKGYpKTtcbiAgdmFsdWVzID0gdmFsdWVzLmZpbHRlcih1dGlsLmlzVmFsaWQpLnNvcnQodXRpbC5jbXApO1xuICB2YXIgcSA9IHN0YXRzLnF1YW50aWxlO1xuICByZXR1cm4gW3EodmFsdWVzLCAwLjI1KSwgcSh2YWx1ZXMsIDAuNTApLCBxKHZhbHVlcywgMC43NSldO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgcXVhbnRpbGUgb2YgYSBzb3J0ZWQgYXJyYXkgb2YgbnVtYmVycy5cbi8vIEFkYXB0ZWQgZnJvbSB0aGUgRDMuanMgaW1wbGVtZW50YXRpb24uXG5zdGF0cy5xdWFudGlsZSA9IGZ1bmN0aW9uKHZhbHVlcywgZiwgcCkge1xuICBpZiAocCA9PT0gdW5kZWZpbmVkKSB7IHAgPSBmOyBmID0gdXRpbC5pZGVudGl0eTsgfVxuICBmID0gdXRpbC4kKGYpO1xuICB2YXIgSCA9ICh2YWx1ZXMubGVuZ3RoIC0gMSkgKiBwICsgMSxcbiAgICAgIGggPSBNYXRoLmZsb29yKEgpLFxuICAgICAgdiA9ICtmKHZhbHVlc1toIC0gMV0pLFxuICAgICAgZSA9IEggLSBoO1xuICByZXR1cm4gZSA/IHYgKyBlICogKGYodmFsdWVzW2hdKSAtIHYpIDogdjtcbn07XG5cbi8vIENvbXB1dGUgdGhlIHN1bSBvZiBhbiBhcnJheSBvZiBudW1iZXJzLlxuc3RhdHMuc3VtID0gZnVuY3Rpb24odmFsdWVzLCBmKSB7XG4gIGYgPSB1dGlsLiQoZik7XG4gIGZvciAodmFyIHN1bT0wLCBpPTAsIG49dmFsdWVzLmxlbmd0aCwgdjsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodXRpbC5pc1ZhbGlkKHYpKSBzdW0gKz0gdjtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgbWVhbiAoYXZlcmFnZSkgb2YgYW4gYXJyYXkgb2YgbnVtYmVycy5cbnN0YXRzLm1lYW4gPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIG1lYW4gPSAwLCBkZWx0YSwgaSwgbiwgYywgdjtcbiAgZm9yIChpPTAsIGM9MCwgbj12YWx1ZXMubGVuZ3RoOyBpPG47ICsraSkge1xuICAgIHYgPSBmID8gZih2YWx1ZXNbaV0pIDogdmFsdWVzW2ldO1xuICAgIGlmICh1dGlsLmlzVmFsaWQodikpIHtcbiAgICAgIGRlbHRhID0gdiAtIG1lYW47XG4gICAgICBtZWFuID0gbWVhbiArIGRlbHRhIC8gKCsrYyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZWFuO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgc2FtcGxlIHZhcmlhbmNlIG9mIGFuIGFycmF5IG9mIG51bWJlcnMuXG5zdGF0cy52YXJpYW5jZSA9IGZ1bmN0aW9uKHZhbHVlcywgZikge1xuICBmID0gdXRpbC4kKGYpO1xuICBpZiAoIXV0aWwuaXNBcnJheSh2YWx1ZXMpIHx8IHZhbHVlcy5sZW5ndGggPCAyKSByZXR1cm4gMDtcbiAgdmFyIG1lYW4gPSAwLCBNMiA9IDAsIGRlbHRhLCBpLCBjLCB2O1xuICBmb3IgKGk9MCwgYz0wOyBpPHZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgIHYgPSBmID8gZih2YWx1ZXNbaV0pIDogdmFsdWVzW2ldO1xuICAgIGlmICh1dGlsLmlzVmFsaWQodikpIHtcbiAgICAgIGRlbHRhID0gdiAtIG1lYW47XG4gICAgICBtZWFuID0gbWVhbiArIGRlbHRhIC8gKCsrYyk7XG4gICAgICBNMiA9IE0yICsgZGVsdGEgKiAodiAtIG1lYW4pO1xuICAgIH1cbiAgfVxuICBNMiA9IE0yIC8gKGMgLSAxKTtcbiAgcmV0dXJuIE0yO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgc2FtcGxlIHN0YW5kYXJkIGRldmlhdGlvbiBvZiBhbiBhcnJheSBvZiBudW1iZXJzLlxuc3RhdHMuc3RkZXYgPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgcmV0dXJuIE1hdGguc3FydChzdGF0cy52YXJpYW5jZSh2YWx1ZXMsIGYpKTtcbn07XG5cbi8vIENvbXB1dGUgdGhlIFBlYXJzb24gbW9kZSBza2V3bmVzcyAoKG1lZGlhbi1tZWFuKS9zdGRldikgb2YgYW4gYXJyYXkgb2YgbnVtYmVycy5cbnN0YXRzLm1vZGVza2V3ID0gZnVuY3Rpb24odmFsdWVzLCBmKSB7XG4gIHZhciBhdmcgPSBzdGF0cy5tZWFuKHZhbHVlcywgZiksXG4gICAgICBtZWQgPSBzdGF0cy5tZWRpYW4odmFsdWVzLCBmKSxcbiAgICAgIHN0ZCA9IHN0YXRzLnN0ZGV2KHZhbHVlcywgZik7XG4gIHJldHVybiBzdGQgPT09IDAgPyAwIDogKGF2ZyAtIG1lZCkgLyBzdGQ7XG59O1xuXG4vLyBGaW5kIHRoZSBtaW5pbXVtIHZhbHVlIGluIGFuIGFycmF5Llxuc3RhdHMubWluID0gZnVuY3Rpb24odmFsdWVzLCBmKSB7XG4gIHJldHVybiBzdGF0cy5leHRlbnQodmFsdWVzLCBmKVswXTtcbn07XG5cbi8vIEZpbmQgdGhlIG1heGltdW0gdmFsdWUgaW4gYW4gYXJyYXkuXG5zdGF0cy5tYXggPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgcmV0dXJuIHN0YXRzLmV4dGVudCh2YWx1ZXMsIGYpWzFdO1xufTtcblxuLy8gRmluZCB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBvZiBhbiBhcnJheSBvZiB2YWx1ZXMuXG5zdGF0cy5leHRlbnQgPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIGEsIGIsIHYsIGksIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICBmb3IgKGk9MDsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodXRpbC5pc1ZhbGlkKHYpKSB7IGEgPSBiID0gdjsgYnJlYWs7IH1cbiAgfVxuICBmb3IgKDsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodXRpbC5pc1ZhbGlkKHYpKSB7XG4gICAgICBpZiAodiA8IGEpIGEgPSB2O1xuICAgICAgaWYgKHYgPiBiKSBiID0gdjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFthLCBiXTtcbn07XG5cbi8vIEZpbmQgdGhlIGludGVnZXIgaW5kaWNlcyBvZiB0aGUgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMuXG5zdGF0cy5leHRlbnQuaW5kZXggPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIHggPSAtMSwgeSA9IC0xLCBhLCBiLCB2LCBpLCBuID0gdmFsdWVzLmxlbmd0aDtcbiAgZm9yIChpPTA7IGk8bjsgKytpKSB7XG4gICAgdiA9IGYgPyBmKHZhbHVlc1tpXSkgOiB2YWx1ZXNbaV07XG4gICAgaWYgKHV0aWwuaXNWYWxpZCh2KSkgeyBhID0gYiA9IHY7IHggPSB5ID0gaTsgYnJlYWs7IH1cbiAgfVxuICBmb3IgKDsgaTxuOyArK2kpIHtcbiAgICB2ID0gZiA/IGYodmFsdWVzW2ldKSA6IHZhbHVlc1tpXTtcbiAgICBpZiAodXRpbC5pc1ZhbGlkKHYpKSB7XG4gICAgICBpZiAodiA8IGEpIHsgYSA9IHY7IHggPSBpOyB9XG4gICAgICBpZiAodiA+IGIpIHsgYiA9IHY7IHkgPSBpOyB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vLyBDb21wdXRlIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gYXJyYXlzIG9mIG51bWJlcnMuXG5zdGF0cy5kb3QgPSBmdW5jdGlvbih2YWx1ZXMsIGEsIGIpIHtcbiAgdmFyIHN1bSA9IDAsIGksIHY7XG4gIGlmICghYikge1xuICAgIGlmICh2YWx1ZXMubGVuZ3RoICE9PSBhLmxlbmd0aCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FycmF5IGxlbmd0aHMgbXVzdCBtYXRjaC4nKTtcbiAgICB9XG4gICAgZm9yIChpPTA7IGk8dmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2ID0gdmFsdWVzW2ldICogYVtpXTtcbiAgICAgIGlmICh2ID09PSB2KSBzdW0gKz0gdjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYSA9IHV0aWwuJChhKTtcbiAgICBiID0gdXRpbC4kKGIpO1xuICAgIGZvciAoaT0wOyBpPHZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgdiA9IGEodmFsdWVzW2ldKSAqIGIodmFsdWVzW2ldKTtcbiAgICAgIGlmICh2ID09PSB2KSBzdW0gKz0gdjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbi8vIENvbXB1dGUgYXNjZW5kaW5nIHJhbmsgc2NvcmVzIGZvciBhbiBhcnJheSBvZiB2YWx1ZXMuXG4vLyBUaWVzIGFyZSBhc3NpZ25lZCB0aGVpciBjb2xsZWN0aXZlIG1lYW4gcmFuay5cbnN0YXRzLnJhbmsgPSBmdW5jdGlvbih2YWx1ZXMsIGYpIHtcbiAgZiA9IHV0aWwuJChmKSB8fCB1dGlsLmlkZW50aXR5O1xuICB2YXIgYSA9IHZhbHVlcy5tYXAoZnVuY3Rpb24odiwgaSkge1xuICAgICAgcmV0dXJuIHtpZHg6IGksIHZhbDogZih2KX07XG4gICAgfSlcbiAgICAuc29ydCh1dGlsLmNvbXBhcmF0b3IoJ3ZhbCcpKTtcblxuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICByID0gQXJyYXkobiksXG4gICAgICB0aWUgPSAtMSwgcCA9IHt9LCBpLCB2LCBtdTtcblxuICBmb3IgKGk9MDsgaTxuOyArK2kpIHtcbiAgICB2ID0gYVtpXS52YWw7XG4gICAgaWYgKHRpZSA8IDAgJiYgcCA9PT0gdikge1xuICAgICAgdGllID0gaSAtIDE7XG4gICAgfSBlbHNlIGlmICh0aWUgPiAtMSAmJiBwICE9PSB2KSB7XG4gICAgICBtdSA9IDEgKyAoaS0xICsgdGllKSAvIDI7XG4gICAgICBmb3IgKDsgdGllPGk7ICsrdGllKSByW2FbdGllXS5pZHhdID0gbXU7XG4gICAgICB0aWUgPSAtMTtcbiAgICB9XG4gICAgclthW2ldLmlkeF0gPSBpICsgMTtcbiAgICBwID0gdjtcbiAgfVxuXG4gIGlmICh0aWUgPiAtMSkge1xuICAgIG11ID0gMSArIChuLTEgKyB0aWUpIC8gMjtcbiAgICBmb3IgKDsgdGllPG47ICsrdGllKSByW2FbdGllXS5pZHhdID0gbXU7XG4gIH1cblxuICByZXR1cm4gcjtcbn07XG5cbi8vIENvbXB1dGUgdGhlIHNhbXBsZSBQZWFyc29uIHByb2R1Y3QtbW9tZW50IGNvcnJlbGF0aW9uIG9mIHR3byBhcnJheXMgb2YgbnVtYmVycy5cbnN0YXRzLmNvciA9IGZ1bmN0aW9uKHZhbHVlcywgYSwgYikge1xuICB2YXIgZm4gPSBiO1xuICBiID0gZm4gPyB2YWx1ZXMubWFwKHV0aWwuJChiKSkgOiBhO1xuICBhID0gZm4gPyB2YWx1ZXMubWFwKHV0aWwuJChhKSkgOiB2YWx1ZXM7XG5cbiAgdmFyIGRvdCA9IHN0YXRzLmRvdChhLCBiKSxcbiAgICAgIG11YSA9IHN0YXRzLm1lYW4oYSksXG4gICAgICBtdWIgPSBzdGF0cy5tZWFuKGIpLFxuICAgICAgc2RhID0gc3RhdHMuc3RkZXYoYSksXG4gICAgICBzZGIgPSBzdGF0cy5zdGRldihiKSxcbiAgICAgIG4gPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIHJldHVybiAoZG90IC0gbiptdWEqbXViKSAvICgobi0xKSAqIHNkYSAqIHNkYik7XG59O1xuXG4vLyBDb21wdXRlIHRoZSBTcGVhcm1hbiByYW5rIGNvcnJlbGF0aW9uIG9mIHR3byBhcnJheXMgb2YgdmFsdWVzLlxuc3RhdHMuY29yLnJhbmsgPSBmdW5jdGlvbih2YWx1ZXMsIGEsIGIpIHtcbiAgdmFyIHJhID0gYiA/IHN0YXRzLnJhbmsodmFsdWVzLCB1dGlsLiQoYSkpIDogc3RhdHMucmFuayh2YWx1ZXMpLFxuICAgICAgcmIgPSBiID8gc3RhdHMucmFuayh2YWx1ZXMsIHV0aWwuJChiKSkgOiBzdGF0cy5yYW5rKGEpLFxuICAgICAgbiA9IHZhbHVlcy5sZW5ndGgsIGksIHMsIGQ7XG5cbiAgZm9yIChpPTAsIHM9MDsgaTxuOyArK2kpIHtcbiAgICBkID0gcmFbaV0gLSByYltpXTtcbiAgICBzICs9IGQgKiBkO1xuICB9XG5cbiAgcmV0dXJuIDEgLSA2KnMgLyAobiAqIChuKm4tMSkpO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgZGlzdGFuY2UgY29ycmVsYXRpb24gb2YgdHdvIGFycmF5cyBvZiBudW1iZXJzLlxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EaXN0YW5jZV9jb3JyZWxhdGlvblxuc3RhdHMuY29yLmRpc3QgPSBmdW5jdGlvbih2YWx1ZXMsIGEsIGIpIHtcbiAgdmFyIFggPSBiID8gdmFsdWVzLm1hcCh1dGlsLiQoYSkpIDogdmFsdWVzLFxuICAgICAgWSA9IGIgPyB2YWx1ZXMubWFwKHV0aWwuJChiKSkgOiBhO1xuXG4gIHZhciBBID0gc3RhdHMuZGlzdC5tYXQoWCksXG4gICAgICBCID0gc3RhdHMuZGlzdC5tYXQoWSksXG4gICAgICBuID0gQS5sZW5ndGgsXG4gICAgICBpLCBhYSwgYmIsIGFiO1xuXG4gIGZvciAoaT0wLCBhYT0wLCBiYj0wLCBhYj0wOyBpPG47ICsraSkge1xuICAgIGFhICs9IEFbaV0qQVtpXTtcbiAgICBiYiArPSBCW2ldKkJbaV07XG4gICAgYWIgKz0gQVtpXSpCW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydChhYiAvIE1hdGguc3FydChhYSpiYikpO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgdmVjdG9yIGRpc3RhbmNlIGJldHdlZW4gdHdvIGFycmF5cyBvZiBudW1iZXJzLlxuLy8gRGVmYXVsdCBpcyBFdWNsaWRlYW4gKGV4cD0yKSBkaXN0YW5jZSwgY29uZmlndXJhYmxlIHZpYSBleHAgYXJndW1lbnQuXG5zdGF0cy5kaXN0ID0gZnVuY3Rpb24odmFsdWVzLCBhLCBiLCBleHApIHtcbiAgdmFyIGYgPSB1dGlsLmlzRnVuY3Rpb24oYikgfHwgdXRpbC5pc1N0cmluZyhiKSxcbiAgICAgIFggPSB2YWx1ZXMsXG4gICAgICBZID0gZiA/IHZhbHVlcyA6IGEsXG4gICAgICBlID0gZiA/IGV4cCA6IGIsXG4gICAgICBMMiA9IGUgPT09IDIgfHwgZSA9PSBudWxsLFxuICAgICAgbiA9IHZhbHVlcy5sZW5ndGgsIHMgPSAwLCBkLCBpO1xuICBpZiAoZikge1xuICAgIGEgPSB1dGlsLiQoYSk7XG4gICAgYiA9IHV0aWwuJChiKTtcbiAgfVxuICBmb3IgKGk9MDsgaTxuOyArK2kpIHtcbiAgICBkID0gZiA/IChhKFhbaV0pLWIoWVtpXSkpIDogKFhbaV0tWVtpXSk7XG4gICAgcyArPSBMMiA/IGQqZCA6IE1hdGgucG93KE1hdGguYWJzKGQpLCBlKTtcbiAgfVxuICByZXR1cm4gTDIgPyBNYXRoLnNxcnQocykgOiBNYXRoLnBvdyhzLCAxL2UpO1xufTtcblxuLy8gQ29uc3RydWN0IGEgbWVhbi1jZW50ZXJlZCBkaXN0YW5jZSBtYXRyaXggZm9yIGFuIGFycmF5IG9mIG51bWJlcnMuXG5zdGF0cy5kaXN0Lm1hdCA9IGZ1bmN0aW9uKFgpIHtcbiAgdmFyIG4gPSBYLmxlbmd0aCxcbiAgICAgIG0gPSBuKm4sXG4gICAgICBBID0gQXJyYXkobSksXG4gICAgICBSID0gZ2VuLnplcm9zKG4pLFxuICAgICAgTSA9IDAsIHYsIGksIGo7XG5cbiAgZm9yIChpPTA7IGk8bjsgKytpKSB7XG4gICAgQVtpKm4raV0gPSAwO1xuICAgIGZvciAoaj1pKzE7IGo8bjsgKytqKSB7XG4gICAgICBBW2kqbitqXSA9ICh2ID0gTWF0aC5hYnMoWFtpXSAtIFhbal0pKTtcbiAgICAgIEFbaipuK2ldID0gdjtcbiAgICAgIFJbaV0gKz0gdjtcbiAgICAgIFJbal0gKz0gdjtcbiAgICB9XG4gIH1cblxuICBmb3IgKGk9MDsgaTxuOyArK2kpIHtcbiAgICBNICs9IFJbaV07XG4gICAgUltpXSAvPSBuO1xuICB9XG4gIE0gLz0gbTtcblxuICBmb3IgKGk9MDsgaTxuOyArK2kpIHtcbiAgICBmb3IgKGo9aTsgajxuOyArK2opIHtcbiAgICAgIEFbaSpuK2pdICs9IE0gLSBSW2ldIC0gUltqXTtcbiAgICAgIEFbaipuK2ldID0gQVtpKm4ral07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEE7XG59O1xuXG4vLyBDb21wdXRlIHRoZSBTaGFubm9uIGVudHJvcHkgKGxvZyBiYXNlIDIpIG9mIGFuIGFycmF5IG9mIGNvdW50cy5cbnN0YXRzLmVudHJvcHkgPSBmdW5jdGlvbihjb3VudHMsIGYpIHtcbiAgZiA9IHV0aWwuJChmKTtcbiAgdmFyIGksIHAsIHMgPSAwLCBIID0gMCwgbiA9IGNvdW50cy5sZW5ndGg7XG4gIGZvciAoaT0wOyBpPG47ICsraSkge1xuICAgIHMgKz0gKGYgPyBmKGNvdW50c1tpXSkgOiBjb3VudHNbaV0pO1xuICB9XG4gIGlmIChzID09PSAwKSByZXR1cm4gMDtcbiAgZm9yIChpPTA7IGk8bjsgKytpKSB7XG4gICAgcCA9IChmID8gZihjb3VudHNbaV0pIDogY291bnRzW2ldKSAvIHM7XG4gICAgaWYgKHApIEggKz0gcCAqIE1hdGgubG9nKHApO1xuICB9XG4gIHJldHVybiAtSCAvIE1hdGguTE4yO1xufTtcblxuLy8gQ29tcHV0ZSB0aGUgbXV0dWFsIGluZm9ybWF0aW9uIGJldHdlZW4gdHdvIGRpc2NyZXRlIHZhcmlhYmxlcy5cbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvcm0gW01JLCBNSV9kaXN0YW5jZV1cbi8vIE1JX2Rpc3RhbmNlIGlzIGRlZmluZWQgYXMgMSAtIEkoYSxiKSAvIEgoYSxiKS5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTXV0dWFsX2luZm9ybWF0aW9uXG5zdGF0cy5tdXR1YWwgPSBmdW5jdGlvbih2YWx1ZXMsIGEsIGIsIGNvdW50cykge1xuICB2YXIgeCA9IGNvdW50cyA/IHZhbHVlcy5tYXAodXRpbC4kKGEpKSA6IHZhbHVlcyxcbiAgICAgIHkgPSBjb3VudHMgPyB2YWx1ZXMubWFwKHV0aWwuJChiKSkgOiBhLFxuICAgICAgeiA9IGNvdW50cyA/IHZhbHVlcy5tYXAodXRpbC4kKGNvdW50cykpIDogYjtcblxuICB2YXIgcHggPSB7fSxcbiAgICAgIHB5ID0ge30sXG4gICAgICBuID0gei5sZW5ndGgsXG4gICAgICBzID0gMCwgSSA9IDAsIEggPSAwLCBwLCB0LCBpO1xuXG4gIGZvciAoaT0wOyBpPG47ICsraSkge1xuICAgIHB4W3hbaV1dID0gMDtcbiAgICBweVt5W2ldXSA9IDA7XG4gIH1cblxuICBmb3IgKGk9MDsgaTxuOyArK2kpIHtcbiAgICBweFt4W2ldXSArPSB6W2ldO1xuICAgIHB5W3lbaV1dICs9IHpbaV07XG4gICAgcyArPSB6W2ldO1xuICB9XG5cbiAgdCA9IDEgLyAocyAqIE1hdGguTE4yKTtcbiAgZm9yIChpPTA7IGk8bjsgKytpKSB7XG4gICAgaWYgKHpbaV0gPT09IDApIGNvbnRpbnVlO1xuICAgIHAgPSAocyAqIHpbaV0pIC8gKHB4W3hbaV1dICogcHlbeVtpXV0pO1xuICAgIEkgKz0geltpXSAqIHQgKiBNYXRoLmxvZyhwKTtcbiAgICBIICs9IHpbaV0gKiB0ICogTWF0aC5sb2coeltpXS9zKTtcbiAgfVxuXG4gIHJldHVybiBbSSwgMSArIEkvSF07XG59O1xuXG4vLyBDb21wdXRlIHRoZSBtdXR1YWwgaW5mb3JtYXRpb24gYmV0d2VlbiB0d28gZGlzY3JldGUgdmFyaWFibGVzLlxuc3RhdHMubXV0dWFsLmluZm8gPSBmdW5jdGlvbih2YWx1ZXMsIGEsIGIsIGNvdW50cykge1xuICByZXR1cm4gc3RhdHMubXV0dWFsKHZhbHVlcywgYSwgYiwgY291bnRzKVswXTtcbn07XG5cbi8vIENvbXB1dGUgdGhlIG11dHVhbCBpbmZvcm1hdGlvbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byBkaXNjcmV0ZSB2YXJpYWJsZXMuXG4vLyBNSV9kaXN0YW5jZSBpcyBkZWZpbmVkIGFzIDEgLSBJKGEsYikgLyBIKGEsYikuXG5zdGF0cy5tdXR1YWwuZGlzdCA9IGZ1bmN0aW9uKHZhbHVlcywgYSwgYiwgY291bnRzKSB7XG4gIHJldHVybiBzdGF0cy5tdXR1YWwodmFsdWVzLCBhLCBiLCBjb3VudHMpWzFdO1xufTtcblxuLy8gQ29tcHV0ZSBhIHByb2ZpbGUgb2Ygc3VtbWFyeSBzdGF0aXN0aWNzIGZvciBhIHZhcmlhYmxlLlxuc3RhdHMucHJvZmlsZSA9IGZ1bmN0aW9uKHZhbHVlcywgZikge1xuICB2YXIgbWVhbiA9IDAsXG4gICAgICB2YWxpZCA9IDAsXG4gICAgICBtaXNzaW5nID0gMCxcbiAgICAgIGRpc3RpbmN0ID0gMCxcbiAgICAgIG1pbiA9IG51bGwsXG4gICAgICBtYXggPSBudWxsLFxuICAgICAgTTIgPSAwLFxuICAgICAgdmFscyA9IFtdLFxuICAgICAgdSA9IHt9LCBkZWx0YSwgc2QsIGksIHYsIHg7XG5cbiAgLy8gY29tcHV0ZSBzdW1tYXJ5IHN0YXRzXG4gIGZvciAoaT0wOyBpPHZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgIHYgPSBmID8gZih2YWx1ZXNbaV0pIDogdmFsdWVzW2ldO1xuXG4gICAgLy8gdXBkYXRlIHVuaXF1ZSB2YWx1ZXNcbiAgICB1W3ZdID0gKHYgaW4gdSkgPyB1W3ZdICsgMSA6IChkaXN0aW5jdCArPSAxLCAxKTtcblxuICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICsrbWlzc2luZztcbiAgICB9IGVsc2UgaWYgKHV0aWwuaXNWYWxpZCh2KSkge1xuICAgICAgLy8gdXBkYXRlIHN0YXRzXG4gICAgICB4ID0gKHR5cGVvZiB2ID09PSAnc3RyaW5nJykgPyB2Lmxlbmd0aCA6IHY7XG4gICAgICBpZiAobWluPT09bnVsbCB8fCB4IDwgbWluKSBtaW4gPSB4O1xuICAgICAgaWYgKG1heD09PW51bGwgfHwgeCA+IG1heCkgbWF4ID0geDtcbiAgICAgIGRlbHRhID0geCAtIG1lYW47XG4gICAgICBtZWFuID0gbWVhbiArIGRlbHRhIC8gKCsrdmFsaWQpO1xuICAgICAgTTIgPSBNMiArIGRlbHRhICogKHggLSBtZWFuKTtcbiAgICAgIHZhbHMucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgTTIgPSBNMiAvICh2YWxpZCAtIDEpO1xuICBzZCA9IE1hdGguc3FydChNMik7XG5cbiAgLy8gc29ydCB2YWx1ZXMgZm9yIG1lZGlhbiBhbmQgaXFyXG4gIHZhbHMuc29ydCh1dGlsLmNtcCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAgICAgdHlwZSh2YWx1ZXMsIGYpLFxuICAgIHVuaXF1ZTogICB1LFxuICAgIGNvdW50OiAgICB2YWx1ZXMubGVuZ3RoLFxuICAgIHZhbGlkOiAgICB2YWxpZCxcbiAgICBtaXNzaW5nOiAgbWlzc2luZyxcbiAgICBkaXN0aW5jdDogZGlzdGluY3QsXG4gICAgbWluOiAgICAgIG1pbixcbiAgICBtYXg6ICAgICAgbWF4LFxuICAgIG1lYW46ICAgICBtZWFuLFxuICAgIHN0ZGV2OiAgICBzZCxcbiAgICBtZWRpYW46ICAgKHYgPSBzdGF0cy5xdWFudGlsZSh2YWxzLCAwLjUpKSxcbiAgICBxMTogICAgICAgc3RhdHMucXVhbnRpbGUodmFscywgMC4yNSksXG4gICAgcTM6ICAgICAgIHN0YXRzLnF1YW50aWxlKHZhbHMsIDAuNzUpLFxuICAgIG1vZGVza2V3OiBzZCA9PT0gMCA/IDAgOiAobWVhbiAtIHYpIC8gc2RcbiAgfTtcbn07XG5cbi8vIENvbXB1dGUgcHJvZmlsZXMgZm9yIGFsbCB2YXJpYWJsZXMgaW4gYSBkYXRhIHNldC5cbnN0YXRzLnN1bW1hcnkgPSBmdW5jdGlvbihkYXRhLCBmaWVsZHMpIHtcbiAgZmllbGRzID0gZmllbGRzIHx8IHV0aWwua2V5cyhkYXRhWzBdKTtcbiAgdmFyIHMgPSBmaWVsZHMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICB2YXIgcCA9IHN0YXRzLnByb2ZpbGUoZGF0YSwgdXRpbC4kKGYpKTtcbiAgICByZXR1cm4gKHAuZmllbGQgPSBmLCBwKTtcbiAgfSk7XG4gIHJldHVybiAocy5fX3N1bW1hcnlfXyA9IHRydWUsIHMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdGF0cztcbiIsInZhciBkM190aW1lID0gcmVxdWlyZSgnZDMtdGltZScpO1xuXG52YXIgdGVtcERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgIGJhc2VEYXRlID0gbmV3IERhdGUoMCwgMCwgMSkuc2V0RnVsbFllYXIoMCksIC8vIEphbiAxLCAwIEFEXG4gICAgdXRjQmFzZURhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygwLCAwLCAxKSkuc2V0VVRDRnVsbFllYXIoMCk7XG5cbmZ1bmN0aW9uIGRhdGUoZCkge1xuICByZXR1cm4gKHRlbXBEYXRlLnNldFRpbWUoK2QpLCB0ZW1wRGF0ZSk7XG59XG5cbi8vIGNyZWF0ZSBhIHRpbWUgdW5pdCBlbnRyeVxuZnVuY3Rpb24gZW50cnkodHlwZSwgZGF0ZSwgdW5pdCwgc3RlcCwgbWluLCBtYXgpIHtcbiAgdmFyIGUgPSB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBkYXRlOiBkYXRlLFxuICAgIHVuaXQ6IHVuaXRcbiAgfTtcbiAgaWYgKHN0ZXApIHtcbiAgICBlLnN0ZXAgPSBzdGVwO1xuICB9IGVsc2Uge1xuICAgIGUubWluc3RlcCA9IDE7XG4gIH1cbiAgaWYgKG1pbiAhPSBudWxsKSBlLm1pbiA9IG1pbjtcbiAgaWYgKG1heCAhPSBudWxsKSBlLm1heCA9IG1heDtcbiAgcmV0dXJuIGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0eXBlLCB1bml0LCBiYXNlLCBzdGVwLCBtaW4sIG1heCkge1xuICByZXR1cm4gZW50cnkodHlwZSxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiB1bml0Lm9mZnNldChiYXNlLCBkKTsgfSxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiB1bml0LmNvdW50KGJhc2UsIGQpOyB9LFxuICAgIHN0ZXAsIG1pbiwgbWF4KTtcbn1cblxudmFyIGxvY2FsZSA9IFtcbiAgY3JlYXRlKCdzZWNvbmQnLCBkM190aW1lLnNlY29uZCwgYmFzZURhdGUpLFxuICBjcmVhdGUoJ21pbnV0ZScsIGQzX3RpbWUubWludXRlLCBiYXNlRGF0ZSksXG4gIGNyZWF0ZSgnaG91cicsICAgZDNfdGltZS5ob3VyLCAgIGJhc2VEYXRlKSxcbiAgY3JlYXRlKCdkYXknLCAgICBkM190aW1lLmRheSwgICAgYmFzZURhdGUsIFsxLCA3XSksXG4gIGNyZWF0ZSgnbW9udGgnLCAgZDNfdGltZS5tb250aCwgIGJhc2VEYXRlLCBbMSwgMywgNl0pLFxuICBjcmVhdGUoJ3llYXInLCAgIGQzX3RpbWUueWVhciwgICBiYXNlRGF0ZSksXG5cbiAgLy8gcGVyaW9kaWMgdW5pdHNcbiAgZW50cnkoJ3NlY29uZHMnLFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIG5ldyBEYXRlKDE5NzAsIDAsIDEsIDAsIDAsIGQpOyB9LFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRhdGUoZCkuZ2V0U2Vjb25kcygpOyB9LFxuICAgIG51bGwsIDAsIDU5XG4gICksXG4gIGVudHJ5KCdtaW51dGVzJyxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiBuZXcgRGF0ZSgxOTcwLCAwLCAxLCAwLCBkKTsgfSxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiBkYXRlKGQpLmdldE1pbnV0ZXMoKTsgfSxcbiAgICBudWxsLCAwLCA1OVxuICApLFxuICBlbnRyeSgnaG91cnMnLFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIG5ldyBEYXRlKDE5NzAsIDAsIDEsIGQpOyB9LFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRhdGUoZCkuZ2V0SG91cnMoKTsgfSxcbiAgICBudWxsLCAwLCAyM1xuICApLFxuICBlbnRyeSgnd2Vla2RheXMnLFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIG5ldyBEYXRlKDE5NzAsIDAsIDQrZCk7IH0sXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gZGF0ZShkKS5nZXREYXkoKTsgfSxcbiAgICBbMV0sIDAsIDZcbiAgKSxcbiAgZW50cnkoJ2RhdGVzJyxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiBuZXcgRGF0ZSgxOTcwLCAwLCBkKTsgfSxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiBkYXRlKGQpLmdldERhdGUoKTsgfSxcbiAgICBbMV0sIDEsIDMxXG4gICksXG4gIGVudHJ5KCdtb250aHMnLFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIG5ldyBEYXRlKDE5NzAsIGQgJSAxMiwgMSk7IH0sXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gZGF0ZShkKS5nZXRNb250aCgpOyB9LFxuICAgIFsxXSwgMCwgMTFcbiAgKVxuXTtcblxudmFyIHV0YyA9IFtcbiAgY3JlYXRlKCdzZWNvbmQnLCBkM190aW1lLnV0Y1NlY29uZCwgdXRjQmFzZURhdGUpLFxuICBjcmVhdGUoJ21pbnV0ZScsIGQzX3RpbWUudXRjTWludXRlLCB1dGNCYXNlRGF0ZSksXG4gIGNyZWF0ZSgnaG91cicsICAgZDNfdGltZS51dGNIb3VyLCAgIHV0Y0Jhc2VEYXRlKSxcbiAgY3JlYXRlKCdkYXknLCAgICBkM190aW1lLnV0Y0RheSwgICAgdXRjQmFzZURhdGUsIFsxLCA3XSksXG4gIGNyZWF0ZSgnbW9udGgnLCAgZDNfdGltZS51dGNNb250aCwgIHV0Y0Jhc2VEYXRlLCBbMSwgMywgNl0pLFxuICBjcmVhdGUoJ3llYXInLCAgIGQzX3RpbWUudXRjWWVhciwgICB1dGNCYXNlRGF0ZSksXG5cbiAgLy8gcGVyaW9kaWMgdW5pdHNcbiAgZW50cnkoJ3NlY29uZHMnLFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDE5NzAsIDAsIDEsIDAsIDAsIGQpKTsgfSxcbiAgICBmdW5jdGlvbihkKSB7IHJldHVybiBkYXRlKGQpLmdldFVUQ1NlY29uZHMoKTsgfSxcbiAgICBudWxsLCAwLCA1OVxuICApLFxuICBlbnRyeSgnbWludXRlcycsXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk3MCwgMCwgMSwgMCwgZCkpOyB9LFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRhdGUoZCkuZ2V0VVRDTWludXRlcygpOyB9LFxuICAgIG51bGwsIDAsIDU5XG4gICksXG4gIGVudHJ5KCdob3VycycsXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk3MCwgMCwgMSwgZCkpOyB9LFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRhdGUoZCkuZ2V0VVRDSG91cnMoKTsgfSxcbiAgICBudWxsLCAwLCAyM1xuICApLFxuICBlbnRyeSgnd2Vla2RheXMnLFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDE5NzAsIDAsIDQrZCkpOyB9LFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRhdGUoZCkuZ2V0VVRDRGF5KCk7IH0sXG4gICAgWzFdLCAwLCA2XG4gICksXG4gIGVudHJ5KCdkYXRlcycsXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk3MCwgMCwgZCkpOyB9LFxuICAgIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGRhdGUoZCkuZ2V0VVRDRGF0ZSgpOyB9LFxuICAgIFsxXSwgMSwgMzFcbiAgKSxcbiAgZW50cnkoJ21vbnRocycsXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk3MCwgZCAlIDEyLCAxKSk7IH0sXG4gICAgZnVuY3Rpb24oZCkgeyByZXR1cm4gZGF0ZShkKS5nZXRVVENNb250aCgpOyB9LFxuICAgIFsxXSwgMCwgMTFcbiAgKVxuXTtcblxudmFyIFNURVBTID0gW1xuICBbMzE1MzZlNiwgNV0sICAvLyAxLXllYXJcbiAgWzc3NzZlNiwgNF0sICAgLy8gMy1tb250aFxuICBbMjU5MmU2LCA0XSwgICAvLyAxLW1vbnRoXG4gIFsxMjA5NmU1LCAzXSwgIC8vIDItd2Vla1xuICBbNjA0OGU1LCAzXSwgICAvLyAxLXdlZWtcbiAgWzE3MjhlNSwgM10sICAgLy8gMi1kYXlcbiAgWzg2NGU1LCAzXSwgICAgLy8gMS1kYXlcbiAgWzQzMmU1LCAyXSwgICAgLy8gMTItaG91clxuICBbMjE2ZTUsIDJdLCAgICAvLyA2LWhvdXJcbiAgWzEwOGU1LCAyXSwgICAgLy8gMy1ob3VyXG4gIFszNmU1LCAyXSwgICAgIC8vIDEtaG91clxuICBbMThlNSwgMV0sICAgICAvLyAzMC1taW51dGVcbiAgWzllNSwgMV0sICAgICAgLy8gMTUtbWludXRlXG4gIFszZTUsIDFdLCAgICAgIC8vIDUtbWludXRlXG4gIFs2ZTQsIDFdLCAgICAgIC8vIDEtbWludXRlXG4gIFszZTQsIDBdLCAgICAgIC8vIDMwLXNlY29uZFxuICBbMTVlMywgMF0sICAgICAvLyAxNS1zZWNvbmRcbiAgWzVlMywgMF0sICAgICAgLy8gNS1zZWNvbmRcbiAgWzFlMywgMF0gICAgICAgLy8gMS1zZWNvbmRcbl07XG5cbmZ1bmN0aW9uIGZpbmQodW5pdHMsIHNwYW4sIG1pbmIsIG1heGIpIHtcbiAgdmFyIHN0ZXAgPSBTVEVQU1swXSwgaSwgbiwgYmlucztcblxuICBmb3IgKGk9MSwgbj1TVEVQUy5sZW5ndGg7IGk8bjsgKytpKSB7XG4gICAgc3RlcCA9IFNURVBTW2ldO1xuICAgIGlmIChzcGFuID4gc3RlcFswXSkge1xuICAgICAgYmlucyA9IHNwYW4gLyBzdGVwWzBdO1xuICAgICAgaWYgKGJpbnMgPiBtYXhiKSB7XG4gICAgICAgIHJldHVybiB1bml0c1tTVEVQU1tpLTFdWzFdXTtcbiAgICAgIH1cbiAgICAgIGlmIChiaW5zID49IG1pbmIpIHtcbiAgICAgICAgcmV0dXJuIHVuaXRzW3N0ZXBbMV1dO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdW5pdHNbU1RFUFNbbi0xXVsxXV07XG59XG5cbmZ1bmN0aW9uIHRvVW5pdE1hcCh1bml0cykge1xuICB2YXIgbWFwID0ge30sIGksIG47XG4gIGZvciAoaT0wLCBuPXVuaXRzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICBtYXBbdW5pdHNbaV0udHlwZV0gPSB1bml0c1tpXTtcbiAgfVxuICBtYXAuZmluZCA9IGZ1bmN0aW9uKHNwYW4sIG1pbmIsIG1heGIpIHtcbiAgICByZXR1cm4gZmluZCh1bml0cywgc3BhbiwgbWluYiwgbWF4Yik7XG4gIH07XG4gIHJldHVybiBtYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Vbml0TWFwKGxvY2FsZSk7XG5tb2R1bGUuZXhwb3J0cy51dGMgPSB0b1VuaXRNYXAodXRjKTtcbiIsInZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKSxcbiAgICB0aW1lID0gcmVxdWlyZSgnLi90aW1lJyksXG4gICAgdXRjID0gdGltZS51dGM7XG5cbnZhciB1ID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcblxudmFyIEZOQU1FID0gJ19fbmFtZV9fJztcblxudS5uYW1lZGZ1bmMgPSBmdW5jdGlvbihuYW1lLCBmKSB7IHJldHVybiAoZltGTkFNRV0gPSBuYW1lLCBmKTsgfTtcblxudS5uYW1lID0gZnVuY3Rpb24oZikgeyByZXR1cm4gZj09bnVsbCA/IG51bGwgOiBmW0ZOQU1FXTsgfTtcblxudS5pZGVudGl0eSA9IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHg7IH07XG5cbnUudHJ1ZSA9IHUubmFtZWRmdW5jKCd0cnVlJywgZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9KTtcblxudS5mYWxzZSA9IHUubmFtZWRmdW5jKCdmYWxzZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0pO1xuXG51LmR1cGxpY2F0ZSA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG5cbnUuZXF1YWwgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYik7XG59O1xuXG51LmV4dGVuZCA9IGZ1bmN0aW9uKG9iaikge1xuICBmb3IgKHZhciB4LCBuYW1lLCBpPTEsIGxlbj1hcmd1bWVudHMubGVuZ3RoOyBpPGxlbjsgKytpKSB7XG4gICAgeCA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKG5hbWUgaW4geCkgeyBvYmpbbmFtZV0gPSB4W25hbWVdOyB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbnUubGVuZ3RoID0gZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCAhPSBudWxsICYmIHgubGVuZ3RoICE9IG51bGwgPyB4Lmxlbmd0aCA6IG51bGw7XG59O1xuXG51LmtleXMgPSBmdW5jdGlvbih4KSB7XG4gIHZhciBrZXlzID0gW10sIGs7XG4gIGZvciAoayBpbiB4KSBrZXlzLnB1c2goayk7XG4gIHJldHVybiBrZXlzO1xufTtcblxudS52YWxzID0gZnVuY3Rpb24oeCkge1xuICB2YXIgdmFscyA9IFtdLCBrO1xuICBmb3IgKGsgaW4geCkgdmFscy5wdXNoKHhba10pO1xuICByZXR1cm4gdmFscztcbn07XG5cbnUudG9NYXAgPSBmdW5jdGlvbihsaXN0LCBmKSB7XG4gIHJldHVybiAoZiA9IHUuJChmKSkgP1xuICAgIGxpc3QucmVkdWNlKGZ1bmN0aW9uKG9iaiwgeCkgeyByZXR1cm4gKG9ialtmKHgpXSA9IDEsIG9iaik7IH0sIHt9KSA6XG4gICAgbGlzdC5yZWR1Y2UoZnVuY3Rpb24ob2JqLCB4KSB7IHJldHVybiAob2JqW3hdID0gMSwgb2JqKTsgfSwge30pO1xufTtcblxudS5rZXlzdHIgPSBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgLy8gdXNlIHRvIGVuc3VyZSBjb25zaXN0ZW50IGtleSBnZW5lcmF0aW9uIGFjcm9zcyBtb2R1bGVzXG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aDtcbiAgaWYgKCFuKSByZXR1cm4gJyc7XG4gIGZvciAodmFyIHM9U3RyaW5nKHZhbHVlc1swXSksIGk9MTsgaTxuOyArK2kpIHtcbiAgICBzICs9ICd8JyArIFN0cmluZyh2YWx1ZXNbaV0pO1xuICB9XG4gIHJldHVybiBzO1xufTtcblxuLy8gdHlwZSBjaGVja2luZyBmdW5jdGlvbnNcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudS5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbn07XG5cbnUuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxudS5pc1N0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxudS5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnUuaXNOdW1iZXIgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG51LmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2UgfHwgdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn07XG5cbnUuaXNEYXRlID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5cbnUuaXNWYWxpZCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09PSBvYmo7XG59O1xuXG51LmlzQnVmZmVyID0gKGJ1ZmZlci5CdWZmZXIgJiYgYnVmZmVyLkJ1ZmZlci5pc0J1ZmZlcikgfHwgdS5mYWxzZTtcblxuLy8gdHlwZSBjb2VyY2lvbiBmdW5jdGlvbnNcblxudS5udW1iZXIgPSBmdW5jdGlvbihzKSB7XG4gIHJldHVybiBzID09IG51bGwgfHwgcyA9PT0gJycgPyBudWxsIDogK3M7XG59O1xuXG51LmJvb2xlYW4gPSBmdW5jdGlvbihzKSB7XG4gIHJldHVybiBzID09IG51bGwgfHwgcyA9PT0gJycgPyBudWxsIDogcz09PSdmYWxzZScgPyBmYWxzZSA6ICEhcztcbn07XG5cbnUuZGF0ZSA9IGZ1bmN0aW9uKHMpIHtcbiAgcmV0dXJuIHMgPT0gbnVsbCB8fCBzID09PSAnJyA/IG51bGwgOiBEYXRlLnBhcnNlKHMpO1xufTtcblxudS5hcnJheSA9IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHggIT0gbnVsbCA/ICh1LmlzQXJyYXkoeCkgPyB4IDogW3hdKSA6IFtdO1xufTtcblxudS5zdHIgPSBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB1LmlzQXJyYXkoeCkgPyAnWycgKyB4Lm1hcCh1LnN0cikgKyAnXSdcbiAgICA6IHUuaXNPYmplY3QoeCkgPyBKU09OLnN0cmluZ2lmeSh4KVxuICAgIDogdS5pc1N0cmluZyh4KSA/ICgnXFwnJyt1dGlsX2VzY2FwZV9zdHIoeCkrJ1xcJycpIDogeDtcbn07XG5cbnZhciBlc2NhcGVfc3RyX3JlID0gLyhefFteXFxcXF0pJy9nO1xuXG5mdW5jdGlvbiB1dGlsX2VzY2FwZV9zdHIoeCkge1xuICByZXR1cm4geC5yZXBsYWNlKGVzY2FwZV9zdHJfcmUsICckMVxcXFxcXCcnKTtcbn1cblxuLy8gZGF0YSBhY2Nlc3MgZnVuY3Rpb25zXG5cbnZhciBmaWVsZF9yZSA9IC9cXFsoLio/KVxcXXxbXi5cXFtdKy9nO1xuXG51LmZpZWxkID0gZnVuY3Rpb24oZikge1xuICByZXR1cm4gU3RyaW5nKGYpLm1hdGNoKGZpZWxkX3JlKS5tYXAoZnVuY3Rpb24oZCkge1xuICAgIHJldHVybiBkWzBdICE9PSAnWycgPyBkIDpcbiAgICAgIGRbMV0gIT09IFwiJ1wiICYmIGRbMV0gIT09ICdcIicgPyBkLnNsaWNlKDEsIC0xKSA6XG4gICAgICBkLnNsaWNlKDIsIC0yKS5yZXBsYWNlKC9cXFxcKFtcIiddKS9nLCAnJDEnKTtcbiAgfSk7XG59O1xuXG51LmFjY2Vzc29yID0gZnVuY3Rpb24oZikge1xuICB2YXIgcztcbiAgcmV0dXJuIGY9PW51bGwgfHwgdS5pc0Z1bmN0aW9uKGYpID8gZiA6XG4gICAgdS5uYW1lZGZ1bmMoZiwgKHMgPSB1LmZpZWxkKGYpKS5sZW5ndGggPiAxID9cbiAgICAgIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHMucmVkdWNlKGZ1bmN0aW9uKHgsZikgeyByZXR1cm4geFtmXTsgfSwgeCk7IH0gOlxuICAgICAgZnVuY3Rpb24oeCkgeyByZXR1cm4geFtmXTsgfVxuICAgICk7XG59O1xuXG4vLyBzaG9ydC1jdXQgZm9yIGFjY2Vzc29yXG51LiQgPSB1LmFjY2Vzc29yO1xuXG51Lm11dGF0b3IgPSBmdW5jdGlvbihmKSB7XG4gIHZhciBzO1xuICByZXR1cm4gdS5pc1N0cmluZyhmKSAmJiAocz11LmZpZWxkKGYpKS5sZW5ndGggPiAxID9cbiAgICBmdW5jdGlvbih4LCB2KSB7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8cy5sZW5ndGgtMTsgKytpKSB4ID0geFtzW2ldXTtcbiAgICAgIHhbc1tpXV0gPSB2O1xuICAgIH0gOlxuICAgIGZ1bmN0aW9uKHgsIHYpIHsgeFtmXSA9IHY7IH07XG59O1xuXG5cbnUuJGZ1bmMgPSBmdW5jdGlvbihuYW1lLCBvcCkge1xuICByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIGYgPSB1LiQoZikgfHwgdS5pZGVudGl0eTtcbiAgICB2YXIgbiA9IG5hbWUgKyAodS5uYW1lKGYpID8gJ18nK3UubmFtZShmKSA6ICcnKTtcbiAgICByZXR1cm4gdS5uYW1lZGZ1bmMobiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gb3AoZihkKSk7IH0pO1xuICB9O1xufTtcblxudS4kdmFsaWQgID0gdS4kZnVuYygndmFsaWQnLCB1LmlzVmFsaWQpO1xudS4kbGVuZ3RoID0gdS4kZnVuYygnbGVuZ3RoJywgdS5sZW5ndGgpO1xuXG51LiRpbiA9IGZ1bmN0aW9uKGYsIHZhbHVlcykge1xuICBmID0gdS4kKGYpO1xuICB2YXIgbWFwID0gdS5pc0FycmF5KHZhbHVlcykgPyB1LnRvTWFwKHZhbHVlcykgOiB2YWx1ZXM7XG4gIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiAhIW1hcFtmKGQpXTsgfTtcbn07XG5cbnUuJHllYXIgICA9IHUuJGZ1bmMoJ3llYXInLCB0aW1lLnllYXIudW5pdCk7XG51LiRtb250aCAgPSB1LiRmdW5jKCdtb250aCcsIHRpbWUubW9udGhzLnVuaXQpO1xudS4kZGF0ZSAgID0gdS4kZnVuYygnZGF0ZScsIHRpbWUuZGF0ZXMudW5pdCk7XG51LiRkYXkgICAgPSB1LiRmdW5jKCdkYXknLCB0aW1lLndlZWtkYXlzLnVuaXQpO1xudS4kaG91ciAgID0gdS4kZnVuYygnaG91cicsIHRpbWUuaG91cnMudW5pdCk7XG51LiRtaW51dGUgPSB1LiRmdW5jKCdtaW51dGUnLCB0aW1lLm1pbnV0ZXMudW5pdCk7XG51LiRzZWNvbmQgPSB1LiRmdW5jKCdzZWNvbmQnLCB0aW1lLnNlY29uZHMudW5pdCk7XG5cbnUuJHV0Y1llYXIgICA9IHUuJGZ1bmMoJ3V0Y1llYXInLCB1dGMueWVhci51bml0KTtcbnUuJHV0Y01vbnRoICA9IHUuJGZ1bmMoJ3V0Y01vbnRoJywgdXRjLm1vbnRocy51bml0KTtcbnUuJHV0Y0RhdGUgICA9IHUuJGZ1bmMoJ3V0Y0RhdGUnLCB1dGMuZGF0ZXMudW5pdCk7XG51LiR1dGNEYXkgICAgPSB1LiRmdW5jKCd1dGNEYXknLCB1dGMud2Vla2RheXMudW5pdCk7XG51LiR1dGNIb3VyICAgPSB1LiRmdW5jKCd1dGNIb3VyJywgdXRjLmhvdXJzLnVuaXQpO1xudS4kdXRjTWludXRlID0gdS4kZnVuYygndXRjTWludXRlJywgdXRjLm1pbnV0ZXMudW5pdCk7XG51LiR1dGNTZWNvbmQgPSB1LiRmdW5jKCd1dGNTZWNvbmQnLCB1dGMuc2Vjb25kcy51bml0KTtcblxuLy8gY29tcGFyaXNvbiAvIHNvcnRpbmcgZnVuY3Rpb25zXG5cbnUuY29tcGFyYXRvciA9IGZ1bmN0aW9uKHNvcnQpIHtcbiAgdmFyIHNpZ24gPSBbXTtcbiAgaWYgKHNvcnQgPT09IHVuZGVmaW5lZCkgc29ydCA9IFtdO1xuICBzb3J0ID0gdS5hcnJheShzb3J0KS5tYXAoZnVuY3Rpb24oZikge1xuICAgIHZhciBzID0gMTtcbiAgICBpZiAgICAgIChmWzBdID09PSAnLScpIHsgcyA9IC0xOyBmID0gZi5zbGljZSgxKTsgfVxuICAgIGVsc2UgaWYgKGZbMF0gPT09ICcrJykgeyBzID0gKzE7IGYgPSBmLnNsaWNlKDEpOyB9XG4gICAgc2lnbi5wdXNoKHMpO1xuICAgIHJldHVybiB1LmFjY2Vzc29yKGYpO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEsYikge1xuICAgIHZhciBpLCBuLCBmLCB4LCB5O1xuICAgIGZvciAoaT0wLCBuPXNvcnQubGVuZ3RoOyBpPG47ICsraSkge1xuICAgICAgZiA9IHNvcnRbaV07IHggPSBmKGEpOyB5ID0gZihiKTtcbiAgICAgIGlmICh4IDwgeSkgcmV0dXJuIC0xICogc2lnbltpXTtcbiAgICAgIGlmICh4ID4geSkgcmV0dXJuIHNpZ25baV07XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xufTtcblxudS5jbXAgPSBmdW5jdGlvbihhLCBiKSB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGEgPj0gYikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKGEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoYiA9PT0gbnVsbCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiBOYU47XG59O1xuXG51Lm51bWNtcCA9IGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9O1xuXG51LnN0YWJsZXNvcnQgPSBmdW5jdGlvbihhcnJheSwgc29ydEJ5LCBrZXlGbikge1xuICB2YXIgaW5kaWNlcyA9IGFycmF5LnJlZHVjZShmdW5jdGlvbihpZHgsIHYsIGkpIHtcbiAgICByZXR1cm4gKGlkeFtrZXlGbih2KV0gPSBpLCBpZHgpO1xuICB9LCB7fSk7XG5cbiAgYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHNhID0gc29ydEJ5KGEpLFxuICAgICAgICBzYiA9IHNvcnRCeShiKTtcbiAgICByZXR1cm4gc2EgPCBzYiA/IC0xIDogc2EgPiBzYiA/IDFcbiAgICAgICAgIDogKGluZGljZXNba2V5Rm4oYSldIC0gaW5kaWNlc1trZXlGbihiKV0pO1xuICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5cbi8vIHN0cmluZyBmdW5jdGlvbnNcblxudS5wYWQgPSBmdW5jdGlvbihzLCBsZW5ndGgsIHBvcywgcGFkY2hhcikge1xuICBwYWRjaGFyID0gcGFkY2hhciB8fCBcIiBcIjtcbiAgdmFyIGQgPSBsZW5ndGggLSBzLmxlbmd0aDtcbiAgaWYgKGQgPD0gMCkgcmV0dXJuIHM7XG4gIHN3aXRjaCAocG9zKSB7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gc3RycmVwKGQsIHBhZGNoYXIpICsgcztcbiAgICBjYXNlICdtaWRkbGUnOlxuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4gc3RycmVwKE1hdGguZmxvb3IoZC8yKSwgcGFkY2hhcikgK1xuICAgICAgICAgcyArIHN0cnJlcChNYXRoLmNlaWwoZC8yKSwgcGFkY2hhcik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzICsgc3RycmVwKGQsIHBhZGNoYXIpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdHJyZXAobiwgc3RyKSB7XG4gIHZhciBzID0gXCJcIiwgaTtcbiAgZm9yIChpPTA7IGk8bjsgKytpKSBzICs9IHN0cjtcbiAgcmV0dXJuIHM7XG59XG5cbnUudHJ1bmNhdGUgPSBmdW5jdGlvbihzLCBsZW5ndGgsIHBvcywgd29yZCwgZWxsaXBzaXMpIHtcbiAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICBpZiAobGVuIDw9IGxlbmd0aCkgcmV0dXJuIHM7XG4gIGVsbGlwc2lzID0gZWxsaXBzaXMgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhlbGxpcHNpcykgOiAnXFx1MjAyNic7XG4gIHZhciBsID0gTWF0aC5tYXgoMCwgbGVuZ3RoIC0gZWxsaXBzaXMubGVuZ3RoKTtcblxuICBzd2l0Y2ggKHBvcykge1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGVsbGlwc2lzICsgKHdvcmQgPyB0cnVuY2F0ZU9uV29yZChzLGwsMSkgOiBzLnNsaWNlKGxlbi1sKSk7XG4gICAgY2FzZSAnbWlkZGxlJzpcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgdmFyIGwxID0gTWF0aC5jZWlsKGwvMiksIGwyID0gTWF0aC5mbG9vcihsLzIpO1xuICAgICAgcmV0dXJuICh3b3JkID8gdHJ1bmNhdGVPbldvcmQocyxsMSkgOiBzLnNsaWNlKDAsbDEpKSArXG4gICAgICAgIGVsbGlwc2lzICsgKHdvcmQgPyB0cnVuY2F0ZU9uV29yZChzLGwyLDEpIDogcy5zbGljZShsZW4tbDIpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICh3b3JkID8gdHJ1bmNhdGVPbldvcmQocyxsKSA6IHMuc2xpY2UoMCxsKSkgKyBlbGxpcHNpcztcbiAgfVxufTtcblxuZnVuY3Rpb24gdHJ1bmNhdGVPbldvcmQocywgbGVuLCByZXYpIHtcbiAgdmFyIGNudCA9IDAsIHRvayA9IHMuc3BsaXQodHJ1bmNhdGVfd29yZF9yZSk7XG4gIGlmIChyZXYpIHtcbiAgICBzID0gKHRvayA9IHRvay5yZXZlcnNlKCkpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHcpIHsgY250ICs9IHcubGVuZ3RoOyByZXR1cm4gY250IDw9IGxlbjsgfSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH0gZWxzZSB7XG4gICAgcyA9IHRvay5maWx0ZXIoZnVuY3Rpb24odykgeyBjbnQgKz0gdy5sZW5ndGg7IHJldHVybiBjbnQgPD0gbGVuOyB9KTtcbiAgfVxuICByZXR1cm4gcy5sZW5ndGggPyBzLmpvaW4oJycpLnRyaW0oKSA6IHRva1swXS5zbGljZSgwLCBsZW4pO1xufVxuXG52YXIgdHJ1bmNhdGVfd29yZF9yZSA9IC8oW1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUyMDI4XFx1MjAyOVxcdTMwMDBcXHVGRUZGXSkvO1xuIiwiZXhwb3J0IGNvbnN0IEFHR1JFR0FURV9PUFMgPSBbXHJcbiAgJ3ZhbHVlcycsICdjb3VudCcsICd2YWxpZCcsICdtaXNzaW5nJywgJ2Rpc3RpbmN0JyxcclxuICAnc3VtJywgJ21lYW4nLCAnYXZlcmFnZScsICd2YXJpYW5jZScsICd2YXJpYW5jZXAnLCAnc3RkZXYnLFxyXG4gICdzdGRldnAnLCAnbWVkaWFuJywgJ3ExJywgJ3EzJywgJ21vZGVza2V3JywgJ21pbicsICdtYXgnLFxyXG4gICdhcmdtaW4nLCAnYXJnbWF4J1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIQVJFRF9ET01BSU5fT1BTID0gW1xyXG4gICdtZWFuJywgJ2F2ZXJhZ2UnLCAnc3RkZXYnLCAnc3RkZXZwJywgJ21lZGlhbicsICdxMScsICdxMycsICdtaW4nLCAnbWF4J1xyXG5dO1xyXG5cclxuLy8gVE9ETzogbW92ZSBzdXBwb3J0ZWRUeXBlcywgc3VwcG9ydGVkRW51bXMgZnJvbSBzY2hlbWEgdG8gaGVyZVxyXG4iLCJleHBvcnQgY29uc3QgTUFYQklOU19ERUZBVUxUID0gMTU7XHJcbiIsIi8qXHJcbiAqIENvbnN0YW50cyBhbmQgdXRpbGl0aWVzIGZvciBlbmNvZGluZyBjaGFubmVscyAoVmlzdWFsIHZhcmlhYmxlcylcclxuICogc3VjaCBhcyAneCcsICd5JywgJ2NvbG9yJy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgWCA9ICd4JztcclxuZXhwb3J0IGNvbnN0IFkgPSAneSc7XHJcbmV4cG9ydCBjb25zdCBST1cgPSAncm93JztcclxuZXhwb3J0IGNvbnN0IENPTFVNTiA9ICdjb2x1bW4nO1xyXG5leHBvcnQgY29uc3QgU0hBUEUgPSAnc2hhcGUnO1xyXG5leHBvcnQgY29uc3QgU0laRSA9ICdzaXplJztcclxuZXhwb3J0IGNvbnN0IENPTE9SID0gJ2NvbG9yJztcclxuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XHJcbmV4cG9ydCBjb25zdCBERVRBSUwgPSAnZGV0YWlsJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOTkVMUyA9IFtYLCBZLCBST1csIENPTFVNTiwgU0laRSwgU0hBUEUsIENPTE9SLCBURVhULCBERVRBSUxdO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2hhbm5lbCA9IHN0cmluZztcclxuXHJcbmludGVyZmFjZSBTdXBwb3J0ZWRSb2xlIHtcclxuICBbcm9sZTpzdHJpbmddOmJvb2xlYW47XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHdoZXRoZXIgYSBjaGFubmVsIHN1cHBvcnRzIGRpbWVuc2lvbiAvIG1lYXN1cmUgcm9sZVxyXG4gKiBAcGFyYW0gIHtFbmN0eXBlLlR5cGV9ICBjaGFubmVsXHJcbiAqIEByZXR1cm4ge1N1cHBvcnRlZFJvbGV9IEEgZGljdGlvbmFyeSBtYXBwaW5nIHJvbGUgdG8gYm9vbGVhbiB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUm9sZShjaGFubmVsOiBDaGFubmVsKTogU3VwcG9ydGVkUm9sZSB7XHJcbiAgc3dpdGNoIChjaGFubmVsKSB7XHJcbiAgICBjYXNlIFg6XHJcbiAgICBjYXNlIFk6XHJcbiAgICBjYXNlIENPTE9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgZGltZW5zaW9uOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFJPVzpcclxuICAgIGNhc2UgQ09MVU1OOlxyXG4gICAgY2FzZSBTSEFQRTpcclxuICAgIGNhc2UgREVUQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgIGRpbWVuc2lvbjogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSVpFOlxyXG4gICAgY2FzZSBURVhUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgZGltZW5zaW9uOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW5jb2RpbmcgY2hhbm5lbCcgKyBjaGFubmVsKTtcclxufVxyXG4iLCJpbXBvcnQge1NwZWN9IGZyb20gJy4uL3NjaGVtYS9zY2hlbWEnO1xyXG5pbXBvcnQge0Jpbn0gZnJvbSAnLi4vc2NoZW1hL2Jpbi5zY2hlbWEnO1xyXG5pbXBvcnQge0ZpZWxkRGVmfSBmcm9tICcuLi9zY2hlbWEvZmllbGRkZWYuc2NoZW1hJztcclxuXHJcbmltcG9ydCB7TUFYQklOU19ERUZBVUxUfSBmcm9tICcuLi9iaW4nO1xyXG5pbXBvcnQge0NPTFVNTiwgUk9XLCBYLCBZLCBDT0xPUiwgREVUQUlMLCBDaGFubmVsfSBmcm9tICcuLi9jaGFubmVsJztcclxuaW1wb3J0IHtTT1VSQ0UsIFNVTU1BUll9IGZyb20gJy4uL2RhdGEnO1xyXG5pbXBvcnQgKiBhcyB2bEZpZWxkRGVmIGZyb20gJy4uL2ZpZWxkZGVmJztcclxuaW1wb3J0ICogYXMgdmxFbmNvZGluZyBmcm9tICcuLi9lbmNvZGluZyc7XHJcbmltcG9ydCB7QVJFQSwgQkFSfSBmcm9tICcuLi9tYXJrdHlwZSc7XHJcbmltcG9ydCAqIGFzIHNjaGVtYSBmcm9tICcuLi9zY2hlbWEvc2NoZW1hJztcclxuaW1wb3J0ICogYXMgc2NoZW1hVXRpbCBmcm9tICcuLi9zY2hlbWEvc2NoZW1hdXRpbCc7XHJcbmltcG9ydCB7U3RhY2tQcm9wZXJ0aWVzfSBmcm9tICcuL3N0YWNrJztcclxuaW1wb3J0IHtnZXRGdWxsTmFtZX0gZnJvbSAnLi4vdHlwZSc7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgbW9kZWwgb2YgVmVnYS1MaXRlIHNwZWNpZmljYXRpb24gZm9yIHRoZSBjb21waWxlci5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG4gIF9zcGVjOiBTcGVjO1xyXG4gIF9zdGFjazogU3RhY2tQcm9wZXJ0aWVzO1xyXG5cclxuICAvLyBUT0RPOiBpbmNsdWRlIF9zdGFjaywgX2xheW91dCwgX3N0eWxlLCBldGMuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHNwZWM6IFNwZWMsIHRoZW1lPykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0gc2NoZW1hLmluc3RhbnRpYXRlKCk7XHJcbiAgICB0aGlzLl9zcGVjID0gc2NoZW1hVXRpbC5tZXJnZShkZWZhdWx0cywgdGhlbWUgfHwge30sIHNwZWMpO1xyXG4gICAgdGhpcy5fc3RhY2sgPSB0aGlzLmdldFN0YWNrUHJvcGVydGllcygpO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgc2hvcnQgdHlwZSB0byBmdWxsIHR5cGVcclxuICAgIHZsRW5jb2RpbmcuZm9yRWFjaCh0aGlzLl9zcGVjLmVuY29kaW5nLCBmdW5jdGlvbihmaWVsZERlZikge1xyXG4gICAgICBpZiAoZmllbGREZWYudHlwZSkge1xyXG4gICAgICAgIGZpZWxkRGVmLnR5cGUgPSBnZXRGdWxsTmFtZShmaWVsZERlZi50eXBlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHN0YWNrXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0YWNrUHJvcGVydGllcygpOiBTdGFja1Byb3BlcnRpZXMge1xyXG4gICAgdmFyIHN0YWNrID0gKHRoaXMuaGFzKENPTE9SKSkgPyBDT0xPUiA6ICh0aGlzLmhhcyhERVRBSUwpKSA/IERFVEFJTCA6IG51bGw7XHJcblxyXG4gICAgaWYgKHN0YWNrICYmXHJcbiAgICAgICAgKHRoaXMuaXMoQkFSKSB8fCB0aGlzLmlzKEFSRUEpKSAmJlxyXG4gICAgICAgIHRoaXMuY29uZmlnKCdzdGFjaycpICE9PSBmYWxzZSAmJlxyXG4gICAgICAgIHRoaXMuaXNBZ2dyZWdhdGUoKSkge1xyXG4gICAgICB2YXIgaXNYTWVhc3VyZSA9IHRoaXMuaXNNZWFzdXJlKFgpO1xyXG4gICAgICB2YXIgaXNZTWVhc3VyZSA9IHRoaXMuaXNNZWFzdXJlKFkpO1xyXG5cclxuICAgICAgaWYgKGlzWE1lYXN1cmUgJiYgIWlzWU1lYXN1cmUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZ3JvdXBieUNoYW5uZWw6IFksXHJcbiAgICAgICAgICBmaWVsZENoYW5uZWw6IFgsXHJcbiAgICAgICAgICBzdGFja0NoYW5uZWw6IHN0YWNrLFxyXG4gICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZygnc3RhY2snKVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNZTWVhc3VyZSAmJiAhaXNYTWVhc3VyZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBncm91cGJ5Q2hhbm5lbDogWCxcclxuICAgICAgICAgIGZpZWxkQ2hhbm5lbDogWSxcclxuICAgICAgICAgIHN0YWNrQ2hhbm5lbDogc3RhY2ssXHJcbiAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnKCdzdGFjaycpXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFjaygpOiBTdGFja1Byb3BlcnRpZXMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YWNrO1xyXG4gIH1cclxuXHJcbiAgdG9TcGVjKGV4Y2x1ZGVDb25maWc/LCBleGNsdWRlRGF0YT8pIHtcclxuICAgIHZhciBlbmNvZGluZyA9IHV0aWwuZHVwbGljYXRlKHRoaXMuX3NwZWMuZW5jb2RpbmcpLFxyXG4gICAgICBzcGVjOiBhbnk7XHJcblxyXG4gICAgc3BlYyA9IHtcclxuICAgICAgbWFya3R5cGU6IHRoaXMuX3NwZWMubWFya3R5cGUsXHJcbiAgICAgIGVuY29kaW5nOiBlbmNvZGluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWV4Y2x1ZGVDb25maWcpIHtcclxuICAgICAgc3BlYy5jb25maWcgPSB1dGlsLmR1cGxpY2F0ZSh0aGlzLl9zcGVjLmNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFleGNsdWRlRGF0YSkge1xyXG4gICAgICBzcGVjLmRhdGEgPSB1dGlsLmR1cGxpY2F0ZSh0aGlzLl9zcGVjLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBkZWZhdWx0c1xyXG4gICAgdmFyIGRlZmF1bHRzID0gc2NoZW1hLmluc3RhbnRpYXRlKCk7XHJcbiAgICByZXR1cm4gc2NoZW1hVXRpbC5zdWJ0cmFjdChzcGVjLCBkZWZhdWx0cyk7XHJcbiAgfVxyXG5cclxuICBtYXJrdHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zcGVjLm1hcmt0eXBlO1xyXG4gIH1cclxuXHJcbiAgaXMobSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NwZWMubWFya3R5cGUgPT09IG07XHJcbiAgfVxyXG5cclxuICBoYXMoY2hhbm5lbDogQ2hhbm5lbCkge1xyXG4gICAgLy8gZXF1aXZhbGVudCB0byBjYWxsaW5nIHZsZW5jLmhhcyh0aGlzLl9zcGVjLmVuY29kaW5nLCBjaGFubmVsKVxyXG4gICAgcmV0dXJuIHRoaXMuX3NwZWMuZW5jb2RpbmdbY2hhbm5lbF0uZmllbGQgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGZpZWxkRGVmKGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgIHJldHVybiB0aGlzLl9zcGVjLmVuY29kaW5nW2NoYW5uZWxdO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IFwiZmllbGRcIiByZWZlcmVuY2UgZm9yIHZlZ2FcclxuICBmaWVsZFJlZihjaGFubmVsOiBDaGFubmVsLCBvcHQ/KSB7XHJcbiAgICBvcHQgPSBvcHQgfHwge307XHJcbiAgICByZXR1cm4gdmxGaWVsZERlZi5maWVsZFJlZih0aGlzLl9zcGVjLmVuY29kaW5nW2NoYW5uZWxdLCBvcHQpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiByZXR1cm4ga2V5LXZhbHVlIHBhaXJzIG9mIGZpZWxkIG5hbWUgYW5kIGxpc3Qgb2YgZmllbGRzIG9mIHRoYXQgZmllbGQgbmFtZVxyXG4gICAqL1xyXG4gIGZpZWxkcygpIHtcclxuICAgIHJldHVybiB2bEVuY29kaW5nLmZpZWxkcyh0aGlzLl9zcGVjLmVuY29kaW5nKTtcclxuICB9XHJcblxyXG4gIGZpZWxkVGl0bGUoY2hhbm5lbDogQ2hhbm5lbCkge1xyXG4gICAgaWYgKHZsRmllbGREZWYuaXNDb3VudCh0aGlzLl9zcGVjLmVuY29kaW5nW2NoYW5uZWxdKSkge1xyXG4gICAgICByZXR1cm4gdmxGaWVsZERlZi5DT1VOVF9ESVNQTEFZTkFNRTtcclxuICAgIH1cclxuICAgIHZhciBmbiA9IHRoaXMuX3NwZWMuZW5jb2RpbmdbY2hhbm5lbF0uYWdncmVnYXRlIHx8IHRoaXMuX3NwZWMuZW5jb2RpbmdbY2hhbm5lbF0udGltZVVuaXQgfHwgKHRoaXMuX3NwZWMuZW5jb2RpbmdbY2hhbm5lbF0uYmluICYmICdiaW4nKTtcclxuICAgIGlmIChmbikge1xyXG4gICAgICByZXR1cm4gZm4udG9VcHBlckNhc2UoKSArICcoJyArIHRoaXMuX3NwZWMuZW5jb2RpbmdbY2hhbm5lbF0uZmllbGQgKyAnKSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3BlYy5lbmNvZGluZ1tjaGFubmVsXS5maWVsZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhbmRXaWR0aChjaGFubmVsOiBDaGFubmVsLCB1c2VTbWFsbEJhbmQ/OiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZERlZihjaGFubmVsKS5zY2FsZS5iYW5kV2lkdGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBleHBsaWNpdCB2YWx1ZVxyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZERlZihjaGFubmVsKS5zY2FsZS5iYW5kV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm90IHNwZWNpZmllZCwgZHJhdyB2YWx1ZSBmcm9tIGNvbmZpZy5cclxuXHJcbiAgICB1c2VTbWFsbEJhbmQgPSB1c2VTbWFsbEJhbmQgfHxcclxuICAgIC8vaXNCYW5kSW5TbWFsbE11bHRpcGxlc1xyXG4gICAgKGNoYW5uZWwgPT09IFkgJiYgdGhpcy5oYXMoUk9XKSAmJiB0aGlzLmhhcyhZKSkgfHxcclxuICAgIChjaGFubmVsID09PSBYICYmIHRoaXMuaGFzKENPTFVNTikgJiYgdGhpcy5oYXMoWCkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZyh1c2VTbWFsbEJhbmQgPyAnc21hbGxCYW5kV2lkdGgnIDogJ2xhcmdlQmFuZFdpZHRoJyk7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nKGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkRGVmKGNoYW5uZWwpLnNjYWxlLnBhZGRpbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBleHBsaWNpdCB2YWx1ZVxyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZERlZihjaGFubmVsKS5zY2FsZS5wYWRkaW5nO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5uZWwgPT09IFJPVyB8fCBjaGFubmVsID09PSBDT0xVTU4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnKCdjZWxsUGFkZGluZycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnKCdwYWRkaW5nJyk7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm5zIGZhbHNlIGlmIGJpbm5pbmcgaXMgZGlzYWJsZWQsIG90aGVyd2lzZSBhbiBvYmplY3Qgd2l0aCBiaW5uaW5nIHByb3BlcnRpZXNcclxuICBiaW4oY2hhbm5lbDogQ2hhbm5lbCk6IEJpbiB8IGJvb2xlYW4ge1xyXG4gICAgdmFyIGJpbiA9IHRoaXMuX3NwZWMuZW5jb2RpbmdbY2hhbm5lbF0uYmluO1xyXG4gICAgaWYgKGJpbiA9PT0ge30pXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChiaW4gPT09IHRydWUpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWF4YmluczogTUFYQklOU19ERUZBVUxUXHJcbiAgICAgIH07XHJcbiAgICByZXR1cm4gYmluO1xyXG4gIH1cclxuXHJcbiAgbnVtYmVyRm9ybWF0ID0gZnVuY3Rpb24oY2hhbm5lbD86IENoYW5uZWwpIHtcclxuICAgIC8vIFRPRE8oIzQ5Nyk6IGhhdmUgZGlmZmVyZW50IG51bWJlciBmb3JtYXQgYmFzZWQgb24gbnVtYmVyVHlwZSAoZGlzY3JldGUvY29udGludW91cylcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZygnbnVtYmVyRm9ybWF0Jyk7XHJcbiAgfTtcclxuXHJcbiAgbWFwKGYpIHtcclxuICAgIHJldHVybiB2bEVuY29kaW5nLm1hcCh0aGlzLl9zcGVjLmVuY29kaW5nLCBmKTtcclxuICB9XHJcblxyXG4gIHJlZHVjZShmLCBpbml0KSB7XHJcbiAgICByZXR1cm4gdmxFbmNvZGluZy5yZWR1Y2UodGhpcy5fc3BlYy5lbmNvZGluZywgZiwgaW5pdCk7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGYpIHtcclxuICAgIHJldHVybiB2bEVuY29kaW5nLmZvckVhY2godGhpcy5fc3BlYy5lbmNvZGluZywgZik7XHJcbiAgfVxyXG5cclxuICBpc1R5cGVzKGNoYW5uZWw6IENoYW5uZWwsIHR5cGU6IEFycmF5PGFueT4pIHtcclxuICAgIHZhciBmaWVsZERlZiA9IHRoaXMuZmllbGREZWYoY2hhbm5lbCk7XHJcbiAgICByZXR1cm4gZmllbGREZWYgJiYgdmxGaWVsZERlZi5pc1R5cGVzKGZpZWxkRGVmLCB0eXBlKTtcclxuICB9XHJcblxyXG5cclxuICBpc09yZGluYWxTY2FsZShjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXMoY2hhbm5lbCkgJiZcclxuICAgICAgdmxGaWVsZERlZi5pc09yZGluYWxTY2FsZSh0aGlzLmZpZWxkRGVmKGNoYW5uZWwpKTtcclxuICB9XHJcblxyXG4gIGlzRGltZW5zaW9uKGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgIHJldHVybiB0aGlzLmhhcyhjaGFubmVsKSAmJlxyXG4gICAgICB2bEZpZWxkRGVmLmlzRGltZW5zaW9uKHRoaXMuZmllbGREZWYoY2hhbm5lbCkpO1xyXG4gIH1cclxuXHJcbiAgaXNNZWFzdXJlKGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgIHJldHVybiB0aGlzLmhhcyhjaGFubmVsKSAmJlxyXG4gICAgICB2bEZpZWxkRGVmLmlzTWVhc3VyZSh0aGlzLmZpZWxkRGVmKGNoYW5uZWwpKTtcclxuICB9XHJcblxyXG4gIGlzQWdncmVnYXRlKCkge1xyXG4gICAgcmV0dXJuIHZsRW5jb2RpbmcuaXNBZ2dyZWdhdGUodGhpcy5fc3BlYy5lbmNvZGluZyk7XHJcbiAgfVxyXG5cclxuICBkYXRhVGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FnZ3JlZ2F0ZSgpID8gU1VNTUFSWSA6IFNPVVJDRTtcclxuICB9XHJcblxyXG5cclxuICBkZXRhaWxzKCkge1xyXG4gICAgdmFyIGVuY29kaW5nID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihyZWZzLCBmaWVsZERlZjogRmllbGREZWYsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgICAgaWYgKCFmaWVsZERlZi5hZ2dyZWdhdGUgJiYgKGNoYW5uZWwgIT09IFggJiYgY2hhbm5lbCAhPT0gWSkpIHtcclxuICAgICAgICByZWZzLnB1c2goZW5jb2RpbmcuZmllbGRSZWYoY2hhbm5lbCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZWZzO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgZmFjZXRzKCkge1xyXG4gICAgdmFyIGVuY29kaW5nID0gdGhpcztcclxuICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihyZWZzOiBzdHJpbmdbXSwgZmllbGQ6IEZpZWxkRGVmLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgICAgIGlmICghZmllbGQuYWdncmVnYXRlICYmIChjaGFubmVsID09PSBST1cgfHwgY2hhbm5lbCA9PT0gQ09MVU1OKSkge1xyXG4gICAgICAgIHJlZnMucHVzaChlbmNvZGluZy5maWVsZFJlZihjaGFubmVsKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlZnM7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBjYXJkaW5hbGl0eShjaGFubmVsOiBDaGFubmVsLCBzdGF0cykge1xyXG4gICAgcmV0dXJuIHZsRmllbGREZWYuY2FyZGluYWxpdHkodGhpcy5maWVsZERlZihjaGFubmVsKSwgc3RhdHMsIHRoaXMuY29uZmlnKCdmaWx0ZXJOdWxsJykpO1xyXG4gIH1cclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zcGVjLmRhdGE7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm5zIHdoZXRoZXIgdGhlIGVuY29kaW5nIGhhcyB2YWx1ZXMgZW1iZWRkZWRcclxuICBoYXNWYWx1ZXMoKSB7XHJcbiAgICB2YXIgdmFscyA9IHRoaXMuZGF0YSgpLnZhbHVlcztcclxuICAgIHJldHVybiB2YWxzICYmIHZhbHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NwZWMuY29uZmlnW25hbWVdO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IHtyb3VuZEZsb2F0fSBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0IHtOT01JTkFMLCBPUkRJTkFMLCBRVUFOVElUQVRJVkUsIFRFTVBPUkFMfSBmcm9tICcuLi90eXBlJztcclxuaW1wb3J0IHtDT0xVTU4sIFJPVywgWCwgWSwgQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XHJcbmltcG9ydCAqIGFzIHRpbWUgZnJvbSAnLi90aW1lJztcclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iL21hc3Rlci9kb2Mvc3BlYy5tZCMxMS1hbWJpZW50LWRlY2xhcmF0aW9uc1xyXG5kZWNsYXJlIHZhciBleHBvcnRzO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVBeGlzKGNoYW5uZWw6IENoYW5uZWwsIG1vZGVsOiBNb2RlbCwgbGF5b3V0LCBzdGF0cykge1xyXG4gIHZhciBpc0NvbCA9IGNoYW5uZWwgPT09IENPTFVNTixcclxuICAgIGlzUm93ID0gY2hhbm5lbCA9PT0gUk9XLFxyXG4gICAgdHlwZSA9IGlzQ29sID8gJ3gnIDogaXNSb3cgPyAneSc6IGNoYW5uZWw7XHJcblxyXG4gIC8vIFRPRE86IHJlbmFtZSBkZWYgdG8gYXhpc0RlZiBhbmQgYXZvaWQgc2lkZSBlZmZlY3RzIHdoZXJlIHBvc3NpYmxlLlxyXG4gIC8vIFRPRE86IHJlcGxhY2UgYW55IHdpdGggVmVnYSBBeGlzIEludGVyZmFjZVxyXG4gIHZhciBkZWY6YW55ID0ge1xyXG4gICAgdHlwZTogdHlwZSxcclxuICAgIHNjYWxlOiBjaGFubmVsXHJcbiAgfTtcclxuXHJcbiAgLy8gMS4gQWRkIHByb3BlcnRpZXNcclxuICBbXHJcbiAgICAvLyBhKSBwcm9wZXJ0aWVzIHdpdGggc3BlY2lhbCBydWxlcyAoc28gaXQgaGFzIGF4aXNbcHJvcGVydHldIG1ldGhvZHMpIC0tIGNhbGwgcnVsZSBmdW5jdGlvbnNcclxuICAgICdmb3JtYXQnLCAnZ3JpZCcsICdsYXllcicsICdvZmZzZXQnLCAnb3JpZW50JywgJ3RpY2tTaXplJywgJ3RpY2tzJywgJ3RpdGxlJywgJ3RpdGxlT2Zmc2V0JyxcclxuICAgIC8vIGIpIHByb3BlcnRpZXMgd2l0aG91dCBydWxlcywgb25seSBwcm9kdWNlIGRlZmF1bHQgdmFsdWVzIGluIHRoZSBzY2hlbWEsIG9yIGV4cGxpY2l0IHZhbHVlIGlmIHNwZWNpZmllZFxyXG4gICAgJ3RpY2tQYWRkaW5nJywgJ3RpY2tTaXplJywgJ3RpY2tTaXplTWFqb3InLCAndGlja1NpemVNaW5vcicsICd0aWNrU2l6ZUVuZCcsXHJcbiAgICAndmFsdWVzJywgJ3N1YmRpdmlkZSdcclxuICBdLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuICAgIGxldCBtZXRob2Q6IChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIGxheW91dDphbnksIHN0YXRzOmFueSwgZGVmOmFueSk9PmFueTtcclxuXHJcbiAgICB2YXIgdmFsdWUgPSAobWV0aG9kID0gZXhwb3J0c1twcm9wZXJ0eV0pID9cclxuICAgICAgICAgICAgICAgICAgLy8gY2FsbGluZyBheGlzLmZvcm1hdCwgYXhpcy5ncmlkLCAuLi5cclxuICAgICAgICAgICAgICAgICAgbWV0aG9kKG1vZGVsLCBjaGFubmVsLCBsYXlvdXQsIHN0YXRzLCBkZWYpIDpcclxuICAgICAgICAgICAgICAgICAgbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpc1twcm9wZXJ0eV07XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWZbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIDIpIEFkZCBtYXJrIHByb3BlcnR5IGRlZmluaXRpb24gZ3JvdXBzXHJcbiAgdmFyIHByb3BzID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpcy5wcm9wZXJ0aWVzIHx8IHt9O1xyXG5cclxuICBbXHJcbiAgICAnYXhpcycsICdncmlkJywgJ2xhYmVscycsICd0aXRsZScsIC8vIGhhdmUgc3BlY2lhbCBydWxlc1xyXG4gICAgJ3RpY2tzJywgJ21ham9yVGlja3MnLCAnbWlub3JUaWNrcycgLy8gb25seSBkZWZhdWx0IHZhbHVlc1xyXG4gIF0uZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xyXG4gICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1tncm91cF0gP1xyXG4gICAgICBwcm9wZXJ0aWVzW2dyb3VwXShtb2RlbCwgY2hhbm5lbCwgcHJvcHNbZ3JvdXBdLCBsYXlvdXQsIGRlZikgOlxyXG4gICAgICBwcm9wc1tncm91cF07XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWYucHJvcGVydGllcyA9IGRlZi5wcm9wZXJ0aWVzIHx8IHt9O1xyXG4gICAgICBkZWYucHJvcGVydGllc1tncm91cF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRlZjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICBjb25zdCBmaWVsZERlZiA9IG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpO1xyXG4gIHZhciBmb3JtYXQgPSBmaWVsZERlZi5heGlzLmZvcm1hdDtcclxuICBpZiAoZm9ybWF0ICE9PSB1bmRlZmluZWQpICB7XHJcbiAgICByZXR1cm4gZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFFVQU5USVRBVElWRSkge1xyXG4gICAgcmV0dXJuIG1vZGVsLm51bWJlckZvcm1hdChjaGFubmVsKTtcclxuICB9IGVsc2UgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFRFTVBPUkFMKSB7XHJcbiAgICBjb25zdCB0aW1lVW5pdCA9IGZpZWxkRGVmLnRpbWVVbml0O1xyXG4gICAgaWYgKCF0aW1lVW5pdCkge1xyXG4gICAgICByZXR1cm4gbW9kZWwuY29uZmlnKCd0aW1lRm9ybWF0Jyk7XHJcbiAgICB9IGVsc2UgaWYgKHRpbWVVbml0ID09PSAneWVhcicpIHtcclxuICAgICAgcmV0dXJuICdkJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWQobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgdmFyIGdyaWQgPSBtb2RlbC5maWVsZERlZihjaGFubmVsKS5heGlzLmdyaWQ7XHJcbiAgaWYgKGdyaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbiAgfVxyXG5cclxuICAvLyBJZiBgZ3JpZGAgaXMgdW5zcGVjaWZpZWQsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGB0cnVlYCBmb3JcclxuICAvLyAtIFJPVyBhbmQgQ09MLlxyXG4gIC8vIC0gWCBhbmQgWSB0aGF0IGhhdmUgKDEpIHF1YW50aXRhdGl2ZSBmaWVsZHMgdGhhdCBhcmUgbm90IGJpbm5lZCBvciAoMikgdGltZSBmaWVsZHMuXHJcbiAgLy8gT3RoZXJ3aXNlLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBgZmFsc2VgLlxyXG4gIHJldHVybiBjaGFubmVsID09PSBST1cgfHwgY2hhbm5lbCA9PT0gQ09MVU1OIHx8XHJcbiAgICAobW9kZWwuaXNUeXBlcyhjaGFubmVsLCBbUVVBTlRJVEFUSVZFLCBURU1QT1JBTF0pICYmICFtb2RlbC5maWVsZERlZihjaGFubmVsKS5iaW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXIobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsLCBsYXlvdXQsIHN0YXRzLCBkZWYpIHtcclxuICB2YXIgbGF5ZXIgPSBtb2RlbC5maWVsZERlZihjaGFubmVsKS5heGlzLmxheWVyO1xyXG4gIGlmIChsYXllciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gbGF5ZXI7XHJcbiAgfVxyXG4gIGlmIChkZWYuZ3JpZCkge1xyXG4gICAgLy8gaWYgZ3JpZCBpcyB0cnVlLCBuZWVkIHRvIHB1dCBsYXllciBvbiB0aGUgYmFjayBzbyB0aGF0IGdyaWQgaXMgYmVoaW5kIG1hcmtzXHJcbiAgICByZXR1cm4gJ2JhY2snO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkOyAvLyBvdGhlcndpc2UgcmV0dXJuIHVuZGVmaW5lZCBhbmQgdXNlIFZlZ2EncyBkZWZhdWx0LlxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIGxheW91dCkge1xyXG4gIHZhciBvZmZzZXQgPSBtb2RlbC5maWVsZERlZihjaGFubmVsKS5heGlzLm9mZnNldDtcclxuICBpZiAob2Zmc2V0KSB7XHJcbiAgICByZXR1cm4gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgaWYoY2hhbm5lbCA9PT0gUk9XKSB7XHJcbiAgIHJldHVybiBsYXlvdXQueS5heGlzVGl0bGVPZmZzZXQgKyAyMDtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9yaWVudChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIGxheW91dCwgc3RhdHMpIHtcclxuICB2YXIgb3JpZW50ID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpcy5vcmllbnQ7XHJcbiAgaWYgKG9yaWVudCkge1xyXG4gICAgcmV0dXJuIG9yaWVudDtcclxuICB9IGVsc2UgaWYgKGNoYW5uZWwgPT09IENPTFVNTikge1xyXG4gICAgcmV0dXJuICd0b3AnO1xyXG4gIH0gZWxzZSBpZiAoY2hhbm5lbCA9PT0gWCAmJiBtb2RlbC5oYXMoWSkgJiYgbW9kZWwuaXNPcmRpbmFsU2NhbGUoWSkgJiYgbW9kZWwuY2FyZGluYWxpdHkoWSwgc3RhdHMpID4gMzApIHtcclxuICAgIC8vIEZJWE1FIHJlbW92ZSB0aGlzIGNhc2UgYW5kIG1pZ3JhdGUgdGhpcyBsb2dpYyB0byB2ZWdhLWxpdGUtdWlcclxuICAgIC8vIHgtYXhpcyBmb3IgbG9uZyB5IC0gcHV0IG9uIHRvcFxyXG4gICAgcmV0dXJuICd0b3AnO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGlja3MobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgdmFyIHRpY2tzID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpcy50aWNrcztcclxuICBpZiAodGlja3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRpY2tzO1xyXG4gIH1cclxuXHJcbiAgLy8gRklYTUUgZGVwZW5kcyBvbiBzY2FsZSB0eXBlIHRvb1xyXG4gIGlmIChjaGFubmVsID09PSBYICYmICFtb2RlbC5maWVsZERlZihjaGFubmVsKS5iaW4pIHtcclxuICAgIHJldHVybiA1O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTaXplKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCkge1xyXG4gIHZhciB0aWNrU2l6ZSA9IG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLmF4aXMudGlja1NpemU7XHJcbiAgaWYgKHRpY2tTaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0aWNrU2l6ZTtcclxuICB9XHJcbiAgaWYgKGNoYW5uZWwgPT09IFJPVyB8fCBjaGFubmVsID09PSBDT0xVTU4pIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpdGxlKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgbGF5b3V0KSB7XHJcbiAgdmFyIGF4aXNTcGVjID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpcztcclxuICBpZiAoYXhpc1NwZWMudGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGF4aXNTcGVjLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgbm90IGRlZmluZWQsIGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lIGF4aXMgdGl0bGUgZnJvbSBmaWVsZCBkZWZcclxuICB2YXIgZmllbGRUaXRsZSA9IG1vZGVsLmZpZWxkVGl0bGUoY2hhbm5lbCk7XHJcblxyXG4gIHZhciBtYXhMZW5ndGg7XHJcbiAgaWYgKGF4aXNTcGVjLnRpdGxlTWF4TGVuZ3RoKSB7XHJcbiAgbWF4TGVuZ3RoID0gYXhpc1NwZWMudGl0bGVNYXhMZW5ndGg7XHJcbiAgfSBlbHNlIGlmIChjaGFubmVsID09PSBYKSB7XHJcbiAgICBtYXhMZW5ndGggPSBsYXlvdXQuY2VsbFdpZHRoIC8gbW9kZWwuY29uZmlnKCdjaGFyYWN0ZXJXaWR0aCcpO1xyXG4gIH0gZWxzZSBpZiAoY2hhbm5lbCA9PT0gWSkge1xyXG4gICAgbWF4TGVuZ3RoID0gbGF5b3V0LmNlbGxIZWlnaHQgLyBtb2RlbC5jb25maWcoJ2NoYXJhY3RlcldpZHRoJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF4TGVuZ3RoID8gdXRpbC50cnVuY2F0ZShmaWVsZFRpdGxlLCBtYXhMZW5ndGgpIDogZmllbGRUaXRsZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aXRsZU9mZnNldChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAvLyByZXR1cm4gc3BlY2lmaWVkIHZhbHVlIGlmIHNwZWNpZmllZFxyXG4gIHZhciB2YWx1ZSA9IG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLmF4aXMudGl0bGVPZmZzZXQ7XHJcbiAgaWYgKHZhbHVlKSAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICBzd2l0Y2ggKGNoYW5uZWwpIHtcclxuICAgIGNhc2UgUk9XOiByZXR1cm4gMDtcclxuICAgIGNhc2UgQ09MVU1OOiByZXR1cm4gMzU7XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBwcm9wZXJ0aWVzIHtcclxuICBleHBvcnQgZnVuY3Rpb24gYXhpcyhtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIHNwZWMpIHtcclxuICAgIGlmIChjaGFubmVsID09PSBST1cgfHwgY2hhbm5lbCA9PT0gQ09MVU1OKSB7XHJcbiAgICAgIC8vIGhpZGUgYXhpcyBmb3IgZmFjZXRzXHJcbiAgICAgIHJldHVybiB1dGlsLmV4dGVuZCh7XHJcbiAgICAgICAgb3BhY2l0eToge3ZhbHVlOiAwfVxyXG4gICAgICB9LCBzcGVjIHx8IHt9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzcGVjIHx8IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBncmlkKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgc3BlYywgbGF5b3V0LCBkZWYpIHtcclxuICAgIHZhciBjZWxsUGFkZGluZyA9IGxheW91dC5jZWxsUGFkZGluZztcclxuXHJcbiAgICBpZiAoZGVmLmdyaWQpIHtcclxuICAgICAgaWYgKGNoYW5uZWwgPT09IENPTFVNTikge1xyXG4gICAgICAgIC8vIHNldCBncmlkIHByb3BlcnR5IC0tIHB1dCB0aGUgbGluZXMgb24gdGhlIHJpZ2h0IHRoZSBjZWxsXHJcbiAgICAgICAgdmFyIHlPZmZzZXQgPSBtb2RlbC5jb25maWcoJ2NlbGxHcmlkT2Zmc2V0Jyk7XHJcblxyXG4gICAgICAgIHZhciBzaWduID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpcy5vcmllbnQgPT09ICdib3R0b20nID8gLTEgOiAxO1xyXG5cclxuICAgICAgICAvLyBUT0RPKCM2NzcpOiB0aGlzIHNob3VsZCBkZXBlbmQgb24gb3JpZW50XHJcbiAgICAgICAgcmV0dXJuIHV0aWwuZXh0ZW5kKHtcclxuICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgb2Zmc2V0OiByb3VuZEZsb2F0KGxheW91dC5jZWxsV2lkdGggKiAoMSsgY2VsbFBhZGRpbmcvMi4wKSksXHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdmFsdWUocykgLS0gdmVnYSBkb2Vzbid0IGRvIHJlY3Vyc2l2ZSBtZXJnZVxyXG4gICAgICAgICAgICBzY2FsZTogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIGZpZWxkOiAnZGF0YSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAtIHNpZ24gKiB5T2Zmc2V0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHkyOiB7XHJcbiAgICAgICAgICAgIGZpZWxkOiB7Z3JvdXA6ICdtYXJrLmdyb3VwLmhlaWdodCd9LFxyXG4gICAgICAgICAgICBvZmZzZXQ6IHNpZ24gKiB5T2Zmc2V0LFxyXG4gICAgICAgICAgICBtdWx0OiBzaWduXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3Ryb2tlOiB7IHZhbHVlOiBtb2RlbC5jb25maWcoJ2NlbGxHcmlkQ29sb3InKSB9LFxyXG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eTogeyB2YWx1ZTogbW9kZWwuY29uZmlnKCdjZWxsR3JpZE9wYWNpdHknKSB9XHJcbiAgICAgICAgfSwgc3BlYyB8fCB7fSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbCA9PT0gUk9XKSB7XHJcbiAgICAgICAgdmFyIHhPZmZzZXQgPSBtb2RlbC5jb25maWcoJ2NlbGxHcmlkT2Zmc2V0Jyk7XHJcblxyXG4gICAgICAgIHZhciBzaWduID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuYXhpcy5vcmllbnQgPT09ICdyaWdodCcgPyAtMSA6IDE7XHJcblxyXG4gICAgICAgIC8vIFRPRE8oIzY3Nyk6IHRoaXMgc2hvdWxkIGRlcGVuZCBvbiBvcmllbnRcclxuICAgICAgICAvLyBzZXQgZ3JpZCBwcm9wZXJ0eSAtLSBwdXQgdGhlIGxpbmVzIG9uIHRoZSB0b3BcclxuICAgICAgICByZXR1cm4gdXRpbC5leHRlbmQoe1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBvZmZzZXQ6IHJvdW5kRmxvYXQoLWxheW91dC5jZWxsSGVpZ2h0ICogKGNlbGxQYWRkaW5nLzIpKSxcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZShzKSAtLSB2ZWdhIGRvZXNuJ3QgZG8gcmVjdXJzaXZlIG1lcmdlXHJcbiAgICAgICAgICAgIHNjYWxlOiAncm93JyxcclxuICAgICAgICAgICAgZmllbGQ6ICdkYXRhJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHNpZ24gKiAoZGVmLm9mZnNldCAtIHhPZmZzZXQpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeDI6IHtcclxuICAgICAgICAgICAgZmllbGQ6IHtncm91cDogJ21hcmsuZ3JvdXAud2lkdGgnfSxcclxuICAgICAgICAgICAgb2Zmc2V0OiBzaWduICogKGRlZi5vZmZzZXQgKyB4T2Zmc2V0KSxcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZShzKSAtLSB2ZWdhIGRvZXNuJ3QgZG8gcmVjdXJzaXZlIG1lcmdlXHJcbiAgICAgICAgICAgIG11bHQ6IHNpZ25cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdHJva2U6IHsgdmFsdWU6IG1vZGVsLmNvbmZpZygnY2VsbEdyaWRDb2xvcicpIH0sXHJcbiAgICAgICAgICBzdHJva2VPcGFjaXR5OiB7IHZhbHVlOiBtb2RlbC5jb25maWcoJ2NlbGxHcmlkT3BhY2l0eScpIH1cclxuICAgICAgICB9LCBzcGVjIHx8IHt9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdXRpbC5leHRlbmQoe1xyXG4gICAgICAgICAgc3Ryb2tlOiB7IHZhbHVlOiBtb2RlbC5jb25maWcoJ2dyaWRDb2xvcicpIH0sXHJcbiAgICAgICAgICBzdHJva2VPcGFjaXR5OiB7IHZhbHVlOiBtb2RlbC5jb25maWcoJ2dyaWRPcGFjaXR5JykgfVxyXG4gICAgICAgIH0sIHNwZWMgfHwge30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BlYyB8fCB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgc3BlYywgbGF5b3V0LCBkZWYpIHtcclxuICAgIGxldCBmaWVsZERlZiA9IG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpO1xyXG4gICAgdmFyIHRpbWVVbml0ID0gZmllbGREZWYudGltZVVuaXQ7XHJcbiAgICBpZiAoZmllbGREZWYudHlwZSA9PT0gVEVNUE9SQUwgJiYgdGltZVVuaXQgJiYgKHRpbWUuaGFzU2NhbGUodGltZVVuaXQpKSkge1xyXG4gICAgICBzcGVjID0gdXRpbC5leHRlbmQoe1xyXG4gICAgICAgIHRleHQ6IHtzY2FsZTogJ3RpbWUtJyArIHRpbWVVbml0LCBmaWVsZDogJ2RhdGEnfVxyXG4gICAgICB9LCBzcGVjIHx8IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9kZWwuaXNUeXBlcyhjaGFubmVsLCBbTk9NSU5BTCwgT1JESU5BTF0pICYmIGZpZWxkRGVmLmF4aXMubGFiZWxNYXhMZW5ndGgpIHtcclxuICAgICAgLy8gVE9ETyByZXBsYWNlIHRoaXMgd2l0aCBWZWdhJ3MgbGFiZWxNYXhMZW5ndGggb25jZSBpdCBpcyBpbnRyb2R1Y2VkXHJcbiAgICAgIHNwZWMgPSB1dGlsLmV4dGVuZCh7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgdGVtcGxhdGU6ICd7eyBkYXR1bS5kYXRhIHwgdHJ1bmNhdGU6JyArIGZpZWxkRGVmLmF4aXMubGFiZWxNYXhMZW5ndGggKyAnfX0nXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBzcGVjIHx8IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAgLy8gZm9yIHgtYXhpcywgc2V0IHRpY2tzIGZvciBRIG9yIHJvdGF0ZSBzY2FsZSBmb3Igb3JkaW5hbCBzY2FsZVxyXG4gICAgaWYgKGNoYW5uZWwgPT09IFgpIHtcclxuICAgICAgaWYgKChtb2RlbC5pc0RpbWVuc2lvbihYKSB8fCBmaWVsZERlZi50eXBlID09PSBURU1QT1JBTCkpIHtcclxuICAgICAgICBzcGVjID0gdXRpbC5leHRlbmQoe1xyXG4gICAgICAgICAgYW5nbGU6IHt2YWx1ZTogMjcwfSxcclxuICAgICAgICAgIGFsaWduOiB7dmFsdWU6IGRlZi5vcmllbnQgPT09ICd0b3AnID8gJ2xlZnQnOiAncmlnaHQnfSxcclxuICAgICAgICAgIGJhc2VsaW5lOiB7dmFsdWU6ICdtaWRkbGUnfVxyXG4gICAgICAgIH0sIHNwZWMgfHwge30pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BlYyB8fCB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gdGl0bGUobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsLCBzcGVjLCBsYXlvdXQpIHtcclxuICAgIGlmIChjaGFubmVsID09PSBST1cpIHtcclxuICAgICAgcmV0dXJuIHV0aWwuZXh0ZW5kKHtcclxuICAgICAgICBhbmdsZToge3ZhbHVlOiAwfSxcclxuICAgICAgICBhbGlnbjoge3ZhbHVlOiAncmlnaHQnfSxcclxuICAgICAgICBiYXNlbGluZToge3ZhbHVlOiAnbWlkZGxlJ30sXHJcbiAgICAgICAgZHk6IHt2YWx1ZTogKC1sYXlvdXQuaGVpZ2h0IC8gMikgLSAyMH1cclxuICAgICAgfSwgc3BlYyB8fCB7fSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BlYyB8fCB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBNb2R1bGUgZm9yIGNvbXBpbGluZyBWZWdhLWxpdGUgc3BlYyBpbnRvIFZlZ2Egc3BlYy5cclxuICovXHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xyXG5cclxuaW1wb3J0ICogYXMgdmxUaW1lIGZyb20gJy4vdGltZSc7XHJcbmltcG9ydCB7Y29tcGlsZUF4aXN9IGZyb20gJy4vYXhpcyc7XHJcbmltcG9ydCB7Y29tcGlsZURhdGF9IGZyb20gJy4vZGF0YSc7XHJcbmltcG9ydCB7Y29tcGlsZUxlZ2VuZHN9IGZyb20gJy4vbGVnZW5kJztcclxuaW1wb3J0IHtjb21waWxlTWFya3N9IGZyb20gJy4vbWFya3MnO1xyXG5pbXBvcnQge2NvbXBpbGVTY2FsZXMsIGNvbXBpbGVTY2FsZU5hbWVzfSBmcm9tICcuL3NjYWxlJztcclxuXHJcbi8vIFRPRE86IHN0b3AgdXNpbmcgZGVmYXVsdCBpZiB3ZSB3ZXJlIHRvIGtlZXAgdGhlc2UgZmlsZXNcclxuaW1wb3J0IHZsRmFjZXQgZnJvbSAnLi9mYWNldCc7XHJcbmltcG9ydCB2bExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCB2bFN0YWNrIGZyb20gJy4vc3RhY2snO1xyXG5pbXBvcnQgdmxTdHlsZSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHZsU3ViZmFjZXQgZnJvbSAnLi9zdWJmYWNldCc7XHJcblxyXG5pbXBvcnQge3N0YXRzIGFzIHZsRGF0YVN0YXRzfSBmcm9tICcuLi9kYXRhJztcclxuaW1wb3J0IHtDT0xVTU4sIFJPVywgWCwgWX0gZnJvbSAnLi4vY2hhbm5lbCc7XHJcblxyXG5leHBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKHNwZWMsIHN0YXRzLCB0aGVtZT8pIHtcclxuICB2YXIgbW9kZWwgPSBuZXcgTW9kZWwoc3BlYywgdGhlbWUpO1xyXG4gIC8vIG5vIG5lZWQgdG8gcGFzcyBzdGF0cyBpZiB5b3UgcGFzcyBpbiB0aGUgZGF0YVxyXG4gIGlmICghc3RhdHMpIHtcclxuICAgIGlmIChtb2RlbC5oYXNWYWx1ZXMoKSkge1xyXG4gICAgICAgIHN0YXRzID0gdmxEYXRhU3RhdHMobW9kZWwuZGF0YSgpLnZhbHVlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdObyBzdGF0cyBwcm92aWRlZCBhbmQgZGF0YSBpcyBub3QgZW1iZWRkZWQuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgbGF5b3V0ID0gdmxMYXlvdXQobW9kZWwsIHN0YXRzKTtcclxuXHJcbiAgLy8gVE9ETzogY2hhbmdlIHR5cGUgdG8gYmVjb21lIFZnU3BlY1xyXG4gIHZhciBvdXRwdXQ6YW55ID0ge1xyXG4gICAgICB3aWR0aDogbGF5b3V0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGxheW91dC5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6ICdhdXRvJyxcclxuICAgICAgZGF0YTogY29tcGlsZURhdGEobW9kZWwpLFxyXG4gICAgICBtYXJrczogW3tcclxuICAgICAgICBuYW1lOiAnY2VsbCcsXHJcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICBlbnRlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogbGF5b3V0LmNlbGxXaWR0aCA/XHJcbiAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTogbGF5b3V0LmNlbGxXaWR0aH0gOlxyXG4gICAgICAgICAgICAgICAgICAgICB7ZmllbGQ6IHtncm91cDogJ3dpZHRoJ319LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGxheW91dC5jZWxsSGVpZ2h0ID9cclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IGxheW91dC5jZWxsSGVpZ2h0fSA6XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpZWxkOiB7Z3JvdXA6ICdoZWlnaHQnfX1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1dXHJcbiAgICB9O1xyXG5cclxuICAvLyBnbG9iYWwgc2NhbGVzIGNvbnRhaW5zIG9ubHkgdGltZSB1bml0IHNjYWxlc1xyXG4gIHZhciB0aW1lU2NhbGVzID0gdmxUaW1lLnNjYWxlcyhtb2RlbCk7XHJcbiAgaWYgKHRpbWVTY2FsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgb3V0cHV0LnNjYWxlcyA9IHRpbWVTY2FsZXM7XHJcbiAgfVxyXG5cclxuICB2YXIgZ3JvdXAgPSBvdXRwdXQubWFya3NbMF07XHJcblxyXG4gIC8vIG1hcmtzXHJcbiAgdmFyIHN0eWxlQ2ZnID0gdmxTdHlsZShtb2RlbCwgc3RhdHMpLFxyXG4gICAgbWRlZnMgPSBncm91cC5tYXJrcyA9IGNvbXBpbGVNYXJrcyhtb2RlbCwgbGF5b3V0LCBzdHlsZUNmZyksXHJcbiAgICBtZGVmID0gbWRlZnNbbWRlZnMubGVuZ3RoIC0gMV07ICAvLyBUT0RPOiByZW1vdmUgdGhpcyBkaXJ0eSBoYWNrIGJ5IHJlZmFjdG9yaW5nIHRoZSB3aG9sZSBmbG93XHJcblxyXG4gIHZhciBzdGFjayA9IG1vZGVsLnN0YWNrKCk7XHJcbiAgaWYgKHN0YWNrKSB7XHJcbiAgICAvLyBtb2RpZnkgbWRlZi57ZnJvbSxwcm9wZXJ0aWVzfVxyXG4gICAgdmxTdGFjayhtb2RlbCwgbWRlZiwgc3RhY2spO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFya3R5cGUgPSBtb2RlbC5tYXJrdHlwZSgpO1xyXG4gIGNvbnN0IGlzTGluZVR5cGUgPSBtYXJrdHlwZSA9PT0gJ2xpbmUnIHx8IG1hcmt0eXBlID09PSAnYXJlYSc7XHJcblxyXG4gIC8vIGhhbmRsZSBzdWJmYWNldHNcclxuICB2YXIgZGV0YWlscyA9IG1vZGVsLmRldGFpbHMoKTtcclxuXHJcbiAgaWYgKGRldGFpbHMubGVuZ3RoID4gMCAmJiBpc0xpbmVUeXBlKSB7XHJcbiAgICAvL3N1YmZhY2V0IHRvIGdyb3VwIGFyZWEgLyBsaW5lIHRvZ2V0aGVyIGluIG9uZSBncm91cFxyXG4gICAgdmxTdWJmYWNldChncm91cCwgbWRlZiwgZGV0YWlscyk7XHJcbiAgfVxyXG5cclxuICAvLyBhdXRvLXNvcnQgbGluZS9hcmVhIHZhbHVlc1xyXG4gIGlmIChpc0xpbmVUeXBlICYmIG1vZGVsLmNvbmZpZygnYXV0b1NvcnRMaW5lJykpIHsgLy8gVE9ETzogcmVtb3ZlIGF1dG9Tb3J0TGluZVxyXG4gICAgdmFyIGYgPSAobW9kZWwuaXNNZWFzdXJlKFgpICYmIG1vZGVsLmlzRGltZW5zaW9uKFkpKSA/IFkgOiBYO1xyXG4gICAgaWYgKCFtZGVmLmZyb20pIHtcclxuICAgICAgbWRlZi5mcm9tID0ge307XHJcbiAgICB9XHJcbiAgICAvLyBUT0RPOiB3aHkgLSA/XHJcbiAgICBtZGVmLmZyb20udHJhbnNmb3JtID0gW3t0eXBlOiAnc29ydCcsIGJ5OiAnLScgKyBtb2RlbC5maWVsZFJlZihmKX1dO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0IGEgZmxhdHRlbmVkIGxpc3Qgb2YgYWxsIHNjYWxlIG5hbWVzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHZsIHNwZWNcclxuICB2YXIgc2luZ2xlU2NhbGVOYW1lcyA9IFtdLmNvbmNhdC5hcHBseShbXSwgbWRlZnMubWFwKGZ1bmN0aW9uKG1hcmtQcm9wcykge1xyXG4gICAgcmV0dXJuIGNvbXBpbGVTY2FsZU5hbWVzKG1hcmtQcm9wcy5wcm9wZXJ0aWVzLnVwZGF0ZSk7XHJcbiAgfSkpO1xyXG5cclxuICB2YXIgbGVnZW5kcyA9IGNvbXBpbGVMZWdlbmRzKG1vZGVsLCBzdHlsZUNmZyk7XHJcblxyXG4gIC8vIFNtYWxsIE11bHRpcGxlc1xyXG4gIGlmIChtb2RlbC5oYXMoUk9XKSB8fCBtb2RlbC5oYXMoQ09MVU1OKSkge1xyXG4gICAgb3V0cHV0ID0gdmxGYWNldChncm91cCwgbW9kZWwsIGxheW91dCwgb3V0cHV0LCBzaW5nbGVTY2FsZU5hbWVzLCBzdGF0cyk7XHJcbiAgICBpZiAobGVnZW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG91dHB1dC5sZWdlbmRzID0gbGVnZW5kcztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZ3JvdXAuc2NhbGVzID0gY29tcGlsZVNjYWxlcyhzaW5nbGVTY2FsZU5hbWVzLCBtb2RlbCwgbGF5b3V0LCBzdGF0cyk7XHJcblxyXG4gICAgdmFyIGF4ZXMgPSBbXTtcclxuICAgIGlmIChtb2RlbC5oYXMoWCkpIHtcclxuICAgICAgYXhlcy5wdXNoKGNvbXBpbGVBeGlzKFgsIG1vZGVsLCBsYXlvdXQsIHN0YXRzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAobW9kZWwuaGFzKFkpKSB7XHJcbiAgICAgIGF4ZXMucHVzaChjb21waWxlQXhpcyhZLCBtb2RlbCwgbGF5b3V0LCBzdGF0cykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGF4ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBncm91cC5heGVzID0gYXhlcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVnZW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGdyb3VwLmxlZ2VuZHMgPSBsZWdlbmRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNwZWM6IG91dHB1dFxyXG4gICAgLy8gVE9ETzogYWRkIHdhcm5pbmcgLyBlcnJvcnMgaGVyZVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgdmxGaWVsZERlZiBmcm9tICcuLi9maWVsZGRlZic7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xyXG5pbXBvcnQge0ZpZWxkRGVmfSBmcm9tICcuLi9zY2hlbWEvZmllbGRkZWYuc2NoZW1hJztcclxuaW1wb3J0IHtTdGFja1Byb3BlcnRpZXN9IGZyb20gJy4vc3RhY2snO1xyXG5cclxuaW1wb3J0IHtNQVhCSU5TX0RFRkFVTFR9IGZyb20gJy4uL2Jpbic7XHJcbmltcG9ydCB7Q2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XHJcbmltcG9ydCB7U09VUkNFLCBTVEFDS0VELCBTVU1NQVJZfSBmcm9tICcuLi9kYXRhJztcclxuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL3RpbWUnO1xyXG5pbXBvcnQge05PTUlOQUwsIE9SRElOQUwsIFFVQU5USVRBVElWRSwgVEVNUE9SQUx9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBWZWdhJ3MgZGF0YSBhcnJheSBmcm9tIGEgZ2l2ZW4gZW5jb2RpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSAge0VuY29kaW5nfSBlbmNvZGluZ1xyXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgVmVnYSBkYXRhLlxyXG4gKiAgICAgICAgICAgICAgICAgVGhpcyBhbHdheXMgaW5jbHVkZXMgYSBcInNvdXJjZVwiIGRhdGEgdGFibGUuXHJcbiAqICAgICAgICAgICAgICAgICBJZiB0aGUgZW5jb2RpbmcgY29udGFpbnMgYWdncmVnYXRlIHZhbHVlLCB0aGlzIHdpbGwgYWxzbyBjcmVhdGVcclxuICogICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZSB0YWJsZSBhcyB3ZWxsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVEYXRhKG1vZGVsOiBNb2RlbCkge1xyXG4gIHZhciBkZWYgPSBbc291cmNlLmRlZihtb2RlbCldO1xyXG5cclxuICB2YXIgc3VtbWFyeURlZiA9IHN1bW1hcnkuZGVmKG1vZGVsKTtcclxuICBpZiAoc3VtbWFyeURlZikge1xyXG4gICAgZGVmLnB1c2goc3VtbWFyeURlZik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPIGFkZCBcImhhdmluZ1wiIGZpbHRlciBoZXJlXHJcblxyXG4gIC8vIGFwcGVuZCBub24tcG9zaXRpdmUgZmlsdGVyIGF0IHRoZSBlbmQgZm9yIHRoZSBkYXRhIHRhYmxlXHJcbiAgZmlsdGVyTm9uUG9zaXRpdmUoZGVmW2RlZi5sZW5ndGggLSAxXSwgbW9kZWwpO1xyXG5cclxuICAvLyBTdGFja1xyXG4gIHZhciBzdGFja0RlZiA9IG1vZGVsLnN0YWNrKCk7XHJcbiAgaWYgKHN0YWNrRGVmKSB7XHJcbiAgICBkZWYucHVzaChzdGFjay5kZWYobW9kZWwsIHN0YWNrRGVmKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVmO1xyXG59XHJcblxyXG4vLyBUT0RPOiBDb25zb2xpZGF0ZSBhbGwgVmVnYSBpbnRlcmZhY2VcclxuaW50ZXJmYWNlIFZnRGF0YSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNvdXJjZT86IHN0cmluZztcclxuICB2YWx1ZXM/OiBhbnk7XHJcbiAgZm9ybWF0PzogYW55O1xyXG4gIHVybD86IGFueTtcclxuICB0cmFuc2Zvcm0/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2Ugc291cmNlIHtcclxuICBleHBvcnQgZnVuY3Rpb24gZGVmKG1vZGVsOiBNb2RlbCk6IFZnRGF0YSB7XHJcbiAgICB2YXIgc291cmNlOlZnRGF0YSA9IHtuYW1lOiBTT1VSQ0V9O1xyXG5cclxuICAgIC8vIERhdGEgc291cmNlICh1cmwgb3IgaW5saW5lKVxyXG4gICAgaWYgKG1vZGVsLmhhc1ZhbHVlcygpKSB7XHJcbiAgICAgIHNvdXJjZS52YWx1ZXMgPSBtb2RlbC5kYXRhKCkudmFsdWVzO1xyXG4gICAgICBzb3VyY2UuZm9ybWF0ID0ge3R5cGU6ICdqc29uJ307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzb3VyY2UudXJsID0gbW9kZWwuZGF0YSgpLnVybDtcclxuICAgICAgc291cmNlLmZvcm1hdCA9IHt0eXBlOiBtb2RlbC5kYXRhKCkuZm9ybWF0VHlwZX07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IGRhdGEncyBmb3JtYXQucGFyc2UgaWYgbmVlZGVkXHJcbiAgICB2YXIgcGFyc2UgPSBmb3JtYXRQYXJzZShtb2RlbCk7XHJcbiAgICBpZiAocGFyc2UpIHtcclxuICAgICAgc291cmNlLmZvcm1hdC5wYXJzZSA9IHBhcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdXJjZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0obW9kZWwpO1xyXG4gICAgcmV0dXJuIHNvdXJjZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvcm1hdFBhcnNlKG1vZGVsOiBNb2RlbCkge1xyXG4gICAgdmFyIHBhcnNlO1xyXG5cclxuICAgIG1vZGVsLmZvckVhY2goZnVuY3Rpb24oZmllbGREZWY6IEZpZWxkRGVmKSB7XHJcbiAgICAgIGlmIChmaWVsZERlZi50eXBlID09PSBURU1QT1JBTCkge1xyXG4gICAgICAgIHBhcnNlID0gcGFyc2UgfHwge307XHJcbiAgICAgICAgcGFyc2VbZmllbGREZWYuZmllbGRdID0gJ2RhdGUnO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFFVQU5USVRBVElWRSkge1xyXG4gICAgICAgIGlmICh2bEZpZWxkRGVmLmlzQ291bnQoZmllbGREZWYpKSByZXR1cm47XHJcbiAgICAgICAgcGFyc2UgPSBwYXJzZSB8fCB7fTtcclxuICAgICAgICBwYXJzZVtmaWVsZERlZi5maWVsZF0gPSAnbnVtYmVyJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgVmVnYSB0cmFuc2Zvcm1zIGZvciB0aGUgc291cmNlIGRhdGEgdGFibGUuICBUaGlzIGNhbiBpbmNsdWRlXHJcbiAgICogdHJhbnNmb3JtcyBmb3IgdGltZSB1bml0LCBiaW5uaW5nIGFuZCBmaWx0ZXJpbmcuXHJcbiAgICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybShtb2RlbDogTW9kZWwpIHtcclxuICAgIC8vIG51bGwgZmlsdGVyIGNvbWVzIGZpcnN0IHNvIHRyYW5zZm9ybXMgYXJlIG5vdCBwZXJmb3JtZWQgb24gbnVsbCB2YWx1ZXNcclxuICAgIC8vIHRpbWUgYW5kIGJpbiBzaG91bGQgY29tZSBiZWZvcmUgZmlsdGVyIHNvIHdlIGNhbiBmaWx0ZXIgYnkgdGltZSBhbmQgYmluXHJcbiAgICByZXR1cm4gbnVsbEZpbHRlclRyYW5zZm9ybShtb2RlbCkuY29uY2F0KFxyXG4gICAgICBmb3JtdWxhVHJhbnNmb3JtKG1vZGVsKSxcclxuICAgICAgdGltZVRyYW5zZm9ybShtb2RlbCksXHJcbiAgICAgIGJpblRyYW5zZm9ybShtb2RlbCksXHJcbiAgICAgIGZpbHRlclRyYW5zZm9ybShtb2RlbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gdGltZVRyYW5zZm9ybShtb2RlbDogTW9kZWwpIHtcclxuICAgIHJldHVybiBtb2RlbC5yZWR1Y2UoZnVuY3Rpb24odHJhbnNmb3JtLCBmaWVsZERlZjogRmllbGREZWYsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgICAgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFRFTVBPUkFMICYmIGZpZWxkRGVmLnRpbWVVbml0KSB7XHJcbiAgICAgICAgdmFyIGZpZWxkUmVmID0gbW9kZWwuZmllbGRSZWYoY2hhbm5lbCwge25vZm46IHRydWUsIGRhdHVtOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybS5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6ICdmb3JtdWxhJyxcclxuICAgICAgICAgIGZpZWxkOiBtb2RlbC5maWVsZFJlZihjaGFubmVsKSxcclxuICAgICAgICAgIGV4cHI6IHRpbWUuZm9ybXVsYShmaWVsZERlZi50aW1lVW5pdCwgZmllbGRSZWYpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRyYW5zZm9ybTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBiaW5UcmFuc2Zvcm0obW9kZWw6IE1vZGVsKSB7XHJcbiAgICByZXR1cm4gbW9kZWwucmVkdWNlKGZ1bmN0aW9uKHRyYW5zZm9ybSwgZmllbGREZWY6IEZpZWxkRGVmLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgICAgIGNvbnN0IGJpbiA9IG1vZGVsLmJpbihjaGFubmVsKTtcclxuICAgICAgaWYgKGJpbikge1xyXG4gICAgICAgIHRyYW5zZm9ybS5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6ICdiaW4nLFxyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkRGVmLmZpZWxkLFxyXG4gICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBtb2RlbC5maWVsZFJlZihjaGFubmVsLCB7YmluU3VmZml4OiAnX3N0YXJ0J30pLFxyXG4gICAgICAgICAgICBlbmQ6IG1vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHtiaW5TdWZmaXg6ICdfZW5kJ30pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWF4YmluczogdHlwZW9mIGJpbiA9PT0gJ2Jvb2xlYW4nID8gTUFYQklOU19ERUZBVUxUIDogYmluLm1heGJpbnNcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0ZW1wb3JhcnkgZml4IGZvciBhZGRpbmcgbWlzc2luZyBgYmluX21pZGAgZnJvbSB0aGUgYmluIHRyYW5zZm9ybVxyXG4gICAgICAgIHRyYW5zZm9ybS5wdXNoKHtcclxuICAgICAgICAgIHR5cGU6ICdmb3JtdWxhJyxcclxuICAgICAgICAgIGZpZWxkOiBtb2RlbC5maWVsZFJlZihjaGFubmVsLCB7YmluU3VmZml4OiAnX21pZCd9KSxcclxuICAgICAgICAgIGV4cHI6ICcoJyArIG1vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHtkYXR1bToxLCBiaW5TdWZmaXg6ICdfc3RhcnQnfSkgKyAnKycgKyBtb2RlbC5maWVsZFJlZihjaGFubmVsLCB7ZGF0dW06MSwgYmluU3VmZml4OiAnX2VuZCd9KSArICcpLzInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRyYW5zZm9ybTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSB0aGF0IG1pZ2h0IGNvbnRhaW4gYSBmaWx0ZXIgdHJhbnNmb3JtIGZvciBmaWx0ZXJpbmcgbnVsbCB2YWx1ZSBiYXNlZCBvbiBmaWx0ZXJOdWwgY29uZmlnXHJcbiAgICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG51bGxGaWx0ZXJUcmFuc2Zvcm0obW9kZWw6IE1vZGVsKSB7XHJcbiAgICB2YXIgZmlsdGVyZWRGaWVsZHMgPSB1dGlsLnJlZHVjZShtb2RlbC5maWVsZHMoKSxcclxuICAgICAgZnVuY3Rpb24oZmlsdGVyZWRGaWVsZHMsIGZpZWxkTGlzdCwgZmllbGROYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gJyonKSByZXR1cm4gZmlsdGVyZWRGaWVsZHM7IC8vY291bnRcclxuXHJcbiAgICAgICAgLy8gVE9ETygjNTk3KSByZXZpc2UgaG93IGZpbHRlck51bGwgaXMgc3RydWN0dXJlZC5cclxuICAgICAgICBpZiAoKG1vZGVsLmNvbmZpZygnZmlsdGVyTnVsbCcpLnF1YW50aXRhdGl2ZSAmJiBmaWVsZExpc3QuY29udGFpbnNUeXBlW1FVQU5USVRBVElWRV0pIHx8XHJcbiAgICAgICAgICAgIChtb2RlbC5jb25maWcoJ2ZpbHRlck51bGwnKS50ZW1wb3JhbCAmJiBmaWVsZExpc3QuY29udGFpbnNUeXBlW1RFTVBPUkFMXSkgfHxcclxuICAgICAgICAgICAgKG1vZGVsLmNvbmZpZygnZmlsdGVyTnVsbCcpLm9yZGluYWwgJiYgZmllbGRMaXN0LmNvbnRhaW5zVHlwZVtPUkRJTkFMXSkgfHxcclxuICAgICAgICAgICAgKG1vZGVsLmNvbmZpZygnZmlsdGVyTnVsbCcpLm5vbWluYWwgJiYgZmllbGRMaXN0LmNvbnRhaW5zVHlwZVtOT01JTkFMXSkpIHtcclxuICAgICAgICAgIGZpbHRlcmVkRmllbGRzLnB1c2goZmllbGROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRmllbGRzO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcmVkRmllbGRzLmxlbmd0aCA+IDAgP1xyXG4gICAgICBbe1xyXG4gICAgICAgIHR5cGU6ICdmaWx0ZXInLFxyXG4gICAgICAgIHRlc3Q6IGZpbHRlcmVkRmllbGRzLm1hcChmdW5jdGlvbihmaWVsZE5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiAnZGF0dW0uJyArIGZpZWxkTmFtZSArICchPT1udWxsJztcclxuICAgICAgICB9KS5qb2luKCcgJiYgJylcclxuICAgICAgfV0gOiBbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJUcmFuc2Zvcm0obW9kZWw6IE1vZGVsKSB7XHJcbiAgICB2YXIgZmlsdGVyID0gbW9kZWwuZGF0YSgpLmZpbHRlcjtcclxuICAgIHJldHVybiBmaWx0ZXIgPyBbe1xyXG4gICAgICAgIHR5cGU6ICdmaWx0ZXInLFxyXG4gICAgICAgIHRlc3Q6IGZpbHRlclxyXG4gICAgfV0gOiBbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBmb3JtdWxhVHJhbnNmb3JtKG1vZGVsOiBNb2RlbCkge1xyXG4gICAgdmFyIGNhbGN1bGF0ZSA9IG1vZGVsLmRhdGEoKS5jYWxjdWxhdGU7XHJcbiAgICBpZiAoY2FsY3VsYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWxjdWxhdGUucmVkdWNlKGZ1bmN0aW9uKHRyYW5zZm9ybSwgZm9ybXVsYSkge1xyXG4gICAgICB0cmFuc2Zvcm0ucHVzaCh1dGlsLmV4dGVuZCh7dHlwZTogZm9ybXVsYX0sIGZvcm11bGEpKTtcclxuICAgICAgcmV0dXJuIHRyYW5zZm9ybTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2Ugc3VtbWFyeSB7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRlZihtb2RlbDogTW9kZWwpOlZnRGF0YSB7XHJcbiAgICAvKiBkaWN0IHNldCBmb3IgZGltZW5zaW9ucyAqL1xyXG4gICAgdmFyIGRpbXMgPSB7fTtcclxuXHJcbiAgICAvKiBkaWN0aW9uYXJ5IG1hcHBpbmcgZmllbGQgbmFtZSA9PiBkaWN0IHNldCBvZiBhZ2dyZWdhdGlvbiBmdW5jdGlvbnMgKi9cclxuICAgIHZhciBtZWFzID0ge307XHJcblxyXG4gICAgdmFyIGhhc0FnZ3JlZ2F0ZSA9IGZhbHNlO1xyXG5cclxuICAgIG1vZGVsLmZvckVhY2goZnVuY3Rpb24oZmllbGREZWYsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgICAgaWYgKGZpZWxkRGVmLmFnZ3JlZ2F0ZSkge1xyXG4gICAgICAgIGhhc0FnZ3JlZ2F0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGZpZWxkRGVmLmFnZ3JlZ2F0ZSA9PT0gJ2NvdW50Jykge1xyXG4gICAgICAgICAgbWVhc1snKiddID0gbWVhc1snKiddIHx8IHt9O1xyXG4gICAgICAgICAgbWVhc1snKiddLmNvdW50ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVhc1tmaWVsZERlZi5maWVsZF0gPSBtZWFzW2ZpZWxkRGVmLmZpZWxkXSB8fCB7fTtcclxuICAgICAgICAgIG1lYXNbZmllbGREZWYuZmllbGRdW2ZpZWxkRGVmLmFnZ3JlZ2F0ZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZmllbGREZWYuYmluKSB7XHJcbiAgICAgICAgICAvLyBUT0RPKCM2OTQpIG9ubHkgYWRkIGRpbWVuc2lvbiBmb3IgdGhlIHJlcXVpcmVkIG9uZXMuXHJcbiAgICAgICAgICBkaW1zW21vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHtiaW5TdWZmaXg6ICdfc3RhcnQnfSldID0gbW9kZWwuZmllbGRSZWYoY2hhbm5lbCwge2JpblN1ZmZpeDogJ19zdGFydCd9KTtcclxuICAgICAgICAgIGRpbXNbbW9kZWwuZmllbGRSZWYoY2hhbm5lbCwge2JpblN1ZmZpeDogJ19taWQnfSldID0gbW9kZWwuZmllbGRSZWYoY2hhbm5lbCwge2JpblN1ZmZpeDogJ19taWQnfSk7XHJcbiAgICAgICAgICBkaW1zW21vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHtiaW5TdWZmaXg6ICdfZW5kJ30pXSA9IG1vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHtiaW5TdWZmaXg6ICdfZW5kJ30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaW1zW2ZpZWxkRGVmLmZpZWxkXSA9IG1vZGVsLmZpZWxkUmVmKGNoYW5uZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBncm91cGJ5ID0gdXRpbC52YWxzKGRpbXMpO1xyXG5cclxuICAgIC8vIHNob3J0LWZvcm1hdCBzdW1tYXJpemUgb2JqZWN0IGZvciBWZWdhJ3MgYWdncmVnYXRlIHRyYW5zZm9ybVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlZ2EvdmVnYS93aWtpL0RhdGEtVHJhbnNmb3JtcyMtYWdncmVnYXRlXHJcbiAgICB2YXIgc3VtbWFyaXplID0gdXRpbC5yZWR1Y2UobWVhcywgZnVuY3Rpb24oc3VtbWFyaXplLCBmbkRpY3RTZXQsIGZpZWxkKSB7XHJcbiAgICAgIHN1bW1hcml6ZVtmaWVsZF0gPSB1dGlsLmtleXMoZm5EaWN0U2V0KTtcclxuICAgICAgcmV0dXJuIHN1bW1hcml6ZTtcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICBpZiAoaGFzQWdncmVnYXRlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogU1VNTUFSWSxcclxuICAgICAgICBzb3VyY2U6IFNPVVJDRSxcclxuICAgICAgICB0cmFuc2Zvcm06IFt7XHJcbiAgICAgICAgICB0eXBlOiAnYWdncmVnYXRlJyxcclxuICAgICAgICAgIGdyb3VwYnk6IGdyb3VwYnksXHJcbiAgICAgICAgICBzdW1tYXJpemU6IHN1bW1hcml6ZVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBzdGFjayB7XHJcbiAgLyoqXHJcbiAgICogQWRkIHN0YWNrZWQgZGF0YSBzb3VyY2UsIGZvciBmZWVkaW5nIHRoZSBzaGFyZWQgc2NhbGUuXHJcbiAgICovXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRlZihtb2RlbDogTW9kZWwsIHN0YWNrUHJvcHM6IFN0YWNrUHJvcGVydGllcyk6VmdEYXRhIHtcclxuICAgIHZhciBncm91cGJ5Q2hhbm5lbCA9IHN0YWNrUHJvcHMuZ3JvdXBieUNoYW5uZWw7XHJcbiAgICB2YXIgZmllbGRDaGFubmVsID0gc3RhY2tQcm9wcy5maWVsZENoYW5uZWw7XHJcbiAgICB2YXIgZmFjZXRzID0gbW9kZWwuZmFjZXRzKCk7XHJcblxyXG4gICAgdmFyIHN0YWNrZWQ6VmdEYXRhID0ge1xyXG4gICAgICBuYW1lOiBTVEFDS0VELFxyXG4gICAgICBzb3VyY2U6IG1vZGVsLmRhdGFUYWJsZSgpLFxyXG4gICAgICB0cmFuc2Zvcm06IFt7XHJcbiAgICAgICAgdHlwZTogJ2FnZ3JlZ2F0ZScsXHJcbiAgICAgICAgLy8gZ3JvdXAgYnkgY2hhbm5lbCBhbmQgb3RoZXIgZmFjZXRzXHJcbiAgICAgICAgZ3JvdXBieTogW21vZGVsLmZpZWxkUmVmKGdyb3VwYnlDaGFubmVsKV0uY29uY2F0KGZhY2V0cyksXHJcbiAgICAgICAgc3VtbWFyaXplOiBbe29wczogWydzdW0nXSwgZmllbGQ6IG1vZGVsLmZpZWxkUmVmKGZpZWxkQ2hhbm5lbCl9XVxyXG4gICAgICB9XVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZmFjZXRzICYmIGZhY2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHN0YWNrZWQudHJhbnNmb3JtLnB1c2goeyAvL2NhbGN1bGF0ZSBtYXggZm9yIGVhY2ggZmFjZXRcclxuICAgICAgICB0eXBlOiAnYWdncmVnYXRlJyxcclxuICAgICAgICBncm91cGJ5OiBmYWNldHMsXHJcbiAgICAgICAgc3VtbWFyaXplOiBbe1xyXG4gICAgICAgICAgb3BzOiBbJ21heCddLFxyXG4gICAgICAgICAgLy8gd2Ugd2FudCBtYXggb2Ygc3VtIGZyb20gYWJvdmUgdHJhbnNmb3JtXHJcbiAgICAgICAgICBmaWVsZDogbW9kZWwuZmllbGRSZWYoZmllbGRDaGFubmVsLCB7cHJlZm46ICdzdW1fJ30pXHJcbiAgICAgICAgfV1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhY2tlZDtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTm9uUG9zaXRpdmUoZGF0YVRhYmxlLCBtb2RlbDogTW9kZWwpIHtcclxuICBtb2RlbC5mb3JFYWNoKGZ1bmN0aW9uKF8sIGNoYW5uZWwpIHtcclxuICAgIGlmIChtb2RlbC5maWVsZERlZihjaGFubmVsKS5zY2FsZS50eXBlID09PSAnbG9nJykge1xyXG4gICAgICBkYXRhVGFibGUudHJhbnNmb3JtLnB1c2goe1xyXG4gICAgICAgIHR5cGU6ICdmaWx0ZXInLFxyXG4gICAgICAgIHRlc3Q6IG1vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHtkYXR1bTogMX0pICsgJyA+IDAnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7Q09MVU1OLCBST1csIFgsIFl9IGZyb20gJy4uL2NoYW5uZWwnO1xyXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuXHJcbmltcG9ydCB7Y29tcGlsZUF4aXN9IGZyb20gJy4vYXhpcyc7XHJcbmltcG9ydCB7Y29tcGlsZVNjYWxlcywgY29tcGlsZVNjYWxlTmFtZXN9IGZyb20gJy4vc2NhbGUnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBkZWYobmFtZSwgb3B0KSB7XHJcbiAgb3B0ID0gb3B0IHx8IHt9O1xyXG5cclxuICAvLyBUT0RPOiBWZWdhJ3MgTWFya3MgaW50ZXJmYWNlXHJcbiAgdmFyIGdyb3VwOmFueSA9IHtcclxuICAgIG5hbWU6IG5hbWUgfHwgdW5kZWZpbmVkLFxyXG4gICAgdHlwZTogJ2dyb3VwJyxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgZW50ZXI6IHtcclxuICAgICAgICB3aWR0aDogb3B0LndpZHRoIHx8IHtmaWVsZDoge2dyb3VwOiAnd2lkdGgnfX0sXHJcbiAgICAgICAgaGVpZ2h0OiBvcHQuaGVpZ2h0IHx8IHtmaWVsZDoge2dyb3VwOiAnaGVpZ2h0J319XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAob3B0LmZyb20pIHtcclxuICAgIGdyb3VwLmZyb20gPSBvcHQuZnJvbTtcclxuICB9XHJcbiAgaWYgKG9wdC54KSB7XHJcbiAgICBncm91cC5wcm9wZXJ0aWVzLmVudGVyLnggPSBvcHQueDtcclxuICB9XHJcbiAgaWYgKG9wdC55KSB7XHJcbiAgICBncm91cC5wcm9wZXJ0aWVzLmVudGVyLnkgPSBvcHQueTtcclxuICB9XHJcbiAgaWYgKG9wdC5heGVzKSB7XHJcbiAgICBncm91cC5heGVzID0gb3B0LmF4ZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ3JvdXA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwLCBtb2RlbDogTW9kZWwsIGxheW91dCwgb3V0cHV0LCBzaW5nbGVTY2FsZU5hbWVzLCBzdGF0cykge1xyXG4gIHZhciBlbnRlciA9IGdyb3VwLnByb3BlcnRpZXMuZW50ZXI7XHJcbiAgdmFyIGZhY2V0S2V5cyA9IFtdLCBjZWxsQXhlcyA9IFtdLCBmcm9tLCBheGVzR3JwO1xyXG5cclxuICB2YXIgaGFzUm93ID0gbW9kZWwuaGFzKFJPVyksIGhhc0NvbCA9IG1vZGVsLmhhcyhDT0xVTU4pO1xyXG5cclxuICBlbnRlci5maWxsID0ge3ZhbHVlOiBtb2RlbC5jb25maWcoJ2NlbGxCYWNrZ3JvdW5kQ29sb3InKX07XHJcblxyXG4gIC8vbW92ZSBcImZyb21cIiB0byBjZWxsIGxldmVsIGFuZCBhZGQgZmFjZXQgdHJhbnNmb3JtXHJcbiAgZ3JvdXAuZnJvbSA9IHtkYXRhOiBncm91cC5tYXJrc1swXS5mcm9tLmRhdGF9O1xyXG5cclxuICAvLyBIYWNrLCB0aGlzIG5lZWRzIHRvIGJlIHJlZmFjdG9yZWRcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3VwLm1hcmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgbWFyayA9IGdyb3VwLm1hcmtzW2ldO1xyXG4gICAgaWYgKG1hcmsuZnJvbS50cmFuc2Zvcm0pIHtcclxuICAgICAgZGVsZXRlIG1hcmsuZnJvbS5kYXRhOyAvL25lZWQgdG8ga2VlcCB0cmFuc2Zvcm0gZm9yIHN1YmZhY2V0dGluZyBjYXNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgbWFyay5mcm9tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGhhc1Jvdykge1xyXG4gICAgaWYgKCFtb2RlbC5pc0RpbWVuc2lvbihST1cpKSB7XHJcbiAgICAgIHV0aWwuZXJyb3IoJ1JvdyBlbmNvZGluZyBzaG91bGQgYmUgb3JkaW5hbC4nKTtcclxuICAgIH1cclxuICAgIGVudGVyLnkgPSB7c2NhbGU6IFJPVywgZmllbGQ6IG1vZGVsLmZpZWxkUmVmKFJPVyl9O1xyXG4gICAgZW50ZXIuaGVpZ2h0ID0geyd2YWx1ZSc6IGxheW91dC5jZWxsSGVpZ2h0fTsgLy8gSEFDS1xyXG5cclxuICAgIGZhY2V0S2V5cy5wdXNoKG1vZGVsLmZpZWxkUmVmKFJPVykpO1xyXG5cclxuICAgIGlmIChoYXNDb2wpIHtcclxuICAgICAgZnJvbSA9IHV0aWwuZHVwbGljYXRlKGdyb3VwLmZyb20pO1xyXG4gICAgICBmcm9tLnRyYW5zZm9ybSA9IGZyb20udHJhbnNmb3JtIHx8IFtdO1xyXG4gICAgICBmcm9tLnRyYW5zZm9ybS51bnNoaWZ0KHt0eXBlOiAnZmFjZXQnLCBncm91cGJ5OiBbbW9kZWwuZmllbGRSZWYoQ09MVU1OKV19KTtcclxuICAgIH1cclxuXHJcbiAgICBheGVzR3JwID0gZ3JvdXBkZWYoJ3gtYXhlcycsIHtcclxuICAgICAgICBheGVzOiBtb2RlbC5oYXMoWCkgPyBbY29tcGlsZUF4aXMoWCwgbW9kZWwsIGxheW91dCwgc3RhdHMpXSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB4OiBoYXNDb2wgPyB7c2NhbGU6IENPTFVNTiwgZmllbGQ6IG1vZGVsLmZpZWxkUmVmKENPTFVNTil9IDoge3ZhbHVlOiAwfSxcclxuICAgICAgICB3aWR0aDogaGFzQ29sICYmIHsndmFsdWUnOiBsYXlvdXQuY2VsbFdpZHRofSwgLy9IQUNLP1xyXG4gICAgICAgIGZyb206IGZyb21cclxuICAgICAgfSk7XHJcblxyXG4gICAgb3V0cHV0Lm1hcmtzLnVuc2hpZnQoYXhlc0dycCk7IC8vIG5lZWQgdG8gcHJlcGVuZCBzbyBpdCBhcHBlYXJzIHVuZGVyIHRoZSBwbG90c1xyXG4gICAgKG91dHB1dC5heGVzID0gb3V0cHV0LmF4ZXMgfHwgW10pO1xyXG4gICAgb3V0cHV0LmF4ZXMucHVzaChjb21waWxlQXhpcyhST1csIG1vZGVsLCBsYXlvdXQsIHN0YXRzKSk7XHJcbiAgfSBlbHNlIHsgLy8gZG9lc24ndCBoYXZlIHJvd1xyXG4gICAgaWYgKG1vZGVsLmhhcyhYKSkge1xyXG4gICAgICAvL2tlZXAgeCBheGlzIGluIHRoZSBjZWxsXHJcbiAgICAgIGNlbGxBeGVzLnB1c2goY29tcGlsZUF4aXMoWCwgbW9kZWwsIGxheW91dCwgc3RhdHMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChoYXNDb2wpIHtcclxuICAgIGlmICghbW9kZWwuaXNEaW1lbnNpb24oQ09MVU1OKSkge1xyXG4gICAgICB1dGlsLmVycm9yKCdDb2wgZW5jb2Rpbmcgc2hvdWxkIGJlIG9yZGluYWwuJyk7XHJcbiAgICB9XHJcbiAgICBlbnRlci54ID0ge3NjYWxlOiBDT0xVTU4sIGZpZWxkOiBtb2RlbC5maWVsZFJlZihDT0xVTU4pfTtcclxuICAgIGVudGVyLndpZHRoID0geyd2YWx1ZSc6IGxheW91dC5jZWxsV2lkdGh9OyAvLyBIQUNLXHJcblxyXG4gICAgZmFjZXRLZXlzLnB1c2gobW9kZWwuZmllbGRSZWYoQ09MVU1OKSk7XHJcblxyXG4gICAgaWYgKGhhc1Jvdykge1xyXG4gICAgICBmcm9tID0gdXRpbC5kdXBsaWNhdGUoZ3JvdXAuZnJvbSk7XHJcbiAgICAgIGZyb20udHJhbnNmb3JtID0gZnJvbS50cmFuc2Zvcm0gfHwgW107XHJcbiAgICAgIGZyb20udHJhbnNmb3JtLnVuc2hpZnQoe3R5cGU6ICdmYWNldCcsIGdyb3VwYnk6IFttb2RlbC5maWVsZFJlZihST1cpXX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGF4ZXNHcnAgPSBncm91cGRlZigneS1heGVzJywge1xyXG4gICAgICBheGVzOiBtb2RlbC5oYXMoWSkgPyBbY29tcGlsZUF4aXMoWSwgbW9kZWwsIGxheW91dCwgc3RhdHMpXSA6IHVuZGVmaW5lZCxcclxuICAgICAgeTogaGFzUm93ICYmIHtzY2FsZTogUk9XLCBmaWVsZDogbW9kZWwuZmllbGRSZWYoUk9XKX0sXHJcbiAgICAgIHg6IGhhc1JvdyAmJiB7dmFsdWU6IDB9LFxyXG4gICAgICBoZWlnaHQ6IGhhc1JvdyAmJiB7J3ZhbHVlJzogbGF5b3V0LmNlbGxIZWlnaHR9LCAvL0hBQ0s/XHJcbiAgICAgIGZyb206IGZyb21cclxuICAgIH0pO1xyXG5cclxuICAgIG91dHB1dC5tYXJrcy51bnNoaWZ0KGF4ZXNHcnApOyAvLyBuZWVkIHRvIHByZXBlbmQgc28gaXQgYXBwZWFycyB1bmRlciB0aGUgcGxvdHNcclxuICAgIChvdXRwdXQuYXhlcyA9IG91dHB1dC5heGVzIHx8IFtdKTtcclxuICAgIG91dHB1dC5heGVzLnB1c2goY29tcGlsZUF4aXMoQ09MVU1OLCBtb2RlbCwgbGF5b3V0LCBzdGF0cykpO1xyXG4gIH0gZWxzZSB7IC8vIGRvZXNuJ3QgaGF2ZSBjb2x1bW5cclxuICAgIGlmIChtb2RlbC5oYXMoWSkpIHtcclxuICAgICAgY2VsbEF4ZXMucHVzaChjb21waWxlQXhpcyhZLCBtb2RlbCwgbGF5b3V0LCBzdGF0cykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYXNzdW1pbmcgZXF1YWwgY2VsbFdpZHRoIGhlcmVcclxuICAvLyBUT0RPOiBzdXBwb3J0IGhldGVyb2dlbm91cyBjZWxsV2lkdGggKG1heWJlIGJ5IHVzaW5nIG11bHRpcGxlIHNjYWxlcz8pXHJcbiAgb3V0cHV0LnNjYWxlcyA9IChvdXRwdXQuc2NhbGVzIHx8IFtdKS5jb25jYXQoY29tcGlsZVNjYWxlcyhcclxuICAgIGNvbXBpbGVTY2FsZU5hbWVzKGVudGVyKS5jb25jYXQoc2luZ2xlU2NhbGVOYW1lcyksXHJcbiAgICBtb2RlbCxcclxuICAgIGxheW91dCxcclxuICAgIHN0YXRzLFxyXG4gICAgdHJ1ZVxyXG4gICkpOyAvLyByb3cvY29sdW1uIHNjYWxlcyArIGNlbGwgc2NhbGVzXHJcblxyXG4gIGlmIChjZWxsQXhlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBncm91cC5heGVzID0gY2VsbEF4ZXM7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgZmFjZXQgdHJhbnNmb3JtXHJcbiAgdmFyIHRyYW5zID0gKGdyb3VwLmZyb20udHJhbnNmb3JtIHx8IChncm91cC5mcm9tLnRyYW5zZm9ybSA9IFtdKSk7XHJcbiAgdHJhbnMudW5zaGlmdCh7dHlwZTogJ2ZhY2V0JywgZ3JvdXBieTogZmFjZXRLZXlzfSk7XHJcblxyXG4gIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvZDMtZm9ybWF0LmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0ZpZWxkRGVmfSBmcm9tICcuLi9zY2hlbWEvZmllbGRkZWYuc2NoZW1hJztcclxuXHJcbmltcG9ydCAqIGFzIGQzX2Zvcm1hdCBmcm9tICdkMy1mb3JtYXQnO1xyXG5pbXBvcnQge3NldHRlcn0gZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7Q09MVU1OLCBST1csIFgsIFksIFRFWFQsIENoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xyXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL3RpbWUnO1xyXG5pbXBvcnQge05PTUlOQUwsIE9SRElOQUwsIFFVQU5USVRBVElWRSwgVEVNUE9SQUx9IGZyb20gJy4uL3R5cGUnO1xyXG5pbXBvcnQge3JvdW5kRmxvYXR9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obW9kZWw6IE1vZGVsLCBzdGF0cykge1xyXG4gIHZhciBsYXlvdXQgPSBib3gobW9kZWwsIHN0YXRzKTtcclxuICBsYXlvdXQgPSBvZmZzZXQobW9kZWwsIHN0YXRzLCBsYXlvdXQpO1xyXG4gIHJldHVybiBsYXlvdXQ7XHJcbn1cclxuXHJcbi8qXHJcbiAgSEFDSyB0byBzZXQgY2hhcnQgc2l6ZVxyXG4gIE5PVEU6IHRoaXMgZmFpbHMgZm9yIHBsb3RzIGRyaXZlbiBieSBkZXJpdmVkIHZhbHVlcyAoZS5nLiwgYWdncmVnYXRlcylcclxuICBPbmUgc29sdXRpb24gaXMgdG8gdXBkYXRlIFZlZ2EgdG8gc3VwcG9ydCBhdXRvLXNpemluZ1xyXG4gIEluIHRoZSBtZWFudGltZSwgYXV0by1wYWRkaW5nIChtb3N0bHkpIGRvZXMgdGhlIHRyaWNrXHJcbiAqL1xyXG5mdW5jdGlvbiBib3gobW9kZWw6IE1vZGVsLCBzdGF0cykge1xyXG4gIHZhciBoYXNSb3cgPSBtb2RlbC5oYXMoUk9XKSxcclxuICAgICAgaGFzQ29sID0gbW9kZWwuaGFzKENPTFVNTiksXHJcbiAgICAgIGhhc1ggPSBtb2RlbC5oYXMoWCksXHJcbiAgICAgIGhhc1kgPSBtb2RlbC5oYXMoWSksXHJcbiAgICAgIG1hcmt0eXBlID0gbW9kZWwubWFya3R5cGUoKTtcclxuXHJcbiAgLy8gRklYTUUvSEFDSyB3ZSBuZWVkIHRvIHRha2UgZmlsdGVyIGludG8gYWNjb3VudFxyXG4gIHZhciB4Q2FyZGluYWxpdHkgPSBoYXNYICYmIG1vZGVsLmlzRGltZW5zaW9uKFgpID8gbW9kZWwuY2FyZGluYWxpdHkoWCwgc3RhdHMpIDogMSxcclxuICAgIHlDYXJkaW5hbGl0eSA9IGhhc1kgJiYgbW9kZWwuaXNEaW1lbnNpb24oWSkgPyBtb2RlbC5jYXJkaW5hbGl0eShZLCBzdGF0cykgOiAxO1xyXG5cclxuICB2YXIgdXNlU21hbGxCYW5kID0geENhcmRpbmFsaXR5ID4gbW9kZWwuY29uZmlnKCdsYXJnZUJhbmRNYXhDYXJkaW5hbGl0eScpIHx8XHJcbiAgICB5Q2FyZGluYWxpdHkgPiBtb2RlbC5jb25maWcoJ2xhcmdlQmFuZE1heENhcmRpbmFsaXR5Jyk7XHJcblxyXG4gIHZhciBjZWxsV2lkdGgsIGNlbGxIZWlnaHQsIGNlbGxQYWRkaW5nID0gbW9kZWwuY29uZmlnKCdjZWxsUGFkZGluZycpO1xyXG5cclxuICAvLyBzZXQgY2VsbFdpZHRoXHJcbiAgaWYgKGhhc1gpIHtcclxuICAgIGlmIChtb2RlbC5pc09yZGluYWxTY2FsZShYKSkge1xyXG4gICAgICAvLyBmb3Igb3JkaW5hbCwgaGFzQ29sIG9yIG5vdCBkb2Vzbid0IG1hdHRlciAtLSB3ZSBzY2FsZSBiYXNlZCBvbiBjYXJkaW5hbGl0eVxyXG4gICAgICBjZWxsV2lkdGggPSAoeENhcmRpbmFsaXR5ICsgbW9kZWwucGFkZGluZyhYKSkgKiBtb2RlbC5iYW5kV2lkdGgoWCwgdXNlU21hbGxCYW5kKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbGxXaWR0aCA9IGhhc0NvbCB8fCBoYXNSb3cgPyBtb2RlbC5maWVsZERlZihDT0xVTU4pLndpZHRoIDogIG1vZGVsLmNvbmZpZygnc2luZ2xlV2lkdGgnKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKG1hcmt0eXBlID09PSBURVhUKSB7XHJcbiAgICAgIGNlbGxXaWR0aCA9IG1vZGVsLmNvbmZpZygndGV4dENlbGxXaWR0aCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbFdpZHRoID0gbW9kZWwuYmFuZFdpZHRoKFgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc2V0IGNlbGxIZWlnaHRcclxuICBpZiAoaGFzWSkge1xyXG4gICAgaWYgKG1vZGVsLmlzT3JkaW5hbFNjYWxlKFkpKSB7XHJcbiAgICAgIC8vIGZvciBvcmRpbmFsLCBoYXNDb2wgb3Igbm90IGRvZXNuJ3QgbWF0dGVyIC0tIHdlIHNjYWxlIGJhc2VkIG9uIGNhcmRpbmFsaXR5XHJcbiAgICAgIGNlbGxIZWlnaHQgPSAoeUNhcmRpbmFsaXR5ICsgbW9kZWwucGFkZGluZyhZKSkgKiBtb2RlbC5iYW5kV2lkdGgoWSwgdXNlU21hbGxCYW5kKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbGxIZWlnaHQgPSBoYXNDb2wgfHwgaGFzUm93ID8gbW9kZWwuZmllbGREZWYoUk9XKS5oZWlnaHQgOiAgbW9kZWwuY29uZmlnKCdzaW5nbGVIZWlnaHQnKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY2VsbEhlaWdodCA9IG1vZGVsLmJhbmRXaWR0aChZKTtcclxuICB9XHJcblxyXG4gIC8vIENlbGwgYmFuZHMgdXNlIHJhbmdlQmFuZHMoKS4gVGhlcmUgYXJlIG4tMSBwYWRkaW5nLiAgT3V0ZXJwYWRkaW5nID0gMCBmb3IgY2VsbHNcclxuXHJcbiAgdmFyIHdpZHRoID0gY2VsbFdpZHRoLCBoZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gIGlmIChoYXNDb2wpIHtcclxuICAgIHZhciBjb2xDYXJkaW5hbGl0eSA9IG1vZGVsLmNhcmRpbmFsaXR5KENPTFVNTiwgc3RhdHMpO1xyXG4gICAgd2lkdGggPSBjZWxsV2lkdGggKiAoKDEgKyBjZWxsUGFkZGluZykgKiAoY29sQ2FyZGluYWxpdHkgLSAxKSArIDEpO1xyXG4gIH1cclxuICBpZiAoaGFzUm93KSB7XHJcbiAgICB2YXIgcm93Q2FyZGluYWxpdHkgPSAgbW9kZWwuY2FyZGluYWxpdHkoUk9XLCBzdGF0cyk7XHJcbiAgICBoZWlnaHQgPSBjZWxsSGVpZ2h0ICogKCgxICsgY2VsbFBhZGRpbmcpICogKHJvd0NhcmRpbmFsaXR5IC0gMSkgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSB3aG9sZSBjZWxsXHJcbiAgICBjZWxsV2lkdGg6IHJvdW5kRmxvYXQoY2VsbFdpZHRoKSxcclxuICAgIGNlbGxIZWlnaHQ6IHJvdW5kRmxvYXQoY2VsbEhlaWdodCksXHJcbiAgICBjZWxsUGFkZGluZzogY2VsbFBhZGRpbmcsXHJcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBjaGFydFxyXG4gICAgd2lkdGg6IHJvdW5kRmxvYXQod2lkdGgpLFxyXG4gICAgaGVpZ2h0OiByb3VuZEZsb2F0KGhlaWdodCksXHJcbiAgICAvLyBpbmZvcm1hdGlvbiBhYm91dCB4IGFuZCB5LCBzdWNoIGFzIGJhbmQgc2l6ZVxyXG4gICAgeDoge3VzZVNtYWxsQmFuZDogdXNlU21hbGxCYW5kfSxcclxuICAgIHk6IHt1c2VTbWFsbEJhbmQ6IHVzZVNtYWxsQmFuZH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYXhOdW1iZXJMZW5ndGgobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsLCBmaWVsZFN0YXRzKSB7XHJcbiAgdmFyIGZvcm1hdCA9IG1vZGVsLm51bWJlckZvcm1hdChjaGFubmVsKTtcclxuICByZXR1cm4gZDNfZm9ybWF0LmZvcm1hdChmb3JtYXQpKGZpZWxkU3RhdHMubWF4KS5sZW5ndGg7XHJcbn1cclxuXHJcbi8vIFRPRE8oIzYwMCkgcmV2aXNlIHRoaXNcclxuZnVuY3Rpb24gZ2V0TWF4TGVuZ3RoKG1vZGVsOiBNb2RlbCwgc3RhdHMsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICB2YXIgZmllbGREZWY6IEZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCksXHJcbiAgICBmaWVsZFN0YXRzID0gc3RhdHNbZmllbGREZWYuZmllbGRdO1xyXG5cclxuICBpZiAoZmllbGREZWYuYmluKSB7XHJcbiAgICAvLyBUT0RPIG9uY2UgYmluIHN1cHBvcnQgcmFuZ2UsIG5lZWQgdG8gdXBkYXRlIHRoaXNcclxuICAgIHJldHVybiBnZXRNYXhOdW1iZXJMZW5ndGgobW9kZWwsIGNoYW5uZWwsIGZpZWxkU3RhdHMpO1xyXG4gIH0gaWYgKGZpZWxkRGVmLnR5cGUgPT09IFFVQU5USVRBVElWRSkge1xyXG4gICAgcmV0dXJuIGdldE1heE51bWJlckxlbmd0aChtb2RlbCwgY2hhbm5lbCwgZmllbGRTdGF0cyk7XHJcbiAgfSBlbHNlIGlmIChmaWVsZERlZi50eXBlID09PSBURU1QT1JBTCkge1xyXG4gICAgcmV0dXJuIHRpbWUubWF4TGVuZ3RoKG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLnRpbWVVbml0LCBtb2RlbCk7XHJcbiAgfSBlbHNlIGlmIChtb2RlbC5pc1R5cGVzKGNoYW5uZWwsIFtOT01JTkFMLCBPUkRJTkFMXSkpIHtcclxuICAgIGlmKGZpZWxkU3RhdHMudHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIGdldE1heE51bWJlckxlbmd0aChtb2RlbCwgY2hhbm5lbCwgZmllbGRTdGF0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4oZmllbGRTdGF0cy5tYXgsIGZpZWxkRGVmLmF4aXMubGFiZWxNYXhMZW5ndGggfHwgSW5maW5pdHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb2Zmc2V0KG1vZGVsOiBNb2RlbCwgc3RhdHMsIGxheW91dCkge1xyXG4gIFtYLCBZXS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFubmVsKSB7XHJcbiAgICAvLyBUT0RPKGthbml0dyk6IEp1bCAxOSwgMjAxNSAtIGNyZWF0ZSBhIHNldCBvZiB2aXN1YWwgdGVzdCBmb3IgZXh0cmFPZmZzZXRcclxuICAgIGxldCBleHRyYU9mZnNldCA9IGNoYW5uZWwgPT09IFggPyAyMCA6IDIyO1xyXG4gICAgbGV0IGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCk7XHJcbiAgICBsZXQgbWF4TGVuZ3RoO1xyXG5cclxuICAgIGlmIChtb2RlbC5pc0RpbWVuc2lvbihjaGFubmVsKSB8fCBmaWVsZERlZi50eXBlID09PSBURU1QT1JBTCkge1xyXG4gICAgICBtYXhMZW5ndGggPSBnZXRNYXhMZW5ndGgobW9kZWwsIHN0YXRzLCBjaGFubmVsKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIC8vIFRPRE8gb25jZSB3ZSBoYXZlICM1MTIgKGFsbG93IHVzaW5nIGluZmVycmVkIHR5cGUpXHJcbiAgICAgIC8vIE5lZWQgdG8gYWRqdXN0IGNvbmRpdGlvbiBoZXJlLlxyXG4gICAgICBmaWVsZERlZi50eXBlID09PSBRVUFOVElUQVRJVkUgfHwgZmllbGREZWYuYWdncmVnYXRlID09PSAnY291bnQnXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNoYW5uZWw9PT1ZXHJcbiAgICAgICAgLy8gfHwgKGNoYW5uZWw9PT1YICYmIGZhbHNlKVxyXG4gICAgICAgIC8vIEZJWE1FIGRldGVybWluZSB3aGVuIFggd291bGQgcm90YXRlLCBidXQgc2hvdWxkIG1vdmUgdGhpcyB0byBheGlzLmpzIGZpcnN0ICM1MDZcclxuICAgICAgKSB7XHJcbiAgICAgICAgbWF4TGVuZ3RoID0gZ2V0TWF4TGVuZ3RoKG1vZGVsLCBzdGF0cywgY2hhbm5lbCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG5vdGhpbmdcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4TGVuZ3RoKSB7XHJcbiAgICAgIHNldHRlcihsYXlvdXQsW2NoYW5uZWwsICdheGlzVGl0bGVPZmZzZXQnXSwgbW9kZWwuY29uZmlnKCdjaGFyYWN0ZXJXaWR0aCcpICogIG1heExlbmd0aCArIGV4dHJhT2Zmc2V0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIG5vIG1heCBsZW5ndGggKG5vIHJvdGF0aW9uIGNhc2UpLCB1c2UgbWF4TGVuZ3RoID0gM1xyXG4gICAgICBzZXR0ZXIobGF5b3V0LFtjaGFubmVsLCAnYXhpc1RpdGxlT2Zmc2V0J10sIG1vZGVsLmNvbmZpZygnY2hhcmFjdGVyV2lkdGgnKSAqIDMgKyBleHRyYU9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG4gIHJldHVybiBsYXlvdXQ7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0IHtDT0xPUiwgU0laRSwgU0hBUEUsIENoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xyXG5pbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL3RpbWUnO1xyXG5pbXBvcnQge1RFTVBPUkFMfSBmcm9tICcuLi90eXBlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTGVnZW5kcyhtb2RlbDogTW9kZWwsIHN0eWxlQ2ZnKSB7XHJcbiAgdmFyIGRlZnMgPSBbXTtcclxuXHJcbiAgaWYgKG1vZGVsLmhhcyhDT0xPUikgJiYgbW9kZWwuZmllbGREZWYoQ09MT1IpLmxlZ2VuZCkge1xyXG4gICAgZGVmcy5wdXNoKGNvbXBpbGVMZWdlbmQobW9kZWwsIENPTE9SLCB7XHJcbiAgICAgIGZpbGw6IENPTE9SXHJcbiAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGlmIHRoaXMgc2hvdWxkIGJlIHN0cm9rZSBmb3IgbGluZVxyXG4gICAgfSwgc3R5bGVDZmcpKTtcclxuICB9XHJcblxyXG4gIGlmIChtb2RlbC5oYXMoU0laRSkgJiYgbW9kZWwuZmllbGREZWYoU0laRSkubGVnZW5kKSB7XHJcbiAgICBkZWZzLnB1c2goY29tcGlsZUxlZ2VuZChtb2RlbCwgU0laRSwge1xyXG4gICAgICBzaXplOiBTSVpFXHJcbiAgICB9LCBzdHlsZUNmZykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1vZGVsLmhhcyhTSEFQRSkgJiYgbW9kZWwuZmllbGREZWYoU0hBUEUpLmxlZ2VuZCkge1xyXG4gICAgZGVmcy5wdXNoKGNvbXBpbGVMZWdlbmQobW9kZWwsIFNIQVBFLCB7XHJcbiAgICAgIHNoYXBlOiBTSEFQRVxyXG4gICAgfSwgc3R5bGVDZmcpKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlZnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTGVnZW5kKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgZGVmLCBzdHlsZUNmZykge1xyXG4gIGxldCBsZWdlbmQgPSBtb2RlbC5maWVsZERlZihjaGFubmVsKS5sZWdlbmQ7XHJcblxyXG4gIC8vIDEuMSBBZGQgcHJvcGVydGllcyB3aXRoIHNwZWNpYWwgcnVsZXNcclxuICBkZWYudGl0bGUgPSB0aXRsZShtb2RlbCwgY2hhbm5lbCk7XHJcblxyXG4gIC8vIDEuMiBBZGQgcHJvcGVydGllcyB3aXRob3V0IHJ1bGVzXHJcbiAgWydvcmllbnQnLCAnZm9ybWF0JywgJ3ZhbHVlcyddLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuICAgIGxldCB2YWx1ZSA9IGxlZ2VuZFtwcm9wZXJ0eV07XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWZbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIDIpIEFkZCBtYXJrIHByb3BlcnR5IGRlZmluaXRpb24gZ3JvdXBzXHJcbiAgbGV0IHByb3BzID0gbGVnZW5kLnByb3BlcnRpZXMgfHwge307XHJcbiAgWyd0aXRsZScsICdsYWJlbHMnLCAnc3ltYm9scycsICdsZWdlbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBwcm9wZXJ0aWVzW2dyb3VwXSA/XHJcbiAgICAgIHByb3BlcnRpZXNbZ3JvdXBdKG1vZGVsLCBjaGFubmVsLCBwcm9wc1tncm91cF0sIHN0eWxlQ2ZnKSA6IC8vIGFwcGx5IHJ1bGVcclxuICAgICAgcHJvcHNbZ3JvdXBdOyAvLyBubyBydWxlIC0tIGp1c3QgZGVmYXVsdCB2YWx1ZXNcclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlZi5wcm9wZXJ0aWVzID0gZGVmLnByb3BlcnRpZXMgfHwge307XHJcbiAgICAgIGRlZi5wcm9wZXJ0aWVzW2dyb3VwXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGVmO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGl0bGUobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgbGV0IGxlZyA9IG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLmxlZ2VuZDtcclxuXHJcbiAgaWYgKGxlZy50aXRsZSkgcmV0dXJuIGxlZy50aXRsZTtcclxuXHJcbiAgcmV0dXJuIG1vZGVsLmZpZWxkVGl0bGUoY2hhbm5lbCk7XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBwcm9wZXJ0aWVzIHtcclxuICBleHBvcnQgZnVuY3Rpb24gbGFiZWxzKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgc3BlYykge1xyXG4gICAgdmFyIGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCk7XHJcbiAgICB2YXIgdGltZVVuaXQgPSBmaWVsZERlZi50aW1lVW5pdDtcclxuICAgIGlmIChmaWVsZERlZi50eXBlID09PSBURU1QT1JBTCAmJiB0aW1lVW5pdCAmJiB0aW1lLmhhc1NjYWxlKHRpbWVVbml0KSkge1xyXG4gICAgICByZXR1cm4gdXRpbC5leHRlbmQoe1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgIHNjYWxlOiAndGltZS0nKyB0aW1lVW5pdFxyXG4gICAgICAgIH1cclxuICAgICAgfSwgc3BlYyB8fCB7fSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BlYztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzeW1ib2xzKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgc3BlYywgc3R5bGVDZmcpIHtcclxuICAgIGxldCBzeW1ib2xzOmFueSA9IHt9O1xyXG4gICAgbGV0IG1hcmt0eXBlID0gbW9kZWwubWFya3R5cGUoKTtcclxuXHJcbiAgICBzd2l0Y2ggKG1hcmt0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2Jhcic6XHJcbiAgICAgIGNhc2UgJ3RpY2snOlxyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBzeW1ib2xzLnN0cm9rZSA9IHt2YWx1ZTogJ3RyYW5zcGFyZW50J307XHJcbiAgICAgICAgc3ltYm9scy5zaGFwZSA9IHt2YWx1ZTogJ3NxdWFyZSd9O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgY2FzZSAnc3F1YXJlJzpcclxuICAgICAgICBzeW1ib2xzLnNoYXBlID0ge3ZhbHVlOiBtYXJrdHlwZX07XHJcbiAgICAgICAgLyogZmFsbCB0aHJvdWdoICovXHJcbiAgICAgIGNhc2UgJ3BvaW50JzpcclxuICAgICAgICAvLyBmaWxsIG9yIHN0cm9rZVxyXG4gICAgICAgIGlmIChtb2RlbC5maWVsZERlZihTSEFQRSkuZmlsbGVkKSB7XHJcbiAgICAgICAgICBpZiAobW9kZWwuaGFzKENPTE9SKSAmJiBjaGFubmVsID09PSBDT0xPUikge1xyXG4gICAgICAgICAgICBzeW1ib2xzLmZpbGwgPSB7c2NhbGU6IENPTE9SLCBmaWVsZDogJ2RhdGEnfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN5bWJvbHMuZmlsbCA9IHt2YWx1ZTogbW9kZWwuZmllbGREZWYoQ09MT1IpLnZhbHVlfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bWJvbHMuc3Ryb2tlID0ge3ZhbHVlOiAndHJhbnNwYXJlbnQnfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG1vZGVsLmhhcyhDT0xPUikgJiYgY2hhbm5lbCA9PT0gQ09MT1IpIHtcclxuICAgICAgICAgICAgc3ltYm9scy5zdHJva2UgPSB7c2NhbGU6IENPTE9SLCBmaWVsZDogJ2RhdGEnfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN5bWJvbHMuc3Ryb2tlID0ge3ZhbHVlOiBtb2RlbC5maWVsZERlZihDT0xPUikudmFsdWV9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3ltYm9scy5maWxsID0ge3ZhbHVlOiAndHJhbnNwYXJlbnQnfTtcclxuICAgICAgICAgIHN5bWJvbHMuc3Ryb2tlV2lkdGggPSB7dmFsdWU6IG1vZGVsLmNvbmZpZygnc3Ryb2tlV2lkdGgnKX07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgIGNhc2UgJ2FyZWEnOlxyXG4gICAgICAgIC8vIFRPRE8gdXNlIHNoYXBlIGhlcmUgYWZ0ZXIgaW1wbGVtZW50aW5nICM1MDhcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3BhY2l0eSA9IG1vZGVsLmZpZWxkRGVmKENPTE9SKS5vcGFjaXR5IHx8IHN0eWxlQ2ZnLm9wYWNpdHk7XHJcbiAgICBpZiAob3BhY2l0eSkge1xyXG4gICAgICBzeW1ib2xzLm9wYWNpdHkgPSB7dmFsdWU6IG9wYWNpdHl9O1xyXG4gICAgfVxyXG5cclxuICAgIHN5bWJvbHMgPSB1dGlsLmV4dGVuZChzeW1ib2xzLCBzcGVjIHx8IHt9KTtcclxuXHJcbiAgICByZXR1cm4gdXRpbC5rZXlzKHN5bWJvbHMpLmxlbmd0aCA+IDAgPyBzeW1ib2xzIDogdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IHtDT0xVTU4sIFJPVywgWCwgWSwgQ09MT1IsIFRFWFQsIFNJWkUsIFNIQVBFfSBmcm9tICcuLi9jaGFubmVsJztcclxuaW1wb3J0IHtRVUFOVElUQVRJVkV9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2Jsb2IvbWFzdGVyL2RvYy9zcGVjLm1kIzExLWFtYmllbnQtZGVjbGFyYXRpb25zXHJcbmRlY2xhcmUgdmFyIGV4cG9ydHM7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU1hcmtzKG1vZGVsOiBNb2RlbCwgbGF5b3V0LCBzdHlsZSkge1xyXG4gIHZhciBkZWZzID0gW10sXHJcbiAgICBtYXJrID0gZXhwb3J0c1ttb2RlbC5tYXJrdHlwZSgpXSxcclxuICAgIGZyb20gPSBtb2RlbC5kYXRhVGFibGUoKTtcclxuXHJcbiAgLy8gdG8gYWRkIGEgYmFja2dyb3VuZCB0byB0ZXh0LCB3ZSBuZWVkIHRvIGFkZCBpdCBiZWZvcmUgdGhlIHRleHRcclxuICBpZiAobW9kZWwubWFya3R5cGUoKSA9PT0gVEVYVCAmJiBtb2RlbC5oYXMoQ09MT1IpKSB7XHJcbiAgICB2YXIgYmcgPSB7XHJcbiAgICAgIHg6IHt2YWx1ZTogMH0sXHJcbiAgICAgIHk6IHt2YWx1ZTogMH0sXHJcbiAgICAgIHgyOiB7dmFsdWU6IGxheW91dC5jZWxsV2lkdGh9LFxyXG4gICAgICB5Mjoge3ZhbHVlOiBsYXlvdXQuY2VsbEhlaWdodH0sXHJcbiAgICAgIGZpbGw6IHtzY2FsZTogQ09MT1IsIGZpZWxkOiBtb2RlbC5maWVsZFJlZihDT0xPUil9XHJcbiAgICB9O1xyXG4gICAgZGVmcy5wdXNoKHtcclxuICAgICAgdHlwZTogJ3JlY3QnLFxyXG4gICAgICBmcm9tOiB7ZGF0YTogZnJvbX0sXHJcbiAgICAgIHByb3BlcnRpZXM6IHtlbnRlcjogYmcsIHVwZGF0ZTogYmd9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGFkZCB0aGUgbWFyayBkZWYgZm9yIHRoZSBtYWluIHRoaW5nXHJcbiAgdmFyIHAgPSBtYXJrLnByb3AobW9kZWwsIGxheW91dCwgc3R5bGUpO1xyXG4gIGRlZnMucHVzaCh7XHJcbiAgICB0eXBlOiBtYXJrLnR5cGUsXHJcbiAgICBmcm9tOiB7ZGF0YTogZnJvbX0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7dXBkYXRlOiBwfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGVmcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJhciA9IHtcclxuICB0eXBlOiAncmVjdCcsXHJcbiAgcHJvcDogYmFyX3Byb3BzXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGluZSA9IHtcclxuICB0eXBlOiAnbGluZScsXHJcbiAgcHJvcDogbGluZV9wcm9wc1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFyZWEgPSB7XHJcbiAgdHlwZTogJ2FyZWEnLFxyXG4gIHByb3A6IGFyZWFfcHJvcHNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0aWNrID0ge1xyXG4gIHR5cGU6ICdyZWN0JyxcclxuICBwcm9wOiB0aWNrX3Byb3BzXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2lyY2xlID0ge1xyXG4gIHR5cGU6ICdzeW1ib2wnLFxyXG4gIHByb3A6IGZpbGxlZF9wb2ludF9wcm9wcygnY2lyY2xlJylcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzcXVhcmUgPSB7XHJcbiAgdHlwZTogJ3N5bWJvbCcsXHJcbiAgcHJvcDogZmlsbGVkX3BvaW50X3Byb3BzKCdzcXVhcmUnKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvaW50ID0ge1xyXG4gIHR5cGU6ICdzeW1ib2wnLFxyXG4gIHByb3A6IHBvaW50X3Byb3BzXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dCA9IHtcclxuICB0eXBlOiAndGV4dCcsXHJcbiAgcHJvcDogdGV4dF9wcm9wc1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYmFyX3Byb3BzKGU6IE1vZGVsLCBsYXlvdXQsIHN0eWxlKSB7XHJcbiAgLy8gVE9ETyBVc2UgVmVnYSdzIG1hcmtzIHByb3BlcnRpZXMgaW50ZXJmYWNlXHJcbiAgdmFyIHA6YW55ID0ge307XHJcblxyXG4gIC8vIHgncyBhbmQgd2lkdGhcclxuICBpZiAoZS5maWVsZERlZihYKS5iaW4pIHtcclxuICAgIHAueCA9IHtzY2FsZTogWCwgZmllbGQ6IGUuZmllbGRSZWYoWCwge2JpblN1ZmZpeDogJ19zdGFydCd9KSwgb2Zmc2V0OiAxfTtcclxuICAgIHAueDIgPSB7c2NhbGU6IFgsIGZpZWxkOiBlLmZpZWxkUmVmKFgsIHtiaW5TdWZmaXg6ICdfZW5kJ30pfTtcclxuICB9IGVsc2UgaWYgKGUuaXNNZWFzdXJlKFgpKSB7XHJcbiAgICBwLnggPSB7c2NhbGU6IFgsIGZpZWxkOiBlLmZpZWxkUmVmKFgpfTtcclxuICAgIGlmICghZS5oYXMoWSkgfHwgZS5pc0RpbWVuc2lvbihZKSkge1xyXG4gICAgICBwLngyID0ge3ZhbHVlOiAwfTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGUuaGFzKFgpKSB7IC8vIGlzIG9yZGluYWxcclxuICAgICAgIHAueGMgPSB7c2NhbGU6IFgsIGZpZWxkOiBlLmZpZWxkUmVmKFgpfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICBwLnggPSB7dmFsdWU6IDAsIG9mZnNldDogZS5jb25maWcoJ3NpbmdsZUJhck9mZnNldCcpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHdpZHRoXHJcbiAgaWYgKCFwLngyKSB7XHJcbiAgICBpZiAoIWUuaGFzKFgpIHx8IGUuaXNPcmRpbmFsU2NhbGUoWCkpIHsgLy8gbm8gWCBvciBYIGlzIG9yZGluYWxcclxuICAgICAgaWYgKGUuaGFzKFNJWkUpKSB7XHJcbiAgICAgICAgcC53aWR0aCA9IHtzY2FsZTogU0laRSwgZmllbGQ6IGUuZmllbGRSZWYoU0laRSl9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHAud2lkdGggPSB7XHJcbiAgICAgICAgICB2YWx1ZTogZS5iYW5kV2lkdGgoWCwgbGF5b3V0LngudXNlU21hbGxCYW5kKSxcclxuICAgICAgICAgIG9mZnNldDogLTFcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgeyAvLyBYIGlzIFF1YW50IG9yIFRpbWUgU2NhbGVcclxuICAgICAgcC53aWR0aCA9IHt2YWx1ZTogMn07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB5J3MgJiBoZWlnaHRcclxuICBpZiAoZS5maWVsZERlZihZKS5iaW4pIHtcclxuICAgIHAueSA9IHtzY2FsZTogWSwgZmllbGQ6IGUuZmllbGRSZWYoWSwge2JpblN1ZmZpeDogJ19zdGFydCd9KX07XHJcbiAgICBwLnkyID0ge3NjYWxlOiBZLCBmaWVsZDogZS5maWVsZFJlZihZLCB7YmluU3VmZml4OiAnX2VuZCd9KSwgb2Zmc2V0OiAxfTtcclxuICB9IGVsc2UgaWYgKGUuaXNNZWFzdXJlKFkpKSB7XHJcbiAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFkpfTtcclxuICAgIHAueTIgPSB7ZmllbGQ6IHtncm91cDogJ2hlaWdodCd9fTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGUuaGFzKFkpKSB7IC8vIGlzIG9yZGluYWxcclxuICAgICAgcC55YyA9IHtzY2FsZTogWSwgZmllbGQ6IGUuZmllbGRSZWYoWSl9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcC55MiA9IHtcclxuICAgICAgICBmaWVsZDoge2dyb3VwOiAnaGVpZ2h0J30sXHJcbiAgICAgICAgb2Zmc2V0OiAtZS5jb25maWcoJ3NpbmdsZUJhck9mZnNldCcpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUuaGFzKFNJWkUpKSB7XHJcbiAgICAgIHAuaGVpZ2h0ID0ge3NjYWxlOiBTSVpFLCBmaWVsZDogZS5maWVsZFJlZihTSVpFKX07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwLmhlaWdodCA9IHtcclxuICAgICAgICB2YWx1ZTogZS5iYW5kV2lkdGgoWSwgbGF5b3V0LnkudXNlU21hbGxCYW5kKSxcclxuICAgICAgICBvZmZzZXQ6IC0xXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBmaWxsXHJcbiAgaWYgKGUuaGFzKENPTE9SKSkge1xyXG4gICAgcC5maWxsID0ge3NjYWxlOiBDT0xPUiwgZmllbGQ6IGUuZmllbGRSZWYoQ09MT1IpfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcC5maWxsID0ge3ZhbHVlOiBlLmZpZWxkRGVmKENPTE9SKS52YWx1ZX07XHJcbiAgfVxyXG5cclxuICAvLyBvcGFjaXR5XHJcbiAgdmFyIG9wYWNpdHkgPSBlLmZpZWxkRGVmKENPTE9SKS5vcGFjaXR5O1xyXG4gIGlmIChvcGFjaXR5KSBwLm9wYWNpdHkgPSB7dmFsdWU6IG9wYWNpdHl9O1xyXG5cclxuICByZXR1cm4gcDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9pbnRfcHJvcHMoZTogTW9kZWwsIGxheW91dCwgc3R5bGUpIHtcclxuICAvLyBUT0RPIFVzZSBWZWdhJ3MgbWFya3MgcHJvcGVydGllcyBpbnRlcmZhY2VcclxuICB2YXIgcDphbnkgPSB7fTtcclxuXHJcbiAgLy8geFxyXG4gIGlmIChlLmhhcyhYKSkge1xyXG4gICAgcC54ID0ge3NjYWxlOiBYLCBmaWVsZDogZS5maWVsZFJlZihYLCB7YmluU3VmZml4OiAnX21pZCd9KX07XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoWCkpIHtcclxuICAgIHAueCA9IHt2YWx1ZTogZS5iYW5kV2lkdGgoWCwgbGF5b3V0LngudXNlU21hbGxCYW5kKSAvIDJ9O1xyXG4gIH1cclxuXHJcbiAgLy8geVxyXG4gIGlmIChlLmhhcyhZKSkge1xyXG4gICAgcC55ID0ge3NjYWxlOiBZLCBmaWVsZDogZS5maWVsZFJlZihZLCB7YmluU3VmZml4OiAnX21pZCd9KX07XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoWSkpIHtcclxuICAgIHAueSA9IHt2YWx1ZTogZS5iYW5kV2lkdGgoWSwgbGF5b3V0LnkudXNlU21hbGxCYW5kKSAvIDJ9O1xyXG4gIH1cclxuXHJcbiAgLy8gc2l6ZVxyXG4gIGlmIChlLmhhcyhTSVpFKSkge1xyXG4gICAgcC5zaXplID0ge3NjYWxlOiBTSVpFLCBmaWVsZDogZS5maWVsZFJlZihTSVpFKX07XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoU0laRSkpIHtcclxuICAgIHAuc2l6ZSA9IHt2YWx1ZTogZS5maWVsZERlZihTSVpFKS52YWx1ZX07XHJcbiAgfVxyXG5cclxuICAvLyBzaGFwZVxyXG4gIGlmIChlLmhhcyhTSEFQRSkpIHtcclxuICAgIHAuc2hhcGUgPSB7c2NhbGU6IFNIQVBFLCBmaWVsZDogZS5maWVsZFJlZihTSEFQRSl9O1xyXG4gIH0gZWxzZSBpZiAoIWUuaGFzKFNIQVBFKSkge1xyXG4gICAgcC5zaGFwZSA9IHt2YWx1ZTogZS5maWVsZERlZihTSEFQRSkudmFsdWV9O1xyXG4gIH1cclxuXHJcbiAgLy8gZmlsbCBvciBzdHJva2VcclxuICBpZiAoZS5maWVsZERlZihTSEFQRSkuZmlsbGVkKSB7XHJcbiAgICBpZiAoZS5oYXMoQ09MT1IpKSB7XHJcbiAgICAgIHAuZmlsbCA9IHtzY2FsZTogQ09MT1IsIGZpZWxkOiBlLmZpZWxkUmVmKENPTE9SKX07XHJcbiAgICB9IGVsc2UgaWYgKCFlLmhhcyhDT0xPUikpIHtcclxuICAgICAgcC5maWxsID0ge3ZhbHVlOiBlLmZpZWxkRGVmKENPTE9SKS52YWx1ZX07XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChlLmhhcyhDT0xPUikpIHtcclxuICAgICAgcC5zdHJva2UgPSB7c2NhbGU6IENPTE9SLCBmaWVsZDogZS5maWVsZFJlZihDT0xPUil9O1xyXG4gICAgfSBlbHNlIGlmICghZS5oYXMoQ09MT1IpKSB7XHJcbiAgICAgIHAuc3Ryb2tlID0ge3ZhbHVlOiBlLmZpZWxkRGVmKENPTE9SKS52YWx1ZX07XHJcbiAgICB9XHJcbiAgICBwLnN0cm9rZVdpZHRoID0ge3ZhbHVlOiBlLmNvbmZpZygnc3Ryb2tlV2lkdGgnKX07XHJcbiAgfVxyXG5cclxuICAvLyBvcGFjaXR5XHJcbiAgdmFyIG9wYWNpdHkgPSBlLmZpZWxkRGVmKENPTE9SKS5vcGFjaXR5IHx8IHN0eWxlLm9wYWNpdHk7XHJcbiAgaWYgKG9wYWNpdHkpIHAub3BhY2l0eSA9IHt2YWx1ZTogb3BhY2l0eX07XHJcblxyXG4gIHJldHVybiBwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaW5lX3Byb3BzKGU6IE1vZGVsLGxheW91dCwgc3R5bGUpIHtcclxuICAvLyBUT0RPIFVzZSBWZWdhJ3MgbWFya3MgcHJvcGVydGllcyBpbnRlcmZhY2VcclxuICB2YXIgcDphbnkgPSB7fTtcclxuXHJcbiAgLy8geFxyXG4gIGlmIChlLmhhcyhYKSkge1xyXG4gICAgcC54ID0ge3NjYWxlOiBYLCBmaWVsZDogZS5maWVsZFJlZihYLCB7YmluU3VmZml4OiAnX21pZCd9KX07XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoWCkpIHtcclxuICAgIHAueCA9IHt2YWx1ZTogMH07XHJcbiAgfVxyXG5cclxuICAvLyB5XHJcbiAgaWYgKGUuaGFzKFkpKSB7XHJcbiAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFksIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICB9IGVsc2UgaWYgKCFlLmhhcyhZKSkge1xyXG4gICAgcC55ID0ge2ZpZWxkOiB7Z3JvdXA6ICdoZWlnaHQnfX07XHJcbiAgfVxyXG5cclxuICAvLyBzdHJva2VcclxuICBpZiAoZS5oYXMoQ09MT1IpKSB7XHJcbiAgICBwLnN0cm9rZSA9IHtzY2FsZTogQ09MT1IsIGZpZWxkOiBlLmZpZWxkUmVmKENPTE9SKX07XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoQ09MT1IpKSB7XHJcbiAgICBwLnN0cm9rZSA9IHt2YWx1ZTogZS5maWVsZERlZihDT0xPUikudmFsdWV9O1xyXG4gIH1cclxuXHJcbiAgdmFyIG9wYWNpdHkgPSBlLmZpZWxkRGVmKENPTE9SKS5vcGFjaXR5O1xyXG4gIGlmIChvcGFjaXR5KSBwLm9wYWNpdHkgPSB7dmFsdWU6IG9wYWNpdHl9O1xyXG5cclxuICBwLnN0cm9rZVdpZHRoID0ge3ZhbHVlOiBlLmNvbmZpZygnc3Ryb2tlV2lkdGgnKX07XHJcblxyXG4gIHJldHVybiBwO1xyXG59XHJcblxyXG4vLyBUT0RPKCM2OTQpOiBvcHRpbWl6ZSBhcmVhJ3MgdXNhZ2Ugd2l0aCBiaW5cclxuZnVuY3Rpb24gYXJlYV9wcm9wcyhlOiBNb2RlbCwgbGF5b3V0LCBzdHlsZSkge1xyXG4gIC8vIFRPRE8gVXNlIFZlZ2EncyBtYXJrcyBwcm9wZXJ0aWVzIGludGVyZmFjZVxyXG4gIHZhciBwOmFueSA9IHt9O1xyXG5cclxuICAvLyB4XHJcbiAgaWYgKGUuaXNNZWFzdXJlKFgpKSB7XHJcbiAgICBwLnggPSB7c2NhbGU6IFgsIGZpZWxkOiBlLmZpZWxkUmVmKFgpfTtcclxuICAgIGlmIChlLmlzRGltZW5zaW9uKFkpKSB7XHJcbiAgICAgIHAueDIgPSB7c2NhbGU6IFgsIHZhbHVlOiAwfTtcclxuICAgICAgcC5vcmllbnQgPSB7dmFsdWU6ICdob3Jpem9udGFsJ307XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChlLmhhcyhYKSkge1xyXG4gICAgcC54ID0ge3NjYWxlOiBYLCBmaWVsZDogZS5maWVsZFJlZihYLCB7YmluU3VmZml4OiAnX21pZCd9KX07XHJcbiAgfSBlbHNlIHtcclxuICAgIHAueCA9IHt2YWx1ZTogMH07XHJcbiAgfVxyXG5cclxuICAvLyB5XHJcbiAgaWYgKGUuaXNNZWFzdXJlKFkpKSB7XHJcbiAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFkpfTtcclxuICAgIHAueTIgPSB7c2NhbGU6IFksIHZhbHVlOiAwfTtcclxuICB9IGVsc2UgaWYgKGUuaGFzKFkpKSB7XHJcbiAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFksIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcC55ID0ge2ZpZWxkOiB7Z3JvdXA6ICdoZWlnaHQnfX07XHJcbiAgfVxyXG5cclxuICAvLyBmaWxsXHJcbiAgaWYgKGUuaGFzKENPTE9SKSkge1xyXG4gICAgcC5maWxsID0ge3NjYWxlOiBDT0xPUiwgZmllbGQ6IGUuZmllbGRSZWYoQ09MT1IpfTtcclxuICB9IGVsc2UgaWYgKCFlLmhhcyhDT0xPUikpIHtcclxuICAgIHAuZmlsbCA9IHt2YWx1ZTogZS5maWVsZERlZihDT0xPUikudmFsdWV9O1xyXG4gIH1cclxuXHJcbiAgdmFyIG9wYWNpdHkgPSBlLmZpZWxkRGVmKENPTE9SKS5vcGFjaXR5O1xyXG4gIGlmIChvcGFjaXR5KSBwLm9wYWNpdHkgPSB7dmFsdWU6IG9wYWNpdHl9O1xyXG5cclxuICByZXR1cm4gcDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGlja19wcm9wcyhlOiBNb2RlbCwgbGF5b3V0LCBzdHlsZSkge1xyXG4gIC8vIFRPRE8gVXNlIFZlZ2EncyBtYXJrcyBwcm9wZXJ0aWVzIGludGVyZmFjZVxyXG4gIHZhciBwOmFueSA9IHt9O1xyXG5cclxuICAvLyB4XHJcbiAgaWYgKGUuaGFzKFgpKSB7XHJcbiAgICBwLnggPSB7c2NhbGU6IFgsIGZpZWxkOiBlLmZpZWxkUmVmKFgsIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICAgIGlmIChlLmlzRGltZW5zaW9uKFgpKSB7XHJcbiAgICAgIHAueC5vZmZzZXQgPSAtZS5iYW5kV2lkdGgoWCwgbGF5b3V0LngudXNlU21hbGxCYW5kKSAvIDM7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoWCkpIHtcclxuICAgIHAueCA9IHt2YWx1ZTogMH07XHJcbiAgfVxyXG5cclxuICAvLyB5XHJcbiAgaWYgKGUuaGFzKFkpKSB7XHJcbiAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFksIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICAgIGlmIChlLmlzRGltZW5zaW9uKFkpKSB7XHJcbiAgICAgIHAueS5vZmZzZXQgPSAtZS5iYW5kV2lkdGgoWSwgbGF5b3V0LnkudXNlU21hbGxCYW5kKSAvIDM7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoWSkpIHtcclxuICAgIHAueSA9IHt2YWx1ZTogMH07XHJcbiAgfVxyXG5cclxuICAvLyB3aWR0aFxyXG4gIGlmICghZS5oYXMoWCkgfHwgZS5pc0RpbWVuc2lvbihYKSkge1xyXG4gICAgLy8gVE9ETygjNjk0KTogb3B0aW1pemUgdGljaydzIHdpZHRoIGZvciBiaW5cclxuICAgIHAud2lkdGggPSB7dmFsdWU6IGUuYmFuZFdpZHRoKFgsIGxheW91dC55LnVzZVNtYWxsQmFuZCkgLyAxLjV9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwLndpZHRoID0ge3ZhbHVlOiAxfTtcclxuICB9XHJcblxyXG4gIC8vIGhlaWdodFxyXG4gIGlmICghZS5oYXMoWSkgfHwgZS5pc0RpbWVuc2lvbihZKSkge1xyXG4gICAgLy8gVE9ETygjNjk0KTogb3B0aW1pemUgdGljaydzIGhlaWdodCBmb3IgYmluXHJcbiAgICBwLmhlaWdodCA9IHt2YWx1ZTogZS5iYW5kV2lkdGgoWSwgbGF5b3V0LnkudXNlU21hbGxCYW5kKSAvIDEuNX07XHJcbiAgfSBlbHNlIHtcclxuICAgIHAuaGVpZ2h0ID0ge3ZhbHVlOiAxfTtcclxuICB9XHJcblxyXG4gIC8vIGZpbGxcclxuICBpZiAoZS5oYXMoQ09MT1IpKSB7XHJcbiAgICBwLmZpbGwgPSB7c2NhbGU6IENPTE9SLCBmaWVsZDogZS5maWVsZFJlZihDT0xPUil9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwLmZpbGwgPSB7dmFsdWU6IGUuZmllbGREZWYoQ09MT1IpLnZhbHVlfTtcclxuICB9XHJcblxyXG4gIHZhciBvcGFjaXR5ID0gZS5maWVsZERlZihDT0xPUikub3BhY2l0eSAgfHwgc3R5bGUub3BhY2l0eTtcclxuICBpZihvcGFjaXR5KSBwLm9wYWNpdHkgPSB7dmFsdWU6IG9wYWNpdHl9O1xyXG5cclxuICByZXR1cm4gcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbGVkX3BvaW50X3Byb3BzKHNoYXBlKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGU6IE1vZGVsLCBsYXlvdXQsIHN0eWxlKSB7XHJcbiAgICAvLyBUT0RPIFVzZSBWZWdhJ3MgbWFya3MgcHJvcGVydGllcyBpbnRlcmZhY2VcclxuICAgIHZhciBwOmFueSA9IHt9O1xyXG5cclxuICAgIC8vIHhcclxuICAgIGlmIChlLmhhcyhYKSkge1xyXG4gICAgICBwLnggPSB7c2NhbGU6IFgsIGZpZWxkOiBlLmZpZWxkUmVmKFgsIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICAgIH0gZWxzZSBpZiAoIWUuaGFzKFgpKSB7XHJcbiAgICAgIHAueCA9IHt2YWx1ZTogZS5iYW5kV2lkdGgoWCwgbGF5b3V0LngudXNlU21hbGxCYW5kKSAvIDJ9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHlcclxuICAgIGlmIChlLmhhcyhZKSkge1xyXG4gICAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFksIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICAgIH0gZWxzZSBpZiAoIWUuaGFzKFkpKSB7XHJcbiAgICAgIHAueSA9IHt2YWx1ZTogZS5iYW5kV2lkdGgoWSwgbGF5b3V0LnkudXNlU21hbGxCYW5kKSAvIDJ9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNpemVcclxuICAgIGlmIChlLmhhcyhTSVpFKSkge1xyXG4gICAgICBwLnNpemUgPSB7c2NhbGU6IFNJWkUsIGZpZWxkOiBlLmZpZWxkUmVmKFNJWkUpfTtcclxuICAgIH0gZWxzZSBpZiAoIWUuaGFzKFgpKSB7XHJcbiAgICAgIHAuc2l6ZSA9IHt2YWx1ZTogZS5maWVsZERlZihTSVpFKS52YWx1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2hhcGVcclxuICAgIHAuc2hhcGUgPSB7dmFsdWU6IHNoYXBlfTtcclxuXHJcbiAgICAvLyBmaWxsXHJcbiAgICBpZiAoZS5oYXMoQ09MT1IpKSB7XHJcbiAgICAgIHAuZmlsbCA9IHtzY2FsZTogQ09MT1IsIGZpZWxkOiBlLmZpZWxkUmVmKENPTE9SKX07XHJcbiAgICB9IGVsc2UgaWYgKCFlLmhhcyhDT0xPUikpIHtcclxuICAgICAgcC5maWxsID0ge3ZhbHVlOiBlLmZpZWxkRGVmKENPTE9SKS52YWx1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG9wYWNpdHkgPSBlLmZpZWxkRGVmKENPTE9SKS5vcGFjaXR5ICB8fCBzdHlsZS5vcGFjaXR5O1xyXG4gICAgaWYob3BhY2l0eSkgcC5vcGFjaXR5ID0ge3ZhbHVlOiBvcGFjaXR5fTtcclxuXHJcbiAgICByZXR1cm4gcDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0X3Byb3BzKGU6IE1vZGVsLCBsYXlvdXQsIHN0eWxlKSB7XHJcbiAgLy8gVE9ETyBVc2UgVmVnYSdzIG1hcmtzIHByb3BlcnRpZXMgaW50ZXJmYWNlXHJcbiAgdmFyIHA6YW55ID0ge30sXHJcbiAgICBmaWVsZERlZiA9IGUuZmllbGREZWYoVEVYVCk7XHJcblxyXG4gIC8vIHhcclxuICBpZiAoZS5oYXMoWCkpIHtcclxuICAgIHAueCA9IHtzY2FsZTogWCwgZmllbGQ6IGUuZmllbGRSZWYoWCwge2JpblN1ZmZpeDogJ19taWQnfSl9O1xyXG4gIH0gZWxzZSBpZiAoIWUuaGFzKFgpKSB7XHJcbiAgICBpZiAoZS5oYXMoVEVYVCkgJiYgZS5maWVsZERlZihURVhUKS50eXBlID09PSBRVUFOVElUQVRJVkUpIHtcclxuICAgICAgcC54ID0ge3ZhbHVlOiBsYXlvdXQuY2VsbFdpZHRoLTV9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcC54ID0ge3ZhbHVlOiBlLmJhbmRXaWR0aChYLCBsYXlvdXQueC51c2VTbWFsbEJhbmQpIC8gMn07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB5XHJcbiAgaWYgKGUuaGFzKFkpKSB7XHJcbiAgICBwLnkgPSB7c2NhbGU6IFksIGZpZWxkOiBlLmZpZWxkUmVmKFksIHtiaW5TdWZmaXg6ICdfbWlkJ30pfTtcclxuICB9IGVsc2UgaWYgKCFlLmhhcyhZKSkge1xyXG4gICAgcC55ID0ge3ZhbHVlOiBlLmJhbmRXaWR0aChZLCBsYXlvdXQueS51c2VTbWFsbEJhbmQpIC8gMn07XHJcbiAgfVxyXG5cclxuICAvLyBzaXplXHJcbiAgaWYgKGUuaGFzKFNJWkUpKSB7XHJcbiAgICBwLmZvbnRTaXplID0ge3NjYWxlOiBTSVpFLCBmaWVsZDogZS5maWVsZFJlZihTSVpFKX07XHJcbiAgfSBlbHNlIGlmICghZS5oYXMoU0laRSkpIHtcclxuICAgIHAuZm9udFNpemUgPSB7dmFsdWU6IGZpZWxkRGVmLmZvbnQuc2l6ZX07XHJcbiAgfVxyXG5cclxuICAvLyBmaWxsXHJcbiAgLy8gY29sb3Igc2hvdWxkIGJlIHNldCB0byBiYWNrZ3JvdW5kXHJcbiAgcC5maWxsID0ge3ZhbHVlOiBmaWVsZERlZi5jb2xvcn07XHJcblxyXG4gIHZhciBvcGFjaXR5ID0gZS5maWVsZERlZihDT0xPUikub3BhY2l0eSAgfHwgc3R5bGUub3BhY2l0eTtcclxuICBpZihvcGFjaXR5KSBwLm9wYWNpdHkgPSB7dmFsdWU6IG9wYWNpdHl9O1xyXG5cclxuICAvLyB0ZXh0XHJcbiAgaWYgKGUuaGFzKFRFWFQpKSB7XHJcbiAgICBpZiAoZS5maWVsZERlZihURVhUKS50eXBlID09PSBRVUFOVElUQVRJVkUpIHtcclxuICAgICAgdmFyIG51bWJlckZvcm1hdCA9IGZpZWxkRGVmLmZvcm1hdCAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmLmZvcm1hdCA6IGUubnVtYmVyRm9ybWF0KFRFWFQpO1xyXG5cclxuICAgICAgcC50ZXh0ID0ge3RlbXBsYXRlOiAne3snICsgZS5maWVsZFJlZihURVhULCB7ZGF0dW06IHRydWV9KSArICcgfCBudW1iZXI6XFwnJyArXHJcbiAgICAgICAgbnVtYmVyRm9ybWF0ICsnXFwnfX0nfTtcclxuICAgICAgcC5hbGlnbiA9IHt2YWx1ZTogZmllbGREZWYuYWxpZ259O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcC50ZXh0ID0ge2ZpZWxkOiBlLmZpZWxkUmVmKFRFWFQpfTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcC50ZXh0ID0ge3ZhbHVlOiBmaWVsZERlZi5wbGFjZWhvbGRlcn07XHJcbiAgfVxyXG5cclxuICBwLmZvbnQgPSB7dmFsdWU6IGZpZWxkRGVmLmZvbnQuZmFtaWx5fTtcclxuICBwLmZvbnRXZWlnaHQgPSB7dmFsdWU6IGZpZWxkRGVmLmZvbnQud2VpZ2h0fTtcclxuICBwLmZvbnRTdHlsZSA9IHt2YWx1ZTogZmllbGREZWYuZm9udC5zdHlsZX07XHJcbiAgcC5iYXNlbGluZSA9IHt2YWx1ZTogZmllbGREZWYuYmFzZWxpbmV9O1xyXG5cclxuICByZXR1cm4gcDtcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9jb2xvcmJyZXdlci5kLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9kMy1jb2xvci5kLnRzXCIvPlxyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2Jsb2IvbWFzdGVyL2RvYy9zcGVjLm1kIzExLWFtYmllbnQtZGVjbGFyYXRpb25zXHJcbmRlY2xhcmUgdmFyIGV4cG9ydHM7XHJcblxyXG5pbXBvcnQgKiBhcyBjb2xvcmJyZXdlciBmcm9tICdjb2xvcmJyZXdlcic7XHJcbmltcG9ydCB7aW50ZXJwb2xhdGVIc2x9IGZyb20gJ2QzLWNvbG9yJztcclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xyXG5pbXBvcnQge1NIQVJFRF9ET01BSU5fT1BTfSBmcm9tICcuLi9hZ2dyZWdhdGUnO1xyXG5pbXBvcnQge0NPTFVNTiwgUk9XLCBYLCBZLCBTSEFQRSwgU0laRSwgQ09MT1IsIFRFWFQsIENoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xyXG5pbXBvcnQge1NPVVJDRSwgU1RBQ0tFRH0gZnJvbSAnLi4vZGF0YSc7XHJcbmltcG9ydCAqIGFzIHRpbWUgZnJvbSAnLi90aW1lJztcclxuaW1wb3J0IHtOT01JTkFMLCBPUkRJTkFMLCBRVUFOVElUQVRJVkUsIFRFTVBPUkFMfSBmcm9tICcuLi90eXBlJztcclxuXHJcbi8vIFRPRE86IGNvbnNpZGVyIGlmIHdlIGNhbiByZW1vdmUgdGhpcyBhbmQgc2ltcGxpZnkgdGhlIGNvZGViYXNlXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2NhbGVOYW1lcyhwcm9wcykge1xyXG4gIHJldHVybiB1dGlsLmtleXModXRpbC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24oYSwgeCkge1xyXG4gICAgaWYgKHByb3BzW3hdICYmIHByb3BzW3hdLnNjYWxlKSBhW3Byb3BzW3hdLnNjYWxlXSA9IDE7XHJcbiAgICByZXR1cm4gYTtcclxuICB9LCB7fSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNjYWxlcyhuYW1lczogQXJyYXk8c3RyaW5nPiwgbW9kZWw6IE1vZGVsLCBsYXlvdXQsIHN0YXRzLCBmYWNldD8pIHtcclxuICByZXR1cm4gbmFtZXMucmVkdWNlKGZ1bmN0aW9uKGEsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAgIHZhciBzY2FsZURlZjogYW55ID0ge307XHJcblxyXG4gICAgc2NhbGVEZWYubmFtZSA9IGNoYW5uZWw7XHJcbiAgICB2YXIgdCA9IHNjYWxlRGVmLnR5cGUgPSB0eXBlKGNoYW5uZWwsIG1vZGVsKTtcclxuICAgIHNjYWxlRGVmLmRvbWFpbiA9IGRvbWFpbihtb2RlbCwgY2hhbm5lbCwgdCwgZmFjZXQpO1xyXG5cclxuICAgIC8vIEFkZCBvcHRpb25hbCBwcm9wZXJ0aWVzXHJcbiAgICBbXHJcbiAgICAgIC8vIGdlbmVyYWwgcHJvcGVydGllc1xyXG4gICAgICAncmFuZ2UnLCAncmV2ZXJzZScsICdyb3VuZCcsXHJcbiAgICAgIC8vIHF1YW50aXRhdGl2ZSAvIHRpbWVcclxuICAgICAgJ2NsYW1wJywgJ25pY2UnLFxyXG4gICAgICAvLyBxdWFudGl0YXRpdmVcclxuICAgICAgJ2V4cG9uZW50JywgJ3plcm8nLFxyXG4gICAgICAvLyBvcmRpbmFsXHJcbiAgICAgICdiYW5kV2lkdGgnLCAnb3V0ZXJQYWRkaW5nJywgJ3BhZGRpbmcnLCAncG9pbnRzJ1xyXG4gICAgXS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IGV4cG9ydHNbcHJvcGVydHldKG1vZGVsLCBjaGFubmVsLCB0LCBsYXlvdXQsIHN0YXRzKTtcclxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzY2FsZURlZltwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChhLnB1c2goc2NhbGVEZWYpLCBhKTtcclxuICB9LCBbXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0eXBlKGNoYW5uZWw6IENoYW5uZWwsIG1vZGVsOiBNb2RlbCkge1xyXG4gIGNvbnN0IGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCk7XHJcbiAgc3dpdGNoIChmaWVsZERlZi50eXBlKSB7XHJcbiAgICBjYXNlIE5PTUlOQUw6IC8vZmFsbCB0aHJvdWdoXHJcbiAgICBjYXNlIE9SRElOQUw6XHJcbiAgICAgIHJldHVybiAnb3JkaW5hbCc7XHJcbiAgICBjYXNlIFRFTVBPUkFMOlxyXG4gICAgICByZXR1cm4gZmllbGREZWYudGltZVVuaXQgPyB0aW1lLnNjYWxlLnR5cGUoZmllbGREZWYudGltZVVuaXQsIGNoYW5uZWwpIDogJ3RpbWUnO1xyXG4gICAgY2FzZSBRVUFOVElUQVRJVkU6XHJcbiAgICAgIGlmIChtb2RlbC5iaW4oY2hhbm5lbCkpIHtcclxuICAgICAgICByZXR1cm4gY2hhbm5lbCA9PT0gUk9XIHx8IGNoYW5uZWwgPT09IENPTFVNTiB8fCBjaGFubmVsID09PSBTSEFQRSA/ICdvcmRpbmFsJyA6ICdsaW5lYXInO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmaWVsZERlZi5zY2FsZS50eXBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvbWFpbihtb2RlbDogTW9kZWwsIGNoYW5uZWw6Q2hhbm5lbCwgdHlwZSwgZmFjZXQ6Ym9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgdmFyIGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCk7XHJcblxyXG4gIGlmIChmaWVsZERlZi5zY2FsZS5kb21haW4pIHsgLy8gZXhwbGljaXQgdmFsdWVcclxuICAgIHJldHVybiBmaWVsZERlZi5zY2FsZS5kb21haW47XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWFsIGNhc2UgZm9yIHRlbXBvcmFsIHNjYWxlXHJcbiAgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFRFTVBPUkFMKSB7XHJcbiAgICB2YXIgcmFuZ2UgPSB0aW1lLnNjYWxlLmRvbWFpbihmaWVsZERlZi50aW1lVW5pdCwgY2hhbm5lbCk7XHJcbiAgICBpZiAocmFuZ2UpIHJldHVybiByYW5nZTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBzdGFjaywgdXNlIFNUQUNLRUQgZGF0YS5cclxuICB2YXIgc3RhY2sgPSBtb2RlbC5zdGFjaygpO1xyXG4gIGlmIChzdGFjayAmJiBjaGFubmVsID09PSBzdGFjay5maWVsZENoYW5uZWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFNUQUNLRUQsXHJcbiAgICAgIGZpZWxkOiBtb2RlbC5maWVsZFJlZihjaGFubmVsLCB7XHJcbiAgICAgICAgLy8gSWYgZmFjZXRlZCwgc2NhbGUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgbWF4IG9mIHN1bSBpbiBlYWNoIGZhY2V0LlxyXG4gICAgICAgIHByZWZuOiAoZmFjZXQgPyAnbWF4XycgOiAnJykgKyAnc3VtXydcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgdXNlUmF3RG9tYWluID0gX3VzZVJhd0RvbWFpbihtb2RlbCwgY2hhbm5lbCk7XHJcbiAgdmFyIHNvcnQgPSBkb21haW5Tb3J0KG1vZGVsLCBjaGFubmVsLCB0eXBlKTtcclxuXHJcbiAgaWYgKHVzZVJhd0RvbWFpbikgeyAvLyB1c2VSYXdEb21haW4gLSBvbmx5IFEvVFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogU09VUkNFLFxyXG4gICAgICBmaWVsZDogbW9kZWwuZmllbGRSZWYoY2hhbm5lbCwge25vQWdncmVnYXRlOnRydWV9KVxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKGZpZWxkRGVmLmJpbikgeyAvLyBiaW5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBtb2RlbC5kYXRhVGFibGUoKSxcclxuICAgICAgZmllbGQ6IHR5cGUgPT09ICdvcmRpbmFsJyA/XHJcbiAgICAgICAgLy8gb3JkaW5hbCBzY2FsZSBvbmx5IHVzZSBiaW4gc3RhcnQgZm9yIG5vd1xyXG4gICAgICAgIG1vZGVsLmZpZWxkUmVmKGNoYW5uZWwsIHsgYmluU3VmZml4OiAnX3N0YXJ0JyB9KSA6XHJcbiAgICAgICAgLy8gbmVlZCB0byBtZXJnZSBib3RoIGJpbl9zdGFydCBhbmQgYmluX2VuZCBmb3Igbm9uLW9yZGluYWwgc2NhbGVcclxuICAgICAgICBbXHJcbiAgICAgICAgICBtb2RlbC5maWVsZFJlZihjaGFubmVsLCB7IGJpblN1ZmZpeDogJ19zdGFydCcgfSksXHJcbiAgICAgICAgICBtb2RlbC5maWVsZFJlZihjaGFubmVsLCB7IGJpblN1ZmZpeDogJ19lbmQnIH0pXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHNvcnQpIHsgLy8gaGF2ZSBzb3J0IC0tIG9ubHkgZm9yIG9yZGluYWxcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIElmIHNvcnQgYnkgYWdncmVnYXRpb24gb2YgYSBzcGVjaWZpZWQgc29ydCBmaWVsZCwgd2UgbmVlZCB0byB1c2UgU09VUkNFIHRhYmxlLFxyXG4gICAgICAvLyBzbyB3ZSBjYW4gYWdncmVnYXRlIHZhbHVlcyBmb3IgdGhlIHNjYWxlIGluZGVwZW5kZW50bHkgZnJvbSB0aGUgbWFpbiBhZ2dyZWdhdGlvbi5cclxuICAgICAgZGF0YTogc29ydC5vcCA/IFNPVVJDRSA6IG1vZGVsLmRhdGFUYWJsZSgpLFxyXG4gICAgICBmaWVsZDogbW9kZWwuZmllbGRSZWYoY2hhbm5lbCksXHJcbiAgICAgIHNvcnQ6IHNvcnRcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IG1vZGVsLmRhdGFUYWJsZSgpLFxyXG4gICAgICBmaWVsZDogbW9kZWwuZmllbGRSZWYoY2hhbm5lbClcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZG9tYWluU29ydChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIHR5cGUpOmFueSB7XHJcbiAgdmFyIHNvcnQgPSBtb2RlbC5maWVsZERlZihjaGFubmVsKS5zb3J0O1xyXG4gIGlmIChzb3J0ID09PSAnYXNjZW5kaW5nJyB8fCBzb3J0ID09PSAnZGVzY2VuZGluZycpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLy8gU29ydGVkIGJhc2VkIG9uIGFuIGFnZ3JlZ2F0ZSBjYWxjdWxhdGlvbiBvdmVyIGEgc3BlY2lmaWVkIHNvcnQgZmllbGQgKG9ubHkgZm9yIG9yZGluYWwgc2NhbGUpXHJcbiAgaWYgKHR5cGUgPT09ICdvcmRpbmFsJyAmJiB1dGlsLmlzT2JqZWN0KHNvcnQpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcDogc29ydC5vcCxcclxuICAgICAgZmllbGQ6IHNvcnQuZmllbGRcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCkge1xyXG4gIHZhciBzb3J0ID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuc29ydDtcclxuICByZXR1cm4gc29ydCAmJiAoc29ydCA9PT0gJ2Rlc2NlbmRpbmcnIHx8IChzb3J0Lm9yZGVyID09PSAnZGVzY2VuZGluZycpKSA/IHRydWUgOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgdXNlUmF3RG9tYWluIHNob3VsZCBiZSBhY3RpdmF0ZWQgZm9yIHRoaXMgc2NhbGUuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhbGwgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRvbnMgYXBwbGllczpcclxuICogMS4gYHVzZVJhd0RvbWFpbmAgaXMgZW5hYmxlZCBlaXRoZXIgdGhyb3VnaCBzY2FsZSBvciBjb25maWdcclxuICogMi4gQWdncmVnYXRpb24gZnVuY3Rpb24gaXMgbm90IGBjb3VudGAgb3IgYHN1bWBcclxuICogMy4gVGhlIHNjYWxlIGlzIHF1YW50aXRhdGl2ZSBvciB0aW1lIHNjYWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF91c2VSYXdEb21haW4gKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCkge1xyXG4gIGNvbnN0IGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCk7XHJcbiAgY29uc3Qgc2NhbGVVc2VSYXdEb21haW4gPSBmaWVsZERlZi5zY2FsZS51c2VSYXdEb21haW47XHJcblxyXG4gIC8vIERldGVybWluZSBpZiB1c2VSYXdEb21haW4gaXMgZW5hYmxlZC4gSWYgc2NhbGUgdmFsdWUgaXMgc3BlY2lmaWVkLCB1c2Ugc2NhbGUgdmFsdWUuXHJcbiAgLy8gT3RoZXJ3aXNlLCB1c2UgY29uZmlnIHZhbHVlLlxyXG4gIHZhciB1c2VSYXdEb21haW5FbmFibGVkID0gc2NhbGVVc2VSYXdEb21haW4gIT09IHVuZGVmaW5lZCA/XHJcbiAgICAgIHNjYWxlVXNlUmF3RG9tYWluIDogbW9kZWwuY29uZmlnKCd1c2VSYXdEb21haW4nKTtcclxuXHJcbiAgcmV0dXJuICB1c2VSYXdEb21haW5FbmFibGVkICYmXHJcbiAgICAvLyBvbmx5IGFwcGxpZWQgdG8gYWdncmVnYXRlIHRhYmxlXHJcbiAgICBmaWVsZERlZi5hZ2dyZWdhdGUgJiZcclxuICAgIC8vIG9ubHkgYWN0aXZhdGVkIGlmIHVzZWQgd2l0aCBhZ2dyZWdhdGUgZnVuY3Rpb25zIHRoYXQgcHJvZHVjZXMgdmFsdWVzIHJhbmdpbmcgaW4gdGhlIGRvbWFpbiBvZiB0aGUgc291cmNlIGRhdGFcclxuICAgIFNIQVJFRF9ET01BSU5fT1BTLmluZGV4T2YoZmllbGREZWYuYWdncmVnYXRlKSA+PSAwICYmXHJcbiAgICAoXHJcbiAgICAgIC8vIFEgYWx3YXlzIHVzZXMgcXVhbnRpdGF0aXZlIHNjYWxlIGV4Y2VwdCB3aGVuIGl0J3MgYmlubmVkLlxyXG4gICAgICAvLyBCaW5uZWQgZmllbGQgaGFzIHNpbWlsYXIgdmFsdWVzIGluIGJvdGggdGhlIHNvdXJjZSB0YWJsZSBhbmQgdGhlIHN1bW1hcnkgdGFibGVcclxuICAgICAgLy8gYnV0IHRoZSBzdW1tYXJ5IHRhYmxlIGhhcyBmZXdlciB2YWx1ZXMsIHRoZXJlZm9yZSBiaW5uZWQgZmllbGRzIGRyYXdcclxuICAgICAgLy8gZG9tYWluIHZhbHVlcyBmcm9tIHRoZSBzdW1tYXJ5IHRhYmxlLlxyXG4gICAgICAoZmllbGREZWYudHlwZSA9PT0gUVVBTlRJVEFUSVZFICYmICFmaWVsZERlZi5iaW4pIHx8XHJcbiAgICAgIC8vIFQgdXNlcyBub24tb3JkaW5hbCBzY2FsZSB3aGVuIHRoZXJlJ3Mgbm8gdW5pdCBvciB3aGVuIHRoZSB1bml0IGlzIG5vdCBvcmRpbmFsLlxyXG4gICAgICAoZmllbGREZWYudHlwZSA9PT0gVEVNUE9SQUwgJiZcclxuICAgICAgICAoIWZpZWxkRGVmLnRpbWVVbml0IHx8ICF0aW1lLmlzT3JkaW5hbEZuKGZpZWxkRGVmLnRpbWVVbml0KSlcclxuICAgICAgKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhbmRXaWR0aChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIHR5cGUsIGxheW91dCkge1xyXG4gIC8vIFRPRE86IGVsaW1pbmF0ZSBsYXlvdXRcclxuXHJcbiAgc3dpdGNoIChjaGFubmVsKSB7XHJcbiAgICBjYXNlIFg6IC8qIGZhbGwgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSBZOlxyXG4gICAgICBpZiAodHlwZSA9PT0gJ29yZGluYWwnKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVsLmJhbmRXaWR0aChjaGFubmVsLCBsYXlvdXRbY2hhbm5lbF0udXNlU21hbGxCYW5kKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUk9XOiAvLyBzdXBwb3J0IG9ubHkgb3JkaW5hbFxyXG4gICAgICByZXR1cm4gbGF5b3V0LmNlbGxIZWlnaHQ7XHJcbiAgICBjYXNlIENPTFVNTjogLy8gc3VwcG9ydCBvbmx5IG9yZGluYWxcclxuICAgICAgcmV0dXJuIGxheW91dC5jZWxsV2lkdGg7XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICAvLyBvbmx5IHJldHVybiB2YWx1ZSBpZiBleHBsaWNpdCB2YWx1ZSBpcyBzcGVjaWZpZWQuXHJcbiAgcmV0dXJuIG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLnNjYWxlLmNsYW1wO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb25lbnQobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgLy8gb25seSByZXR1cm4gdmFsdWUgaWYgZXhwbGljaXQgdmFsdWUgaXMgc3BlY2lmaWVkLlxyXG4gIHJldHVybiBtb2RlbC5maWVsZERlZihjaGFubmVsKS5zY2FsZS5leHBvbmVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5pY2UobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsLCB0eXBlKSB7XHJcbiAgaWYgKG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLnNjYWxlLm5pY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gZXhwbGljaXQgdmFsdWVcclxuICAgIHJldHVybiBtb2RlbC5maWVsZERlZihjaGFubmVsKS5zY2FsZS5uaWNlO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChjaGFubmVsKSB7XHJcbiAgICBjYXNlIFg6IC8qIGZhbGwgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSBZOlxyXG4gICAgICBpZiAodHlwZSA9PT0gJ3RpbWUnIHx8IHR5cGUgPT09ICdvcmRpbmFsJykge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY2FzZSBST1c6IC8qIGZhbGwgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSBDT0xVTU46XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJQYWRkaW5nKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgdHlwZSkge1xyXG4gIGlmICh0eXBlID09PSAnb3JkaW5hbCcpIHtcclxuICAgIGlmIChtb2RlbC5maWVsZERlZihjaGFubmVsKS5zY2FsZS5vdXRlclBhZGRpbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gbW9kZWwuZmllbGREZWYoY2hhbm5lbCkuc2NhbGUub3V0ZXJQYWRkaW5nOyAvLyBleHBsaWNpdCB2YWx1ZVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5uZWwgPT09IFJPVyB8fCBjaGFubmVsID09PSBDT0xVTU4pIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWRkaW5nKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgdHlwZSkge1xyXG4gIGlmICh0eXBlID09PSAnb3JkaW5hbCcpIHtcclxuICAgIC8vIEJvdGggZXhwbGljaXQgYW5kIG5vbi1leHBsaWNpdCB2YWx1ZXMgYXJlIGhhbmRsZWQgYnkgdGhlIGhlbHBlciBtZXRob2QuXHJcbiAgICByZXR1cm4gbW9kZWwucGFkZGluZyhjaGFubmVsKTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50cyhtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwsIHR5cGUpIHtcclxuICBpZiAodHlwZSA9PT0gJ29yZGluYWwnKSB7XHJcbiAgICBpZiAobW9kZWwuZmllbGREZWYoY2hhbm5lbCkuc2NhbGUucG9pbnRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gZXhwbGljaXQgdmFsdWVcclxuICAgICAgcmV0dXJuIG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLnNjYWxlLnBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGNoYW5uZWwpIHtcclxuICAgICAgY2FzZSBYOlxyXG4gICAgICBjYXNlIFk6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsLCB0eXBlLCBsYXlvdXQsIHN0YXRzKSB7XHJcbiAgdmFyIGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoY2hhbm5lbCk7XHJcblxyXG4gIGlmIChmaWVsZERlZi5zY2FsZS5yYW5nZSkgeyAvLyBleHBsaWNpdCB2YWx1ZVxyXG4gICAgcmV0dXJuIGZpZWxkRGVmLnNjYWxlLnJhbmdlO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChjaGFubmVsKSB7XHJcbiAgICBjYXNlIFg6XHJcbiAgICAgIHJldHVybiBsYXlvdXQuY2VsbFdpZHRoID8gWzAsIGxheW91dC5jZWxsV2lkdGhdIDogJ3dpZHRoJztcclxuICAgIGNhc2UgWTpcclxuICAgICAgaWYgKHR5cGUgPT09ICdvcmRpbmFsJykge1xyXG4gICAgICAgIHJldHVybiBsYXlvdXQuY2VsbEhlaWdodCA/XHJcbiAgICAgICAgICAoZmllbGREZWYuYmluID8gW2xheW91dC5jZWxsSGVpZ2h0LCAwXSA6IFswLCBsYXlvdXQuY2VsbEhlaWdodF0pIDpcclxuICAgICAgICAgICdoZWlnaHQnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsYXlvdXQuY2VsbEhlaWdodCA/IFtsYXlvdXQuY2VsbEhlaWdodCwgMF0gOiAnaGVpZ2h0JztcclxuICAgIGNhc2UgU0laRTpcclxuICAgICAgaWYgKG1vZGVsLmlzKCdiYXInKSkge1xyXG4gICAgICAgIC8vIEZJWE1FIHRoaXMgaXMgZGVmaW5pdGVseSBpbmNvcnJlY3RcclxuICAgICAgICAvLyBidXQgbGV0J3MgZml4IGl0IGxhdGVyIHNpbmNlIGJhciBzaXplIGlzIGEgYmFkIGVuY29kaW5nIGFueXdheVxyXG4gICAgICAgIHJldHVybiBbMywgTWF0aC5tYXgobW9kZWwuYmFuZFdpZHRoKFgpLCBtb2RlbC5iYW5kV2lkdGgoWSkpXTtcclxuICAgICAgfSBlbHNlIGlmIChtb2RlbC5pcyhURVhUKSkge1xyXG4gICAgICAgIHJldHVybiBbOCwgNDBdO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2UgLS0gcG9pbnRcclxuICAgICAgdmFyIGJhbmRXaWR0aCA9IE1hdGgubWluKG1vZGVsLmJhbmRXaWR0aChYKSwgbW9kZWwuYmFuZFdpZHRoKFkpKSAtIDE7XHJcbiAgICAgIHJldHVybiBbMTAsIDAuOCAqIGJhbmRXaWR0aCpiYW5kV2lkdGhdO1xyXG4gICAgY2FzZSBTSEFQRTpcclxuICAgICAgcmV0dXJuICdzaGFwZXMnO1xyXG4gICAgY2FzZSBDT0xPUjpcclxuICAgICAgcmV0dXJuIGNvbG9yKG1vZGVsLCBjaGFubmVsLCB0eXBlLCBzdGF0cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm91bmQobW9kZWw6IE1vZGVsLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgaWYgKG1vZGVsLmZpZWxkRGVmKGNoYW5uZWwpLnNjYWxlLnJvdW5kICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBtb2RlbC5maWVsZERlZihjaGFubmVsKS5zY2FsZS5yb3VuZDtcclxuICB9XHJcblxyXG4gIC8vIEZJWE1FOiByZXZpc2UgaWYgcm91bmQgaXMgYWxyZWFkeSB0aGUgZGVmYXVsdCB2YWx1ZVxyXG4gIHN3aXRjaCAoY2hhbm5lbCkge1xyXG4gICAgY2FzZSBYOiAvKiBmYWxsIHRocm91Z2ggKi9cclxuICAgIGNhc2UgWTpcclxuICAgIGNhc2UgUk9XOlxyXG4gICAgY2FzZSBDT0xVTU46XHJcbiAgICBjYXNlIFNJWkU6XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gemVybyhtb2RlbDogTW9kZWwsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICB2YXIgZmllbGREZWYgPSBtb2RlbC5maWVsZERlZihjaGFubmVsKTtcclxuICB2YXIgdGltZVVuaXQgPSBmaWVsZERlZi50aW1lVW5pdDtcclxuXHJcbiAgaWYgKGZpZWxkRGVmLnNjYWxlLnplcm8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gZXhwbGljaXQgdmFsdWVcclxuICAgIHJldHVybiBmaWVsZERlZi5zY2FsZS56ZXJvO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFRFTVBPUkFMKSB7XHJcbiAgICBpZiAodGltZVVuaXQgPT09ICd5ZWFyJykge1xyXG4gICAgICAvLyB5ZWFyIGlzIHVzaW5nIGxpbmVhciBzY2FsZSwgYnV0IHNob3VsZCBub3QgaW5jbHVkZSB6ZXJvXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZXJlIGlzIG5vIHRpbWVVbml0IG9yIHRoZSB0aW1lVW5pdCB1c2VzIG9yZGluYWwgc2NhbGUsXHJcbiAgICAvLyB6ZXJvIHByb3BlcnR5IGlzIGlnbm9yZWQgYnkgdmVnYSBzbyB3ZSBzaG91bGQgbm90IGdlbmVyYXRlIHRoZW0gYW55IHdheVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbiAgaWYgKGZpZWxkRGVmLmJpbikge1xyXG4gICAgLy8gUmV0dXJucyBmYWxzZSAodW5kZWZpbmVkKSBieSBkZWZhdWx0IG9mIGJpblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoYW5uZWwgPT09IFggfHwgY2hhbm5lbCA9PT0gWSA/XHJcbiAgICAvLyBpZiBub3QgYmluIC8gdGVtcG9yYWwsIHJldHVybnMgdW5kZWZpbmVkIGZvciBYIGFuZCBZIGVuY29kaW5nXHJcbiAgICAvLyBzaW5jZSB6ZXJvIGlzIHRydWUgYnkgZGVmYXVsdCBpbiB2ZWdhIGZvciBsaW5lYXIgc2NhbGVcclxuICAgIHVuZGVmaW5lZCA6XHJcbiAgICBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogQ2hhbm5lbCwgc2NhbGVUeXBlLCBzdGF0cykge1xyXG4gIGNvbnN0IGZpZWxkRGVmID0gbW9kZWwuZmllbGREZWYoQ09MT1IpLFxyXG4gICAgY29sb3JTY2FsZSA9IGZpZWxkRGVmLnNjYWxlLFxyXG4gICAgY2FyZGluYWxpdHkgPSBtb2RlbC5jYXJkaW5hbGl0eShDT0xPUiwgc3RhdHMpLFxyXG4gICAgdHlwZSA9IGZpZWxkRGVmLnR5cGU7XHJcblxyXG4gIGxldCByYW5nZSA9IGNvbG9yU2NhbGUucmFuZ2U7XHJcblxyXG4gIGlmIChyYW5nZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgb3JkaW5hbFBhbGV0dGUgPSBjb2xvclNjYWxlLm9yZGluYWxQYWxldHRlLFxyXG4gICAgICBxdWFudGl0YXRpdmVSYW5nZSA9IGNvbG9yU2NhbGUucXVhbnRpdGF0aXZlUmFuZ2U7XHJcblxyXG4gICAgaWYgKHNjYWxlVHlwZSA9PT0gJ29yZGluYWwnKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBOT01JTkFMKSB7XHJcbiAgICAgICAgLy8gdXNlIGNhdGVnb3JpY2FsIGNvbG9yIHNjYWxlXHJcbiAgICAgICAgaWYgKGNhcmRpbmFsaXR5IDw9IDEwKSB7XHJcbiAgICAgICAgICByYW5nZSA9IGNvbG9yU2NhbGUuYzEwcGFsZXR0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmFuZ2UgPSBjb2xvclNjYWxlLmMyMHBhbGV0dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcnMucGFsZXR0ZShyYW5nZSwgY2FyZGluYWxpdHksIHR5cGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChvcmRpbmFsUGFsZXR0ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGNvbG9ycy5wYWxldHRlKG9yZGluYWxQYWxldHRlLCBjYXJkaW5hbGl0eSwgdHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcnMuaW50ZXJwb2xhdGUocXVhbnRpdGF0aXZlUmFuZ2VbMF0sIHF1YW50aXRhdGl2ZVJhbmdlWzFdLCBjYXJkaW5hbGl0eSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7IC8vdGltZSBvciBxdWFudGl0YXRpdmVcclxuICAgICAgcmV0dXJuIFtxdWFudGl0YXRpdmVSYW5nZVswXSwgcXVhbnRpdGF0aXZlUmFuZ2VbMV1dO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBjb2xvcnMge1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBwYWxldHRlKHJhbmdlLCBjYXJkaW5hbGl0eT8sIHR5cGU/OiBTdHJpbmcpIHtcclxuICAgIC8vIEZJWE1FKGthbml0dyk6IEp1bCAyOSwgMjAxNSAtIGNoZWNrIHJhbmdlIGlzIHN0cmluZ1xyXG4gICAgc3dpdGNoIChyYW5nZSkge1xyXG4gICAgICBjYXNlICdjYXRlZ29yeTEwayc6XHJcbiAgICAgICAgLy8gdGFibGVhdSdzIGNhdGVnb3J5IDEwLCBvcmRlcmVkIGJ5IHBlcmNlcHR1YWwga2VybmVsIHN0dWR5IHJlc3VsdHNcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdXdkYXRhL3BlcmNlcHR1YWwta2VybmVsc1xyXG4gICAgICAgIHJldHVybiBbJyMyY2EwMmMnLCAnI2UzNzdjMicsICcjN2Y3ZjdmJywgJyMxN2JlY2YnLCAnIzhjNTY0YicsICcjZDYyNzI4JywgJyNiY2JkMjInLCAnIzk0NjdiZCcsICcjZmY3ZjBlJywgJyMxZjc3YjQnXTtcclxuXHJcbiAgICAgIC8vIGQzL3RhYmxlYXUgY2F0ZWdvcnkxMC8yMC8yMGIvMjBjXHJcbiAgICAgIGNhc2UgJ2NhdGVnb3J5MTAnOlxyXG4gICAgICAgIHJldHVybiBbJyMxZjc3YjQnLCAnI2ZmN2YwZScsICcjMmNhMDJjJywgJyNkNjI3MjgnLCAnIzk0NjdiZCcsICcjOGM1NjRiJywgJyNlMzc3YzInLCAnIzdmN2Y3ZicsICcjYmNiZDIyJywgJyMxN2JlY2YnXTtcclxuXHJcbiAgICAgIGNhc2UgJ2NhdGVnb3J5MjAnOlxyXG4gICAgICAgIHJldHVybiBbJyMxZjc3YjQnLCAnI2FlYzdlOCcsICcjZmY3ZjBlJywgJyNmZmJiNzgnLCAnIzJjYTAyYycsICcjOThkZjhhJywgJyNkNjI3MjgnLCAnI2ZmOTg5NicsICcjOTQ2N2JkJywgJyNjNWIwZDUnLCAnIzhjNTY0YicsICcjYzQ5Yzk0JywgJyNlMzc3YzInLCAnI2Y3YjZkMicsICcjN2Y3ZjdmJywgJyNjN2M3YzcnLCAnI2JjYmQyMicsICcjZGJkYjhkJywgJyMxN2JlY2YnLCAnIzllZGFlNSddO1xyXG5cclxuICAgICAgY2FzZSAnY2F0ZWdvcnkyMGInOlxyXG4gICAgICAgIHJldHVybiBbJyMzOTNiNzknLCAnIzUyNTRhMycsICcjNmI2ZWNmJywgJyM5YzllZGUnLCAnIzYzNzkzOScsICcjOGNhMjUyJywgJyNiNWNmNmInLCAnI2NlZGI5YycsICcjOGM2ZDMxJywgJyNiZDllMzknLCAnI2U3YmE1MicsICcjZTdjYjk0JywgJyM4NDNjMzknLCAnI2FkNDk0YScsICcjZDY2MTZiJywgJyNlNzk2OWMnLCAnIzdiNDE3MycsICcjYTU1MTk0JywgJyNjZTZkYmQnLCAnI2RlOWVkNiddO1xyXG5cclxuICAgICAgY2FzZSAnY2F0ZWdvcnkyMGMnOlxyXG4gICAgICAgIHJldHVybiBbJyMzMTgyYmQnLCAnIzZiYWVkNicsICcjOWVjYWUxJywgJyNjNmRiZWYnLCAnI2U2NTUwZCcsICcjZmQ4ZDNjJywgJyNmZGFlNmInLCAnI2ZkZDBhMicsICcjMzFhMzU0JywgJyM3NGM0NzYnLCAnI2ExZDk5YicsICcjYzdlOWMwJywgJyM3NTZiYjEnLCAnIzllOWFjOCcsICcjYmNiZGRjJywgJyNkYWRhZWInLCAnIzYzNjM2MycsICcjOTY5Njk2JywgJyNiZGJkYmQnLCAnI2Q5ZDlkOSddO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE8gYWRkIG91ciBvd24gc2V0IG9mIGN1c3RvbSBvcmRpbmFsIGNvbG9yIHBhbGV0dGVcclxuXHJcbiAgICBpZiAocmFuZ2UgaW4gY29sb3JicmV3ZXIpIHtcclxuICAgICAgdmFyIHBhbGV0dGUgPSBjb2xvcmJyZXdlcltyYW5nZV07XHJcblxyXG4gICAgICAvLyBpZiBjYXJkaW5hbGl0eSBwcmUtZGVmaW5lZCwgdXNlIGl0LlxyXG4gICAgICBpZiAoY2FyZGluYWxpdHkgaW4gcGFsZXR0ZSkgcmV0dXJuIHBhbGV0dGVbY2FyZGluYWxpdHldO1xyXG5cclxuICAgICAgLy8gaWYgbm90LCB1c2UgdGhlIGhpZ2hlc3QgY2FyZGluYWxpdHkgb25lIGZvciBub21pbmFsXHJcbiAgICAgIGlmICh0eXBlID09PSBOT01JTkFMKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhbGV0dGVbTWF0aC5tYXguYXBwbHkobnVsbCwgdXRpbC5rZXlzKHBhbGV0dGUpKV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIG90aGVyd2lzZSwgaW50ZXJwb2xhdGVcclxuICAgICAgdmFyIHBzID0gY2FyZGluYWxpdHkgPCAzID8gMyA6IE1hdGgubWF4LmFwcGx5KG51bGwsIHV0aWwua2V5cyhwYWxldHRlKSksXHJcbiAgICAgICAgZnJvbSA9IDAgLCB0byA9IHBzIC0gMTtcclxuICAgICAgLy8gRklYTUUgYWRkIGNvbmZpZyBmb3IgZnJvbSAvIHRvXHJcblxyXG4gICAgICByZXR1cm4gY29sb3JzLmludGVycG9sYXRlKHBhbGV0dGVbcHNdW2Zyb21dLCBwYWxldHRlW3BzXVt0b10sIGNhcmRpbmFsaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmFuZ2U7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgY2FyZGluYWxpdHkpIHtcclxuICAgIHZhciBpbnRlcnBvbGF0b3IgPSBpbnRlcnBvbGF0ZUhzbChzdGFydCwgZW5kKTtcclxuICAgIHJldHVybiB1dGlsLnJhbmdlKGNhcmRpbmFsaXR5KS5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gaW50ZXJwb2xhdG9yKGkqMS4wLyhjYXJkaW5hbGl0eS0xKSk7IH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IHtDaGFubmVsfSBmcm9tICcuLi9jaGFubmVsJztcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhY2tQcm9wZXJ0aWVzIHtcclxuICBncm91cGJ5Q2hhbm5lbDogQ2hhbm5lbDtcclxuICBmaWVsZENoYW5uZWw6IENoYW5uZWw7XHJcbiAgc3RhY2tDaGFubmVsOiBDaGFubmVsOyAvLyBDT0xPUiBvciBERVRBSUxcclxuICBjb25maWc6IGFueTtcclxufVxyXG5cclxuLy8gVE9ETzogcHV0IGFsbCB2ZWdhIGludGVyZmFjZSBpbiBvbmUgcGxhY2VcclxuaW50ZXJmYWNlIFN0YWNrVHJhbnNmb3JtIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgb2Zmc2V0PzogYW55O1xyXG4gIGdyb3VwYnk6IGFueTtcclxuICBmaWVsZDogYW55O1xyXG4gIHNvcnRieTogYW55O1xyXG4gIG91dHB1dDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtb2RlbDogTW9kZWwsIG1kZWYsIHN0YWNrUHJvcHM6IFN0YWNrUHJvcGVydGllcykge1xyXG4gIHZhciBncm91cGJ5ID0gc3RhY2tQcm9wcy5ncm91cGJ5Q2hhbm5lbDtcclxuICB2YXIgZmllbGRDaGFubmVsID0gc3RhY2tQcm9wcy5maWVsZENoYW5uZWw7XHJcblxyXG4gIHZhciB2YWxOYW1lID0gbW9kZWwuZmllbGRSZWYoZmllbGRDaGFubmVsKTtcclxuICB2YXIgc3RhcnRGaWVsZCA9IHZhbE5hbWUgKyAnX3N0YXJ0JztcclxuICB2YXIgZW5kRmllbGQgPSB2YWxOYW1lICsgJ19lbmQnO1xyXG5cclxuICB2YXIgdHJhbnNmb3JtcyA9IFtdO1xyXG5cclxuICBpZiAobW9kZWwubWFya3R5cGUoKSA9PT0gJ2FyZWEnKSB7XHJcbiAgICAvLyBBZGQgaW1wdXRlIHRyYW5zZm9ybSB0byBlbnN1cmUgd2UgaGF2ZSBhbGwgdmFsdWVzIGZvciBlYWNoIHNlcmllc1xyXG4gICAgdHJhbnNmb3Jtcy5wdXNoKHtcclxuICAgICAgdHlwZTogJ2ltcHV0ZScsXHJcbiAgICAgIGZpZWxkOiBtb2RlbC5maWVsZFJlZihmaWVsZENoYW5uZWwpLFxyXG4gICAgICBncm91cGJ5OiBbbW9kZWwuZmllbGRSZWYoc3RhY2tQcm9wcy5zdGFja0NoYW5uZWwpXSxcclxuICAgICAgb3JkZXJieTogW21vZGVsLmZpZWxkUmVmKGdyb3VwYnkpXSxcclxuICAgICAgbWV0aG9kOiAndmFsdWUnLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3J0YnkgPSBzdGFja1Byb3BzLmNvbmZpZy5zb3J0ID09PSAnZGVzY2VuZGluZycgP1xyXG4gICAgICAgICAgICAgICAgICAgJy0nICsgbW9kZWwuZmllbGRSZWYoc3RhY2tQcm9wcy5zdGFja0NoYW5uZWwpIDpcclxuICAgICAgICAgICAgICAgICBzdGFja1Byb3BzLmNvbmZpZy5zb3J0ID09PSAnYXNjZW5kaW5nJyA/XHJcbiAgICAgICAgICAgICAgICAgICBtb2RlbC5maWVsZFJlZihzdGFja1Byb3BzLnN0YWNrQ2hhbm5lbCkgOlxyXG4gICAgICAgICAgICAgICAgIHV0aWwuaXNPYmplY3Qoc3RhY2tQcm9wcy5jb25maWcuc29ydCkgP1xyXG4gICAgICAgICAgICAgICAgICAgc3RhY2tQcm9wcy5jb25maWcuc29ydCA6XHJcbiAgICAgICAgICAgICAgICAgICAnLScgKyBtb2RlbC5maWVsZFJlZihzdGFja1Byb3BzLnN0YWNrQ2hhbm5lbCk7IC8vIGRlZmF1bHRcclxuXHJcbiAgLy8gYWRkIHN0YWNrIHRyYW5zZm9ybSB0byBtYXJrXHJcbiAgdmFyIHN0YWNrVHJhbnNmb3JtOiBTdGFja1RyYW5zZm9ybSA9IHtcclxuICAgIHR5cGU6ICdzdGFjaycsXHJcbiAgICBncm91cGJ5OiBbbW9kZWwuZmllbGRSZWYoZ3JvdXBieSldLFxyXG4gICAgZmllbGQ6IG1vZGVsLmZpZWxkUmVmKGZpZWxkQ2hhbm5lbCksXHJcbiAgICBzb3J0Ynk6IHNvcnRieSxcclxuICAgIG91dHB1dDoge3N0YXJ0OiBzdGFydEZpZWxkLCBlbmQ6IGVuZEZpZWxkfVxyXG4gIH07XHJcblxyXG4gIGlmIChzdGFja1Byb3BzLmNvbmZpZy5vZmZzZXQpIHtcclxuICAgIHN0YWNrVHJhbnNmb3JtLm9mZnNldCA9IHN0YWNrUHJvcHMuY29uZmlnLm9mZnNldDtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybXMucHVzaChzdGFja1RyYW5zZm9ybSk7XHJcblxyXG4gIG1kZWYuZnJvbS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1zO1xyXG5cclxuICAvLyBUT0RPKCMyNzYpOiBUaGlzIGlzIHN1cGVyIGhhY2staXNoIC0tIGNvbnNvbGlkYXRlIGludG8gbW9kdWxhciBtYXJrIHByb3BlcnRpZXM/XHJcbiAgbWRlZi5wcm9wZXJ0aWVzLnVwZGF0ZVtmaWVsZENoYW5uZWxdID0ge1xyXG4gICAgc2NhbGU6IGZpZWxkQ2hhbm5lbCxcclxuICAgIGZpZWxkOiBzdGFydEZpZWxkXHJcbiAgfTtcclxuICBtZGVmLnByb3BlcnRpZXMudXBkYXRlW2ZpZWxkQ2hhbm5lbCArICcyJ10gPSB7XHJcbiAgICBzY2FsZTogZmllbGRDaGFubmVsLFxyXG4gICAgZmllbGQ6IGVuZEZpZWxkXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IHtGaWVsZERlZn0gZnJvbSAnLi4vc2NoZW1hL2ZpZWxkZGVmLnNjaGVtYSc7XHJcblxyXG5pbXBvcnQgKiBhcyB2bEZpZWxkRGVmIGZyb20gJy4uL2ZpZWxkZGVmJztcclxuaW1wb3J0IHtST1csIENPTFVNTiwgWCwgWSwgQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtb2RlbDogTW9kZWwsIHN0YXRzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wYWNpdHk6IGVzdGltYXRlT3BhY2l0eShtb2RlbCwgc3RhdHMpLFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBlc3RpbWF0ZU9wYWNpdHkobW9kZWw6IE1vZGVsLCBzdGF0cykge1xyXG4gIGlmICghc3RhdHMpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgdmFyIG51bVBvaW50cyA9IDA7XHJcblxyXG4gIGlmIChtb2RlbC5pc0FnZ3JlZ2F0ZSgpKSB7IC8vIGFnZ3JlZ2F0ZSBwbG90XHJcbiAgICBudW1Qb2ludHMgPSAxO1xyXG5cclxuICAgIC8vICBnZXQgbnVtYmVyIG9mIHBvaW50cyBpbiBlYWNoIFwiY2VsbFwiXHJcbiAgICAvLyAgYnkgY2FsY3VsYXRpbmcgcHJvZHVjdCBvZiBjYXJkaW5hbGl0eVxyXG4gICAgLy8gIGZvciBlYWNoIG5vbiBmYWNldGluZyBhbmQgbm9uLW9yZGluYWwgWCAvIFkgZmllbGRzXHJcbiAgICAvLyAgbm90ZSB0aGF0IG9yZGluYWwgeCx5IGFyZSBub3QgaW5jbHVkZSBzaW5jZSB3ZSBjYW5cclxuICAgIC8vICBjb25zaWRlciB0aGF0IG9yZGluYWwgeCBhcmUgc3ViZGl2aWRpbmcgdGhlIGNlbGwgaW50byBzdWJjZWxscyBhbnl3YXlcclxuICAgIG1vZGVsLmZvckVhY2goZnVuY3Rpb24oZmllbGREZWY6IEZpZWxkRGVmLCBjaGFubmVsOiBDaGFubmVsKSB7XHJcblxyXG4gICAgICBpZiAoY2hhbm5lbCAhPT0gUk9XICYmIGNoYW5uZWwgIT09IENPTFVNTiAmJlxyXG4gICAgICAgICAgISgoY2hhbm5lbCA9PT0gWCB8fCBjaGFubmVsID09PSBZKSAmJlxyXG4gICAgICAgICAgdmxGaWVsZERlZi5pc09yZGluYWxTY2FsZShmaWVsZERlZikpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgbnVtUG9pbnRzICo9IG1vZGVsLmNhcmRpbmFsaXR5KGNoYW5uZWwsIHN0YXRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0gZWxzZSB7IC8vIHJhdyBwbG90XHJcblxyXG4gICAgLy8gVE9ETzogZXJyb3IgaGFuZGxpbmdcclxuICAgIGlmICghc3RhdHNbJyonXSlcclxuICAgICAgcmV0dXJuIDE7XHJcblxyXG4gICAgbnVtUG9pbnRzID0gc3RhdHNbJyonXS5tYXg7ICAvLyBjb3VudFxyXG5cclxuICAgIC8vIHNtYWxsIG11bHRpcGxlcyBkaXZpZGUgbnVtYmVyIG9mIHBvaW50c1xyXG4gICAgdmFyIG51bU11bHRpcGxlcyA9IDE7XHJcbiAgICBpZiAobW9kZWwuaGFzKFJPVykpIHtcclxuICAgICAgbnVtTXVsdGlwbGVzICo9IG1vZGVsLmNhcmRpbmFsaXR5KFJPVywgc3RhdHMpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vZGVsLmhhcyhDT0xVTU4pKSB7XHJcbiAgICAgIG51bU11bHRpcGxlcyAqPSBtb2RlbC5jYXJkaW5hbGl0eShDT0xVTU4sIHN0YXRzKTtcclxuICAgIH1cclxuICAgIG51bVBvaW50cyAvPSBudW1NdWx0aXBsZXM7XHJcbiAgfVxyXG5cclxuICB2YXIgb3BhY2l0eSA9IDA7XHJcbiAgaWYgKG51bVBvaW50cyA8PSAyNSkge1xyXG4gICAgb3BhY2l0eSA9IDE7XHJcbiAgfSBlbHNlIGlmIChudW1Qb2ludHMgPCAyMDApIHtcclxuICAgIG9wYWNpdHkgPSAwLjg7XHJcbiAgfSBlbHNlIGlmIChudW1Qb2ludHMgPCAxMDAwIHx8IG1vZGVsLmlzKCd0aWNrJykpIHtcclxuICAgIG9wYWNpdHkgPSAwLjc7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wYWNpdHkgPSAwLjM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3BhY2l0eTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihncm91cCwgbWRlZiwgZGV0YWlscykge1xyXG4gIHZhciBtID0gZ3JvdXAubWFya3M7XHJcbiAgdmFyIGcgPSB7XHJcbiAgICBuYW1lOiAnc3ViZmFjZXQnLFxyXG4gICAgdHlwZTogJ2dyb3VwJyxcclxuICAgIGZyb206IG1kZWYuZnJvbSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgZW50ZXI6IHtcclxuICAgICAgICB3aWR0aDoge2ZpZWxkOiB7Z3JvdXA6ICd3aWR0aCd9fSxcclxuICAgICAgICBoZWlnaHQ6IHtmaWVsZDoge2dyb3VwOiAnaGVpZ2h0J319XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYXJrczogbVxyXG4gIH07XHJcblxyXG4gIGdyb3VwLm1hcmtzID0gW2ddO1xyXG4gIGRlbGV0ZSBtZGVmLmZyb207IC8vIChtb3ZlIHRvIHRoZSBuZXcgZylcclxuXHJcbiAgLy9UT0RPIHRlc3QgTE9EIC0tIHdlIHNob3VsZCBzdXBwb3J0IHN0YWNrIC8gbGluZSB3aXRob3V0IGNvbG9yIChMT0QpIGZpZWxkXHJcbiAgdmFyIHRyYW5zID0gKGcuZnJvbS50cmFuc2Zvcm0gfHwgKGcuZnJvbS50cmFuc2Zvcm0gPSBbXSkpO1xyXG4gIHRyYW5zLnB1c2goe3R5cGU6ICdmYWNldCcsIGdyb3VwYnk6IGRldGFpbHN9KTtcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9kMy10aW1lLWZvcm1hdC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHt1dGNGb3JtYXR9IGZyb20gJ2QzLXRpbWUtZm9ybWF0JztcclxuXHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vTW9kZWwnO1xyXG5pbXBvcnQge0ZpZWxkRGVmfSBmcm9tICcuLi9zY2hlbWEvZmllbGRkZWYuc2NoZW1hJztcclxuaW1wb3J0ICogYXMgdmxGaWVsZERlZiBmcm9tICcuLi9maWVsZGRlZic7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7Q09MT1IsIENPTFVNTiwgUk9XLCBDaGFubmVsfSBmcm9tICcuLi9jaGFubmVsJztcclxuaW1wb3J0IHtURU1QT1JBTH0gZnJvbSAnLi4vdHlwZSc7XHJcblxyXG4vLyAnV2VkbmVzZGF5IFNlcHRlbWJlciAxNyAwNDowMDowMCAyMDE0J1xyXG4vLyBXZWRuZXNkYXkgaXMgdGhlIGxvbmdlc3QgZGF0ZVxyXG4vLyBTZXB0ZW1iZXIgaXMgdGhlIGxvbmdlc3QgbW9udGggKDggaW4gamF2YXNjcmlwdCBhcyBpdCBpcyB6ZXJvLWluZGV4ZWQpLlxyXG5jb25zdCBMT05HX0RBVEUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDE0LCA4LCAxNykpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhcmRpbmFsaXR5KGZpZWxkRGVmOiBGaWVsZERlZiwgc3RhdHMsIGZpbHRlck51bGwsIHR5cGUpIHtcclxuICB2YXIgdGltZVVuaXQgPSBmaWVsZERlZi50aW1lVW5pdDtcclxuICBzd2l0Y2ggKHRpbWVVbml0KSB7XHJcbiAgICBjYXNlICdzZWNvbmRzJzogcmV0dXJuIDYwO1xyXG4gICAgY2FzZSAnbWludXRlcyc6IHJldHVybiA2MDtcclxuICAgIGNhc2UgJ2hvdXJzJzogcmV0dXJuIDI0O1xyXG4gICAgY2FzZSAnZGF5JzogcmV0dXJuIDc7XHJcbiAgICBjYXNlICdkYXRlJzogcmV0dXJuIDMxO1xyXG4gICAgY2FzZSAnbW9udGgnOiByZXR1cm4gMTI7XHJcbiAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgdmFyIHN0YXQgPSBzdGF0c1tmaWVsZERlZi5maWVsZF0sXHJcbiAgICAgICAgeWVhcnN0YXQgPSBzdGF0c1sneWVhcl8nICsgZmllbGREZWYuZmllbGRdO1xyXG5cclxuICAgICAgaWYgKCF5ZWFyc3RhdCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICAgICAgcmV0dXJuIHllYXJzdGF0LmRpc3RpbmN0IC1cclxuICAgICAgICAoc3RhdC5taXNzaW5nID4gMCAmJiBmaWx0ZXJOdWxsW3R5cGVdID8gMSA6IDApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtdWxhKHRpbWVVbml0LCBmaWVsZFJlZjogc3RyaW5nKSB7XHJcbiAgLy8gVE9ETyhrYW5pdHcpOiBhZGQgZm9ybXVsYSB0byBvdGhlciB0aW1lIGZvcm1hdFxyXG4gIHZhciBmbiA9ICd1dGMnICsgdGltZVVuaXQ7XHJcbiAgcmV0dXJuIGZuICsgJygnICsgZmllbGRSZWYgKyAnKSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGgodGltZVVuaXQsIG1vZGVsOiBNb2RlbCkge1xyXG4gIHN3aXRjaCAodGltZVVuaXQpIHtcclxuICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICBjYXNlICdob3Vycyc6XHJcbiAgICBjYXNlICdkYXRlJzpcclxuICAgICAgcmV0dXJuIDI7XHJcbiAgICBjYXNlICdtb250aCc6XHJcbiAgICBjYXNlICdkYXknOlxyXG4gICAgICB2YXIgcm5nID0gcmFuZ2UodGltZVVuaXQsIG1vZGVsKTtcclxuICAgICAgaWYgKHJuZykge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgbG9uZ2VzdCBuYW1lIGluIHRoZSByYW5nZVxyXG4gICAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBybmcubWFwKGZ1bmN0aW9uKHIpIHtyZXR1cm4gci5sZW5ndGg7fSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAyO1xyXG4gICAgY2FzZSAneWVhcic6XHJcbiAgICAgIHJldHVybiA0OyAvLycxOTk4J1xyXG4gIH1cclxuICAvLyBUT0RPKCM2MDApIHJldmlzZSB0aGlzXHJcbiAgLy8gbm8gdGltZSB1bml0XHJcbiAgdmFyIHRpbWVGb3JtYXQgPSBtb2RlbC5jb25maWcoJ3RpbWVGb3JtYXQnKTtcclxuICByZXR1cm4gdXRjRm9ybWF0KHRpbWVGb3JtYXQpKExPTkdfREFURSkubGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UodGltZVVuaXQsIG1vZGVsOiBNb2RlbCkge1xyXG4gIHZhciBsYWJlbExlbmd0aCA9IG1vZGVsLmNvbmZpZygndGltZVNjYWxlTGFiZWxMZW5ndGgnKSxcclxuICAgIHNjYWxlTGFiZWw7XHJcbiAgc3dpdGNoICh0aW1lVW5pdCkge1xyXG4gICAgY2FzZSAnZGF5JzpcclxuICAgICAgc2NhbGVMYWJlbCA9IG1vZGVsLmNvbmZpZygnZGF5U2NhbGVMYWJlbCcpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgc2NhbGVMYWJlbCA9IG1vZGVsLmNvbmZpZygnbW9udGhTY2FsZUxhYmVsJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBpZiAoc2NhbGVMYWJlbCkge1xyXG4gICAgcmV0dXJuIGxhYmVsTGVuZ3RoID8gc2NhbGVMYWJlbC5tYXAoXHJcbiAgICAgICAgZnVuY3Rpb24ocykgeyByZXR1cm4gcy5zdWJzdHIoMCwgbGFiZWxMZW5ndGgpO31cclxuICAgICAgKSA6IHNjYWxlTGFiZWw7XHJcbiAgfVxyXG4gIHJldHVybjtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIHtNb2RlbH0gbW9kZWxcclxuICogQHJldHVybiB7QXJyYXl9ICBzY2FsZXMgZm9yIHRpbWUgdW5pdCBuYW1lc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlcyhtb2RlbDogTW9kZWwpIHtcclxuICB2YXIgc2NhbGVzID0gbW9kZWwucmVkdWNlKGZ1bmN0aW9uKHNjYWxlcywgZmllbGREZWYpIHtcclxuICAgIHZhciB0aW1lVW5pdCA9IGZpZWxkRGVmLnRpbWVVbml0O1xyXG4gICAgaWYgKGZpZWxkRGVmLnR5cGUgPT09IFRFTVBPUkFMICYmIHRpbWVVbml0ICYmICFzY2FsZXNbdGltZVVuaXRdKSB7XHJcbiAgICAgIHZhciBzY2FsZURlZiA9IHNjYWxlLmRlZihmaWVsZERlZi50aW1lVW5pdCwgbW9kZWwpO1xyXG4gICAgICBpZiAoc2NhbGVEZWYpIHNjYWxlc1t0aW1lVW5pdF0gPSBzY2FsZURlZjtcclxuICAgIH1cclxuICAgIHJldHVybiBzY2FsZXM7XHJcbiAgfSwge30pO1xyXG5cclxuICByZXR1cm4gdXRpbC52YWxzKHNjYWxlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09yZGluYWxGbih0aW1lVW5pdCkge1xyXG4gIHN3aXRjaCAodGltZVVuaXQpIHtcclxuICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICBjYXNlICdob3Vycyc6XHJcbiAgICBjYXNlICdkYXknOlxyXG4gICAgY2FzZSAnZGF0ZSc6XHJcbiAgICBjYXNlICdtb250aCc6XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIHNjYWxlIHtcclxuICAvKiogYXBwZW5kIGN1c3RvbSB0aW1lIHNjYWxlcyBmb3IgYXhpcyBsYWJlbCAqL1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWYodGltZVVuaXQsIG1vZGVsOiBNb2RlbCkge1xyXG4gICAgdmFyIHJhbmdlRGVmID0gcmFuZ2UodGltZVVuaXQsIG1vZGVsKTtcclxuXHJcbiAgICBpZiAocmFuZ2VEZWYpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiAndGltZS0nK3RpbWVVbml0LFxyXG4gICAgICAgIHR5cGU6ICdvcmRpbmFsJyxcclxuICAgICAgICBkb21haW46IHNjYWxlLmRvbWFpbih0aW1lVW5pdCksXHJcbiAgICAgICAgcmFuZ2U6IHJhbmdlRGVmXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiB0eXBlKHRpbWVVbml0LCBjaGFubmVsOiBDaGFubmVsKSB7XHJcbiAgICBpZiAoY2hhbm5lbCA9PT0gQ09MT1IpIHtcclxuICAgICAgcmV0dXJuICdsaW5lYXInOyAvLyB0aW1lIGhhcyBvcmRlciwgc28gdXNlIGludGVycG9sYXRlZCBvcmRpbmFsIGNvbG9yIHNjYWxlLlxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZJWE1FIHJldmlzZSB0aGlzIC0tIHNob3VsZCAneWVhcicgYmUgbGluZWFyIHRvbz9cclxuICAgIHJldHVybiBpc09yZGluYWxGbih0aW1lVW5pdCkgfHwgY2hhbm5lbCA9PT0gQ09MVU1OIHx8IGNoYW5uZWwgPT09IFJPVyA/ICdvcmRpbmFsJyA6ICdsaW5lYXInO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRvbWFpbih0aW1lVW5pdCwgY2hhbm5lbD86IENoYW5uZWwpIHtcclxuICAgIHZhciBpc0NvbG9yID0gY2hhbm5lbCA9PT0gQ09MT1I7XHJcbiAgICBzd2l0Y2ggKHRpbWVVbml0KSB7XHJcbiAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICBjYXNlICdtaW51dGVzJzogcmV0dXJuIGlzQ29sb3IgPyBbMCw1OV0gOiB1dGlsLnJhbmdlKDAsIDYwKTtcclxuICAgICAgY2FzZSAnaG91cnMnOiByZXR1cm4gaXNDb2xvciA/IFswLDIzXSA6IHV0aWwucmFuZ2UoMCwgMjQpO1xyXG4gICAgICBjYXNlICdkYXknOiByZXR1cm4gaXNDb2xvciA/IFswLDZdIDogdXRpbC5yYW5nZSgwLCA3KTtcclxuICAgICAgY2FzZSAnZGF0ZSc6IHJldHVybiBpc0NvbG9yID8gWzEsMzFdIDogdXRpbC5yYW5nZSgxLCAzMik7XHJcbiAgICAgIGNhc2UgJ21vbnRoJzogcmV0dXJuIGlzQ29sb3IgPyBbMCwxMV0gOiB1dGlsLnJhbmdlKDAsIDEyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqIHdoZXRoZXIgYSBwYXJ0aWN1bGFyIHRpbWUgZnVuY3Rpb24gaGFzIGN1c3RvbSBzY2FsZSBmb3IgbGFiZWxzIGltcGxlbWVudGVkIGluIHRpbWUuc2NhbGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc1NjYWxlKHRpbWVVbml0KSB7XHJcbiAgc3dpdGNoICh0aW1lVW5pdCkge1xyXG4gICAgY2FzZSAnZGF5JzpcclxuICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCIvKlxyXG4gKiBDb25zdGFudHMgYW5kIHV0aWxpdGllcyBmb3IgZGF0YS5cclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7Tk9NSU5BTCwgT1JESU5BTCwgUVVBTlRJVEFUSVZFLCBURU1QT1JBTH0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCBTVU1NQVJZID0gJ3N1bW1hcnknO1xyXG5leHBvcnQgY29uc3QgU09VUkNFID0gJ3NvdXJjZSc7XHJcbmV4cG9ydCBjb25zdCBTVEFDS0VEID0gJ3N0YWNrZWQnO1xyXG5cclxuLyoqIE1hcHBpbmcgZnJvbSBkYXRhbGliJ3MgaW5mZXJyZWQgdHlwZSB0byBWZWdhLWxpdGUncyB0eXBlICovXHJcbi8vIFRPRE86IEFMTF9DQVBTXHJcbmV4cG9ydCBjb25zdCB0eXBlcyA9IHtcclxuICAnYm9vbGVhbic6IE5PTUlOQUwsXHJcbiAgJ251bWJlcic6IFFVQU5USVRBVElWRSxcclxuICAnaW50ZWdlcic6IFFVQU5USVRBVElWRSxcclxuICAnZGF0ZSc6IFRFTVBPUkFMLFxyXG4gICdzdHJpbmcnOiBOT01JTkFMXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdHMoZGF0YTogQXJyYXk8QXJyYXk8YW55Pj4pIHtcclxuICB2YXIgc3VtbWFyeSA9IHV0aWwuc3VtbWFyeShkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHN1bW1hcnkucmVkdWNlKGZ1bmN0aW9uKHMsIHByb2ZpbGUpIHtcclxuICAgIHNbcHJvZmlsZS5maWVsZF0gPSBwcm9maWxlO1xyXG4gICAgcmV0dXJuIHM7XHJcbiAgfSwge1xyXG4gICAgJyonOiB7XHJcbiAgICAgIG1heDogZGF0YS5sZW5ndGgsXHJcbiAgICAgIG1pbjogMFxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIi8vIHV0aWxpdHkgZm9yIGVuY29kaW5nIG1hcHBpbmdcclxuaW1wb3J0IHtFbmNvZGluZ30gZnJvbSAnLi9zY2hlbWEvZW5jb2Rpbmcuc2NoZW1hJztcclxuaW1wb3J0IHtGaWVsZERlZn0gZnJvbSAnLi9zY2hlbWEvZmllbGRkZWYuc2NoZW1hJztcclxuXHJcbmltcG9ydCB7Q2hhbm5lbCwgQ0hBTk5FTFN9IGZyb20gJy4vY2hhbm5lbCc7XHJcbmltcG9ydCAqIGFzIHZsRmllbGREZWYgZnJvbSAnLi9maWVsZGRlZic7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudFJldGluYWwoZW5jb2Rpbmc6IEVuY29kaW5nKSB7XHJcbiAgdmFyIGNvdW50ID0gMDtcclxuICBpZiAoZW5jb2RpbmcuY29sb3IpIGNvdW50Kys7XHJcbiAgaWYgKGVuY29kaW5nLnNpemUpIGNvdW50Kys7XHJcbiAgaWYgKGVuY29kaW5nLnNoYXBlKSBjb3VudCsrO1xyXG4gIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhcyhlbmNvZGluZzogRW5jb2RpbmcsIGNoYW5uZWw6IENoYW5uZWwpIHtcclxuICB2YXIgZmllbGREZWY6IEZpZWxkRGVmID0gZW5jb2RpbmcgJiYgZW5jb2RpbmdbY2hhbm5lbF07XHJcbiAgcmV0dXJuIGZpZWxkRGVmICYmIGZpZWxkRGVmLmZpZWxkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBZ2dyZWdhdGUoZW5jb2Rpbmc6IEVuY29kaW5nKSB7XHJcbiAgZm9yICh2YXIgayBpbiBlbmNvZGluZykge1xyXG4gICAgaWYgKGhhcyhlbmNvZGluZywgaykgJiYgZW5jb2Rpbmdba10uYWdncmVnYXRlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGVuY29kaW5nOiBFbmNvZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZjogKGZkOiBGaWVsZERlZiwgYzogQ2hhbm5lbCwgaTpudW1iZXIpID0+IHZvaWQpIHtcclxuICB2YXIgaSA9IDA7XHJcbiAgQ0hBTk5FTFMuZm9yRWFjaChmdW5jdGlvbihjaGFubmVsKSB7XHJcbiAgICBpZiAoaGFzKGVuY29kaW5nLCBjaGFubmVsKSkge1xyXG4gICAgICBmKGVuY29kaW5nW2NoYW5uZWxdLCBjaGFubmVsLCBpKyspO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwKGVuY29kaW5nOiBFbmNvZGluZyxcclxuICAgICAgICAgICAgICAgICAgICBmOiAoZmQ6IEZpZWxkRGVmLCBjOiBDaGFubmVsLCBlOiBFbmNvZGluZykgPT4gYW55KSB7XHJcbiAgdmFyIGFyciA9IFtdO1xyXG4gIENIQU5ORUxTLmZvckVhY2goZnVuY3Rpb24oaykge1xyXG4gICAgaWYgKGhhcyhlbmNvZGluZywgaykpIHtcclxuICAgICAgYXJyLnB1c2goZihlbmNvZGluZ1trXSwgaywgZW5jb2RpbmcpKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKGVuY29kaW5nOiBFbmNvZGluZyxcclxuICAgICAgICAgICAgICAgICAgZjogKGFjYzogYW55LCBmZDogRmllbGREZWYsIGM6IENoYW5uZWwsIGU6IEVuY29kaW5nKSA9PiBhbnksXHJcbiAgICAgICAgICAgICAgICAgIGluaXQpIHtcclxuICB2YXIgciA9IGluaXQ7XHJcbiAgQ0hBTk5FTFMuZm9yRWFjaChmdW5jdGlvbihrKSB7XHJcbiAgICBpZiAoaGFzKGVuY29kaW5nLCBrKSkge1xyXG4gICAgICByID0gZihyLCBlbmNvZGluZ1trXSwgaywgIGVuY29kaW5nKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxuLy8gRklYTUU6IHJldmlzZSB0aGlzIC8gY29uc2lkZXIgaWYgd2Ugc2hvdWxkIHJlbW92ZVxyXG4vKipcclxuICogcmV0dXJuIGtleS12YWx1ZSBwYWlycyBvZiBmaWVsZCBuYW1lIGFuZCBsaXN0IG9mIGZpZWxkcyBvZiB0aGF0IGZpZWxkIG5hbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWVsZHMoZW5jb2Rpbmc6IEVuY29kaW5nKSB7XHJcbiAgcmV0dXJuIHJlZHVjZShlbmNvZGluZywgZnVuY3Rpb24gKG0sIGZpZWxkRGVmOiBGaWVsZERlZikge1xyXG4gICAgdmFyIGZpZWxkTGlzdCA9IG1bZmllbGREZWYuZmllbGRdID0gbVtmaWVsZERlZi5maWVsZF0gfHwgW107XHJcbiAgICB2YXIgY29udGFpbnNUeXBlID0gZmllbGRMaXN0LmNvbnRhaW5zVHlwZSA9IGZpZWxkTGlzdC5jb250YWluc1R5cGUgfHwge307XHJcblxyXG4gICAgaWYgKGZpZWxkTGlzdC5pbmRleE9mKGZpZWxkRGVmKSA9PT0gLTEpIHtcclxuICAgICAgZmllbGRMaXN0LnB1c2goZmllbGREZWYpO1xyXG4gICAgICAvLyBhdWdtZW50IHRoZSBhcnJheSB3aXRoIGNvbnRhaW5zVHlwZS5RIC8gTyAvIE4gLyBUXHJcbiAgICAgIGNvbnRhaW5zVHlwZVtmaWVsZERlZi50eXBlXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbTtcclxuICB9LCB7fSk7XHJcbn1cclxuIiwiLy8gdXRpbGl0eSBmb3IgYSBmaWVsZCBkZWZpbml0aW9uIG9iamVjdFxyXG5cclxuaW1wb3J0IHtGaWVsZERlZn0gZnJvbSAnLi9zY2hlbWEvZmllbGRkZWYuc2NoZW1hJztcclxuaW1wb3J0IHtCaW59IGZyb20gJy4vc2NoZW1hL2Jpbi5zY2hlbWEnO1xyXG5cclxuaW1wb3J0IHtNQVhCSU5TX0RFRkFVTFR9IGZyb20gJy4vYmluJztcclxuaW1wb3J0IHtBR0dSRUdBVEVfT1BTfSBmcm9tICcuL2FnZ3JlZ2F0ZSc7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcclxuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL2NvbXBpbGVyL3RpbWUnO1xyXG5pbXBvcnQge1RJTUVVTklUU30gZnJvbSAnLi90aW1ldW5pdCc7XHJcbmltcG9ydCB7Tk9NSU5BTCwgT1JESU5BTCwgUVVBTlRJVEFUSVZFLCBURU1QT1JBTCwgU0hPUlRfVFlQRSwgVFlQRV9GUk9NX1NIT1JUX1RZUEV9IGZyb20gJy4vdHlwZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkUmVmT3B0aW9uIHtcclxuICAvKiogZXhjbHVkZSBiaW4sIGFnZ3JlZ2F0ZSwgdGltZVVuaXQgKi9cclxuICBub2ZuPzogYm9vbGVhbjtcclxuICAvKiogZXhjbHVkZSBhZ2dyZWdhdGlvbiBmdW5jdGlvbiAqL1xyXG4gIG5vQWdncmVnYXRlPzogYm9vbGVhbjtcclxuICAvKiogaW5jbHVkZSAnZGF0dW0uJyAqL1xyXG4gIGRhdHVtPzogYm9vbGVhbjtcclxuICAvKiogcmVwbGFjZSBmbiB3aXRoIGN1c3RvbSBmdW5jdGlvbiBwcmVmaXggKi9cclxuICBmbj86IHN0cmluZztcclxuICAvKiogcHJlcGVuZCBmbiB3aXRoIGN1c3RvbSBmdW5jdGlvbiBwcmVmaXggKi9cclxuICBwcmVmbj86IHN0cmluZztcclxuICAvKiogYXBwZW5kIHN1ZmZpeCB0byB0aGUgZmllbGQgcmVmIGZvciBiaW4gKGRlZmF1bHQ9J19zdGFydCcpICovXHJcbiAgYmluU3VmZml4Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmllbGRSZWYoZmllbGREZWY6IEZpZWxkRGVmLCBvcHQ/OiBGaWVsZFJlZk9wdGlvbikge1xyXG4gIG9wdCA9IG9wdCB8fCB7fTtcclxuXHJcbiAgdmFyIGYgPSAob3B0LmRhdHVtID8gJ2RhdHVtLicgOiAnJykgKyAob3B0LnByZWZuIHx8ICcnKSxcclxuICAgIGZpZWxkID0gZmllbGREZWYuZmllbGQ7XHJcblxyXG4gIGlmIChpc0NvdW50KGZpZWxkRGVmKSkge1xyXG4gICAgcmV0dXJuIGYgKyAnY291bnQnO1xyXG4gIH0gZWxzZSBpZiAob3B0LmZuKSB7XHJcbiAgICByZXR1cm4gZiArIG9wdC5mbiArICdfJyArIGZpZWxkO1xyXG4gIH0gZWxzZSBpZiAoIW9wdC5ub2ZuICYmIGZpZWxkRGVmLmJpbikge1xyXG4gICAgdmFyIGJpblN1ZmZpeCA9IG9wdC5iaW5TdWZmaXggfHwgJ19zdGFydCc7XHJcbiAgICByZXR1cm4gZiArICdiaW5fJyArIGZpZWxkICsgYmluU3VmZml4O1xyXG4gIH0gZWxzZSBpZiAoIW9wdC5ub2ZuICYmICFvcHQubm9BZ2dyZWdhdGUgJiYgZmllbGREZWYuYWdncmVnYXRlKSB7XHJcbiAgICByZXR1cm4gZiArIGZpZWxkRGVmLmFnZ3JlZ2F0ZSArICdfJyArIGZpZWxkO1xyXG4gIH0gZWxzZSBpZiAoIW9wdC5ub2ZuICYmIGZpZWxkRGVmLnRpbWVVbml0KSB7XHJcbiAgICByZXR1cm4gZiArIGZpZWxkRGVmLnRpbWVVbml0ICsgJ18nICsgZmllbGQ7XHJcbiAgfSAgZWxzZSB7XHJcbiAgICByZXR1cm4gZiArIGZpZWxkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZXMoZmllbGREZWY6IEZpZWxkRGVmLCB0eXBlczogQXJyYXk8U3RyaW5nPikge1xyXG4gIGZvciAodmFyIHQgPSAwOyB0IDwgdHlwZXMubGVuZ3RoOyB0KyspIHtcclxuICAgIGlmIChmaWVsZERlZi50eXBlID09PSB0eXBlc1t0XSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBNb3N0IGZpZWxkcyB0aGF0IHVzZSBvcmRpbmFsIHNjYWxlIGFyZSBkaW1lbnNpb25zLlxyXG4gKiBIb3dldmVyLCBZRUFSKFQpLCBZRUFSTU9OVEgoVCkgdXNlIHRpbWUgc2NhbGUsIG5vdCBvcmRpbmFsIGJ1dCBhcmUgZGltZW5zaW9ucyB0b28uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNPcmRpbmFsU2NhbGUoZmllbGREZWY6IEZpZWxkRGVmKSB7XHJcbiAgcmV0dXJuICBpc1R5cGVzKGZpZWxkRGVmLCBbTk9NSU5BTCwgT1JESU5BTF0pIHx8XHJcbiAgICAoZmllbGREZWYudHlwZSA9PT0gVEVNUE9SQUwgJiYgZmllbGREZWYudGltZVVuaXQgJiYgdGltZS5pc09yZGluYWxGbihmaWVsZERlZi50aW1lVW5pdCkgKTtcclxufVxyXG5cclxuXHJcbi8vIFRPRE8gcmVtb3ZlIHRoZXNlIFwiaXNEaW1lbnNpb24vaXNNZWFzdXJlXCIgc3R1ZmZcclxuZnVuY3Rpb24gX2lzRmllbGREaW1lbnNpb24oZmllbGREZWY6IEZpZWxkRGVmKSB7XHJcbiAgcmV0dXJuICBpc1R5cGVzKGZpZWxkRGVmLCBbTk9NSU5BTCwgT1JESU5BTF0pIHx8ICEhZmllbGREZWYuYmluIHx8XHJcbiAgICAoZmllbGREZWYudHlwZSA9PT0gVEVNUE9SQUwgJiYgISFmaWVsZERlZi50aW1lVW5pdCApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEaW1lbnNpb24oZmllbGREZWY6IEZpZWxkRGVmKSB7XHJcbiAgcmV0dXJuIGZpZWxkRGVmICYmIF9pc0ZpZWxkRGltZW5zaW9uKGZpZWxkRGVmKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWVhc3VyZShmaWVsZERlZjogRmllbGREZWYpIHtcclxuICByZXR1cm4gZmllbGREZWYgJiYgIV9pc0ZpZWxkRGltZW5zaW9uKGZpZWxkRGVmKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50KCk6IEZpZWxkRGVmIHtcclxuICByZXR1cm4ge2ZpZWxkOicqJywgYWdncmVnYXRlOiAnY291bnQnLCB0eXBlOiBRVUFOVElUQVRJVkUsIGRpc3BsYXlOYW1lOiBDT1VOVF9ESVNQTEFZTkFNRX07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT1VOVF9ESVNQTEFZTkFNRSA9ICdOdW1iZXIgb2YgUmVjb3Jkcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNDb3VudChmaWVsZERlZjogRmllbGREZWYpIHtcclxuICByZXR1cm4gZmllbGREZWYuYWdncmVnYXRlID09PSAnY291bnQnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FyZGluYWxpdHkoZmllbGREZWY6IEZpZWxkRGVmLCBzdGF0cywgZmlsdGVyTnVsbCA9IHt9KSB7XHJcbiAgLy8gRklYTUUgbmVlZCB0byB0YWtlIGZpbHRlciBpbnRvIGFjY291bnRcclxuXHJcbiAgdmFyIHN0YXQgPSBzdGF0c1tmaWVsZERlZi5maWVsZF07XHJcbiAgdmFyIHR5cGUgPSBmaWVsZERlZi50eXBlO1xyXG5cclxuICBpZiAoZmllbGREZWYuYmluKSB7XHJcbiAgICAvLyBuZWVkIHRvIHJlYXNzaWduIGJpbiwgb3RoZXJ3aXNlIGNvbXBpbGF0aW9uIHdpbGwgZmFpbCBkdWUgdG8gYSBUUyBidWcuXHJcbiAgICBjb25zdCBiaW4gPSBmaWVsZERlZi5iaW47XHJcbiAgICBjb25zdCBtYXhiaW5zID0gKHR5cGVvZiBiaW4gPT09ICdib29sZWFuJykgPyBNQVhCSU5TX0RFRkFVTFQgOiBiaW4ubWF4YmlucztcclxuXHJcbiAgICB2YXIgYmlucyA9IHV0aWwuZ2V0YmlucyhzdGF0LCBtYXhiaW5zKTtcclxuICAgIHJldHVybiAoYmlucy5zdG9wIC0gYmlucy5zdGFydCkgLyBiaW5zLnN0ZXA7XHJcbiAgfVxyXG4gIGlmIChmaWVsZERlZi50eXBlID09PSBURU1QT1JBTCkge1xyXG4gICAgdmFyIGNhcmRpbmFsaXR5ID0gdGltZS5jYXJkaW5hbGl0eShmaWVsZERlZiwgc3RhdHMsIGZpbHRlck51bGwsIHR5cGUpO1xyXG4gICAgaWYoY2FyZGluYWxpdHkgIT09IG51bGwpIHJldHVybiBjYXJkaW5hbGl0eTtcclxuICAgIC8vb3RoZXJ3aXNlIHVzZSBjYWxjdWxhdGlvbiBiZWxvd1xyXG4gIH1cclxuICBpZiAoZmllbGREZWYuYWdncmVnYXRlKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBudWxsXHJcbiAgcmV0dXJuIHN0YXQuZGlzdGluY3QgLVxyXG4gICAgKHN0YXQubWlzc2luZyA+IDAgJiYgZmlsdGVyTnVsbFt0eXBlXSA/IDEgOiAwKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgQVJFQSA9ICdhcmVhJztcclxuZXhwb3J0IGNvbnN0IEJBUiA9ICdiYXInO1xyXG5leHBvcnQgY29uc3QgTElORSA9ICdsaW5lJztcclxuZXhwb3J0IGNvbnN0IFBPSU5UID0gJ3BvaW50JztcclxuZXhwb3J0IGNvbnN0IFRFWFQgPSAndGV4dCc7XHJcbmV4cG9ydCBjb25zdCBUSUNLID0gJ3RpY2snO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIEF4aXMge1xyXG4gIC8vIFZlZ2EgQXhpcyBQcm9wZXJ0aWVzXHJcbiAgZm9ybWF0Pzogc3RyaW5nO1xyXG4gIGdyaWQ/OiBib29sZWFuO1xyXG4gIGxheWVyPzogc3RyaW5nO1xyXG4gIG9yaWVudD86IHN0cmluZztcclxuICB0aWNrcz86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICAvLyBWZWdhLUxpdGUgb25seVxyXG4gIGxhYmVsTWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gIHRpdGxlTWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gIHRpdGxlT2Zmc2V0PzogbnVtYmVyO1xyXG4gIHByb3BlcnRpZXM/OiBhbnk7IC8vIFRPRE86IGRlY2xhcmUgVmdBeGlzUHJvcGVydGllc1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGF4aXMgPSB7XHJcbiAgdHlwZTogJ29iamVjdCcsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLyogVmVnYSBBeGlzIFByb3BlcnRpZXMgKi9cclxuICAgIGZvcm1hdDoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLCAgLy8gYXV0b1xyXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBmb3JtYXR0aW5nIHBhdHRlcm4gZm9yIGF4aXMgbGFiZWxzLiAnK1xyXG4gICAgICAgICAgICAgICAgICAgJ0lmIG5vdCB1bmRlZmluZWQsIHRoaXMgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgJ3RoZSBtYXggdmFsdWUgJyArXHJcbiAgICAgICAgICAgICAgICAgICAnb2YgdGhlIGZpZWxkLidcclxuICAgIH0sXHJcbiAgICBncmlkOiB7XHJcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0EgZmxhZyBpbmRpY2F0ZSBpZiBncmlkbGluZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYWRkaXRpb24gdG8gdGlja3MuIElmIGBncmlkYCBpcyB1bnNwZWNpZmllZCwgdGhlIGRlZmF1bHQgdmFsdWUgaXMgYHRydWVgIGZvciBST1cgYW5kIENPTC4gRm9yIFggYW5kIFksIHRoZSBkZWZhdWx0IHZhbHVlIGlzIGB0cnVlYCBmb3IgcXVhbnRpdGF0aXZlIGFuZCB0aW1lIGZpZWxkcyBhbmQgYGZhbHNlYCBvdGhlcndpc2UuJ1xyXG4gICAgfSxcclxuICAgIGxheWVyOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSBzdHJpbmcgaW5kaWNhdGluZyBpZiB0aGUgYXhpcyAoYW5kIGFueSBncmlkbGluZXMpIHNob3VsZCBiZSBwbGFjZWQgYWJvdmUgb3IgYmVsb3cgdGhlIGRhdGEgbWFya3MuJ1xyXG4gICAgfSxcclxuICAgIG9yaWVudDoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICBlbnVtOiBbJ3RvcCcsICdyaWdodCcsICdsZWZ0JywgJ2JvdHRvbSddLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBvcmllbnRhdGlvbiBvZiB0aGUgYXhpcy4gT25lIG9mIHRvcCwgYm90dG9tLCBsZWZ0IG9yIHJpZ2h0LiBUaGUgb3JpZW50YXRpb24gY2FuIGJlIHVzZWQgdG8gZnVydGhlciBzcGVjaWFsaXplIHRoZSBheGlzIHR5cGUgKGUuZy4sIGEgeSBheGlzIG9yaWVudGVkIGZvciB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgY2hhcnQpLidcclxuICAgIH0sXHJcbiAgICB0aWNrczoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgbWluaW11bTogMCxcclxuICAgICAgZGVzY3JpcHRpb246ICdBIGRlc2lyZWQgbnVtYmVyIG9mIHRpY2tzLCBmb3IgYXhlcyB2aXN1YWxpemluZyBxdWFudGl0YXRpdmUgc2NhbGVzLiBUaGUgcmVzdWx0aW5nIG51bWJlciBtYXkgYmUgZGlmZmVyZW50IHNvIHRoYXQgdmFsdWVzIGFyZSBcIm5pY2VcIiAobXVsdGlwbGVzIG9mIDIsIDUsIDEwKSBhbmQgbGllIHdpdGhpbiB0aGUgdW5kZXJseWluZyBzY2FsZVxcJ3MgcmFuZ2UuJ1xyXG4gICAgfSxcclxuICAgIC8qIFZlZ2EgQXhpcyBQcm9wZXJ0aWVzIHRoYXQgYXJlIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGVkIGJ5IFZlZ2EtbGl0ZSAqL1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgZGVzY3JpcHRpb246ICdBIHRpdGxlIGZvciB0aGUgYXhpcy4gKFNob3dzIGZpZWxkIG5hbWUgYW5kIGl0cyBmdW5jdGlvbiBieSBkZWZhdWx0LiknXHJcbiAgICB9LFxyXG4gICAgLyogVmVnYS1saXRlIG9ubHkgKi9cclxuICAgIGxhYmVsTWF4TGVuZ3RoOiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgZGVmYXVsdDogMjUsXHJcbiAgICAgIG1pbmltdW06IDAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVHJ1bmNhdGUgbGFiZWxzIHRoYXQgYXJlIHRvbyBsb25nLidcclxuICAgIH0sXHJcbiAgICB0aXRsZU1heExlbmd0aDoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgbWluaW11bTogMCxcclxuICAgICAgZGVzY3JpcHRpb246ICdNYXggbGVuZ3RoIGZvciBheGlzIHRpdGxlIGlmIHRoZSB0aXRsZSBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBmcm9tIHRoZSBmaWVsZFxcJ3MgZGVzY3JpcHRpb24nXHJcbiAgICB9LFxyXG4gICAgdGl0bGVPZmZzZXQ6IHtcclxuICAgICAgdHlwZTogJ2ludGVnZXInLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsICAvLyBhdXRvXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSB0aXRsZSBvZmZzZXQgdmFsdWUgZm9yIHRoZSBheGlzLidcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnT3B0aW9uYWwgbWFyayBwcm9wZXJ0eSBkZWZpbml0aW9ucyBmb3IgY3VzdG9tIGF4aXMgc3R5bGluZy4nXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQge01BWEJJTlNfREVGQVVMVH0gZnJvbSAnLi4vYmluJztcclxuaW1wb3J0IHtRVUFOVElUQVRJVkV9IGZyb20gJy4uL3R5cGUnO1xyXG5pbXBvcnQge3RvTWFwfSBmcm9tICcuLi91dGlsJztcclxuXHJcbi8vIFRPRE86IGFkZCBvdGhlciBiaW4gcHJvcGVydGllc1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaW4ge1xyXG4gIG1heGJpbnM6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHZhciBiaW4gPSB7XHJcbiAgdHlwZTogWydib29sZWFuJywgJ29iamVjdCddLFxyXG4gIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIG1heGJpbnM6IHtcclxuICAgICAgdHlwZTogJ2ludGVnZXInLFxyXG4gICAgICBkZWZhdWx0OiBNQVhCSU5TX0RFRkFVTFQsXHJcbiAgICAgIG1pbmltdW06IDIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWF4aW11bSBudW1iZXIgb2YgYmlucy4nXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdXBwb3J0ZWRUeXBlczogdG9NYXAoW1FVQU5USVRBVElWRV0pIC8vIFRPRE86IGFkZCBPIGFmdGVyIGZpbmlzaGluZyAjODFcclxufTtcclxuIiwiLy8gVE9ETzogYWRkIGludGVyZmFjZSBDb25maWdcclxuXHJcbmV4cG9ydCB2YXIgY29uZmlnID0ge1xyXG4gIHR5cGU6ICdvYmplY3QnLFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIC8vIHRlbXBsYXRlXHJcbiAgICB3aWR0aDoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAgfSxcclxuICAgIGhlaWdodDoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAgfSxcclxuICAgIHZpZXdwb3J0OiB7XHJcbiAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgdHlwZTogJ2ludGVnZXInXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAgfSxcclxuICAgIGdyaWRDb2xvcjoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgcm9sZTogJ2NvbG9yJyxcclxuICAgICAgZGVmYXVsdDogJyMwMDAwMDAnXHJcbiAgICB9LFxyXG4gICAgZ3JpZE9wYWNpdHk6IHtcclxuICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgIG1pbmltdW06IDAsXHJcbiAgICAgIG1heGltdW06IDEsXHJcbiAgICAgIGRlZmF1bHQ6IDAuMDhcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZmlsdGVyIG51bGxcclxuICAgIC8vIFRPRE8oIzU5NykgcmV2aXNlIHRoaXMgY29uZmlnXHJcbiAgICBmaWx0ZXJOdWxsOiB7XHJcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbm9taW5hbDoge3R5cGU6J2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICAgICAgb3JkaW5hbDoge3R5cGU6J2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZX0sXHJcbiAgICAgICAgcXVhbnRpdGF0aXZlOiB7dHlwZTonYm9vbGVhbicsIGRlZmF1bHQ6IHRydWV9LFxyXG4gICAgICAgIHRlbXBvcmFsOiB7dHlwZTonYm9vbGVhbicsIGRlZmF1bHQ6IHRydWV9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhdXRvU29ydExpbmU6IHtcclxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHNpbmdsZSBwbG90XHJcbiAgICBzaW5nbGVIZWlnaHQ6IHtcclxuICAgICAgLy8gd2lsbCBiZSBvdmVyd3JpdHRlbiBieSBiYW5kV2lkdGggKiAoY2FyZGluYWxpdHkgKyBwYWRkaW5nKVxyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IDIwMCxcclxuICAgICAgbWluaW11bTogMFxyXG4gICAgfSxcclxuICAgIHNpbmdsZVdpZHRoOiB7XHJcbiAgICAgIC8vIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgYmFuZFdpZHRoICogKGNhcmRpbmFsaXR5ICsgcGFkZGluZylcclxuICAgICAgdHlwZTogJ2ludGVnZXInLFxyXG4gICAgICBkZWZhdWx0OiAyMDAsXHJcbiAgICAgIG1pbmltdW06IDBcclxuICAgIH0sXHJcbiAgICAvLyBiYW5kIHNpemVcclxuICAgIGxhcmdlQmFuZFdpZHRoOiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgZGVmYXVsdDogMjEsXHJcbiAgICAgIG1pbmltdW06IDBcclxuICAgIH0sXHJcbiAgICBzbWFsbEJhbmRXaWR0aDoge1xyXG4gICAgICAvL3NtYWxsIG11bHRpcGxlcyBvciBzaW5nbGUgcGxvdCB3aXRoIGhpZ2ggY2FyZGluYWxpdHlcclxuICAgICAgdHlwZTogJ2ludGVnZXInLFxyXG4gICAgICBkZWZhdWx0OiAxMixcclxuICAgICAgbWluaW11bTogMFxyXG4gICAgfSxcclxuICAgIGxhcmdlQmFuZE1heENhcmRpbmFsaXR5OiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgZGVmYXVsdDogMTBcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ2RlZmF1bHQgc2NhbGUgcGFkZGluZyBmb3Igb3JkaW5hbCB4L3kgc2NhbGVzLidcclxuICAgIH0sXHJcbiAgICAvLyBzbWFsbCBtdWx0aXBsZXNcclxuICAgIGNlbGxQYWRkaW5nOiB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBkZWZhdWx0OiAwLjEsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVmYXVsdCBzY2FsZSBwYWRkaW5nIGZvciByb3cvY29sdW1uIHNjYWxlcy4nXHJcbiAgICB9LFxyXG4gICAgY2VsbEdyaWRDb2xvcjoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgcm9sZTogJ2NvbG9yJyxcclxuICAgICAgZGVmYXVsdDogJyMwMDAwMDAnXHJcbiAgICB9LFxyXG4gICAgY2VsbEdyaWRPcGFjaXR5OiB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBtaW5pbXVtOiAwLFxyXG4gICAgICBtYXhpbXVtOiAxLFxyXG4gICAgICBkZWZhdWx0OiAwLjI1XHJcbiAgICB9LFxyXG4gICAgY2VsbEdyaWRPZmZzZXQ6IHtcclxuICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgIGRlZmF1bHQ6IDYgLy8gZXF1YWwgdG8gdGlja1NpemVcclxuICAgIH0sXHJcbiAgICBjZWxsQmFja2dyb3VuZENvbG9yOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICByb2xlOiAnY29sb3InLFxyXG4gICAgICBkZWZhdWx0OiAncmdiYSgwLDAsMCwwKSdcclxuICAgIH0sXHJcbiAgICB0ZXh0Q2VsbFdpZHRoOiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgZGVmYXVsdDogOTAsXHJcbiAgICAgIG1pbmltdW06IDBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gbGF5b3V0XHJcbiAgICBzdGFjazoge1xyXG4gICAgICB0eXBlOiBbJ2Jvb2xlYW4nLCAnb2JqZWN0J10sXHJcbiAgICAgIGRlZmF1bHQ6IHt9LFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0VuYWJsZSBzdGFja2luZyAoZm9yIGJhciBhbmQgYXJlYSBtYXJrcyBvbmx5KS4nLFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc29ydDoge1xyXG4gICAgICAgICAgb25lT2Y6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICBlbnVtOiBbJ2FzY2VuZGluZycsICdkZXNjZW5kaW5nJ11cclxuICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICAgICAgICBpdGVtczoge3R5cGU6ICdzdHJpbmcnfSxcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdPcmRlciBvZiB0aGUgc3RhY2suICcgK1xyXG4gICAgICAgICAgICAnVGhpcyBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIChlaXRoZXIgXCJkZXNjZW5kaW5nXCIgb3IgXCJhc2NlbmRpbmdcIiknICtcclxuICAgICAgICAgICAgJ29yIGEgbGlzdCBvZiBmaWVsZHMgdG8gZGV0ZXJtaW5lIHRoZSBvcmRlciBvZiBzdGFjayBsYXllcnMuJyArXHJcbiAgICAgICAgICAgICdCeSBkZWZhdWx0LCBzdGFjayB1c2VzIGRlc2NlbmRpbmcgb3JkZXIuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2Zmc2V0OiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGVudW06IFsnemVybycsICdjZW50ZXInLCAnbm9ybWFsaXplJ11cclxuICAgICAgICAgIC8vIFRPRE8oIzYyMCkgcmVmZXIgdG8gVmVnYSBzcGVjIG9uY2UgaXQgZG9lc24ndCB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgLy8gZW51bTogdmdTdGFja1NjaGVtYS5wcm9wZXJ0aWVzLm9mZnNldC5vbmVPZlswXS5lbnVtXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIG1hcmtzXHJcbiAgICBzdHJva2VXaWR0aDoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IDIsXHJcbiAgICAgIG1pbmltdW06IDBcclxuICAgIH0sXHJcbiAgICBzaW5nbGVCYXJPZmZzZXQ6IHtcclxuICAgICAgdHlwZTogJ2ludGVnZXInLFxyXG4gICAgICBkZWZhdWx0OiA1LFxyXG4gICAgICBtaW5pbXVtOiAwXHJcbiAgICB9LFxyXG4gICAgLy8gc2NhbGVzXHJcbiAgICB0aW1lU2NhbGVMYWJlbExlbmd0aDoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IDMsXHJcbiAgICAgIG1pbmltdW06IDAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWF4IGxlbmd0aCBmb3IgdmFsdWVzIGluIGRheVNjYWxlTGFiZWwgYW5kIG1vbnRoU2NhbGVMYWJlbC4gIFplcm8gbWVhbnMgdXNpbmcgZnVsbCBuYW1lcyBpbiBkYXlTY2FsZUxhYmVsL21vbnRoU2NhbGVMYWJlbC4nXHJcbiAgICB9LFxyXG4gICAgZGF5U2NhbGVMYWJlbDoge1xyXG4gICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICBpdGVtczoge1xyXG4gICAgICAgIHR5cGU6ICdzdHJpbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlZmF1bHQ6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcclxuICAgICAgZGVzY3JpcHRpb246ICdBeGlzIGxhYmVscyBmb3IgZGF5IG9mIHdlZWssIHN0YXJ0aW5nIGZyb20gU3VuZGF5LicgK1xyXG4gICAgICAgICcoQ29uc2lzdGVudCB3aXRoIEphdmFzY3JpcHQgLS0gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGUvZ2V0RGF5LidcclxuICAgIH0sXHJcbiAgICBtb250aFNjYWxlTGFiZWw6IHtcclxuICAgICAgdHlwZTogJ2FycmF5JyxcclxuICAgICAgaXRlbXM6IHtcclxuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0OiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcclxuICAgICAgZGVzY3JpcHRpb246ICdBeGlzIGxhYmVscyBmb3IgbW9udGguJ1xyXG4gICAgfSxcclxuICAgIC8vIG90aGVyXHJcbiAgICBjaGFyYWN0ZXJXaWR0aDoge1xyXG4gICAgICB0eXBlOiAnaW50ZWdlcicsXHJcbiAgICAgIGRlZmF1bHQ6IDZcclxuICAgIH0sXHJcbiAgICBudW1iZXJGb3JtYXQ6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6ICdzJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdEMyBOdW1iZXIgZm9ybWF0IGZvciBheGlzIGxhYmVscyBhbmQgdGV4dCB0YWJsZXMuJ1xyXG4gICAgfSxcclxuICAgIHRpbWVGb3JtYXQ6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6ICclWS0lbS0lZCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0ZSBmb3JtYXQgZm9yIGF4aXMgbGFiZWxzLidcclxuICAgIH0sXHJcbiAgICB1c2VSYXdEb21haW46IHtcclxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIHNvdXJjZSBkYXRhIHJhbmdlIGFzIHNjYWxlIGRvbWFpbiBpbnN0ZWFkIG9mICcgK1xyXG4gICAgICAgICAgICAgICAgICAgJ2FnZ3JlZ2F0ZWQgZGF0YSBmb3IgYWdncmVnYXRlIGF4aXMuICcgK1xyXG4gICAgICAgICAgICAgICAgICAgJ1RoaXMgb3B0aW9uIGRvZXMgbm90IHdvcmsgd2l0aCBzdW0gb3IgY291bnQgYWdncmVnYXRlJyArXHJcbiAgICAgICAgICAgICAgICAgICAnYXMgdGhleSBtaWdodCBoYXZlIGEgc3Vic3RhbnRpYWxseSBsYXJnZXIgc2NhbGUgcmFuZ2UuJyArXHJcbiAgICAgICAgICAgICAgICAgICAnQnkgZGVmYXVsdCwgdXNlIHZhbHVlIGZyb20gY29uZmlnLnVzZVJhd0RvbWFpbi4nXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIERhdGEge1xyXG4gIGZvcm1hdFR5cGU/OiBzdHJpbmc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIHZhbHVlcz86IGFueVtdO1xyXG4gIGZpbHRlcj86IHN0cmluZztcclxuICBjYWxjdWxhdGU/OiBWZ0Zvcm11bGFbXTtcclxufVxyXG5cclxuLy8gVE9ETyBtb3ZlIHRoaXMgdG8gb25lIGNlbnRyYWwgcG9zaXRpb25cclxuZXhwb3J0IGludGVyZmFjZSBWZ0Zvcm11bGEge1xyXG4gIGZpZWxkOiBzdHJpbmc7XHJcbiAgZXhwcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIGRhdGEgPSB7XHJcbiAgdHlwZTogJ29iamVjdCcsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLy8gZGF0YSBzb3VyY2VcclxuICAgIGZvcm1hdFR5cGU6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGVudW06IFsnanNvbicsICdjc3YnLCAndHN2J10sXHJcbiAgICAgIGRlZmF1bHQ6ICdqc29uJ1xyXG4gICAgfSxcclxuICAgIHVybDoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXHJcbiAgICB9LFxyXG4gICAgdmFsdWVzOiB7XHJcbiAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgZGVzY3JpcHRpb246ICdQYXNzIGFycmF5IG9mIG9iamVjdHMgaW5zdGVhZCBvZiBhIHVybCB0byBhIGZpbGUuJyxcclxuICAgICAgaXRlbXM6IHtcclxuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gd2UgZ2VuZXJhdGUgYSB2ZWdhIGZpbHRlciB0cmFuc2Zvcm1cclxuICAgIGZpbHRlcjoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0Egc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGZpbHRlciBWZWdhIGV4cHJlc3Npb24uIFVzZSBgZGF0dW1gIHRvIHJlZmVyIHRvIHRoZSBjdXJyZW50IGRhdGEgb2JqZWN0LidcclxuICAgIH0sXHJcbiAgICAvLyB3ZSBnZW5lcmF0ZSBhIHZlZ2EgZm9ybXVsYSB0cmFuc2Zvcm1cclxuICAgIGNhbGN1bGF0ZToge1xyXG4gICAgICB0eXBlOiAnYXJyYXknLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsY3VsYXRlIG5ldyBmaWVsZChzKSB1c2luZyB0aGUgcHJvdmlkZWQgZXhwcmVzc3Npb24ocykuIENhbGN1bGF0aW9uIGFyZSBhcHBsaWVkIGJlZm9yZSBmaWx0ZXIuJyxcclxuICAgICAgaXRlbXM6IHtcclxuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgZmllbGQgaW4gd2hpY2ggdG8gc3RvcmUgdGhlIGNvbXB1dGVkIGZvcm11bGEgdmFsdWUuJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGV4cHI6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzdHJpbmcgY29udGFpbmluZyBhbiBleHByZXNzaW9uIGZvciB0aGUgZm9ybXVsYS4gVXNlIHRoZSB2YXJpYWJsZSBgZGF0dW1gIHRvIHRvIHJlZmVyIHRvIHRoZSBjdXJyZW50IGRhdGEgb2JqZWN0LidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2NvbG9yYnJld2VyLmQudHNcIi8+XHJcbmltcG9ydCAqIGFzIGNvbG9yYnJld2VyIGZyb20gJ2NvbG9yYnJld2VyJztcclxuXHJcbmltcG9ydCB7bWVyZ2V9IGZyb20gJy4vc2NoZW1hdXRpbCc7XHJcbmltcG9ydCB7ZHVwbGljYXRlfSBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0ICogYXMgdmxVdGlsIGZyb20gJy4uL3V0aWwnO1xyXG5cclxuXHJcbmltcG9ydCB7YXhpc30gZnJvbSAnLi9heGlzLnNjaGVtYSc7XHJcbmltcG9ydCB7RmllbGREZWZ9IGZyb20gJy4vZmllbGRkZWYuc2NoZW1hJztcclxuaW1wb3J0IHtsZWdlbmR9IGZyb20gJy4vbGVnZW5kLnNjaGVtYSc7XHJcbmltcG9ydCB7c29ydH0gZnJvbSAnLi9zb3J0LnNjaGVtYSc7XHJcbmltcG9ydCB7dHlwaWNhbEZpZWxkLCBvbmx5T3JkaW5hbEZpZWxkfSBmcm9tICcuL2ZpZWxkZGVmLnNjaGVtYSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVuY29kaW5nIHtcclxuICB4PzogRmllbGREZWY7XHJcbiAgeT86IEZpZWxkRGVmO1xyXG4gIHJvdz86IEZpZWxkRGVmO1xyXG4gIGNvbHVtbj86IEZpZWxkRGVmO1xyXG4gIGNvbG9yPzogRmllbGREZWY7XHJcbiAgc2l6ZT86IEZpZWxkRGVmO1xyXG4gIHNoYXBlPzogRmllbGREZWY7XHJcbiAgZGV0YWlsPzogRmllbGREZWY7XHJcbiAgdGV4dD86IEZpZWxkRGVmO1xyXG59XHJcblxyXG4vLyBUT0RPOiByZW1vdmUgaWYgcG9zc2libGVcclxudmFyIHJlcXVpcmVkTmFtZVR5cGUgPSB7XHJcbiAgcmVxdWlyZWQ6IFsnZmllbGQnLCAndHlwZSddXHJcbn07XHJcblxyXG52YXIgeCA9IG1lcmdlKGR1cGxpY2F0ZSh0eXBpY2FsRmllbGQpLCByZXF1aXJlZE5hbWVUeXBlLCB7XHJcbiAgc3VwcG9ydGVkTWFya3R5cGVzOiB7cG9pbnQ6IHRydWUsIHRpY2s6IHRydWUsIGJhcjogdHJ1ZSwgbGluZTogdHJ1ZSwgYXJlYTogdHJ1ZSwgY2lyY2xlOiB0cnVlLCBzcXVhcmU6IHRydWV9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGF4aXM6IGF4aXMsXHJcbiAgICBzb3J0OiBzb3J0XHJcbiAgfVxyXG59KTtcclxudmFyIHkgPSBkdXBsaWNhdGUoeCk7XHJcblxyXG52YXIgZmFjZXQgPSBtZXJnZShkdXBsaWNhdGUob25seU9yZGluYWxGaWVsZCksIHJlcXVpcmVkTmFtZVR5cGUsIHtcclxuICBzdXBwb3J0ZWRNYXJrdHlwZXM6IHtwb2ludDogdHJ1ZSwgdGljazogdHJ1ZSwgYmFyOiB0cnVlLCBsaW5lOiB0cnVlLCBhcmVhOiB0cnVlLCBjaXJjbGU6IHRydWUsIHNxdWFyZTogdHJ1ZSwgdGV4dDogdHJ1ZX0sXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgYXhpczogYXhpcyxcclxuICAgIHNvcnQ6IHNvcnRcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHJvdyA9IG1lcmdlKGR1cGxpY2F0ZShmYWNldCksIHtcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvLyBGSVhNRSB1c2UgdGhpcyBvdmVyIGNvbmZpZ1xyXG4gICAgaGVpZ2h0OiB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBtaW5pbXVtOiAwLFxyXG4gICAgICBkZWZhdWx0OiAxNTBcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxudmFyIGNvbHVtbiA9IG1lcmdlKGR1cGxpY2F0ZShmYWNldCksIHtcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvLyBGSVhNRSB1c2UgdGhpcyBvdmVyIGNvbmZpZ1xyXG4gICAgd2lkdGg6IHtcclxuICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgIG1pbmltdW06IDAsXHJcbiAgICAgIGRlZmF1bHQ6IDE1MFxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG52YXIgc2l6ZSA9IG1lcmdlKGR1cGxpY2F0ZSh0eXBpY2FsRmllbGQpLCB7XHJcbiAgc3VwcG9ydGVkTWFya3R5cGVzOiB7cG9pbnQ6IHRydWUsIGJhcjogdHJ1ZSwgY2lyY2xlOiB0cnVlLCBzcXVhcmU6IHRydWUsIHRleHQ6IHRydWV9LFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGxlZ2VuZDogbGVnZW5kLFxyXG4gICAgc29ydDogc29ydCxcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgZGVmYXVsdDogMzAsXHJcbiAgICAgIG1pbmltdW06IDAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2l6ZSBvZiBtYXJrcy4nXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBjb2xvciA9IG1lcmdlKGR1cGxpY2F0ZSh0eXBpY2FsRmllbGQpLCB7XHJcbiAgc3VwcG9ydGVkTWFya3R5cGVzOiB7cG9pbnQ6IHRydWUsIHRpY2s6IHRydWUsIGJhcjogdHJ1ZSwgbGluZTogdHJ1ZSwgYXJlYTogdHJ1ZSwgY2lyY2xlOiB0cnVlLCBzcXVhcmU6IHRydWUsICd0ZXh0JzogdHJ1ZX0sXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbGVnZW5kOiBsZWdlbmQsXHJcbiAgICBzb3J0OiBzb3J0LFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIHJvbGU6ICdjb2xvcicsXHJcbiAgICAgIGRlZmF1bHQ6ICcjNDY4MmI0JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdDb2xvciB0byBiZSB1c2VkIGZvciBtYXJrcy4nXHJcbiAgICB9LFxyXG4gICAgb3BhY2l0eToge1xyXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLCAgLy8gYXV0b1xyXG4gICAgICBtaW5pbXVtOiAwLFxyXG4gICAgICBtYXhpbXVtOiAxXHJcbiAgICB9LFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgdHlwZTogWydzdHJpbmcnLCAnYXJyYXknXSxcclxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnQ29sb3IgcGFsZXR0ZSwgaWYgdW5kZWZpbmVkIHZlZ2EtbGl0ZSB3aWxsIHVzZSBkYXRhIHByb3BlcnR5JyArXHJcbiAgICAgICAgICAgICd0byBwaWNrIG9uZSBmcm9tIGMxMHBhbGV0dGUsIGMyMHBhbGV0dGUsIG9yIG9yZGluYWxQYWxldHRlLidcclxuICAgICAgICAgICAgLy9GSVhNRVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYzEwcGFsZXR0ZToge1xyXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICBkZWZhdWx0OiAnY2F0ZWdvcnkxMCcsXHJcbiAgICAgICAgICBlbnVtOiBbXHJcbiAgICAgICAgICAgIC8vIFRhYmxlYXVcclxuICAgICAgICAgICAgJ2NhdGVnb3J5MTAnLCAnY2F0ZWdvcnkxMGsnLFxyXG4gICAgICAgICAgICAvLyBDb2xvciBCcmV3ZXJcclxuICAgICAgICAgICAgJ1Bhc3RlbDEnLCAnUGFzdGVsMicsICdTZXQxJywgJ1NldDInLCAnU2V0MydcclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGMyMHBhbGV0dGU6IHtcclxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgZGVmYXVsdDogJ2NhdGVnb3J5MjAnLFxyXG4gICAgICAgICAgZW51bTogWydjYXRlZ29yeTIwJywgJ2NhdGVnb3J5MjBiJywgJ2NhdGVnb3J5MjBjJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9yZGluYWxQYWxldHRlOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29sb3IgcGFsZXR0ZSB0byBlbmNvZGUgb3JkaW5hbCB2YXJpYWJsZXMuJyxcclxuICAgICAgICAgIGVudW06IHZsVXRpbC5rZXlzKGNvbG9yYnJld2VyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcXVhbnRpdGF0aXZlUmFuZ2U6IHtcclxuICAgICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgICBkZWZhdWx0OiBbJyNBRkM2QTMnLCAnIzA5NjIyQSddLCAvLyB0YWJsZWF1IGdyZWVuc1xyXG4gICAgICAgICAgLy8gZGVmYXVsdDogWycjY2NlY2U2JywgJyMwMDQ0MWInXSwgLy8gQnVHbi45IFsyLThdXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbG9yIHJhbmdlIHRvIGVuY29kZSBxdWFudGl0YXRpdmUgdmFyaWFibGVzLicsXHJcbiAgICAgICAgICBtaW5JdGVtczogMixcclxuICAgICAgICAgIG1heEl0ZW1zOiAyLFxyXG4gICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIHJvbGU6ICdjb2xvcidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHNoYXBlID0gbWVyZ2UoZHVwbGljYXRlKG9ubHlPcmRpbmFsRmllbGQpLCB7XHJcbiAgc3VwcG9ydGVkTWFya3R5cGVzOiB7cG9pbnQ6IHRydWUsIGNpcmNsZTogdHJ1ZSwgc3F1YXJlOiB0cnVlfSxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsZWdlbmQ6IGxlZ2VuZCxcclxuICAgIHNvcnQ6IHNvcnQsXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZW51bTogWydjaXJjbGUnLCAnc3F1YXJlJywgJ2Nyb3NzJywgJ2RpYW1vbmQnLCAndHJpYW5nbGUtdXAnLCAndHJpYW5nbGUtZG93biddLFxyXG4gICAgICBkZWZhdWx0OiAnY2lyY2xlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNYXJrIHRvIGJlIHVzZWQuJ1xyXG4gICAgfSxcclxuICAgIGZpbGxlZDoge1xyXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1doZXRoZXIgdGhlIHNoYXBlXFwncyBjb2xvciBzaG91bGQgYmUgdXNlZCBhcyBmaWxsIGNvbG9yIGluc3RlYWQgb2Ygc3Ryb2tlIGNvbG9yLidcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxudmFyIGRldGFpbCA9IG1lcmdlKGR1cGxpY2F0ZShvbmx5T3JkaW5hbEZpZWxkKSwge1xyXG4gIHN1cHBvcnRlZE1hcmt0eXBlczoge3BvaW50OiB0cnVlLCB0aWNrOiB0cnVlLCBsaW5lOiB0cnVlLCBjaXJjbGU6IHRydWUsIHNxdWFyZTogdHJ1ZX0sXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgc29ydDogc29ydFxyXG4gIH1cclxufSk7XHJcblxyXG4vLyB3ZSBvbmx5IHB1dCBhZ2dyZWdhdGVkIG1lYXN1cmUgaW4gcGl2b3QgdGFibGVcclxudmFyIHRleHQgPSBtZXJnZShkdXBsaWNhdGUodHlwaWNhbEZpZWxkKSwge1xyXG4gIHN1cHBvcnRlZE1hcmt0eXBlczogeyd0ZXh0JzogdHJ1ZX0sXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgc29ydDogc29ydCxcclxuXHJcbiAgICAvLyBUT0RPOiBjb25zaWRlciBpZiB0aGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSB1bmRlciAnbWFya3MuJ1xyXG4gICAgYWxpZ246IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6ICdyaWdodCdcclxuICAgIH0sXHJcbiAgICBiYXNlbGluZToge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZGVmYXVsdDogJ21pZGRsZSdcclxuICAgIH0sXHJcbiAgICBjb2xvcjoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgcm9sZTogJ2NvbG9yJyxcclxuICAgICAgZGVmYXVsdDogJyMwMDAwMDAnXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgZGVmYXVsdDogNCxcclxuICAgICAgbWluaW11bTogMFxyXG4gICAgfSxcclxuICAgIHBsYWNlaG9sZGVyOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBkZWZhdWx0OiAnQWJjJ1xyXG4gICAgfSxcclxuICAgIGZvbnQ6IHtcclxuICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB3ZWlnaHQ6IHtcclxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgZW51bTogWydub3JtYWwnLCAnYm9sZCddLFxyXG4gICAgICAgICAgZGVmYXVsdDogJ25vcm1hbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgICAgIGRlZmF1bHQ6IDEwLFxyXG4gICAgICAgICAgbWluaW11bTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFtaWx5OiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGRlZmF1bHQ6ICdIZWx2ZXRpY2EgTmV1ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGRlZmF1bHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgZW51bTogWydub3JtYWwnLCAnaXRhbGljJ11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtYXQ6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGRlZmF1bHQ6ICcnLCAgLy8gYXV0b1xyXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSBmb3JtYXR0aW5nIHBhdHRlcm4gZm9yIHRleHQgdmFsdWUuJytcclxuICAgICAgICAgICAgICAgICAgICdJZiBub3QgZGVmaW5lZCwgdGhpcyB3aWxsIGJlIGRldGVybWluZWQgYXV0b21hdGljYWxseSdcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCB2YXIgZW5jb2RpbmcgPSB7XHJcbiAgdHlwZTogJ29iamVjdCcsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgeDogeCxcclxuICAgIHk6IHksXHJcbiAgICByb3c6IHJvdyxcclxuICAgIGNvbHVtbjogY29sdW1uLFxyXG4gICAgc2l6ZTogc2l6ZSxcclxuICAgIGNvbG9yOiBjb2xvcixcclxuICAgIHNoYXBlOiBzaGFwZSxcclxuICAgIHRleHQ6IHRleHQsXHJcbiAgICBkZXRhaWw6IGRldGFpbFxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtBeGlzfSBmcm9tICcuL2F4aXMuc2NoZW1hJztcclxuaW1wb3J0IHtiaW4sIEJpbn0gZnJvbSAnLi9iaW4uc2NoZW1hJztcclxuaW1wb3J0IHtMZWdlbmR9IGZyb20gJy4vbGVnZW5kLnNjaGVtYSc7XHJcbmltcG9ydCB7dHlwaWNhbFNjYWxlLCBvcmRpbmFsT25seVNjYWxlLCBTY2FsZX0gZnJvbSAnLi9zY2FsZS5zY2hlbWEnO1xyXG5pbXBvcnQge1NvcnR9IGZyb20gJy4vc29ydC5zY2hlbWEnO1xyXG5cclxuaW1wb3J0IHtBR0dSRUdBVEVfT1BTfSBmcm9tICcuLi9hZ2dyZWdhdGUnO1xyXG5pbXBvcnQge3RvTWFwLCBkdXBsaWNhdGV9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQge21lcmdlfSBmcm9tICcuL3NjaGVtYXV0aWwnO1xyXG5pbXBvcnQge1RJTUVVTklUU30gZnJvbSAnLi4vdGltZXVuaXQnO1xyXG5pbXBvcnQge05PTUlOQUwsIE9SRElOQUwsIFFVQU5USVRBVElWRSwgVEVNUE9SQUx9IGZyb20gJy4uL3R5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZERlZiB7XHJcbiAgZmllbGQ/OiBzdHJpbmc7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICB2YWx1ZT86IGFueTtcclxuXHJcbiAgLy8gZnVuY3Rpb25cclxuICBhZ2dyZWdhdGU/OiBzdHJpbmc7XHJcbiAgdGltZVVuaXQ/OiBzdHJpbmc7XHJcbiAgYmluPzogYm9vbGVhbiB8IEJpbjtcclxuXHJcbiAgc29ydD86IFNvcnQgfCBzdHJpbmc7XHJcblxyXG4gIC8vIG92ZXJyaWRlIHZlZ2EgY29tcG9uZW50c1xyXG4gIGF4aXM/OiBBeGlzO1xyXG4gIGxlZ2VuZD86IExlZ2VuZCB8IGJvb2xlYW47XHJcbiAgc2NhbGU/OiBTY2FsZTtcclxuXHJcbiAgLy8gdGV4dFxyXG4gIGFsaWduPzogc3RyaW5nO1xyXG4gIGJhc2VsaW5lPzogc3RyaW5nO1xyXG4gIGNvbG9yPzogc3RyaW5nO1xyXG4gIG1hcmdpbj86IG51bWJlcjtcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBmb250PzogYW55OyAvLyBkZWNsYXJlIGZvbnRcclxuICBmb3JtYXQ/OiBzdHJpbmc7XHJcblxyXG4gIC8vIFRPRE86IG1heWJlIGV4dGVuZCB0aGlzIGluIG90aGVyIGFwcD9cclxuICAvLyB1bnVzZWQgbWV0YWRhdGEgLS0gZm9yIG90aGVyIGFwcGxpY2F0aW9uXHJcbiAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZmllbGREZWYgPSB7XHJcbiAgdHlwZTogJ29iamVjdCcsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgZmllbGQ6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZydcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICBlbnVtOiBbTk9NSU5BTCwgT1JESU5BTCwgUVVBTlRJVEFUSVZFLCBURU1QT1JBTF1cclxuICAgIH0sXHJcbiAgICB0aW1lVW5pdDoge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZW51bTogVElNRVVOSVRTLFxyXG4gICAgICBzdXBwb3J0ZWRUeXBlczogdG9NYXAoW1RFTVBPUkFMXSlcclxuICAgIH0sXHJcbiAgICBiaW46IGJpbixcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGFnZ3JlZ2F0ZSA9IHtcclxuICB0eXBlOiAnc3RyaW5nJyxcclxuICBlbnVtOiBBR0dSRUdBVEVfT1BTLFxyXG4gIHN1cHBvcnRlZEVudW1zOiB7XHJcbiAgICBxdWFudGl0YXRpdmU6IEFHR1JFR0FURV9PUFMsXHJcbiAgICBvcmRpbmFsOiBbJ21lZGlhbicsJ21pbicsJ21heCddLFxyXG4gICAgbm9taW5hbDogW10sXHJcbiAgICB0ZW1wb3JhbDogWydtZWFuJywgJ21lZGlhbicsICdtaW4nLCAnbWF4J10sIC8vIFRPRE86IHJldmlzZSB3aGF0IHNob3VsZCB0aW1lIHN1cHBvcnRcclxuICAgICcnOiBbJ2NvdW50J11cclxuICB9LFxyXG4gIHN1cHBvcnRlZFR5cGVzOiB0b01hcChbUVVBTlRJVEFUSVZFLCBOT01JTkFMLCBPUkRJTkFMLCBURU1QT1JBTCwgJyddKVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB0eXBpY2FsRmllbGQgPSBtZXJnZShkdXBsaWNhdGUoZmllbGREZWYpLCB7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgYWdncmVnYXRlOiBhZ2dyZWdhdGUsXHJcbiAgICBzY2FsZTogdHlwaWNhbFNjYWxlXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCB2YXIgb25seU9yZGluYWxGaWVsZCA9IG1lcmdlKGR1cGxpY2F0ZShmaWVsZERlZiksIHtcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBhZ2dyZWdhdGU6IHtcclxuICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgIGVudW06IFsnY291bnQnXSxcclxuICAgICAgc3VwcG9ydGVkVHlwZXM6IHRvTWFwKFtOT01JTkFMLCBPUkRJTkFMXSlcclxuICAgIH0sXHJcbiAgICBzY2FsZTogb3JkaW5hbE9ubHlTY2FsZVxyXG4gIH1cclxufSk7XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgTGVnZW5kIHtcclxuICBvcmllbnQ/OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgZm9ybWF0Pzogc3RyaW5nO1xyXG4gIHZhbHVlcz86IEFycmF5PGFueT47XHJcbiAgcHJvcGVydGllcz86IGFueTsgLy9UT0RPIGRlY2xhcmUgVmdMZWdlbmRQcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgbGVnZW5kID0ge1xyXG4gIGRlZmF1bHQ6IHRydWUsXHJcbiAgZGVzY3JpcHRpb246ICdQcm9wZXJ0aWVzIG9mIGEgbGVnZW5kIG9yIGJvb2xlYW4gZmxhZyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0byBzaG93IGl0LicsXHJcbiAgb25lT2Y6IFt7XHJcbiAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgb3JpZW50OiB7XHJcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG9yaWVudGF0aW9uIG9mIHRoZSBsZWdlbmQuIE9uZSBvZiBcImxlZnRcIiBvciBcInJpZ2h0XCIuIFRoaXMgZGV0ZXJtaW5lcyBob3cgdGhlIGxlZ2VuZCBpcyBwb3NpdGlvbmVkIHdpdGhpbiB0aGUgc2NlbmUuIFRoZSBkZWZhdWx0IGlzIFwicmlnaHRcIi4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSB0aXRsZSBmb3IgdGhlIGxlZ2VuZC4gKFNob3dzIGZpZWxkIG5hbWUgYW5kIGl0cyBmdW5jdGlvbiBieSBkZWZhdWx0LiknXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIG9wdGlvbmFsIGZvcm1hdHRpbmcgcGF0dGVybiBmb3IgbGVnZW5kIGxhYmVscy4gVmVnYSB1c2VzIEQzXFwncyBmb3JtYXQgcGF0dGVybi4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbHVlczoge1xyXG4gICAgICAgIHR5cGU6ICdhcnJheScsXHJcbiAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRXhwbGljaXRseSBzZXQgdGhlIHZpc2libGUgbGVnZW5kIHZhbHVlcy4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPcHRpb25hbCBtYXJrIHByb3BlcnR5IGRlZmluaXRpb25zIGZvciBjdXN0b20gbGVnZW5kIHN0eWxpbmcuICdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIHR5cGU6ICdib29sZWFuJ1xyXG4gIH1dXHJcbn07XHJcbiIsImV4cG9ydCB2YXIgbWFya3R5cGUgPSB7XHJcbiAgdHlwZTogJ3N0cmluZycsXHJcbiAgZW51bTogWydwb2ludCcsICd0aWNrJywgJ2JhcicsICdsaW5lJywgJ2FyZWEnLCAnY2lyY2xlJywgJ3NxdWFyZScsICd0ZXh0J11cclxufTtcclxuIiwiaW1wb3J0IHt0b01hcCwgZHVwbGljYXRlIGFzIGNsb25lfSBmcm9tICcuLi91dGlsJztcclxuaW1wb3J0IHttZXJnZX0gZnJvbSAnLi9zY2hlbWF1dGlsJztcclxuaW1wb3J0IHtRVUFOVElUQVRJVkUsIFRFTVBPUkFMfSBmcm9tICcuLi90eXBlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NhbGUge1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgZG9tYWluPzogYW55OyAvLyBUT0RPOiBkZWNsYXJlIHZnRGF0YURvbWFpblxyXG4gIHJhbmdlPzogYW55OyAvLyBUT0RPOiBkZWNsYXJlIHZnUmFuZ2VEb21haW5cclxuICByb3VuZD86IGJvb2xlYW47XHJcblxyXG4gIC8vIG9yZGluYWxcclxuICBiYW5kV2lkdGg/OiBudW1iZXI7XHJcbiAgb3V0ZXJQYWRkaW5nPzogbnVtYmVyO1xyXG4gIHBhZGRpbmc/OiBudW1iZXI7XHJcbiAgcG9pbnRzPzogYm9vbGVhbjtcclxuXHJcbiAgLy8gdHlwaWNhbFxyXG4gIGNsYW1wPzogYm9vbGVhbjtcclxuICBuaWNlPzogYm9vbGVhbnxzdHJpbmc7XHJcbiAgZXhwb25lbnQ/OiBudW1iZXI7XHJcbiAgemVybz86IGJvb2xlYW47XHJcblxyXG4gIC8vIFZlZ2EtTGl0ZSBvbmx5XHJcbiAgdXNlUmF3RG9tYWluPzogYm9vbGVhbjtcclxufVxyXG5cclxudmFyIHNjYWxlID0ge1xyXG4gIHR5cGU6ICdvYmplY3QnLFxyXG4gIC8vIFRPRE86IHJlZmVyIHRvIFZlZ2EncyBzY2FsZSBzY2hlbWFcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvKiBDb21tb24gU2NhbGUgUHJvcGVydGllcyAqL1xyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgLy8gVE9ETyhrYW5pdHcpIHJlYWQgdmVnYSdzIHNjaGVtYSBoZXJlLCBhZGQgZGVzY3JpcHRpb25cclxuICAgICAgZW51bTogWydsaW5lYXInLCAnbG9nJywgJ3BvdycsICdzcXJ0JywgJ3F1YW50aWxlJ10sXHJcbiAgICAgIGRlZmF1bHQ6ICdsaW5lYXInLFxyXG4gICAgICBzdXBwb3J0ZWRUeXBlczogdG9NYXAoW1FVQU5USVRBVElWRV0pXHJcbiAgICB9LFxyXG4gICAgZG9tYWluOiB7XHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgdHlwZTogWydhcnJheScsICdvYmplY3QnXSxcclxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgZG9tYWluIG9mIHRoZSBzY2FsZSwgcmVwcmVzZW50aW5nIHRoZSBzZXQgb2YgZGF0YSB2YWx1ZXMuIEZvciBxdWFudGl0YXRpdmUgZGF0YSwgdGhpcyBjYW4gdGFrZSB0aGUgZm9ybSBvZiBhIHR3by1lbGVtZW50IGFycmF5IHdpdGggbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMuIEZvciBvcmRpbmFsL2NhdGVnb3JpY2FsIGRhdGEsIHRoaXMgbWF5IGJlIGFuIGFycmF5IG9mIHZhbGlkIGlucHV0IHZhbHVlcy4gVGhlIGRvbWFpbiBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgYnkgYSByZWZlcmVuY2UgdG8gYSBkYXRhIHNvdXJjZS4nXHJcbiAgICB9LFxyXG4gICAgcmFuZ2U6IHtcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICB0eXBlOiBbJ2FycmF5JywgJ29iamVjdCddLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSByYW5nZSBvZiB0aGUgc2NhbGUsIHJlcHJlc2VudGluZyB0aGUgc2V0IG9mIHZpc3VhbCB2YWx1ZXMuIEZvciBudW1lcmljIHZhbHVlcywgdGhlIHJhbmdlIGNhbiB0YWtlIHRoZSBmb3JtIG9mIGEgdHdvLWVsZW1lbnQgYXJyYXkgd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlcy4gRm9yIG9yZGluYWwgb3IgcXVhbnRpemVkIGRhdGEsIHRoZSByYW5nZSBtYXkgYnkgYW4gYXJyYXkgb2YgZGVzaXJlZCBvdXRwdXQgdmFsdWVzLCB3aGljaCBhcmUgbWFwcGVkIHRvIGVsZW1lbnRzIGluIHRoZSBzcGVjaWZpZWQgZG9tYWluLiBGb3Igb3JkaW5hbCBzY2FsZXMgb25seSwgdGhlIHJhbmdlIGNhbiBiZSBkZWZpbmVkIHVzaW5nIGEgRGF0YVJlZjogdGhlIHJhbmdlIHZhbHVlcyBhcmUgdGhlbiBkcmF3biBkeW5hbWljYWxseSBmcm9tIGEgYmFja2luZyBkYXRhIHNldC4nXHJcbiAgICB9LFxyXG4gICAgcm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLCAvLyBUT0RPOiByZXZpc2UgZGVmYXVsdFxyXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSWYgdHJ1ZSwgcm91bmRzIG51bWVyaWMgb3V0cHV0IHZhbHVlcyB0byBpbnRlZ2Vycy4gVGhpcyBjYW4gYmUgaGVscGZ1bCBmb3Igc25hcHBpbmcgdG8gdGhlIHBpeGVsIGdyaWQuJ1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblxyXG52YXIgb3JkaW5hbFNjYWxlTWl4aW4gPSB7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgYmFuZFdpZHRoOiB7XHJcbiAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcclxuICAgICAgbWluaW11bTogMCxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkXHJcbiAgICB9LFxyXG4gICAgLyogT3JkaW5hbCBTY2FsZSBQcm9wZXJ0aWVzICovXHJcbiAgICBvdXRlclBhZGRpbmc6IHtcclxuICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAgICAvLyBUT0RPOiBhZGQgZGVzY3JpcHRpb24gb25jZSBpdCBpcyBkb2N1bWVudGVkIGluIFZlZ2FcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwbGllcyBzcGFjaW5nIGFtb25nIG9yZGluYWwgZWxlbWVudHMgaW4gdGhlIHNjYWxlIHJhbmdlLiBUaGUgYWN0dWFsIGVmZmVjdCBkZXBlbmRzIG9uIGhvdyB0aGUgc2NhbGUgaXMgY29uZmlndXJlZC4gSWYgdGhlIF9fcG9pbnRzX18gcGFyYW1ldGVyIGlzIGB0cnVlYCwgdGhlIHBhZGRpbmcgdmFsdWUgaXMgaW50ZXJwcmV0ZWQgYXMgYSBtdWx0aXBsZSBvZiB0aGUgc3BhY2luZyBiZXR3ZWVuIHBvaW50cy4gQSByZWFzb25hYmxlIHZhbHVlIGlzIDEuMCwgc3VjaCB0aGF0IHRoZSBmaXJzdCBhbmQgbGFzdCBwb2ludCB3aWxsIGJlIG9mZnNldCBmcm9tIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlIGJ5IGhhbGYgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnRzLiBPdGhlcndpc2UsIHBhZGRpbmcgaXMgdHlwaWNhbGx5IGluIHRoZSByYW5nZSBbMCwgMV0gYW5kIGNvcnJlc3BvbmRzIHRvIHRoZSBmcmFjdGlvbiBvZiBzcGFjZSBpbiB0aGUgcmFuZ2UgaW50ZXJ2YWwgdG8gYWxsb2NhdGUgdG8gcGFkZGluZy4gQSB2YWx1ZSBvZiAwLjUgbWVhbnMgdGhhdCB0aGUgcmFuZ2UgYmFuZCB3aWR0aCB3aWxsIGJlIGVxdWFsIHRvIHRoZSBwYWRkaW5nIHdpZHRoLiBGb3IgbW9yZSwgc2VlIHRoZSBbRDMgb3JkaW5hbCBzY2FsZSBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vbWJvc3RvY2svZDMvd2lraS9PcmRpbmFsLVNjYWxlcykuJ1xyXG4gICAgICAgIH0sXHJcbiAgICBwb2ludHM6IHtcclxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSWYgdHJ1ZSwgZGlzdHJpYnV0ZXMgdGhlIG9yZGluYWwgdmFsdWVzIG92ZXIgYSBxdWFudGl0YXRpdmUgcmFuZ2UgYXQgdW5pZm9ybWx5IHNwYWNlZCBwb2ludHMuIFRoZSBzcGFjaW5nIG9mIHRoZSBwb2ludHMgY2FuIGJlIGFkanVzdGVkIHVzaW5nIHRoZSBwYWRkaW5nIHByb3BlcnR5LiBJZiBmYWxzZSwgdGhlIG9yZGluYWwgc2NhbGUgd2lsbCBjb25zdHJ1Y3QgZXZlbmx5LXNwYWNlZCBiYW5kcywgcmF0aGVyIHRoYW4gcG9pbnRzLidcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG52YXIgdHlwaWNhbFNjYWxlTWl4aW4gPSB7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLyogUXVhbnRpdGF0aXZlIGFuZCB0ZW1wb3JhbCBTY2FsZSBQcm9wZXJ0aWVzICovXHJcbiAgICBjbGFtcDoge1xyXG4gICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnSWYgdHJ1ZSwgdmFsdWVzIHRoYXQgZXhjZWVkIHRoZSBkYXRhIGRvbWFpbiBhcmUgY2xhbXBlZCB0byBlaXRoZXIgdGhlIG1pbmltdW0gb3IgbWF4aW11bSByYW5nZSB2YWx1ZSdcclxuICAgIH0sXHJcbiAgICBuaWNlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgb25lT2Y6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lmIHRydWUsIG1vZGlmaWVzIHRoZSBzY2FsZSBkb21haW4gdG8gdXNlIGEgbW9yZSBodW1hbi1mcmllbmRseSBudW1iZXIgcmFuZ2UgKGUuZy4sIDcgaW5zdGVhZCBvZiA2Ljk2KS4nXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGVudW06IFsnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3llYXInXSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSWYgc3BlY2lmaWVkLCBtb2RpZmllcyB0aGUgc2NhbGUgZG9tYWluIHRvIHVzZSBhIG1vcmUgaHVtYW4tZnJpZW5kbHkgdmFsdWUgcmFuZ2UuIEZvciB0aW1lIGFuZCB1dGMgc2NhbGUgdHlwZXMgb25seSwgdGhlIG5pY2UgdmFsdWUgc2hvdWxkIGJlIGEgc3RyaW5nIGluZGljYXRpbmcgdGhlIGRlc2lyZWQgdGltZSBpbnRlcnZhbDsgbGVnYWwgdmFsdWVzIGFyZSBcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIiwgXCJ3ZWVrXCIsIFwibW9udGhcIiwgb3IgXCJ5ZWFyXCIuJ1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgLy8gRklYTUUgdGhpcyBwYXJ0IG1pZ2h0IGJyZWFrIHBvbGVzdGFyXHJcbiAgICAgIHN1cHBvcnRlZFR5cGVzOiB0b01hcChbUVVBTlRJVEFUSVZFLCBURU1QT1JBTF0pLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgIH0sXHJcblxyXG4gICAgLyogUXVhbnRpdGF0aXZlIFNjYWxlIFByb3BlcnRpZXMgKi9cclxuICAgIGV4cG9uZW50OiB7XHJcbiAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2V0cyB0aGUgZXhwb25lbnQgb2YgdGhlIHNjYWxlIHRyYW5zZm9ybWF0aW9uLiBGb3IgcG93IHNjYWxlIHR5cGVzIG9ubHksIG90aGVyd2lzZSBpZ25vcmVkLidcclxuICAgIH0sXHJcbiAgICB6ZXJvOiB7XHJcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdJZiB0cnVlLCBlbnN1cmVzIHRoYXQgYSB6ZXJvIGJhc2VsaW5lIHZhbHVlIGlzIGluY2x1ZGVkIGluIHRoZSBzY2FsZSBkb21haW4uIFRoaXMgb3B0aW9uIGlzIGlnbm9yZWQgZm9yIG5vbi1xdWFudGl0YXRpdmUgc2NhbGVzLicsXHJcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcclxuICAgICAgc3VwcG9ydGVkVHlwZXM6IHRvTWFwKFtRVUFOVElUQVRJVkUsIFRFTVBPUkFMXSlcclxuICAgIH0sXHJcblxyXG4gICAgLyogVmVnYS1saXRlIG9ubHkgUHJvcGVydGllcyAqL1xyXG4gICAgdXNlUmF3RG9tYWluOiB7XHJcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZXMgdGhlIHNvdXJjZSBkYXRhIHJhbmdlIGFzIHNjYWxlIGRvbWFpbiBpbnN0ZWFkIG9mICcgK1xyXG4gICAgICAgICAgICAgICAgICAgJ2FnZ3JlZ2F0ZWQgZGF0YSBmb3IgYWdncmVnYXRlIGF4aXMuICcgK1xyXG4gICAgICAgICAgICAgICAgICAgJ1RoaXMgb3B0aW9uIGRvZXMgbm90IHdvcmsgd2l0aCBzdW0gb3IgY291bnQgYWdncmVnYXRlJyArXHJcbiAgICAgICAgICAgICAgICAgICAnYXMgdGhleSBtaWdodCBoYXZlIGEgc3Vic3RhbnRpYWxseSBsYXJnZXIgc2NhbGUgcmFuZ2UuJyArXHJcbiAgICAgICAgICAgICAgICAgICAnQnkgZGVmYXVsdCwgdXNlIHZhbHVlIGZyb20gY29uZmlnLnVzZVJhd0RvbWFpbi4nXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBvcmRpbmFsT25seVNjYWxlID0gbWVyZ2UoY2xvbmUoc2NhbGUpLCBvcmRpbmFsU2NhbGVNaXhpbik7XHJcbmV4cG9ydCB2YXIgdHlwaWNhbFNjYWxlID0gbWVyZ2UoY2xvbmUoc2NhbGUpLCBvcmRpbmFsU2NhbGVNaXhpbiwgdHlwaWNhbFNjYWxlTWl4aW4pO1xyXG4iLCIvLyBQYWNrYWdlIG9mIGRlZmluaW5nIFZlZ2EtbGl0ZSBTcGVjaWZpY2F0aW9uJ3MganNvbiBzY2hlbWFcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL3ZlZ2EuZC50c1wiLz5cclxuXHJcbmltcG9ydCAqIGFzIHNjaGVtYVV0aWwgZnJvbSAnLi9zY2hlbWF1dGlsJztcclxuaW1wb3J0IHttYXJrdHlwZX0gZnJvbSAnLi9tYXJrdHlwZS5zY2hlbWEnO1xyXG5pbXBvcnQge2NvbmZpZ30gZnJvbSAnLi9jb25maWcuc2NoZW1hJztcclxuaW1wb3J0IHtkYXRhLCBEYXRhfSBmcm9tICcuL2RhdGEuc2NoZW1hJztcclxuaW1wb3J0IHtlbmNvZGluZywgRW5jb2Rpbmd9IGZyb20gJy4vZW5jb2Rpbmcuc2NoZW1hJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3BlYyB7XHJcbiAgZGF0YT86IERhdGE7XHJcbiAgbWFya3R5cGU/OiBzdHJpbmc7XHJcbiAgZW5jb2Rpbmc/OiBFbmNvZGluZztcclxuICBjb25maWc/OiBhbnk7IC8vIEZJWE1FOiBkZWNsYXJlXHJcbn1cclxuXHJcbi8vIFRPRE8gcmVtb3ZlIHRoaXNcclxuZXhwb3J0IHthZ2dyZWdhdGV9IGZyb20gJy4vZmllbGRkZWYuc2NoZW1hJztcclxuXHJcbmV4cG9ydCB2YXIgdXRpbCA9IHNjaGVtYVV0aWw7XHJcblxyXG4vKiogQHR5cGUgT2JqZWN0IFNjaGVtYSBvZiBhIHZlZ2EtbGl0ZSBzcGVjaWZpY2F0aW9uICovXHJcbmV4cG9ydCB2YXIgc2NoZW1hID0ge1xyXG4gICRzY2hlbWE6ICdodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA0L3NjaGVtYSMnLFxyXG4gIGRlc2NyaXB0aW9uOiAnU2NoZW1hIGZvciBWZWdhLWxpdGUgc3BlY2lmaWNhdGlvbicsXHJcbiAgdHlwZTogJ29iamVjdCcsXHJcbiAgcmVxdWlyZWQ6IFsnbWFya3R5cGUnLCAnZW5jb2RpbmcnXSxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgbWFya3R5cGU6IG1hcmt0eXBlLFxyXG4gICAgZW5jb2Rpbmc6IGVuY29kaW5nLFxyXG4gICAgY29uZmlnOiBjb25maWdcclxuICB9XHJcbn07XHJcblxyXG4vKiogSW5zdGFudGlhdGUgYSB2ZXJib3NlIHZsIHNwZWMgZnJvbSB0aGUgc2NoZW1hICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZSgpIHtcclxuICByZXR1cm4gc2NoZW1hVXRpbC5pbnN0YW50aWF0ZShzY2hlbWEpO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3V0aWwnO1xyXG5cclxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKGluc3RhbmNlLCBzY2hlbWEpIHtcclxuICByZXR1cm4gbWVyZ2UoaW5zdGFudGlhdGUoc2NoZW1hKSwgaW5zdGFuY2UpO1xyXG59O1xyXG5cclxuLy8gaW5zdGFudGlhdGUgYSBzY2hlbWFcclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlKHNjaGVtYSkge1xyXG4gIHZhciB2YWw7XHJcbiAgaWYgKHNjaGVtYSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH0gZWxzZSBpZiAoJ2RlZmF1bHQnIGluIHNjaGVtYSkge1xyXG4gICAgdmFsID0gc2NoZW1hLmRlZmF1bHQ7XHJcbiAgICByZXR1cm4gdXRpbC5pc09iamVjdCh2YWwpID8gdXRpbC5kdXBsaWNhdGUodmFsKSA6IHZhbDtcclxuICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgdmFyIGluc3RhbmNlID0ge307XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHZhbCA9IGluc3RhbnRpYXRlKHNjaGVtYS5wcm9wZXJ0aWVzW25hbWVdKTtcclxuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaW5zdGFuY2VbbmFtZV0gPSB2YWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxuICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuLy8gcmVtb3ZlIGFsbCBkZWZhdWx0cyBmcm9tIGFuIGluc3RhbmNlXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChpbnN0YW5jZSwgZGVmYXVsdHMpIHtcclxuICB2YXIgY2hhbmdlczphbnkgPSB7fTtcclxuICBmb3IgKHZhciBwcm9wIGluIGluc3RhbmNlKSB7XHJcbiAgICB2YXIgZGVmID0gZGVmYXVsdHNbcHJvcF07XHJcbiAgICB2YXIgaW5zID0gaW5zdGFuY2VbcHJvcF07XHJcbiAgICAvLyBOb3RlOiBkb2VzIG5vdCBwcm9wZXJseSBzdWJ0cmFjdCBhcnJheXNcclxuICAgIGlmICghZGVmYXVsdHMgfHwgZGVmICE9PSBpbnMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBpbnMgPT09ICdvYmplY3QnICYmICF1dGlsLmlzQXJyYXkoaW5zKSAmJiBkZWYpIHtcclxuICAgICAgICB2YXIgYyA9IHN1YnRyYWN0KGlucywgZGVmKTtcclxuICAgICAgICBpZiAoIWlzRW1wdHkoYykpIHtcclxuICAgICAgICAgIGNoYW5nZXNbcHJvcF0gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh1dGlsLmlzQXJyYXkoaW5zKSkge1xyXG4gICAgICAgIGlmICh1dGlsLmlzQXJyYXkoZGVmKSkge1xyXG4gICAgICAgICAgLy8gY2hlY2sgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxyXG4gICAgICAgICAgaWYgKGlucy5sZW5ndGggPT09IGRlZi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGVxdWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGluc1tpXSAhPT0gZGVmW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBlcXVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlcXVhbCkge1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBjb250aW51ZSB3aXRoIG5leHQgcHJvcGVydHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VzW3Byb3BdID0gaW5zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoYW5nZXNbcHJvcF0gPSBpbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNoYW5nZXM7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZGVzdCwgLi4uc3JjOiBhbnlbXSl7XHJcbiAgZm9yICh2YXIgaT0wIDsgaTxzcmMubGVuZ3RoOyBpKyspIHtcclxuICAgIGRlc3QgPSBtZXJnZV8oZGVzdCwgc3JjW2ldKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlc3Q7XHJcbn07XHJcblxyXG4vLyByZWN1cnNpdmVseSBtZXJnZXMgc3JjIGludG8gZGVzdFxyXG5mdW5jdGlvbiBtZXJnZV8oZGVzdCwgc3JjKSB7XHJcbiAgaWYgKHR5cGVvZiBzcmMgIT09ICdvYmplY3QnIHx8IHNyYyA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGRlc3Q7XHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBwIGluIHNyYykge1xyXG4gICAgaWYgKCFzcmMuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc3JjW3BdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNyY1twXSAhPT0gJ29iamVjdCcgfHwgc3JjW3BdID09PSBudWxsKSB7XHJcbiAgICAgIGRlc3RbcF0gPSBzcmNbcF07XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0W3BdICE9PSAnb2JqZWN0JyB8fCBkZXN0W3BdID09PSBudWxsKSB7XHJcbiAgICAgIGRlc3RbcF0gPSBtZXJnZShzcmNbcF0uY29uc3RydWN0b3IgPT09IEFycmF5ID8gW10gOiB7fSwgc3JjW3BdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lcmdlKGRlc3RbcF0sIHNyY1twXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkZXN0O1xyXG59XHJcbiIsImltcG9ydCB7QUdHUkVHQVRFX09QU30gZnJvbSAnLi4vYWdncmVnYXRlJztcclxuaW1wb3J0IHtPUkRJTkFMLCBRVUFOVElUQVRJVkV9IGZyb20gJy4uL3R5cGUnO1xyXG5pbXBvcnQge3RvTWFwfSBmcm9tICcuLi91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XHJcbiAgZmllbGQ6IHN0cmluZztcclxuICBvcDogc3RyaW5nO1xyXG4gIG9yZGVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIHNvcnQgPSB7XHJcbiAgZGVmYXVsdDogJ2FzY2VuZGluZycsXHJcbiAgc3VwcG9ydGVkVHlwZXM6IHRvTWFwKFtRVUFOVElUQVRJVkUsIE9SRElOQUxdKSxcclxuICBvbmVPZjogW1xyXG4gICAge1xyXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgZW51bTogWydhc2NlbmRpbmcnLCAnZGVzY2VuZGluZycsICd1bnNvcnRlZCddXHJcbiAgICB9LFxyXG4gICAgeyAvLyBzb3J0IGJ5IGFnZ3JlZ2F0aW9uIG9mIGFub3RoZXIgZmllbGRcclxuICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgIHJlcXVpcmVkOiBbJ2ZpZWxkJywgJ29wJ10sXHJcbiAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaWVsZCBuYW1lIHRvIGFnZ3JlZ2F0ZSBvdmVyLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGVudW06IEFHR1JFR0FURV9PUFMsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBmaWVsZCBuYW1lIHRvIGFnZ3JlZ2F0ZSBvdmVyLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9yZGVyOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgIGVudW06IFsnYXNjZW5kaW5nJywgJ2Rlc2NlbmRpbmcnXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuIiwiLyoqIG1vZHVsZSBmb3Igc2hvcnRoYW5kICovXHJcblxyXG5pbXBvcnQge0VuY29kaW5nfSBmcm9tICcuL3NjaGVtYS9lbmNvZGluZy5zY2hlbWEnO1xyXG5pbXBvcnQge0ZpZWxkRGVmfSBmcm9tICcuL3NjaGVtYS9maWVsZGRlZi5zY2hlbWEnO1xyXG5pbXBvcnQge1NwZWN9IGZyb20gJy4vc2NoZW1hL3NjaGVtYSc7XHJcblxyXG5pbXBvcnQge0FHR1JFR0FURV9PUFN9IGZyb20gJy4vYWdncmVnYXRlJztcclxuaW1wb3J0IHtUSU1FVU5JVFN9IGZyb20gJy4vdGltZXVuaXQnO1xyXG5pbXBvcnQge1NIT1JUX1RZUEUsIFRZUEVfRlJPTV9TSE9SVF9UWVBFfSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCAqIGFzIHZsRW5jb2RpbmcgZnJvbSAnLi9lbmNvZGluZyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMSU0gPSAnfCc7XHJcbmV4cG9ydCBjb25zdCBBU1NJR04gPSAnPSc7XHJcbmV4cG9ydCBjb25zdCBUWVBFID0gJywnO1xyXG5leHBvcnQgY29uc3QgRlVOQyA9ICdfJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbihzcGVjOiBTcGVjKTogc3RyaW5nIHtcclxuICByZXR1cm4gJ21hcmsnICsgQVNTSUdOICsgc3BlYy5tYXJrdHlwZSArXHJcbiAgICBERUxJTSArIHNob3J0ZW5FbmNvZGluZyhzcGVjLmVuY29kaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHNob3J0aGFuZDogc3RyaW5nLCBkYXRhPywgY29uZmlnPykge1xyXG4gIGxldCBzcGxpdCA9IHNob3J0aGFuZC5zcGxpdChERUxJTSksXHJcbiAgICBtYXJrdHlwZSA9IHNwbGl0LnNoaWZ0KCkuc3BsaXQoQVNTSUdOKVsxXS50cmltKCksXHJcbiAgICBlbmNvZGluZyA9IHBhcnNlRW5jb2Rpbmcoc3BsaXQuam9pbihERUxJTSkpO1xyXG5cclxuICBsZXQgc3BlYzpTcGVjID0ge1xyXG4gICAgbWFya3R5cGU6IG1hcmt0eXBlLFxyXG4gICAgZW5jb2Rpbmc6IGVuY29kaW5nXHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgc3BlYy5kYXRhID0gZGF0YTtcclxuICB9XHJcbiAgaWYgKGNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBzcGVjLmNvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcbiAgcmV0dXJuIHNwZWM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG9ydGVuRW5jb2RpbmcoZW5jb2Rpbmc6IEVuY29kaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gdmxFbmNvZGluZy5tYXAoZW5jb2RpbmcsIGZ1bmN0aW9uKGZpZWxkRGVmLCBjaGFubmVsKSB7XHJcbiAgICByZXR1cm4gY2hhbm5lbCArIEFTU0lHTiArIHNob3J0ZW5GaWVsZERlZihmaWVsZERlZik7XHJcbiAgfSkuam9pbihERUxJTSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUVuY29kaW5nKGVuY29kaW5nU2hvcnRoYW5kOiBzdHJpbmcpOiBFbmNvZGluZyB7XHJcbiAgcmV0dXJuIGVuY29kaW5nU2hvcnRoYW5kLnNwbGl0KERFTElNKS5yZWR1Y2UoZnVuY3Rpb24obSwgZSkge1xyXG4gICAgdmFyIHNwbGl0ID0gZS5zcGxpdChBU1NJR04pLFxyXG4gICAgICAgIGVuY3R5cGUgPSBzcGxpdFswXS50cmltKCksXHJcbiAgICAgICAgZmllbGREZWZTaG9ydGhhbmQgPSBzcGxpdFsxXTtcclxuXHJcbiAgICBtW2VuY3R5cGVdID0gcGFyc2VGaWVsZERlZihmaWVsZERlZlNob3J0aGFuZCk7XHJcbiAgICByZXR1cm4gbTtcclxuICB9LCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG9ydGVuRmllbGREZWYoZmllbGREZWY6IEZpZWxkRGVmKTogc3RyaW5nIHtcclxuICByZXR1cm4gKGZpZWxkRGVmLmFnZ3JlZ2F0ZSA/IGZpZWxkRGVmLmFnZ3JlZ2F0ZSArIEZVTkMgOiAnJykgK1xyXG4gICAgKGZpZWxkRGVmLnRpbWVVbml0ID8gZmllbGREZWYudGltZVVuaXQgKyBGVU5DIDogJycpICtcclxuICAgIChmaWVsZERlZi5iaW4gPyAnYmluJyArIEZVTkMgOiAnJykgK1xyXG4gICAgKGZpZWxkRGVmLmZpZWxkIHx8ICcnKSArIFRZUEUgKyBTSE9SVF9UWVBFW2ZpZWxkRGVmLnR5cGVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvcnRlbkZpZWxkRGVmcyhmaWVsZERlZnM6IEZpZWxkRGVmW10sIGRlbGltID0gREVMSU0pOiBzdHJpbmcge1xyXG4gIHJldHVybiBmaWVsZERlZnMubWFwKHNob3J0ZW5GaWVsZERlZikuam9pbihkZWxpbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZpZWxkRGVmKGZpZWxkRGVmU2hvcnRoYW5kOiBzdHJpbmcpOiBGaWVsZERlZiB7XHJcbiAgdmFyIHNwbGl0ID0gZmllbGREZWZTaG9ydGhhbmQuc3BsaXQoVFlQRSksIGk7XHJcblxyXG4gIHZhciBmaWVsZERlZjogRmllbGREZWYgPSB7XHJcbiAgICBmaWVsZDogc3BsaXRbMF0udHJpbSgpLFxyXG4gICAgdHlwZTogVFlQRV9GUk9NX1NIT1JUX1RZUEVbc3BsaXRbMV0udHJpbSgpXVxyXG4gIH07XHJcblxyXG4gIC8vIGNoZWNrIGFnZ3JlZ2F0ZSB0eXBlXHJcbiAgZm9yIChpIGluIEFHR1JFR0FURV9PUFMpIHtcclxuICAgIHZhciBhID0gQUdHUkVHQVRFX09QU1tpXTtcclxuICAgIGlmIChmaWVsZERlZi5maWVsZC5pbmRleE9mKGEgKyAnXycpID09PSAwKSB7XHJcbiAgICAgIGZpZWxkRGVmLmZpZWxkID0gZmllbGREZWYuZmllbGQuc3Vic3RyKGEubGVuZ3RoICsgMSk7XHJcbiAgICAgIGlmIChhID09PSAnY291bnQnICYmIGZpZWxkRGVmLmZpZWxkLmxlbmd0aCA9PT0gMCkgZmllbGREZWYuZmllbGQgPSAnKic7XHJcbiAgICAgIGZpZWxkRGVmLmFnZ3JlZ2F0ZSA9IGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChpIGluIFRJTUVVTklUUykge1xyXG4gICAgdmFyIHR1ID0gVElNRVVOSVRTW2ldO1xyXG4gICAgaWYgKGZpZWxkRGVmLmZpZWxkICYmIGZpZWxkRGVmLmZpZWxkLmluZGV4T2YodHUgKyAnXycpID09PSAwKSB7XHJcbiAgICAgIGZpZWxkRGVmLmZpZWxkID0gZmllbGREZWYuZmllbGQuc3Vic3RyKGZpZWxkRGVmLmZpZWxkLmxlbmd0aCArIDEpO1xyXG4gICAgICBmaWVsZERlZi50aW1lVW5pdCA9IHR1O1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIGJpblxyXG4gIGlmIChmaWVsZERlZi5maWVsZCAmJiBmaWVsZERlZi5maWVsZC5pbmRleE9mKCdiaW5fJykgPT09IDApIHtcclxuICAgIGZpZWxkRGVmLmZpZWxkID0gZmllbGREZWYuZmllbGQuc3Vic3RyKDQpO1xyXG4gICAgZmllbGREZWYuYmluID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaWVsZERlZjtcclxufVxyXG4iLCIvKiBVdGlsaXRpZXMgZm9yIGEgVmVnYS1MaXRlIHNwZWNpZmljaWF0aW9uICovXHJcblxyXG5pbXBvcnQgKiBhcyB2bEVuY29kaW5nIGZyb20gJy4vZW5jb2RpbmcnO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7TW9kZWx9IGZyb20gJy4vY29tcGlsZXIvTW9kZWwnO1xyXG5pbXBvcnQge1NwZWN9IGZyb20gJy4vc2NoZW1hL3NjaGVtYSc7XHJcbmltcG9ydCB7Q09MT1IsIERFVEFJTH0gZnJvbSAnLi9jaGFubmVsJztcclxuaW1wb3J0IHtCQVIsIEFSRUF9IGZyb20gJy4vbWFya3R5cGUnO1xyXG5cclxuLy8gVE9ETzogYWRkIHZsLnNwZWMudmFsaWRhdGUgJiBtb3ZlIHN0dWZmIGZyb20gdmwudmFsaWRhdGUgdG8gaGVyZVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsd2F5c05vT2NjbHVzaW9uKHNwZWM6IFNwZWMpOiBib29sZWFuIHtcclxuICAvLyBGSVhNRSByYXcgT3hRIHdpdGggIyBvZiByb3dzID0gIyBvZiBPXHJcbiAgcmV0dXJuIHZsRW5jb2RpbmcuaXNBZ2dyZWdhdGUoc3BlYy5lbmNvZGluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGVhblNwZWMoc3BlYzogU3BlYyk6IFNwZWMge1xyXG4gIC8vIFRPRE86IG1vdmUgdG9TcGVjIHRvIGhlcmUhXHJcbiAgcmV0dXJuIG5ldyBNb2RlbChzcGVjKS50b1NwZWModHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0YWNrKHNwZWM6IFNwZWMpOiBib29sZWFuIHtcclxuICByZXR1cm4gKHNwZWMuZW5jb2RpbmdbQ09MT1JdLmZpZWxkIHx8IHNwZWMuZW5jb2RpbmdbREVUQUlMXS5maWVsZCkgJiZcclxuICAgIChzcGVjLm1hcmt0eXBlID09PSBCQVIgfHwgc3BlYy5tYXJrdHlwZSA9PT0gQVJFQSkgJiZcclxuICAgICghc3BlYy5jb25maWcgfHwgIXNwZWMuY29uZmlnLnN0YWNrICE9PSBmYWxzZSkgJiZcclxuICAgIHZsRW5jb2RpbmcuaXNBZ2dyZWdhdGUoc3BlYy5lbmNvZGluZyk7XHJcbn1cclxuXHJcbi8vIFRPRE8gcmV2aXNlXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uoc3BlYzogU3BlYyk6IFNwZWMge1xyXG4gIHZhciBvbGRlbmMgPSBzcGVjLmVuY29kaW5nLFxyXG4gICAgZW5jb2RpbmcgPSB1dGlsLmR1cGxpY2F0ZShzcGVjLmVuY29kaW5nKTtcclxuICBlbmNvZGluZy54ID0gb2xkZW5jLnk7XHJcbiAgZW5jb2RpbmcueSA9IG9sZGVuYy54O1xyXG4gIGVuY29kaW5nLnJvdyA9IG9sZGVuYy5jb2x1bW47XHJcbiAgZW5jb2RpbmcuY29sdW1uID0gb2xkZW5jLnJvdztcclxuICBzcGVjLmVuY29kaW5nID0gZW5jb2Rpbmc7XHJcbiAgcmV0dXJuIHNwZWM7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFRJTUVVTklUUyA9IFtcclxuICAneWVhcicsICdtb250aCcsICdkYXknLCAnZGF0ZScsICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXHJcbl07XHJcbiIsIi8qKiBDb25zdGFudHMgYW5kIHV0aWxpdGllcyBmb3IgZGF0YSB0eXBlICovXHJcblxyXG5leHBvcnQgY29uc3QgUVVBTlRJVEFUSVZFID0gJ3F1YW50aXRhdGl2ZSc7XHJcbmV4cG9ydCBjb25zdCBPUkRJTkFMID0gJ29yZGluYWwnO1xyXG5leHBvcnQgY29uc3QgVEVNUE9SQUwgPSAndGVtcG9yYWwnO1xyXG5leHBvcnQgY29uc3QgTk9NSU5BTCA9ICdub21pbmFsJztcclxuXHJcbi8qKlxyXG4gKiBNYXBwaW5nIGZyb20gZnVsbCB0eXBlIG5hbWVzIHRvIHNob3J0IHR5cGUgbmFtZXMuXHJcbiAqIEB0eXBlIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU0hPUlRfVFlQRSA9IHtcclxuICBxdWFudGl0YXRpdmU6ICdRJyxcclxuICB0ZW1wb3JhbDogJ1QnLFxyXG4gIG5vbWluYWw6ICdOJyxcclxuICBvcmRpbmFsOiAnTydcclxufTtcclxuLyoqXHJcbiAqIE1hcHBpbmcgZnJvbSBzaG9ydCB0eXBlIG5hbWVzIHRvIGZ1bGwgdHlwZSBuYW1lcy5cclxuICogQHR5cGUge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBUWVBFX0ZST01fU0hPUlRfVFlQRSA9IHtcclxuICBROiBRVUFOVElUQVRJVkUsXHJcbiAgVDogVEVNUE9SQUwsXHJcbiAgTzogT1JESU5BTCxcclxuICBOOiBOT01JTkFMXHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IGZ1bGwsIGxvd2VyY2FzZSB0eXBlIG5hbWUgZm9yIGEgZ2l2ZW4gdHlwZS5cclxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gRnVsbCB0eXBlIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbE5hbWUodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gVFlQRV9GUk9NX1NIT1JUX1RZUEVbdHlwZS50b1VwcGVyQ2FzZSgpXSB8fCAvLyBzaG9ydCB0eXBlIGlzIHVwcGVyY2FzZSBieSBkZWZhdWx0XHJcbiAgICAgICAgIHR5cGUudG9Mb3dlckNhc2UoKTtcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9kYXRhbGliLmQudHNcIi8+XHJcblxyXG5leHBvcnQgKiBmcm9tICdkYXRhbGliL3NyYy91dGlsJztcclxuZXhwb3J0ICogZnJvbSAnZGF0YWxpYi9zcmMvZ2VuZXJhdGUnO1xyXG5leHBvcnQgKiBmcm9tICdkYXRhbGliL3NyYy9zdGF0cyc7XHJcblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzM2MTJcclxuaW1wb3J0IGRsQmluID0gcmVxdWlyZSgnZGF0YWxpYi9zcmMvYmlucy9iaW5zJyk7XHJcbmV4cG9ydCB2YXIgYmluID0gZGxCaW47XHJcblxyXG4vKlxyXG4gKiBEZWFsIHdpdGggZmxvYXRpbmcgcG9pbnQgaW5zdGFiaWlsaXR5IGluIGphdmFzc2NyaXB0IHRvIGF2b2lkIHdlaXJkIC4wMDAwMDEgb3V0cHV0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm91bmRGbG9hdCh4OiBudW1iZXIsIGRpZ2l0Om51bWJlciA9IDQpIHtcclxuICByZXR1cm4gK3gudG9GaXhlZChkaWdpdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZiwgdGhpc0FyZykge1xyXG4gIGlmIChvYmouZm9yRWFjaCkge1xyXG4gICAgb2JqLmZvckVhY2guY2FsbCh0aGlzQXJnLCBmKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yICh2YXIgayBpbiBvYmopIHtcclxuICAgICAgZi5jYWxsKHRoaXNBcmcsIG9ialtrXSwgayAsIG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlKG9iaiwgZiwgaW5pdCwgdGhpc0FyZz8pIHtcclxuICBpZiAob2JqLnJlZHVjZSkge1xyXG4gICAgcmV0dXJuIG9iai5yZWR1Y2UuY2FsbCh0aGlzQXJnLCBmLCBpbml0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yICh2YXIgayBpbiBvYmopIHtcclxuICAgICAgaW5pdCA9IGYuY2FsbCh0aGlzQXJnLCBpbml0LCBvYmpba10sIGssIG9iaik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5pdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXAob2JqLCBmLCB0aGlzQXJnPykge1xyXG4gIGlmIChvYmoubWFwKSB7XHJcbiAgICByZXR1cm4gb2JqLm1hcC5jYWxsKHRoaXNBcmcsIGYpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgb3V0cHV0ID0gW107XHJcbiAgICBmb3IgKHZhciBrIGluIG9iaikge1xyXG4gICAgICBvdXRwdXQucHVzaCggZi5jYWxsKHRoaXNBcmcsIG9ialtrXSwgaywgb2JqKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFueShhcnI6IEFycmF5PGFueT4sIGY6IChkLCBrPywgaT8pID0+IGJvb2xlYW4pIHtcclxuICB2YXIgaSA9IDAsIGs7XHJcbiAgZm9yIChrIGluIGFycikge1xyXG4gICAgaWYgKGYoYXJyW2tdLCBrLCBpKyspKSByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxsKGFycjogQXJyYXk8YW55PiwgZjogKGQsIGs/LCBpPykgPT4gYm9vbGVhbikge1xyXG4gIHZhciBpID0gMCwgaztcclxuICBmb3IgKGsgaW4gYXJyKSB7XHJcbiAgICBpZiAoIWYoYXJyW2tdLCBrLCBpKyspKSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0YmlucyhzdGF0cywgbWF4Ymlucykge1xyXG4gIHJldHVybiBkbEJpbih7XHJcbiAgICBtaW46IHN0YXRzLm1pbixcclxuICAgIG1heDogc3RhdHMubWF4LFxyXG4gICAgbWF4YmluczogbWF4Ymluc1xyXG4gIH0pO1xyXG59XHJcblxyXG4vL0ZJWE1FIHJlbW92ZSB0aGlzXHJcbi8qKlxyXG4gKiB4W3BbMF1dLi4uW3Bbbl1dID0gdmFsXHJcbiAqIEBwYXJhbSBub2F1Z21lbnQgZGV0ZXJtaW5lIHdoZXRoZXIgbmV3IG9iamVjdCBzaG91bGQgYmUgYWRkZWQgZlxyXG4gKiBvciBub24tZXhpc3RpbmcgcHJvcGVydGllcyBhbG9uZyB0aGUgcGF0aFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcih4LCBwLCB2YWwsIG5vYXVnbWVudCA9IGZhbHNlKSB7XHJcbiAgZm9yICh2YXIgaT0wOyBpPHAubGVuZ3RoLTE7ICsraSkge1xyXG4gICAgaWYgKCFub2F1Z21lbnQgJiYgIShwW2ldIGluIHgpKXtcclxuICAgICAgeCA9IHhbcFtpXV0gPSB7fTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHggPSB4W3BbaV1dO1xyXG4gICAgfVxyXG4gIH1cclxuICB4W3BbaV1dID0gdmFsO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2U6IGFueSk6IHZvaWQge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ1tWTCBFcnJvcl0nLCBtZXNzYWdlKTtcclxufVxyXG4iLCJpbXBvcnQge1NwZWN9IGZyb20gJy4vc2NoZW1hL3NjaGVtYSc7XHJcblxyXG4vLyBUT0RPOiBtb3ZlIHRvIHZsLnNwZWMudmFsaWRhdG9yP1xyXG5cclxuaW1wb3J0IHt0b01hcH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHtzY2hlbWF9IGZyb20gJy4vc2NoZW1hL3NjaGVtYSc7XHJcblxyXG5pbnRlcmZhY2UgUmVxdWlyZWRDaGFubmVsTWFwIHtcclxuICBbbWFya3R5cGU6c3RyaW5nXTogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcXVpcmVkIEVuY29kaW5nIENoYW5uZWxzIGZvciBlYWNoIG1hcmsgdHlwZVxyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVRVUlSRURfQ0hBTk5FTF9NQVA6IFJlcXVpcmVkQ2hhbm5lbE1hcCA9IHtcclxuICB0ZXh0OiBbJ3RleHQnXSxcclxuICBsaW5lOiBbJ3gnLCAneSddLFxyXG4gIGFyZWE6IFsneCcsICd5J11cclxufTtcclxuXHJcbmludGVyZmFjZSBTdXBwb3J0ZWRDaGFubmVsTWFwIHtcclxuICBbbWFya3R5cGU6c3RyaW5nXToge1xyXG4gICAgW2NoYW5uZWw6c3RyaW5nXTogbnVtYmVyXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN1cHBvcnRlZCBFbmNvZGluZyBDaGFubmVsIGZvciBlYWNoIG1hcmsgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1VQUE9SVEVEX0NIQU5ORUxfVFlQRTogU3VwcG9ydGVkQ2hhbm5lbE1hcCA9IHtcclxuICBiYXI6IHRvTWFwKFsncm93JywgJ2NvbHVtbicsICd4JywgJ3knLCAnc2l6ZScsICdjb2xvcicsICdkZXRhaWwnXSksXHJcbiAgbGluZTogdG9NYXAoWydyb3cnLCAnY29sdW1uJywgJ3gnLCAneScsICdjb2xvcicsICdkZXRhaWwnXSksIC8vIFRPRE86IGFkZCBzaXplIHdoZW4gVmVnYSBzdXBwb3J0c1xyXG4gIGFyZWE6IHRvTWFwKFsncm93JywgJ2NvbHVtbicsICd4JywgJ3knLCAnY29sb3InLCAnZGV0YWlsJ10pLFxyXG4gIHRpY2s6IHRvTWFwKFsncm93JywgJ2NvbHVtbicsICd4JywgJ3knLCAnY29sb3InLCAnZGV0YWlsJ10pLFxyXG4gIGNpcmNsZTogdG9NYXAoWydyb3cnLCAnY29sdW1uJywgJ3gnLCAneScsICdjb2xvcicsICdzaXplJywgJ2RldGFpbCddKSxcclxuICBzcXVhcmU6IHRvTWFwKFsncm93JywgJ2NvbHVtbicsICd4JywgJ3knLCAnY29sb3InLCAnc2l6ZScsICdkZXRhaWwnXSksXHJcbiAgcG9pbnQ6IHRvTWFwKFsncm93JywgJ2NvbHVtbicsICd4JywgJ3knLCAnY29sb3InLCAnc2l6ZScsICdkZXRhaWwnLCAnc2hhcGUnXSksXHJcbiAgdGV4dDogdG9NYXAoWydyb3cnLCAnY29sdW1uJywgJ3NpemUnLCAnY29sb3InLCAndGV4dCddKSAvL1RPRE8oIzcyNCkgcmV2aXNlXHJcbn07XHJcblxyXG4vLyBUT0RPOiBjb25zaWRlciBpZiB3ZSBzaG91bGQgYWRkIHZhbGlkYXRlIG1ldGhvZCBhbmRcclxuLy8gcmVxdWlyZXMgWlNjaGVtYSBpbiB0aGUgbWFpbiB2ZWdhLWxpdGUgcmVwb1xyXG5cclxuLyoqXHJcbiAgKiBGdXJ0aGVyIGNoZWNrIGlmIGVuY29kaW5nIG1hcHBpbmcgb2YgYSBzcGVjIGlzIGludmFsaWQgYW5kXHJcbiAgKiByZXR1cm4gZXJyb3IgaWYgaXQgaXMgaW52YWxpZC5cclxuICAqXHJcbiAgKiBUaGlzIGNoZWNrcyBpZlxyXG4gICogKDEpIGFsbCB0aGUgcmVxdWlyZWQgZW5jb2RpbmcgY2hhbm5lbHMgZm9yIHRoZSBtYXJrIHR5cGUgYXJlIHNwZWNpZmllZFxyXG4gICogKDIpIGFsbCB0aGUgc3BlY2lmaWVkIGVuY29kaW5nIGNoYW5uZWxzIGFyZSBzdXBwb3J0ZWQgYnkgdGhlIG1hcmsgdHlwZVxyXG4gICogQHBhcmFtICB7W3R5cGVdfSBzcGVjIFtkZXNjcmlwdGlvbl1cclxuICAqIEBwYXJhbSAge1JlcXVpcmVkQ2hhbm5lbE1hcCAgPSBEZWZhdWx0UmVxdWlyZWRDaGFubmVsTWFwfSAgcmVxdWlyZWRDaGFubmVsTWFwXHJcbiAgKiBAcGFyYW0gIHtTdXBwb3J0ZWRDaGFubmVsTWFwID0gRGVmYXVsdFN1cHBvcnRlZENoYW5uZWxNYXB9IHN1cHBvcnRlZENoYW5uZWxNYXBcclxuICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJuIG9uZSByZWFzb24gd2h5IHRoZSBlbmNvZGluZyBpcyBpbnZhbGlkLFxyXG4gICogICAgICAgICAgICAgICAgICBvciBudWxsIGlmIHRoZSBlbmNvZGluZyBpcyB2YWxpZC5cclxuICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5jb2RpbmdNYXBwaW5nRXJyb3Ioc3BlYzogU3BlYyxcclxuICAgICAgcmVxdWlyZWRDaGFubmVsTWFwOiBSZXF1aXJlZENoYW5uZWxNYXAgPSBERUZBVUxUX1JFUVVJUkVEX0NIQU5ORUxfTUFQLFxyXG4gICAgICBzdXBwb3J0ZWRDaGFubmVsTWFwOiBTdXBwb3J0ZWRDaGFubmVsTWFwID0gREVGQVVMVF9TVVBQT1JURURfQ0hBTk5FTF9UWVBFXHJcbiAgICApIHtcclxuICBsZXQgbWFya3R5cGUgPSBzcGVjLm1hcmt0eXBlO1xyXG4gIGxldCBlbmNvZGluZyA9IHNwZWMuZW5jb2Rpbmc7XHJcbiAgbGV0IHJlcXVpcmVkQ2hhbm5lbHMgPSByZXF1aXJlZENoYW5uZWxNYXBbbWFya3R5cGVdO1xyXG4gIGxldCBzdXBwb3J0ZWRDaGFubmVscyA9IHN1cHBvcnRlZENoYW5uZWxNYXBbbWFya3R5cGVdO1xyXG5cclxuICBmb3IgKGxldCBpIGluIHJlcXVpcmVkQ2hhbm5lbHMpIHsgLy8gYWxsIHJlcXVpcmVkIGNoYW5uZWxzIGFyZSBpbiBlbmNvZGluZ2BcclxuICAgIGlmICghKHJlcXVpcmVkQ2hhbm5lbHNbaV0gaW4gZW5jb2RpbmcpKSB7XHJcbiAgICAgIHJldHVybiAnTWlzc2luZyBlbmNvZGluZyBjaGFubmVsIFxcXCInICsgcmVxdWlyZWRDaGFubmVsc1tpXSArXHJcbiAgICAgICAgICAgICAgJ1xcXCIgZm9yIG1hcmt0eXBlIFxcXCInICsgbWFya3R5cGUgKyAnXFxcIic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBjaGFubmVsIGluIGVuY29kaW5nKSB7IC8vIGFsbCBjaGFubmVscyBpbiBlbmNvZGluZyBhcmUgc3VwcG9ydGVkXHJcbiAgICBpZiAoIXN1cHBvcnRlZENoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgIHJldHVybiAnRW5jb2RpbmcgY2hhbm5lbCBcXFwiJyArIGNoYW5uZWwgK1xyXG4gICAgICAgICAgICAgJ1xcXCIgaXMgbm90IHN1cHBvcnRlZCBieSBtYXJrIHR5cGUgXFxcIicgKyBtYXJrdHlwZSArICdcXFwiJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtYXJrdHlwZSA9PT0gJ2JhcicgJiYgIWVuY29kaW5nLnggJiYgIWVuY29kaW5nLnkpIHtcclxuICAgIHJldHVybiAnTWlzc2luZyBib3RoIHggYW5kIHkgZm9yIGJhcic7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB2bEJpbiBmcm9tICcuL2Jpbic7XHJcbmltcG9ydCAqIGFzIHZsQ2hhbm5lbCBmcm9tICcuL2NoYW5uZWwnO1xyXG5pbXBvcnQgKiBhcyB2bERhdGEgZnJvbSAnLi9kYXRhJztcclxuaW1wb3J0ICogYXMgdmxFbmNvZGluZyBmcm9tICcuL2VuY29kaW5nJztcclxuaW1wb3J0ICogYXMgdmxGaWVsZERlZiBmcm9tICcuL2ZpZWxkZGVmJztcclxuaW1wb3J0ICogYXMgdmxDb21waWxlciBmcm9tICcuL2NvbXBpbGVyL2NvbXBpbGVyJztcclxuaW1wb3J0ICogYXMgdmxTY2hlbWEgZnJvbSAnLi9zY2hlbWEvc2NoZW1hJztcclxuaW1wb3J0ICogYXMgdmxTaG9ydGhhbmQgZnJvbSAnLi9zaG9ydGhhbmQnO1xyXG5pbXBvcnQgKiBhcyB2bFNwZWMgZnJvbSAnLi9zcGVjJztcclxuaW1wb3J0ICogYXMgdmxUaW1lVW5pdCBmcm9tICcuL3RpbWV1bml0JztcclxuaW1wb3J0ICogYXMgdmxUeXBlIGZyb20gJy4vdHlwZSc7XHJcbmltcG9ydCAqIGFzIHZsVmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XHJcblxyXG4vLyBUT0RPOiByZW1vdmUgdGhpc1xyXG5pbXBvcnQge2Zvcm1hdCBhcyBkM0Zvcm1hdH0gZnJvbSAnZDMtZm9ybWF0JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbCc7XHJcblxyXG5leHBvcnQgdmFyIGJpbiA9IHZsQmluO1xyXG5leHBvcnQgdmFyIGNoYW5uZWwgPSB2bENoYW5uZWw7XHJcbmV4cG9ydCB2YXIgY29tcGlsZXIgPSB2bENvbXBpbGVyO1xyXG5leHBvcnQgdmFyIGNvbXBpbGUgPSB2bENvbXBpbGVyLmNvbXBpbGU7XHJcbmV4cG9ydCB2YXIgZGF0YSA9IHZsRGF0YTtcclxuLy8gVE9ETygjNzI3KSByZW5hbWUgdG8gZW5jb2RpbmdcclxuZXhwb3J0IHZhciBlbmNvZGluZyA9IHZsRW5jb2Rpbmc7XHJcbmV4cG9ydCB2YXIgZmllbGREZWYgPSB2bEZpZWxkRGVmO1xyXG5leHBvcnQgdmFyIHNjaGVtYSA9IHZsU2NoZW1hO1xyXG5leHBvcnQgdmFyIHNob3J0aGFuZCA9IHZsU2hvcnRoYW5kO1xyXG5leHBvcnQgdmFyIHNwZWMgPSB2bFNwZWM7XHJcbmV4cG9ydCB2YXIgdGltZVVuaXQgPSB2bFRpbWVVbml0O1xyXG5leHBvcnQgdmFyIHR5cGUgPSB2bFR5cGU7XHJcbmV4cG9ydCB2YXIgZm9ybWF0ID0gZDNGb3JtYXQ7XHJcbmV4cG9ydCB2YXIgdmFsaWRhdGUgPSB2bFZhbGlkYXRlO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSAnX19WRVJTSU9OX18nO1xyXG4iXX0=
