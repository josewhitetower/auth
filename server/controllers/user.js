const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
const passport = require('passport');

const User = require('../models/user');
const config = require('../config/db');

function jwtSignUser(user) {
	const EIGTH_HOURS = 60 * 60 * 8;
	return jwt.sign(user, config.secret, {
		expiresIn: EIGTH_HOURS,
	});
}

module.exports = {
	all(req, res){
		User.find()
			.then((users) => {
				if (users.length) {
					res.status(200).json({
						users,
						isAuthenticated: req.isAuthenticated(),
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
			return res.status(422).json({ errors: errors.array() });
		}

		const {	email, password, firstName, lastName } = req.body;
		User.findOne({ email })
			.then((user) => {
				if (user) {
					return res.status(403).json({
						errors: [{msg:'Email already in use'}],
					});
				}
				const newUser = new User({
					email, password,firstName, lastName					
				});
				if (req.file) {
					newUser.userImage = req.file.path;
				}
				bcrypt.genSalt(10, (_, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) {
							console.log('BCRYPT HASH ERROR',err);
						}
						newUser.password = hash;

						newUser.save((err) => {
							if (err) {
								res.status(500).json({
									errors: [{msg:'Problem saving user'}],									
									err,
								});
								throw err;
							} else {
								req.login(newUser, (err) => { // login after register
									if (err) throw err;
									const token = `JWT ${jwtSignUser({ id: newUser._id })}`;
									
									res.status(201).json({
										user: newUser,
										token,
										isAuthenticated: req.isAuthenticated(),
										message: {
											type: 'success',
											text: `User "${req.user.firstName}" created succesfully`,
										},
									});
								});
							}
						});
					});
				});
			})
			.catch((err) => { throw err; });
	},
    
	login(req, res) {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		passport.authenticate('local', { session: false }, (err, user) => {
			if (err || !user) {
				return res.status(400).json({
					errors: [{msg: 'Unsuccesful login, please check your credentials'}]
				});
			}
			req.login(user, { session: false }, (err) => {
				if (err) {
					res.status(400).json({
						errors: [{msg: 'Unsuccesful login, please check your credentials'}]
					});
				}
				// generate a signed son web token with the contents of user object and return it in the response
				const token = `JWT ${jwtSignUser({ id: user._id })}`;
				return res.status(200).json({
					user,
					token,
					isAuthenticated: req.isAuthenticated(),
					message: {
						type: 'success',
						text: `Hi ${user.firstName}, you are succesfully logged in`,
					},
				});
			});
		})(req, res);
	},
    
	profile(req, res){
		res.status(200).json({ user: req.user, isAuthenticated: req.isAuthenticated() });
	},
    
	edit(req, res){
		User.findByIdAndUpdate(req.params.id, req.body, {new:true})
			.then(user => res.status(200).json({
				user,
				message: {
					type: 'success',
					text: 'User succesfully updated',
				},}))
			.catch(err => res.send({err: err}));
	},
    
	delete(req, res){
		User.findByIdAndRemove(req.params.id)
			.then(user => res.status(200).json({
				user, 
				message: {
					type: 'success',
					text: `User "${user.firstName}" deleted succesfully`,
				}}))
			.catch(err => res.send({err: err}));
	},

	changePassword(req, res) {
		const {newPassword} = req.body;
		User.findById(req.body._id)
			.then(user => {
				bcrypt.genSalt(10, (_, salt) => {
					bcrypt.hash(newPassword, salt, (err, hash) => {
						if (err) {
							console.log('BCRYPT HASH ERROR',err);
						}
						user.password = hash;
						console.log('USER',user);
						user.save((err) => {
							if (err) {
								res.status(500).json({
									errors: [{msg:'Problem saving user'}],									
									err,
								});
								throw err;
							}
							else {
								res.status(200).json({
									user,
									message: {
										type: 'success',
										text: 'Password changed succesfully',
									}
								});
							}
						});
					});
				});
			});
	}		
};