const express = require('express');
// const { connection } = require("./db");
const mongoose = require("mongoose")
require("dotenv").config();
const port = process.env.PORT || 8000;
const cors = require("cors");
const { productroute } = require("./Routes/product.routes");
const { cartroute } = require("./Routes/cart.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productroute);
app.use('/cart', cartroute);

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js Express app!');
});

// Call connection function before listen
app.listen(port, async () => {
  try {
    if (process.env.mongoURL) {
      await mongoose.connect(process.env.mongoURL);
      console.log("Connected to Database");
    }
  } catch (error) {
    if (error) {
      console.log({ message: "Unable to Connect to DB", error: error });
    }
  }
  console.log(`Server running on Port ${port} - http://localhost:${port || 8080}/`);
});
