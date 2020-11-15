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
    alias: {
      Api: path.resolve(__dirname, "src/Frontend/Api/"),
      App: path.resolve(__dirname, "src/Frontend/App/"),
      Components: path.resolve(__dirname, "src/Frontend/Components/"),
      Page: path.resolve(__dirname, "src/Frontend/Page/"),
      Routes: path.resolve(__dirname, "src/Frontend/Routes/"),
      Store: path.resolve(__dirname, "src/Frontend/Store/"),
    }
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, use: 'ts-loader'},
      {test: /\.(png|svg|jpg|gif|ico)$/, use: {loader:'file-loader', options: { name: '[name].[ext]', outputPath: 'images' }},},
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()],
};