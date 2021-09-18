const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const PORT = 3000

const authRouter = require('./src/routes/auth')
const blogRouter = require('./src/routes/blog')

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, Math.random() + file.originalname )
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/png' || 
     file.mimetype === 'image/jpg' ||
     file.mimetype === 'image/jpeg'){
    cb(null, true)
  } else {
    cb(null, false)
  }
}


app.use(bodyParser.json()) // typeJSON
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))

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

app.use('/v1/auth', authRouter)
app.use('/v1/blog', blogRouter)

// default error
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500
  const message = error.message
  const data = error.data

  res.status(status).json({ message , data })
})


// Create a Server
app.listen(PORT)
