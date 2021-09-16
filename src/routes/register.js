const express = require('express')

const registerController = require('../controllers/register')
const router = express.Router()

router.post('/register', registerController.createRegister)
router.get('/register', registerController.readRegister)

module.exports = router