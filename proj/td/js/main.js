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