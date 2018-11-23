const mongoose = require('mongoose');

//user schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },   
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
  }   
});

module.exports = mongoose.model('User', UserSchema);