console.log("Javascript Init");
var devMode = true;
var showFileImports = true;

// Logs the above variables
devMode ? console.log("The project is in devMode.") : null;
devMode ? console.log("The project will print out file imports.") : null;

// If dev mode is on disable all program notifications.
// If devMode is false do not show file imports.
devMode ? null : showFileImports = false;

// Constants
const EMPTY = 0;
const ROCKS = 1;
const START = 2;
const FINISH = 3;
const NO_BUILD = 4;
const ENEMY_SPEED_BOOST = 5;
const RANGE_BOOST = 6;
const DAMAGE_BOOST = 7;
const PATH = 8;

const CHECK_1 = 11;
const CHECK_2 = 12;
const CHECK_3 = 13;
const CHECK_4 = 14;
const CHECK_5 = 15;

const TOWER_1 = 21;

// resources
var IMG_ROCK = new Image()
IMG_ROCK.src = "res/8/rock.png";

var IMG_GRASS = new Image()
IMG_GRASS.src = "res/8/grass.png";

var IMG_NO_BUILD = new Image()
IMG_NO_BUILD.src = "res/8/caution.png";

var IMG_WATER = new Image()
IMG_WATER.src = "res/8/water.png";

var IMG_CHECKPOINT = new Image()
IMG_CHECKPOINT.src = "res/8/checkpoint.png";

var IMG_FINISH = new Image()
IMG_FINISH.src = "res/8/finish.png";

var IMG_START = new Image()
IMG_START.src = "res/8/start.png";

var IMG_FINISH = new Image()
IMG_FINISH.src = "res/8/finish.png";

var IMG_TOWER_1 = new Image()
IMG_TOWER_1.src = "res/8/tower1.png";

var RED_DOT = new Image()
RED_DOT.src = "res/8/red_dot.png";

var GREEN_DOT = new Image()
GREEN_DOT.src = "res/8/green_dot.png";

var BLUE_DOT = new Image()
BLUE_DOT.src = "res/8/blue_dot.png";
