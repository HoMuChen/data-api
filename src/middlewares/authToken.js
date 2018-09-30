const jwt = require('jsonwebtoken');

const { secret } = require('../../configs/server');

module.exports = (req, res, next) => {
  const authorization = req.get('authorization');
  const token = authorization && authorization.split(' ')[0] === 'Bearer'
                              && authorization.split(' ')[1]

  if(!token) {
    return res.status(401).send('Unauthorized');
  }

  jwt.verify(token, secret, (err, decoded) => {
    if(err) {
      return res.status(401).send('Unauthorized');
    }else {
      req.user = decoded;
      next();
    }
  })
}
