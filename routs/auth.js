const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator/check');


// Register
router.post('/register', [
  check('name', "Введите имя").isLength({ min: 2, max: 16 }),
  check('idName', "Введите правильный ID").isLength({ min: 6, max: 16 }),
  check('email', "Введите правильный e-mail").isEmail(),
  check('password', "Введите пароль больше 6 символов").isLength({ min: 6, max: 24 })
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
console.log(1)
  if (req.body.password !== req.body.repeatPassword)
    return res.status(400).json({ errors: [{ param: "repeatPassword", msg: "Пароли не совпадают" }] })
console.log(2)
  const idNameExist = await User.findOne({ idName: req.body.idName })
  if (idNameExist) return res.status(400).json({ errors: [{ param: "idName", msg: "ID уже занят" }] })
console.log(3)
  // Checking if the user is already in database
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).json({ errors: [{ param: "email", msg: "E-mail уже занят" }] })
console.log(4)
  // Hash the password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)
console.log(5)
  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    idName: req.body.idName,
    avatar: '',
    header: ''
  })

  try {
    const savedUser = await user.save()
    console.log(6)
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    console.log(7)
    return res.json({
      user: {
        name: savedUser.name,
        idName: savedUser.idName,
        email: savedUser.email,
        status: savedUser.status,
        header: user.header,
        avatar: user.avatar,
        _id: savedUser._id
      },
      token
    })
  } catch (err) {
    return res.status(400).send(err)
  }

})

// Login
router.post('/login', [
  check('email', "Введите правильный e-mail").isEmail(),
  check('password', "Требуеться пароль").not().isEmpty()
], async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
console.log(3)
  // Checking if the user is already in database
  const user = await User.findOne({ email: req.body.email })
  console.log(4)
  if (!user) return res.status(400).json({ errors: [{ param: "emailOrPassword", msg: "Неверный e-mail или пароль" }] })
console.log(1)
  // Checking password
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).json({ errors: [{ param: "emailOrPassword", msg: "Неверный e-mail или пароль" }] })
console.log(2)
  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.json({
    user: {
      name: user.name,
      idName: user.idName,
      email: user.email,
      status: user.status,
      header: user.header,
      avatar: user.avatar,
      _id: user._id
    },
    token
  })
})


module.exports = router
