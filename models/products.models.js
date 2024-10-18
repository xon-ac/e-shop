const db = require('../db/data/test-data/products');

const getProductById = async (id) => {
  return db.query('SELECT * FROM products WHERE id = $1', [id]);
};

const getAllProducts = async () => {
  return db.query('SELECT * FROM products');
};

const createProduct = async (productData) => {
  const { name, description, price, stock } = productData;
  return db.query(
    'INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, price, stock]
  );
};

const updateProduct = async (id, productData) => {
  const { name, description, price, stock } = productData;
  return db.query(
    'UPDATE products SET name = $1, description = $2, price = $3, stock = $4 WHERE id = $5 RETURNING *',
    [name, description, price, stock, id]
  );
};

const deleteProduct = async (id) => {
  return db.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = { getProductById, getAllProducts, createProduct, updateProduct, deleteProduct };