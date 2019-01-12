var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

const webpack = require('webpack');
const prod = process.argv.indexOf('production')


const config = {
  entry: `./client/index.js`,
  output: {
    filename: 'app.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
};

config.plugins = config.plugins||[];
if (prod !== -1) {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `"production"`
      }
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `""`
      }
  }));
}

module.exports = config;

