const express = require('express');

const router = express.Router();
const { check } = require('express-validator/check');
const upload = require('../config/multer');

const UserController = require('../controllers/user');
const validations = require('../validations');
const confirmPassword = require('../middleware/confirmPassword');
const verifyJWTToken = require('../middleware/verifyJWTToken');

router.get('/', UserController.all);

/* POST login. */
router.post('/login', validations.login(check), UserController.login);

router.post(
  '/register',
  upload.single('userImage'),
  validations.register(check),
  UserController.register
);

router.get(
  '/profile',
  verifyJWTToken,
  UserController.profile
);

router.put(
  '/changepassword',
  verifyJWTToken,
  confirmPassword,
  UserController.changePassword
);

router.put(
  '/:id',
  verifyJWTToken,
  UserController.edit
);

router.delete(
  '/:id',
  verifyJWTToken,
  UserController.delete
);

module.exports = router;
