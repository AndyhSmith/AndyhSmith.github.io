log("Enemy1.js", Log.IMPORT);

class Enemy1 {
    constructor(newPath, tileSize) {
        log("Enemy Created", Log.OBJECT)
        this.id = getRandomInt(1000000)
        this.path = newPath;
        this.tileSize = tileSize;
        this.x = this.path[0].x * tileSize;
        this.y = this.path[0].y * tileSize;

        
        this.maxStepsOnPath = 20;
        this.pathPosition = 0;
        this.stepsOnPath = 0;
        this.speed = this.tileSize / this.maxStepsOnPath;

        this.targetX = null;
        this.targetY = null;
        
        
    }

    update() {
        //console.log("Target X: ", this.path[this.pathPosition + 1].x * this.tileSize);
        //console.log("Target Y: ", this.path[this.pathPosition + 1].y * this.tileSize);
        // this.targetX = this.path[this.pathPosition + 1].x * this.tileSize;
        // this.targetY = this.path[this.pathPosition + 1].y * this.tileSize;
        

        // Check if needs to move verticle
        // if (this.path[this.pathPosition].x == this.path[this.pathPosition + 1].x) {
        //     console.log("Go Verticle")
            
        // }
        //console.log(this.pathPosition)
        if (this.path[this.pathPosition].x > this.path[this.pathPosition + 1].x) {
            //console.log("Go Left")
            this.x -= this.speed;
            
        }
        else if (this.path[this.pathPosition].x < this.path[this.pathPosition + 1].x) {
            //console.log("Go Right")
            this.x += this.speed;
            
        }
        else if (this.path[this.pathPosition].y > this.path[this.pathPosition + 1].y) {
            //console.log("Go Up")
            this.y -= this.speed;
            
        }
        else if (this.path[this.pathPosition].y < this.path[this.pathPosition + 1].y) {
            //console.log("Go Down")
            this.y += this.speed;
            
        }
        
        if (this.stepsOnPath == this.maxStepsOnPath) {
            this.pathPosition += 1;
            if (this.pathPosition == this.path.length - 1) {
                this.destorySelf(this.id)
            }
            this.stepsOnPath = 0;
        }
        this.stepsOnPath += 1;


        // Check if needs to move horizontal
        // if (this.path[this.pathPosition].y == this.path[this.pathPosition + 1].y) {
        //     console.log("Go Horizontal")
        // }
    }

    destorySelf(idToDestroy) {
        let tempArray = [];
        for (let i = 0; i < gameMap.enemyUnits.length;i++) {
            if (gameMap.enemyUnits[i].id != idToDestroy) {
                tempArray.push(gameMap.enemyUnits[i]) 
            }
        }
        gameMap.enemyUnits = tempArray;
    }

    draw(ctx, tileSize) {
        //console.log(this)
        ctx.drawImage(RED_DOT, this.x, this.y, tileSize, tileSize);
    
    }
}