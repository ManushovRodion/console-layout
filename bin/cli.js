#!/usr/bin/env node
const lib = require('../dist/demo.cjs');

try {
  lib.cli(process);
} catch (e) {
  console.error(e);
  process.exit(0);
}
