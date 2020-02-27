const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
  const { body, body: { email } } = req;

  User.findOne({ email })
    .exec()
    .then(user => {
      bcrypt.compare(body.currentPassword, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        }
        if (isMatch) {
          return next(null, user);
        } else {
          res
            .status(401)
            .json({ errors: [{ msg: 'Current password incorrect' }] });
        }
      });
    })
    .catch(err => next(err));
};
