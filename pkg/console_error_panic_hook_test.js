/* tslint:disable */
var wasm;

const __wbg_log_ce45dc16ad485c30_target = console.log;

const TextDecoder = require('util').TextDecoder;

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

module.exports.__wbg_log_ce45dc16ad485c30 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    __wbg_log_ce45dc16ad485c30_target(varg0);
};
/**
* @returns {void}
*/
module.exports.greet = function() {
    return wasm.greet();
};

/**
* @returns {void}
*/
module.exports.panic = function() {
    return wasm.panic();
};

wasm = require('./console_error_panic_hook_test_bg');
