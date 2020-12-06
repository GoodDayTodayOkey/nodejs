import * as ReactDomServer from 'react-dom/server';
import * as React from 'react';
import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom";
import { matchPath } from "react-router";
import * as qs from 'qs';
import * as serialize from 'serialize-javascript';
import { createProxyMiddleware } from 'http-proxy-middleware';


import routes from 'Routes/routes';
import App from 'App/App';
import { reducer } from 'Store/reducer';

const app = express();
const config = require('../../webpack.config.js');
const compiler = webpack(config);


const renderTemplate = async (req, res) => {
  const params = qs.parse(req.query); 
  const initalData = await routes.reduce((acc, route) => {
    return (matchPath(req.url, route) !== null) ? route.getInitalState(req.url, params) : acc
  }, Promise.resolve({ "mainItems": { "counter": 5, "name": "Nike" } }));

  const store = createStore(reducer, initalData);
  const renderHtml = html => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"><title>Nodejs</title>
        <link rel="stylesheet" href="/main.css">
      </head>
      <body>
        <script>window.__PRELOADED_STATE__=${serialize(store.getState())}</script>
        <div id="root">${html}</div>
        <script src='/bundle.js' defer ></script>
        </script>
      </body>
    </html>`;

  res.end(renderHtml(ReactDomServer.renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )));
}

const PORT = process.env.PORT || 8080;
app.set('port', PORT);
app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath, serverSideRender: true, writeToDisk: true }));
app.use(express.static('dist'));
app.use('/graphql', createProxyMiddleware({ 
  target: 'http://localhost:3000',
  changeOrigin: true,
}));
app.use(renderTemplate); //добавить router для авторизации
 
    
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});