require('dotenv').config({ path: './../.env' });
const mongoose = require('mongoose');

module.exports = {
  secret: process.env.SECRET,
  port: process.env.PORT,
  mongoose,
  connect:() => {
    mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useCreateIndex: true, });
  },
  disconnect: (done)=> {
    mongoose.disconnect(done);
  }
};