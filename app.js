const express = require('express')
const app = express()
const PORT = 3000
const productRoutes = require('./src/routes/product')

// router



app.use('/', productRoutes)
// Create a Server
app.listen(PORT)
