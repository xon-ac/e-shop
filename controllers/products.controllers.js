const productModel = require('../models/products');

const getAllProducts = async (req, res) => {
  try {
    const { rows } = await productModel.getAllProducts();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const { rows } = await productModel.getProductById(productId);
    const product = rows[0];

    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const { rows } = await productModel.createProduct(newProduct);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const { rows } = await productModel.updateProduct(productId, req.body);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    await productModel.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct };