const express = require('express');
const router = express.Router()
const productsRoute = require('./products.routes')
const orderRoute = require("./orders.routes")

router.use('/products', productsRoute);
router.use('/orders',orderRoute);

module.exports = router