const rules = require('./webpack.rules');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // add CSS loader if needed
      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // ← important!
  },
  plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'assets/tray.png'),
            to: path.resolve(__dirname, '.webpack/main/assets/'),
          },
        ],
      }),
    ],
};
