const express = require('express')

const productController = require('../controllers/product')
const router = express.Router()


 
// create application/x-www-form-urlencoded parser

router.post('/product', productController.createProduct)
router.get('/product', productController.readProduct)

module.exports = router 