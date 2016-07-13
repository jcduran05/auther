'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./login/login.router'));

router.use('/signup', require('./signup/singup.router'));

router.use('/logout', require('./logout/logout.router'));

// router.use('/auth', require('./auth/auth.router'));

router.get('/auth', function(req, res, next){
  req.session.userId
  console.log(req.session.userId);
  res.send('done')
})

module.exports = router;
