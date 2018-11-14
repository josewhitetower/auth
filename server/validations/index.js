
module.exports = {
	register: (check) => {

		return [
			check('email')
				.isEmail()
				.withMessage('Email is not valid')
				.not()
				.isEmpty()
				.withMessage('Email is required')
				.trim()
				.normalizeEmail(),
			check('firstName', 'First name is required').not().isEmpty().trim(),
			check('lastName', 'Last is required').not().isEmpty().trim(),
			check('password', 'Password is required').not().isEmpty()
				.custom((value, { req }) => (value !== req.body.confirmPassword ? false : value))
				.withMessage('Passwords don\'t match')
				.trim(),
		];
	},

	login: (check) => {
		return [
			check('password', 'Password is required').not().isEmpty()
				.trim(),
			check('email')
				.isEmail()
				.withMessage('Email is not valid')
				.not()
				.isEmpty()
				.withMessage('Email is required')
				.trim()
				.normalizeEmail(),
		];
	}
	
};