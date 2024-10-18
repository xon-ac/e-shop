const orderModel = require('../models/orders.models');

const getAllOrders = async (req, res) => {
  try {
    const { rows } = await orderModel.getAllOrders();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);
    const { rows } = await orderModel.getOrderById(orderId);
    const order = rows[0];

    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrder = req.body;
    const { rows } = await orderModel.createOrder(newOrder);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);
    const { rows } = await orderModel.updateOrder(orderId, req.body);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);
    await orderModel.deleteOrder(orderId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder };