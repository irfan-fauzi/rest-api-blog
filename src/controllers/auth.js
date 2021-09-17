const { validationResult } = require('express-validator')
require('../utils/mongoose-module')
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
    const result = {
      message: "register successfully",
      data: { uid : 1, name, email, password }
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