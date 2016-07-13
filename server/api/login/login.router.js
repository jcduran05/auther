var router = require('express').Router();
var HttpError = require('../../utils/HttpError');
// var Story = require('./story.model');
var User = require('../users/user.model');
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

Passport.use('local-login', new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true
},

function(req, email, password, done){
	// console.log('checking vars ', req, email, password);
	// console.log('beginning of function. ', req.body)

	User.findOne({
		where: {
			email: email
		}
	})
	.then(function(user) {
		if (!user) return done(new Error('Email doesnt exist'));

		if (user.password !== password) return done(new Error('Passowrd is incorrect'))

		return done(null, user);
	})
	.catch(done);

})
)

router.post('/', function(req, res, next) {
		Passport.authenticate('local-login', function(err, user, info) {
			if (err) { return next(err) }

			if (!user) { return res.redirect('/login') }

			req.login(user, function(err) {
				console.log('made it login');
				if (err) {
					console.log('made it to error ', err);
					return next(err);
				}

				return res.redirect('/');
			});

		})(req,res,next);
});

// //Serialize sessions
// Passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// Passport.deserializeUser(function(id, done) {
//   User.findOne({where: {id: id}})
//   .then(function(user){
//     done(null, user);
//   })
//   .catch(function(err){
//     done(err, null);
//   });
// });


// {
// 		successRedirect : '/',
// 		failureRedirect : '/',
// 		failureFlash : true
// 	}

 // router.post('/', function(req, res, next){
 //  	var password = req.body.password
 //  	var email = req.body.email
 //  	User.findOne({
 //  		where: req.body
 //  	})
 //  	.then(function(data){
 // -		console.log(data)
 // -		if(!data){
 // +		if (!data){
 //  			res.sendStatus(401);
 //  		} else {
 //  			req.session.userId = data.id;

 //  			req.login(data, function(err) {
 //  				if (err) { return next(err); }
 //  				return res.redirect('/users/' + req.data.email);
	// 			});

 // +			console.log('this is req.sess ', req.session);
 //  			res.sendStatus(204);
 //  		}
 //  	})
 //  	.catch(next);
 //  });

module.exports = router
