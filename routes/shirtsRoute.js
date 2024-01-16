import express from 'express';
import { Shirt } from '../models/shirtsModel.js';
const router = express.Router();
// shirtsRoute.js
import { isAdmin } from '../middleware/authMiddleware.js';

// Example: Only allow admins to update a shirt
router.put('/:id', isAdmin, async (request, response) => {
  // Your update logic here
});


// Route for Save a new Shirt
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.description ||
      !request.body.price ||
      !request.body.image
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, description, price, image',
      });
    }
    const newShirt = {
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      image: request.body.image,
    };

    const shirt = await Shirt.create(newShirt);

    return response.status(201).send(shirt);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Shirts from database
router.get('/', async (request, response) => {
  try {
    const shirts = await Shirt.find({});

    return response.status(200).json({
      count: shirts.length,
      data: shirts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Shirt from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const shirt = await Shirt.findById(id);

    return response.status(200).json(shirt);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Shirt
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.description ||
      !request.body.price ||
      !request.body.image
    ) {
      return response.status(400).send({
        message: 'Send all required fields: name, description, price, image',
      });
    }

    const { id } = request.params;

    const result = await Shirt.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Shirt not found' });
    }

    return response.status(200).send({ message: 'Shirt updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a shirt
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Shirt.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Shirt not found' });
    }

    return response.status(200).send({ message: 'Shirt deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
