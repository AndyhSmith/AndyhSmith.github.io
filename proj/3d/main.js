// Objects
var character = {
	"x" : 0,
	"y" : 0,
	"z" : 200,
	"xLook" : 0,
	"yLook" : 0,
	"zLook" : 0
}


// function setup() {
  // createCanvas(710, 400, WEBGL);
// }

// function draw() {
	
	 // if (keyIsDown(LEFT_ARROW)) {
	  // character.x -= 5;
	  // }
	// if (keyIsDown(RIGHT_ARROW)) {
	  // character.x += 5;
	// }
  // if (keyIsDown(UP_ARROW)) {
	  // character.y -= 5;
  // }
  // if (keyIsDown(DOWN_ARROW)) {
	  // character.y += 5;
  // }
  // background(250);
  // camera(character.x, character.y, character.z);
  
	// box(85);
  
  
	// console.log(character);

// }

//move slider to see changes!
//sliders control the first 6 parameters of camera()
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function setup() {
  createCanvas(300, 300, WEBGL);
}

function draw() {
	background(60);
	if (keyIsDown(LEFT_ARROW)) {
		character.x -= 5;
		character.xLook -= 5;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		character.x += 5;
		character.xLook += 5;
	}
	if (keyIsDown(UP_ARROW)) {
		character.z -= 5;
		character.zLook -= 5;
	}
	if (keyIsDown(DOWN_ARROW)) {
		character.z += 5;
		character.zLook += 5;
	}
	if (keyIsDown(SHIFT)) {
		character.y += 5;
		character.yLook += 5;
	}
	if (keyIsDown(32)) {
		character.y -= 5;
		character.yLook -= 5;
	}
	// assigning sliders' value to each parameters
	X = character.x;
	Y = character.y;
	Z = character.z;

	centerX = 0;
	centerY = 0;
	centerZ = 0;
	camera(character.x, character.y, character.z, character.xLook, character.yLook, character.zLook, 0, 1, 0);
	stroke(255);
	fill(255, 102, 94);
	box(85);
	
	translate(character.xLook, character.yLook, character.zLook)
	stroke(255);
	fill(102, 255, 94);
	box(5);
}