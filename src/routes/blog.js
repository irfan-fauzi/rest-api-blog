const express = require('express')
const blogController = require('../controllers/blog')
const router = express.Router()

router.post('/post', blogController.createBlog)
router.get('/post', blogController.readBlog)

module.exports = router