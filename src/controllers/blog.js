const { validationResult } = require('express-validator')
require('../utils/mongoose-module')
const BlogPost = require('../models/blog')

exports.createBlog = (req, res, next) => {
  const errors = validationResult(req)
  
  if(!errors.isEmpty()){
    const err = new Error('Input value tidak sesuai')
    err.errorStatus = 400
    err.data = errors.array()
    throw err
  } else {

    const { image, title, bodyBlog } = req.body  
    const blogPost = new BlogPost({ 
      image, 
      title, 
      bodyBlog,
      author: { uid: 1, name: "ahmad-albar" }
      })
    blogPost.save().then()    
    const result = {
      message: "create blog successfully",
      blogPost
    }
  res.status(201).json(result)
  next()
  }
}

exports.readBlog = async(req, res, next) => {
  try {
    const allPosts = await BlogPost.find()
    res.json({
      message: "read post successfully",
      allPosts
    })
    next()
  } catch (error) {
    console.log(`ada masalah: ${error}`)
  }
}