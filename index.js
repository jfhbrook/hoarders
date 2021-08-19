var assert = require('assert');
var fs = require('fs');
var spawnSync = require('child_process').spawnSync;

var log = process.logging ? process.logging : function () {};

//
// If you want to opt a package out of hoarders, add it to this list and
// submit a pull request.
//
exports.haters = require('./haters.json');

// core modules
exports.coreModules = [
  'assert',
  'child_process',
  'cluster',
  'crypto',
  'dgram',
  'dns',
  'domain',
  'events',
  'fs',
  'http',
  'https',
  'net',
  'path',
  'readline',
  'repl',
  'stream',
  'tls',
  'tty',
  'url',
  'util',
  'vm',
  'zlib'
].reduce(function (acc, coreModule) {
  acc[coreModule] = true;
  return acc;
}, {});

module.exports = new Proxy(exports, {
  get: function (target, prop, receiver) {
    return getModule(prop);
  }
});

function getModule(moduleName) {
  if (moduleName === 'hoarders') {
    return module.exports;
  }
  var module = null;
  try {
    module = require(moduleName);
  } catch (err) {
    assert(
      !exports.coreModules[moduleName],
      'a core module should require first try'
    );
    if (exports.haters[moduleName]) {
      throw new Error(
        'refusing to install ' +
          moduleName +
          ' because ' +
          exports.haters[moduleName].author.toUpperCase() +
          ' is a HATER 😤!'
      );
    }
    log('error on first require(%module): %err', {
      err: err,
      module: moduleName
    });
    log('attempting to npm install %module...', {module: moduleName});
    var npmResult = spawnSync('npm', ['install', moduleName], {
      stdio: ['pipe', 'inherit', 'inherit']
    });
    if (npmResult.error) throw npmResult.error;
    if (npmResult.status)
      throw new Error('npm install returned status: ' + npmResult.status);
    module = require(moduleName);
  }
  return module;
}
