const express = require('express')
const { body } = require('express-validator')

const blogController = require('../controllers/blog')
const router = express.Router()

router.post('/post', [
  body('bodyBlog', 'postBlog at least have 10 characters').isLength({min: 7}), 
  body('title', 'title at least have 5 characters').isLength({min: 7})], 
  blogController.createBlog)

router.get('/posts', blogController.readBlog)
router.get('/post', blogController.getBlogPostById)

module.exports = router