const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
//middlewares
app.use(express.static('uploads'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('uploads'))

if (process.env.NODE_ENV === 'development')
  app.use(cors({ origin: process.env.CLIENT_URL }))





//database connection
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


//routes
app.use('/api/v1', require('./routes/galleryRouter'))

//server
app.listen(
  process.env.PORT,
  () => console.log(`app listening on port ${process.env.PORT}`)
)