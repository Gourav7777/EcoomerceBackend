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
mongoose.connect("mongodb+srv://gourav:bundiwal@cluster0.ijznaqx.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
