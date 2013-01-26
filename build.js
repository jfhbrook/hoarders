#!/usr/bin/env node

var fs = require('fs'),
    path = require('path');

var request = require('request');

var version = '0.1.4';

var log = console.error;

//
// If you want to opt a package out of hoarders, add it to this list and
// submit a pull request.
//
var blacklist = [
  'hoarders', // the self
  'mime', // broofa
  'node-uuid', // broofa
  'node-int64', // broofa
  'uuid', // broofa
  'mongo-helper' // SomeKittens
];

log('requesting all docs from npm...');
request('http://isaacs.iriscouch.com/registry/_all_docs', function (err, res, body) {
  if (err) {
    throw err;
  }
  log('writing package.json...');

  fs.writeFileSync(path.resolve(__dirname, 'package.json'), JSON.stringify({
    author: 'Joshua Holbrook',
    name: 'hoarders',
    description: 'node.js\'s most complete "utility grab-bag". Dedicated to substack.',
    version: version,
    dependencies: (function listDeps() {
      var deps = {};

      JSON.parse(body).rows.forEach(function (r) {
        if (
          !r.id.match(/^_design/) &&
          blacklist.every(function (blacklisted) {
            return blacklisted !== r.id;
          })
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

  log('done.');
});
