showFileImports ? console.log("GameMap.js Loaded") : null;

/**
 * This is the class for the game map.
 * Array Values:
 * '0' - Empty Area
 */
class GameMap {
    constructor(mapHeight, mapWidth, mapTileSize) {
        this.width = mapWidth;
        this.height = mapHeight;
        this.tileSize = mapTileSize;
        this.array = null;
        this.selectedTile = null;
        this.mapRandomizer = new MapRandomizer(this);
        this.gameInfo = new GameInfo(this);
        this.enemyUnits = [];

        this.viablePathingNodes = [EMPTY, START, FINISH, NO_BUILD, CHECK_1, CHECK_2, CHECK_3, CHECK_4, CHECK_5, RANGE_BOOST, DAMAGE_BOOST,ENEMY_SPEED_BOOST];
        this.pathFinder  = null;
        this.buildPath();
        
        this.showPath = false;
        this.showVisited = false;

        
    }

    buildPath() {
        this.pathFinder = new PathFinder(this.array, this.viablePathingNodes, START, FINISH);
    }

    buildTower() {
        this.array[this.selectedTile[0]][this.selectedTile[1]] = 21;
    }

    destroyObject() {
        this.array[this.selectedTile[0]][this.selectedTile[1]] = 0;
    }

    startWave() {
        let newEnemy = new Enemy1(this.pathFinder.traceback, this.tileSize);
        this.enemyUnits.push(newEnemy)
    }

    updateGameTick() {
        for (let i = 0; i < gameMap.enemyUnits.length; i++) {
            gameMap.enemyUnits[i].update();
        }
    }
 
    // Prints out the details of GameMap
    toString() {
        console.log("Map toString:");
        console.log("Map Width: " + this.width);
        console.log("Map Height: " + this.height);
        console.log ("Map Array:");
        console.log(this.array);
    }

    //Getters and Setters
    getArray() {
        return this.array;
    }

    getSelectedTile() {
        return this.selectedTile;
    }

    getTileSize() {
        return this.tileSize;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
    
}