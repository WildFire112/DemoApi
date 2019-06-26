const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.header('auth-token')
  if(!token) return res.status(401).send('Access Denied')
  
  try {
    console.log('here1')
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    console.log('here2')
    req.user = verified
    next()
  } catch (err) {
    
    console.log('here')
    res.status(400).send('Invalid Token')
  }
}