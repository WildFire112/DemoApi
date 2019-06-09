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
        email: data.email,
        status: data.status,
        _id: data._id
      }
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(400).json({ errors: err })
    })
})

router.get('/:idName', (req, res) => {
  const idName = req.params.idName
  console.log(idName)

  User.findOne({ idName })
    .then(data => {
      const user = {
        name: data.name,
        idName: data.idName,
        status: data.status,
        _id: data._id,
        header: data.header,
        avatar: data.avatar
      }
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(400).json({ err: 'Пользователь не найден' })
    })
})

router.post('/header', verify, (req, res) => {
  const uid = req.user._id

  const imgData = req.body.data
  console.log(imgData)
  User.findByIdAndUpdate({ _id: uid }, { $set: { header: imgData } }, {returnNewDocument: true})
    .then(res => {
      res.status(200).json(res)
    })
    .catch(err => {
      res.status(400).json({ err: 'Что-то пошло не так' })
    })
})


module.exports = router
