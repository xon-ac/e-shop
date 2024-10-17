const app = require("../app");
const request = require('supertest');

const products = require('../db/data/test-data/products');
const users = require('../db/data/test-data/users');
const reviews = require('../db/data/test-data/reviews');
const orders = require('../db/data/test-data/orders');
const addresses = require('../db/data/test-data/adresses');

describe('Product Routes', () => {
  it('should fetch all products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('products');
  });

  it('should fetch a single product by ID', async () => {
    const res = await request(app).get('/products/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });
});