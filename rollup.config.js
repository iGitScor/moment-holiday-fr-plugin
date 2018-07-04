import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    minify(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'env',
          {
            targets: {
              node: '6',
            },
            modules: false,
          },
        ],
      ],
      plugins: ['external-helpers'],
    }),
  ],
  output: {
    file: 'dist/mh-plugin.js',
    format: 'cjs',
    sourcemap: true,
  },
};
