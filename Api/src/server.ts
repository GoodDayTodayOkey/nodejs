import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import resolver from './graphql/resolver';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(cors());
app.use(express.json());

app.use(graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});