// addProducts.js
import mongoose from 'mongoose';
import { mongoDBURL } from './config.js';
import { Shirt } from './models/shirtsModel.js';

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to the database');

    // Add new products
    const newProducts = [
      {
        name: 'Real Madrid',
        description: 'Madrid shirts are available',
        price: 19.99,
        image: 'product1.jpg',
      },
      {
        name: 'Fc Barcelona ',
        description: 'FC Barcelona shirts are available',
        price: 19.99,
        image: 'product2.jpg',
      },
      {
        name: 'Atletico Madrid ',
        description: 'Atletico Madrid shirts are available',
        price: 19.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'FC Arsenal  ',
        description: 'FC Arsenal shirts are available',
        price: 19.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'Man city  ',
        description: 'Man city shirts are available',
        price: 19.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'Liverpool',
        description: 'Liverpool shirts are available',
        price: 19.99,
        image: 'product2.jpg',
      },
       
      {
        name: 'Manchester United ',
        description: 'Manchester United shirts are available',
        price: 19.99,
        image: 'product2.jpg',
      },
      ];

    const insertedProducts = await Shirt.insertMany(newProducts);
    console.log('New products added:', insertedProducts);

    // Close the database connection
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
