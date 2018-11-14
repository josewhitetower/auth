const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('../models/user');
const config = require('../config/db');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
	passport.use(new LocalStrategy({usernameField: 'email',},(email, password, done)=>{
		//Match usernama
		User.findOne({email})
			.exec()
			.then((user) => {
				bcrypt.compare(password, user.password, (err, isMatch)=> {
					if (err) {throw err;}
					if(isMatch){
						return done(null,user);
					}
					return done(null, false);
				});
			})
			.catch(err => done(err));
	}));

	passport.serializeUser((user, done)=> {
		done(null, user.id);
	});
      
	passport.deserializeUser((id, done)=> {
		User.findById(id, (err, user)=> {
			done(err, user);
		});
	});

	passport.use(new JWTStrategy({
		jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
		secretOrKey   : config.secret
	},
	(jwt_payload, done)=> {
		User.findById(jwt_payload.id)
			.exec()
			.then(user => done(null, user))
			.catch(err => done(err));
	}
	));
};