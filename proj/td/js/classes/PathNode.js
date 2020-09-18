showFileImports ? console.log("PathNode.js Loaded") : null;

class PathNode {
    constructor(x, y) {
        // Properties
        this.x = x;
        this.y = y
        this.id = this.x + "-" + this.y;

        this.visited = false;
        this.distance = 99999;
        this.neighbors = [];
        this.parentNode = null;
    }

}