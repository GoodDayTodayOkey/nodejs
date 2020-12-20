import * as mongoose from 'mongoose';

interface IBouquet extends mongoose.Document {
  imageUrl: string,
  price: number,
  name: string,
  colors: string[],
  size: string[],
  compound: string,
  description: string,
}

const bouquet = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  compound: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

export default mongoose.model<IBouquet>('Bouquet', bouquet)