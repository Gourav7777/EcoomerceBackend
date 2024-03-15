const express = require('express');
const { connection } = require("./db")
require("dotenv").config()
const PORT = process.env.PORT || 8000;
const cors = require ("cors")
const {productroute} = require("./Routes/product.routes")
const {cartroute} = require("./Routes/cart.routes")
const app = express();

app.use(cors())
app.use(express.json());

app.use('/products',productroute)

app.use('/cart',cartroute)

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js Express app!');
  });


app.listen(PORT, async() => {
  try {
        
    await connection
    console.log("connected to mongo")
    console.log(`Server is running on port ${PORT}`);

    } catch (error) {
        console.log(error.message)
    }
});
