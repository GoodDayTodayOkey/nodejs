import Bouquet from 'Models/Bouquet';
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();
const CREATED_BOUQUET = 'bouquetAdded';

interface Bouquet {
    imageUrl: string,
    price: number,
    name: string,
    colors: string[],
    size: string[],
    compound: string,
    description: string,
}

const resolvers = {
  Query: {
    mainItems() {
      return { counter:7, name: 'Nike'}
    },
    async getBouquets() {
      try{
        return await Bouquet.find({});
      }catch(e){
        throw new Error('Bouquet is not available')
      }
    },
  },
  Mutation: {
    async createBouquet(_, {bouquet}) {
      try{
        const newBouquet = await Bouquet.create({
          imageUrl: bouquet.imageUrl,
          price: bouquet.price,
          name: bouquet.name,
          colors: bouquet.colors,
          size: bouquet.size,
          compound: bouquet.compound,
          description: bouquet.description,
        });
        const bouquets = await Bouquet.find({});
        pubsub.publish(CREATED_BOUQUET, { bouquetAdded: newBouquet });
        return newBouquet;
      }catch(e){
        throw new Error('Bouquet is not created')
      }
    }
  },
  Subscription: {
    bouquetAdded: {
      subscribe: () => pubsub.asyncIterator(CREATED_BOUQUET),
    }
  }
};

export default resolvers;