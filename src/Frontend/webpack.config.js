const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'App/index.tsx'),
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
  // watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: path.join(__dirname, 'assets/index.html'),
    }
  )]
};