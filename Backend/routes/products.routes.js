const express = require("express");
const controllers = require('../controllers/products.controllers')

const router = express.Router()

router.get("/", controllers.index)

module.exports = router