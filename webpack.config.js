const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/Frontend/App/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, use: 'ts-loader'},
      {test: /\.(png|svg|jpg|gif|ico)$/, use: 'file-loader'},
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: path.join(__dirname, 'src/Frontend/assets/index.html'),
    }
  )]
};