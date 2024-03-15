const mongoose = require('mongoose');


const cartItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      rating: {
        rate: {
          type: Number,
          required: true
        },
        count: {
          type: Number,
          required: true
        }
      },
        quantity: {
        type: Number,
        required: true,
        default: 1  
      }
});


const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = { CartItem };
