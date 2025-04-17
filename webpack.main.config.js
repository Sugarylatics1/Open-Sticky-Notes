const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/main.js',
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets/tray.png'),
          to: path.resolve(__dirname, '.webpack/assets/'),
        },
        {
          from: path.resolve(__dirname, 'assets/tray.png'), 
          to: path.resolve(__dirname, 'resources/assets/'), 
        },
      ],
    }),
  ],
};
