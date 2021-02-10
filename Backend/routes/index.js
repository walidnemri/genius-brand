const express = require('express');
const router = express.Router()
const productsRoute = require('./products.routes')
const categoriesRoute = require('./categories.routes')

router.use('/products', productsRoute)
router.use('/categories', categoriesRoute)

module.exports = router