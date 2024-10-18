const db = require('../db/data/test-data/users');

const getUserById = async (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]);
};

const createUser = async (userData) => {
  const { name, email, password } = userData;
  return db.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );
};

const updateUser = async (id, userData) => {
  const { name, email, password } = userData;
  return db.query(
    'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
    [name, email, password, id]
  );
};

const deleteUser = async (id) => {
  return db.query('DELETE FROM users WHERE id = $1', [id]);
};

module.exports = { getUserById, createUser, updateUser, deleteUser }