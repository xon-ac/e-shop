const userModel = require('../models/users.models');

const getUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { rows } = await userModel.getUserById(userId);
    const user = rows[0];

    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const { rows } = await userModel.createUser(newUser);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { rows } = await userModel.getUserById(userId);
    const user = rows[0];

    if (!user) return res.status(404).json({ error: 'User not found' });

    Object.assign(user, req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { rows } = await userModel.getUserById(userId);
    const user = rows[0];

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };