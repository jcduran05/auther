var router = require('express').Router();
var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');
var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy({
    clientID: '478538246546-5rk3qsa7rv8df0f4rllavkpej73r88im.apps.googleusercontent.com',
    clientSecret: 'z1mKnO7WD1mVMBZqXP3OsULR',
    callbackURL: '/auth/google/callback'
  },

  // Google will send back the token and profile
  function (token, refreshToken, profile, done) {
    // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
    var info = {
      name: profile.displayName,
      email: profile.emails[0].value,
      photo: profile.photos ? profile.photos[0].value : undefined
    };

    User.findOrCreate({ where: {googleId: profile.id}, defaults: info})
    .spread(function(user) {
  
      return done(null, user);
    })
    .catch(done);

  })
);

passport.serializeUser(function(user, done) {
    console.log(user);
        done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Google authentication and login
router.get('/google', passport.authenticate('google', { scope : 'email' }));

// handle the callback after Google has authenticated the user
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect : '/', // or wherever
    failureRedirect : '/' // or wherever
  })
);

module.exports = router;
