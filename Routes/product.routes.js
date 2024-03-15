const express = require('express');
const productroute = express.Router();
const {Product} = require('../Model/product.model');

// POST route to create a new product
productroute.post('/', async (req, res) => {
  try {
   
    const newProduct = new Product(req.body);

    
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    
    res.status(400).json({ message: error.message });
  }
});


// GET route to fetch all products
productroute.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  productroute.get('/category/:categoryName', async (req, res) => {
    try {
      const categoryName = req.params.categoryName;
      const products = await Product.find({ category: categoryName });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports ={productroute}