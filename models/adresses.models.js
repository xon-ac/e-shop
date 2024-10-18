const db = require('../db');

const getAddressById = async (id) => {
  return db.query('SELECT * FROM addresses WHERE id = $1', [id]);
};

const getAllAddresses = async () => {
  return db.query('SELECT * FROM addresses');
};

const createAddress = async (addressData) => {
  const { user_id, street, city, postcode } = addressData;
  return db.query(
    'INSERT INTO addresses (user_id, street, city, postcode) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, street, city, postcode]
  );
};

const updateAddress = async (id, addressData) => {
  const { street, city, postcode } = addressData;
  return db.query(
    'UPDATE addresses SET street = $1, city = $2, postcode = $3 WHERE id = $4 RETURNING *',
    [street, city, postcode, id]
  );
};

const deleteAddress = async (id) => {
  return db.query('DELETE FROM addresses WHERE id = $1', [id]);
};

module.exports = { getAddressById, getAllAddresses, createAddress, updateAddress, deleteAddress };