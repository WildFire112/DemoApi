const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
  const uid = req.user._id
  User.findById(uid)
    .then(data => {
      const user = {
        name: data.name,
        idName: data.idName,
        status: data.status,
        _id: data._id
      }
      res.status(200).send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })

})


module.exports = router
