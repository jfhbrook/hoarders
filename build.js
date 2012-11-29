#!/usr/bin/env node

var fs = require('fs'),
    path = require('path');

var request = require('request'),
    semver = require('semver');

var version = '0.0.0';

var log = console.error;

log('auto-incrementing version...');
try {
  version = require('./package.json').version;
  // version = semver.inc(version, 'build');
}
catch (err) {
  log('WARNING: could not auto-increment version');
}

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

  log('done.');
});
