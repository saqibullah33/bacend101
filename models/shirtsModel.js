import mongoose from 'mongoose';

const shirtSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // You might want to store the image URL or use a different approach for handling images
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Shirt = mongoose.model('Shirt', shirtSchema);
