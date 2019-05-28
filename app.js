const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
// Import Routes
const postsRoute = require('./routs/posts')
const authRoute = require('./routs/auth')

dotenv.config()

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to db!')
)

// Middlewares
app.use(bodyParser.json())

// Route Middlewares
app.use('/api/posts', postsRoute)
app.use('/api/user', authRoute)

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

app.listen(3000, () => { console.log('Server Up and running') })