showFileImports ? console.log("PathFinder.js Loaded") : null;
/**
 * Pathfinder using Dijkstra's algorithm
 */
class PathFinder {
    constructor(array, viablePathingNodes, startValue, endValue) {
        // This is an array containing ints
        this.array = array;
        this.height = this.array.length;
        this.width = this.array[0].length

        // Array of ints that can be used for pathfinding
        this.viablePathingNodes = viablePathingNodes;
        this.startValue = startValue;
        this.endValue = endValue;

        // Contains all unvisited nodes
        this.unvisitedSet = [];
        // Contains all nodes
        this.universalSet = [];
        
        // Tracks specific nodes
        this.startNode = null;
        this.currentNode = null;
        this.endNode = null;

        // Sets a limit to how many spots can be 
        this.maxStepCounter = 0;
        this.maxSteps = 500

        // TODO
        this.path = [];
        this.traceback = []

        // Array of all checked nodes
        this.checkedNodes = []

        this.createUnvisitedSet();
        this.addNeighbors();
        this.calculateDistances();
        this.toString();
       
        

    }

    createUnvisitedSet() {
        // Iterate through the map
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                // Check if a square is a viable path
                if (this.viablePathingNodes.includes(this.array[i][j])) {
                    let newNode = new PathNode(i, j);
                    this.universalSet.push(newNode)

                    // Asign node to unvisited set
                    if (this.array[i][j] == EMPTY) {
                        this.unvisitedSet.push(newNode);
                    }
                    else if (this.array[i][j] == START) {
                        newNode.distance = 0;
                        this.startNode = newNode;
                        this.currentNode = newNode;
                    }
                    else if (this.array[i][j] == FINISH) {
                        this.endNode = newNode;
                        this.unvisitedSet.push(newNode);
                    }
                    else if (this.viablePathingNodes.includes(this.array[i][j])) {
                        this.unvisitedSet.push(newNode);
                    }
                }
            }
        }
    }

    addNeighbors() {
        //console.log("Adding Neighbors")
        for (let i = 0; i < this.universalSet.length; i++) {
            //Add Lower Neighbor
            if (this.universalSet[i].y < this.width - 1) {
                // Select lower node
                //console.log(this.gameMap.getArray()[this.universalSet[i].x][this.universalSet[i].y + 1])  
                for (let j = 0; j < this.universalSet.length; j++) {
                    if ((this.universalSet[j].x == this.universalSet[i].x) && (this.universalSet[j].y == this.universalSet[i].y + 1)) {
                        this.universalSet[i].neighbors.push(this.universalSet[j]);
                        //console.log("Neighbor added")
                    }
                }
            }

            // Add Upper Neighbor
            if (this.universalSet[i].y < this.width) {
                // Select lower node
                //console.log(this.gameMap.getArray()[this.universalSet[i].x][this.universalSet[i].y + 1])  
                for (let j = 0; j < this.universalSet.length; j++) {
                    if ((this.universalSet[j].x == this.universalSet[i].x) && (this.universalSet[j].y == this.universalSet[i].y - 1)) {
                        this.universalSet[i].neighbors.push(this.universalSet[j]);
                        //console.log("Neighbor added")
                    }
                }
            }

            // Add Right Node
            if (this.universalSet[i].x < this.height - 1) {
                // Select lower node
                //console.log(this.gameMap.getArray()[this.universalSet[i].x + 1][this.universalSet[i].y])  
                for (let j = 0; j < this.universalSet.length; j++) {
                    if ((this.universalSet[j].x == this.universalSet[i].x + 1) && (this.universalSet[j].y == this.universalSet[i].y)) {
                        this.universalSet[i].neighbors.push(this.universalSet[j]);
                        //console.log("Neighbor added")
                    }
                }
            }

            // Add Left Node
            if (this.universalSet[i].x < this.height) {
                // Select lower node
                //console.log(this.gameMap.getArray()[this.universalSet[i].x + 1][this.universalSet[i].y])  
                for (let j = 0; j < this.universalSet.length; j++) {
                    if ((this.universalSet[j].x == this.universalSet[i].x - 1) && (this.universalSet[j].y == this.universalSet[i].y)) {
                        this.universalSet[i].neighbors.push(this.universalSet[j]);
                        //console.log("Neighbor added")
                    }
                }
            }

        }
    }

    calculateDistances() {
        //console.log("Starting Current Node:")
        //console.log(this.currentNode)
        // For every neighbor of current Node
        for (let i = 0; i < this.currentNode.neighbors.length; i++) {
            // Check to see if that neigbor has been visited
            if (this.currentNode.neighbors[i].visited == false) {
                // Check to see if that neighbor has a better distance
                if (this.currentNode.neighbors[i].distance > this.currentNode.distance + 1) {
                    // If not a better distance 
                    this.currentNode.neighbors[i].distance = this.currentNode.distance + 1;
                    this.currentNode.neighbors[i].parentNode = this.currentNode;
                   // this.currentNode.neighbors[i].path = this.currentNode.path
                    //this.currentNode.neighbors[i].path.push(this.currentNode.neighbors[i])
                }
            }
        }
        // Set visited to false
        this.currentNode.visited = true;
        this.checkedNodes.push(this.currentNode);

        
        let tempArray = [];
        
        // Remove the node from the visited list
        for (let i = 0; i < this.unvisitedSet.length; i++) {
            //console.log("CHECKING VALUE");
            //console.log((this.unvisitedSet[i]));
            let tempID = this.currentNode.x + "-" + this.currentNode.y;
            //console.log(tempID);
            //console.log(this.unvisitedSet[i].id)
            if (tempID != this.unvisitedSet[i].id) {
                tempArray.push(this.unvisitedSet[i]);
            } else if (tempID == this.unvisitedSet[i].id) {
                //console.log("REMOVED NODE FROM VISITED SET")
            }
        }
        
        this.unvisitedSet = tempArray;
        //console.log(this.unvisitedSet)
        //console.log(this.unv)
        
        

        // Check to see if the finish node has been visited
        if (this.endNode.visited != true) {
            this.path.push(this.currentNode);
            //console.log(this.path);

            //find the lowest distance node in unvisited
            let lowestNode = null
            for (let i = 0; i < this.unvisitedSet.length; i++) {
                //console.log(this.unvisitedSet[i].visited)
                if ((lowestNode == null) && (this.unvisitedSet[i].visited == false)) {
                    lowestNode = this.unvisitedSet[i];
                    //console.log("Setting New Lowest Node")
                } else if ((lowestNode != null) && (this.unvisitedSet[i].visited == false)){
                    if (lowestNode.distance > this.unvisitedSet[i].distance) {
                        lowestNode = this.unvisitedSet[i];
                    }
                }
            }
            this.currentNode = lowestNode;
            //console.log("Recalculating Distance")
            this.maxStepCounter += 1;
            if (this.maxStepCounter < 200) {
                this.calculateDistances();
            }
            
        }  else if (this.endNode.visited == true) {
            console.log("Completed");
            console.log(this.endNode)
            this.pathTraceback(this.endNode);
            //console.log(this.path);
        }
    }

    pathTraceback(node) {
        this.traceback.push(node);
        if (node.parentNode != null) {
            this.pathTraceback(node.parentNode);
        } else if (node.parentNode == null) {
            console.log("Completed Traceback");
            console.log(this.traceback);
        }
    }

    toString(){
        //console.log(this.unvisitedSet);
    }
}