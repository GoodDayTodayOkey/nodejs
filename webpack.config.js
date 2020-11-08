const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/Frontend/index.tsx'),
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
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
};