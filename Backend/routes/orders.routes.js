const express = require("express");
const controllers = require('../controllers/orders.controllers')

const router = express.Router()

router.get("/", controllers.index)
router.get("/:id", controllers.show)
router.post("/",controllers.create)
router.put("/:id", controllers.update)
router.delete("/:id", controllers.destroy)

module.exports = router