import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolver';
import * as cors from 'cors';
import {mongoDBurl} from '../config/config'
import * as mongoose from 'mongoose';
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(cors());
app.use(express.json());
const ws = createServer(app);


const subscriptionEndpoint = `ws://localhost:${PORT}/subscriptions`;

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: {headerEditorEnabled: true, subscriptionEndpoint : subscriptionEndpoint},
}))

async function start() {
  try{
    await mongoose.connect(mongoDBurl, {useNewUrlParser: true, useFindAndModify: false})
    ws.listen(PORT, () => {
      new SubscriptionServer(
        {
          execute,
          subscribe,
          schema,
        },
        {
          server: ws,
          path: '/subscriptions',
        },
      );
      console.log(`Example app listening on port ${PORT}!\n`);
    });
  }catch(e){
    console.log(e)
  }
  
}

start();

