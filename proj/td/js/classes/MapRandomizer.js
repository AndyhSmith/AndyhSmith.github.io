showFileImports ? console.log("MapRandomizer.js Loaded") : null;

class MapRandomizer {
    constructor(gameMap) {
        this.gameMap = gameMap;
        this.createObsticles();
        
    }

    createObsticles() {
        this.initMapArray();
        this.createRandomTile(START);
        this.createRandomTile(FINISH);
       

        if (getRandomInt(10) < 8) {
            this.createRandomTile(CHECK_1);
            if (getRandomInt(10) < 8) {
                this.createRandomTile(CHECK_2);
                if (getRandomInt(10) < 8) {
                    this.createRandomTile(CHECK_3);
                    if (getRandomInt(10) < 8) {
                        this.createRandomTile(CHECK_4);
                        if (getRandomInt(10) < 8) {
                            this.createRandomTile(CHECK_5);
                        }
                    }
                }
            }
        }
       
        for (let i = 0; i < getRandomInt(20) + 10; i++) {
            this.createRandomTile(ROCKS);
        }
        for (let i = 0; i < getRandomInt(20); i++) {
            this.createRandomTile(NO_BUILD);
        }

        for (let i = 0; i < getRandomInt(10); i++) {
            this.createRandomTile(ENEMY_SPEED_BOOST);
        }

        for (let i = 0; i < getRandomInt(10); i++) {
            this.createRandomTile(RANGE_BOOST);
        }

        for (let i = 0; i < getRandomInt(10); i++) {
            this.createRandomTile(DAMAGE_BOOST);
        }
    }

    // Creates the array that holds the values for the game map.
    initMapArray() {
        this.gameMap.array = new Array(this.gameMap.height);
        for (var i = 0; i < this.gameMap.height; i++) {
            let tempArray = new Array(this.gameMap.width);
            for (var j = 0; j < this.gameMap.width; j++) {
                tempArray[j] = 0;
            }
            this.gameMap.array[i] = tempArray;
        }
    }

    createRandomTile(newTile) {
        let square = this.randomSelectNewSquare();
        this.gameMap.array[square[0]][square[1]] = newTile; // START
    }  

    // Randomly selects an unused square from the map.
    randomSelectNewSquare() { 
        let randomWidth = getRandomInt(this.gameMap.width);
        let randomHeight = getRandomInt(this.gameMap.height);
        if (this.gameMap.array[randomHeight][randomWidth] == 0) {
            return [randomHeight, randomWidth];
        } 
        return this.randomSelectNewSquare();
    }
}