showFileImports ? console.log("GameInfo.js Loaded") : null;

class GameInfo {
    constructor(gameMap) {
        this.gameMap = gameMap;

    }

    // Sets the value this.selectedTile
    selectTile(xVal, yVal) {
        if (xVal != null) {
            this.gameMap.selectedTile = [Math.floor(xVal / this.gameMap.tileSize), Math.floor(yVal / this.gameMap.tileSize)];
        }
        let arrayValue = this.gameMap.array[this.gameMap.selectedTile[0]][this.gameMap.selectedTile[1]];
        let selectedType = null;
        switch (arrayValue) {
            case EMPTY:
                selectedType = "Empty<br><button onclick='buildTower()'>Build Tower</button>";
                break;
            case ROCKS:
                selectedType = "Rock<br><button  onclick='destroyObject()'>Destroy Rock</button>";
                break;
            case START:
                selectedType = "Start";
                break;
            case FINISH:
                selectedType = "Finish";
                break;    
            case NO_BUILD:
                selectedType = "No Build Zone";
                break;
            case ENEMY_SPEED_BOOST:
                selectedType = "Enemy Speed Boost";
                break;
            case RANGE_BOOST:
                selectedType = "Range Boost";
                break;
            case DAMAGE_BOOST:
                selectedType = "Damage Boost";
                break;  

            case CHECK_1:
                selectedType = "Checkpoint 1";
                break;    
            case CHECK_2:
                selectedType = "Checkpoint 2";
                break;
            case CHECK_3:
                selectedType = "Checkpoint 3";
                break;
            case CHECK_4:
                selectedType = "Checkpoint 4";
                break;
            case CHECK_5:
                selectedType = "Checkpoint 5";
                break; 
            case TOWER_1:
                selectedType = "Tower Type 1 <br><button  onclick='destroyObject()'>Destroy Tower</button>";
                break;
            case PATH:
                    selectedType = "Path";
                    break;
                
        }
        document.getElementById("selected-tile").innerHTML = selectedType;
    }
}