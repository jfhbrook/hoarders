#!/bin/bash

cd /home/josh/crons/hoarders && ./build.js && npm publish --force && git add package.json && git commit -m 'autobuild'
