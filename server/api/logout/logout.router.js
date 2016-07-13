var router = require('express').Router();
var HttpError = require('../../utils/HttpError');

var User = require('../users/user.model')

router.get('/', function(req, res, next){
	// User.findOne({
	// 	where: req.body
	// })
	// .then(function(user){
	// 	if(user.googleId){
	// 		req.logout()
	// 	} else{
	// 		req.session.userId = null;
	// 	}
	// })
	// req.session.userId = null;
	console.log('before', req.session)
	req.logout();
	console.log('after', req.session)

	
	res.send('done')
})

module.exports = router
