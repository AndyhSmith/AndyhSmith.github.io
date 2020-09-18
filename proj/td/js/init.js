showFileImports ? console.log("init.js Loaded") : null;

// Map Width, Map Height, Map Tile Size(px)
var gameMap = new GameMap(7, 14, 60); //7, 14, 60


// Canvas set up
var canvas = document.getElementById("game-canvas");
canvas.width = gameMap.getHeight() * gameMap.getTileSize();
canvas.height = gameMap.getWidth()* gameMap.getTileSize();

canvas.addEventListener("click", getClickPosition, false);



// Drawing
var gameCanvas = new Canvas(canvas);
gameCanvas.drawMap(gameMap);


function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;
    gameMap.gameInfo.selectTile(xPosition, yPosition);
    gameCanvas.drawMap(gameMap);
}

function showHidePath() {
    gameMap.showPath = ! gameMap.showPath;
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(0, 0);
    gameCanvas.drawMap(gameMap);
}


function randomizeMap() {
    gameMap.mapRandomizer.createObsticles();
    gameCanvas.drawMap(gameMap);
}

function showHideCheckedNodes() {
    gameMap.showCheckedNodes = ! gameMap.showCheckedNodes;
    gameMap.buildPath();
    gameMap.gameInfo.selectTile(0, 0);
    gameCanvas.drawMap(gameMap);
}

function buildTower() {
    gameMap.buildTower();
    gameMap.gameInfo.selectTile(null, null);
    gameCanvas.drawMap(gameMap);
}

function destroyObject() {
    gameMap.destroyObject();
    gameMap.gameInfo.selectTile(null, null);
    gameCanvas.drawMap(gameMap);
}