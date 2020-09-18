//Create Canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;


//Load Images
const playerRunningIMG = new Image();
playerRunningIMG.src = './img/running.png';

const playerStandingIMG = new Image();
playerStandingIMG.src = './img/standing.png';

const treeIMG = new Image();
treeIMG.src = './img/tree.png';

//Array of Decoration Objects
var decorations = []
