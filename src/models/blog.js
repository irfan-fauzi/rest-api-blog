const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPost = new Schema({
  image: {
    type: String,
    required: true
  }, 
  title: {
    type: String,
    required: true
  },
  bodyBlog: {
    type: String,
    required: true
  },
  author: {
    type: Object,
    required: true
  },
  
}, {
  timestamps: true
})

module.exports = mongoose.model('BlogPost', BlogPost)