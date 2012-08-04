#!/usr/bin/env node

var request = require('request'),
    fs = require('fs'),
    path = require('path');

request('http://isaacs.iriscouch.com/registry/_all_docs', function (err, res, body) {
  if (err) {
    throw err;
  }

  fs.writeFileSync(path.resolve(__dirname, 'package.json'), JSON.stringify({
    author: 'Joshua Holbrook',
    name: 'hoarders',
    description: 'node.js\'s most complete "utility grab-bag". Dedicated to substack.',
    version: '0.1.1',
    dependencies: (function listDeps() {
      var deps = {};

      JSON.parse(body).rows.forEach(function (r) {
        if (
          r.id !== 'hoarders' &&
          !r.id.match(/^_design/)
        ) {
          deps[r.id] = '*';
        }
      });

      return deps;
    })(),
    main: './index.js',
    homepage: 'https://github.com/jesusabdullah/hoarders',
    repository: {
      type: 'git',
      url: 'git://github.com/jesusabdullah/hoarders.git'
    }
  }, true, 2));
});
