const app = require("../app");
const request = require('supertest');
const users = require('./testData/users');

const products = require('../db/data/test-data/products');
const users = require('../db/data/test-data/users');
const reviews = require('../db/data/test-data/reviews');
const orders = require('../db/data/test-data/orders');
const addresses = require('../db/data/test-data/adresses');

describe('Product Endpoints', () => {
  it('should fetch all products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(products.length);
  });

  it('should fetch a single product by ID', async () => {
    const res = await request(app).get('/products/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', products[0].name);
  });

  it('should return 404 if product not found', async () => {
    const res = await request(app).get('/products/999'); 
    expect(res.statusCode).toEqual(404);
  });
});

describe('User Endpoints', () => {
  it('should fetch user profile by ID', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', users[0].name);
    expect(res.body).toHaveProperty('email', users[0].email);
  });

  it('should return 404 if user not found', async () => {
    const res = await request(app).get('/users/999');
    expect(res.statusCode).toEqual(404);
  });
});

describe('Address Endpoints', () => {
  it('should fetch all addresses for a user', async () => {
    const res = await request(app).get('/users/1/addresses');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(2); 
    expect(res.body[0]).toHaveProperty('postalCode', addresses[0].postalCode);
  });

  it('should return 404 if user has no addresses', async () => {
    const res = await request(app).get('/users/999/addresses');
    expect(res.statusCode).toEqual(404);
  });
});

describe('Orders Endpoints', () => {
  it('should fetch all orders for a user', async () => {
    const res = await request(app).get('/users/1/orders');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should place a new order', async () => {
    const newOrder = {
      userId: 2,
      products: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 2 }
      ],
      totalPrice: 59.99,
      deliveryOption: "express"
    };
    const res = await request(app).post('/orders').send(newOrder);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should return 404 if user has no orders', async () => {
    const res = await request(app).get('/users/999/orders');
    expect(res.statusCode).toEqual(404);
  });
});

