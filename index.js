var fs = require('fs');

// core modules
[
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
].forEach(expose);

// npm modules
fs.readdirSync(path.resolve(__dirname, 'node_modules')).forEach(expose);

function expose(module) {
  // Lazily require, attach to global (no property accessing either!)
  global.__defineGetter__(module, function () {
    return require(module);
  });
}

module.exports = undefined;
