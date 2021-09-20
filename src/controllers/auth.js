const { validationResult } = require('express-validator')

const { User } = require('../models/auth')


exports.createRegister = (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    const err = new Error('Input value tidak sesuai')
    err.errorStatus = 400
    err.data = errors.array()
    throw err
  } else {
    const { name, email, password } = req.body
    const users = new User({name, email, password, })
    users.save().then()
    const result = {
      message: "register successfully",
      users
    }
    res.status(201).json(result)
    next()
  }
 
}

exports.readRegister = async(req, res, next) => {
  const allUsers = await User.find()
  res.json({
    message: "readAccount successfully",
    allUsers
  })
  next()
}