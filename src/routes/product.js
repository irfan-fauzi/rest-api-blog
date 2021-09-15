const express = require('express')
const productController = require('../controllers/product')
const router = express.Router()

router.post('/product', productController.createProduct)
router.get('/product', productController.readProduct)

module.exports = router 