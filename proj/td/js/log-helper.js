function log(message, type) {
    let devMode = true; // Switch to false when deploying site. All following dev options will automatically be turned off.
    let showJavascriptImports = true; // Log when a javascript file is imported.
    let showObjCreation = true; // Log whenever an object is created.
    let showMethodCalls = true; // Log whenever a method is called.
    let showErrors = true

    // Turn off all logs when devmode is turned off
    devMode == false ? showJavascriptImports = false : null;
    devMode == false ? showObjCreation = false : null;
    devMode == false ? showMethodCalls = false : null;
    devMode == false ? showErrors = false : null;

    if ((type == Log.METHOD) && (showMethodCalls)) {
        message = "%c" + message;
        console.log("%cMETHOD: " + message, "color: #00a30e; font-weight:bold;", "color: #00a30e;"); // Green
    } 
    else if ((type == Log.OBJECT) && (showObjCreation)) {
        message = "%c" + message;
        console.log("%cOBJECT: " + message, "color: #0091ff; font-weight:bold;", "color: #0091ff;"); // Blue
    } 
    else if ((type == Log.IMPORT) && (showJavascriptImports)) {
        message = "%c" + message;
        console.log("%cIMPORT: " + message, "color: #d49b00; font-weight:bold;", "color: #ffa000;"); // Yellow
    } 
    else if ((type == Log.ERROR) && (showErrors)) {
        message = "%c" + message;
        console.log("%cERROR: " + message, "color: red; font-weight:bold;", "color: #ff5959;"); // Red
    } 
}  

class Log {
    static METHOD = 5;
    static OBJECT = 6;
    static IMPORT = 7;
    static ERROR = 8;
    
    static RED = 3;
    static ORANGE = 1;
    static YELLOW = 2
    static GREEN = 0;
    static BLUE = 4;  
}

log("log-helper.js || Helps with console logging.", Log.IMPORT);
