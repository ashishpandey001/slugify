/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild');
const { Generator } = require('npm-dts');

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'neutral',
};

build({ ...shared, outfile: 'dist/index.js' });

build({ ...shared, outfile: 'dist/index.esm.js', format: 'esm' });

build({ entryPoints: ['src/cli.ts'], bundle: true, platform: 'node', outfile: 'dist/cli.js' });

new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate();
