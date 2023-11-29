const express = require("express");
const dotenv = require('dotenv');
const products = require("./data/products");
const users = require("./data/users");


const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get("/api/products", (req, res) => {
    res.json(products);
  });
  
  app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  app.get('/api/users', (req,res) => {
    res.json(users);
  })
  const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});