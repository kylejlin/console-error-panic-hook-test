const mod = require('./console_error_panic_hook_test');
// mod.greet();
console.log('This is what an error looks like on node with the panic hook:\n')
mod.panic();
