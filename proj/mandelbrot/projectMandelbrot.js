//User Values
var zoomAmount = 2;

//Declerations
var xPos = 0
var newCanvasHeight = 500;
var newCanvasWidth = 500;
var xUpperRange = newCanvasWidth / 100;
var xLowerRange = -newCanvasWidth / 100;
var yUpperRange = newCanvasHeight / 100;
var yLowerRange = -newCanvasHeight / 100;
var decrementValueX = 1
var decrementValueY = 1




//Colors
var activeButtonColor = "lightgreen";
var normalButtonColor = "rgb(200,200,200)";
var redColor = 50;
var greenColor = 50;
var blueColor = 50;

//User Toggles
var zoomInToggle = false;
var zoomOutToggle = false;
var panToggle = false;



let myCanvas;

/**
 * Sets Canvas Size
 */
function setup() {
	document.getElementById("zoomInID").style.backgroundColor = activeButtonColor;
	zoomInToggle = true;
	myCanvas = createCanvas(newCanvasWidth, newCanvasHeight);
	myCanvas.parent('myContainer');
	pixelDensity(1);
	loadPixels();
	draw();
}

function mandelbrotUpdate() {
	if (mouseX > 0 && mouseX < newCanvasWidth && mouseY > 0 && mouseY < newCanvasHeight) {
		xPos = map(mouseX, 0, width, xLowerRange, xUpperRange );
		yPos = map(mouseY, 0, height, yLowerRange, yUpperRange );
		
		zoomAmount = document.getElementById("zoomAmount").value;
		if (zoomInToggle == true) {
			decrementValueX = decrementValueX / zoomAmount;
			decrementValueY = decrementValueX * (newCanvasHeight/ newCanvasWidth);
		}
		if (zoomOutToggle == true) {
			decrementValueX = decrementValueX * zoomAmount;
			decrementValueY = decrementValueX * (newCanvasHeight/ newCanvasWidth);
		}
		
		xUpperRange = xPos + decrementValueX; //Don't Decrement if you want to pan around
		xLowerRange = xPos - decrementValueX;
		yUpperRange = yPos + decrementValueY;
		yLowerRange = yPos - decrementValueY;
		redraw();
	}
}

function zoomCenter() {
	xPos = map(newCanvasWidth/2, 0, width, xLowerRange, xUpperRange );
	yPos = map(newCanvasHeight/2, 0, height, yLowerRange, yUpperRange );
	zoomAmount = document.getElementById("zoomAmount").value;
	if (zoomInToggle == true) {
		decrementValueX = decrementValueX / zoomAmount;
		decrementValueY = decrementValueX * (newCanvasHeight/ newCanvasWidth);
	}
	if (zoomOutToggle == true) {
		decrementValueX = decrementValueX * zoomAmount;
		decrementValueY = decrementValueX * (newCanvasHeight/ newCanvasWidth);
	}
	
	xUpperRange = xPos + decrementValueX; //Don't Decrement if you want to pan around
	xLowerRange = xPos - decrementValueX;
	yUpperRange = yPos + decrementValueY;
	yLowerRange = yPos - decrementValueY;
	redraw();
}

function touchStarted() {
	mandelbrotUpdate();
}

function mousePressed() {
	mandelbrotUpdate();
}

function reset() {
	
	decrementValueX = 1
	decrementValueY = 1
	newCanvasHeight = document.getElementById("canvas-height").value;
	newCanvasWidth = document.getElementById("canvas-width").value;
	xUpperRange = newCanvasWidth / 100;
	xLowerRange = -newCanvasWidth / 100;
	yUpperRange = newCanvasHeight / 100;
	yLowerRange = -newCanvasHeight / 100;
	setup();
	redraw();
}

function refresh() {
	redraw();
}




function zoomIn() {
	panToggle = false;
	
	if (zoomInToggle == true) {
		zoomInToggle = false;
		zoomOutToggle = false;
		document.getElementById("zoomInID").style.backgroundColor = normalButtonColor;
	} else {
		
		zoomInToggle = true;
		zoomOutToggle = false;
		document.getElementById("zoomInID").style.backgroundColor = activeButtonColor;
		document.getElementById("zoomOutID").style.backgroundColor = normalButtonColor;
		document.getElementById("panID").style.backgroundColor = normalButtonColor;
	}
}

function zoomOut() {
	panToggle = false;
	if (zoomOutToggle == true) {
		document.getElementById("zoomOutID").style.backgroundColor = normalButtonColor;
		
		zoomOutToggle = false;
		zoomInToggle = false;
	} else {
		document.getElementById("zoomOutID").style.backgroundColor = activeButtonColor;
		document.getElementById("zoomInID").style.backgroundColor = normalButtonColor;
		document.getElementById("panID").style.backgroundColor = normalButtonColor;
		zoomOutToggle = true;
		zoomInToggle = false;
	}
}

function pan() {
	if (panToggle == true) {
		document.getElementById("panID").style.backgroundColor = normalButtonColor;
		panToggle = false;
	} else {
		document.getElementById("panID").style.backgroundColor = activeButtonColor;
		document.getElementById("zoomInID").style.backgroundColor = normalButtonColor;
		document.getElementById("zoomOutID").style.backgroundColor = normalButtonColor;
		zoomOutToggle = false;
		zoomInToggle = false;
		panToggle = true;
	}
}

function downloadPNG(i) {
	var documentName = document.getElementById("downloadName").value + i;
	saveCanvas(documentName, 'png');
}


function animateZoom() {
	var numberOfFrames = document.getElementById("animationFrames").value;
	for (i = 0; i < numberOfFrames; i++) {
		
		setTimeout((function(i) {	
			return function() {
				zoomCenter();
				downloadPNG(i);
				document.getElementById("animationProgress").value = (i + 1) + "/" + numberOfFrames;
			}
		})(i), i * 30000);
		
	}
	
}




function draw() {
	var maxIterations = 0;
	maxIterations = document.getElementById("numberOfIterations").value;
	for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
			
		
			var a = map(x, 0, width, xLowerRange, xUpperRange);
			var b = map(y, 0, height, yLowerRange, yUpperRange);
			var aSaved = a;
			var bSaved = b;
			var z = 0;
			var n = 0;
			while (n < maxIterations) {
				var aa = a * a - b * b;
				var bb = 2 * a * b;
				a = aa + aSaved;
				b = bb + bSaved;
				
				if (abs(a + b) > 10) {
					break;
				}
				n++;
			}
			
			redColor = n;
			greenColor = 1/cos(n);
			blueColor = n;
			var t = n / maxIterations;
			var r = (9*(1-t)*t*t*t*255);
		  	var g = (15*(1-t)*(1-t)*t*t*255);
		  	var b = (8.5*(1-t)*(1-t)*(1-t)*t*255);
			
			
			
			/*var bright = map(n, 0, maxIterations, 0, 1);
			bright = map(sqrt(bright), 0, 1, 0, 255); //sqrt(bright)*/
			

			if (n === maxIterations) {
				r = 0;
				g = 0;
				b = 0;
			}
			
			var pix = (x + y * width) * 4;
			pixels[pix + 0] = r;
			pixels[pix + 1] = g;
			pixels[pix + 2] = b;
			pixels[pix + 3] = 255
		}
		
		
	}
	updatePixels();
	noLoop();
	
}
