exports.createRegister = (req, res, next) => {
  const { name, email, password } = req.body
  const result = {
    message: "register successfully",
    data: { uid : 1, name, email, password }
  }
  res.status(201).json(result)
  next()
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