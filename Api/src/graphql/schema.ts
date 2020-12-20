const typeDefs = `
  type MainItems {
    counter: Int!
    name: String!
  }

  type Bouquet {
    imageUrl: String!
    price: Int!
    name: String!
    colors: [String!]!
    size: [String!]!
    compound: String
    description: String
  }

  input InputBouquet {
    imageUrl: String!
    price: Int!
    name: String!
    colors: [String!]!
    size: [String!]!
    compound: String
    description: String
  }

  type Query {
    mainItems: MainItems!
    getBouquets: [Bouquet!]!  
  }

  type Mutation {
    createBouquet(bouquet: InputBouquet!): Bouquet!
  }

  type Subscription {
    bouquetAdded: Bouquet!
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default typeDefs;