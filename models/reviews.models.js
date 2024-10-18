const db = require('../db/data/test-data/reviews');

const getReviewById = async (id) => {
  return db.query('SELECT * FROM reviews WHERE id = $1', [id]);
};

const getReviewsByProductId = async (productId) => {
  return db.query('SELECT * FROM reviews WHERE product_id = $1', [productId]);
};

const createReview = async (reviewData) => {
  const { user_id, product_id, rating, comment } = reviewData;
  return db.query(
    'INSERT INTO reviews (user_id, product_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, product_id, rating, comment]
  );
};

const updateReview = async (id, reviewData) => {
  const { rating, comment } = reviewData;
  return db.query(
    'UPDATE reviews SET rating = $1, comment = $2 WHERE id = $3 RETURNING *',
    [rating, comment, id]
  );
};

const deleteReview = async (id) => {
  return db.query('DELETE FROM reviews WHERE id = $1', [id]);
};

module.exports = { getReviewById, getReviewsByProductId, createReview, updateReview, deleteReview };