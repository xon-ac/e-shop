const express = require('express');
const userRoutes = require('./routes/users-router');
const productRoutes = require('./routes/products-router');
const addressRoutes = require('./routes/adresses-router');
const orderRoutes = require('./routes/orders-router');
const reviewRoutes = require('./routes/reviews.router');
const basketRoutes = require('./routes/basket-router');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/users/:userId/addresses', addressRoutes);
app.use('/users/:userId/orders', orderRoutes);
app.use('/products/:productId/reviews', reviewRoutes);
app.use('/basket', basketRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Online Store API!');
});

module.exports = app;