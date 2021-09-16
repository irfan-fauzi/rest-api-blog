exports.createRegister = (req, res, next) => {
  console.log(req.body)
  res.json({
    message: "createAccount successfully",
    data: {
      id: 1,
      userName: "irfan fauzi",
      email: "irfan@yahoo.com",
      password: "12345"
    }
  })
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