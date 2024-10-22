const format = require("pg-format");
const db = require("../db/connection");

const seed = async () => {
  try {
    await db.query('DROP TABLE IF EXISTS reviews');
    await db.query('DROP TABLE IF EXISTS orders');
    await db.query('DROP TABLE IF EXISTS addresses');
    await db.query('DROP TABLE IF EXISTS products');
    await db.query('DROP TABLE IF EXISTS users');

    await db.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      )
    `);

    await db.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT
      )
    `);

    await db.query(`
      CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        userId INT REFERENCES users(id) ON DELETE CASCADE,
        street VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        postalCode VARCHAR(20) NOT NULL,
        country VARCHAR(100) NOT NULL
      )
    `);

    await db.query(`
      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        userId INT REFERENCES users(id) ON DELETE CASCADE,
        totalPrice DECIMAL(10, 2) NOT NULL,
        deliveryOption VARCHAR(100)
      )
    `);

    await db.query(`
      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        productId INT REFERENCES products(id) ON DELETE CASCADE,
        userId INT REFERENCES users(id) ON DELETE CASCADE,
        rating INT CHECK (rating >= 1 AND rating <= 5),
        comment TEXT
      )
    `);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    db.end();
  }
};

seed();