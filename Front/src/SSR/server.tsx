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
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

import routes from 'Routes/routes';
import App from 'App/App';
import { reducer } from 'Store/reducer';



// passport.use('auth', new LocalStrategy(
//   function(username, password, done) {
//     // User.findOne({ username: username }, function (err, user) {
//     //   if (err) { return done(err); }
//     //   if (!user || !user.validPassword(password)) { //hash password
//     //     return done(null, false, { message: 'Incorrect username or password.' });
//     //   }
//     //   return done(null, user);
//     // });
//     return done(null, { username, password }, );
//   }
// ));

// passport.use('base', new LocalStrategy( //jwt sstratey проверить присылает ли что то есл token expire, если ент то в анутифкацию возращать токен, слать запрос
//   function(username, password, done) {

//     console.log(username, password)
//     const user = {login: 'user',  password: '123456'}
//     return done(null, user, {message: 'Logged In Successfully'});
//   }
// ));

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
// app.use(passport.initialize());
app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath, serverSideRender: true, writeToDisk: true }));
app.use(cookieParser());
app.use(express.static('dist'));
app.use(express.json());


// app.use('/auth', function (req, res) {
//   passport.authenticate('auth', {session: false}, (err, user, info) => {
//       if (err || !user) {
//           return res.status(400).json({
//               message: info ? info.message : 'Login failed',
//               user   : user
//           }); // обработать
//       }
//       req.login(user, {session: false}, (err) => {
//           if (err) {
//             res.send(err);
//           }

//           const refreshToken = jwt.sign({ foo: 'bar' }, 'secret', { algorithm: 'HS256'});
//           const accessToken = jwt.sign(user, 'secret', { algorithm: 'HS256'});
//           res.cookie('accessToken', accessToken, {
//             maxAge: 86_400_000,
//             httpOnly: true //доработать secure
//           });
//           return res.json({refreshToken});
//       });
//   })
//   (req, res);
// });

// app.use('/graphql', function (req, res, next) {
//   passport.authenticate('base', {session: false}, (err, user, info) => {
//       if (err || !user) {
//           return res.status(400).json({
//               message: info ? info.message : 'Login failed',
//               user   : user
//           });
//       }
//       req.login(user, {session: false}, (err) => {
//           if (err) {
//               res.send(err);
//           }
//           const token = jwt.sign(user, 'your_jwt_secret');
//           return res.json({user, token});
//       });
//   })
//   (req, res);
// });

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: resolver,
//   graphiql: true
// }))

app.use('/graphql', createProxyMiddleware({ 
  target: 'http://localhost:3000',
  ws: true,
  changeOrigin: true,
}));

// app.ws('/socket', function(ws, req) {
//   ws.on('message', function(msg) {
//     console.log(msg);
//     ws.send('Ok!')
//   });
// });


// app.use(passport.authenticate('local'))
app.use(renderTemplate); //добавить router для авторизации
 
    
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});

// wss.on('connection', function connection(ws) {
//   ws.on('message', (data) => {
//     console.log(data);
//   });
// });