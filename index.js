var fs = require('fs'),
    path = require('path');

fs.readdirSync(path.resolve(__dirname, 'node_modules')).forEach(function (p) {
  var module = path.basename(p, '.js');

  exports.__defineGetter__(module, function () {
    return require(module);
  });
});
