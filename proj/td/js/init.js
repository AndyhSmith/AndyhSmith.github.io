showFileImports ? console.log("init.js Loaded") : null;

// Map Width, Map Height, Map Tile Size(px)
var gameMap = new GameMap(7, 14, 60); //7, 14, 60


// Canvas set up
var canvas = document.getElementById("game-canvas");
canvas.width = gameMap.getHeight() * gameMap.getTileSize();
canvas.height = gameMap.getWidth()* gameMap.getTileSize();

// Andimation canvas update
var animationCanvas = document.getElementById("animation-canvas");
animationCanvas.width = gameMap.getHeight() * gameMap.getTileSize();
animationCanvas.height = gameMap.getWidth()* gameMap.getTileSize();


animationCanvas.addEventListener("click", getClickPosition, false);

function gameTick() {
    gameMap.updateGameTick();
    gameCanvas.drawAnimation(gameMap);
}

// Drawing
var gameCanvas = new Canvas(canvas, animationCanvas);
gameCanvas.drawMap(gameMap);
var myVar = setInterval(gameTick, 30);



function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    gameMap.gameInfo.selectTile(xPosition, yPosition);
    gameCanvas.drawMap(gameMap);
}

function showHidePath() {
    gameMap.showPath = ! gameMap.showPath;
    log("Show Checked Nodes: " + gameMap.showPath, Log.METHOD);
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(0, 0);
    gameCanvas.drawMap(gameMap);
}


function randomizeMap() {
    log("Randomize Map", Log.METHOD);
    gameMap.mapRandomizer.createObsticles();
    gameCanvas.drawMap(gameMap);
}

function showHideCheckedNodes() {
    
    gameMap.showCheckedNodes = ! gameMap.showCheckedNodes;
    log("Show Checked Nodes: " + gameMap.showCheckedNodes, Log.METHOD);
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(0, 0);
    gameCanvas.drawMap(gameMap);
}

function buildTower() {
    log("Build Tower", Log.METHOD);
    gameMap.buildTower();
    gameMap.gameInfo.selectTile(null, null);
    gameCanvas.drawMap(gameMap);
}

function destroyObject() {
    log("Destroy Object", Log.METHOD);
    gameMap.destroyObject();
    gameMap.gameInfo.selectTile(null, null);
    gameCanvas.drawMap(gameMap);
}

function startWave() {
    log("Start Wave", Log.METHOD);
    gameMap.startWave();
}

function clearWave() {
    log("Clear Wave", Log.METHOD);
    gameMap.enemyUnits = [];
}