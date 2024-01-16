import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import shirtsRoute from './routes/shirtsRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
// index.js
import authRoute from './routes/authRoute.js';
const app = express();
app.use(bodyParser.json()); 
app.use('/auth', authRoute);
// Middleware for parsing request body
app.use(express.json());
app.use(cors());
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to My Ecommerce Store');
});

app.use('/shirts', shirtsRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
