const { validationResult } = require('express-validator')
require('../utils/mongoose-module')
const BlogPost = require('../models/blog')

// POST
exports.createBlog = async(req, res, next) => {
  const errors = validationResult(req)
  
  if(!errors.isEmpty()){
    const err = new Error('Input value tidak sesuai')
    err.errorStatus = 400
    err.data = errors.array()
    throw err
  } else {
    if(!req.file){
      const err = new Error('Gambar belum di upload')
      err.errorStatus = 400
      err.data = errors.array()
      throw err
    }
    
    const title = req.body.title
    const bodyBlog = req.body.bodyBlog
    const image = req.file.path

    const blogPost = new BlogPost({ 
      image, title, bodyBlog,
      author: { uid: 1, name: "ahmad-albar" }
      })

    const blogpost = await blogPost.save()    
    const result = {
      message: "create blog successfully",
      blogpost
    }
    res.status(201).json(result)
    next()
  }
}

// GET BY ID
exports.getBlogPostById = async(req, res, next) => {
  try {
    const postId = req.params.postId
    const targetPost = await BlogPost.findById(postId)
    if(!targetPost){
      const err = new Error('id tidak ada')
      err.errorStatus = 404
      err.data = errors.array()
      throw err
    }
    res.status(200).json({message: "read specify post id successfully", targetPost})
    next()
  } catch (error) {
    next(error)
  }
}

// GET ALL DATA
exports.getAllblogPost = async(req, res, next) => {
  try {
    const allPosts = await BlogPost.find()
    res.json({message: "read all post successfully", allPosts})
    next()
  } catch (error) {
    console.log(`ada masalah : ${error}`)
  }
}

// PUT TO EDIT / UPDATE
exports.updateBlogPost = (req,res, next) => {
  try {
    
  } catch (error) {
    
  }
}