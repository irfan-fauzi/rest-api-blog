exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create product successfull",
    data: {
      id: 1,
      name: "sari gandum",
      price: 10000
    }
  })
  next()
}

exports.readProduct = (req, res, next) => {
  res.json({
    message: "get all product successfull",
    data: [
      {
        id: 1,
        name: "sari gandum",
        price: 10000
      },
      {
        id: 2,
        name: "Roma kelapa",
        price: 10000
      }      
    ]
  })
  next()
}