const express = require('express');

const router = express.Router();
const { check } = require('express-validator/check');
const passport = require('passport');
const upload = require('../config/multer');


const UserController = require('../controllers/user');
const validations = require('../validations');
const confirmPassword = require('../middleware/confirmPassword');


router.get('/', UserController.all);

/* POST login. */
router.post('/login',validations.login(check), UserController.login);

router.post('/register', upload.single('userImage'), validations.register(check), UserController.register);

router.get('/profile', passport.authenticate('jwt', { session: false }), UserController.profile);

router.get('/logout', UserController.logout);

router.put('/changepassword', passport.authenticate('jwt', { session: false }), confirmPassword, UserController.changePassword);

router.put('/:id',passport.authenticate('jwt', { session: false }), UserController.edit);

router.delete('/:id',passport.authenticate('jwt', { session: false }), UserController.delete);

module.exports = router;
