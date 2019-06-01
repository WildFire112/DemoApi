const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 16
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  },
  idName: {
    type: String,
    required: true,
    min: 6,
    max: 16
  },
  status: {
    type: String,
    required: false,
    max: 250,
    default: ''
  }
})


module.exports = mongoose.model('Users', userSchema)