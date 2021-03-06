const jwt = require('jsonwebtoken');

function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
}

module.exports = (req, res, next) => {
  let token = req.headers.authorization
    ? req.headers.authorization.split(' ')[1]
    : '';
  if (token) {
    verifyJWTToken(token)
      .then(decodedToken => {
        req.user = decodedToken.data;
        next();
      })
      .catch(() => {
        res.status(401).json({
          errors: [
            {msg: 'Unsuccessful login, please check your credentials user'},
          ],
        });
      });
  } else {
    res.status(401).json({
      errors: [{msg: 'Unsuccessful login, please check your credentials user'}],
    });
  }
};
