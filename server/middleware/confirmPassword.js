const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
  const { user, body } = req;
  /*
        I think here we can access to the req.body.user
        or directly to req.user provider by passport.js 
        from the previous middleware
   */

  User.findOne({ email: user.email })
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
