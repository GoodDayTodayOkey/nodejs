import { buildSchema } from 'graphql';

const schema =  buildSchema(`
  type MainItems {
    counter: Int!
    name: String!
  }

  type Query {
    mainItems: MainItems!
  }
`)

export default schema;