const reviewModel = require('../models/reviews');

const getReviewsByProductId = async (req, res) => {
  try {
    const productId = parseInt(req.params.productId, 10);
    const { rows } = await reviewModel.getReviewsByProductId(productId);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.id, 10);
    const { rows } = await reviewModel.getReviewById(reviewId);
    const review = rows[0];

    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createReview = async (req, res) => {
  try {
    const newReview = req.body;
    const { rows } = await reviewModel.createReview(newReview);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.id, 10);
    const { rows } = await reviewModel.updateReview(reviewId, req.body);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.id, 10);
    await reviewModel.deleteReview(reviewId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getReviewsByProductId, getReview, createReview, updateReview, deleteReview };