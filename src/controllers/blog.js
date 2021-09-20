const { validationResult } = require('express-validator')
const path = require('path')
const fs = require('fs')

const BlogPost = require('../models/blog')


// POST
exports.createBlog = async(req, res, next) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
    const err = new Error('Input value tidak sesuai')
    err.errorStatus = 400
    err.data = errors.array()
    throw err
  } else {
    if(!req.file){
      const err = new Error('Gambar belum di upload')
      err.errorStatus = 422
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
  } catch (error) {
    next(error)
  }
}

// PUT TO EDIT / UPDATE
exports.updateBlogPost = async(req, res, next) => {
  try {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      const err = new Error('Input value tidak sesuai')
      err.errorStatus = 400
      err.data = errors.array()
      throw err
    }
    if(!req.file){
      const err = new Error('Gambar belum di upload')
      err.errorStatus = 422
      err.data = errors.array()
      throw err
    }
    
    const title = req.body.title
    const bodyBlog = req.body.bodyBlog
    const image = req.file.path
    const postId = req.params.postId
    const targetPost = await BlogPost.findById(postId)
  
    targetPost.title = title
    targetPost.bodyBlog = bodyBlog
    targetPost.image = image
    const newPost = await targetPost.save()
    res.status(201).json({message: "data berhasil diupdate", newPost})
    next()
    
  } catch (error) {
    res.status(404).json({message: "error when update post blog", error})
  }
}

// DELETE SPECIFIED BLOG POST
exports.deleteBlogPost = async(req, res, next) => {
  
  try {
    const postId = req.params.postId
    const post = await BlogPost.findById(postId)
    removeImage(post.image)
    const removedPost = await BlogPost.findByIdAndRemove(postId)
    res.status(200).json({
      message: "delete berhasil",
      data: removedPost
    })
    next()
  } catch (error) {
    res.status(404).json({
      message: "error when delete", error
    })
  }
}

// DELETE IMAGE IN THIS REPO
const removeImage = (filePath) => {
  filePath = path.join(__dirname, '../..', filePath)
  fs.unlink(filePath, err => console.log(err))
}

// GET specified Blog BY ID
exports.getBlogPostById = async(req, res, next) => {
  try {
    const postId = req.params.postId
    const targetPost = await BlogPost.findById(postId)
    res.status(200).json({message: "read specify post id successfully", targetPost})
    next()
  } catch (error) {
    res.status(404).json({message: "blog post not found", error})
  }
}

// GET ALL DATA
exports.getAllblogPost = async(req, res, next) => {
  try {
    
    const allPosts = await BlogPost.find()
    if(allPosts.length === 0){
      const err = new Error('Post Blog Belum ada postingan')
      err.errorStatus = 422
      throw err
    } else {
      res.json({message: "read all post successfully", allPosts})
      next()
    }
  } catch (error) {
    next(error)
  }
  
}

