/* eslint-disable */
const { resolve } = require('path');
const merge = require('webpack-merge');
/* eslint-enable */

const INCLUDE = resolve(__dirname, 'src');

const dev = process.env.ENV === 'dev';

const config = {
  mode: dev ? 'development' : 'production',

  devtool: dev ? 'eval-source-map' : 'source-map',

  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        include: INCLUDE,
        use: ['file-loader'],
      },
      {
        test: /\.tsx|ts$/,
        use: [
          'cache-loader',
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],

        include: INCLUDE,
      },
    ],
  },

  node: {
    __dirname: false,
    __filename: false,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    alias: {
      '~': INCLUDE,
    },
  },

  externals: [
    'extract-file-icon',
    'mouse-hooks',
    'node-window-manager',
    'node-vibrant',
    'leveldown',
    'electron-extensions',
    'keytar',
    '@cliqz/adblocker-electron',
  ],
};

function getConfig(...cfg) {
  return merge(config, ...cfg);
}

module.exports = { getConfig, dev };
