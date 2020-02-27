const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator/check');

const User = require('../models/user');
const config = require('../config/db');

function jwtSignUser(user) {
  const EIGHT_HOURS = 60 * 60 * 8;
  return jwt.sign(user, config.secret, {
    expiresIn: EIGHT_HOURS,
  });
}

module.exports = {
  all(req, res) {
    User.find().then(users => {
      if (users.length) {
        res.status(200).json({
          users,
          isAuthenticated: true,
        });
      } else {
        res.status(200).json({
          users: [],
          message: {
            type: 'info',
            text: 'No Users found',
          },
        });
      }
    });
  },

  register(req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }

    const {email, password, firstName, lastName} = req.body;
    User.findOne({email})
      .then(user => {
        if (user) {
          return res.status(403).json({
            errors: [{msg: 'Email already in use'}],
          });
        }
        const newUser = new User({
          email,
          password,
          firstName,
          lastName,
        });
        if (req.file) {
          newUser.userImage = req.file.path;
        }
        bcrypt.genSalt(10, (_, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              console.log('BCRYPT HASH ERROR', err);
            }
            newUser.password = hash;

            newUser.save(err => {
              if (err) {
                res.status(500).json({
                  errors: [{msg: 'Problem saving user'}],
                  err,
                });
                throw err;
              } else {
                // login after register
                if (err) throw err;
                const token = `JWT ${jwtSignUser({id: newUser._id})}`;
                res.status(201).json({
                  user: newUser,
                  token,
                  isAuthenticated: true,
                  message: {
                    type: 'success',
                    text: `User "${newUser.firstName}" created successfully`,
                  },
                });
              }
            });
          });
        });
      })
      .catch(err => {
        throw err;
      });
  },

  login(req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    User.findOne({email}).then(user => {
      if (!user) {
        res.status(400).json({
          errors: [{msg: 'Unsuccessful login, please check your credentials user'}],
        });
      }

      bcrypt.compare(password, user.password).then(result => {
        if (result) {
          const token = `JWT ${jwtSignUser({id: user._id})}`;
          return res.status(200).json({
            user,
            token,
            isAuthenticated: true,
            message: {
              type: 'success',
              text: `Hi ${user.firstName}, you are successfully logged in`,
            },
          });
        } else {
          res.status(400).json({
            errors: [
              {msg: 'Unsuccessful login, please check your credentials cred'},
            ],
          });
        }
      });
    });
  },

  edit(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(user =>
        res.status(200).json({
          user,
          message: {
            type: 'success',
            text: 'User successfully updated',
          },
        })
      )
      .catch(err => res.send({err: err}));
  },

  delete(req, res) {
    User.findByIdAndRemove(req.params.id)
      .then(user =>
        res.status(200).json({
          user,
          message: {
            type: 'success',
            text: `User "${user.firstName}" deleted successfully`,
          },
        })
      )
      .catch(err => res.send({err: err}));
  },

  changePassword(req, res) {
    const {newPassword} = req.body;
    User.findById(req.body._id).then(user => {
      bcrypt.genSalt(10, (_, salt) => {
        bcrypt.hash(newPassword, salt, (err, hash) => {
          if (err) {
            console.log('BCRYPT HASH ERROR', err);
          }
          user.password = hash;
          user.save(err => {
            if (err) {
              res.status(500).json({
                errors: [{msg: 'Problem saving user'}],
                err,
              });
              throw err;
            } else {
              res.status(200).json({
                user,
                message: {
                  type: 'success',
                  text: 'Password changed successfully',
                },
              });
            }
          });
        });
      });
    });
  },
};
