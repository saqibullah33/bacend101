// authRoute.js
import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

const authRouter = express.Router();

// User Signup
authRouter.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).send({ message: 'Username and password are required' });
      }
  
      // ... your signup logic
      res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: error.message });
    }
  });

// authRoute.js
authRouter.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      // Compare plain text passwords (not recommended for production)
      const isPasswordValid = password === user.password;
  
      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid credentials' });
      }
  
      res.status(200).send({ message: 'Login successful' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: error.message });
    }
  });

export default authRouter;
