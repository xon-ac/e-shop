const express = require('express');
const app = express();


const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];

app.get('/products', (req, res) => {
  res.status(200).json({ products });
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id, 10));
  if (!product) return res.status(404).send('Product not found');
  res.status(200).json(product);
});

module.exports = app;