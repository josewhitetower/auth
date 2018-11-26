const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const databaseConfig = require('./config/db');

databaseConfig.connect();
const db = databaseConfig.mongoose.connection;

//check for DB connection
db.on('open', () => {
  console.log('Connected to MongoDB');
});
//check for DB errors
db.on('error', error => {
  console.log('DATABASE ERROR', error.message);
});
const app = express();

app.use(helmet());
app.use(cors()); // if the front end is in the same server, it's not needed
app.use(express.static(path.join(__dirname, 'build')));
app.use('/uploads', express.static('uploads'));
//BodyParser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Passport config
require('./config/passport')(passport);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//user route
app.use('/api/users', require('./routes/user'));

//404
app.get('*', (req, res) => {
  res.redirect('index.html');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('server running at port ' + databaseConfig.port);
});

module.exports = app;
