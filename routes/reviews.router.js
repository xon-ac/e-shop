const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

router.get('/product/:productId', reviewController.getReviewsByProductId);
router.get('/:id', reviewController.getReview);
router.post('/', reviewController.createReview);
router.patch('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;