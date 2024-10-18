const basketModel = require('../models/basket.models');

const getBasket = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const { rows } = await basketModel.getBasketByUserId(userId);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const addProductToBasket = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const { productId } = req.body;
    const { rows } = await basketModel.addProductToBasket(userId, productId);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const removeProductFromBasket = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const { productId } = req.body;
    const { rows } = await basketModel.removeProductFromBasket(userId, productId);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const clearBasket = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    await basketModel.clearBasket(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getBasket, addProductToBasket, removeProductFromBasket, clearBasket };