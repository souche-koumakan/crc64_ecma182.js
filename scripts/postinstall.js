'use strict';

const cp = require('child_process');
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, '../dist/crc.js'))) {
  console.log('Compiling crc.js...');
  fs.mkdirSync(path.join(__dirname, '../dist'), { recursive: true });
  cp.execSync('make js', {
    cwd: path.join(__dirname, '..'),
  });
}
