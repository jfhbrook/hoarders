#!/usr/bin/env node

var request = require('request'),
    fs = require('fs'),
    path = require('path');

request('http://isaacs.couch.xxx/registry/_all_docs', function (err, res, body) {
  if (err) {
    throw err;
  }

  fs.writeFileSync(path.resolve(__dirname, 'package.json'), JSON.stringify({
    author: 'Joshua Holbrook',
    name: 'hoarders',
    description: 'node.js\'s most complete "utility grab-bag". Dedicated to substack.',
    version: '0.1.0',
    dependencies: (function () {
      var deps = {};

      JSON.parse(body).rows.forEach(function (r) {
        if (r.id !== 'hoarders') {
          deps[r.id] = '*';
        }
      });

      return deps;
    })(),
    main: './index.js',
    engines: {
      node: '*'
    }
  }, true, 2));
});
