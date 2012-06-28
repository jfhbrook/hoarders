var fs = require('fs');

fs.readdirSync(path.resolve(__dirname, 'node_modules')).forEach(function (module) {
  // Lazily require, attach to global (no property accessing either!)
  global.__defineGetter__(module, function () {
    return require(module);
  });
});

module.exports = undefined;
