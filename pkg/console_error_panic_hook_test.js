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

const __wbg_error_cc95a3d302735ca3_target = console.error;

module.exports.__wbg_error_cc95a3d302735ca3 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);

    __wbg_error_cc95a3d302735ca3_target(varg0);
};

wasm = require('./console_error_panic_hook_test_bg');
