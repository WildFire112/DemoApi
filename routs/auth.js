const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator/check');


// Register
router.post('/register', [
  check('name', "Name is required").isLength({ min: 2, max: 16 }),
  check('idName', "Please enter a valid ID name").isLength({ min: 6, max: 16 }),
  check('email', "Please enter a valid e-mail").isEmail(),
  check('password', "Please enter a password with 6 or more characters").isLength({ min: 6, max: 24 })
], async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const idNameExist = await User.findOne({ idName: req.body.idName })
  if (idNameExist) res.status(400).json({ errors: [{ param: "idName", msg: "ID name already exists" }] })

  // Checking if the user is already in database
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) res.status(400).json({ errors: [{ param: "email", msg: "Email already exists" }] })

  // Hash the password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    idName: req.body.idName
  })

  try {
    const savedUser = await user.save()
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
  } catch (err) {
    res.status(400).send(err)
  }

})

// Login
router.post('/login', [
  check('email', "Please enter valid e-mail").isEmail(),
  check('password', "Password is required").not().isEmpty()
], async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checking if the user is already in database
  const user = await User.findOne({ email: req.body.email })
  if (!user) res.status(400).json({ errors: [{ param: "emailOrPassword", msg: "Email or password is wrong" }] })

  // Checking password
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) res.status(400).json({ errors: [{ param: "emailOrPassword", msg: "Email or password is wrong" }] })

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token)
})


module.exports = router
