const { validationResult } = require('express-validator')

exports.createBlog = (req, res, next) => {
  const errors = validationResult(req)
  
  if(!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array()
    })
  } else {
    const { img, title, bodyBlog } = req.body
    const result = {
    message: "create blog successfully",
    data: { 
      post_id : 1,  
      created_at : "12/12/2021",
      author : {
        uid : 1,
        name : "john doe", 
      },
      title, img, bodyBlog,
    }
  }
  res.status(201).json(result)
  next()
  }
}

exports.readBlog = (req, res, next) => {
  res.json([
    {
      "img": "https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "title": "how to design your product that can grow 20x",
      "date": "18 juli 2021",
      "author": "jenny wilson",
      "desc": "uctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor"
    },
    {
      "img": "https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "title": "email Love- email inspiration template and discovery",
      "date": "18 juli 2021",
      "author": "Irfan fauzi",
      "desc": "uctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor"
    },
    {
      "img": "https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "title": "the more important the work, the more important the rest",
      "date": "18 juli 2021",
      "author": "zlatan ibrahimovic",
      "desc": "uctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor"
    },
  ])
  next
}