const express = require('express');
const basketController = require('../controllers/basket.controllers');
const router = express.Router();

router.get('/:userId', basketController.getBasket);
router.post('/:userId', basketController.addProductToBasket);
router.delete('/:userId/product', basketController.removeProductFromBasket);
router.delete('/:userId', basketController.clearBasket);

module.exports = router;