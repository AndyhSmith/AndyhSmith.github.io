showFileImports ? console.log("Canvas.js Loaded") : null;

/**
 * This class in responsible for all the drawing and for managing the canvas.
 */
class Canvas {
    constructor(theCanvas) {
        this.ctx = theCanvas.getContext("2d");
        
        // Preset colors
        this.grassColor = "#BEEC26"; //"#7cb68e";
        this.stoneColor ="#585858";
        this.startColor = "#65D248";
        this.selectionColor = "red";
    }

    // Draw the map, pass in the canvas context.
    drawMap(gameMap) {
        // Draw the Map
        for (var i = 0; i < gameMap.getArray().length; i++) {
            for (var j = 0; j < gameMap.getArray()[i].length; j++) {
                let xPosition = i*gameMap.getTileSize();
                let yPosition = j*gameMap.getTileSize();
                // If Empty Square.
                if (gameMap.getArray()[i][j] == EMPTY) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), this.grassColor, "");
                } else if(gameMap.getArray()[i][j] == ROCKS) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), this.stoneColor, "Rock");
                } else if(gameMap.getArray()[i][j] === START) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), this.startColor, "Start");
                } else if(gameMap.getArray()[i][j] === FINISH) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "red", "Finish");
                } else if(gameMap.getArray()[i][j] === NO_BUILD) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "#A37148", "    X");
                }

                else if(gameMap.getArray()[i][j] === CHECK_1) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "#BCE2DF", "   1");
                }
                else if(gameMap.getArray()[i][j] === CHECK_2) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "#BCE2DF", "   2");
                }
                else if(gameMap.getArray()[i][j] === CHECK_3) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "#BCE2DF", "   3");
                }
                else if(gameMap.getArray()[i][j] === CHECK_4) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "#BCE2DF", "   4");
                }
                else if(gameMap.getArray()[i][j] === CHECK_5) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "#BCE2DF", "   5");
                }

                else if(gameMap.getArray()[i][j] === ENEMY_SPEED_BOOST) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), this.grassColor, "+Speed");
                }

                else if(gameMap.getArray()[i][j] === DAMAGE_BOOST) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), this.grassColor, "+Damage");
                }

                else if(gameMap.getArray()[i][j] === RANGE_BOOST) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), this.grassColor, "+Range");
                }

                else if(gameMap.getArray()[i][j] === TOWER_1) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "yellow", "Tower1");
                }

                else if(gameMap.getArray()[i][j] === PATH) {
                    this.drawColoredSquare(xPosition, yPosition, gameMap.getTileSize(), "blue", "Path");
                }
            }
        }  
        
        // Draw Selection
        if (gameMap.getSelectedTile() != null) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.selectionColor;
            this.ctx.lineWidth = 5;
            this.ctx.rect(gameMap.getSelectedTile()[0]*gameMap.getTileSize(), gameMap.getSelectedTile()[1]*gameMap.getTileSize(), gameMap.getTileSize(), gameMap.getTileSize());
            this.ctx.stroke();
        }
        this.drawPath(gameMap);
        this.showCheckedNodes(gameMap);
    }

    drawPath(gameMap) {
        if (gameMap.showPath) {
            for (let i = 1; i < gameMap.pathFinder.traceback.length - 1; i++) {
                //this.array[][] = 8;
                this.drawColoredSquare(gameMap.pathFinder.traceback[i].x * gameMap.getTileSize(), gameMap.pathFinder.traceback[i].y * gameMap.getTileSize(), gameMap.getTileSize(), "blue", "Path");
            }
        }
    }

    showCheckedNodes(gameMap) {
        if (gameMap.showCheckedNodes) {
            for (let i = 1; i < gameMap.pathFinder.checkedNodes.length - 1; i++) {
                //this.array[][] = 8;
                this.drawColoredSquare(gameMap.pathFinder.checkedNodes[i].x * gameMap.getTileSize(), gameMap.pathFinder.checkedNodes[i].y * gameMap.getTileSize(), gameMap.getTileSize(), "orange", "Path");
            }
        }
    }

    drawColoredSquare(xPos, yPos, tileSize, color, text) {
        this.ctx.beginPath();
        // Fill
        this.ctx.lineWidth = 1;
        this.ctx.rect(xPos, yPos, tileSize, tileSize);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        // Border
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
        // Text
        this.ctx.fillStyle= "#000000";
        this.ctx.font = "14px Arial";
        this.ctx.fillText(text,xPos,yPos + gameMap.getTileSize() - 4);
    }
}