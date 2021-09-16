const express = require('express')

const authController = require('../controllers/auth')
const router = express.Router()

router.post('/register', authController.createRegister)
router.get('/register', authController.readRegister)

module.exports = router