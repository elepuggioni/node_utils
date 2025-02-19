const DEBUG = true;
const BROWSER = false;

/** print message to console if debug mode is enabled
 * @param { ...any } message
*/
function debug(...message){
    if(DEBUG){
        console.log("\x1b[1;37m", ...message, "\x1b[0m");
    }
}

/** print message to console if browser messages are enabled
 * @param { ...any } message
*/
function browser(...message){
    if(BROWSER){
        console.log("\x1b[36m", ...message, "\x1b[0m");
    }
}

/** print message to console
 * @param { ...any } message
*/
function write(...message){
    console.log(...message);
}

/** print warning to console
 * @param { ...any } message
*/
function warn(...message){
    console.log("\x1b[33m", ...message, "\x1b[0m");
}

/** print non-fatal error to console
 * @param { ...any } message
*/
function error(...message){
    console.log("\x1b[31m", ...message, "\x1b[0m");
}

/** print message to console, then exit
 * @param { any } message
 * @param { number } exit_code optional, default is 1
*/
function fatal(message, exit_code){
    exit_code ??= 1;

    error('FATAL', message, "\n", 'Exiting with code', exit_code);
    process.exit(exit_code);
}

module.exports = { write, debug, browser, warn, error, fatal };