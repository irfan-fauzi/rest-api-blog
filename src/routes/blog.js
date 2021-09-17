const express = require('express')
const { body } = require('express-validator')

const blogController = require('../controllers/blog')
const router = express.Router()

router.post('/post', [ body('title', 'title at least have 10 characters').isLength({min: 10}) ] ,blogController.createBlog)
router.get('/post', blogController.readBlog)

module.exports = router