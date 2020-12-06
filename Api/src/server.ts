import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import resolver from './graphql/resolver';
import * as bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())     
app.use((req, res, next) => {
  console.log(req.url)
  next()
}) 
// app.use(bodyParser.json());

app.use(graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  // graphiql: true
}))

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!\n`);
});