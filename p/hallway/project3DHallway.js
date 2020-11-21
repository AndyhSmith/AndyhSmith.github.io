

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var canvasWidth = c.width;
var canvasHeight = c.height;
var map = [0,1,0,0,0,0,0,0,0,0,0]
myXPos = 1;
buildArray();
draw();
