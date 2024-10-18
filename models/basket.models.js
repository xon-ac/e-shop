const db = require('../db/data/test-data/');

const getBasketByUserId = async (userId) => {
  return db.query('SELECT * FROM baskets WHERE user_id = $1', [userId]);
};

const addProductToBasket = async (userId, productId) => {
  return db.query(
    'INSERT INTO baskets (user_id, product_id) VALUES ($1, $2) RETURNING *',
    [userId, productId]
  );
};

const removeProductFromBasket = async (userId, productId) => {
  return db.query(
    'DELETE FROM baskets WHERE user_id = $1 AND product_id = $2 RETURNING *',
    [userId, productId]
  );
};

const clearBasket = async (userId) => {
  return db.query('DELETE FROM baskets WHERE user_id = $1', [userId]);
};

module.exports = { getBasketByUserId, addProductToBasket, removeProductFromBasket, clearBasket };