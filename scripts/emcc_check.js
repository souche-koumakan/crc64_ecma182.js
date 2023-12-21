#!/usr/bin/env node
'use strict';

const cp = require('child_process');

const semver = require('semver');

const ret = cp.spawnSync('emcc', [ '-v' ]);

if (ret.error) {
  if (ret.error.code === 'ENOENT') {
    console.error('emcc not found. Please install emscripten.');
  } else {
    console.error(ret.error);
  }

  process.exit(1);
}

const content = ret.stderr.toString();
const REGEXP = /^emcc.*?(\d+\.\d+\.\d+).*?\n/;
const matched = content.match(REGEXP);
if (!matched || matched.length < 2) {
  console.error('emcc version not found.');
  process.exit(1);
}

const version = matched[1];
if (!semver.satisfies(version, '>= 1.37.0')) {
  console.error(`emcc version is not supported. (Expected: 1.37.0 or later, Current: ${version})`);
  process.exit(1);
}

console.log('emcc version:', version);
