const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

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
      Base: path.resolve(__dirname, "src/Frontend/Base/"),
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
      {test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }]},
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader']},
      {test: /\.(ttf|eot|woff|woff2)$/, use: [{loader: 'file-loader',  options: {name: 'fonts/[name].[ext]'}}]},
]
},
  plugins: [
    new CleanWebpackPlugin({root: path.resolve(__dirname, 'dist')}),
    new MiniCssExtractPlugin()
  ],
};