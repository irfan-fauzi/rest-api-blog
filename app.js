const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const productRoutes = require('./src/routes/product')

app.use(bodyParser.json()) // typeJSON

// rules / aturan jika komputer lain / url selain localhost:3000 mengakses data ini
app.use((req, res, next) => {

  // setHeader(izinkan akses url end-poin, url apa saja yang boleh akses?)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // setHeader(izinkan akses Method, method apa saja yang boleh di akses oleh url lain?)
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS')
  // tipe konten JSON
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})


app.use('/', productRoutes)
// Create a Server
app.listen(PORT)
