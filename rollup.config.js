import babel from '@rollup/plugin-babel';
import { author, name, version } from './package.json';

const banner = `/* @license ${name} v${version} | (c) ${author} */`;

const config = {
  input: 'src/index.js',
  output: [
    {
      file: `dist/${name}.esm.js`,
      format: 'es',
      banner: banner,
    },
    {
      file: `dist/${name}.umd.js`,
      name: 'getNonBuiltinProps',
      format: 'umd',
      banner: banner,
    },
  ],
  plugins: [babel({ babelHelpers: 'bundled' })],
};

export default config;
