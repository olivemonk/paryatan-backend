const jwt = require('jsonwebtoken');
 
const generateLogToken = (user) => {
  return jwt.sign(
    {
      _id:user._id,
      name:user.name,
      email:user.email,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '1d',
    }
  )
}

exports.generateLogToken = generateLogToken;