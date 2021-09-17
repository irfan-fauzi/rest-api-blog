const express = require('express')
const { body} = require('express-validator')

const authController = require('../controllers/auth')
const router = express.Router()

router.post('/register', [body('email', 'email tidak valid').isEmail()] ,authController.createRegister)
router.get('/register', authController.readRegister)

module.exports = router