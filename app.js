const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Use port from environment variable or 3000 as default

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js Express app!');
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
