const db = require('../db');

const getOrderById = async (id) => {
  return db.query('SELECT * FROM orders WHERE id = $1', [id]);
};

const getAllOrders = async () => {
  return db.query('SELECT * FROM orders');
};

const createOrder = async (orderData) => {
  const { user_id, product_ids, total_price, status } = orderData;
  return db.query(
    'INSERT INTO orders (user_id, product_ids, total_price, status) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, product_ids, total_price, status]
  );
};

const updateOrder = async (id, orderData) => {
  const { product_ids, total_price, status } = orderData;
  return db.query(
    'UPDATE orders SET product_ids = $1, total_price = $2, status = $3 WHERE id = $4 RETURNING *',
    [product_ids, total_price, status, id]
  );
};

const deleteOrder = async (id) => {
  return db.query('DELETE FROM orders WHERE id = $1', [id]);
};

module.exports = { getOrderById, getAllOrders, createOrder, updateOrder, deleteOrder };