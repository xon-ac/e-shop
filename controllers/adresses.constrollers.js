const addressModel = require('../models/addresses');

const getAllAddresses = async (req, res) => {
  try {
    const { rows } = await addressModel.getAllAddresses();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getAddress = async (req, res) => {
  try {
    const addressId = parseInt(req.params.id, 10);
    const { rows } = await addressModel.getAddressById(addressId);
    const address = rows[0];

    if (!address) return res.status(404).json({ error: 'Address not found' });
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const createAddress = async (req, res) => {
  try {
    const newAddress = req.body;
    const { rows } = await addressModel.createAddress(newAddress);
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateAddress = async (req, res) => {
  try {
    const addressId = parseInt(req.params.id, 10);
    const { rows } = await addressModel.updateAddress(addressId, req.body);
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const addressId = parseInt(req.params.id, 10);
    await addressModel.deleteAddress(addressId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getAllAddresses, getAddress, createAddress, updateAddress, deleteAddress };