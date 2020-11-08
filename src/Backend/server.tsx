import * as ReactDomServer from 'react-dom/server';
import * as React from 'react';
import Main from '../Frontend/App/Page/Main/Component/Main';
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../../webpack.config.js');
const compiler = webpack(config);
const renderTemplate = (html) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Webpack App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src='/bundle.js' defer ></script>
      </body>
    </html>
  `;
};

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath, serverSideRender: true, index:false }));
app.use((req, res) => {
  res.end(renderTemplate(ReactDomServer.renderToString(<Main />)))
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});