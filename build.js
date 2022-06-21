/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild');
const { Generator } = require('npm-dts');

const shared = {
  entryPoints: ['src/index.ts'],
  platform: 'neutral',
  minify: true,
  bundle: true,
};

build({ ...shared, outfile: 'dist/index.js' });

build({ entryPoints: ['src/cli.ts'], bundle: true, minify: true, platform: 'node', outfile: 'dist/cli.js' });

new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate();
