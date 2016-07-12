var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model')



router.post('/', function(req, res, next){
	User.findOne({
		where: req.body
	})
	.then(function(user){
		if(user){
			res.send('User Exisits')
			res.sendStatus(401);
		}else{
			User.create(req.body)
			.then(function(newUser){
				req.session.userId = newUser.id;
				res.sendStatus(204)
			})
		}
	})
})


module.exports = router