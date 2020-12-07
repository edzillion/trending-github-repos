const MODULE_ID = 'trending-github-repos';
/**
 * Logging
 * @module Logging
 */
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["ALL"] = 4] = "ALL";
})(LogLevel || (LogLevel = {}));
/**
 * Simple wrapper around console.log to give us log level functionality.
 * @function
 * @param {LogLevel} messageLevel - ERROR,INFO,DEBUG,WARN,ALL
 * @param {...any} args - console.log() arguments
 */
export function log(messageLevel, ...args) {
    if (messageLevel > window[MODULE_ID].logLevel)
        return;
    if (messageLevel === LogLevel.ERROR)
        console.error(MODULE_ID + ' | ', ...args);
    else if (messageLevel === LogLevel.WARN)
        console.warn(MODULE_ID + ' | ', ...args);
    else
        console.log(MODULE_ID + ' | ', ...args);
}
