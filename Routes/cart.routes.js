const express = require('express');
const cartroute = express.Router();
const {CartItem} = require('../Model/cart.model');

// POST route to create a new product
cartroute.post('/', async (req, res) => {
  try {
   
    const newProduct = new CartItem(req.body);

    
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    
    res.status(400).json({ message: error.message });
  }
});


cartroute.get('/', async (req, res) => {
    try {
      const products = await CartItem.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  cartroute.patch('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const { quantity } = req.body;
  
      // Validate quantity
      if (quantity <= 0) {
        return res.status(400).json({ message: 'Quantity must be greater than 0' });
      }
  
      // Find the item by ID and update the quantity
      const updatedItem = await CartItem.findByIdAndUpdate(id, { quantity });
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  cartroute.delete('/:id', async(req,res)=>{

    try {
        const id = req.params.id;
        // Find the cart item by ID and delete it
        const deletedItem = await CartItem.findByIdAndDelete(id);
        if (!deletedItem) {
          return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json({ message: 'Cart item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  })

  module.exports ={cartroute}