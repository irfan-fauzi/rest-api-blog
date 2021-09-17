const { validationResult } = require('express-validator')

exports.createRegister = (req, res, next) => {
  
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array()
    })
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

exports.readRegister = (req, res, next) => {
  res.json({
    message: "readAccount successfully",
    data: {
      id: 1,
      userName: "irfan fauzi",
      email: "irfan@yahoo.com",
      password: "12345"
    }
  })
  next()
}