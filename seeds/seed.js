const db = require('./db'); // Adjust path based on your structure

const seed = async () => {
  try {
    // Example: Drop existing tables (optional, based on your requirements)
    await db.query('DROP TABLE IF EXISTS users');
    await db.query('DROP TABLE IF EXISTS products');
    await db.query('DROP TABLE IF EXISTS addresses');
    await db.query('DROP TABLE IF EXISTS orders');
    await db.query('DROP TABLE IF EXISTS reviews');

    // Create tables (adjust SQL as needed for your schema)
    await db.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(100)
      )
    `);

    await db.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        price DECIMAL(10, 2),
        description TEXT
      )
    `);

    await db.query(`
      CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        userId INT REFERENCES users(id),
        street VARCHAR(255),
        city VARCHAR(100),
        postalCode VARCHAR(20),
        country VARCHAR(100)
      )
    `);

    await db.query(`
      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        userId INT REFERENCES users(id),
        totalPrice DECIMAL(10, 2),
        deliveryOption VARCHAR(100)
      )
    `);

    await db.query(`
      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        productId INT REFERENCES products(id),
        userId INT REFERENCES users(id),
        rating INT,
        comment TEXT
      )
    `);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    db.end(); // Close the database connection
  }
};

seed();