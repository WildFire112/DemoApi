const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const formData = require('express-form-data')
// Import Routes
const postsRoute = require('./routs/posts')
const authRoute = require('./routs/auth')
const userRoute = require('./routs/user')


dotenv.config()

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (err) =>
  console.log('connected to db!\nconnection errors:', err)
)

// Middlewares
app.use(bodyParser.json())
app.use(formData.parse())

// Route Middlewares
app.use('/api/posts', postsRoute)
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.listen(5000, () => { console.log('Server Up and running') })
