import * as ReactDomServer from 'react-dom/server';
import * as React from 'react';
import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from "react-router-dom";
import * as qs from 'qs';
import * as serialize from 'serialize-javascript';

import Main from '../Frontend/App/Page/Main/Component/Main';
import { reducer } from '../Frontend/App/Store/reducer';

const app = express();
const config = require('../../webpack.config.js');
const compiler = webpack(config);


interface IServerReduxStore {
  data: {
    counter: number;
    name: string;
  }
}

const renderTemplate = async (req, res) => {
  const params = qs.parse(req.query); 
  const initalData: IServerReduxStore = await Promise.resolve({ "data": { "counter": 5, "name": "Nike" } });
  const store = createStore(reducer, initalData);
  const renderHtml = html => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"><title>Nodejs</title>
        <link rel="stylesheet" href="main.css">
      </head>
      <body>
        <script>window.__PRELOADED_STATE__=${serialize(store.getState())}</script>
        <div id="root">${html}</div>
        <script src='bundle.js' defer ></script>
        </script>
      </body>
    </html>`;

  res.end(renderHtml(ReactDomServer.renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  )));
}

const PORT = process.env.PORT || 8080;
app.set('port', PORT);
app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath, serverSideRender: true, writeToDisk: true }))
app.use(renderTemplate);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});