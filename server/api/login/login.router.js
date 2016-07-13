var router = require('express').Router();
var HttpError = require('../../utils/HttpError');
// var Story = require('./story.model');
var User = require('../users/user.model');
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


Passport.use('local-login', new LocalStrategy({
		
		usernameField : 'email',
		passwordField : 'password'
		},
		
		function(req, email, password, done){
			User.findOne({
		where: req.body
			}, function(err ,user){
				if (err){ return done(err)}
				if(!email){ 
					return done(null, false, {message: 'no email'})
				}
				console.log(user)
				return done(null ,user)
				}
			)
	})
)


router.post('/', Passport.authenticate('local-login', {
	successRedirect : '/stories',
	failureRedirect : '/login'
	}));



module.exports = router
