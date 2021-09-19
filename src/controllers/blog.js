const { validationResult } = require('express-validator')
require('../utils/mongoose-module')
const BlogPost = require('../models/blog')

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

    const bp = await blogPost.save()    
    const result = {
      message: "create blog successfully",
      bp
    }
    res.status(201).json(result)
    next()
  }
}

exports.getBlogPostById = () => {

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