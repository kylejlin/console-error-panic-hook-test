
const path = require('path').join(__dirname, 'console_error_panic_hook_test_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./console_error_panic_hook_test'] = require('./console_error_panic_hook_test');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
