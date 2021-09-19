const express = require('express')
const { body } = require('express-validator')

const blogController = require('../controllers/blog')
const router = express.Router()

// Post new post blog
router.post('/post', [
  body('bodyBlog', 'postBlog at least have 10 characters').isLength({min: 7}), 
  body('title', 'title at least have 5 characters').isLength({min: 7})], 
  blogController.createBlog)

// Update specified blog post
router.put('/post/:postId', [
  body('bodyBlog', 'postBlog at least have 10 characters').isLength({min: 7}), 
  body('title', 'title at least have 5 characters').isLength({min: 7})],
  blogController.updateBlogPost)

// Get all data blog post
router.get('/posts', blogController.getAllblogPost)

// Get specified post blog
router.get('/post/:postId', blogController.getBlogPostById)

// Delete specified post in Blog
router.delete('/post/:postId', blogController.deleteBlogPost) 


module.exports = router